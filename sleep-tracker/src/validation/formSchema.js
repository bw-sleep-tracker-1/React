import * as yup from 'yup';


export default yup.object().shape({

  username: yup.string()
    .required('Must be a User Name')
    .min(6, 'minimum 6 characters'),

  password: yup.string()
    .required('Please provide a valid password')
    .min(6, 'minimum 6 characters'),

    
})
