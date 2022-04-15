const baseUrl = "http://localhost:8081/events/post"

export const PostService = (formValues, userName) => {
    const post_body = JSON.stringify({
        region: formValues.region,
        text: formValues.text,
        label: formValues.label,
        image: formValues.image, 
        username: userName
      })
    fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: post_body,
      }).then((res) => res.json());
}