using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;
using System.Collections.Generic;
using dotnetApp.Models;

public class PostService
{
    private readonly IMongoCollection<Post> _posts;
    private readonly IMongoCollection<User> _users;

    public PostService(IMongoClient client)
    {
        var database = client.GetDatabase("messages");
        _posts = database.GetCollection<Post>("posts");
        _users = database.GetCollection<User>("users");
    }

    public async Task<List<Post>> GetPosts(int page, int pageSize)
    {
        return await _posts.Find(_ => true)
            .Skip((page - 1) * pageSize)
            .Limit(pageSize)
            .SortByDescending(p => p.CreatedAt)
            .ToListAsync();
    }

    public async Task<Post> GetPostById(string postId)
    {
        if (ObjectId.TryParse(postId, out var objectId))
        {
            return await _posts.Find(p => p.Id == objectId).FirstOrDefaultAsync();
        }
        return null;
    }

    public async Task CreatePost(Post post)
    {
        await _posts.InsertOne(post);

        // Update user's post list
        var userId = post.Creator;
        var update = Builders<User>.Update.Push(u => u.Posts, post.Id);
        await _users.UpdateOne(u => u.Id == userId, update);
    }

    public async Task<bool> UpdatePost(string postId, Post updatedPost, string userId)
    {
        var post = await GetPostById(postId);
        if (post == null || post.Creator != ObjectId.Parse(userId))
            return false; // Post not found or user is not the creator

        var update = Builders<Post>.Update
            .Set(p => p.Title, updatedPost.Title)
            .Set(p => p.Content, updatedPost.Content)
            .Set(p => p.ImageUrl, updatedPost.ImageUrl)
            .Set(p => p.UpdatedAt, DateTime.UtcNow);

        var result = await _posts.UpdateOne(p => p.Id == post.Id, update);
        return result.ModifiedCount > 0;
    }

    public async Task<bool> DeletePost(string postId, string userId)
    {
        var post = await GetPostById(postId);
        if (post == null || post.Creator != ObjectId.Parse(userId))
            return false;

        var result = await _posts.DeleteOne(p => p.Id == post.Id);
        if (result.DeletedCount > 0)
        {
            // Remove the post from the user's post list
            var update = Builders<User>.Update.Pull(u => u.Posts, post.Id);
            await _users.UpdateOne(u => u.Id == ObjectId.Parse(userId), update);
            return true;
        }
        return false;
    }
}
