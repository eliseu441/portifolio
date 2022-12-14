import "./main.css";
import Particles from './particles.js';
import Descricao from "../descricao/descricao";
import Projetos from "../projetos/projetos";
import Ferramentas from "../ferramentas/ferramentas";

const Main = () => {
/* ---- particles.js config ---- */

  return (
    <main class= 'main-content'>
          <Descricao />
          <Projetos />
          <Ferramentas />
          <Particles id="tsparticles" />
        
    </main>
    
  );
};

export default Main;