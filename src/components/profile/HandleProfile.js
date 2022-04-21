import React, { useEffect } from 'react';
import { useState } from "react";
import CardItem from '../CardItem';
import { GetUserInfoByName } from "../../services/UsersService";
import { GetEventsByUserService, GetEventsCountByUserService } from "../../services/GetEventsService";
import { v4 as uuid } from 'uuid';
import { Button } from '../home/Button';
import { GetFollowersService, GetFollowingService } from '../../services/GetFollowersService';
/*
TODO: 
1. add follower, following info
*/

const HandleProfile = ({userName}) => {
  const [userPhoto, setUserPhoto] = useState(null);

  const handleUserPhoto = async(username) => {
    let jsonData = await GetUserInfoByName(username);
    setUserPhoto(jsonData.photo)
  };

  handleUserPhoto(userName);
  return (
    <div
        style={{
        fontSize: '22px'
    }}>
      <div>
        <div style={{
          display: 'inline-block', 
          margin: '20px 10px',
          padding: '30px',
          width: '30%',
        }}>
          <img style={{width: '160px', height: '160px', borderRadius: '80px'}}
           src={userPhoto} />
        </div>
        <div style={{
          display: 'inline-block',
          margin: '10px 10px',
          padding: '30px',
          float: 'center',
        }}>
          <h4>{userName}</h4>
          <RenderFollower username={userName} />
        </div>
        <div style={{
          display: 'inline-block',
          margin: '30px 60px',
          padding: '20px',
          float: 'center'
        }}>
          <Button buttonStyle='btn--primary' to='post'> Post your destination </Button>
        </div>
      </div>
      <div className='posts'>
        <RenderUser username={userName} />
      </div>
    </div>
  )
};

function RenderUser(props) {
  const [userimages, setUserImages] = useState([]);
  useEffect(() => {
    const jsonDataArray = async () => {
      const data = await GetEventsByUserService(props.username);
      setUserImages(data);
    }
    jsonDataArray().catch(console.error);
  }, []);


  return (
      <>
        <h4> Your Posts</h4>
          <ul className='cards__items'>
              {userimages.map((image, index) => (
                  <CardItem 
                      key={uuid()}
                      src={image.image}
                      path={'' + image.id}
                      label={image.label}
                      title={image.title}
                  />
              ))}
          </ul>
      </>
  
  );
}

function RenderFollower(props) {
  const [postCount, setPostCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  useEffect(() => {
    const getCount = async () => {
      const post = await GetEventsCountByUserService(props.username);
      const follower = await GetFollowersService(props.username);
      const following = await GetFollowingService(props.username);
      setPostCount(post);
      setFollowerCount(follower);
      setFollowingCount(following);
    }
    getCount().catch(console.error);
  }, []);
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', width: '120%'}}>
      <h5>{postCount} posts</h5>
      <h5>{followerCount} followers</h5>
      <h5>{followingCount} following</h5>
    </div>
  )
}

export default HandleProfile;
