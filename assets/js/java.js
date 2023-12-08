$(function(){
    var textCDay = $("#currentDay");

    dayjs.extend(window.dayjs_plugin_advancedFormat);
    var getDay = dayjs();
    textCDay.text(getDay.format("dddd, MMMM  Do"));

    var tableTime = [9,10,11,12,13,14,15,16,17];
    var startofHour = dayjs().startOf('hour');
    for (var i = 0; i < tableTime.length; i++){
        if(tableTime[i] > startofHour.format('HH')) {
            
        }
        else if (tableTime[i] < startofHour.format('HH')){

        } else {

        }
        
        
    }
    console.log()
    
});