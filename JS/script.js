const dinoData = [
  {
    name: "Tek Rexes",
    level: 867,
    mutations: "images/TekRex/statstekrex.png",
    description: "<br/> <li>Each rex comes with a +250 ascendant saddle. <br/><li>You can get a capped saddle for a small extra. <br/><li>For packs of 10 or more, consult the sellers ",
    colors: "<br/> <li>Standard Colors: Green - Arkade <br/> <li>Premium Colors: White Gold - Crimson - Black Gold ",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1353219905968803901'>Battle Tek Rexes Max</a>",
    prices: [
      { color: "Standard Colors: ", value: 500 },
      { color: "Premium Colors: ", value: 750 },
    ],
    colorPhotos: [
      "images/TekRex/tek1.png",
      "images/TekRex/tek2.png",
      "images/TekRex/tek3.png",
      "images/TekRex/tek4.png",
      "images/TekRex/tek5.png",
    ]
  },
    {
    name: "S-Dire Bear",
    level: 1401,
    mutations: "images/Bears/statsbears.png",
    description: "<br/><li>All the S-Dire Bears come with their own Ascendant +200 Saddle <br/><li> Buy 3 get 1 free!",
    colors: " <br/><li>Pink - Purple - Cyan - Yellow - Gray - Red - Green",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1350608917952200748'> Selling Maxed S-Dire Bears </a>",
    prices: [
      { color: "All Colors", value: 2000 }
    ],
    colorPhotos: [
      "images/Bears/bear1.png",
      "images/Bears/bear2.png",
      "images/Bears/bear3.png",
      "images/Bears/bear4.png",
      "images/Bears/bear5.png",
      "images/Bears/bear6.png",
      "images/Bears/bear7.png",
    ]
  },
  {
    name: "Pyromane",
    level: 1305,
    mutations: "images/Pyros/statspyros.png",
    description: " <br/> <li> Super god pyros for sale.",
    colors: " <br/><li> Light Blue - Cobalt - Lime Green- Burning Orange - Sun Yellow - Crimson - Pink - Magenta - Ash ",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1344775840533319791'>Selling MAX Pyros</a>",
    prices: [
      { color: "All Colors", value: 1000 }
    ],
    colorPhotos: [
      "images/Pyros/p1.png",
      "images/Pyros/p2.png",
      "images/Pyros/p3.png",
      "images/Pyros/p4.png",
      "images/Pyros/p5.png",
      "images/Pyros/p6.png",
      "images/Pyros/p7.png",
      "images/Pyros/p8.png",
      "images/Pyros/p9.png",
    ]
  },
  {
    name: "Mantis",
    level: 1621,
    mutations: "images/Mantis/statsmantis.png",
    description: "<br/><li> All the Mantis come with their own Ascendant +200 Saddle. <br/><li> Buy 3 get 1 free! ",
    colors: " <br/><li>Arkade - Crimson (Red) - Titanium - WhiteNinja - BlackForest - GreenGoldenPink",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1347789359385936032'>Selling Maxed Mantis</a>",
    prices: [
      { color: "Mantis with Ascendant High-200s Saddle", value: 2000 },
      { color: "Mantis with Capped Pickaxe or Sword", value: 2500 },
      { color: "Mantis with both Capped Pickaxe and Sword (1 of each)", value: 2750 }
    ],
    colorPhotos: [
      "images/Mantis/m1.png",
      "images/Mantis/m2.png",
      "images/Mantis/m3.png",
      "images/Mantis/m4.png",
      "images/Mantis/m5.png",
      "images/Mantis/m6.png",
      "images/Mantis/m7.png",
    ]
  },
  {
    name: "Rock Drakes",
    level: 1119,
    mutations: "images/drakes/statsdrakes.png",
    description: "<br/><li> Buy 3 get 1 free!",
    colors: " <br/><li>Black and Gold",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1358964359186874550'>Selling Battle Maxed Rock Drakes</a>",
    prices: [
      { color: "All Colors", value: 750 },
      { color: "Get 10 for", value: 5000 }
    ],
    colorPhotos: [
      "images/drakes/drake1.png",
      "images/drakes/drake2.png",
      "images/drakes/drake3.png",
    ]
  },
  {
    name: "Tusoteuthis",
    level: 869,
    mutations: "images/tusos/statstusos.png",
    description: "<br/><li> Your purchase includes an ascendant saddle with 200+ armor",
    colors: " <br/><li>Random colors for now",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1359743577013354626'>Selling Battle Maxed Tusoteuthis</a>",
    prices: [
      { color: "Random colors for now.", value: 2500 },
    ],
    colorPhotos: [
      "images/tusos/tusos1.png",
    ]
  },
  {
    name: "S-Mosasaurus",
    level: 810,
    mutations: "images/mosas/statsmosas.png",
    description: "<br/><li> Your purchase includes an ascendant saddle with 200+ armor",
    colors: " <br/><li>Random colors for now",
    URL: "<br/> <li> <a href='discord://discord.com/channels/439900471025467403/1359743232560599052'>Selling Battle Maxed S-Mosasaurus</a>",
    prices: [
      { color: "Random colors for now.", value: 2500 },
    ],
    colorPhotos: [
      "images/mosas/mosas1.png",
    ]
  },



  // Add more dinosaurs here
];

const container = document.getElementById('dinoContainer');

dinoData.forEach(dino => {
  const card = document.createElement('div');
  card.className = 'dino-card';

  card.innerHTML = `
    <h2>${dino.name}</h2>
    <img class="dino-photo" src="${dino.mutations}" alt="Mutations of ${dino.name}">
    <p><strong>Level:</strong> ${dino.level}</p>
    <p><strong>Description:</strong> ${dino.description}</p>
    <p><strong>Colors:</strong> ${dino.colors}</p>
    <p><strong>Discord trading post :</strong> ${dino.URL}</p>
    <div class="price-list">
      <strong>Prices:</strong>
      ${dino.prices.map(p => `<div class="price-item">${p.color}: ₡${p.value}</div>`).join("")}
    </div>
    <div class="carousel-container">
      <div class="carousel">
        ${dino.colorPhotos.map(photo => `<img src="${photo}" alt="Color">`).join("")}
      </div>
      <button class="carousel-btn prev-btn">❮</button>
      <button class="carousel-btn next-btn">❯</button>
    </div>
  `;

  container.appendChild(card);
});

// Lógica para los botones de navegación en el carrusel dentro de cada card
document.querySelectorAll('.carousel').forEach(carousel => {
  const prevButton = carousel.parentElement.querySelector('.prev-btn');
  const nextButton = carousel.parentElement.querySelector('.next-btn');
  
  let currentIndex = 0;
  const images = carousel.querySelectorAll('img');
  
  // Muestra solo la imagen correspondiente
  function updateCarousel() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }
  
  // Mover al siguiente
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // Mover al anterior
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Inicializa el carrusel
  updateCarousel();
});
