
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
        // 6: { 
        //     titulo: "Casa tranquila e segura", 
        //     preco: "250.000", 
        //     localizacao: "itamarati, Petrópolis - RJ", 
        //     imagemPrincipal: "img/casas/6/principalitamaraty.jpeg",
        //     imagens: ["img/casas/6/principalitamaraty.jpeg", "img/casas/6/itamaraty1.jpeg", "img/casas/6/itamaraty2.jpeg", "img/casas/6/itamaraty3.jpeg", "img/casas/6/itamaraty4.jpeg", "img/casas/6/itamaraty5.jpeg", "img/casas/6/itamaraty6.jpeg"], 
        //     quartos: 2, 
        //     banheiros: 1, 
        //     garagem: 0, 
        //     diferencial: "Linda Varanda" 
        // },
        7: { 
            titulo: "Lindo apartamento", 
            preco: "380.000", 
            localizacao: "Nogueira, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/7/principalcorreias.jpeg",
            imagens: ["img/casas/7/principalcorreias.jpeg", "img/casas/7/correias1.jpeg", "img/casas/7/correias2.jpeg", "img/casas/7/correias3.jpeg", "img/casas/7/correias4.jpeg", "img/casas/7/correias5.jpeg", "img/casas/7/correias6.jpeg", "img/casas/7/correias7.jpeg"], 
            quartos: 2, 
            banheiros: 1, 
            garagem: 1, 
            diferencial: "Ônibus na porta" 
        },
        8: { 
            titulo: "Lindo sítio a 20 min de Secretário", 
            preco: "240.000", 
            localizacao: "Sardoal, Paraíba do sul - RJ", 
            imagemPrincipal: "img/casas/8/principalsardual.jpeg",
            imagens: ["img/casas/8/principalsardual.jpeg", "img/casas/8/sardual1.jpeg", "img/casas/8/sardual2.jpeg", "img/casas/8/sardual3.jpeg", "img/casas/8/sardual4.jpeg", "img/casas/8/sardual5.jpeg"], 
            quartos: 1, 
            banheiros: 1, 
            garagem: 1, 
            diferencial: "Piscina e natureza" 
        },
        9: { 
            titulo: "Casa charmosa a 40 min de Três Rios", 
            preco: "450.000", 
            localizacao: "Santana do deserto, Minas Gerais - MG", 
            imagemPrincipal: "img/casas/9/principalsantana.jpeg",
            imagens: ["img/casas/9/principalsantana.jpeg", "img/casas/9/santana1.jpeg", "img/casas/9/santana2.jpeg", "img/casas/9/santana3.jpeg", "img/casas/9/santana4.jpeg", "img/casas/9/santana5.jpeg", "img/casas/9/santana6.jpeg", "img/casas/9/santana7.jpeg", "img/casas/9/santana8.jpeg"], 
            quartos: 3, 
            banheiros: 2, 
            garagem: 1, 
            diferencial: "Terreno" 
        },
        10: { 
            titulo: "Terreno espaçoso no bairro da Posse", 
            preco: "100.000", 
            localizacao: "Posse, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/10/principalterreno.jpeg",
            imagens: ["img/casas/10/principalterreno.jpeg", "img/casas/10/terreno1.jpeg", "img/casas/10/terreno2.jpeg", "img/casas/10/terreno3.jpeg",], 
            quartos: 0, 
            banheiros: 0, 
            garagem: 0, 
            diferencial: "Espaço" 
        },
        11: { 
            titulo: "Lindo terreno no bonfim", 
            preco: "280.000", 
            localizacao: "Bonfim, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/11/principalterreno.jpeg",
            imagens: ["img/casas/11/principalterreno.jpeg", "img/casas/11/terreno1.jpeg", "img/casas/11/terreno2.jpeg", "img/casas/11/terreno3.jpeg","img/casas/11/terreno4.jpeg","img/casas/11/terreno5.jpeg", "img/casas/11/terreno6.jpeg", "img/casas/11/terreno7.jpeg", "img/casas/11/terreno8.jpeg", "img/casas/11/terreno9.jpeg"], 
            quartos: 0, 
            banheiros: 0, 
            garagem: 0, 
            diferencial: "Espaço" 
        },
        12: { 
            titulo: "Apartamento aldeia das águas", 
            preco: "220.000", 
            localizacao: "Barra do Piraí, Volta Redonda - RJ", 
            imagemPrincipal: "img/casas/12/principalaldeia.jpeg",
            imagens: ["img/casas/12/principalaldeia.jpeg", "img/casas/12/aldeia1.jpeg", "img/casas/12/aldeia2.jpeg", "img/casas/12/aldeia3.jpeg", "img/casas/12/aldeia4.jpeg", "img/casas/12/aldeia5.jpeg", "img/casas/12/aldeia6.jpeg", "img/casas/12/aldeia7.jpeg", "img/casas/12/aldeia8.jpeg", "img/casas/12/aldeia9.jpeg"], 
            quartos: 1, 
            banheiros: 1, 
            garagem: "Sim", 
            diferencial: "Parque aquático" 
        },
        13: { 
            titulo: "Casa Mirante do sol nascente", 
            preco: "1.600.000", 
            localizacao: "Itaipava, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/13/principalitaipava.jpeg",
            imagens: ["img/casas/13/principalitaipava.jpeg","img/casas/13/itaipava1.jpeg","img/casas/13/itaipava2.jpeg","img/casas/13/itaipava3.jpeg", "img/casas/13/itaipava4.jpeg","img/casas/13/itaipava5.jpeg","img/casas/13/itaipava6.jpeg","img/casas/13/itaipava7.jpeg","img/casas/13/itaipava8.jpeg","img/casas/13/itaipava9.jpeg","img/casas/13/itaipava10.jpeg","img/casas/13/itaipava11.jpeg","img/casas/13/itaipava12.jpeg","img/casas/13/itaipava13.jpeg","img/casas/13/itaipava14.jpeg","img/casas/13/itaipava15.jpeg","img/casas/13/itaipava16.jpeg","img/casas/13/itaipava17.jpeg","img/casas/13/itaipava18.jpeg",], 
            quartos: 3, 
            banheiros: 2, 
            garagem: "Sim", 
            diferencial: "Vista incrivel" 
        },
        14: { 
            titulo: "Terreno Carangola", 
            preco: "1.000.000", 
            localizacao: "Carangola, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/14/principal.jpeg",
            imagens: ["img/casas/14/principal.jpeg","img/casas/14/terreno.jpeg",], 
            quartos: "", 
            banheiros: "", 
            garagem: "", 
            diferencial: "4.000m²" 
        },
        15: { 
            titulo: "Terreno Pedro do Rio", 
            preco: "500.000", 
            localizacao: "Pedro do Rio, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/15/principal.jpeg",
            imagens: ["img/casas/15/principal.jpeg","img/casas/15/terreno1.jpeg","img/casas/15/terreno2.jpeg","img/casas/15/terreno3.jpeg"], 
            quartos: "", 
            banheiros: "", 
            garagem: "", 
            diferencial: "1.900m²" 
        },
        16: { 
            titulo: "Casa a venda no carangola", 
            preco: "495.000", 
            localizacao: "Carangola, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/16/principal.jpeg",
            imagens: ["img/casas/16/principal.jpeg","img/casas/16/carangola1.jpeg","img/casas/16/carangola2.jpeg","img/casas/16/carangola3.jpeg","img/casas/16/carangola4.jpeg","img/casas/16/carangola5.jpeg","img/casas/16/carangola6.jpeg","img/casas/16/carangola7.jpeg","img/casas/16/carangola8.jpeg","img/casas/16/carangola9.jpeg","img/casas/16/carangola10.jpeg","img/casas/16/carangola11.jpeg","img/casas/16/carangola12.jpeg","img/casas/16/carangola13.jpeg","img/casas/16/carangola14.jpeg","img/casas/16/carangola15.jpeg","img/casas/16/carangola16.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "6 carros", 
            diferencial: "quintal" 
        },
        17: { 
            titulo: "Apartamento no centro", 
            preco: "680.000", 
            localizacao: "Centro, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/17/principalcentro.jpeg",
            imagens: ["img/casas/17/principalcentro.jpeg","img/casas/17/centro1.jpeg","img/casas/17/centro2real.jpeg","img/casas/17/centro3.jpeg","img/casas/17/centro4.jpeg","img/casas/17/centro2.jpeg","img/casas/17/centro5.jpeg", "img/casas/17/centro6.jpeg", "img/casas/17/centro7.jpeg", "img/casas/17/centro8.jpeg", "img/casas/17/centro9.jpeg", "img/casas/17/centro10.jpeg", "img/casas/17/centro11.jpeg", "img/casas/17/centro12.jpeg", "img/casas/17/centro13.jpeg"], 
            quartos: "3", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "localização" 
        },
        18: { 
            titulo: "Apartamento no centro", 
            preco: "210.000", 
            localizacao: "Samambaia, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/18/principalsamambaia.jpeg",
            imagens: ["img/casas/18/principalsamambaia.jpeg","img/casas/18/samambaia1.jpeg","img/casas/18/samambaia2.jpeg","img/casas/18/samambaia3.jpeg","img/casas/18/samambaia4.jpeg","img/casas/18/samambaia5.jpeg","img/casas/18/samambaia6.jpeg", "img/casas/18/samambaia7.jpeg", "img/casas/18/samambaia8.jpeg", "img/casas/18/samambaia9.jpeg", "img/casas/18/samambaia10.jpeg", "img/casas/18/samambaia11.jpeg", "img/casas/18/samambaia12.jpeg", "img/casas/18/samambaia13.jpeg", "img/casas/18/samambaia14.jpeg", "img/casas/18/samambaia15.jpeg"], 
            quartos: "3", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "localização" 
        },
        19: { 
            titulo: "Casa com vista ampla", 
            preco: "210.000", 
            localizacao: "Samambaia, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/19/principal.jpeg",
            imagens: ["img/casas/19/principal.jpeg","img/casas/19/1.jpeg","img/casas/19/2.jpeg","img/casas/19/3.jpeg","img/casas/19/4.jpeg", "img/casas/19/5.jpeg", "img/casas/19/6.jpeg", "img/casas/19/7.jpeg", "img/casas/19/8.jpeg", "img/casas/19/9.jpeg", "img/casas/19/10.jpeg", "img/casas/19/11.jpeg", "img/casas/19/12.jpeg", "img/casas/19/13.jpeg"], 
            quartos: "3", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "vista" 
        },
        20: { 
            titulo: "Linda Chácara com 4 alqueires", 
            preco: "2.300.000", 
            localizacao: "Samambaia, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/20/principal.jpeg",
            imagens: ["img/casas/20/principal.jpeg","img/casas/20/1.jpeg","img/casas/20/2.jpeg","img/casas/20/3.jpeg","img/casas/20/4.jpeg", "img/casas/20/5.jpeg", "img/casas/20/6.jpeg", "img/casas/20/7.jpeg", "img/casas/20/8.jpeg", "img/casas/20/9.jpeg", "img/casas/20/10.jpeg", "img/casas/20/11.jpeg", "img/casas/20/12.jpeg", "img/casas/20/13.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "Terreno" 
        },
        21: { 
            titulo: "Casa com 3 quartos", 
            preco: "780.000", 
            localizacao: "Humberto Hovigat, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/21/principal.jpeg",
            imagens: ["img/casas/21/principal.jpeg","img/casas/21/1.jpeg","img/casas/21/2.jpeg","img/casas/21/3.jpeg","img/casas/21/4.jpeg", "img/casas/21/5.jpeg", "img/casas/21/6.jpeg", "img/casas/21/7.jpeg", "img/casas/21/8.jpeg", "img/casas/21/9.jpeg", "img/casas/21/10.jpeg", "img/casas/21/11.jpeg", "img/casas/21/12.jpeg", "img/casas/21/13.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "Terreno" 
        },
        22: { 
            titulo: "2 casas mais amplo Terraço", 
            preco: "270.000", 
            localizacao: "Quarteirão brasileiro, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/22/principal.jpeg",
            imagens: ["img/casas/22/principal.jpeg","img/casas/22/1.jpeg","img/casas/22/2.jpeg","img/casas/22/3.jpeg","img/casas/22/4.jpeg", "img/casas/22/5.jpeg", "img/casas/22/6.jpeg", "img/casas/22/7.jpeg", "img/casas/22/8.jpeg", "img/casas/22/9.jpeg", "img/casas/22/10.jpeg", "img/casas/22/11.jpeg", "img/casas/22/12.jpeg", "img/casas/22/13.jpeg", "img/casas/22/14.jpeg" , "img/casas/22/15.jpeg" ], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "2 casas" 
        },
        23: { 
            titulo: "Casa no bigen", 
            preco: "1.500.000", 
            localizacao: "Bingen, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/23/principal.jpeg",
            imagens: ["img/casas/23/principal.jpeg","img/casas/23/1.jpeg","img/casas/23/2.jpeg","img/casas/23/3.jpeg","img/casas/23/4.jpeg", "img/casas/23/5.jpeg", "img/casas/23/6.jpeg", "img/casas/23/7.jpeg", "img/casas/23/8.jpeg", "img/casas/23/9.jpeg", "img/casas/23/10.jpeg", "img/casas/23/11.jpeg", "img/casas/23/12.jpeg", "img/casas/23/13.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "bairro" 
        },
        24: { 
            titulo: "Casa Laranja", 
            preco: "450.000", 
            localizacao: "Bingen, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/24/principal.jpeg",
            imagens: ["img/casas/24/principal.jpeg","img/casas/24/1.jpeg","img/casas/24/2.jpeg","img/casas/24/3.jpeg","img/casas/24/4.jpeg", "img/casas/24/5.jpeg", "img/casas/24/6.jpeg"], 
            quartos: "2", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "bairro" 
        },
        25: { 
            titulo: "Casa com dois pisos", 
            preco: "870.000", 
            localizacao: "Samambaia, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/25/principal.jpeg",
            imagens: ["img/casas/25/principal.jpeg","img/casas/25/1.jpeg","img/casas/25/2.jpeg","img/casas/25/3.jpeg","img/casas/25/4.jpeg", "img/casas/25/5.jpeg", "img/casas/25/6.jpeg", "img/casas/25/7.jpeg", "img/casas/25/8.jpeg", "img/casas/25/9.jpeg", "img/casas/25/10.jpeg", "img/casas/25/11.jpeg", "img/casas/25/12.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "terreno" 
        },
        26: { 
            titulo: "Casa no castelo sao manuel", 
            preco: "300.000", 
            localizacao: "Castelo São Manuel, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/26/principal.jpeg",
            imagens: ["img/casas/26/principal.jpeg","img/casas/26/1.jpeg","img/casas/26/2.jpeg","img/casas/26/3.jpeg","img/casas/26/4.jpeg", "img/casas/26/5.jpeg", "img/casas/26/6.jpeg", "img/casas/26/7.jpeg", "img/casas/26/8.jpeg", "img/casas/26/9.jpeg", "img/casas/26/10.jpeg", "img/casas/26/11.jpeg", "img/casas/26/12.jpeg", "img/casas/26/13.jpeg", "img/casas/26/14.jpeg", "img/casas/26/15.jpeg"], 
            quartos: "2", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "bairro" 
        },
        27: { 
            titulo: "Linda Casa na Serra velha", 
            preco: "600.000", 
            localizacao: "Serra Velha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/27/principal.jpeg",
            imagens: ["img/casas/27/principal.jpeg","img/casas/27/1.jpeg","img/casas/27/2.jpeg","img/casas/27/3.jpeg","img/casas/27/4.jpeg", "img/casas/27/5.jpeg", "img/casas/27/6.jpeg", "img/casas/27/7.jpeg", "img/casas/27/8.jpeg", "img/casas/27/9.jpeg", "img/casas/27/10.jpeg", "img/casas/27/11.jpeg", "img/casas/27/12.jpeg", "img/casas/27/13.jpeg", "img/casas/27/14.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "vista" 
        },
        28: { 
            titulo: "Casa no Nova Cascatinha", 
            preco: "290.000", 
            localizacao: "Nova Cascatinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/28/principal.jpeg",
            imagens: ["img/casas/28/principal.jpeg","img/casas/28/1.jpeg","img/casas/28/2.jpeg","img/casas/28/3.jpeg","img/casas/28/4.jpeg", "img/casas/28/5.jpeg", "img/casas/28/6.jpeg", "img/casas/28/7.jpeg", "img/casas/28/8.jpeg", "img/casas/28/9.jpeg", "img/casas/28/10.jpeg", "img/casas/28/11.jpeg", "img/casas/28/12.jpeg", "img/casas/28/13.jpeg", "img/casas/28/14.jpeg", "img/casas/28/15.jpeg", "img/casas/28/16.jpeg", "img/casas/28/17.jpeg"], 
            quartos: "2", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "vista" 
        },
        29: { 
            titulo: "Casa a venda em Cascatinha", 
            preco: "690.000", 
            localizacao: "Cascatinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/29/principal.jpeg",
            imagens: ["img/casas/29/principal.jpeg","img/casas/29/1.jpeg","img/casas/29/2.jpeg","img/casas/29/3.jpeg","img/casas/28/4.jpeg", "img/casas/29/5.jpeg", "img/casas/29/6.jpeg", "img/casas/29/7.jpeg", "img/casas/29/8.jpeg", "img/casas/29/9.jpeg", "img/casas/29/10.jpeg", "img/casas/29/11.jpeg", "img/casas/29/12.jpeg", "img/casas/29/13.jpeg", "img/casas/29/14.jpeg", "img/casas/29/15.jpeg", "img/casas/29/16.jpeg", "img/casas/29/17.jpeg", "img/casas/29/18.jpeg", "img/casas/29/19.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "piscina" 
        },

        30: { 
            titulo: "Casa a venda no Quissamã", 
            preco: "580.000", 
            localizacao: "Quissamã, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/30/principal.jpeg",
            imagens: ["img/casas/30/principal.jpeg","img/casas/30/1.jpeg","img/casas/30/2.jpeg","img/casas/30/3.jpeg","img/casas/30/4.jpeg", "img/casas/30/5.jpeg", "img/casas/30/6.jpeg", "img/casas/30/7.jpeg", "img/casas/30/8.jpeg", "img/casas/30/9.jpeg", "img/casas/30/10.jpeg", "img/casas/30/11.jpeg", "img/casas/30/12.jpeg", "img/casas/30/13.jpeg", "img/casas/30/14.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "localização" 
        },   
        31: { 
            titulo: "Casa a venda em Secretario", 
            preco: "1.200.000", 
            localizacao: "Secretario, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/31/principal.jpeg",
            imagens: ["img/casas/31/principal.jpeg","img/casas/31/1.jpeg","img/casas/31/2.jpeg","img/casas/31/3.jpeg","img/casas/31/4.jpeg", "img/casas/31/5.jpeg", "img/casas/31/6.jpeg", "img/casas/31/7.jpeg", "img/casas/31/8.jpeg", "img/casas/31/9.jpeg", "img/casas/31/10.jpeg", "img/casas/31/11.jpeg", "img/casas/31/12.jpeg", "img/casas/31/13.jpeg", "img/casas/31/14.jpeg", "img/casas/31/15.jpeg"], 
            quartos: "3", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "terreno" 
        }, 
        32: { 
            titulo: "Casa a venda em Taquara", 
            preco: "200.000", 
            localizacao: "Quitandinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/32/principal.jpeg",
            imagens: ["img/casas/32/principal.jpeg","img/casas/32/1.jpeg","img/casas/32/2.jpeg","img/casas/32/3.jpeg","img/casas/32/4.jpeg", "img/casas/32/5.jpeg", "img/casas/32/6.jpeg", "img/casas/32/7.jpeg"], 
            quartos: "2", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "garagem" 
        },   
        33: { 
            titulo: "Casa em área nobre", 
            preco: "950.000", 
            localizacao: "Cascatinha, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/33/principal.jpeg",
            imagens: ["img/casas/33/principal.jpeg","img/casas/33/1.jpeg","img/casas/33/2.jpeg","img/casas/33/3.jpeg","img/casas/33/4.jpeg"], 
            quartos: "5", 
            banheiros: "2", 
            garagem: "sim", 
            diferencial: "localização" 
        }, 
        34: { 
            titulo: "Terreno no carangola", 
            preco: "120.000", 
            localizacao: "Carangola, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/34/principal.jpeg",
            imagens: ["img/casas/34/principal.jpeg","img/casas/34/1.jpeg","img/casas/34/2.jpeg","img/casas/34/3.jpeg","img/casas/34/4.jpeg","img/casas/34/5.jpeg", "img/casas/34/6.jpeg", "img/casas/34/7.jpeg"], 
            quartos: "0", 
            banheiros: "0", 
            garagem: "sim", 
            diferencial: "terreno" 
        }, 
        35: { 
            titulo: "Casa no Quissamã", 
            preco: "995.000", 
            localizacao: "Carangola, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/35/principal.jpeg",
            imagens: ["img/casas/35/principal.jpeg","img/casas/35/1.jpeg","img/casas/35/2.jpeg","img/casas/35/3.jpeg","img/casas/35/4.jpeg","img/casas/35/5.jpeg", "img/casas/35/6.jpeg", "img/casas/35/7.jpeg", "img/casas/35/8.jpeg", "img/casas/35/9.jpeg", "img/casas/35/10.jpeg", "img/casas/35/11.jpeg", "img/casas/35/12.jpeg", "img/casas/35/13.jpeg", "img/casas/35/14.jpeg", "img/casas/35/15.jpeg", "img/casas/35/16.jpeg"], 
            quartos: "0", 
            banheiros: "0", 
            garagem: "sim", 
            diferencial: "terreno" 
        },  
        36: { 
            titulo: "Casa Humberto Rovigath", 
            preco: "250.000", 
            localizacao: "Humberto Rovigath, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/36/principal.jpeg",
            imagens: ["img/casas/36/principal.jpeg","img/casas/36/1.jpeg","img/casas/36/2.jpeg","img/casas/36/3.jpeg","img/casas/36/4.jpeg","img/casas/36/5.jpeg", "img/casas/36/6.jpeg", "img/casas/36/7.jpeg", "img/casas/36/8.jpeg", "img/casas/36/9.jpeg"], 
            quartos: "0", 
            banheiros: "0", 
            garagem: "sim", 
            diferencial: "terreno" 
        },  
        37: { 
            titulo: "Casa composta na mosela", 
            preco: "700.000", 
            localizacao: "Mosela, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/37/principal.jpeg",
            imagens: ["img/casas/37/principal.jpeg","img/casas/37/1.jpeg","img/casas/37/2.jpeg","img/casas/37/3.jpeg","img/casas/37/4.jpeg","img/casas/37/5.jpeg", "img/casas/37/6.jpeg", "img/casas/37/7.jpeg", "img/casas/37/8.jpeg", "img/casas/37/9.jpeg","img/casas/37/10.jpeg","img/casas/37/11.jpeg","img/casas/37/12.jpeg","img/casas/37/13.jpeg","img/casas/37/14.jpeg","img/casas/37/15.jpeg","img/casas/37/16.jpeg","img/casas/37/17.jpeg","img/casas/37/18.jpeg","img/casas/37/19.jpeg"], 
            quartos: "5", 
            banheiros: "3", 
            garagem: "sim", 
            diferencial: "tamanho" 
        },
        38: { 
            titulo: "Linda casa composta", 
            preco: "1.300.000", 
            localizacao: "Humberto Hovigat, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/38/principal.jpeg",
            imagens: ["img/casas/38/principal.jpeg","img/casas/38/1.jpeg","img/casas/38/2.jpeg","img/casas/38/3.jpeg","img/casas/38/4.jpeg","img/casas/38/5.jpeg", "img/casas/38/6.jpeg", "img/casas/38/7.jpeg", "img/casas/38/8.jpeg", "img/casas/38/9.jpeg","img/casas/38/10.jpeg","img/casas/38/11.jpeg","img/casas/38/12.jpeg","img/casas/38/13.jpeg","img/casas/38/14.jpeg","img/casas/38/15.jpeg","img/casas/38/16.jpeg","img/casas/38/17.jpeg","img/casas/38/18.jpeg","img/casas/38/19.jpeg","img/casas/38/20.jpeg"], 
            quartos: "5", 
            banheiros: "3", 
            garagem: "sim", 
            diferencial: "tamanho" 
        },
        39: { 
            titulo: "Casa composta", 
            preco: "500.000", 
            localizacao: "Loteamento Samambaia, Petrópolis - RJ", 
            imagemPrincipal: "img/casas/39/principal.jpeg",
            imagens: ["img/casas/39/principal.jpeg","img/casas/39/1.jpeg","img/casas/39/2.jpeg","img/casas/39/3.jpeg","img/casas/39/4.jpeg","img/casas/39/5.jpeg", "img/casas/39/6.jpeg", "img/casas/39/7.jpeg", "img/casas/39/8.jpeg", "img/casas/39/9.jpeg","img/casas/39/10.jpeg","img/casas/39/11.jpeg"], 
            quartos: "3", 
            banheiros: "1", 
            garagem: "sim", 
            diferencial: "Garagem" 
        },                   
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
  