const joke = document.getElementById("dad_jokes");
const btn = document.getElementById("generate_joke");
btn.addEventListener('click',get_jokes);
get_jokes();

async function get_jokes(){
    const jokeRes=await fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept':'application/json'
        }
    });
    console.log(jokeRes)
    const resJson=await jokeRes.json();
    joke.innerHTML=resJson.joke;
}

function copyJoke() {
  var copyText = document.getElementById("dad_jokes").innerHTML;
  navigator.clipboard.writeText(copyText)
  alert("Copied Joke to Clipboard: " + "\n" + copyText);
}