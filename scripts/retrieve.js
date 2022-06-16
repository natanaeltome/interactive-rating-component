function loadData() {
    let rating = sessionStorage.getItem("ratingValue");
    let paragraph = document.getElementById("result");
    let text = document.createTextNode(`You selected ${rating} out of 5`);
    paragraph.appendChild(text);

    sessionStorage.removeItem("ratingValue");
};