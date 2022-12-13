import "./descricao.css";
import logo from './assets/img/avatar.png';
import { MaquinaDeEscrever } from "./automate"

const Descricao = () => {


  return (

    <section id="sobre-mim">
      <div class='title'><MaquinaDeEscrever text="SOBRE MIM..." /></div>
      <br />
      <div class="centralizador">
        <div class="ajustador-2">
          <div class="avatar">

            <a href="https://github.com/eliseu441">
              <img
                class="desenho-bg"
                src={logo}
                alt="avatar"
                linkto="https://github.com/eliseu441"
              />
            </a>
            {/* <div class="circulo-conteiner">
                <img
                  class="circulo css"
                  src="/assets/img/css-circle.png"
                  alt="css"
                />
                <img
                  class="circulo html"
                  src="/assets/img/html-circle.png"
                  alt="css"
                />
                <img
                  class="circulo js"
                  src="/assets/img/js-circle.png"
                  alt="js"
                />
              </div> */}
          </div>
          <div class="sobre-mim">
            <p>
              - 🎓 Atualmente estudando cursos da Rocketseat.
            </p>
            <p>
              - 💻 Atuo como full-stack.
              Atualmente contratado como analista de serviços na vivo, onde diariamente tenho contato com db's como o SQL server fazendo manutenção de banco, procedures, triggers, etc, já utilizei ferramentas para deploy e gerenciamento de servidor como filezilla, putty e nginx além de criar APIS com node e suas bibliotecas e plataformas front-end usando tecnologias como react, react-native e bootstrap.

            </p>
            <p>
              - 💬 conhecimento sólido em: react, react-native, bootstrap, node, javascript, typescript, sql-server, mysql, RESTapi, SOAPapi, html, css, express, jenkins, putty, nginx, linux e ajax.
            </p>
            <p>
              <h3 align="left">Linkedin:</h3>
              <p align="left">
                <a href="https://linkedin.com/in/https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/" height="30" width="40" /></a>
              </p>

            </p>

          </div>
          <div class="ferramentas">
            <p>Linguagens e ferramentas que já usei:</p>

            <p align="left">
              <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" class="icons" alt="bootstrap" width="40" height="40" />
              </a>
              <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" class="icons" alt="c" width="40" height="40" />
              </a>
              <a href="https://www.chartjs.org" target="_blank" rel="noreferrer">
                <img src="https://www.chartjs.org/media/logo-title.svg" class="icons" alt="chartjs" width="40" height="40" />
              </a>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" class="icons" alt="css3" width="40" height="40" />
              </a>
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" class="icons" alt="docker" width="40" height="40" />
              </a>
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" class="icons" alt="express" width="40" height="40" />
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" class="icons" alt="git" width="40" height="40" />
              </a>
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" class="icons" alt="html5" width="40" height="40" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" class="icons" alt="javascript" width="40" height="40" />
              </a>
              <a href="https://www.jenkins.io" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" class="icons" alt="jenkins" width="40" height="40" />
              </a>
              <a href="https://jestjs.io" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" class="icons" alt="jest" width="40" height="40" />
              </a>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" class="icons" alt="linux" width="40" height="40" />
              </a>
              <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer">
                <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" class="icons" alt="mssql" width="40" height="40" /> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" class="icons" alt="mysql" width="40" height="40" /> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" class="icons" alt="nginx" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" class="icons" alt="nodejs" width="40" height="40" /> </a> <a href="https://www.oracle.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" class="icons" alt="oracle" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" class="icons" alt="react" width="40" height="40" /> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" class="icons" alt="typescript" width="40" height="40" /> </a> </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Descricao;