import React, { useRef } from 'react';

const UncontrolledFeild = () => {

    const eamilRef = useRef('');
    const passwordRef = useRef('')


    const handleSubmit = e => {
        e.preventDefault();
       
        const email = eamilRef.current.value;
        const passowrd = passwordRef.current.value;

         console.log(email, passowrd);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input ref={eamilRef} type="email" name="" />
                <br />
                <input ref={passwordRef} type="password" name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledFeild;