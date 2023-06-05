/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from 'react-query';
import * as s from './style';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProfileImgChange = () => {
    const navigate = useNavigate();
    const [ imgFile, setImgFile ] = useState();
    const [ profileImgURL, setprofileImgURL ] = useState();
    const fileRef = useRef();
    const queryClient = useQueryClient();

    const profileImgChangeHandle = () => {
        fileRef.current.click();
    }
    
    const profileImgFileChangeHandle = (e) => {
        setImgFile(e.target.files[0]);
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            setprofileImgURL(e.target.result);
        }
    
        fileReader.readAsDataURL(e.target.files[0]);
        e.target.value = null;
    }
    
    const profileImgSubmit = useMutation(async () => {
        const formData = new FormData();
        formData.append("profileImgFile", imgFile);
    
        const option = {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "multipart/form-data"
            }
        }
        const response = await axios.post("http://localhost:8080/auth/profile/img", formData, option)
        return response;
    }, {
        onSuccess: () => {
            navigate("/mypage");
        }
    })
    return (
        <div css={s.container}>
            <header css={s.headerContainer}>

            </header>
            <main css={s.mainContainer} onClick={profileImgChangeHandle}>
                <img css={s.img} src={profileImgURL} alt="" />
                <input css={s.fileInput} type="file" onChange={profileImgFileChangeHandle} ref={fileRef} />
            </main>
            <footer css={s.footerContainer}>
                <button onClick={() => profileImgSubmit.mutate()}>저장</button>
            </footer>
        </div>
    );
};

export default ProfileImgChange;