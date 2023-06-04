window.onload = function() {
    var stopwatch = document.querySelector('.display');
    var startButton = document.querySelector('.start');
    var stopButton = document.querySelector('.stop');
    var resetButton = document.querySelector('.reset');
  
    var startTime;
    var elapsedTime = 0;
    var timerInterval;
  
    function formatTime(time) {
      var hours = Math.floor(time / (60 * 60 * 1000));
      var minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
      var seconds = Math.floor((time % (60 * 1000)) / 1000);
      var milliseconds = Math.floor((time % 1000) / 10);
  
      return (
        (hours > 9 ? hours : '0' + hours) +
        ':' +
        (minutes > 9 ? minutes : '0' + minutes) +
        ':' +
        (seconds > 9 ? seconds : '0' + seconds) +
        ':' +
        (milliseconds > 9 ? milliseconds : '0' + milliseconds)
      );
    }
  
    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        stopwatch.innerHTML = formatTime(elapsedTime);
      }, 10);
      startButton.disabled = true;
      stopButton.disabled = false;
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      stopwatch.innerHTML = formatTime(elapsedTime);
      startButton.disabled = false;
      stopButton.disabled = true;
    }
  
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
  };
  