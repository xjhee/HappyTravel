import React from 'react';
import HandleProfile from './HandleProfile';
import { Routes, Route } from 'react-router-dom';
import PostEvent from '../post/PostEvent';

function Profile({userName}) {
  return (
    <>
    <Routes>
      <Route path="/" element={<HandleProfile userName={userName}/>} />
      <Route path="/post" element={<PostEvent userName={userName}/>} />
    </Routes>
    </>
  )
}
export default Profile;
