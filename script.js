// FADE ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// TYPING EFFECT
const text = ["Jimson Ragas", "a Civil Engineer", "an Estimator"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
        }

        if (i === text.length) i = 0;

        setTimeout(type, isDeleting ? 50 : 100);
    }
}

type();
