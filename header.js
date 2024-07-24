let topBar = document.getElementById('topBar');
topBar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <img src="https://mohamedkhaled999.github.io/Route/Game%20Over/images/logo-sm.png" width="40px">
                    <h3>Game Over</h3>
                </div>
            </nav>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa fa-bars" aria-hidden="true" id='bar-icon'></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link">MMORPG</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">SHOOTER</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">SAILING</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">PERMADEATH</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">SUPERHERO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">PIXEL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">PVP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">ACTION</a>
                </li>
                <li id='logOut' class="nav-item">
                    <a href="./index.html" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Log Out</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
`;

document.querySelectorAll('#topBar .nav-link').forEach(function(link){
    link.classList.add('link-dark');
});



// dark and light mode
function darkMode(){
let modeIcon = document.getElementById('icon');
if(modeIcon)
{
    document.body.classList.toggle('dark');
    if( document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode' , 'dark');
    }else {
        localStorage.removeItem('dark-mode');
    }
}}


let getItem = localStorage.getItem('dark-mode')
if(getItem ==='dark'){
    document.body.classList.add('dark');
}