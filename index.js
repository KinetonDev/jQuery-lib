const jQueryLib = {
    addClass: addClass,
    removeClass: removeClass
}

const div = document.querySelector("div")

jQueryLib.addClass(div, () => {
    return "1 2 3"
})

jQueryLib.removeClass(div, "1 2")