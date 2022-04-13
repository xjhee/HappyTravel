const baseUrl = "http://localhost:8081/users/"


export const LoginUser = async (formValues) => {
    let hostData  = await fetch(baseUrl + "login/" + formValues.username);
    let hostJson = await hostData.json();
    if (hostJson.password == formValues.password) {
        return true;
    }
    return false;
};

export const GetUserInfoByName = async (username) => {
    let hostData  = await fetch(baseUrl + "login/" + username);
    let hostJson = await hostData.json();
    return hostJson;
};

export const GetListOfUsers = async () => {
    let hostData  = await fetch(baseUrl);
    let hostText = await hostData.text();
    let hostJson = await JSON.parse(hostText);;
    return hostJson;
};
