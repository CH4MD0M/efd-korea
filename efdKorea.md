# EFD_Korea

## 소개

본 문서는 EFD_Korea API v1 규격을 정의합니다.

### 대상

이 문서는 EFD_Korea API 서비스를 이용하거나 개발하는 개발자를 대상으로 합니다.

**개발자는 아래의 기술 사항에 대한 사전 지식이 필요합니다.**

-   HTTP에 대한 기본 이해
-   RESTful API에 대한 기본 이해
-   axios 사용법

## Overview

1. API 사용 시 비동기 통신 라이브러리인 Axios 사용을 매우 권장합니다.
2. API 사용 시 접근 제한이 있을 수 있습니다. 적절한 권한이 있는 계정으로 로그인 하면 됩니다.
3. 모든 요청에 대한 응답은 JSON 형식으로 전송 됩니다.

## Authentication

Session을 통해 인증/권한 체크를 수행합니다. 원활한 API 사용을 위해서는 회원가입 후 로그인을 통해 인증을 받으십시오.

---

<details>
  <summary style="font-size:1.5rem;">간단한 api 사용법</summary>
  <div markdown="1">       
  
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlCRwp%2FbtrpW8sX1zh%2FEaSij9zgAZMGxZyUeo27nk%2Fimg.png" width="100%" height="100%" alt="회원가입 API"></img>
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FckMIPt%2Fbtrp0lFyt4i%2Fob366At54AjRg2eUcmA3k1%2Fimg.png" width="100%" height="100%" alt="회원가입 성공"></img>
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FccZSyN%2FbtrpULZByK1%2F6gYzYWCRXzyBnnT5k6Uo00%2Fimg.png" width="100%" height="100%" alt="로그인 API"></img>
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgZtaa%2Fbtrp0I8DMoi%2FAwqweRdtK7klmYFrftBpdK%2Fimg.png" width="100%" height="100%" alt="로그인 성공"></img>
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkSMiq%2FbtrpZ9ekHei%2F0RgAfqvSihPKDslkaK86L1%2Fimg.png" width="100%" height="100%" alt="로그인 실패"></img>
  </div>
</details>

## 자세한 사용법

<https://documenter.getpostman.com/view/13562121/UVC3m8bc>

---

-   [개발환경구성](./개발환경구성.md)
-   [기술스택](./기술스택.md)
