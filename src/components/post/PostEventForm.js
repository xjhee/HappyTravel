import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import S3UploadService from "../../services/S3UploadService";

const PostEventForm = ({
  onSubmit,
  onChange,
  onFileChange,
  region,
  title,
  text,
  label,
  file,
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
          label="Title"
          name="title"
          value={title}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          id="outlined-text"
          label="Text"
          name="text"
          value={text}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.text}
          helperText={errors.text}
        />
        <TextField
          id="outlined-label"
          label="Label"
          name="label"
          value={label}
          onChange={onChange}
          margin="normal"
          fullWidth={true}
          error={!!errors.label}
          helperText={errors.label}
        />
        <Button
          variant="contained"
          component="label"
          onChange={onFileChange}
        >
          Upload File
          <input
            id="file"
            type="file"
            value={file == null ? '' : file}
            accept="image/*"
            onChange={onChange}
          />
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          className="post-submit"
          type="submit"
        > Submit </Button>
      </form> 
    </div>
  );
};


export default PostEventForm;
