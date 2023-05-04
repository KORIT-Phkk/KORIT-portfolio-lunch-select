import React from 'react';
import AuthInput from '../../components/auth/AuthInput';

const FindEmail = () => {
    return (
        <div>
            <header>
                <h1>Find Email</h1> 
            </header>
            <main>
                <AuthInput type="number" name="phone">
                </AuthInput>
                    <button>전송</button>
                
                <AuthInput type="number" name="">

                </AuthInput>
            
            </main>
            <footer>
                <button>확인</button>
            </footer>
        </div>
    );
};

export default FindEmail;