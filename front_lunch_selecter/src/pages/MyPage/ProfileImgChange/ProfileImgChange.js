/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from 'react-query';
import * as s from './style';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { backEndURL } from '../../../Config/URL/URL';


const ProfileImgChange = () => {
    const navigate = useNavigate();
    const [ imgFile, setImgFile ] = useState();
    const [ profileImgURL, setprofileImgURL ] = useState(`${backEndURL}/image/profile/plus.png`);
    const fileRef = useRef();

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
        const response = await axios.post(`${backEndURL}/auth/profile/img`, formData, option)
        return response;
    }, {
        onSuccess: () => {
            navigate('/mypage');
        }
    })

    const backButton = () => {
        navigate('/mypage')
    }

    return (
        <div css={s.container}>
            <IoMdArrowRoundBack css={s.backButton} onClick={backButton}/>
            <header css={s.headerContainer}>
                <div css={s.comment}><HiOutlinePhotograph/>&nbsp;프로필 사진 변경&nbsp;<HiOutlinePhotograph/></div>
            </header>
            <main css={s.mainContainer} onClick={profileImgChangeHandle}>
                <img css={s.img} src={profileImgURL} alt="" />
                <input css={s.fileInput} type="file" onChange={profileImgFileChangeHandle} ref={fileRef} />
            </main>
            <footer css={s.footerContainer}>
                <button onClick={backButton} css={s.cancelButton}>취소</button>
                <button onClick={() => profileImgSubmit.mutate()} css={s.saveButton}>저장</button>
            </footer>
        </div>
    );
};

export default ProfileImgChange;