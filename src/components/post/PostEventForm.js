import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PostEventForm = ({
  onSubmit,
  onChange,
  region,
  text,
  label,
  image,
  errors
}) => {

  return (
    <div className='post-event-container'>
      <h1> Post Events</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-region"
          label="Region"
          name="region"
          value={region}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.region}
          helperText={errors.region}
        />
        <TextField
          id="outlined-text"
          label="Text"
          name="text"
          value={text}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-label"
          label="Label"
          name="label"
          value={label}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-image"
          label="Image"
          name="image"
          value={image}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
        />
        <Button 
          variant="contained" 
          color="primary" 
          className="sign-up-submit"
          type="submit"
        > Submit </Button>
      </form> 
    </div>
  );
};


export default PostEventForm;
