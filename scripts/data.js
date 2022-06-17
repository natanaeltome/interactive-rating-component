function storeData() {
    const form = document.getElementById('rating');

    form.addEventListener('submit', (event) => {
        const rating = document.querySelector('input[name=feedback]:checked').value;
        sessionStorage.setItem("ratingValue", rating);
    });
}