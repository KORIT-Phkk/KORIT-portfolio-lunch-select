import React from 'react';

class Invite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inviteLink: '',
      };
    }

    generateInviteLink = () => {
      const inviteLink = window.location.href;
      const modifiedInviteLink = inviteLink.slice(46);
      this.setState({ inviteLink: modifiedInviteLink });
    };
  
    render() {
      const { inviteLink } = this.state;
  
      return (
        <div>
          <button onClick={this.generateInviteLink} >초대 링크 생성</button>
          {inviteLink && <input type="text" value={inviteLink} readOnly inviteLink={inviteLink}/>}
        </div>
      );
    }
  }

export default Invite;