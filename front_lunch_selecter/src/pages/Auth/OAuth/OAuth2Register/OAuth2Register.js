import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const OAuth2Register = () => {
    const [ phone, setPhone ] = useState({phone: ""})
    
    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const registerToken = searchParams.get("registerToken");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");
    const [ registerUser, setRegisterUser ] = useState({email:email, password:"", checkPassword: "", name:name, phone:"", provider:provider})
    const [ errorMessages, setErrorMessages ] = useState({email: "", password: "", name: "", phone:""});
    
    
    const oauth2Register = useMutation(async (registerData) => {
        const option = {
            headers: {
                registerToken: `Bearer ${registerToken}`
            }
        }
        try {
            const response =  await axios.post("http://localhost:8080/auth/oauth2/register", registerData, option);
            return response;
        }catch(error) {

            console.log(error)

            // alert("페이지가 만료되었습니다.")
            // window.location.replace("/auth/login");
            return error;
        }
    }, {
        onSuccess: (response) => {
            if(response.status === 200){
                alert("회원가입 성공")
                window.location.replace("/auth/login");    
            }
        }
    });
 

    const InputChangeHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }


    const oauth2RegisterSubmitHandle = () => {
        oauth2Register.mutate(registerUser);
    }

    return (
        <div>
            <input type="text" value={email} disabled={true}/>
            <input type="text" value={name} disabled={true}/>
            <input type="password" name='password' placeholder='비밀번호' onChange={InputChangeHandle} />
            <input type="password" name='checkPassword' placeholder='비밀번호확인' onChange={InputChangeHandle} />
            <input type="text" name='phone' placeholder='연락처' onChange={InputChangeHandle}/>
            <button onClick={oauth2RegisterSubmitHandle}>가입하기</button>
        </div>
    );
};

export default OAuth2Register;