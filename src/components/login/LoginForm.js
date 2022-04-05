import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({
  onSubmit,
  onChange,
  username,
  email,
  password,
  errors
}) => {

  return (
    <div className='login-container'>
      <h1> Login Here</h1>
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
          className="login-submit"
          type="submit"
          to="/"
        > Submit </Button>
      </form> 
      <p>
      <br />Problem logging in? <br />
        <a href='/signup'> Sign up here</a>
      </p>
    </div>
  );
};


export default LoginForm;
