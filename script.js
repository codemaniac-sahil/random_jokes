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
var tog=document.getElementById("theme-toggle");
var stheme= localStorage.getItem('theme')||(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (stheme)
    document.documentElement.setAttribute('data-theme', stheme)
tog.onclick=function toggle(){
    var ctheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    if (ctheme === "light") {
        targetTheme = "dark";
    }
    else if (ctheme === "dark"){
        targetTheme = "light";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};