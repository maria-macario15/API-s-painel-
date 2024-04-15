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