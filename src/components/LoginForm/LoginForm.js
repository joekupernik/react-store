import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required').min(10, 'Too Short!')
    .max(40, 'Too Long!'),
});


const LoginForm = () => {


  const validatePassword = values => {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
      error = "*Required";
    } else if (values.length < 8) {
      error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
  };

  

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
        }}

        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>

            <label htmlFor="email" style={{margin: '2%'}}>Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="Password" style={{margin: '2%'}}>Create Password</label>
            <Field
              type= "password"
              name="password"
              placeholder="Password"
              validate= {validatePassword}
            />
            {errors.password && touched.password? <div>{errors.password}</div> : null}

            
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

