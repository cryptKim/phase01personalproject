var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500,
	speedAsDuration: true
});



function fetchGames() {
    fetch("https://api.myjson.online/v1/records/0a23cbb5-14bb-4a39-9ce7-d8194d6c5672") 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.games){
            Object.values(data.data.games).forEach(game => {
                addGames(game);
            });
        }else{
            console.error("no games")
        }


      })
      .catch(error => {
        console.log("error fetching games:", error)
      })
  }
  fetchGames()
  
  
  function addGames(game){
    let div = document.getElementById("games-collection")
    let card = document.createElement("div")
    div.appendChild(card)
    card.className = "card"
  
    let h2 = document.createElement("h2")
    card.appendChild(h2)
    let name = game.name
    h2.innerText = name
  
    let image = document.createElement("img")
    card.appendChild(image)
    image.className ="toy-avatar"
    let imgURL = game.image
    image.src = game.image
  
   }