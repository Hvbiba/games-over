// handel text
function handleString(text){
    return text.substring(0, 115);
}
// nav links
var navLinks = document.querySelectorAll('.nav-item')
console.log(navLinks)

// add event foe each nav link
navLinks.forEach(function(link){
    link.addEventListener('click' , function(){
        this.style.color = '#09c';
    });
});


// home page fetch api
function fetchData() {
    let keyApi = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res){
        if(res.ok){
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data){
        console.log(data);
        updatehomeUI(data);
    })
    .catch(function(error){
        console.error('Error:', error);
    });
}


fetchData();
if (navLinks.length > 0){
    navLinks[0].addEventListener('click' , fetchData);
}


// home page updata ui
function updatehomeUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;

    }
}


// function fetch shooter section
function filterShooter() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res){
        if(res.ok){
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data){
        console.log(data);
        updateShouterUI(data);
    })
    .catch(function(error){
        console.error('Error:', error);
    });
}


// update ui for shouter section
function updateShouterUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


// add event to shouter link
if(navLinks.length >0){
    navLinks[1].addEventListener('click' , filterShooter);
}


// api fetch for sailing link
function filterSailing() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res){
        if(res.ok){
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data){
        console.log(data);
        updateSailingUI(data);
    })
    .catch(function(error){
        console.error('Error:', error);
    });
}


// ui for sailing page 
function updateSailingUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
             <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


if(navLinks.length>0){
    navLinks[2].addEventListener('click' , filterSailing);
}


// fetch api for Permadeath page
function filterPermadeath() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data) {
        console.log(data);
        updatePermadeathUI(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}


//ui for permadeath page 
function updatePermadeathUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


if (navLinks.length > 0){
    navLinks[3].addEventListener('click' , filterPermadeath);
}


// fetch for super hero section
function filterSuperHero() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data) {
        console.log(data);
        updateSuperUI(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}


// ui for super hero page 
function updateSuperUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


if (navLinks.length > 0){
    navLinks[4].addEventListener('click' , filterSuperHero);
}


// function fetch pixel section
function filterPixel() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data) {
        console.log(data);
        updatePixelUI(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}


//ui for pixel page
function updatePixelUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


if (navLinks.length > 0){
    navLinks[5].addEventListener('click' , filterPixel);
}


// function fetch pvp section
function filterPvp() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=pvp`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data) {
        console.log(data);
        updatePvplUI(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}


//updata ui for pvp page 
function updatePvplUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}



if (navLinks.length > 0){
    navLinks[6].addEventListener('click' , filterPvp);
}


// fuction fetch action section
function filterAction() {
    let keyApi = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=action`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    fetch(keyApi, options)
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Response not okay');
        }
    })
    .then(function(data) {
        console.log(data);
        updateActionlUI(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}


//updata ui foe action page
function updateActionlUI(gameData) {
    let htmlPage = '';
    let gamesPage = document.getElementById('gamesPage');
    
    gameData.forEach(element => {
        let modified = handleString(element.short_description);
        htmlPage += `
        <div id="cardGame">
            <div class="card" onclick = 'returnGame(${element.id})'>
                <img src="${element.thumbnail}" class="card-img-top" alt="..." width="200px">
                <div class="card-body">
                    <div>
                        <h4 class="card-title">${element.title}</h4> 
                        <button type="button" class="btn btn-primary"><h6>free</h6></button>
                    </div>
                    <p class="card-text">${modified}</p>
                    <div class='bottom'>
                        <hr class="dropdown-divider">
                        <h6>${element.genre}</h6> 
                        <h6>${element.platform}</h6>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    if (gamesPage) {
        gamesPage.innerHTML = htmlPage;
    }
}


if (navLinks.length > 0){
    navLinks[7].addEventListener('click' , filterAction);
}


async function returnGame(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8589dfa921msh65217e8b0d7b7d9p17b7c8jsnef4b8cd6221e',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        localStorage.setItem('games' , JSON.stringify(data));
        //gameUI(data);
        setTimeout(function(){
            location.href = './game.html';
        },500);
    } catch (error) {
        console.error(error);
    }
}

function gameUI(gameData){
    let gameHtml ='';
    let gamePage = document.getElementById('displayGame')

    gameHtml = `
            <div id="container">
                <img src="${gameData.thumbnail}" width="300px">
                <div>
                    <button type="button" class="btn btn-secondary" id="freeBtn">free</button>
                    <a href = '${gameData.game_url}'><button type="button" class="btn btn-info" id="playBtn">Play now</button>
                </div>
            </div>
        <div class="gameInfo">
            <div class="gameText">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item"><a href="./home.html" class="link-light">Home</a></li>
                      <li class="breadcrumb-item link-info" aria-current="page"><b>${gameData.title}</b></li>
                    </ol>
                  </nav>                  
                <h1>About ${gameData.title} </h1>
                <h3>About Neverwinter</h3>
                <p>${gameData.description}</p>
            <div class="gameImges">
                <h3>${gameData.title} Screenshots</h3><hr>
                <div>
                    <img src="${gameData.screenshots[0].image}" width="230px">
                    <img src="${gameData.screenshots[1].image}" width="230px">
                    <img src="${gameData.screenshots[2].image}" width="230px">
                </div>
            </div>
            <div class="extraInfo">
                <h3>Minimum System Requirements</h3><hr>
                <div>
                    <div id="os">
                        <p><span>Os:</span><br>${gameData.minimum_system_requirements.os}</p>
                    </div>
                    <div id="processor">
                        <p><span>Processor:</span><br>${gameData.minimum_system_requirements.processor}</p>
                    </div>
                    <div id="graghic">
                        <p><span>Graphics:</span><br>${gameData.minimum_system_requirements.graphics}</p>
                    </div>
                    <div id="Memory">
                        <p><span>Memory:</span><br>${gameData.minimum_system_requirements.memory}</p>
                    </div>
                    <div id="storage">
                        <p><span>Storage:</span><br>${gameData.minimum_system_requirements.storage}</p>
                    </div>
                </div>
            </div>
        </div>

    `;

    if (gamePage){
        gamePage.innerHTML = gameHtml;
        document.getElementById('addbackGround').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${gameData.screenshots[0].image})`;
        document.getElementById('addbackGround').style.backgroundSize = "cover";
        document.getElementById('addbackGround').style.backgroundRepeat = "no-repeat";
        document.getElementById('addbackGround').style.backgroundPosition = "center";
        document.querySelector('.breadcrumb').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${gameData.screenshots[0].image})`;
        document.querySelector('.breadcrumb').style.backgroundSize = "cover";
        document.querySelector('.breadcrumb').style.backgroundRepeat = "no-repeat";
        document.querySelector('.breadcrumb').style.backgroundPosition = "center";
        document.querySelector('.breadcrumb').style.padding= "10px";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let games = localStorage.getItem('games');
    if (games) {
        // from local storage
        gameUI(JSON.parse(games)); 
    }
});


