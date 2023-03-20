const $=(selector)=>document.querySelector(selector)

//Imagen que ingresará el usuario//

$("#img").addEventListener("input", () => {
    const url = $("#img").value
    $("#meme-box").style.backgroundImage = `url(${url})`
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

//Cambiar color de fondo de la imagen//

$("#color").addEventListener("input", () => {
    const currentColor = $("#color").value
    if (currentColor) {
        $("#meme-box").style.backgroundColor = currentColor
    }
})

//Filtros del fondo de la imagen//

$("#select-list").addEventListener("click", () => {
    const selectList = $("#select-list").value
    $("#meme-box").style.backgroundBlendMode = selectList
})

//Cambiar filtros//

const imageFilters = () => {
    $("#meme-box").style.filter = `brightness(${$("#range-bright").value}) opacity(${$("#range-opacity").value}) contrast(${$("#range-contrast").value}%) blur(${$("#range-blur").value}px) grayscale(${$("#range-gray-scale").value}%) sepia(${$("#range-brown").value}%) hue-rotate(${$("#range-hue").value}deg) saturate(${$("#range-saturated").value}%) invert(${$("#range-negative").value})`
}

$("#range-bright").addEventListener("change", imageFilters)

$("#range-opacity").addEventListener("change", imageFilters)

$("#range-contrast").addEventListener("change", imageFilters)

$("#range-blur").addEventListener("change", imageFilters)

$("#range-gray-scale").addEventListener("change", imageFilters)

$("#range-brown").addEventListener("change", imageFilters)

$("#range-hue").addEventListener("change", imageFilters)

$("#range-saturated").addEventListener("change", imageFilters)

$("#range-negative").addEventListener("change", imageFilters)

