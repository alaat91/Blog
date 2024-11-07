using GraphQL.Types;

public class PostType : ObjectGraphType<Post>
{
    public PostType(UserService userService)
    {
        Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the post.");
        Field(x => x.Title).Description("The title of the post.");
        Field(x => x.Content).Description("The content of the post.");
        Field(x => x.ImageUrl).Description("The image URL of the post.");
        Field(x => x.CreatedAt, type: typeof(DateTimeGraphType)).Description("The date the post was created.");
        Field(x => x.UpdatedAt, type: typeof(DateTimeGraphType)).Description("The date the post was last updated.");

        // Resolve creator field with injected userService
        Field<UserType>("creator", resolve: context => userService.GetUserById(context.Source.Creator));
    }
}

