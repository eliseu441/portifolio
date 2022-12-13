import "./main.css";
import Particles from './particles.js';
import Descricao from "../descricao/descricao";

const Main = () => {
/* ---- particles.js config ---- */

  return (
    <main class= 'main-content'>
          <Descricao />
          <Particles id="tsparticles" />
        
    </main>
    
  );
};

export default Main;