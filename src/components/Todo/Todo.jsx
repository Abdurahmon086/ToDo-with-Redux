import React, { useEffect, useState } from 'react'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'

function Todo() {
    const dispatch = useDispatch()
    const { text, todo } = useSelector((state) => state)
    

    if (text && !todo.includes(text)) {
        dispatch({ type: 'todo', payload: text })
    }
    const addText = (e) => {
        e.preventDefault()
        dispatch({ type: 'text', payload: e.target.todo.value })
        e.target.todo.value = ''
    }

    return (
        <div className='todo container'>
            <div className="todo__wrapper">

                <h1 className='todo__text'>To Do</h1>

                <form className='todo__form form' onSubmit={(e) => addText(e)}>
                    <div className="form__inner">
                        <input name="todo" type="text" className='form__input' />
                    </div>

                    <button type="submit" className='form__btn' >Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Todo