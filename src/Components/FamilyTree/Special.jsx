import React from 'react';

const Special = ({name, asset}) => {
    return (
        <div>
            <h2>Special : {name}</h2>
            <h2>Asset: {asset} </h2>
        </div>
    );
};

export default Special;