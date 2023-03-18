const $=(selector)=>document.querySelector(selector)

//Imagen que ingresará el usuario//

/*const url = prompt (`Ingrese su imagen`)

$("#image").src = url*/

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

