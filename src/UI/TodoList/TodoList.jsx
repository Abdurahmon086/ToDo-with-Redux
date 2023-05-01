import del from '../../../public/delet.svg'
import pen from '../../../public/pen.svg'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../actions'
import { useState } from 'react'

function TodoList() {
    const { list } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className='todo-list container' style={list.length > 0 ? { display: "block" } : { display: "none" }}>
            <div className="todo-list__wrapper">
                <ul className="todo-list__list">
                    {
                        list.map(el => {
                            return <li key={el.id} className="todo-list__item"><input type="checkbox" onClick={() => dispatch(clickTodo(el.id, true))} /><p className='todo-list__text'>{el.data}</p> <div className='todo-list__inner'> <img src={pen} alt='pen icon' className='todo-list__img' /><img src={del} alt='delete icon' className='todo-list__img' onClick={() => dispatch(deleteTodo(el.id))} /></div></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList