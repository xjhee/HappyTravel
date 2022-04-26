import React from 'react';
import HandleProfile from './HandleProfile';
import { Routes, Route } from 'react-router-dom';
import PostEvent from '../post/PostEvent';
import { RenderFollowers, RenderFollowings } from './HandleFollows';
import { useParams } from 'react-router-dom';

function Profile({userName}) {
  return (
    <>
    <Routes>
      <Route path="/*" exact element={<HandleProfile userName={userName}/>} />
      <Route path="/post" element={<PostEvent userName={userName}/>} />
      <Route path="/:username/followers" exact element={< DisplayFollowerText username={userName}/>} />
      <Route path="/:username/followings" exact element={< DisplayFollowingText username={userName}/>} />
    </Routes>
    </>
  )
}

function DisplayFollowerText(props) {
  let { username } = useParams();
  return (
      <>
      <h2> Follower information as below:</h2>
      <br />
          <div>
            <RenderFollowers username={props.username} />
          </div>
      </>
  )
};

function DisplayFollowingText(props) {
  let { username } = useParams();
  return (
      <>
      <h2> Follower information as below:</h2>
      <br />
          <div>
            <RenderFollowings username={props.username} />
          </div>
      </>
  )
};
export default Profile;
