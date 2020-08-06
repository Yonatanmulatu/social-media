import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';

const AddComment = props => {
    const [value, setValue] = useState('');
    let {AddCommentHandler} = useContext(MyContext);

    const AddCommentBtnClickHandler = () => {
        AddCommentHandler(props.id, value);
    }

        return (
            <div>
                {props.comments}
                <div><strong>Comments</strong></div>
                <div>
                    <input name="comment" placeholder="Add a new comment" onChange={(event) => setValue(event.target.value)}/>
                </div>
                <button onClick={AddCommentBtnClickHandler}> Add Comment</button> 
            </div>
        )
}

export default AddComment;