$(function(){
    var textCDay = $("#currentDay");

    dayjs.extend(window.dayjs_plugin_advancedFormat);
    var getDay = dayjs();
    textCDay.text(getDay.format("dddd, MMMM  Do"));

    var tableTime = [9,10,11,12,13,14,15,16,19];
    var startofHour = dayjs().startOf('hour');


    for (var i = 0; i < tableTime.length; i++){
        var dataContent = localStorage.getItem(tableTime[i].toString());


        var createNewTable = $("<tr></tr>");
        var tableTimeGetter = $('<td></td>');
        var tableContent = $('<td></td>');
        var inputContent = $('<input>'+ dataContent +'</input>');
        var tableSaver = $('<td></td>');
        var button = $('<button type="button" class="btn btn-dark">Dark</button>')
        

        tableTimeGetter.text(tableTime[i]);
        tableContent.append(inputContent)
        tableSaver.append(button);
        $('#putContent').append(createNewTable);
        createNewTable.append(tableTimeGetter);
        createNewTable.append(tableContent);
        createNewTable.append(tableSaver);
        button.attr('data-submit', + tableTime[i]);
        inputContent.attr('data-content', + tableTime[i])

        

        
        if(tableTime[i] > startofHour.format('HH')) {
            tableContent.attr('id', 'future');
        }
        else if (tableTime[i] < startofHour.format('HH')){
            tableContent.attr('id', 'past');
            
        } else {
            tableContent.attr('id', 'present');
            
        }
        
        
    }
    $('#putContent').delegate('.btn','click', function(event){
        event.preventDefault();
        var clickedItem = $(event.target);
        var getData = clickedItem.attr('data-submit');
        localStorage.setItem(getData, clickedItem.parent().parent().children().eq(1).children().val());
    });

    console.log()
    
});