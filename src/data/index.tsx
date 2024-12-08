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

export { GODS_DATA };
