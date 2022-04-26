const baseUrl = process.env.REACT_APP_FOLLOWERS_URL

// Fetch followers from backend by user id 
export async function GetFollowersCountService(userId) {
    let hostData  = await fetch(baseUrl + "count/follower=" + userId)
    let hostJson = await hostData.json();
    return hostJson
};

export async function GetFollowingCountService(userId) {
    let hostData  = await fetch(baseUrl + "count/following=" + userId)
    let hostJson = await hostData.json();
    return hostJson
}; 

export async function GetFollowersService(userId) {
    let hostData  = await fetch(baseUrl + "follower=" + userId)
    let hostJson = await hostData.json();
    return hostJson
}; 

export async function GetFollowingsService(userId) {
    let hostData  = await fetch(baseUrl + "following=" + userId)
    let hostJson = await hostData.json();
    return hostJson
}; 
