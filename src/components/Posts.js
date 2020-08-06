import React, { useContext } from "react";
import MyContext from '../MyContext';
import { Router, Link, Route} from 'react-router-dom';
import Post from './Post';


const Posts = props => {

    let {previousPosts} = useContext(MyContext);

        return (
            <div>
            {
                previousPosts.map(previousPost => {
                return <div>
                            <Link to={"/posts/"+previousPost.id}>Post</Link>
                            <Route path={"/posts/"+previousPost.id}>
                            <Post title = {previousPost.title} body = {previousPost.body} comments = {previousPost.comments} id={previousPost.id} userId={previousPost.userId}/>
                            </Route>
                        </div>
                })
            }
            </div>
        )
}

export default Posts;