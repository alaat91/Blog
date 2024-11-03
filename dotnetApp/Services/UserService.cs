using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using dotnetApp.Data;
using dotnetApp.Models;

public class UserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<User> GetUserByIdAsync(Guid userId)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
    }

    public async Task<User> GetUserByEmailAsync(string email)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User> CreateUserAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }

    public async Task<string> GetUserStatusAsync(Guid userId)
    {
        var user = await _context.Users.FindAsync(userId);
        return user?.Status;
    }

    public async Task<bool> UpdateUserStatusAsync(Guid userId, string status)
    {
        var user = await _context.Users.FindAsync(userId);
        if (user == null) return false;

        user.Status = status;
        await _context.SaveChangesAsync();
        return true;
    }
}
