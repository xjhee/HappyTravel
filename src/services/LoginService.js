import { useState } from "react";

const baseUrl = "http://localhost:8081/users/login/"


export const LoginUser = async (formValues) => {

    /*return fetch(baseUrl + formValues.username)
                        .then(response => response.text()) //returned response wasn't in the valid json, so for the sake of completeness here is a code for text
                        .then((data) => {
                            const userUserPassword = JSON.parse(data).password;
                            const userServerPassword = formValues.password;
                            if (userUserPassword == userServerPassword) {
                                return true;
                            }
                            return false;
                        }
                    ); */

    let hostData  = await fetch(baseUrl + formValues.username);
    let hostText = await hostData.text();
    let hostJson = await JSON.parse(hostText);
    if (hostJson.password == formValues.password) {
        return true;
    }
    return false;

}



