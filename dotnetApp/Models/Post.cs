using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Post
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonRequired]
    public string Title { get; set; }

    [BsonRequired]
    public string Content { get; set; }

    [BsonRequired]
    public string ImageUrl { get; set; }

    [BsonRequired]
    public ObjectId Creator { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
