
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
const maxAttempts = 7;


const guessedNumbers = [];

while (attempts < maxAttempts) {
    let input = prompt(
        `Lần đoán ${attempts + 1}/${maxAttempts}\nNhập số từ 1 đến 100:`
    );


    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    let guess = Number(input);


    if (
        input.trim() === "" ||
        isNaN(guess) ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        alert("Vui lòng nhập số nguyên từ 1 đến 100!");
        continue;
    }


    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === secretNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    } else if (guess < secretNumber) {
        alert("Cao hơn!");
    } else {
        alert("Thấp hơn!");
    }


    if (attempts === maxAttempts) {
        alert(
            `Bạn đã hết ${maxAttempts} lượt đoán!\nĐáp án là: ${secretNumber}`
        );
    }
}