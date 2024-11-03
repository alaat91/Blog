using GraphQL.Types;

public class UserType : ObjectGraphType<User>
{
    public UserType()
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the user.");
        Field(x => x.Name).Description("The name of the user.");
        Field(x => x.Email).Description("The email of the user.");
        Field(x => x.Status).Description("The status of the user.");
        Field<ListGraphType<PostType>>("posts", resolve: context => postService.GetPostsByUser(context.Source.Id));
    }
}
