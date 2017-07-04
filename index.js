var TIMEOUT_IN_SECS = 5 * 60
var TEMPLATE = '<h1 style="font: 20px/20px Helvetica Neue,Arial,sans-serif;' +
    'color: #6c797f; margin-top: 3px;">' +
    '<span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var MESSAGES = ["Ничем не может человек распорядиться в большей степени, чем временем.",
                "Ни река, ни быстротечное время остановиться не могут.",
                "Как в море льются быстро воды, так в вечность льются дни и годы.",
                "Счастливые часов не наблюдают.",
                "Власть времени — это закон, достойный уважения."
]

// adds HTML tag to current page
var timerContainer = document.createElement('div')
timerContainer.setAttribute("style",
    "height: 28px; top: 28px; padding: 3px; position: fixed; z-index: 101; " +
    "background: #f2f2f2; opacity: 0.8;")
var bodyTag = document.body
bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
timerContainer.innerHTML = TEMPLATE

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs()

function displayTimer(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
  if(secsLeft == 0 && secsGone % 30 == 0){
      var message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      alert(message);
    }
}
setInterval(displayTimer, 300)
