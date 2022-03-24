/*This script is used to benchmark browsers*/

benchmark();

function benchmark(){
    startTime = new Date();
    benchmarkElement = document.getElementById("benchmark");
    for (let i = 0; i < 100; i++) {
        RunTasks("https://www.google.com");        
    }
    endTime = new Date();
    benchmarkElement.innerHTML = "Time taken: " + (endTime - startTime) + "ms";
}
function RunTasks(theUrl)
{
    const Http = new XMLHttpRequest();
    Http.open("GET", theUrl);
    Http.send();
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
}