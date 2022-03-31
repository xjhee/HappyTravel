import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUpForm2 = ({
  onSubmit,
  onChange,
  username,
  email,
  password,
  errors
}) => {

  return (
    <div className='signup-container'>
      <h1> Sign Up Here</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-name"
          label="Name"
          name="username"
          value={username}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
          id="outlined-email"
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          id="outlined-password"
          label="Password"
          name="password"
          value={password}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button 
          variant="contained" 
          color="primary" 
          className="sign-up-submit"
          type="submit"
        > Submit </Button>
      </form> 
      <p>
      <br />Already have an account? <br />
        <a href='/'> Log in here</a>
      </p>
    </div>
  );
};


export default SignUpForm2;
