function storeData() {
    let rating = -1;

    if (document.getElementById("opt1").checked) rating = 1;
    if (document.getElementById("opt2").checked) rating = 2;
    if (document.getElementById("opt3").checked) rating = 3;
    if (document.getElementById("opt4").checked) rating = 4;
    if (document.getElementById("opt5").checked) rating = 5;

    sessionStorage.setItem("ratingValue", rating);
}