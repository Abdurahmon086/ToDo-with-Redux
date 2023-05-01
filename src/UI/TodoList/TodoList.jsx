import del from '../../../public/delet.svg'
import pen from '../../../public/pen.svg'
import './index.scss'
import { useSelector } from 'react-redux'

function TodoList() {
    const { todo } = useSelector(state => state)
    return (
        <div className='todo-list container' style={todo.length > 0 ? {display : "block"} : {display: "none"}}>
            <div className="todo-list__wrapper">
                <ul className="todo-list__list">
                    {
                        todo.map(el => {
                            return <li className="todo-list__item"><input type="checkbox" /><p className='todo-list__text'>{el}</p> <div className='todo-list__inner'> <img src={pen} alt='pen icon' className='todo-list__img' /><img src={del} alt='delete icon' className='todo-list__img' /></div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList