import "./projetos.css";

import caju from './assets/img/caju3.png';
import caju2 from './assets/img/caju1.png';
import caju3 from './assets/img/caju2.png';
import portifolio1 from './assets/img/portifolio1.png';
import portifolio2 from './assets/img/portifolio2.png';
import portifolio3 from './assets/img/portifolio3.png';


const Projetos = () => {


  return (

    <section id="projetos">
      <div class="centralizador-projetos">
        <h2 class="project">PROJETOS</h2>
        <div class="clique"><p>Clique na imagem:</p></div>
        <div class="projetos-itens">
          <div class="pro">
            <div id="slider">
              <a href="https://github.com/eliseu441/dashboard_caju">
                <figure >
                  <img
                    class="desenho-bg"
                    src={caju}
                    alt="caju1"
                  />
                  <img
                    class="desenho-bg"
                    src={caju2}
                    alt="caju2"
                  />
                  <img
                    class="desenho-bg"
                    src={caju3}
                    alt="caju3"
                  />
                </figure>
                </a>
            </div>
          </div>
          <div class="pro">
          <div id="slider">
              <a href="https://github.com/eliseu441/portifolio">
                <figure >
                  <img
                    class="desenho-bg"
                    src={portifolio1}
                    alt="portifolio1"
                  />
                  <img
                    class="desenho-bg"
                    src={portifolio2}
                    alt="portifolio2"
                  />
                  <img
                    class="desenho-bg"
                    src={portifolio3}
                    alt="portifolio3"
                  />
                </figure>
                </a>
            </div>
          </div>
          <div class="pro">
            <div class="breve"><p>EM BREVE</p></div>
          </div>
          <div class="pro escondido">
            <div class="breve"><p>EM BREVE</p></div>
          </div>
          <div class="pro escondido">
            <div class="breve"><p>EM BREVE</p></div>
          </div>
          <div class="pro escondido">
            <div class="breve"><p>EM BREVE</p></div>
          </div>
        </div>

        <div ><a
          href="https://github.com/eliseu441?tab=repositories"
          target="_blank"
        >
          <button class="github-link" role="button">Repositórios no github</button>
        </a>

        </div>
      </div>
    </section>
  );
};


export default Projetos;