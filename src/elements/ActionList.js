import React, { useState } from 'react';

function ActionList(props) {
    let actions = props.actions

    return (
        <div style={listStyle}>
            <div style={listBodyStyle}>
                <ul>
                    {actions.map((action, idx) =>
                        <li key={idx}>{action}</li>
                    )}
                </ul>
            </div>
            <div style={listFooterStyle}>
                <AddItemForm addItem={props.addTodo}/>
            </div>
        </div>
    )
}

function AddItemForm(props) {
    const [itemText, updateItemText] = useState('')
    function handleTextChange(event){
        updateItemText(event.target.value)
    }
    function handleSubmit(event){
        props.addItem(itemText)
        updateItemText('')
    }

    return (
        <div style={{height: '100%'}}>
            <button onClick={handleSubmit}>Add Todo</button>
            <input value={itemText} type="text" onChange={handleTextChange}/>
        </div>
    )
}


const listStyle = {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column'
}

const listBodyStyle = {
    'overflow-y': 'scroll',
    'flex-grow': '1'
}

const listFooterStyle = {
    'background-color': '#282c34',
    'min-height': '10vh'
}

export default ActionList