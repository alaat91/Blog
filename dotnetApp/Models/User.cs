using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class User
{
    [BsonId]
    public ObjectId Id { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public string Name { get; set; }

    public string Status { get; set; } = "I am new!";

    public List<ObjectId> Posts { get; set; } = new List<ObjectId>();
}
