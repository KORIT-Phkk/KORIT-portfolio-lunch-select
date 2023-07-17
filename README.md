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
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/121993171/ebcffd2a-071c-45a0-ae76-0f58f4fe4337 width="1000px" height="400px">


## 화면

* 회원가입
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/67246f38-870d-4901-9913-192b1947c84c width="200px" height="350px">   

* 로그인
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/6f8b437d-89d4-4306-927a-4b6b29fb3555 width="200px" height="350px">   

* 로그아웃
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/07f35821-5e69-4d27-bd42-0f49579eb1da width="200px" height="350px">   

* 마이페이지 - 사진변경
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/de8d165b-829b-4cce-baef-38e7919ae92a width="200px" height="350px">   

* 마이페이지 - 비밀번호 변경
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/48c2332b-ad08-4e12-a897-f926fed19da0 width="200px" height="350px">   

* 마이페이지 - 회원탈퇴
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/d097f857-fe94-42c1-84bc-22a56e2473cc width="200px" height="350px">   

* 방장 - 룰렛
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/5d9fabe9-37c3-4601-b935-a5db4f555ce5 width="200px" height="350px">   

* 방장 - 룰렛 결과창 및 버튼 클릭
<div>
   <img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/741df070-deaf-4c7a-9ff7-e5b0cd5fc553 width="400px" height="350px"><img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/8f2d65d8-f352-4d34-b60a-161ed63078a5 width="200px" height="350px">   
</div>   

* 게스트 - 룰렛
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/721bae43-1b0b-4c52-8e2f-ee13a3516699 width="400px" height="350px">   


* 방 삭제 시 게스트 화면
<img src=https://github.com/KORIT-Phkk/KORIT-portfolio-lunch-select/assets/92001504/a7a805bc-ec55-4606-8f69-7069d9e03230 width="400px" height="350px">   
