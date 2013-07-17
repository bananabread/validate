Validate jQuery Plugin
===================================================================
### Lightweight form validation using HTML classes

-------------------------------------------------------------------
Description
-------------------------------------------------------------------

Still very much a work in progress!

The plugin targets a HTML form and looks for certain classes,
producing validation output along side the form field.

This is my first attempt at making a jQuery plugin. More of
a learning experience than an attempt to make anything for
others to use. Comes in at 1.12kb minified so maybe someone
will find some use for it.

Any feedback or suggestions welcome (I'm still learning),
so feel free to fork or email me.

^_^

-------------------------------------------------------------------
Usage
-------------------------------------------------------------------

To use the plugin simply include it in your HTML after your
jQuery call as such;

```html
  <script type="text/javascript" src="jquery.js"></script>
  <script type="text/javascript" src="validate.min.js"></script>
```

Then to call the plugin on a form use the method .validate();

```javascript
  $('.myForm').validate();
```

Depending on the outcome the method will return 'true' or 'false',
so my reccomended usage is as follows;

```javascript
  if($('.myForm').validate()) {

    $('.myForm').submit();

  }
```

By default the plugin targets 'input', 'textarea' and 'select'
fields, but this can be altered to more or less using the following
syntax;

```javascript
  $('.myForm').validate({fields:'input, select'});
```

To style the output of the validator simply target the class 
.validator-output in your stylesheet.

```html
  <span class="validator-output">This field is required</span>
```

-------------------------------------------------------------------
Classes
-------------------------------------------------------------------

In order to validate fields you need to add the following classes
to the form elements.

**Required**

Checks a field is not null or empty.
```html
  e.g. <select class="required">
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
       </select>
```

**Length**

Checks a fields length using data attributes 'min' and 'max' on the
form.
```html
  e.g. <textarea class="length" data-min="5" data-max="200"></textarea>
```


**Numeric**

Checks for all numeric characters, accepting fullstops and commas,
such as 1,000,000 100.00.
```html
  e.g. <input type="text" class="numeric">
```


**Alphanum**

Checks that no special characters exist, allowing for basic grammar
and punctuation.
```html
  e.g. <input type="text" class="alphanum">
```

**Email**

Checks for valid email format.
```html
  e.g. <input type="text" class="email">
```

These classes can be used alongside each other, so you can use
multiple classes per form element.

```html
  e.g. <input type="text" class="required email length" data-min="4" data-max="30">
```

-------------------------------------------------------------------

Once again, all feedback welcomed. Hope someone might find this 
useful.