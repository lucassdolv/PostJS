const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const mensagem = document.getElementById("mensagem").value;
    const imageFile = document.getElementById("imageInput").files[0];

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", mensagem);
    formData.append("image", imageFile);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGVtYWlsZGVsZW1lc21vLmNvbS5iciIsInVzZXJJZCI6IjY2NDI2MzU1MjZmYjQ0MTRiMmI4ZWIzMCIsImlhdCI6MTcxNTcxMjA5MiwiZXhwIjoxNzE1NzI2NDkyfQ.78uSmuoZEqQhj1h0k4IIDMkRJQVykr1IrFArdB65Xdg";

    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log("Resposta do servidor:", data))
    .catch((error) => console.error("Erro ao enviar postagem:", error));
});