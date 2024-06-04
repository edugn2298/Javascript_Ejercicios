window.addEventListener('DOMContentLoaded', () => {
  let opcion = ['Piedra','Papel','Tijeras'];
  const contenido = document.querySelector('#contenido');

  let player1 = undefined;
  let player2 =undefined;

  const piedra1 = document.querySelector('#piedra1');
  const piedra2 = document.querySelector('#piedra2');
  const papel1 = document.querySelector('#papel1');
  const papel2 = document.querySelector('#papel2');
  const tijera1 = document.querySelector('#tijera1');
  const tijera2 = document.querySelector('#tijera2');
  const iniciar = document.querySelector('#iniciar');
  const reset = document.querySelector('#reset');
  const detener = document.querySelector('#detener');

  piedra1.addEventListener( 'click', () => { player1 = 'Piedra'; papel1.disabled = true; tijera1.disabled = true;} );
  piedra2.addEventListener( 'click', () => {player2 = 'Piedra'; papel2.disabled = true; tijera2.disabled = true;} );
  papel1.addEventListener( 'click', () => {player1 = 'Papel'; piedra1.disabled = true; tijera1.disabled = true;} );
  papel2.addEventListener( 'click', () => {player2 = 'Papel'; piedra2.disabled = true; tijera2.disabled = true;} );
  tijera1.addEventListener( 'click', () => {player1 = 'Tijeras'; piedra1.disabled = true; papel1.disabled = true;} );
  tijera2.addEventListener( 'click', () => {player2 = 'Tijeras'; piedra2.disabled = true; papel2.disabled = true;} );

  iniciar.addEventListener( 'click', () => { console.log('Juego Iniciado'); juego(); } );
  reset.addEventListener( 'click', () => {console.log('Juego detenido');});
  detener.addEventListener( 'click', () => {console.log('Reincio');});

  function juego(){
    let finalizar = 'SI';
    while(finalizar.toUpperCase() == "SI" ){
      
      resultado(player1,player2);

    }
  }

  function resultado(){
    if( player1===player2){
      contenido.textContent = 'Empate';
    } else if(player1==='Piedra' && player2==='Tijeras' || player1==='Tijeras' && player2==='Papel' || player1==='Papel' && player2==='Piedra' ) {
      contenido.textContent = 'EL ganador es el jugador 1';
      console.log('EL ganador es el jugador 1');
    } else {
      contenido.textContent = 'EL ganador es el jugador 2';
      console.log('EL ganador es el jugador 2');
    }
  }
});

