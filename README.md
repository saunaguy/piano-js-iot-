# Play Music App

이 프로젝트는 2인 팀으로 개발한 Play Music App입니다.

## 폴더 구성

- **play-music-app 폴더**: Play Music App의 클라이언트 애플리케이션 코드가 포함되어 있습니다.

- **chart 폴더**: 차트 관련 코드 및 서버 파일이 포함되어 있습니다. (아두이노 입력시 웹소켓으로)


웹 브라우저에서 해당 폴더의 HTML 파일을 Live Server 등을 통해 열면 차트가 표시됩니다.

- **arduinocode 폴더**: 아두이노 관련 코드가 포함되어 있습니다. 버튼을 누르면 웹에서 동작합니다.

- **noderedexport 파일**: Node-RED의 내보낸 파일입니다. Node-RED에 import하여 사용할 수 있습니다.

## 실행 방법

1. **Play Music App 실행**:
 - `play-music-app` 폴더로 이동합니다.
 - 필요한 패키지를 설치하기 위해 다음 명령어를 실행합니다:
   ```
   npm i
   ```
 - 애플리케이션을 실행하기 위해 다음 명령어를 실행합니다:
   ```
   npm run dev
   ```

2. **차트 표시**:
 - `chart` 폴더로 이동합니다.
 - 필요한 패키지를 설치하기 위해 다음 명령어를 실행합니다:
   ```
   npm i
   ```
 - 서버를 실행하기 위해 다음 명령어를 실행합니다:
   ```
   node server.js
   ```
 - 웹 브라우저에서 해당 폴더의 HTML 파일을 Live Server 등을 통해 열면 차트가 표시됩니다.

## 주의사항

- Play Music App은 macOS에서 작성되었으며 줄바꿈 스타일(CRLF) 문제가 있을 수 있습니다.
