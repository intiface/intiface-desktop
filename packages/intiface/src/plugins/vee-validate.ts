import Vue from "vue";
import { ValidationProvider, extend } from 'vee-validate';
import { required, numeric, min_value, max_value } from 'vee-validate/dist/rules';
 
// Register it globally
// main.js or any entry file.
Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
  ...required,
  message: "This field is required."
});

extend('numeric', {
  ...numeric,
  message: "Must be a number."
})

extend('min_value', {
  ...min_value,
  message: "Value too low."
})

extend('max_value', {
  ...min_value,
  message: "Value too high."
})