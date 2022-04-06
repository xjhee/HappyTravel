const baseUrl = "http://localhost:8081/users/login/"


export const LoginUser = async (formValues) => {
    let hostData  = await fetch(baseUrl + formValues.username);
    let hostText = await hostData.text();
    let hostJson = await JSON.parse(hostText);
    if (hostJson.password == formValues.password) {
        return true;
    }
    return false;

}



