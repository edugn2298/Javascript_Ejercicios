window.addEventListener('DOMContentLoaded', () => {
  const contenido = document.querySelector('#contenido');

  let player1 = undefined;
  let player2 = undefined;
  let turno = {undefined};

  const boton = document.querySelector('#boton');
  const iniciar = document.querySelector('#iniciar');
  const reset = document.querySelector('#reset');

  iniciar.addEventListener( 'click', () => { console.log('Juego Iniciado'); juego(); } );
  reset.addEventListener( 'click', () => { player1=undefined; player2=undefined});
  boton.addEventListener( 'click', () => (boton.textContent) );

  function resultado(){
    if( player1==player2){
      contenido.textContent = 'Empate';
    } else if(player1==='Piedra' && player2==='Tijeras' || player1==='Tijeras' && player2==='Papel' || player1==='Papel' && player2==='Piedra' ) {
      contenido.textContent = 'EL ganador es el jugador 1';
      console.log('EL ganador es el jugador 1');
    } else {
      contenido.textContent = 'EL ganador es el jugador 2';
      console.log('EL ganador es el jugador 2');
    }
  }

  function juego(){
    while(player1==undefined && player2==undefined){
      console.log('Empezo el juego');
      if (player1==undefined && player2==undefined){
        turno = 'player1';
        console.log(turno)
        contenido.textContent = 'Turno del Player 1';
      } else if(player1 != undefined && player2 ==undefined){
        turno = 'player2';
        console.log(turno)
        contenido.textContent = 'Turno del Player 2';
      } else {
        resultado(player1,player2);
      }
    }
    resultado(player1,player2);
  }
  
});



