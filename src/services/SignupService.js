const baseUrl = "http://localhost:8081/users/signup"


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