import React from 'react';

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
                <button>Add Todo</button>
                <input type="text" />
            </div>
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