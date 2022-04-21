const baseUrl = "http://localhost:8081/followers/"

// Fetch followers from backend by user id 
export async function GetFollowersService(userId) {
    let hostData  = await fetch(baseUrl + "count/follower=" + userId)
    let hostJson = await hostData.json();
    return hostJson
};

export async function GetFollowingService(userId) {
    let hostData  = await fetch(baseUrl + "count/following=" + userId)
    let hostJson = await hostData.json();
    return hostJson
}; 


