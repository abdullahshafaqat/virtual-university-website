document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.querySelector(".refresh-btn");
    const backBtn = document.querySelector(".back-btn");

    refreshBtn.addEventListener("click", () => {
        location.reload();
    });

    backBtn.addEventListener("click", () => {
        history.back();
    });
});
