const $=(selector)=>document.querySelector(selector)

//Enter image//

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

//Change background color//

$("#color").addEventListener("input", () => {
    const currentColor = $("#color").value
    if (currentColor) {
        $("#meme-box").style.backgroundColor = currentColor
    }
})

//Image filters//

$("#select-list").addEventListener("click", () => {
    const selectList = $("#select-list").value
    $("#meme-box").style.backgroundBlendMode = selectList
})

//Change image filters//

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

//Reset image filters//

const reset = () => {

    $("#range-bright").value = "1"
    $("#range-opacity").value ="1"
    $("#range-contrast").value = "0"
    $("#range-contrast").value = "0"
    $("#range-blur").value = "0"
    $("#range-gray-scale").value = "0"
    $("#range-brown").value = "0"
    $("#range-hue").value = "0"
    $("#range-saturated").value = "0"
    $("#range-negative").value = "0"
    $("#meme-box").style.filter = "none"

}

$("#btn-reset").addEventListener ("click", reset)

//Hide image sidebar//

$("#show-text-sidebar").addEventListener("click", () => {
    $("#image-sidebar").style.display = "none"
    $("#text-sidebar").style.display = "block"
})

//Show image sidebar//

$("#show-image-sidebar").addEventListener("click", () => {
    $("#text-sidebar").style.display = "none"
    $("#image-sidebar").style.display = "block"
})





