
jQuery('document').ready(function() {
    jQuery('#baby1').click(function() {
        jQuery('#baby1').hide();
        jQuery('#baby2').show();
        jQuery('#meter1').hide();
        jQuery('#meter2').show();
    });
    jQuery('#baby2').click(function() {
        jQuery('#baby2').hide();
        jQuery('#baby3').show();
        jQuery('#meter2').hide();
        jQuery('#meter3').show();
    });
    jQuery('#baby3').click(function() {
        jQuery('#baby3').hide();
        jQuery('#baby4').show();
        jQuery('#meter3').hide();
        jQuery('#meter4').show();
    });
    jQuery('#baby4').click(function() {
        jQuery('#baby4').hide();
        jQuery('#baby1').show();
        jQuery('#meter4').hide();
        jQuery('#meter1').show();
    });

});


