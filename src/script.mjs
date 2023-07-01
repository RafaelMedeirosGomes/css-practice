window.addEventListener("load", (_) => {
    const cards = window.document.querySelectorAll(".c-cards__card");
    let currentActiveCard = window.document.querySelector(".c-cards__card.is--active");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            currentActiveCard.classList.remove("is--active");
            currentActiveCard.classList.add("is--inactive");
            card.classList.remove("is--inactive");
            card.classList.add("is--active");
            currentActiveCard = card;
        })
    })

})