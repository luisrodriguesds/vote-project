function moduloNoturno(dadosPagina) { 
         var a = dadosPagina.getElementById('botao')
         var corpo = dadosPagina.getElementsByTagName('body')[0]
         console.log(corpo)
         blackmode = 'Desligado'
         
         a.addEventListener('click', clicar)
         
         function clicar()
         {
           if(blackmode == 'Desligado')
           {
             corpo.style.background = 'black'
             corpo.style.color = 'lightslategrey'
             a.style.background = '#6c757d'
             a.style.color = 'white'
             blackmode = 'Ligado'
             a.innerText = 'Modo Normal'
           }
           else if(blackmode == 'Ligado')
           {
             corpo.style.background = '#fff'
             corpo.style.color = 'black'
             a.style.background = '#6c757d'
             a.style.color = 'white'
             blackmode = 'Desligado'
             a.innerText = 'Modo Noturno'
           }  
           
         } 
  }