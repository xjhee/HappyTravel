const baseUrl = "http://localhost:8081/events/"

// Fetch events from backend by region 
export async function GetEventsService(destination) {
    let hostData  = await fetch(baseUrl + 'region=' + destination)
    let hostJson = await hostData.json();
    return hostJson
};

export async function GetEventsByUserService(userName) {
    let hostData  = await fetch(baseUrl + 'username=' + userName)
    let hostJson = await hostData.json();
    return hostJson
};

export async function GetEventByIdService(id) {
    let hostData  = await fetch(baseUrl + 'id=' + id)
    let hostJson = await hostData.json();
    return hostJson
};



