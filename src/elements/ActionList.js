import React from 'react';
import '../App.css'

function ActionList(props) {
    let actions = props.actions

    return (
        <div className="ListDisplay">
            <div className="ListDisplay-body">
                <ul>
                    {actions.map((action, idx) =>
                        <li key={idx}>{action}</li>
                    )}
                </ul>
            </div>
            <div className="ListDisplay-footer">
                <button>Add Todo</button>
                <input type="text" />
            </div>
        </div>
    )
}

export default ActionList