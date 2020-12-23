var now = new Date();
var weekday = new Array(7);
weekday[0] = "الأحد";
weekday[1] = "الإثنين";
weekday[2] = "الثلاثاء";
weekday[3] = "الأربعاء";
weekday[4] = "الخميس";
weekday[5] = "الجمعة";
weekday[6] = "السبت";

var checkTime = function() {
  var today = weekday[now.getDay()];
  var timeDiv = document.getElementById('timeDiv');
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  //add AM or PM
  var suffix = hour >= 12 ? " مساء" : " صباحا";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes
  };

  if ((dayOfWeek == 0 || dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 6 ) && hour >= 10 && hour <= 18) {
    hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    timeDiv.innerHTML = 'اليوم ' + today + ' ' + hour + ':' + minutes + suffix + ' - شركة نيوفارم\ تعمل';
    timeDiv.className = 'open';
  } 
  
  else if ((dayOfWeek == 4) && hour >= 10 && hour <= 17) {
    hour = ((hour + 11) % 12 + 1);
    timeDiv.innerHTML = 'اليوم ' + today + ' ' + hour + ':' + minutes + suffix + ' - شركة نيوفارم\ تعمل';
    timeDiv.className = 'open';
  } 
  
  else {
    if (hour == 0 || hour > 12) {
      hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
    }
    timeDiv.innerHTML = 'اليوم ' + today + ' ' + hour + ':' + minutes + suffix + ' - شركة نيوفارم\ مغلقة';
    timeDiv.className = 'closed';
  }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();