var TIMEOUT_IN_SECS = 5 * 60
var TIMEOUT_ALERT_IN_SECS = 30
var TEMPLATE = '<h1 style="font: 20px/20px Helvetica Neue,Arial,sans-serif;' +
    'color: #6c797f; margin-top: 3px;">' +
    '<span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var MESSAGES = ["Совершенство — это не тогда, когда нечего добавить, а тогда, когда нечего отнять.",
                "Поверьте, что сможете, и пол пути уже пройдено.",
                "Почувствуйте попутный ветер в вашем парусе. Двигайтесь…Если нет ветра, беритесь за весла.",
                "Ты не упадешь, если не карабкаешься в гору. Но какая радость от всей жизни, проведенной на земле.",
                "Одна победа не ведет к успеху, в отличие от постоянного желания побеждать.",
                "Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих.",
                "Если ты можешь что-то представить — ты можешь этого достичь!",
                "Либо напишите книгу, стоящую чтения, либо сделайте что-то, стоящее написания книги.",
                "Еще не все колеса изобретены: мир слишком удивителен, чтобы сидеть сложа руки.",
                "Чем упорнее вы работаете, тем удачливее вы становитесь."
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
var timestampAlert = getTimestampInSecs() + TIMEOUT_IN_SECS

function displayTimer(){
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
  if(timestampAlert <= currentTimestamp){
      var message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      alert(message);
      timestampAlert = getTimestampInSecs() + TIMEOUT_ALERT_IN_SECS;
    }
}
setInterval(displayTimer, 300)
