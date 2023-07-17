# JMC(점심메뉴추천)
* 하루 중 꼭 하는 말, '점심 뭐 먹지?' 
* 성인남녀 80.6%가 결정장애를 겪었고, 그 중 1위를 차지한 '외식 메뉴 고를 때' 23.3% 인 만큼 어려운 메뉴 고르기. - google 참조.


JMC(점심메뉴추천)는 그러한 결정을 손쉽게 해줄 수 있으며, 본인 뿐 아니라 친구,가족,지인,직장 동료와 함께 할 수 있는 웹 앱 입니다.  

## 팀 구성
* 박성진: 로그인, 회원가입, ID/PW찾기, OAuth2, 전국 음식점 데이터 및 위도/경도 전처리 
* 김재영: 룰렛구현, 본인(방장) 위치 반경 500m 음식점 데이터 추출, 게스트 룰렛 페이지 구현   
* 황창욱: kakao Map Api, kakao Rest Api (위도, 경도, 음식점 이름을 기반으로 해당 음식점 위치 추출), UX/UI 디자인 및 css 적용   
* 김종환: MainPage/MyPage구현, 게스트 초대 코드 구현   
   

## 기능
* 회원가입, 로그인, ID/PW 찾기, OAuth2 로그인, PW변경, 프로필 사진 변경
* 원하는 위치 선택 (default: 현재 본인 위치)
* 원하는 음식점 카테고리 선택
* 선택한 카테고리 기반 본인 위치 반경 500m 내 음식점 랜덤 룰렛 기능
* 룰렛 결과 음식점 위치 및 마커 클릭 시 kakao map 연결
* kakao map에 없는 음식점은 naver로 연결
* 룰렛 다시 돌리기 기능
* 로그인 한 유저가 초대 코드 전송 시 게스트 참여가능(친구와 함께 음식점 랜덤 선택)


## 메뉴 구조도
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/121993171/de5b8b65-3f5b-408c-ac35-92c9644e49b4 width="1000px" height="400px">


## ERD 명세서
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/121993171/ebcffd2a-071c-45a0-ae76-0f58f4fe4337 width="1000px" heigh="400px">


화면

testImg
 <img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/121993171/3c6ed7a6-5a30-4d62-926e-586663b6addc />

