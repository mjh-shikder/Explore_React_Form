 import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name, asset }) => {
    
 const newAsset = useContext(AssetContext)

console.log('new asset', newAsset);

    return (
        <div>
            <h2>Special : {name}</h2>
            <h2>Asset: {asset} </h2>
            <p>New Assets: {newAsset} </p>
        </div>
    );
};

export default Special;