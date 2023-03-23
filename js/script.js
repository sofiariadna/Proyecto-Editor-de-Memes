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


//Text sidebar functionalities//



//Modify top text//

$("#top-text").addEventListener("input", () => {
    const innerText = $("#top-text").value
    $("#superior-text").innerText = innerText.toUpperCase()
})

//Top text checkbox//

$("#no-superior-text").addEventListener("click", () => {

    const isChecked = $("#no-superior-text").checked
    
    if (isChecked) {
        $(".top-text").style.display = "none"
    }
    else {
        $(".top-text").style.display = "block"
    }
})

//Modify bottom text//

$("#bottom-text").addEventListener("input", () => {
    const innerText = $("#bottom-text").value
    $("#lower-text").innerText = innerText.toUpperCase()
})

//Bottom text checkbox//

$("#no-bottom-text").addEventListener("input", () => {

    const isChecked = $("#no-bottom-text").checked
    
    if (isChecked) {
        $("#lower-text").style.display = "none"
    }
    else {
        $("#lower-text").style.display = "block"
    }
})

//Modify top text's font family//

$("#select-list-2").addEventListener("click", () => {
    const selectList = $("#select-list-2").value
    $("#superior-text").style.fontFamily = selectList
})

//Modify bottom text's font family//

$("#select-list-2").addEventListener("click", () => {
    const selectList = $("#select-list-2").value
    $("#lower-text").style.fontFamily = selectList
})

//Modify font size//

$("#number").addEventListener("input", () => {
    $(".top-text").style.fontSize = `${$("#number").value}px`
    $(".bottom-text").style.fontSize = `${$("#number").value}px`
})

//Text align buttons//

$("#left-button").addEventListener("click", () => {
    $(".top-text").style.textAlign = "left"
})

$("#center-button").addEventListener("click", () => {
    $(".top-text").style.textAlign = "center" 
})

$("#right-button").addEventListener("click", () => {
    $(".top-text").style.textAlign = "right"
})

$("#left-button").addEventListener("click", () => {
    $(".bottom-text").style.textAlign = "left"
})

$("#center-button").addEventListener("click", () => {
    $(".bottom-text").style.textAlign = "center" 
})

$("#right-button").addEventListener("click", () => {
    $(".bottom-text").style.textAlign = "right"
})

//Change text color//

$("#change-color").addEventListener("input", () => {
    const currentColor = $("#change-color").value
    if (currentColor) {
        $("#superior-text").style.color = currentColor
    }
})

$("#change-color").addEventListener("input", () => {
    const currentColor = $("#change-color").value
    if (currentColor) {
        $("#lower-text").style.color = currentColor
    }
})

//Change text background//

$("#change-bg").addEventListener("input", () => {
    $("#superior-text").style.background = `${$("#change-bg").value}`
})

$("#change-bg").addEventListener("input", () => {
    $("#lower-text").style.background = `${$("#change-bg").value}`
})

//Transparent bg//

$("#transparent-bg").addEventListener("input", () => {

    const isChecked = $("#transparent-bg").checked
    
    if (isChecked) {

        $("#superior-text").style.backgroundColor = "transparent"
        $("#superior-text").style.position = "absolute"
        
    }
    else {

        $("#superior-text").style.backgroundColor = `${$("#change-bg").value}`
        $("#superior-text").style.position = "relative"
        
    }
})

$("#transparent-bg").addEventListener("input", () => {

    const isChecked = $("#transparent-bg").checked

    if (isChecked) {

        $("#lower-text").style.backgroundColor = "transparent"
        $("#lower-text").style.position = "absolute"
        $("#lower-text").style.bottom = "0"
        
    }

    else {

        $("#lower-text").style.backgroundColor = `${$("#change-bg").value}`
        $("#lower-text").style.position = "relative"
        
    }
})

//Contouring//

$("#contouring-btn-none").addEventListener("click", () => {
    $("#superior-text").style.textShadow = "none"
    $("#lower-text").style.textShadow = "none"
})

$("#contouring-btn-clear").addEventListener("click", () => {

    $("#superior-text").style.textShadow = "2px 2px 2px #ffff"
    $("#lower-text").style.textShadow = "2px 2px 2px #ffff"

})

$("#contouring-btn-dark").addEventListener("click", () => {

    $("#superior-text").style.textShadow = "2px 2px 2px black"
    $("#lower-text").style.textShadow = "2px 2px 2px black"
    
})

//Space//

$("#space"),addEventListener("input", () => {

    $("#superior-text").style.padding = `${$("#space").value}px`
    $("#lower-text").style.padding = `${$("#space").value}px`

})

//Leading//

$("#leading").addEventListener("input", () => {

    $("#superior-text").style.lineHeight = `${$("#leading").value}`
    $("#lower-text").style.lineHeight = `${$("#leading").value}`
    
})





