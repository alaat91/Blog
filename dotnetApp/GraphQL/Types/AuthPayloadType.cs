using GraphQL.Types;
using dotnetApp.Models; // Add this line to access AuthPayload in Models

public class AuthPayloadType : ObjectGraphType<AuthPayload>
{
    public AuthPayloadType()
    {
        Name = "AuthPayload";
        Field(x => x.Token).Description("The authentication token.");
        Field(x => x.UserId).Description("The user ID.");
    }
}

