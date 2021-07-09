const jQueryLib = {
    addClass: addClass,
    removeClass: removeClass,
    append: append,
    remove: remove,
    text: text,
    attr: attr,

}

const div = document.querySelector("div")

jQueryLib.addClass(div, () => {
    return "1 2 3"
})

jQueryLib.removeClass(div, "1 2")

jQueryLib.append(div, [document.createElement('a'), document.createElement('div')], "<p>Paragraph</p>");

console.log(jQueryLib.text(div))

//  jQueryLib.text(div, "<h1>Hello my name is John</h1>")

console.log(jQueryLib.attr(div, "attr"))

jQueryLib.attr(div, "attr", "ATTTTTTT")

jQueryLib.attr(div, {
    attr: "attributeSet",
    attr1: "smth"
})

