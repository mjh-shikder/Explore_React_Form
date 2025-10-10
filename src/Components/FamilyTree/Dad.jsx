import React from 'react';
import Myself from './Myself';
import Bro from './Bro';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex '>
                <Myself></Myself>
                <Bro></Bro>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;