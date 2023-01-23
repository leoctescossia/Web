

const play = document.getElementById('play')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
const botao_volume = document.getElementById('volume')


const fundo = document.querySelector('body')


const titulo_musica = document.getElementById('music')
const nome_banda = document.getElementById('banda')
const tempo_musica = document.getElementById('tempo')



const todas_imagens = document.querySelector('#majiko')
const img = document.getElementById('indigo')
const figura_troca = document.getElementById('majiko')
const figura_troca1 = document.getElementById('majiko1')
const figura_troca2 = document.getElementById('majiko2')
const figura_troca3 = document.getElementById('majiko3')




const audio_player = document.getElementById('music-player');
let current_song_index;
let next_song_index;
let current_image;
let next_image;


let songs =  [
    {
        titulo: '想いきり',
        artista: 'indigo la End',
        musica: './musicas/indigo la End - 想いきり (Omoi Kiri)  Legendado em PT-BR.mp3',
        imagem: './imagens/indigo la end.jpg',
        cor_de_fundo: 'linear-gradient(to top left, #6A5ACD, #87CEFA) fixed no-repeat',
        cor_do_texto: 'color: white',
        tempo: '03:13',
    },

    {
        titulo: '命に嫌われている',
        artista: 'majiko',
        musica: './musicas/命に嫌われている 歌ってみたまじ娘.mp3',
        imagem: './imagens/majiko.jpg',
        cor_de_fundo: 'linear-gradient(to top left, rgba(18,16,31,1), rgba(155,165,172,1) 70%) fixed no-repeat',
        cor_do_texto: 'color: white',
        tempo: '04:33',
    },

    {
        titulo: '中庭の少女たち',
        artista: 'Shishamo',
        musica: './musicas/SHISHAMO 中庭の少女たち lyrics (Japanese, Romanized,  English).mp3',
        imagem: './imagens/shishamo 2.jpg',
        cor_de_fundo: 'linear-gradient(to top left, rgba(249,195,124,1) , rgba(250,250,210,1) ) fixed no-repeat ',
        cor_do_texto: 'color: black',
        tempo: '05:13',
    },
    
    {
        titulo: 'Kick Back',
        artista: 'Kenshi Yonezu',
        musica: './musicas/米津玄師 Kenshi Yonezu - KICKBACK.mp3',
        imagem: './imagens/kick back.jpg',
        cor_de_fundo: 'linear-gradient(to top left, rgba(245,222,179,1),  rgba(222,25,25,1) ) fixed no-repeat',
        cor_do_texto: 'color: black',
        tempo: '03:47',
    },

    {
        titulo: 'ファンファーレ',
        artista: 'sumika',
        musica: './musicas/sumika  ファンファーレMUSIC VIDEO.mp3',
        imagem: './imagens/sumika.jpg',
        cor_de_fundo: 'linear-gradient(to top left, rgba(88,160,205,1) , rgba(193,231,254,1) ) fixed no-repeat',
        cor_do_texto: 'color: white',
        tempo: '03:16',
    },

]

let figuras1 = [
    {
        t:'./imagens/kick back.jpg',
    },

    {
        t:'./imagens/sumika.jpg',
    },

    {
        t: './imagens/indigo la end.jpg',
    },

    {
        t:'./imagens/majiko.jpg',
    },

    {
        t:'./imagens/shishamo 2.jpg',
    },

]

let figuras2 = [

    {
        t:'./imagens/sumika.jpg',
    },

    {
        t: './imagens/indigo la end.jpg',
    },

    {
        t:'./imagens/majiko.jpg',
    },

    {
        t:'./imagens/shishamo 2.jpg',
    },

    {
        t:'./imagens/kick back.jpg',
    },

]


let figuras3 = [
    
    {
        t:'./imagens/majiko.jpg',
    },

    {
        t:'./imagens/shishamo 2.jpg',
    },

    {
        t:'./imagens/kick back.jpg',
    },

    {
        t:'./imagens/sumika.jpg',
    },

    {
        t: './imagens/indigo la end.jpg',
    },

]

let figuras4 = [
    
    {
        t:'./imagens/shishamo 2.jpg',
    },

    {
        t:'./imagens/kick back.jpg',
    },

    {
        t:'./imagens/sumika.jpg',
    },

    {
        t: './imagens/indigo la end.jpg',
    },

    {
        t:'./imagens/majiko.jpg',
    },

]


Comeco()
//UpdateImagens()

function Comeco(){
    current_song_index = 0
    next_song_index = current_song_index + 1
    current_image = 0
    next_image = current_image + 1
    
    UpdateSongs()
    //UpdateImagens()
}
/*
function UpdateImagens(){
    figuras[4]
    let troca = figuras[current_image]
    
    figura_troca.setAttribute('src',troca.t)
    

}
*/


function UpdateSongs(){
    let troca = figuras1[current_song_index]
    let troca1 = figuras2[current_song_index]
    let troca2 = figuras3[current_song_index]
    let troca3 = figuras4[current_song_index]

    let song = songs[current_song_index]



    titulo_musica.innerText = song.titulo
    nome_banda.innerHTML = song.artista

    fundo.style = song.cor_do_texto
    nome_banda.style = song.cor_do_texto

    img.setAttribute('src', song.imagem)
    figura_troca.setAttribute('src', troca.t)
    figura_troca1.setAttribute('src', troca1.t)
    figura_troca2.setAttribute('src', troca2.t)
    figura_troca3.setAttribute('src', troca3.t)

    fundo.style.background =  song.cor_de_fundo
    //fundo.style.background = 'linear-gradient(to top left, black, white)'
    audio_player.src = song.musica
    tempo_musica.innerText = song.tempo
}


play.addEventListener('click', Tocar)
next.addEventListener('click', Proximo)
previous.addEventListener('click', Anterior)

botao_volume.addEventListener('click', Controle_Volume)
//const music = new Audio("./musicas/indigo la End - 想いきり (Omoi Kiri)  Legendado em PT-BR.mp3")


function Tocar(){
    
    if(audio_player.paused){
    
        play.setAttribute('src', "./assets/pause-svgrepo-com.svg") 
        
        audio_player.play();
        audio_player.volume = 0.1

    }
    else{
        audio_player.pause();
        
        play.setAttribute('src', "./assets/play-svgrepo-com.svg")
    }
    
}



function Proximo(){
     
    if(next){
        //audio_player.pause()
        play.setAttribute('src', "./assets/play-svgrepo-com.svg")
        //play.setAttribute('src', "./assets/play-svgrepo-com.svg")
        current_song_index = current_song_index + 1 
        next_song_index = current_song_index + 1

        //current_image = current_image + 1
        //next_image = next_image + 1
        
        if(current_song_index == 5 /*&& current_image == 4*/){
            current_song_index = 0
            next_song_index = current_song_index + 1

            //current_image = 0
            //next_image = current_image + 1
        }
    }
    //Tocar()
    UpdateSongs()
    //UpdateImagens()
}

function Anterior(){
    
    if(previous){
        audio_player.pause()
        play.setAttribute('src', "./assets/play-svgrepo-com.svg")
        current_song_index = current_song_index - 1
        next_song_index = current_song_index + 1

        //current_image = current_image - 1
        //next_image = current_image + 1

        if(current_song_index == -1 /*&& current_image == -1*/){
            current_song_index = 4
            next_song_index = current_song_index + 1

            //current_image = 0
            //next_image = current_image + 1
        }
    }
    //Tocar()
    UpdateSongs()
    //UpdateImagens()
}

function Controle_Volume(){

    if(botao_volume){
        if(audio_player.volume <= 1 && audio_player.volume > 0){
            audio_player.volume = audio_player.volume + 0.1
            console.log(audio_player.volume)
        }
        else if(audio_player == 0){
            audio_player.volume = audio_player.volume - 0.1
            botao_volume.setAttribute('src', './assets/volume-x-svgrepo-com.svg')
        }
    }

}

