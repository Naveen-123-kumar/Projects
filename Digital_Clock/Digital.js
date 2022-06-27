function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    var am = document.getElementById("am");
    // var ampm = (hours > 12) ? "M" : "AM";
  // if(hours%12!=0 && am.innerText=='AM'){
    // am.innerText=ampm;
  // }
  // console.log(ampm)
    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
  }
  setInterval(clock, 1000);
  function settime() {
    let text=document.getElementsByClassName('set_time')[0];
    text.innerHTML='Alarm set';
    var i = document.getElementById("wakeuptime").value;
    var hours = new Date().getHours();
    var j = document.getElementById("lunchTime").value;
    var k = document.getElementById("napTime").value;
    var l = document.getElementById("sleepTime").value;
  
    if (i == hours) {
      document.getElementById("rightimage_container").style.backgroundImage =
        "url(./Assets/Cage.png)";
      document.getElementById("rightText_container").innerHTML =
        "GRAB SOME HEALTHY BREAKFAST!!!";
      document.getElementById("description_text").innerHTML = "GOOD MORNING!!";
    }
    if (j == hours) {
      document.getElementById("rightimage_container").style.backgroundImage =
        "url(./Assets/lunchTime.png)";
      document.getElementById("rightText_container").innerHTML =
        "LETS HAVE SOME LUNCH !!";
      document.getElementById("description_text").innerHTML = "GOOD AFTERNOON!!";
    }
    if (k == hours) {
      document.getElementById("rightimage_container").style.backgroundImage =
        "url(./Assets/EveningTime.png)";
      document.getElementById("rightText_container").innerHTML =
        "STOP YAWNING,GET SOME TEA..ITS JUST EVENING";
      document.getElementById("description_text").innerHTML = "GOOD EVENING!!";
    }
    if (l == hours) {
      document.getElementById("rightimage_container").style.backgroundImage =
        "url(./Assets/goodNight.png)";
      document.getElementById("rightText_container").innerHTML =
        "CLOSE YOUR EYES AND GO TO SLEEP";
      document.getElementById("description_text").innerHTML = "GOOD NIGHT!!";
    }

    var container = document.createElement("p");
    document.getElementsByClassName("time-summary")[0].appendChild(container);
    var invalue1 = document.getElementById("wakeuptime");

    var value1 = invalue1.options[invalue1.selectedIndex].text;
    console.log(value1)

    document.getElementsByClassName("time-summary")[0].innerText = "WakeUp Time"+" " + value1;
  }
  