using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Post
{
    [BsonId]
    public ObjectId Id { get; set; }
    
    public string Title { get; set; }
    
    public string ImageUrl { get; set; }
    
    public string Content { get; set; }
    
    public ObjectId Creator { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; }
}
