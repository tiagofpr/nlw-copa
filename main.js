
function createGame(player1, hour, player2){
    return `
     <li>
     <figure>
       <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
       <figcaption class="name-country">${player1}</figcaption>
       </figure>
       <figure>
       <strong>${hour}</strong>
       </figure>
       <figure>
       <img src="./assets/icon=${player2}.svg" alt="Bandeira da ${player2}">
       <figcaption class="name-country">${player2}</figcaption>
       </figure>
       </li>   
`
}

let delay = -0.3;
function createCard(date, day, games){
    delay = delay + 0.3;
    return`
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span> ${day}</span></h2>
        <ul>
        ${games}
        </ul>         
    </div>
`

}


document.querySelector('#cards').innerHTML =    
createCard('24/11', 'Quinta-Feira', createGame("Switzerland",'07:00','Cameroon')
+
createGame('Brazil','16:00','Serbia'))   
+
createCard('28/11', 'Segunda-Feira', createGame('Cameroon','07:00','Serbia')
+
createGame('Brazil','13:00','Switzerland'))  
+
createCard('02/12', 'Sexta-Feira', createGame('Serbia','16:00','Switzerland') 
+ 
createGame('Cameroon','16:00','Brazil')) 

let grupoA = document.querySelector('#GrupoA')
grupoA.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('20/11', 'Domingo', createGame('Qatar','13:00','Ecuador'))     
+
 createCard('21/11', 'Segunda', createGame('Senegal','13:00','Netherlands'))    
+
 createCard('25/11', 'Sexta-Feira', createGame('Qatar','10:00','Senegal') 
+ 
 createGame('Netherlands','13:00','Ecuador')) 
+
 createCard('29/11', 'Terça-Feira', createGame('Ecuador','12:00','Senegal') 
+ 
 createGame('Netherlands','12:00','Qatar')) 
})

let grupoB = document.querySelector('#GrupoB')
grupoB.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('21/11', 'Segunda', createGame('England','10:00','Iran')
+
 createGame('Usa','16:00','Wales'))   
+
 createCard('25/11', 'Sexta-Feira', createGame('Wales','07:00','Iran') 
+ 
 createGame('England','13:00','Usa')) 
+
 createCard('29/11', 'Terça-Feira', createGame('Iran','16:00','Usa') 
+ 
 createGame('Wales','16:00','England')) 
})

let grupoC = document.querySelector('#GrupoC')
grupoC.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('22/11', 'Terça-Feira', createGame('Argentina','07:00','Saudi arabia')
+
 createGame('Mexico','13:00','Poland'))   
+
 createCard('26/11', 'Sabado', createGame('Poland','10:00','Saudi arabia') 
+ 
 createGame('Argentina','16:00','Mexico')) 
+
 createCard('30/11', 'Quarta-Feira', createGame('Poland','16:00','Argentina') 
+ 
 createGame('Saudi arabia','16:00','Mexico')) 
})


let grupoD = document.querySelector('#GrupoD')
grupoD.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
   
 createCard('22/11', 'Terça-Feira', createGame('Denmark','10:00','Tunisia') 
+ 
 createGame('France','16:00','Australia')) 
+
 createCard('26/11', 'Sabado', createGame('Tunisia','07:00','Australia') 
+ 
 createGame('France','13:00','Denmark')) 
+
 createCard('30/11', 'Quarta-Feira', createGame('Tunisia','12:00','France')
+
 createGame('Australia','12:00','Denmark')) 
})

let grupoE = document.querySelector('#GrupoE')
grupoE.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('23/11', 'Quarta-Feira', createGame('Germany','10:00','Japan')
+
 createGame('Spain','13:00','Costa Rica'))   
+
 createCard('27/11', 'Domingo', createGame('Japan','07:00','Costa Rica')
+
 createGame('Spain','16:00','Germany'))  
+
 createCard('01/12', 'Quinta-Feira', createGame('Japan','16:00','Spain') 
+ 
 createGame('Costa Rica','16:00','Germany')) 
})

let grupoF = document.querySelector('#GrupoF')
grupoF.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('23/11', 'Quarta-Feira', createGame('Morocco','07:00','Croatia')
+
 createGame('Belgium','16:00','Canada'))  
+
 createCard('27/11', 'Domingo', createGame('Belgium','10:00','Morocco') 
+ 
 createGame('Croatia','13:00','Canada')) 
+
 createCard('01/12', 'Quinta-Feira', createGame('Croatia','12:00','Belgium')
+
createGame('Canada','12:00','Morocco'))  
})

let grupoG = document.querySelector('#GrupoG')
grupoG.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('24/11', 'Quinta-Feira', createGame('Switzerland','07:00','Cameroon')
+
 createGame('Brazil','16:00','Serbia'))   
+
 createCard('28/11', 'Segunda-Feira', createGame('Cameroon','07:00','Serbia')
+
 createGame('Brazil','13:00','Switzerland'))  
+
 createCard('02/12', 'Sexta-Feira', createGame('Serbia','16:00','Switzerland') 
+ 
 createGame('Cameroon','16:00','Brazil')) 
})

let grupoH = document.querySelector('#GrupoH')
grupoH.addEventListener('click', () => {
  document.querySelector('#cards').innerHTML =    
 createCard('24/11', 'Quinta-Feira', createGame('Uruguay','10:00','South Korea')
+
 createGame('Portugal','13:00','Ghana'))  
+
 createCard('28/11', 'Segunda-Feira', createGame('South Korea','10:00','Ghana')
+ 
 createGame('Portugal','16:00','Uruguay')) 
+
 createCard('02/12', 'Sexta-Feira', createGame('South Korea','12:00','Portugal')
+
 createGame('Ghana','12:00','Uruguay'))   


})