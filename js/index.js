
jQuery('document').ready(function() {

    var currentPosition = 1;

    function increase() {
        jQuery('#meter' + currentPosition).hide();
        if (currentPosition < 12)
        {
            currentPosition++;
        }
        if (currentPosition < 3)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby1').show();
        }
        if (currentPosition == 3 || currentPosition == 4)
        {
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby2').show();
        }
        if (currentPosition == 5 || currentPosition == 6)
        {
            jQuery('#baby1').hide();
            jQuery('#baby2').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby3').show();
        }
        if (currentPosition == 7 || currentPosition == 8)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby4').show();
        }
        if (currentPosition == 9 || currentPosition == 10)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby3').hide();
            jQuery('#baby6').hide();
            jQuery('#baby5').show();
        }
        if (currentPosition > 10)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').show();
        }

        jQuery('#meter' + currentPosition).show();
    }

    function decrease() {
        jQuery('#meter' + currentPosition).hide();
        if (currentPosition > 0) 
        {
            currentPosition--;
        }
        if (currentPosition < 3)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby1').show();
        }
        if (currentPosition == 3 || currentPosition == 4)
        {
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby2').show();
        }
        if (currentPosition == 5 || currentPosition == 6)
        {
            jQuery('#baby1').hide();
            jQuery('#baby2').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby3').show();
        }
        if (currentPosition == 7 || currentPosition == 8)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').hide();
            jQuery('#baby4').show();
        }
        if (currentPosition == 9 || currentPosition == 10)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby3').hide();
            jQuery('#baby6').hide();
            jQuery('#baby5').show();
        }
        if (currentPosition > 10)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby5').hide();
            jQuery('#baby6').show();
        }
        jQuery('#meter' + currentPosition).show();
    }

    jQuery('#babypic').click(function() {
        increase();
    });

    jQuery('#meterbar').click(function() {
        decrease();
    });

});

