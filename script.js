let user = document.getElementsByClassName('userInfo')[0];
let getInfo = document.getElementsByClassName('getInfo')[0];
let button = document.querySelectorAll('.button');
let reset = document.getElementById('getUser');
console.log(button);

var currentUser;

fetch('https://randomuser.me/api/')
.then(data => data.json())
.then((e)=>{
    currentUser = e.results[0];
    console.log(currentUser);
    insertDetails(e);
})

reset.addEventListener('click',refreshData);

function refreshData(){
    fetch('https://randomuser.me/api/')
.then(data => data.json())
.then((e)=>{
    currentUser = e.results[0];
    insertDetails(e);
    console.log(currentUser);
    getInfo.innerHTML = '';
})
}


function insertDetails(e){
     user.innerHTML = `<div><img src="${e.results[0].picture.large}"></div><div><h3>${e.results[0].name.title} ${e.results[0].name.first} ${e.results[0].name.last}</h3></div>`
     
}

button.forEach((buttons)=>{
   buttons.addEventListener('click', event =>{
    let attr = event.target.getAttribute('data-attr');
    let info;
     if(attr == 'age'){
         info = currentUser.dob.age;
     }
     if(attr == 'phone'){
        info = currentUser.phone;
    }
    if(attr == 'email'){
        info = currentUser.email;
    }
    getInfo.innerHTML = `<h3>${attr} : ${info}</h3>`
     
    console.log(event.target.getAttribute('data-attr'));
   })
})



