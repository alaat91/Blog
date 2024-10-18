import React, { Component } from "react";

import Image from "../../../components/Image/Image";
import "./SinglePost.css";

class SinglePost extends Component {
  state = {
    title: "",
    author: "",
    date: "",
    image: "",
    content: "",
  };

  componentDidMount() {
    // REST route http://localhost:8080/feed/post/${postId}`
    const postId = this.props.match.params.postId;
    console.log("postId react: ", postId);
    const graphqlQuery = {
      query: `
      {
        viewPost(id: "${postId}") {
            title
            creator {
              name
                }
            imageUrl
            content
            createdAt
        }
      }
    `,
    };
    fetch("http://localhost:8080/graphql", {
      headers: {
        authorization: "Bearer " + this.props.token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(graphqlQuery),
    })
      .then((res) => {
        // if (res.status !== 200) {
        //   throw new Error("Failed to fetch status");
        // }
        return res.json();
      })
      .then((resData) => {
        if (resData.errors) {
          throw new Error("Fetching post failed!");
        }
        console.log("singlePostData:", resData);
        this.setState({
          title: resData.data.viewPost.title,
          author: resData.data.viewPost.creator.name,
          image: "http://localhost:8080/" + resData.data.viewPost.imageUrl,
          date: new Date(resData.data.viewPost.createdAt).toLocaleDateString(
            "en-US"
          ),
          content: resData.data.viewPost.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="single-post">
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
        <div className="single-post__image">
          <Image contain imageUrl={this.state.image} />
        </div>
        <p>{this.state.content}</p>
      </section>
    );
  }
}

export default SinglePost;
