import React from 'react';
import { useState } from "react";
import CardItem from '../CardItem';
import { GetEventsByUserService } from "../../services/GetEventsService"

/*
TODO: 
1. add profile photo
2. add follower, following info
*/

const Profile = ({userName}) => {

  return (
    <div style={{
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
           src='https://images.unsplash.com/photo-1610353087277-cb32686df0d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'/>
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
      <div className='gallery'>
          <RenderUser username={userName} />
      </div>
    </div>
  )
};

/* <RenderUser username={userName} />*/
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
export default Profile;
