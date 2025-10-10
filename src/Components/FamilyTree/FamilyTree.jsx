import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'


export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'diamond';
    const newAssest = 'gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAssest}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;