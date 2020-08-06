import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';

const AddPostForm = props => {
    const [value, setValue] = useState('');

    let {AddPostHandler} = useContext(MyContext);

        return (
            <div>
                <span>
                    <input 
                        type="text"
                        onChange={(event) => setValue(event.target.value)} 
                        value={value}
                    />
                </span>
                <button onClick={AddPostHandler}>POST</button> 


            </div>
        )
}

export default AddPostForm;



// addTaskHandler = () => {
//     const tasks = [...this.state.tasks];
//     tasks.push({
//       id: uuidv4(),
//       title: this.state.newTask,
//       completed: false
//     });

//     this.setState({
//       tasks,
//       newTask: ''
//     })
//   };

//   inputNewTaskHandler = (event) => {
//      this.setState({
//        newTask: event.target.value,
//      });
//   };