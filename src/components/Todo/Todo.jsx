import React, { useEffect, useState } from 'react'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../actions'

function Todo() {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    // const addText = (e) => {
    //     e.preventDefault()
    //     setText(e.target.todo.value)
    //     e.target.todo.value = ''
    // }

    return (
        <div className='todo container'>
            <div className="todo__wrapper">

                <h1 className='todo__text'>To Do</h1>

                <div className='todo__form form'>
                    <div className="form__inner">
                        <input name="todo" type="text" value={text} onChange={(e) => setText(e.target.value)} className='form__input' />
                    </div>

                    <button type="submit" className='form__btn' onClick={() => dispatch(addTodo(text), setText(''))}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Todo