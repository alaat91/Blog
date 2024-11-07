using GraphQL.Types;

public class PostInputType : InputObjectGraphType
{
    public PostInputType()
    {
        Name = "PostInput";
        Field<NonNullGraphType<StringGraphType>>("title");
        Field<StringGraphType>("content");
        Field<StringGraphType>("imageUrl");
    }
}

