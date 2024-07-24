document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('#icon');

    if (icon) {
        icon.addEventListener('click', function() {
            // Toggle background class for the body
            document.querySelector('body').classList.toggle('dark-mode');
            // Toggle nav classes
            document.querySelector('#signUp').classList.toggle('nav');
            document.querySelector('#logIn').classList.toggle('nav');
        });
    }

    const homeIcon = document.getElementById('home-icon');

    let mode = '';

    function darkMode() {
        let setMode = document.body;
        setMode.classList.toggle('dark-mode');

        // Check and update mode
        mode = setMode.classList.contains('dark-mode') ? 'dark' : 'light';

        // Toggle link styles
        let nav = document.querySelectorAll('body a');
        nav.forEach(function(a) {
            a.classList.toggle('links');
        });

        // Toggle bar icon styles
        let barIcon = document.querySelector('#bar-icon');
        if (barIcon) {
            barIcon.classList.toggle('links');
        }

        // Toggle card styles
        let cards = document.querySelectorAll('#gamesPage .card');
        cards.forEach(function(card) {
            card.classList.toggle('dark-card');
        });

        // Save mode to local storage
        localStorage.setItem('home-mode', JSON.stringify(mode));
    }

    // Add event listener for dark mode toggle button
    if (homeIcon) {
        homeIcon.addEventListener('click', darkMode);
    }

    // Get mode from local storage and apply
    let getMode = JSON.parse(localStorage.getItem('home-mode'));
    if (getMode === 'dark') {
        document.body.classList.add('dark-mode');
       document.addEventListener('DOMContentLoaded' , function(){
            let cards = document.querySelectorAll('#gamesPage .card');
            cards.forEach(function(card) {
                card.classList.add('dark-card');
            });
       });
        let nav = document.querySelectorAll('body a');
        nav.forEach(function(a) {
            a.classList.add('links');
        });
        let barIcon = document.querySelector('#bar-icon');
        if (barIcon) {
            barIcon.classList.add('links');
        }
    }
});
