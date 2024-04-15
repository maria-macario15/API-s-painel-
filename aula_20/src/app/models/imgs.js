function carregarImagens(){
    const lateral = document.getElementById('lateral')
    const imagens = [

        { 
            id:1,
             endereco:"https://media.tenor.com/66CkRPXgx4cAAAAM/criativo.gif",
            alt:"Essa gente..",
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

