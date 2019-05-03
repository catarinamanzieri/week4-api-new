const body = document.querySelector('body');
const root = document.createElement('div');
const autores = document.createElement('div');
root.setAttribute('id', 'root');
autores.setAttribute('class', 'authors');

body.appendChild(root);
root.appendChild(autores);

const request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload =  function(){
    const users = JSON.parse(this.response);

    console.log(users)
    console.log(users[0].gender)

    if(request.status >= 200 && request.status < 400){
        console.log("SUCESSO!!!")
    }
}