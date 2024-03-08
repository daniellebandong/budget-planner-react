import React from 'react';

import Header from '../components/Header';
import RegisterFormInput from '../components/forms/FormInputs';
import { ConfirmButton } from '../components/buttons/Buttons';

const CreateAccount = (props) => {
    return ( 
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <RegisterFormInput label="Email Address:" type="email"/>
                <RegisterFormInput label="Username:" type="text"/>
                <RegisterFormInput label="Password:" type="password"/>
                <RegisterFormInput label="Confirm Password" type="password"/>
                <ConfirmButton label="Create an Account"/>
            </body>
            <footer>

            </footer>
        </div>
     );
}
 
export default CreateAccount;