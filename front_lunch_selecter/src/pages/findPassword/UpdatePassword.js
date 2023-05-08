import React from 'react';
import AuthInput from '../../components/auth/AuthInput';

const UpdatePassword = () => {
    return (
        <div>
            <header>
                <h1>Updata Password</h1> 
            </header>
            <main>
                <AuthInput type="password" name="password">
                </AuthInput>
                <button>확인</button>
            </main>
            
        </div>
    );
};

export default UpdatePassword;