using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;

public class UserService
{
    private readonly IMongoCollection<User> _users;

    public UserService(IMongoClient client)
    {
        var database = client.GetDatabase("messages");
        _users = database.GetCollection<User>("users");
    }

    public async Task<User> GetUserByIdAsync(string userId)
    {
        if (ObjectId.TryParse(userId, out var objectId))
        {
            return await _users.Find(u => u.Id == objectId).FirstOrDefaultAsync();
        }
        return null; // Return null if the userId is invalid
    }

    public async Task<User> GetUserByEmailAsync(string email)
    {
        return await _users.Find(u => u.Email == email).FirstOrDefaultAsync();
    }

    public async Task CreateUserAsync(User user)
    {
        user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
        await _users.InsertOneAsync(user);
    }

    public async Task<string> GetUserStatusAsync(string userId)
    {
        var user = await GetUserByIdAsync(userId);
        return user?.Status; // Return the user's status or null if not found
    }

    public async Task<bool> UpdateUserStatusAsync(string userId, string newStatus)
    {
        var update = Builders<User>.Update.Set(u => u.Status, newStatus);
        var result = await _users.UpdateOneAsync(u => u.Id == ObjectId.Parse(userId), update);
        return result.ModifiedCount > 0;
    }
}
