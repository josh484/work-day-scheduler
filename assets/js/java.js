/* on document ready */
$(function(){
    var textCDay = $("#currentDay");

    /* print to element todays date */
    dayjs.extend(window.dayjs_plugin_advancedFormat);
    var getDay = dayjs();
    textCDay.text(getDay.format("dddd, MMMM  Do"));

    /* array of time and get the current hour */
    var tableTime = [9,10,11,12,13,14,15,16,17];
    var startofHour = dayjs().startOf('hour');

    /* go through array */
    for (var i = 0; i < tableTime.length; i++){

        
        var dataContent = localStorage.getItem(tableTime[i].toString());
        
        /* create all table elements */
        var createNewTable = $("<tr></tr>");
        var tableTimeGetter = $('<td></td>');
        var tableContent = $('<td></td>');
        var inputContent = $('<textarea></textarea>');
        var tableSaver = $('<td></td>');
        var button = $('<button type="button" class="btn btn-primary saveBtn">Save</button>')
        
        /* get local storage data if its there and output it onto the text area*/
        if (dataContent){
            inputContent.text(dataContent);
        }

        /* output times with am or pm */
        if (tableTime[i] >= 12){
            tableTimeGetter.text(tableTime[i] + " pm");
        } else{
            tableTimeGetter.text(tableTime[i] + " am");
        }
        
        /* append table columns to the row and append elements to columns*/
        tableContent.append(inputContent)
        tableSaver.append(button);
        $('#putContent').append(createNewTable);
        createNewTable.append(tableTimeGetter);
        createNewTable.append(tableContent);
        createNewTable.append(tableSaver);
        /* give attributes for button and textarea */
        button.attr('data-submit', + tableTime[i]);
        inputContent.attr('data-content', + tableTime[i])

        

        /* checks the time in the array against the current hour and gives different attribute
        based on the time. Past present or future */
        if(tableTime[i] > startofHour.format('HH')) {
            tableContent.attr('id', 'future');
        }
        else if (tableTime[i] < startofHour.format('HH')){
            tableContent.attr('id', 'past');
            
        } else {
            tableContent.attr('id', 'present');
            
        }
        
        
    }

    /* when save button is clicked go to its parent then children and find the value of the text area and save the text
    to its corresponding time*/
    $('#putContent').delegate('.btn','click', function(event){
        event.preventDefault();
        var clickedItem = $(event.target);
        var getData = clickedItem.attr('data-submit');
        localStorage.setItem(getData, clickedItem.parent().parent().children().eq(1).children().val());
    });

    
});