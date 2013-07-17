/**
* Validate jQuery Plugin
* Lightweight form validation using classes
*
* @author Ben Hargreaves <bennyjhglucy@gmail.com>
* @version 0.1
* @license MIT http://opensource.org/licenses/MIT
* @date 17/07/2013
*/

(function ($) {

    $.fn.validate = function (options) {

        var defaults = {
            fields: 'input, select, textarea'
        };

        var settings = $.extend({}, defaults, options);

        var result = [];

        this.find(settings.fields).each(function () {

            var pass = true;

            var element = $(this),
                value = element.val(),
                length = value.length,
                message = '';

            if (element.hasClass('length')) {

                var min = element.data('min'),
                    max = element.data('max');

                if (length < min || length > max) {
                    message = '<span class="output">Content must be between ' + min + ' and ' + max + ' characters</span>';
                    pass = false;
                }

            }

            if (element.hasClass('numeric')) {
                var pattern = /^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/;
                if (!value.match(pattern)) {
                    message = '<span class="output">Value must be numeric</span>';
                    pass = false;
                }
            }

            if (element.hasClass('alphanum')) {
                var pattern = /^\s*[a-zA-Z0-9,.\s]+\s*$/;
                if (!value.match(pattern)) {
                    message = '<span class="output">No special characters allowed</span>';
                    pass = false;
                }
            }

            if (element.hasClass('email')) {
                var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!value.match(pattern)) {
                    message = '<span class="output">Value must be a valid email address</span>';
                    pass = false;
                }
            }

            if (element.hasClass('required')) {
                if(element.is(':checkbox')) {
                    if(element.prop('checked') === false) {
                        message = '<span class="output">This field is required</span>';
                        pass = false;
                    }
                } else if (value === '') {
                    message = '<span class="output">This field is required</span>';
                    pass = false;
                }
            }

            element.next('.output').remove();
            element.after(message);

            result.push(pass);

        });

        if (jQuery.inArray(false, result) >= 0) {
            return false;
        } else {
            return true;
        }

    };

}(jQuery));

$('.myButton').click(function () {
    var outcome = $('.myForm').validate();
    alert(outcome);
});