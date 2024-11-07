using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class User
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonRequired]
    public string Email { get; set; }

    [BsonRequired]
    public string Password { get; set; }

    [BsonRequired]
    public string Name { get; set; }

    public string Status { get; set; } = "I am new!";
    public List<ObjectId> Posts { get; set; } = new List<ObjectId>();
}
