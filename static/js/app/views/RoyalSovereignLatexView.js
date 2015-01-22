define(function(require, exports, module) {
    var $ = require('jquery'),
        BaseView = require('app/views/BaseView'),
        channels = require('app/channels'),
        helpers = require('app/utils/helpers'),
        constants = require('app/utils/constants'),
        template = require('hbs!templates/royal-sovereign-latex');

        require('jquery.viewport');

    return BaseView.extend({

        className: 'royal-sovereign-latex page',

        template: template,

        ui: {
            masthead: '.intro .masthead'
        },

        events: {
        },

        initialize: function(options) {
            $(window).on('scroll.page', _.bind(this.scrollEffects, this));
            this.window = $(window);
            this.faded = false;
        },

        onShow: function() {
            this.textBox = $('.intro .masthead .text-box');
        },

        scrollEffects: function(e) {
            if (this.window.scrollTop() > 150 && !this.faded) {
                this.textBox.addClass('fade-out');
                this.faded = true;
            } else if (this.window.scrollTop() < 150 && this.faded) {
                this.textBox.removeClass('fade-out');
                this.faded = false;
            }
            $('.block-image:in-viewport').addClass('in-view');
        },

        onDestroy: function() {
            $(window).off('page');
        }

    });
});
