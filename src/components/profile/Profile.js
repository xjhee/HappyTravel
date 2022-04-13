import React from 'react';
import HandleProfile from './HandleProfile';
import Footer from '../Footer';

function Profile({userName}) {
  return (
    <>
    <HandleProfile userName={userName}/>
    <Footer />
    </>
  )
}
export default Profile;
