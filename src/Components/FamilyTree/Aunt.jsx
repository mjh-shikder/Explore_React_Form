import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({ asset }) => {
    

    const [money, setMoney] = useContext(MoneyContext);


    return (
        <div>
            <h2>Aunt </h2>

            <section className='flex'>
                <Cousin asset={asset} name={'tom tom'}></Cousin>
                <Cousin name={'joo joo'}></Cousin>
                <button onClick={()=> setMoney(money + 5000)}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;