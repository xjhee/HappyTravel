const baseUrl = process.env.REACT_APP_USERS_URL + "signup"


export const SignUpUser = (formValues) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formValues.username,
          email: formValues.email,
          password: formValues.password
        }),
      }).then((res) => res.json());

    
}