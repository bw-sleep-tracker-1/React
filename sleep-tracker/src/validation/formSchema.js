import * as yup from 'yup';


export default yup.object().shape({

  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Please provide a valid password')
    .min(6, 'minimum 6 characters'),

    
})
