import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
 }       

    const handlePasswordOnchange = e => {
    console.log(e.target.value);
    
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"   placeholder='Email' />
                <br />
                <input type="password" name="password" placeholder='Password' defaultValue={password} onChange={handlePasswordOnchange} />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ControlledField;