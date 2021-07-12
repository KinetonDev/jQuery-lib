const jQueryLib = {
    addClass: addClass,
    removeClass: removeClass,
    append: append,
    remove: remove,
    text: text,
    attr: attr,
    children: children,
    empty: empty,
    css: css,
    click: click
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

console.log(jQueryLib.children(div))

console.log(jQueryLib.children(div, 'div'))

console.log(jQueryLib.css(div, ['height', 'width', 'backgroundColor']))
console.log(jQueryLib.css(div, 'color'))
jQueryLib.css(div, {
    "background-color" : "red",
    "something" : "bad",
    "color" : "blue"
})

jQueryLib.css(div, "height", "20px")
jQueryLib.css(div, "height", "-=15")

jQueryLib.click(div, (e) => {
    alert("i'm clicked");
})

jQueryLib.empty(div)
