import React from 'react';

function ActionList(props) {
    let actions = props.actions

    return (
        <ul>
            {actions.map((action, idx) =>
                 <li key={idx}>{action}</li>   
            )}
        </ul>
    )
}

export default ActionList