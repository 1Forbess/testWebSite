document.getElementById("checkAnswers").addEventListener("click", () => {
    const answers = {
        q1: "Б",
        q2: "В",
        // Добавить правильные ответы для остальных вопросов
    };
    
    let correctAnswers = 0;
    let totalQuestions = Object.keys(answers).length;

    Object.keys(answers).forEach((questionId) => {
        const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
        if (selectedOption && selectedOption.value === answers[questionId]) {
            correctAnswers++;
        }
    });

    alert(`Ваш результат: ${correctAnswers} из ${totalQuestions}`);
});




document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Остановка отправки формы

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Проверка введенных данных
    if (username === "admin" && password === "123456") {
        // Перенаправление на main_site.html
        window.location.href = "main_site.html"; // Убедитесь, что этот файл существует
    } else {
        document.getElementById("message").innerText = "Неверное имя пользователя или пароль.";
    }
});
