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
              Atualmente contratado como analista de serviços na vivo, onde diariamente tenho contato com db's como SQL server, fazendo manutenção de banco, procedures, triggers, etc, já utilizei ferramentas para deploy e gerenciamento de servidor como filezilla, putty e nginx além de criar APIS com node e suas bibliotecas e plataformas front-end usando tecnologias como react, react-native e bootstrap.

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
        </div>
      </div>
    </section>
  );
};

export default Descricao;