import React from 'react';
import AuthInput from '../../components/auth/AuthInput';

const FindPassword = () => {
    return (
        <div>
            <header>
                <h1>Find Password</h1> 
            </header>
            <main>
                <AuthInput type="email" name="Email">
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

export default FindPassword;