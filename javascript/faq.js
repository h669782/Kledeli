const faqQuestions = document.querySelectorAll(".faq-question");
const faqAnswers = document.querySelectorAll(".faq-answer");

faqQuestions.forEach((faqQuestion, index) => {
    faqQuestion.addEventListener('click', () => {
        const faqAnswer = faqAnswers[index];

        if(faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
            faqQuestion.querySelector(".faq-toggle").innerText = "+";
            faqAnswer.querySelector("p").style.opacity = "0";
            faqAnswer.querySelector("p").style.transform = "translateY(-10px)";
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            faqQuestion.querySelector(".faq-toggle").innerText = "-";
            setTimeout(() => {
                faqAnswer.querySelector("p").style.opacity = "1";
                faqAnswer.querySelector("p").style.transform = "translateY(0)";
            }, 300);
        }
    });
});
