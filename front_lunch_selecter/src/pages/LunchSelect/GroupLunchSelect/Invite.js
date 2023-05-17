import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const test = css`
    font-size: 50px;
`;
class Invite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inviteLink: '',
      };
    }
  

    generateInviteLink = () => {
      // 초대 링크 생성 로직을 구현합니다.
      // 예시로는 현재 페이지 URL을 기반으로 초대 링크를 생성합니다.
      const inviteLink = window.location.href;
      this.setState({ inviteLink });
    };
  
    render() {
      const { inviteLink } = this.state;
  
      return (
        <div>
          <button css={test} onClick={this.generateInviteLink}>초대 링크 생성</button>
          {inviteLink && <input css={test} type="text" value={inviteLink} readOnly />}
        </div>
      );
    }
  }

export default Invite;