import { FaTrash, FaCheck } from 'react-icons/fa';
import '../App.css';
const Tasks = (props) => {
    return (
        <div className='todoList'>
            {props.items.map((item, index) => (
                <div key={index} className={`task ${item.isCompleted ? 'completed' : ''}`}>
                    <span className='item' >{item.title}</span>
                    <div className="icons">
                        <FaTrash className="delete-icon" onClick={() => props.DeleteItem(item.id)} />
                        {!item.isCompleted && (
                            <FaCheck className="complete-icon" onClick={() => props.TaskDone(item.id)} />
                        )}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Tasks
