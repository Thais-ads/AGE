function verificar(){
  data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if(fano.value.length== 0||Number(fano.value) > ano){
    window.alert("Verifique os dados e tente novamente")
  } else{
   var fsex= document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   res.innerHTML =`idade calculada: ${idade}`
   var genero =''
   var img = document.createElement('img')
   img.setAttribute('id','foto')
    if(fsex[0].checked){
      genero="Homem"
      if(idade >= 0 && idade <10){
        img.setAttribute('src','./img/Hcriança.jpg')
      }else if( idade < 28) {
        img.setAttribute('src','./img/Hjovem.jpg')
      }else if(idade < 50){
        img.setAttribute('src','./img/Hadulto.jpg')
      }else{
        img.setAttribute('src','./img/Hvelho.jpg')
      }
    }else if(fsex[1].checked){
      genero ="Mulher"
      if(idade >= 0 && idade <10){
        img.setAttribute('src','./img/Mcriança.jpg')
      }else if( idade < 28) {
        img.setAttribute('src','./img/Mjovem.jpg')
      }else if(idade < 50){
        img.setAttribute('src','./img/Madulta.jpg')
      }else{
        img.setAttribute('src','./img/Mvelha.jpg')
      }
    }
    res.innerHTML=`Detectamos ${genero} com ${idade} anos`
    res.style.textAlign='center'

    res.appendChild(img)
  }

}