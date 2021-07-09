const jQueryLib = {
    addClass: addClass,
    removeClass: removeClass,
    append: append,
    remove: remove,
    text: text
}

const div = document.querySelector("div")

jQueryLib.addClass(div, () => {
    return "1 2 3"
})

jQueryLib.removeClass(div, "1 2")

jQueryLib.append(div, [document.createElement('a'), document.createElement('div')], "<p>Paragraph</p>");

console.log(jQueryLib.text(div))