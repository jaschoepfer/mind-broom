import React from 'react';
import './ActionList.css';

function ActionList(props) {
    let actions = props.actions

    return (
        <ul className='ActionList'>
            {actions.map((action, idx) =>
                 <li key={idx}>{action}</li>   
            )}
        </ul>
    )
}

export default ActionList