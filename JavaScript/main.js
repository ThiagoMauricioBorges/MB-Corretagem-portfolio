
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + section + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + section + ']').classList.remove('active-link')
    }
  }) 
}
window.addEventListener('scroll', scrollActive)













document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const images = ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg", "img/popular4.jpg"]; // Substitua pelos caminhos corretos das imagens
  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnails");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");

  function updateSlider() {
      mainImage.src = images[currentIndex];
      document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
          thumb.classList.toggle("active", index === currentIndex);
      });
  }

  function changeSlide(direction) {
      currentIndex = (currentIndex + direction + images.length) % images.length;
      updateSlider();
  }

  // Criar miniaturas
  images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("thumbnail");
      img.addEventListener("click", () => {
          currentIndex = index;
          updateSlider();
      });
      thumbnailsContainer.appendChild(img);
  });

  updateSlider();

  // Adiciona eventos aos botões de navegação
  prevButton.addEventListener("click", () => changeSlide(-1));
  nextButton.addEventListener("click", () => changeSlide(1));

  // Navegação por toque (móvel)
  let touchStartX = 0;
  let touchEndX = 0;

  document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
  });

  document.querySelector(".slider-container").addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleGesture();
  });

  function handleGesture() {
      if (touchEndX < touchStartX) {
          changeSlide(1); // Deslizando para a esquerda (próxima imagem)
      } else if (touchEndX > touchStartX) {
          changeSlide(-1); // Deslizando para a direita (imagem anterior)
      }
  }
});













document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado!");

  if (!window.location.href.includes("houses.html")) {
      console.log("Página inicial detectada, script não será executado.");
      return;
  }

  // Banco de dados das propriedades 
  const propriedades = {
      1: { 
          titulo: "Casa Luxuosa", 
          preco: "500.000", 
          localizacao: "Rio de Janeiro, RJ", 
          imagemPrincipal: "img/popular1.jpg",
          imagens: ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg"], 
          quartos: 3, 
          banheiros: 2, 
          garagem: 2, 
          area: "600m²" 
      },
      2: { 
          titulo: "Apartamento Moderno", 
          preco: "350.000", 
          localizacao: "São Paulo, SP", 
          imagemPrincipal: "img/popular2.jpg",
          imagens: ["img/popular2.jpg", "img/popular3.jpg", "img/popular4.jpg"], 
          quartos: 2, 
          banheiros: 1, 
          garagem: 1, 
          area: "80m²" 
      }
  };

  // obter parâmetros da URL
  function getParametroURL(nome) {
      const params = new URLSearchParams(window.location.search);
      return params.get(nome);
  }

  // Obtém o ID da propriedade
  const propriedadeId = getParametroURL("id");
  console.log("ID capturado:", propriedadeId);

  if (propriedades[propriedadeId]) {
      const prop = propriedades[propriedadeId];

      // Atualiza os elementos com os dados corretos
      document.getElementById("house-title").innerText = prop.titulo;
      document.getElementById("house-price").innerText = prop.preco;
      document.getElementById("house-location").innerText = prop.localizacao;

      // Atualiza a imagem principal
      document.getElementById("mainImage").src = prop.imagemPrincipal;

      // Atualiza a tabela com detalhes
      document.querySelector("table").innerHTML = `
          <tr><th scope="row">Quartos</th><td>${prop.quartos}</td></tr>
          <tr><th scope="row">Banheiros</th><td>${prop.banheiros}</td></tr>
          <tr><th scope="row">Vagas na Garagem</th><td>${prop.garagem}</td></tr>
          <tr><th scope="row">Área total</th><td>${prop.area}</td></tr>
      `;

      // Atualiza a galeria de imagens
      const thumbnailsContainer = document.getElementById("thumbnails");
      thumbnailsContainer.innerHTML = "";
      prop.imagens.forEach(img => {
          let imgElement = document.createElement("img");
          imgElement.src = img;
          imgElement.classList.add("thumbnail");
          imgElement.onclick = () => {
              document.getElementById("mainImage").src = img;
          };
          thumbnailsContainer.appendChild(imgElement);
      });

      console.log("Propriedade carregada:", prop);
  } else {
      // Se o ID for inválido, mostrar mensagem e botão para voltar
      document.body.innerHTML = `
          <div style="text-align: center; padding: 50px;">
              <h1>Propriedade não encontrada</h1>
              <p>O imóvel que você está tentando acessar não existe.</p>
              <button onclick="window.location.href='index.html'" style="
                  padding: 10px 20px;
                  font-size: 18px;
                  color: white;
                  background-color: #007BFF;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
              ">Voltar para a Página Inicial</button>
          </div>
      `;
  }
});


