const inputs = document.querySelectorAll('.Verification input') //pega todos os inputs
const botao = document.querySelector('button') //pega o botao 

inputs.forEach(input => { //acho que é para cada input ele faz esse processo, igual ao um while só que bem melhor
    let ultimo_input = 0
    input.onkeyup = (e) => { //para cada digito, (no keyup ele não pode cancelar depois do digito. O 'e' faz parte desse conjunto)
        const elemento = e.target //pega quem disparou o evento? n sei
        const proximo = input.nextElementSibling //pega o próximo elemento (não sei como funciona!)
        const anterior = input.previousElementSibling //pega o elemento anterior (não sei como funciona!)

        if(anterior && e.keyCode === 8){
            if(ultimo_input === 1){ //apaga o anterior, começando se o primeiro slot ta ocupado, pq n sei?
                anterior.value = '' //apaga
                anterior.focus() //parte pro anterior?
            }
            botao.setAttribute('disabled', true) //aqui é pra ele sempre deixar desabilitado o botao, se não atingir os requisitos de ter os 5 slots preenchidos
            ultimo_input = 1
        }
        
        else{
            const reg = /^[0-9]+$/ //limitar a números
            if(!reg.test(elemento.value)){
                elemento.value = elemento.value.replace(/\D/g, '') //não permitir a inserção de letras (não sei como funciona!)
            }
            else if(elemento.value){
                if(proximo){
                    proximo.focus() //parte pro proximo?
                }
                else{
                    botao.removeAttribute('disabled') //habilita o botão
                    ultimo_input = 0
                }
            }
        }


    }
    
})

