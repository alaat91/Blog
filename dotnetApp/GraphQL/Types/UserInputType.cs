using GraphQL.Types;

public class UserInputType : InputObjectGraphType
{
    public UserInputType()
    {
        Name = "UserInput";
        Field<NonNullGraphType<StringGraphType>>("email");
        Field<NonNullGraphType<StringGraphType>>("password");
        Field<StringGraphType>("name");
    }
}


