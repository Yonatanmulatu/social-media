import React, {useContext} from 'react';
import MyContext from '../MyContext';

const CommentList = (props) => {
    let data = useContext(MyContext);
    let {DeletePostHandler} = useContext(MyContext);
    let {DeleteCommentHandler} = useContext(MyContext);
    // state= {
    //     value: "",
    // }

    const DeletePostBtnClickHandler = () => {
        console.log(props.id);
        DeletePostHandler(props.id);
    }
    

        let display = "";
  
        if (props.userId == 1) {
            display = <div>
                    <div><strong>Comments</strong></div>
                    <button onClick={DeletePostBtnClickHandler}>Delete Post</button>
                        </div>
        }
            
        return (
            <div>
            {data.sample}
            {
                props.comments.map(comment => {
                return <div>
                            {comment.title}
                            {
                        comment.userId == 1 ?
                         <button onClick={() => DeleteCommentHandler(props.id, comment.id)}>Delete Comment</button>
                        : ""
                            }
                       </div>
                })
            }
            {display}
            </div>

        )
}

export default CommentList;


