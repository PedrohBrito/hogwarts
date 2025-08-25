const bruxos = [
    {
        id: "Harry Potter",
        ano: 7,
        varinha: "Azvinho e pea de fenix",
        mascote: "Coruja", 
        patrono: "Cervo",
        especialidade: "sobreviver",
        vivo: false
    },
    {
      id: 2,
      nome: "Hermione Granger",
      casa: "Grifnória",
      ano: 7,
      varinha: "Videira e fibra de dragão, 27cm",
      mascote: "Gato (Bichento)", 
      patrono: "Lontra",
      especialidade: "Magia avançada",
      vivo: true  
    },
    {
        id: 3,
        nome: "Ron Weasley",
        casa: "Grifinória",
        ano: 7,
        varinha: "Salgueiro e crina de unicórnio, 35cm",
        mascote: "Rato (Perebas)",
        patrono: "Terrier Jack Russell",
        especialidade: "Xadrez Bruxo",
    },
    {
        id: 4,
        nome: "Draco Malfoy",
        casa: "Sonserina",
        ano: 7,
        varinha: "Espinheiro e crina de unicórnio, 25cm",
        mascote: "Coruja (não nomeada)",
        patrono: "Desconhecido",
        especialidade: "Ser irritante",
    },
    {
        id: 5,
        nome: "Luna Lovegood",
        casa: "Corvinal",
        ano: 6,
        varinha: "Madeira de cerejeira e núcleo desconhecido",
        mascote: "Nenhum",
        patrono: "Lebre",
        especialidade: "Ver criaturas imaginárias (ou não) 👻",
    },
];

const casas = [
    {
        id: 1,
        nome: "Grifnória",
        fundadora: "Godric Gryffindor",
        cores: "Vermelho e Dourado",
        animal: "Leão"
    },
    {    
        id: 2,
        nome: "Sonserina",
        fundadora: "Salazar Slytherin",
        cores: "Verde e Prata",
        animal: "Serpente"
    },
    {    
        id: 3,
        nome: "Corvinal",
        fundadora: "Rowena Revenclaw",
        cores: "Azul e Bronze",
        animal: "Àguia"
    },
    {    
        id: 4,
        nome: "Lufa-Lufa",
        fundadora: "Helga Huffleouff",
        cores: "Amarelo e Preto",
        animal: "Texugo"
    }
];

const varinhas = [
    {
        id: 1,
        material: "Avezinho",
        nucleo: "Pena de Fênix",
        comprimento: "28cm"
    },
    {
        id: 2,
        matrial: "Videira",
        nucleo: "Fibra de Coração de Dragão",
        cmpriemnto: "27cm"
    },
    {
        id: 3,
        matrial: "Salgueiro",
        nucleo: "Pelo de Unicórnio",
        cmpriemnto: "35cm"
    },
    {
        id: 4,
        matrial: "Carvalho Inglê",
        nucleo: "Pelo de Testrálio",
        cmpriemnto: "32cm"
    }
];

const animais = [
    {
        id: 1,
        nome: "Coruja",
        tipo: "Correio/Companhia"
    },
    {
        id: 2,
        nome: "Gato",
        tipo: "Companhia"
    },
    {
        id: 3,
        nome: "Sapo",
        tipo: "Companhia"
    },
    {
        id: 4,
        nome: "Rato",
        tipo: "Companhia"
    }
];

const pocoes = [
    {
        id: 1, 
        nome: "Polissuco",
        efeito: "Transforma na aparência de outra pessoa"
    },
    {
        id: 2, 
        nome: "Felix Felicis",
        efeito: "Sorte temporária"
    },
    {
        id: 3, 
        nome: "Amortentia",
        efeito: "Poção do amor"
    },
    {
        id: 4, 
        nome: "Poção do amor",
        efeito: "Força a dizer a verdade"
    }
]

export default { bruxos, casas, varinhas, animais, pocoes }