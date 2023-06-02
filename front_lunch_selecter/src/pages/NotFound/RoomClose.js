import React from 'react';

const RoomClose = () => {

    const homeButton = () => {
        window.location.replace("http://localhost:3000/");
    }
    return (
        <div>
            방이 닫혔거나 존재하지 않는 방입니다.  

            <button onClick={homeButton}>메인으로</button>      
        </div>
    );
};

export default RoomClose;