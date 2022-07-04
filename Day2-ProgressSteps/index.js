
$(document).ready(function () {
    let activeCircles = '.circle.active';
    let circles = '.circle';
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

        let newWidth = ($(activeCircles).length - 1) / ($(circles).length - 1) * 100 + '%';
        $(progressLine).width(newWidth);
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
        
        let newWidth = ($(activeCircles).length - 1) / ($(circles).length - 1) * 100 + '%';
        $(progressLine).width(newWidth);
        
    });
    
});