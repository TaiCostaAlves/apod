const enviar = document.getElementById("enviar")
const imagem = document.getElementById("resolucao")
const video = document.getElementById("video")

$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=NS4WpN7XODwx5ORusnsIAR94Guq1ygoWAfKc9AMe",
    method: "get",
    success: (resposta) => {
        console.log(resposta)
        document.getElementById("titulo").textContent = resposta.title
        document.getElementById("paragrafo").textContent = resposta.explanation
        date.setAttribute("max", resposta.date)
        if (resposta.media_type == "image") {
            imagem.setAttribute("src", resposta.url)
            imagem.style.display = "flex"
            video.style.display = "none"
        }
        else if (resposta.media_type == "video"){
            video.setAttribute("src", resposta.url)
            video.style.display = "flex"
            imagem.style.display = "none"

        }
    }
})
enviar.addEventListener("click",() => {
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=NS4WpN7XODwx5ORusnsIAR94Guq1ygoWAfKc9AMe&date=${date.value}`,
        method: "get",
        success: (resposta) => {
            console.log(resposta)
            document.getElementById("titulo").textContent = resposta.title
            document.getElementById("paragrafo").textContent = resposta.explanation
            date.setAttribute("max", resposta.date)
            if (resposta.media_type == "image") {
                imagem.setAttribute("src", resposta.url)
                imagem.style.display = "flex"
                video.style.display = "none"
            }
            else if (resposta.media_type == "video"){
                video.setAttribute("src", resposta.url)
                video.style.display = "flex"
                imagem.style.display = "none"
    
            }
        }
    })
}
 )