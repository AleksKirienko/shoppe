let elements = document.querySelectorAll("section.content > div.card-md, div.top__card-md, div.left__card-lg, div.left__card-sm");

let color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() + " 3px solid";

for (let elem of elements) {
    if (Math.round(Math.random()) === 1)
        elem.style.border = color;
    console.log(elements.innerHTML);
}

let timeoutId = setTimeout(function () {
    window.location.reload(1);
}, 2000);

// clearTimeout(timeoutId);
