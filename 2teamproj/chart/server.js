const express = require('express');
const app = express();
const http = require('http').Server(app);
const WebSocket = require('ws');


const wss = new WebSocket.Server({ server: http });

// 버튼 누름 횟수 추적 변수
let buttonPresses = [0, 0, 0, 0, 0, 0];

// 클라이언트 연결 시
wss.on('connection', function(ws) {
  // 버튼 누름 횟수 전송
  ws.send(JSON.stringify(buttonPresses));

  // 버튼 누름 이벤트 수신 시
  ws.on('message', function(message) {
    const buttonEvent = JSON.parse(message);
    if (buttonEvent.type === 'keydown' && buttonEvent.keyCode >= 1 && buttonEvent.keyCode <= 6) {
      const buttonIndex = buttonEvent.keyCode - 1;
      buttonPresses[buttonIndex]++; // 버튼 누름 횟수 증가
      wss.clients.forEach(function(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(buttonPresses)); // 모든 클라이언트에 버튼 누름 횟수 전송
        }
      });
    }
  });
});

http.listen(8080, function() {
  console.log('Server is running on port 8080');
});
