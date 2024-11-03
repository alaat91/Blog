using GraphQL.Types;

public class PostInputType : InputObjectGraphType
{
    public PostInputType()
    {
        Name = "PostInput";
        Field<NonNullGraphType<StringGraphType>>("title");
        Field<NonNullGraphType<StringGraphType>>("content");
        Field<NonNullGraphType<StringGraphType>>("imageUrl");
    }
}
