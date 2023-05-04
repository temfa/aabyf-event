window.addEventListener("DOMContentLoaded", () => {
  let header = document.getElementById("site-header");
  let footer = document.getElementById("footer");
  let copyright = document.getElementById("copyright");
  let date = new Date();
  let year = date.getFullYear();

  header.innerHTML += `
     <div class="container-fluid">
        <nav class="navbar navbar-expand-lg stroke">
          <!--<h1>
            <a class="navbar-brand d-flex align-items-center" href="index.html"> AABYFGhana2023</a>
          </h1>
           if logo is image enable this-->
    <a class="navbar-brand" href="#index.html">
        <img src="../assets/images/logo.png" alt="Your logo" title="Your logo" style="height:85px;" />
    </a> 
          <button
            class="navbar-toggler collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span class="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Lar <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Sobre nós</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="program.html">Programa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://aabyf-website.netlify.app/testimonials.html">Testemunhos</a>
              </li>
              <li class="nav-item">
                  <a href="contact.html" class="nav-link">Contato</a>
              </li>
             
             <!-- <li class="dropdown">
                <a type="button" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recursos</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="blog.html">Blog</a>
                  <a href="gallery.html" class="nav-link">Galeria</a>
                  <a href="presentations.html" class="nav-link">Apresentações</a>
                  <a href="reports.html" class="nav-link">Relatórios</a>
                  <a href="publications.html" class="nav-link">Publicações</a>
                </div>
              </li>
              <li class="dropdown">
                <a type="button" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Delegados</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="blog.html">Participar</a>
                  <a href="accomodations.html" class="nav-link">Acomodações</a>
                  <a href="faq.html" class="nav-link">Perguntas frequentes</a>
                  <a href="contact.html" class="nav-link">Contact</a>
                </div>
              </li>
              <li class="nav-button">
                <a class="btn login-btn" role="button" href="login.html">Conecte-se</a>
              </li> -->
              <li class="dropdown">
                <a type="button" class="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Registro</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="nav-link" href="blog.html">Delegados de Gana</a>
                  <a href="register.html" class="nav-link">Delegados Internacionais</a>
                </div>
              </li>
              <!-- search button -->
              <!-- <div class="search-right ml-lg-3">
                <form action="#search" method="GET" class="search-box position-relative">
                  <div class="input-search">
                    <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus="" class="search-popup" />
                  </div>
                  <button type="submit" class="btn search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                </form>
              </div> -->
              <!-- //search button -->
              <li class="dropdown">
              <a type="button" class="nav-link dropdown-toggle" id="navbarDropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Por</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <p class="nav-link" id="english">English</p>
                  <p class="nav-link" id="french">French</p>
                  <p class="nav-link" id="portugese">Portugese</p>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  `;
  let french = document.getElementById("french");
  let english = document.getElementById("english");

  french.addEventListener("click", () => {
    const link = currentLocation.split("/")[currentLocation.split("/").length - 1];
    window.location.href = `../french/${link}`;
  });

  english.addEventListener("click", () => {
    const link = currentLocation.split("/")[currentLocation.split("/").length - 1];
    window.location.href = `../${link}`;
  });

  footer.innerHTML += `
  <div class="footer-29 py-5">
        <div class="container py-lg-4">
          <div class="row footer-top-29">
            <div class="col-lg-6 col-12 footer-list-29">
            <div class="footer-logo"><img src="../assets/images/logo.png" alt="Your logo" title="Your logo" /></div>
              <p class="sub-list-text mt-4 pt-lg-2">
               Fundada em 1984, a All Africa Baptist Youth Fellowship é um departamento da All Africa Baptist Fellowship com pleno funcionamento como órgão regional da Baptist World Alliance.
              </p>
            </div>
            <div class="col-lg-3 col-sm-6 footer-list-29 mt-lg-0 mt-sm-5 mt-4 pt-sm-0 pt-2">
              <h6 class="footer-title-29">Links Rápidos</h6>
              <ul>
                <li><a href="login.html">Conecte-se</a></li>
                <li><a href="gallery.html"> Galeria</a></li>
                <li><a href="contact.html">Contate-nos</a></li>
                <li><a href="blog.html"> Blog</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-sm-6 footer-contact-list mt-lg-0 mt-sm-5 mt-4 pt-sm-0 pt-2">
              <h6 class="footer-title-29">Informações de contato</h6>
              <ul>
                <li class="d-flex align-items-center py-2"><i class="fa fa-map-marker mr-2" aria-hidden="true"></i>21, Obafemi Awolowo Way
Oke-Bola, Ibadan, Oyo State,
Nigeria.</li>
                <li class="d-flex align-items-center py-2"><i class="fa fa-phone mr-2" aria-hidden="true"></i><a href="tel:+264 811500023">+(264) 811 500 023</a></li>
                <li class="d-flex align-items-center py-2"><i class="fa fa-phone mr-2" aria-hidden="true"></i><a href="tel:+234 7067153182">+(234) 7067 153 182</a></li>
                <li class="d-flex align-items-center py-2"><i class="fa fa-envelope mr-2" aria-hidden="true"></i><a href="mailto:info@example.com">info@example.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  `;

  copyright.innerHTML += `
  <div class="container">
        <div class="row bottom-copies">
          <p class="col-lg-8 copy-footer-29">© ${year} AABYFGhana2023. Todos os direitos reservados. Desenhado por <a href="https://w3layouts.com/" target="_blank"> Tema Digital Services</a></p>
          <div class="col-lg-4 text-right">
            <div class="main-social-footer-29">
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100068236816994&mibextid=ZbWKwL" class="facebook"><span class="fa-brands fa-facebook"></span></a>
              <a target="_blank" href="#twitter" class="twitter"><span class="fa-brands fa-twitter"></span></a>
              <a target="_blank" href="https://t.me/+BAo2QsK1IyE3ODVk"><span class="fa-brands fa-telegram" aria-hidden="true"></span></a>
              <a target="_blank" href="https://instagram.com/aabyf_21?igshid=ZDdkNTZiNTM= class="instagram"><span class="fa-brands fa-instagram"></span></a>
              <a target="_blank" href="https://youtube.com/@aabyf" class="linkedin"><span class="fa-brands fa-youtube"></span></a>
            </div>
          </div>
        </div>
      </div>
  `;

  let menuList = document.querySelectorAll(".nav-item");
  let navList = document.querySelectorAll(".nav-link");
  const currentLocation = location.href;
  for (let i = 0; i < navList.length; i++) {
    if (currentLocation === navList[i].href) {
      menuList[i].classList.add("active");
    }
  }
});
//  <li class="nav-item">
//    <a class="nav-link" href="contact.html">
//      Contact Us
//    </a>
//  </li>;