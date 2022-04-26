import React, { useState, useEffect } from 'react';
import { GetFollowersCountService, 
        GetFollowingCountService, 
        GetFollowersService, 
        GetFollowingsService } from '../../services/GetFollowersService';
import { GetEventsCountByUserService } from "../../services/GetEventsService";
import { GetUserInfoByName } from "../../services/UsersService";

export function RenderFollowSectionInfo(props) {
    const [postCount, setPostCount] = useState(0);
    const [followerCount, setFollowerCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
    useEffect(() => {
      const getCount = async () => {
        const post = await GetEventsCountByUserService(props.username);
        const follower = await GetFollowersCountService(props.username);
        const following = await GetFollowingCountService(props.username);
        setPostCount(post);
        setFollowerCount(follower);
        setFollowingCount(following);
      }
      getCount().catch(console.error);
    }, []);
    return (
      <div style={{display: 'flex', justifyContent: 'space-around', width: '120%'}}>
        <a href=''> {postCount} posts </a>
        <a href={'/profile/' + props.username + '/followers'}> {followerCount} followers </a>
        <a href={'/profile/' + props.username + '/followings'}> {followingCount} following </a>
      </div>
    )
  };


export function RenderFollowers(props) {
    const [followerList, setFollowerList] = useState([]);
    useEffect(() => {
        const getFollowers = async () => {
          const followers = await GetFollowersService(props.username);
          setFollowerList(followers);
        }
        getFollowers().catch(console.error);
      }, []);
    return (
        <div>
            {followerList.map((s) => <li> {s.username} </li>)}
        </div>
    )
};

export function RenderFollowings(props) {
    const [followingList, setFollowingList] = useState([]);
    useEffect(() => {
        const getFollowers = async () => {
          const followings = await GetFollowingsService(props.username);
          setFollowingList(followings);
        }
        getFollowers().catch(console.error);
      }, []);
    return (
        <div>
            {followingList.map((s) => <li> {s.username} </li>)}
        </div>
    )
}

