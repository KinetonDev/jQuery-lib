function addClass(htmlTag, className) {
    if (className instanceof Function) {
        className().split(' ').forEach((elem) => htmlTag.classList.add(elem));

        return;
    }

    if (className instanceof Array) {
        className.forEach((elem) => htmlTag.classList.add(elem));

        return;
    }

    className.split(' ').forEach((elem) => htmlTag.classList.add(elem))
}

function removeClass(htmlTag, className) {
    htmlTag.classList.remove(className)
}

function removeClass(htmlTag, ...classNames) {
    htmlTag.classList.remove(classNames)
}

function removeClass(htmlTag, classNameCreator) {
    htmlTag.classList.remove(classNameCreator())
}

function append() {

}

function remove() {

}

function text() {

}

function attr() {

}

function children() {

}

function empty() {

}

function css() {

}

function click() {

}