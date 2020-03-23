function search()
{
    if(document.getElementById("search-key").value === "")
    {
        document.getElementsByClassName("error")[0].innerHTML = "Please enter a city name."
        document.getElementsByClassName("error")[0].style.display = "block";
    }
    else
    {
        document.getElementsByClassName("error")[0].style.display = "none";
        document.getElementsByClassName("search")[0].style.display = "none";
        document.getElementsByClassName("sub-text")[0].style.display = "none";
        document.getElementsByClassName("result-text")[0].innerHTML = "Searching places near " + document.getElementById("search-key").value +"...";
        document.getElementsByClassName("loading")[0].style.display = "block";
        setTimeout(function()
        {
             document.getElementsByClassName("result-text")[0].style.display = "none";
             document.getElementsByClassName("loading")[0].style.display = "none";
             document.getElementsByClassName("text")[0].style.display = "block";
             text();

        }, 5000);
    }
}
function text()
    {
        anime.timeline({loop: true})
        .add({
          targets: '.ml15 .word',
          scale: [14,1],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i
        }).add({
          targets: '.ml15',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
