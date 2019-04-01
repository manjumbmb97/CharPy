var text_feed = document.getElementById('text_feed');
var signal_info = document.getElementById('signal_info');
var detectionFlag = 0;
var socket;

function startDetection() {
  if(detectionFlag==0) {
    socket = io.connect('http://' + document.domain + ':' + location.port + '/text_feed');
  }
  detectionFlag = 1;
}

function stopDetection() {
  if(detectionFlag) {
    socket.disconnect(true);
  }
  detectionFlag = 0;
}

// function requestText(){
//   if(detectionFlag) {
//     $.ajax({
//       type: 'GET',
//       url: "http://localhost:5000/text_feed",
//     }).done(function (data) {
//       if (data.success) {
//         text_feed.innerHTML = data.text_detected;
//         setTimeout(requestText, 500);
//       }
//     });
//   }
// }

function send_signal(){
  $.ajax({
    type: 'GET',
    url: "http://localhost:5000/send_signal",
  }).done(function (data) {
    if (data.success) {
      signal_info.innerHTML = "Signals sent";
    }
  });  
}