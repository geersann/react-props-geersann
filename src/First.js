import React from 'react';

function First({ items }) {
    return (
        <ul>
            {items.length > 0 && (
                <li style={{listStyle: 'none'}} key={items[0]}>
                    {items[0]}
                </li>
            )}
        </ul>
    );
};
export default First;