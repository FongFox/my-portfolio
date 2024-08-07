// System.out.println("Hello World");
// const text = 'System.out.println(' + '"Hello World"' + ");";
// let index = 0;
// const speed = 100; // Tốc độ đánh chữ (ms)
// const delay = 1000; // Thời gian chờ trước khi xóa (ms)
// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typewriter-text").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//     } else {
//         setTimeout(eraseText, delay);
//     }
// }
// function eraseText() {
//     if (index > 0) {
//         document.getElementById("typewriter-text").innerHTML = text.substring(0, index - 1);
//         index--;
//         setTimeout(eraseText, speed);
//     } else {
//         setTimeout(typeWriter, delay);
//     }
// }
// window.onload = typeWriter;

const texts = [
    'System.out.println("Hello World");',
    'System.out.println("Detail");',
    'System.out.println("My Project List");',
    'System.out.println("Contact");'
];
let currentIndex = 0;
let charIndex = 0;
const speed = 100; // Tốc độ đánh chữ (ms)
const delay = 1000; // Thời gian chờ trước khi xóa (ms)
const ids = ["typewriter-text-1", "typewriter-text-2", "typewriter-text-3", "typewriter-text-4"];

function typeWriter() {
    if (charIndex < texts[currentIndex].length) {
        document.getElementById(ids[currentIndex]).innerHTML += texts[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delay);
    }
}

function eraseText() {
    if (charIndex > 0) {
        document.getElementById(ids[currentIndex]).innerHTML = texts[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed);
    } else {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeWriter, delay);
    }
}

window.onload = typeWriter;
