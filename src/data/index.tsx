type GodType = {
  id: string;
  name: string;
  panteon: string;
  pv: string;
  ca: string;
  cd: string;
  hability: string;
  description: string;
  image: string;
};

type WeaponType = {
  id: string;
  name: string;
  description: string;
  CD: string;
  image: string;
};

type ArmorType = {
  id: string;
  name: string;
  description: string;
  CA: string;
  image: string;
};

const GODS_DATA: GodType[] = [
  {
    id: "1",
    name: "Loki",
    panteon: "Nórdico",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Loki.jpg",
  },
  {
    id: "2",
    name: "Baldur",
    panteon: "Nórdico",
    pv: "55",
    ca: "0",
    cd: "1",
    hability:
      "Benção de Frigga - Você é abençoado pelas runas protetoras de Frigga e sempre que receber uma quantidade de dano nos seus PV advindos de um outro deus, adicione 1/4 do valor arredondado para baixo à sua CA.",
    description:
      "Filho de Odin e Frigga, Baldur é comumente relacionado à justiça e sabedoria. Atormentado pela possibilidade da morte de seu filho, Frigga percorre os mundos fazendo com que todos os seres vivos e não vivos jurassem jamais ferir Baldur, com exceção de uma pequena planta chamada Visco.",
    image: "Baldur.jpg",
  },
  {
    id: "3",
    name: "Zeus",
    panteon: "Grego",
    pv: "40",
    ca: "2",
    cd: "2",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Zeus.jpg",
  },
  {
    id: "4",
    name: "Ares",
    panteon: "Grego",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Ares.jpg",
  },
  {
    id: "5",
    name: "Sobek",
    panteon: "Egípicio",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Sobek.jpg",
  },
  {
    id: "6",
    name: "Horus",
    panteon: "Egípicio",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Horus.jpg",
  },
  {
    id: "7",
    name: "Shiva",
    panteon: "Asiático/Hindu",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "Malandragem do Deus das Mentiras - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
    description:
      "Conhecido como o deus da trapaça, Loki comumente é definido como uma das figuras mais complexas da mitologia nórdica. Considerado um misto de deus e gigante, ele possui um grande senso de estratégia e usa suas habilidades para seus interesses, envolvendo intriga e mentiras complexas.",
    image: "Shiva.jpg",
  },
  {
    id: "8",
    name: "Susanoo-no-Mikoto",
    panteon: "Asiático/Japonês",
    pv: "40",
    ca: "1",
    cd: "1d6",
    hability:
      "A ira de Totsuka no Tsuguri - Você possui a capacidade de manifestar o real poder de sua espada Totsuka ao entrar em combate corpo a corpo com outro deus. Sempre que tal condição for satisfeita, adicione uma única vez 50 de PV aos seus PV atuais e ganhe +1 de dano aos seus ataques.",
    description:
      "Susanoo é conhecido como um deus travesso e destrutivo. Sua verdadeira aparência é incerta, com alguns relatos o representando como uma figura heróica e outros como um deus selvagem e impetuoso. É o irmão de Amaterasu e Tsukuyomi.",
    image: "Susanoo.jpg",
  },
];

const WEAPONS_DATA: WeaponType[] = [
  {
    id: "1",
    name: "Raio de Zeus",
    description: "O poder dos céus… Em suas mãos!",
    CD: "2d6",
    image: "RaioDeZeus.jpg",
  },
  {
    id: "2",
    name: "Martelo de Thor",
    description: "É mais fácil de levantar do que diziam…",
    CD: "3d6",
    image: "MarteloDeThor.jpg",
  },
  {
    id: "3",
    name: "Adaga Rúnica",
    description: "Rúnica, mas não única, ok?",
    CD: "1d4",
    image: "AdagaRunica.jpg",
  },
  {
    id: "4",
    name: "Cetro do Faraó",
    description: "O Faraó ordena… Os súditos obedecem.",
    CD: "2d4",
    image: "CetroDoFarao.jpg",
  },
  {
    id: "5",
    name: "Espada Curta",
    description: "A arma mais simples o possível.",
    CD: "1d6",
    image: "EspadaCurta.jpg",
  },
  {
    id: "6",
    name: "Chakram de Aço",
    description: "Uma arma lendária vinda das terras orientais.",
    CD: "2d4",
    image: "ChakramDeAco.jpg",
  },
  {
    id: "7",
    name: "Martelo Abissal",
    description: "Um martelo que carrega as forças das profundezas…",
    CD: "3d4",
    image: "MarteloAbissal.jpg",
  },
  {
    id: "8",
    name: "Machado Viking",
    description: "Não foi feito para cortar lenha…",
    CD: "2d6",
    image: "MachadoViking.jpg",
  },
  {
    id: "9",
    name: "Lança Eterna",
    description: "Essa lança já estava aqui antes de todos nós… E ainda estará depois",
    CD: "2d6",
    image: "LancaEterna.jpg",
  },
  {
    id: "10",
    name: "Punhal Obscuro",
    description: "Um punhal que exala energias sombrias",
    CD: "1d6",
    image: "PunhalObscuro.jpg",
  },
];

const ARMORS_DATA: ArmorType[] = [
  {
    id: "1",
    name: "Escudo Mágico",
    description: "A proteção contra espadas e magias faz valer o peso colossal",
    CA: "3",
    image: "EscudoMagico.jpg",
  },
  {
    id: "2",
    name: "Traje Ritualístico",
    description: "Esses trajes já presenciaram horrores indescritíveis…",
    CA: "1",
    image: "TrajeRitualistico.jpg",
  },
  {
    id: "3",
    name: "Sandália de Hermes",
    description: "Passos leves que te levam longe!",
    CA: "1",
    image: "SandaliaDeHermes.jpg",
  },
  {
    id: "4",
    name: "Armadura Samurai",
    description: "Belíssima armadura que equilibra peso e defesa",
    CA: "2",
    image: "ArmaduraSamurai.jpg",
  },
  {
    id: "5",
    name: "Armadura Pesada",
    description: "Proteção completa.",
    CA: "3",
    image: "ArmaduraPesada.jpg",
  },
  {
    id: "6",
    name: "Elmo Legionário",
    description: "A crina é totalmente desnecessária",
    CA: "1",
    image: "ElmoLegionario.jpg",
  },
  {
    id: "7",
    name: "Chapéu de Vaqueiro",
    description: "...faz o tiro certeiro!",
    CA: "1",
    image: "ChapeuDeVaqueiro.jpg",
  },
  {
    id: "8",
    name: "Armadura Celestial",
    description: "Feita de material coletado de um asteróide",
    CA: "3",
    image: "ArmaduraCelestial.jpg",
  },
  {
    id: "9",
    name: "Armadura de Escamas",
    description: "As escamas de grifo são tão resistentes quanto leves",
    CA: "2",
    image: "ArmaduraDeEscamas.jpg",
  },
  {
    id: "10",
    name: "Coroa Gélida",
    description: "Não esquente a cabeça!",
    CA: "1",
    image: "CoroaGelida.jpg",
  },
];

export { GODS_DATA, WEAPONS_DATA, ARMORS_DATA };
