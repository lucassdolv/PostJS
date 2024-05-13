const formCad = document.getElementById("formCad");

formCad.addEventListener("submit", (e)=>{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    e.preventDefault();

    const userData =  JSON.stringify({
        name:name.value,
        email:email.value,
        password:password.value
    })

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "Post",
        body: userData,
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
    
        console.log(userData)
});

