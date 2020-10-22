import * as Yup from 'yup';
import moment from 'moment';

const LEGAL_AGE = moment().subtract(18, 'years').startOf('day');
const GENERIC_STRING_VALIDATION = Yup.string().min(2)

const USER_VALIDATION = {
  username: Yup.string()
    .min(2)
    .max(50)
    .required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  firstName: GENERIC_STRING_VALIDATION.required(),
  middleName: GENERIC_STRING_VALIDATION.required(),
  lastName: GENERIC_STRING_VALIDATION.required(),
  password2: Yup.string()
  .oneOf([Yup.ref('password')], 'Passwords must match'),
  rank: Yup.number().required(),
  graduatedFrom: GENERIC_STRING_VALIDATION.required(),
  birthday: Yup.date().max(LEGAL_AGE).required(),
  address: GENERIC_STRING_VALIDATION.required(),
  phoneNumber: Yup.string().min(6).required(),
  company: GENERIC_STRING_VALIDATION,
  referredBy: GENERIC_STRING_VALIDATION,
}

export { USER_VALIDATION };
