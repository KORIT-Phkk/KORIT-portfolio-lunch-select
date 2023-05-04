import React from 'react';
import AuthInput from '../../components/auth/AuthInput';
import { Link } from 'react-router-dom';

const EmailAuthenticationNumber = () => {
    return (
        <div>
            <header>
                <h1>Find Email</h1> 
            </header>
            <main>
                <AuthInput type="number" name="phone">
                </AuthInput>
                <div><Link to="/login">로그인</Link></div>
                <div><Link to="/findpassword">비밀번호찾기</Link></div>
            
            </main>
        </div>
    );
};

export default EmailAuthenticationNumber;