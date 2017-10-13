import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form'
import validate from './validate'




import './signinForm.css'

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const buttonStyle = {
  marginTop: 30,
  width: '100%'
};

const SigninForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <div>
          <Field 
            name="email"
            component={renderTextField}
            label="Email"
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="Password"
          />
        </div>
        <div>
          <RaisedButton 
            type="submit" 
            label="Sign In" 
            primary={true}
            disabled={submitting}
          />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'SigninForm', // a unique identifier for this form
  validate
})(SigninForm)