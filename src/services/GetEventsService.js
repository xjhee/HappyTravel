const baseUrl = "http://localhost:8081/events/"

// Fetch events from backend by region 
async function GetEventsService(destination) {
    let hostData  = await fetch(baseUrl + destination)
    let hostJson = await hostData.json();
    return hostJson
}

export default GetEventsService;



