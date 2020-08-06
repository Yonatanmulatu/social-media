import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm';
import CommentList from './components/CommentList';
import AddComment from './components/AddComment';
import {uuid} from 'uuidv4';
import { Router, Link, Route} from 'react-router-dom';
import Posts from './components/Posts';

class App extends Component {

  state = {
    sample: "hello world",
    previousPosts: [
      {
        "userId": 1,
        "id": uuid(),
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        comments: [{id: uuid(),"title" : "comment 1", userId: 1},
                   {id: uuid(),"title" : "second comment", userId: 1}] 
      },
      {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        comments: [] 
      },
      {
        "userId": 3,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        comments: [] 
      },
      {
        "userId": 4,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        comments: [] 
      },
      {
        "userId": 5,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        comments: [] 
      }
    ]
  }

  AddPostHandler = () => {
    const newPosts = [...this.state.previousPosts]
    newPosts.push({
        userId: 1,
        id: 1,
        title: "this.state.value",
        body:"",
        comments:[]
    })
    this.setState ({
      previousPosts: newPosts,
    })
  }

  AddCommentHandler = (id, value) => {
    let updatedPosts = [...this.state.previousPosts]
    updatedPosts = updatedPosts.map(previousPost => {
      if(previousPost.id == id) {
        previousPost.comments.push({id: uuid(),"title" : value, userId: 1})
      }
      return previousPost;
    })
    this.setState ({
      previousPosts: updatedPosts,
    })
  }

  DeletePostHandler = (id) => {
      let newPosts = this.state.previousPosts.filter(previousPost => {
      return previousPost.id !== id 
      });
      this.setState ({
        previousPosts: newPosts
      })
    }
  
  DeleteCommentHandler = (postId, commentId) => {
    console.log(postId, commentId);
    let newPosts = [...this.state.previousPosts]
    newPosts = newPosts.map(previousPost => {
      if(postId == previousPost.id) {
        previousPost.comments = previousPost.comments.filter(comment => {
          return commentId !== comment.id
        });
      }
      return previousPost
    });
    this.setState ({
      previousPosts: newPosts
    });
  }
  
  render () {
    return (
    
        <div className="App">
          <Link to="/">Home |</Link> 
          <Link to="/posts">Post |</Link>
          <Link to="/addPost">Create Post</Link>
          <Route path="/" exact>
            <h2>Home Page</h2>
            <p>lorem ipsum...</p>
          </Route>

          <Route path="/addpost">
            <AddPostForm AddPostHandler={this.AddPostHandler}/>
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>
        </div>

    );
  }
}

export default App;
