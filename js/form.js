$(document).ready(function() {
    $("#submit").button({
        icons : {
            secondary : 'ui-icon-caret-1-e'//Make it visible that this submits
         }
    });
    $("#reset").button();
    $("#arrivalDate").datepicker({
        minDate: 3, //We need at least 3 days to get this out the door...
        maxDate: 14, //Max of two weeks
        beforeShowDay: $.datepicker.noWeekends, //Do not include Sat/Sunday
        dateFormat: "m-dd-yy"
    });
    
});