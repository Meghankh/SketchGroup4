
jQuery('document').ready(function() {

    var currentPosition = 0;

    function increase() {
        jQuery('#meter' + currentPosition).hide();
        if (currentPosition < 12)
        {
            currentPosition++;
        }
        if (currentPosition < 4)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby1').show();
        }
        if (currentPosition < 7 && currentPosition > 3)
        {
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby2').show();
        }
        if (currentPosition < 10 && currentPosition > 6)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby3').show();
        }
        if (currentPosition > 9)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').show();
        }
        jQuery('#meter' + currentPosition).show();
    }

    function decrease() {
        jQuery('#meter' + currentPosition).hide();
        if (currentPosition > 0) 
        {
            currentPosition--;
        }
        if (currentPosition < 4)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby1').show();
        }
        if (currentPosition < 7 && currentPosition > 3)
        {
            jQuery('#baby1').hide();
            jQuery('#baby3').hide();
            jQuery('#baby4').hide();
            jQuery('#baby2').show();
        }
        if (currentPosition < 10 && currentPosition > 6)
        {
            jQuery('#baby2').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').hide();
            jQuery('#baby3').show();
        }
        if (currentPosition > 9)
        {
            jQuery('#baby2').hide();
            jQuery('#baby3').hide();
            jQuery('#baby1').hide();
            jQuery('#baby4').show();
        }
        jQuery('#meter' + currentPosition).show();
    }

    jQuery('table').click(function() {
        increase();
    });
});

