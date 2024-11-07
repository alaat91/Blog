using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

public class JwtMiddleware
{
    private readonly RequestDelegate _next;
    private readonly IConfiguration _configuration;
    private readonly IMongoCollection<User> _users;

    public JwtMiddleware(RequestDelegate next, IConfiguration configuration, IMongoClient client)
    {
        _next = next;
        _configuration = configuration;
        var database = client.GetDatabase("messages");
        _users = database.GetCollection<User>("users");
    }

    public async Task Invoke(HttpContext context)
    {
        var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
        if (token != null)
        {
            var userId = ValidateToken(token);
            if (userId != null)
            {
                var user = await _users.Find(u => u.Id == ObjectId.Parse(userId)).FirstOrDefaultAsync();
                if (user != null)
                {
                    var claims = new[] { new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()) };
                    var identity = new ClaimsIdentity(claims, "jwt");
                    context.User = new ClaimsPrincipal(identity);
                }
            }
        }
        await _next(context);
    }

    private string ValidateToken(string token)
    {
        try
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validatedToken);

            var jwtToken = (JwtSecurityToken)validatedToken;
            return jwtToken.Claims.First(x => x.Type == "id").Value;
        }
        catch
        {
            return null;
        }
    }
}
