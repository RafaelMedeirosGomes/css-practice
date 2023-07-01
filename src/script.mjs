window.addEventListener("load", () => {
    const progressSteps = window.document.querySelectorAll(".c-progress__step");
    const barDone = window.document.querySelector(".c-progress_bar.is--active");
    const barTodo = window.document.querySelector(".c-progress_bar.is--inactive");
    const prevBtn = window.document.querySelector(".c-controllers_prev");
    const nextBtn = window.document.querySelector(".c-controllers_next");

    let currentStep = 1;

    const prevStep = () => {
        switch (currentStep) {
            case 2:
                barDone.style.width = `0`;
                barTodo.style.width = `calc(100% - 2rem)`;
                progressSteps[1].classList.remove("is--active");
                progressSteps[1].classList.add("is--inactive");
                prevBtn.disabled = true;
                currentStep -= 1;
                break;
            case 3:
                barDone.style.width = `calc(34% - 1rem)`;
                barTodo.style.width = `calc(66% - 1rem)`;
                progressSteps[2].classList.remove("is--active");
                progressSteps[2].classList.add("is--inactive");
                currentStep -= 1;
                break;
            case 4:
                barDone.style.width = `calc(66% - 1rem)`;
                barTodo.style.width = `calc(34% - 1rem)`;
                progressSteps[3].classList.remove("is--active");
                progressSteps[3].classList.add("is--inactive");
                nextBtn.disabled = false;
                currentStep -= 1;
                break;
        }
    }

    const nextStep = () => {
        switch (currentStep) {
            case 1:
                barDone.style.width = `calc(34% - 1rem)`;
                barTodo.style.width = `calc(66% - 1rem)`;
                progressSteps[1].classList.add("is--active");
                progressSteps[1].classList.remove("is--inactive");
                prevBtn.disabled = false;
                currentStep += 1;
                break;
            case 2:
                barDone.style.width = `calc(66% - 1rem)`;
                barTodo.style.width = `calc(34% - 1rem)`;
                progressSteps[2].classList.add("is--active");
                progressSteps[2].classList.remove("is--inactive");
                currentStep += 1;
                break;
            case 3:
                barDone.style.width = `calc(100% - 2rem)`;
                barTodo.style.width = `0`;
                progressSteps[3].classList.add("is--active");
                progressSteps[3].classList.remove("is--inactive");
                nextBtn.disabled = true;
                currentStep += 1;
                break;
        }
    }

    prevBtn.addEventListener("click", prevStep);
    nextBtn.addEventListener("click", nextStep);
})