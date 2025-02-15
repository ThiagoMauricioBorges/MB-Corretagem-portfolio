
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



// --------------------------------------------------------------------------









// document.addEventListener("DOMContentLoaded", function () {
//   let currentIndex = 0;
//   const images = ["img/valparaiso1.jpeg", "img/valparaiso2.jpeg", "img/valparaiso3.jpeg", "img/valparaiso4.jpeg", "img/valparaiso5.jpeg"]; // Substitua pelos caminhos corretos das imagens
//   const mainImage = document.getElementById("mainImage");
//   const thumbnailsContainer = document.getElementById("thumbnails");
//   const prevButton = document.querySelector(".nav-button.prev");
//   const nextButton = document.querySelector(".nav-button.next");

//   function updateSlider() {
//       mainImage.src = images[currentIndex];
//       document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
//           thumb.classList.toggle("active", index === currentIndex);
//       });
//   }

//   function changeSlide(direction) {
//       currentIndex = (currentIndex + direction + images.length) % images.length;
//       updateSlider();
//   }

//   // Criar miniaturas
//   images.forEach((src, index) => {
//       const img = document.createElement("img");
//       img.src = src;
//       img.classList.add("thumbnail");
//       img.addEventListener("click", () => {
//           currentIndex = index;
//           updateSlider();
//       });
//       thumbnailsContainer.appendChild(img);
//   });

//   updateSlider();

//   // Adiciona eventos aos botões de navegação
//   prevButton.addEventListener("click", () => changeSlide(-1));
//   nextButton.addEventListener("click", () => changeSlide(1));

//   // Navegação por toque (móvel)
//   let touchStartX = 0;
//   let touchEndX = 0;

//   document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
//       touchStartX = e.touches[0].clientX;
//   });

//   document.querySelector(".slider-container").addEventListener("touchend", (e) => {
//       touchEndX = e.changedTouches[0].clientX;
//       handleGesture();
//   });

//   function handleGesture() {
//       if (touchEndX < touchStartX) {
//           changeSlide(1); // Deslizando para a esquerda (próxima imagem)
//       } else if (touchEndX > touchStartX) {
//           changeSlide(-1); // Deslizando para a direita (imagem anterior)
//       }
//   }
// });













// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Script carregado!");

//   if (!window.location.href.includes("houses.html")) {
//       console.log("Página inicial detectada, script não será executado.");
//       return;
//   }

//   // Banco de dados das propriedades 
//   const propriedades = {
//       1: { 
//           titulo: "Casa duplex a 5 minutos do centro de Petrópolis!", 
//           preco: "750.000", 
//           localizacao: "Valparaíso", 
//           imagemPrincipal: "img/valparaiso1.jpeg",
//           imagens: ["img/valparaiso1.jpeg", "img/valparaiso2.jpeg", "img/valparaiso3.jpeg", "img/valparaiso4.jpeg", "img/valparaiso5.jpeg"], 
//           quartos: 3, 
//           banheiros: 2, 
//           garagem: 4, 
//           diferencial: "Varanda na casa Toda" 
//       },
//       2: { 
//           titulo: "Apartamento Moderno", 
//           preco: "350.000", 
//           localizacao: "São Paulo, SP", 
//           imagemPrincipal: "img/popular2.jpg",
//           imagens: ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg",], 
//           quartos: 2, 
//           banheiros: 1, 
//           garagem: 1, 
//           diferencial: "80m²" 
//       },
//       3: { 
//         titulo: "Apartamento Moderno", 
//         preco: "350.000", 
//         localizacao: "São Paulo, SP", 
//         imagemPrincipal: "img/popular2.jpg",
//         imagens: ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg",], 
//         quartos: 2, 
//         banheiros: 1, 
//         garagem: 1, 
//         diferencial: "80m²" 
//     },
//     4: { 
//         titulo: "Apartamento Moderno", 
//         preco: "350.000", 
//         localizacao: "São Paulo, SP", 
//         imagemPrincipal: "img/popular2.jpg",
//         imagens: ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg",], 
//         quartos: 2, 
//         banheiros: 1, 
//         garagem: 1, 
//         diferencial: "80m²" 
//     }
//   };

//   // obter parâmetros da URL
//   function getParametroURL(nome) {
//       const params = new URLSearchParams(window.location.search);
//       return params.get(nome);
//   }

//   // Obtém o ID da propriedade
//   const propriedadeId = getParametroURL("id");
//   console.log("ID capturado:", propriedadeId);

//   if (propriedades[propriedadeId]) {
//       const prop = propriedades[propriedadeId];

//       // Atualiza os elementos com os dados corretos
//       document.getElementById("house-title").innerText = prop.titulo;
//       document.getElementById("house-price").innerText = prop.preco;
//       document.getElementById("house-location").innerText = prop.localizacao;

//       // Atualiza a imagem principal
//       document.getElementById("mainImage").src = prop.imagemPrincipal;

//       // Atualiza a tabela com detalhes
//       document.querySelector("table").innerHTML = `
//           <tr><th scope="row">Quartos</th><td>${prop.quartos}</td></tr>
//           <tr><th scope="row">Banheiros</th><td>${prop.banheiros}</td></tr>
//           <tr><th scope="row">Vagas na Garagem</th><td>${prop.garagem}</td></tr>
//           <tr><th scope="row">Diferencial</th><td>${prop.diferencial}</td></tr>
//       `;

//       // Atualiza a galeria de imagens
//       const thumbnailsContainer = document.getElementById("thumbnails");
//       thumbnailsContainer.innerHTML = "";
//       prop.imagens.forEach(img => {
//           let imgElement = document.createElement("img");
//           imgElement.src = img;
//           imgElement.classList.add("thumbnail");
//           imgElement.onclick = () => {
//               document.getElementById("mainImage").src = img;
//           };
//           thumbnailsContainer.appendChild(imgElement);
//       });

//       console.log("Propriedade carregada:", prop);
//   } else {
//       // Se o ID for inválido, mostrar mensagem e botão para voltar
//       document.body.innerHTML = `
//           <div style="text-align: center; padding: 50px;">
//               <h1>Propriedade não encontrada</h1>
//               <p>O imóvel que você está tentando acessar não existe.</p>
//               <button onclick="window.location.href='index.html'" style="
//                   padding: 10px 20px;
//                   font-size: 18px;
//                   color: white;
//                   background-color: #007BFF;
//                   border: none;
//                   border-radius: 5px;
//                   cursor: pointer;
//               ">Voltar para a Página Inicial</button>
//           </div>
//       `;
//   }
// });






// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Script carregado!");
  
//     if (!window.location.href.includes("houses.html")) {
//         console.log("Página inicial detectada, script não será executado.");
//         return;
//     }
  
//     // Banco de dados das propriedades 
//     const propriedades = {
//         1: { 
//             titulo: "Casa duplex a 5 minutos do centro de Petrópolis!", 
//             preco: "750.000", 
//             localizacao: "Valparaíso", 
//             imagemPrincipal: "img/valparaiso1.jpeg",
//             imagens: ["img/valparaiso1.jpeg", "img/valparaiso2.jpeg", "img/valparaiso3.jpeg", "img/valparaiso4.jpeg", "img/valparaiso5.jpeg"], 
//             quartos: 3, 
//             banheiros: 2, 
//             garagem: 4, 
//             diferencial: "Varanda na casa Toda" 
//         },
//         2: { 
//             titulo: "Apartamento Moderno", 
//             preco: "350.000", 
//             localizacao: "São Paulo, SP", 
//             imagemPrincipal: "img/popular2.jpg",
//             imagens: ["img/popular1.jpg", "img/popular2.jpg", "img/popular3.jpg"], 
//             quartos: 2, 
//             banheiros: 1, 
//             garagem: 1, 
//             diferencial: "80m²" 
//         }
//     };
  
//     // obter parâmetros da URL
//     function getParametroURL(nome) {
//         const params = new URLSearchParams(window.location.search);
//         return params.get(nome);
//     }
  
//     // Obtém o ID da propriedade
//     const propriedadeId = getParametroURL("id");
//     console.log("ID capturado:", propriedadeId);
  
//     if (propriedades[propriedadeId]) {
//         const prop = propriedades[propriedadeId];
  
//         // Atualiza os elementos com os dados corretos
//         document.getElementById("house-title").innerText = prop.titulo;
//         document.getElementById("house-price").innerText = prop.preco;
//         document.getElementById("house-location").innerText = prop.localizacao;
  
//         // Atualiza a imagem principal
//         const mainImage = document.getElementById("mainImage");
//         mainImage.src = prop.imagemPrincipal;
  
//         // Atualiza a galeria de imagens dinamicamente
//         let currentIndex = 0;
//         const images = prop.imagens;
//         const thumbnailsContainer = document.getElementById("thumbnails");
//         thumbnailsContainer.innerHTML = "";
  
//         images.forEach((src, index) => {
//             const img = document.createElement("img");
//             img.src = src;
//             img.classList.add("thumbnail");
//             img.addEventListener("click", () => {
//                 mainImage.src = src;
//                 currentIndex = index;
//             });
//             thumbnailsContainer.appendChild(img);
//         });
  
//         // Configuração de navegação do slider
//         function updateSlider() {
//             mainImage.src = images[currentIndex];
//         }
  
//         function changeSlide(direction) {
//             currentIndex = (currentIndex + direction + images.length) % images.length;
//             updateSlider();
//         }
  
//         document.querySelector(".nav-button.prev").addEventListener("click", () => changeSlide(-1));
//         document.querySelector(".nav-button.next").addEventListener("click", () => changeSlide(1));
  
//     } else {
//         // Se o ID for inválido, mostrar mensagem e botão para voltar
//         document.body.innerHTML = `
//             <div style="text-align: center; padding: 50px;">
//                 <h1>Propriedade não encontrada</h1>
//                 <p>O imóvel que você está tentando acessar não existe.</p>
//                 <button onclick="window.location.href='index.html'" style="
//                     padding: 10px 20px;
//                     font-size: 18px;
//                     color: white;
//                     background-color: #007BFF;
//                     border: none;
//                     border-radius: 5px;
//                     cursor: pointer;">
//                     Voltar para a Página Inicial
//                 </button>
//             </div>
//         `;
//     }
//   });
  








document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!");
  
    if (!window.location.href.includes("houses.html")) {
        console.log("Página inicial detectada, script não será executado.");
        return;
    }
  
    const propriedades = {
        1: { 
            titulo: "Casa duplex a 5 minutos do centro de Petrópolis!", 
            preco: "750.000", 
            localizacao: "Valparaíso, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/1/valparaiso1.jpeg",
            imagens: ["img/casas/1/valparaiso1.jpeg", "img/casas/1/valparaiso2.jpeg", "img/casas/1/valparaiso3.jpeg", "img/casas/1/valparaiso4.jpeg", "img/casas/1/valparaiso5.jpeg", "img/casas/1/valparaiso6.jpeg"], 
            quartos: 3, 
            banheiros: 2, 
            garagem: 4, 
            diferencial: "Varanda na casa Toda" 
        },
        2: { 
            titulo: "Casa charmosa e cercada pela natureza! A 5 minutos de Itaipava", 
            preco: "500.000", 
            localizacao: "Pedro do Rio, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/2/principal-pedrodorio.jpeg",
            imagens: ["img/casas/2/principal-pedrodorio.jpeg", "img/casas/2/pedrodorio1.jpeg", "img/casas/2/pedrodorio2.jpeg", "img/casas/2/pedrodorio3.jpeg", "img/casas/2/pedrodorio4.jpeg"], 
            quartos: 3, 
            banheiros: 2, 
            garagem: 1, 
            diferencial: "piscina e natureza" 
        },
        3: { 
            titulo: "Casa ensolarada e arejada", 
            preco: "250.000", 
            localizacao: "Cascatinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/3/principalcascatinha.jpeg",
            imagens: ["img/casas/3/principalcascatinha.jpeg", "img/casas/3/cascatinha1.jpeg", "img/casas/3/cascatinha2.jpeg", "img/casas/3/cascatinha3.jpeg", "img/casas/3/cascatinha4.jpeg"], 
            quartos: 2, 
            banheiros: 2, 
            garagem: 1, 
            diferencial: "Rua tranquila" 
        },
        4: { 
            titulo: "Apartamento recém reformado", 
            preco: "450.000", 
            localizacao: "Centro, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/4/principalcentro.jpeg",
            imagens: ["img/casas/4/principalcentro.jpeg", "img/casas/4/centro1.jpeg", "img/casas/4/centro2.jpeg", "img/casas/4/centro3.jpeg", "img/casas/4/centro4.jpeg", "img/casas/4/centro5.jpeg", "img/casas/4/centro6.jpeg", "img/casas/4/centro8.jpeg"], 
            quartos: 2, 
            banheiros: 1, 
            garagem: 1, 
            diferencial: "excelente localização" 
        },
        5: { 
            titulo: "Casa com 2 moradias", 
            preco: "270.000", 
            localizacao: "Cascatinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/5/principalcascatinha.jpeg",
            imagens: ["img/casas/5/principalcascatinha.jpeg", "img/casas/5/cascatinha1.jpeg", "img/casas/5/cascatinha2.jpeg", "img/casas/5/cascatinha3.jpeg","img/casas/5/cascatinha4.jpeg","img/casas/5/cascatinha5.jpeg","img/casas/5/cascatinha6.jpeg","img/casas/5/cascatinha7.jpeg"], 
            quartos: 3, 
            banheiros: 3, 
            garagem: 0, 
            diferencial: "Terreno para construir" 
        },
        6: { 
            titulo: "Casa tranquila e segura", 
            preco: "250.000", 
            localizacao: "itamaraty, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/6/principalitamaraty.jpeg",
            imagens: ["img/casas/6/principalitamaraty.jpeg", "img/casas/6/itamaraty1.jpeg", "img/casas/6/itamaraty2.jpeg", "img/casas/6/itamaraty3.jpeg", "img/casas/6/itamaraty4.jpeg", "img/casas/6/itamaraty5.jpeg", "img/casas/6/itamaraty6.jpeg"], 
            quartos: 2, 
            banheiros: 1, 
            garagem: 0, 
            diferencial: "Linda Varanda" 
        }
        
    };
  
    function getParametroURL(nome) {
        const params = new URLSearchParams(window.location.search);
        return params.get(nome);
    }
  
    const propriedadeId = getParametroURL("id");
    console.log("ID capturado:", propriedadeId);
  
    if (propriedades[propriedadeId]) {
        const prop = propriedades[propriedadeId];
        document.getElementById("house-title").innerText = prop.titulo;
        document.getElementById("house-price").innerText = prop.preco;
        document.getElementById("house-location").innerText = prop.localizacao;
        document.getElementById("mainImage").src = prop.imagemPrincipal;
  
        document.querySelector("table").innerHTML = `
            <tr><th scope="row">Quartos</th><td>${prop.quartos}</td></tr>
            <tr><th scope="row">Banheiros</th><td>${prop.banheiros}</td></tr>
            <tr><th scope="row">Garagem</th><td>${prop.garagem}</td></tr>
            <tr><th scope="row">Diferencial</th><td>${prop.diferencial}</td></tr>
        `;
  
        const thumbnailsContainer = document.getElementById("thumbnails");
        thumbnailsContainer.innerHTML = "";
        let currentIndex = 0;
  
        prop.imagens.forEach((img, index) => {
            let imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.classList.add("thumbnail");
            imgElement.onclick = () => {
                document.getElementById("mainImage").src = img;
                currentIndex = index;
            };
            thumbnailsContainer.appendChild(imgElement);
        });
  
        function changeSlide(direction) {
            currentIndex = (currentIndex + direction + prop.imagens.length) % prop.imagens.length;
            document.getElementById("mainImage").src = prop.imagens[currentIndex];
        }
  
        document.querySelector(".nav-button.prev").addEventListener("click", () => changeSlide(-1));
        document.querySelector(".nav-button.next").addEventListener("click", () => changeSlide(1));
  
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
                changeSlide(1);
            } else if (touchEndX > touchStartX) {
                changeSlide(-1);
            }
        }
    } else {
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
  