function test(){
    let main = document.getElementById("main");
    main.innerHTML = "yoooo";
}

function load(){
    const data = fetchDataAsync("https://nhl-score-api.herokuapp.com/api/scores/latest");
    let out ='';
    data.then((a) => {
        console.log(a.games[0].teams.home.abbreviation);
        display(a.games[1].teams.away.abbreviation);
    });
    document.getElementById("text").innerHTML = out;
}

function display(input){
    document.getElementById("text").innerHTML = input;
}

function getNHLJSON(){
    url = "https://nhl-score-api.herokuapp.com/api/scores/latest";
    obj = fetch(url).json();
    return obj;
}

function printJSON(){
    document.getElementById("text").innerHTML = getNHLJSON();
}

async function fetchDataAsync(url) {
    const response = await fetch(url)
    .then((response) => response.json())
    .then((game) => {
        return game;
    });
    return response;
}
