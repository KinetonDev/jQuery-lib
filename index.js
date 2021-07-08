const jQueryLib = {
    addClass: addClass
}

const div = document.querySelector("div")

jQueryLib.addClass(div, () => {
    return "1 2 3"
})