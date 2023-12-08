$(function(){
    var textCDay = $("#currentDay");

    dayjs.extend(window.dayjs_plugin_advancedFormat);
    var getDay = dayjs();
    textCDay.text(getDay.format("dddd, MMMM  Do"));
});