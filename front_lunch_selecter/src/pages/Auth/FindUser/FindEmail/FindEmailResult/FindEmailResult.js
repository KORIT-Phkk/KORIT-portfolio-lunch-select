/** @jsxImportSource @emotion/react */
import * as s from './style'
import { useNavigate, useParams } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

const FindEmailResult = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    const onClickLoginButton = () => {
        navigate("/auth/login");
    }

    const onClickFindPasswordButton = () => {
        navigate("/auth/findpassword");
    }

    return (
        <div css={s.container}>
            <header css={s.headerContainer}>
                <img css={s.imgCss} src="/main/logo1.png"/>
            </header>

            <div css={s.comment}><MdSearch/>Your Email<MdSearch/></div>
            
            <main css={s.mainContainer}>
                <div css={s.resultBox}>
                    공사중. 건들지마라
                <div>{email}</div>
                </div>
            </main>

            <footer css={s.footerContainer}>
                <button onClick={onClickLoginButton} css={s.findPassword}>로그인</button>
                <button onClick={onClickFindPasswordButton} css={s.loginButton}>비밀번호 찾기</button>
            </footer>
        </div>
    );
};

export default FindEmailResult;