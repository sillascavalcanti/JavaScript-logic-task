function dolarConversion(){
    let value = Number(prompt("Infomre um valor em Reais:"))
    let dolarValue = Number(prompt("Infomre um valor da cotação:"))
    conversion = value / dolarValue;
    alert(`O valor em dolares e ${conversion.toFixed(2)}`);
}

function evenOrOdd(){
    let value = Number(prompt("Informe um número e saiba se e impar ou par!"))
    if(value % 2 == 0){
        return alert(`O número ${value} e par!`)
    }
    return alert(`O número ${value} e impar!`)
   
}

function biggerOrSmaller(){
    alert("VAMOS SABER QUAL NÚMERO E MAIOR")
    let firstNumber = Number(prompt("Informe o primeiro número:"))
    let secondNumber = Number(prompt("Informe o segundo número:"))


    if(firstNumber < secondNumber){
        return alert(`O número ${secondNumber} e maior que ${firstNumber}`)
    }
    return alert(`O número ${firstNumber} e maior que ${secondNumber}`)
}

function testAvarage(){
    let firstNote = Number(prompt("Informe a primeira nota:"))
    let secondNote = Number(prompt("Informe a segunda nota:"))
    let avarage = (firstNote + secondNote) / 2
   
    if(avarage < 6){
        return alert(`A media do aluno foi ${avarage} e ele não foi aprovado!`)
    }
   
    return alert(`A media do aluno foi ${avarage} e ele foi aprovado!`)
}

function cineSystem(){
    alert("VAMOS AO CINEMA!!")


    let choice = Number(prompt("Qual ingresso você deseja? \n1- Ingresso VIP\n Valor:80R$\n2- Ingresso Standard\n Valor:40R$"))
    let popCornChoice = Number(prompt("Você deseja pipoca?\nValor:30R$\n1- Sim \n2- Não"))
    let bill = 0;
            
    switch(choice){
        case 1 : 
            bill = bill + 80;
            if(popCornChoice == 1){
                bill = bill + 30;
                return alert(`O ingrsso VIP com pipoca ficou no valor de ${bill}R$ (Reais)`)
            }
            return alert(`O ingrsso VIP sem pipoca ficou no valor de ${bill}R$ (Reais)`)
        case 2 :
            bill = bill + 40;
            if(popCornChoice == 1){
                bill = bill + 30;
                return alert(`O ingrsso Standard com pipoca ficou no valor de ${bill}R$ (Reais)`)
            }
            return alert(`O ingrsso Standard sem pipoca ficou no valor de ${bill}R$ (Reais)`)
    }
}

function briefingChatBot(){
    alert("VAMOS FAZER SEU BRIEFING")

    let choice = Number(prompt("Qual tipo de site você quer? \n1- Langind page\n2- Blog\n3- Ecomerce"))

    switch(choice){
        case 1:
            choice = Number(prompt("Qual esquema de cor você prefere para seu site?\n1- Calmo e Tranquilo (Azul Claro (#ADD8E6) e Cinza Claro (#D3D3D3))\n2- Vibrante e Energético(Laranja (#FFA500) e Roxo (#800080))\n3-Elegante e Sofisticado(Bordô (#800000) e Dourado (#FFD700))"));
            
            switch(choice){
                case 1:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase()
                    return alert(`Seu site vai ser um do tipo Landing page\n com o esquema de cores Calmo e Tranquilo utilizando as cores Azul Claro e Cinza Claro\n e o endereço do seu site sera https://${url}.com`)
                case 2:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Landing page\n com o esquema de cores Calmo e Vibrante e Energetico as cores Laranja e Roxo\n e o endereço do seu site sera https://${url}.com`)
                case 3:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Landing page\n com o esquema de cores Elegante e Sofisticado utilizando as cores Bordô e Dourado\n e o endereço do seu site sera https://${url}.com`);
                default:
                    return alert("ERRO:Opição não existe")
            } 
        case 2:
            choice = Number(prompt("Qual esquema de cor você prefere para seu site?\n1- Calmo e Tranquilo (Azul Claro (#ADD8E6) e Cinza Claro (#D3D3D3))\n2- Vibrante e Energético(Laranja (#FFA500) e Roxo (#800080))\n3-Elegante e Sofisticado(Bordô (#800000) e Dourado (#FFD700))"));
            
            switch(choice){
                case 1:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Blog\n com o esquema de cores Calmo e Tranquilo utilizando as cores Azul Claro e Cinza Claro\n e o endereço do seu site sera https://${url}.com`)
                case 2:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Blog\n com o esquema de cores Calmo e Vibrante e Energetico as cores Laranja e Roxo\n e o endereço do seu site sera https://${url}.com`)
                case 3:
                    siteName= prompt("Qual o nome do seu site?")
                    url = siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Blog\n com o esquema de cores Elegante e Sofisticado utilizando as cores Bordô e Dourado\n e o endereço do seu site sera https://${url}.com`);
                default:
                    return alert("ERRO:Opição não existe");
            } 
        case 3:
            choice = Number(prompt("Qual esquema de cor você prefere para seu site?\n1- Calmo e Tranquilo (Azul Claro (#ADD8E6) e Cinza Claro (#D3D3D3))\n2- Vibrante e Energético(Laranja (#FFA500) e Roxo (#800080))\n3-Elegante e Sofisticado(Bordô (#800000) e Dourado (#FFD700))"));
            
            switch(choice){
                case 1:
                    siteName= prompt("Qual o nome do seu site?")
                    url=siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Ecomerce\n com o esquema de cores Calmo e Tranquilo utilizando as cores Azul Claro e Cinza Claro\n e o endereço do seu site sera https://${url}.com`)
                case 2:
                    siteName= prompt("Qual o nome do seu site?")
                    url=siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Ecomerce\n com o esquema de cores Calmo e Vibrante e Energetico as cores Laranja e Roxo\n e o endereço do seu site sera https://${url}.com`)
                case 3:
                    siteName= prompt("Qual o nome do seu site?")
                    url=siteName.toLowerCase();
                    return alert(`Seu site vai ser um do tipo Ecomerce\n com o esquema de cores Elegante e Sofisticado utilizando as cores Bordô e Dourado\n e o endereço do seu site sera https://${url}.com`);
                default:
                    return alert("ERRO:Opição não existe");
            }
        default:
            return alert("ERRO:Opição não existe");    
    }
}


// briefingChatBot()

// cineSystem()

// testAvarage()

// biggerOrSmaller()

// evenOrOdd()

// dolarConversion()




