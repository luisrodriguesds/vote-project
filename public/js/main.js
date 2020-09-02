function moduloNoturno(dadosPagina) { 
         var a = dadosPagina.getElementById('botao')
         var corpo = dadosPagina.getElementsByTagName('body')[0]
        
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

function zoom(dadosPagina) {
	var btnMais = dadosPagina.getElementById('btn-zoom-positivo')
	var btnMenos = dadosPagina.getElementById('btn-zoom-negativo')
	var corpo = dadosPagina.getElementsByTagName('body')[0]

  btnMais.addEventListener('click', aumentarZoom)
  
  btnMenos.addEventListener('click', diminuirZoom)
  var contClickMais =0
  var contClickMenos =0
	function aumentarZoom()
  { 
    contClickMais = contClickMais + 1
    contClickMenos = contClickMais
    if (contClickMenos<-1){
      corpo.style.transform = 'scale(0.9' + (contClickMenos+11) + ')'
    }
    else{
      corpo.style.transform = 'scale(' + (1 +contClickMais/100) + ')' 
    }
      
        
  }
  function diminuirZoom()
  { 
    console.log(contClickMenos)
    contClickMenos = contClickMenos - 1 

    contClickMais = contClickMenos
    if (contClickMenos<0){
      corpo.style.transform = 'scale(0.9' + (contClickMenos+10) + ')' 
    }
    else{
      corpo.style.transform = 'scale(' + (1 +contClickMenos/100) + ')'  
    }
  }
}