function moduloNoturno(dadosPagina) { 
         var a = dadosPagina.getElementById('botao')
         var corpo = dadosPagina.getElementsByTagName('body')[0]
         console.log(corpo)
         blackmode = 'Desligado'
         
         a.addEventListener('click', clicar)
         
         function clicar()
         {
          const nav = document.querySelector('.navbar')
          const subnav = document.querySelector('.nav-light')
           if(blackmode == 'Desligado')
           {
             corpo.style.background = 'black'
             corpo.style.color = 'lightslategrey'
             a.style.background = '#6c757d'
             a.style.color = 'white'
             blackmode = 'Ligado'
             a.innerText = 'Modo Normal'
             nav.classList.remove('bg-primary')
             nav.classList.add('bg-dark')
             subnav.style.backgroundColor = '#484c4f';
              document.querySelector('html').classList.add('night')
           }
           else if(blackmode == 'Ligado')
           {
             corpo.style.background = '#fff'
             corpo.style.color = 'black'
             a.style.background = '#6c757d'
             a.style.color = 'white'
             blackmode = 'Desligado'
             a.innerText = 'Modo Noturno'
             nav.classList.remove('bg-dark')
             nav.classList.add('bg-primary')
             subnav.style.backgroundColor = '#e3f2fd';
             document.querySelector('html').classList.remove('night')

           }  
           
         } 
  }