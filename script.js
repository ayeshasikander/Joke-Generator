let getJokes=document.getElementById("joke");
async function  jokeClick(){
    let get=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            accept:'application/json'
        }
    })
    let joke=await get.json();
    let data=joke.joke;
    getJokes.innerHTML=data;
}
jokeClick();
