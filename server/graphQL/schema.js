const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    input postInputData {
        title: String!
        content: String!
        imageUrl: String!
    }
    
    
    type authCredintials {
        token: String!
        userId: String!
    }

    type rootMutation{
        createUser(userInput: UserInputData): User!
        createPost(postInput: postInputData): Post!
        updatePost(id: ID!, postInput: postInputData): Post!
        deletePost(id: ID!): Boolean
        updateUserStatus(status: String!): User!
        
        
    }
    type rootQuery{
        login(email: String!, password: String!): authCredintials!
        getPosts(page: Int!): PostData!
        viewPost(id: ID!): Post!
        getUserStatus: User!
    }
    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
//
