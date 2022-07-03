
$(document).ready(function () {
    let lastActiveCircleElement = '.circle.active:last';
    let progressLine = '.progress';
    /*
        Next button click:
        1. Check whether next step is within max range
        2. Then change the following css properties
        a. Add Active class to next step
        b. change width property of progress line
    */
    $("#next").click(function () {
        $(lastActiveCircleElement).next().addClass('active');
        
        if ($(lastActiveCircleElement).next().length == 0) {
            $(this).prop('disabled', true);
        }

        if ($(lastActiveCircleElement).prevAll().length > 1) {
            $('#previous').prop('disabled', false);
        }
        $(progressLine).css('width', "+=211");
    });
    
    /*
        Previous button click:
        1. Check whether previous step is within min range
        2. Then change the following css properties
        a. Remove Activate from current step 
        b. change width property of progress line (0-100%)
    */
    $("#previous").click(function () {
        $(lastActiveCircleElement).removeClass('active');
    
        
        if ($(lastActiveCircleElement).next().length != 0) {
            $('#next').prop('disabled', false);
        }
        if ($(lastActiveCircleElement).prevAll().length == 1) {
            $(this).prop('disabled', true);
        }
        
        $(progressLine).css('width', "-=211");
        
    });
    
});