import React from 'react';
import Special from './Special';

const Cousin = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>

            {
                name === 'tom tom' && <Special></Special>
            }
        </div>
    );
};

export default Cousin;