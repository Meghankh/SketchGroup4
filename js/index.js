










jQuery('document').ready(function() {

    function Model () {
        this.level = 4.0

        this.updateBaby = function() {
            if (this.level < 1.0)
            {
                jQuery('#baby2').hide();
                jQuery('#baby3').hide();
                jQuery('#baby4').hide();
                jQuery('#baby5').hide();
                jQuery('#baby6').hide();
                jQuery('#baby1').show();
            }
            if (this.level >= 1.0 && this.level < 3.0)
            {
                jQuery('#baby1').hide();
                jQuery('#baby3').hide();
                jQuery('#baby4').hide();
                jQuery('#baby5').hide();
                jQuery('#baby6').hide();
                jQuery('#baby2').show();
            }
            if (this.level >= 3.0 && this.level < 5.0)
            {
                jQuery('#baby1').hide();
                jQuery('#baby2').hide();
                jQuery('#baby4').hide();
                jQuery('#baby5').hide();
                jQuery('#baby6').hide();
                jQuery('#baby3').show();
            }
            if (this.level >= 5.0 && this.level < 7.0)
            {
                jQuery('#baby2').hide();
                jQuery('#baby1').hide();
                jQuery('#baby3').hide();
                jQuery('#baby5').hide();
                jQuery('#baby6').hide();
                jQuery('#baby4').show();
            }
            if (this.level >= 7.0 && this.level < 9.0)
            {
                jQuery('#baby2').hide();
                jQuery('#baby1').hide();
                jQuery('#baby4').hide();
                jQuery('#baby3').hide();
                jQuery('#baby6').hide();
                jQuery('#baby5').show();
            }
            if (this.level >= 9.0)
            {
                jQuery('#baby2').hide();
                jQuery('#baby3').hide();
                jQuery('#baby1').hide();
                jQuery('#baby4').hide();
                jQuery('#baby5').hide();
                jQuery('#baby6').show();
            }
        };

        this.showMeter = function() {
            displayLevel = Math.round(this.level);
            console.log(displayLevel);
            jQuery('#meter' + displayLevel).show();
        };

        this.hideMeter = function() {
            displayLevel = Math.round(this.level);
            console.log(displayLevel);
            jQuery('#meter' + displayLevel).hide();
        };

        this.increase = function() {
            if (this.level < 9.0) {
                this.level++;
            }
        };

        this.decrease = function() {
            if (this.level > 0.0) {
                this.level--;
            }
        };
    }

    var model = new Model();

    jQuery('#babypic').click(function() {
        model.hideMeter();
        model.increase();
        model.showMeter();
        model.updateBaby();
    });

    jQuery('#meterbar').click(function() {
        model.hideMeter();
        model.decrease();
        model.showMeter();
        model.updateBaby();
    });

});

