const form = document.querySelector('.form-container');
const submitFormBtn = document.querySelector('.form-submit');
const closeFormBtn = document.querySelector('.close')

submitFormBtn.addEventListener('click', () => {
    form.style.display = 'block';
})

closeFormBtn.addEventListener('click', () => form.style.display = 'none')

document.addEventListener('mousedown', function (event) {
    if (!form.contains(event.target)) {
        form.style.display = 'none';
    }
});