/** @format */

import {extend} from 'vee-validate';
import {required, max} from 'vee-validate/dist/rules';

// Add a rule.
extend('required', {
  ...required,
  message: '{_field_} is required',
});
extend('requiredSelect', {
  ...required,
  message: '{_field_} is required',
});
extend('numeric', {
  ...required,
  message: '{_field_} is required , require only number',
});
extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length}',
});
extend('validateXeRate', {
  message: '{_field_} value is not valid.',
  validate: (value) => {
    const Regex = new RegExp('^[0-9]{1,2}(\\.[0-9]{1,4})?$');
    return Regex.test(value);
  },
});
extend('validateAmount', {
  message: '{_field_} value is not valid.',
  validate: (value) => {
    const Regex = new RegExp('^[0-9]{1,8}(\\.[0-9]{1,2})?$');
    return Regex.test(value);
  },
});
extend('validateAmountExpense', {
  message: '{_field_} value is not valid.',
  validate: (value) => {
    const Regex = new RegExp('^[0-9]{1,13}(\\.[0-9]{1,2})?$');
    return Regex.test(value);
  },
});
extend('validateEmployee', {
  message: '{_field_} value is not valid.',
  validate: (value) => {
    const Regex = new RegExp('^[0-9]{1,8}(\\.[0-9]{1,2})?$');
    return Regex.test(value);
  },
});

extend('confirmPassword', {
  params: ['target'],
  validate(value, {target}) {
    return value === target;
  },
  message: 'Password confirmation does not match',
});
