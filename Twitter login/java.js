const email = document.getElementById('email')
const avancar = document.getElementById("avancar")

const true_email = 'leleomengo201233@gmail.com'

avancar.addEventListener('click', Verificar)



function Verificar(){

    if(email.value == true_email){
        window.alert('email correto')
    }
    else{
        window.alert('email incorreto')
    }
}