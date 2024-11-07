using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using BCrypt.Net;
using dotnetApp.Models;
using System.Threading.Tasks;
using MongoDB.Driver;

public class AuthService
{
    private readonly UserService _userService;
    private readonly IConfiguration _configuration;
    private readonly IMongoCollection<User> _users;
    public AuthService(UserService userService, IConfiguration configuration)
    {
        _userService = userService;
        _configuration = configuration;
        

    }
    public string GenerateJwtToken(string userId)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new[] { new Claim("id", userId) }),
            Expires = DateTime.UtcNow.AddDays(7), // Set token expiration as desired
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
    
    public async Task<AuthPayload> Signup(UserDto userDto)
    {
        var user = new User
        {
            Email = userDto.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password),
            Name = userDto.Name
        };
        await _users.InsertOneAsync(user);

        var token = GenerateJwtToken(user.Id);
        return new AuthPayload
        {
            Token = token,
            UserId = user.Id
        };
    }


    public async Task<AuthPayload> Login(LoginDto loginDto)
    {
        var user = await _users.Find(u => u.Email == loginDto.Email).FirstOrDefaultAsync();
        if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
        {
            throw new UnauthorizedAccessException("Invalid credentials.");
        }

        var token = GenerateJwtToken(user.Id); // Ensure `GenerateJwtToken` is implemented
        return new AuthPayload
        {
            Token = token,
            UserId = user.Id
        };
    }

}
