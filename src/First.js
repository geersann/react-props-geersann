import React from 'react';

function First({ item }) {
    return (
        <ul>
            <li style={{listStyle: 'none'}}>
                {item}
            </li>
        </ul>
    );
};
export default First;