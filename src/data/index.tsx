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
    cd: "1d8",
    hability:
      "Magia do gigante louco - Você possui a capacidade de arremessar suas adagas, sempre ganhando 1 de alcance adicional nos ataques da sua arma. Além disso, você pode usar sua habilidade para revelar jogadores em uma área de 4 quadrados adjacentes.",
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
    pv: "45",
    ca: "1",
    cd: "1d4",
    hability:
      "Propagação da Justiça - Sempre que você tirar 1 no seu dado de dano, você pode ativar a sua habilidade para rerolar o dado.",
    description:
      "O Senhor do Olimpo controlava os céus regendo o universo. Filho do titã Cronos, lutou contra seu pai para resgatar os seus irmãos Héstia, Hades, Hera, Poseidon e Deméter da morte.",
    image: "Zeus.jpg",
  },
  {
    id: "4",
    name: "Ares",
    panteon: "Grego",
    pv: "45",
    ca: "4",
    cd: "1",
    hability:
      "Fúria do Senhor da Guerra - Você pode utilizar sua habilidade a cada dois turnos durante o combate para mitigar 1/4 da sua CA no dano que bate direto na vida.",
    description:
      "Conhecido como o Deus da Guerra, Ares nasceu predestinado a substituir Zeus com o seu poder avassalador. Entretanto, Ares foi banido do Monte Olimpo após trazer à tona a fúria de Hefesto.",
    image: "Ares.jpg",
  },
  {
    id: "5",
    name: "Sobek",
    panteon: "Egípicio",
    pv: "50",
    ca: "3",
    cd: "1",
    hability:
      "Calmaria do Nilo - Suas escamas o tornam um ser difícil de derrubar. Ao utilizar a sua habilidade, Sobek adiciona 1/3 da sua CA atual à sua CA e 25 aos seus PV.",
    description:
      "Também conhecido como Suchus, Sobek era associado ao poder faraônico, à fertilidade, à proeza militar e à proteção contra os perigos do Nilo.",
    image: "Sobek.jpg",
  },
  {
    id: "6",
    name: "Hórus",
    panteon: "Egípicio",
    pv: "50",
    ca: "2",
    cd: "2",
    hability:
      "O Olho Que Tudo Vê - Udyat permite que sempre que um outro deus utilize a sua habilidade especial, as suas coordenadas sejam reveladas para Hórus.",
    description:
      "O deus dos céus era o protetor da humanidade, da realeza e patrono dos homens jovens. Era o portador de Udyat, conhecido como o Olho de Hórus, visto como um símbolo de proteção contra o mau.",
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
      "As Cinzas dos Meus Inimigos - Ao ativar a sua habilidade, você pode causar ao inimigo a cada 2 turnos o mesmo dano que ele te causar, durante o combate.",
    description:
      "Conhecido como 'O Destruidor', Shiva está associado à renovação, criação e fertilidade. É dito que ele esfrega em seu corpo as cinzas de corpos, e por isso a sua pele possui uma coloração acinzentada.",
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
