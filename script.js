const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        console.log(content.scrollHeight)

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "50%";
        }
    });
}

function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}


function textEffect() {
    document.querySelectorAll('.text-effect').forEach(e => {
        if (!isScrolledIntoView(e)) return;
        e.classList.remove('text-effect');
        let text = e.getAttribute('data-text');

        let index = 0;
        let interval = setInterval(() => {
            let nexLetters = text.slice(0, index);

            nexLetters += '0'.repeat(text.length - index + 1).split('').map(v => LETTERS[Math.round(Math.random() * (LETTERS.length - 1))]).join('')

            e.innerHTML = nexLetters;
            index += 1 / 2;

            if (nexLetters == text) clearInterval(interval);
        }, 30)
    })
}

window.onscroll = (event) => { textEffect() };
window.onresize = (event) => { textEffect() };
window.onload = (event) => { textEffect() };

document.onscroll = (event) => { textEffect() };
document.onresize = (event) => { textEffect() };
document.onload = (event) => { textEffect() };