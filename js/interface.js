document.addEventListener("DOMContentLoaded", ()=>{

    let pecas = document.querySelectorAll(".peca")
    

    pecas.forEach((peca)=>{
        peca.addEventListener("click", pecaClicada)
    })
})

  function pecaClicada(e){
        // essa variavel agora representa a peca que foi clicada no tabueleiro
      let peca = e.target
      let position = peca.id // ele recece um id que a posicao que ele vai receber no array do tabuleiro

      if(move(position)) {

        
             setTimeout(()=>{
              let vencendor = document.querySelector(".winner")
                  vencendor.innerHTML = `${emojisPlayer[jogadorVencendor]} ganhou! 😎 `
                  
            },10)
        
      }
      //moverPecas()
     moverPeca(position);


  }

  // Com essa função ela so estava fazendoo click naquele quadrado que está recebendo o evento e não mais em todas as peças!

  function moverPeca(position){

    let peca = document.getElementById(position.toString())
    let simbolo = board[position];
    peca.innerHTML = `<div class='${simbolo}'></div>`
  }


function restart(){
   
return location = "./index.html"
   

}

  

