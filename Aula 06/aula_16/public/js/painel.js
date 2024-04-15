atualizaHorario()
carregarAulas()
carregarImagens()


//Criando o Relogio

function atualizaHorario(){

    const relogio = document.getElementById('relogio')
    const semana = document.getElementById('saudacao')
    const hoje = new Date()
    
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()
    let a = hoje.getDay()

    let saudacao
    
    h = verificaTempo(h)
    m = verificaTempo(m)
    s = verificaTempo(s)
       
    relogio.innerHTML = h+":"+m+":"+s

    if(h < 12){
        saudacao = "Bom Dia!!!"
    }else if( h < 18){
        saudacao = "Boa Tarde!!!"
    }else{
        saudacao = "Boa Noite!!!"
    }

    console.log(a)

    switch (a) {
        case 0:
            semana.innerHTML = 'Domingo' + " - " + saudacao;;
            break;
        case 1:
            semana.innerHTML = 'Segunda - Feira' + " - " + saudacao;
            break;
        case 2:
            semana.innerHTML = 'Terça - Feira' + " - " + saudacao;
            break;
        case 3:
            semana.innerHTML = 'Quarta - Feira' + " - " + saudacao;
            break;
        case 4:
            semana.innerHTML = 'Quinta - Feira' + " - " + saudacao;
            break;
        case 5:
            semana.innerHTML = 'Sexta - Feira' + " - " + saudacao;
            break;
        case 6:
            semana.innerHTML = 'Sabado' + " - " + saudacao;
            break;
    }

    setTimeout(atualizaHorario,1000)
}

// Adicionando o 0 em numeros menores que 10

function verificaTempo(t){

    if (t < 10){
        t = "0" + t
    }

    return t

}

function carregarAulas(){
    const aulas = [

        {
            id:1,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-3-16",
            instrutor:"hannah montana",
            uc:"Desenvolvimento Sistemas",
            ambiente:"LAB-5106"
        },

        {
            id:2,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-3-16",
            instrutor:"Stefani Joanne",
            uc:"Desenvolvimento Sistemas",
            ambiente:"LAB-5106"
        }, 
        
        {
            id:3,
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC DDS-3-16",
            instrutor:"Katheryn Elizabeth Hudson",
            uc:"Desenvolvimento Sistemas",
            ambiente:"LAB-5106"
        }        
    ]

    const tabelaAulas = document.getElementById('tabelaAulas')
    let elementosTabela = ""

    for(let i = 0; i < aulas.length; i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aulas[i].inicio.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].fim.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].turma.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].instrutor.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].uc.toUpperCase() + '</td>'
        elementosTabela += '<td>' + aulas[i].ambiente.toUpperCase() + '</td>'
        elementosTabela += '<tr>'
    }

    tabelaAulas.innerHTML += elementosTabela

}

function carregarImagens(){
    const lateral = document.getElementById('lateral')
    const imagens = [

        { 
            id:1,
             endereco:"https://neofeed.com.br/wp-content/uploads/2023/02/Kanye-west.jpg",
            alt:"Kenye West",
        },

        { 
            id:2,
            endereco:"img/01.jpg",
            alt:"300 vagas de cursos",
        },

        { 
            id:3,
            endereco:"img/02.png",
            alt:"cursos gratuitos",
        }
    ]

    for(let i = 0; i < imagens.length; i++){
        let div = document.createElement('div')
        div.className = "imagnum"

        let img = document.createElement('img')
        img.src = imagens[i].endereco
        img.alt = imagens[i].alt
        
        div.appendChild(img)
        lateral.appendChild(div)
    }
}

