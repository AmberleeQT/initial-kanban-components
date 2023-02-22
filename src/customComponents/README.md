# Styling in React

Sass Official Docs:

> https://sass-lang.com/documentation/at-rules/mixin

Sytled-Components Official Docs:

> https://styled-components.com/

Article: SASS vs Styled-Components

> https://iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application/

# CSS Tricks

Form Validation

> https://css-tricks.com/form-validation-ux-html-css/

Checkbox Hack

> https://css-tricks.com/the-checkbox-hack/

# W3Schools

CSS Form

> https://www.w3schools.com/css/css_form.asp

Custom Select Box

> https://www.w3schools.com/howto/howto_custom_select.asp

Custom Checkbox

> https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

# MDN

Custom Form Controls

> https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls

Advanced Form Styling

> https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling

# Articles

Custom Error Messages

> https://angelika.me/2020/02/01/custom-error-messages-for-html5-form-validation/

DEV - Form Validation w/ Custom Hook

> https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7

Guide - Form Validation w/ Hooks (& typescript)

> https://felixgerschau.com/react-hooks-form-validation-typescript/

Tutorial - Interested in 'Defining the Validation Rules

> https://upmostly.com/tutorials/form-validation-using-custom-react-hooks

### !! LogRocket - Building a Custom Checkbox - React !!

> https://blog.logrocket.com/building-custom-checkbox-react/

" Another way we can customize a checkbox is to replace the native input with a non-focusable element like <div> or span and then style it to take the shape of a checkbox. In that case, we must repurpose the element by adding ARIA attributes like role="checkbox", aria-checked, tabindex="0" to support assistive technology. "

# Etc

Solution: prevent HTML5 validation error message bubble

> https://gist.github.com/edysegura/9984108
> document.addEventListener('invalid', (function(){

    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };

})(), true);

# Codesandbox

### !! Custom Input Component !!

> https://codesandbox.io/s/custom-input-component-input-as-entire-field-forked-97wzvk

# React Docs

Children -> pass child components into a parent react component

> https://beta.reactjs.org/reference/react/Children#alternatives

Input Component

> https://beta.reactjs.org/reference/react-dom/components/input

Forms

> https://reactjs.org/docs/forms.html

Synthetic Event

> https://reactjs.org/docs/events.html

## Custom Select

Accessible Custom Select

> https://codepen.io/tcomdev/pen/WNXeqoG > https://towardsdev.com/how-to-create-an-accessible-custom-select-dropdown-in-react-9d9858415f10

Custom React Select -> Class Component

> https://codesandbox.io/s/react-custom-select-bpsi7?file=/src/CustomSelect.js
