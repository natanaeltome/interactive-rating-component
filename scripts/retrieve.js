function loadData() {
    console.log(sessionStorage.getItem("ratingValue"));
    let checkedRadioValue = sessionStorage.getItem("ratingValue");
    let paragraph = document.getElementById("final");
    let text = document.createTextNode(`You selected ${checkedRadioValue} out of 5`);
    paragraph.appendChild(text);

    sessionStorage.removeItem("CheckedRadioValue");
};