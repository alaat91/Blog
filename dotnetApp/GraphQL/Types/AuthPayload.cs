using GraphQL.Types;

namespace dotnetApp.GraphQL.Types
{
    public class AuthPayloadType : ObjectGraphType<AuthPayload>
    {
        public AuthPayloadType()
        {
            Field(x => x.Token).Description("JWT token.");
            Field(x => x.UserId).Description("Authenticated user ID.");
        }
    }
}
