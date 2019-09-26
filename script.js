//
fetch('https://api.github.com/users/MohamedIsse/repos')
.then(res => res.json())
.catch(error => console.error(`Error: ${error}`))
.then(repo =>{
console.log(repo)
var x ="";
for (i in repo) {
    x += 
    `<a href=${repo[i].html_url}>${repo[i].name}</a><br>`;
  }
  document.getElementById("txt").innerHTML = x;
})