// Անհրաժեշտ փոփոխականներ
let score = 0;
let timeLeft = 30;
let timer;
let currentX;

// Հաջորդ հարցը և հաշվարկը
function newQuestion() {
    currentX = Math.floor(Math.random() * 21) - 10; // Ընտրել -10-ից 10 միջակայքում
    const correctAnswer = currentX ** 2;
    document.getElementById('question').textContent = `Հաշվեք՝ f(${currentX}):`;
    return correctAnswer;
}

// Արձագանքման մշակումը
function checkAnswer(correctAnswer) {
    const userAnswer = parseFloat(document.getElementById('user-answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('result').textContent = "Ճիշտ է!";
    } else {
        document.getElementById('result').textContent = `Սխալ է: Ճիշտ պատասխանը՝ ${correctAnswer}.`;
    }
    document.getElementById('user-answer').value = ''; // Մաքրել դաշտը
}

// Սկսել խաղը
function startGame() {
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('result').textContent = `Խաղի վերջ! Ձեր միավորները՝ ${score}`;
            document.getElementById('submit-answer').disabled = true;
        }
    }, 1000);

    // Սկսել հարցերը
    const correctAnswer = newQuestion();

    // Հետևել պատասխանի համար
    document.getElementById('submit-answer').addEventListener('click', function() {
        checkAnswer(correctAnswer);
        if (timeLeft > 0) {
            newQuestion();
        }
    });
}

// Մեկնարկել խաղը
startGame();