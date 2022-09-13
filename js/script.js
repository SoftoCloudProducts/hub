let searchField = document.querySelector('#search');

searchField.addEventListener('keypress', function(e) {
    if(e.which === 13){
        e.preventDefault();
        window.location = `https://google.com/search?q=${searchField.value}`
    }
});