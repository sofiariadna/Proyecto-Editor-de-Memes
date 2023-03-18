const $=(selector)=>document.querySelector(selector)

//Imagen que ingresará el usuario//

$("#img").addEventListener("input", () => {
    const url = $("#img").value
    $("#meme-box").style.backgroundImage = `url (${url})`
})


//Dark Mode//

$("#change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("body").removeAttribute("data-theme", "light-theme")
    }

    else {
        $("body").setAttribute("data-theme", "light-theme")
    }
})

