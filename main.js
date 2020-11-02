let elements = document.querySelectorAll("section.content > div.card-md, div.top__card-md, div.left__card-lg, div.left__card-sm");

let color;

function checkRand(c) {
    for (let elem of elements) {
        if (Math.round(Math.random()) === 1)
            elem.style.border = c;
        console.log(elements.innerHTML);
    }
}

let timeoutId = setInterval(function () {
    color = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() + " 3px solid";
    checkRand(color);
    checkRand("white");
}, 2000);

// clearInterval(intervalId);
