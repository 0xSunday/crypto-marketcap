

const DUMMY_EVENTS = [
  {
    id: "bitcoin",
    title: "Bitcoin",
    shotName: "BTC",
    price: "16,220.61",
    marketCap: "311,741,800,907",
  
    logo: "logo/bitcoinLogo.png",
    image: "images/bitcoinImage.png",
    isFeatured: true,
  },
  {
    id: "ethereum",
    shotName: "ETH",
    title: "Ethereum",
    description:
      "Ethereum is a blockchain technology that powers decentralized applications (dapps) without being controlled by a central authority. Users can use the various dapps such as finance (DeFi), non-fungible tokens, lending, stablecoins and much more.",
    price: "1,170.45",
    marketCap: "140,965,445,467",
    circulatingSupply: "120,519,279",
    totalSupply: "120,519,279",
    website: "etheruem.org",
    creator: "Vitalik Buterin and co.",
    logo: "logo/ethereumLogo.png",
    image: "images/ethereumImage.png",
    isFeatured: true,
  },
  {
    id: "solana",
    shotName: "SOL",
    title: "Solana",
    description:
      "Solana is a high throughput blockchain based on the Proof of History (PoH) and Proof of Stake (PoS) consensus. Built by a team of networking engineers, Solana aims to become the blockchain infrastucture for modern internet applications.",
    price: "13.47",
    marketCap: "4,889,200,135",
    circulatingSupply: "363,032,434 ",
    totalSupply: "534,627,677",
    website: "solana.com",
    creator: "Anatoly Yakovenko and co.",
    logo: "logo/solanaLogo.png",
    image: "images/solanaImage.png",
    isFeatured: true,
  },
  {
    id: "matic-network",
    shotName: "MATIC",
    title: "Polygon",
    description:
      "Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.",
    price: "0.822429",
    marketCap: "7,289,209,904",
    circulatingSupply: "8,868,740,690 ",
    totalSupply: "10,000,000,000",
    website: "polygon.technology",
    creator: "sandeep narval",
    logo: "logo/maticLogo.png",
    image: "images/maticImage.png",
    isFeatured: true,
  },

  {
    id: "chainlink",
    shotName: "link",
    title: "Chainlink ",
    description:
      "Chainlink is a framework for building Decentralized Oracle Networks (DONs) that bring real-world data onto blockchain networks, enabling the creation of hybrid smart contracts.",
    price: "6.82",
    marketCap: "3,349,996,190",
    circulatingSupply: "491,599,971 ",
    totalSupply: "1,000,000,000",
    website: "chain.link",
    creator: "Sergey Nazarov",
    logo: "logo/linkLogo.png",
    image: "images/chainLinkImage.png",
    isFeatured: true,
  },

  {
    id: "polkadot",
    shotName: "DOT",
    title: "Polkadot",
    description:
      "Polkadot is a platform that allows diverse blockchains to transfer messages, including value, in a trust-free fashion; sharing their unique features while pooling their security. In brief, Polkadot is a scalable heterogeneous multi-chain technology.",
    price: "5.19",
    marketCap: "6,101,114,976",
    circulatingSupply: "1,175,183,125",
    totalSupply: "1,256,132,259",
    website: "polkadot.network",
    creator: "Gavin Wood",
    logo: "logo/polkadotLogo.png",
    image: "images/polkaDotImage.png",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}


