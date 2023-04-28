

const imagem = document.getElementById('img1');
const button_pesquisa = document.querySelector('.crossbar button');
const section = document.querySelector('section');



const data = new Date();




button_pesquisa.addEventListener('click', clicou);

function clicou(){
    const API = '7b69dd30a312c20849c2d7c4d2e24c05';
    //const API = '728b0ee6df5687559812bd3169ad77b7';
    const input_pesquisa = document.getElementById('pesquisa').value;
    /*
    if(data.getHours() >= 18 && data.getHours() < 0 ){
        imagem.src = 'assets/noite-estrelada.png';
        document.body.style.background = '#2F4F4F';
    }
    
    if(data.getHours() >= 12 && data.getHours() < 18 ){
        imagem.src = 'assets/ventoso.png';
        document.body.style.background = '#DAA520';
    }

    if(data.getHours() >= 0 && data.getHours() < 12 ){
        imagem.src = 'assets/brilhante.png';
        document.body.style.background = '#DAA520';
    }

    if(data.getHours() > 18 && data.getHours() < 0 ){
        imagem.src = 'assets/nublado.png';
    }
*/
    //section.innerHTML = (input_pesquisa.value);


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_pesquisa}&units=metric&appid=${API}&lang=pt_br`).then(response => response.json())
    .then(json => {


        switch (json.weather[0].main){

            case 'Clear':
                imagem.src = 'assets/brilhante.png';
                document.body.style.background = '#DAA520';
                break;

            case 'Rain':
                    imagem.src = 'assets/ventoso.png';
                    document.body.style.background = '#2F4F4F';
                    break;

            case 'Snow':
                imagem.src = 'assets/noite-estrelada.png';
                document.body.style.background = '#2F4F4F';
                break;

            case 'Clouds':
                imagem.src = 'assets/nublado.png';
                document.body.style.background = '#2F4F4F';
                break;

            case 'Clear':
                imagem.src = 'assets/brilhante.png';
                document.body.style.background = '#2F4F4F';
                break;

            default:
                imagem.src = '';
                

        }

        const temperatura = document.getElementById('temperatura')
        const umidade = document.getElementById('umidade')
        const vento = document.getElementById('vento')
        const estado = document.getElementById('estado')

        
        temperatura.innerHTML = `${parseInt(json.main.temp)}ºC`
        estado.innerHTML = `${(json.weather[0].description).toUpperCase()}`
        umidade.innerHTML = `${parseInt(json.main.humidity)}%`
        vento.innerHTML = `${parseInt(json.wind.speed)}Km/h`


        


    });





};