import React from 'react';
import { useState } from "react";
import CardItem from '../CardItem';
import { GetUserInfoByName } from "../../services/UsersService"
import { GetEventsByUserService } from "../../services/GetEventsService"

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
          <div style={{display: 'flex', justifyContent: 'space-around', width: '120%'}}>
            <h5>40 posts</h5>
            <h5>40 followers</h5>
            <h5>40 following</h5>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
          <RenderUser username={userName} />
      </div>
    </div>
  )
};


function RenderUser(props) {
  const [userimages, setUserImages] = useState([]);

  const handleUserImages = async (username) => {
      let jsonDataArray = await GetEventsByUserService(username);
      setUserImages(jsonDataArray);
  };
  handleUserImages(props.username);
  return (
      <>
        <ul className='cards__items'>
            {userimages.map((image, index) => (
                <CardItem 
                    src={image.image}
                    path={image.label}
                    label={image.label}
                    text={image.text}
                />
            ))}
        </ul>
      </>
  
  );
}
export default HandleProfile;
