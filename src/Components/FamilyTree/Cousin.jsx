import React, { useContext } from 'react';
import Special from './Special';
import Friend from './Friend';
import { MoneyContext } from './FamilyTree';

const Cousin = ({ name, asset }) => {
    
   


    return (
        <div>
            <h2>{name}</h2>

            {
                name === 'tom tom' && <Special asset={asset}></Special>
            }
            {
                name === 'joo joo' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;