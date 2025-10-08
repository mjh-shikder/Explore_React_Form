import React from 'react';
import useInputField from '../Hooks/useInputFeild';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name, email );
        
}

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" defaultValue={name} onChange={nameOnChange} />
                <br />
                <input type="email" onChange={emailOnChange} name="email" id="" />
                <input type="submit"  value="submit" />
            </form>
        </div>
    );
};

export default HookForm;