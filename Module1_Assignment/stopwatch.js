    var interval = null;
    var started = false;
    var time = 0;
    var timeString = "0.0";
    var pastTimesData = "";

    setUp();


    function startTimer(){
        interval = setInterval(function(){
            time++;
            timeString = time / 100;
            document.getElementById("timer").innerHTML = timeString;
        },10)
    }


    function setUp(){

        var startStopButton = document.getElementById("startstop");
        startStopButton.addEventListener('click',function(){
            if (started) {
                started = false;
                clearInterval(interval);
            } else {
                startTimer();
                started = true;
            }
        });
        
        var resetButton = document.getElementById("reset");
        resetButton.addEventListener('click',function(){
            started = false;
            clearInterval(interval);
            time = 0;
            timeString = time / 100;
            document.getElementById("timer").innerHTML = timeString;
            pastTimesData = "";
            document.getElementById("pasttimes").innerHTML = pastTimesData;
        });
        
        var recordTimeButton = document.getElementById("recordtime");
        recordTimeButton.addEventListener('click',function(){
            pastTimesData = pastTimesData + timeString + "<br/>";
            document.getElementById("pasttimes").innerHTML = pastTimesData;
        });
        
    }




