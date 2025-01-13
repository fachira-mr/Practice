// fungsi mengganti tema
function changeTheme(theme) {
    document.body.className = "";
    document.body.classList.add(theme);
}

document.getElementById("default").addEventListener("click", () => changeTheme("default"));
document.getElementById("dark").addEventListener("click", () => changeTheme("dark"));
document.getElementById("grey").addEventListener("click", () => changeTheme("grey"));
document.getElementById("blue").addEventListener("click", () => changeTheme("blue"));
document.getElementById("beige").addEventListener("click", () => changeTheme("beige"));
document.getElementById("pink").addEventListener("click", () => changeTheme("pink"));

// fungsi menampilkan emoji
function displayEmoji(emoji) {
    document.getElementById("emoji").textContent = emoji;
}

document.getElementById("happy").addEventListener("click", () => displayEmoji("😀"));
document.getElementById("sad").addEventListener("click", () => displayEmoji("😔"));
document.getElementById("angry").addEventListener("click", () => displayEmoji("😠"));
document.getElementById("awkward").addEventListener("click", () => displayEmoji("😳"));
document.getElementById("dontKnow").addEventListener("click", () => displayEmoji("😐"));

// fungsi menampilkan gambar
function displayImage(imageSrc, text) {
    document.getElementById("gift").src = imageSrc;
    const lastText = document.getElementById("lastText");
    lastText.textContent = text;
    lastText.style.display = "block";
}

document.getElementById("img1").addEventListener("click", () => displayImage("images/pocoyo2.gif"));
document.getElementById("img2").addEventListener("click", () => displayImage("images/pocoyo1.gif", "Whether you like it or not, you'll still see Pocoyo, hehe"));

// fungsi generate angka acak dari 1-10
const randomNumber = Math.floor(Math.random()*10)+1;

// fungsi mengecek input jawaban dan menonaktifkan tombol ketika inputnya benar
function checkAnswer() {
    const answer = parseInt(document.getElementById("answer").value);
    const result = document.getElementById("result");
    const button = document.getElementById("checkButton");

    if (answer === randomNumber) {
        result.textContent = "Congratulations!";
        result.style.color = "green";

        button.disabled = true;
    } else {
        result.textContent = "Try Again!";
        result.style.color = "red";
    }
}