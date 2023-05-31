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

            <div css={s.comment}><MdSearch/>&nbsp;Your Email&nbsp;<MdSearch/></div>
            
            <main css={s.mainContainer}>
                <div css={s.resultBox}>
                    <div css={s.informment}>검색결과:</div>
                    <div css={s.yourEmail}>{email}</div>
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