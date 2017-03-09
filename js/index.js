
jQuery('document').ready(function() {
    jQuery('#baby1').click(function() {
        jQuery('#baby1').hide();
        jQuery('#baby2').show();
    });
    jQuery('#baby2').click(function() {
        jQuery('#baby2').hide();
        jQuery('#baby3').show();
    });
    jQuery('#baby3').click(function() {
        jQuery('#baby3').hide();
        jQuery('#baby4').show();
    });
    jQuery('#baby4').click(function() {
        jQuery('#baby4').hide();
        jQuery('#baby1').show();
    });

});


