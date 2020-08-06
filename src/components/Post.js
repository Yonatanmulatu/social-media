import React, { useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Router, Link, Route} from 'react-router-dom';

const Post = props => {


        return (
            <div>
                <h4>{props.title}</h4>
                <p>{props.body}</p>
                <CommentList comments = {props.comments} DeletePostHandler = {props.DeletePostHandler} id={props.id} userId={props.userId} DeleteCommentHandler = {props.DeleteCommentHandler}/>
                <AddComment AddCommentHandler = {props.AddCommentHandler} id={props.id}/>
            </div>
        )

}

export default Post;