const socket = new WebSocket('ws://192.168.0.191:1880/switch');

socket.addEventListener('message', function(event) {
  const buttonEvent = JSON.parse(event.data);
  if (buttonEvent.type === 'keydown' && buttonEvent.keyCode >= 1 && buttonEvent.keyCode <= 6) {
    const buttonIndex = buttonEvent.keyCode - 1;
    buttonChart.data.datasets[0].data[buttonIndex]++; 
    buttonChart.update(); 
  }
});


document.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode.toString();
  const buttonEvent = {
    type: 'keydown',
    keyCode: keyCode
  };
  socket.send(JSON.stringify(buttonEvent)); 
});

const ctx = document.getElementById('buttonChart').getContext('2d');
const buttonChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6'],
    datasets: [{
      label: 'Button Press Count',
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 1
      }
    }
  }
});
