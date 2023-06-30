import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

const AddTask = (props) => {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.AddItem({
            id: uuidv4(),
            title: title,
            isCompleted: false,
        });
        setTitle('');
    };

    return (
        <>
            <form className='formStyle' onSubmit={handleSubmit}>
                <input
                    type='text'
                    id='TaskForm'
                    value={title}
                    placeholder='Enter Task'
                    onChange={handleChange}
                />
                <button type='submit'>Add Task</button>
            </form>
        </>
    );
};

export default AddTask;
