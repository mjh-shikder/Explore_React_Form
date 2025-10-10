import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'


export const AssetContext = createContext('');

export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);
    


    const asset = 'diamond';
    const newAssest = 'gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h3>Total Family Money: {money} </h3>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAssest}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
           </MoneyContext>
        </div>
    );
};

export default FamilyTree;


/**
 * 1. Create a context usign createContext witha a defalut value make sure you export the context to be used in other files. 
 * 
 */