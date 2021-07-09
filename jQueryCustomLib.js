function addClass(htmlTag, className) {
    if (className instanceof Function) {
        let classNames = className();

        if (classNames instanceof Array) {
            classNames.forEach((elem) => htmlTag.classList.add(elem));
            return;
        }

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
    if (className instanceof Function) {
        let classNames = className();

        if (classNames instanceof Array) {
            classNames.forEach((elem) => htmlTag.classList.remove(elem));
            return;
        }

        className().split(' ').forEach((elem) => htmlTag.classList.remove(elem));
        return;
    }

    if (className instanceof Array) {
        className.forEach((elem) => htmlTag.classList.remove(elem));
        return;
    }

    className.split(' ').forEach((elem) => htmlTag.classList.remove(elem));
}

function append(htmlTag, ...content) {
    content.forEach(contentElement => {
        if (contentElement instanceof Element) {
            htmlTag.append(contentElement);
            return;
        }

        if (contentElement instanceof Array) {
            contentElement.forEach((elem) => htmlTag.append(elem));
            return;
        }

        const parser = new DOMParser();
        let doc = parser.parseFromString(contentElement, 'text/html');
        doc.body.childNodes.forEach((elem) => htmlTag.append(elem));
    })
}

function remove(htmlTag) {
    htmlTag.remove();
}

function text(htmlTag, textContent) {
    if (textContent === undefined) {
        let innerText = htmlTag.innerText;

        while (innerText.includes('\n')) {
            innerText = innerText.replace('\n', ' ');
        }

        while (innerText.includes('  ')) {
            innerText = innerText.replace('  ', ' ');
        }

        return innerText;
    }

    let doc = new DOMParser().parseFromString(textContent, 'text/html');
    htmlTag.innerText = "";
    doc.body.childNodes.forEach(elem => htmlTag.append(elem));
}

function attr(htmlTag, attribute, value) {
    if (attribute instanceof Object) {
        for (const attributeName in attribute) {
            if (htmlTag.hasAttribute(attributeName)) {
                htmlTag.setAttribute(attributeName, attribute[attributeName]);
            }
        }
    }

    if (value === undefined)
        return htmlTag.getAttribute(attribute);


    htmlTag.setAttribute(attribute, value);
}

function children() {

}

function empty() {

}

function css() {

}

function click() {

}