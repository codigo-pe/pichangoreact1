import React from "react";
import './landing.css';
import icon1 from "./img/icon/feature_icon_1.png"
import icon2 from "./img/icon/feature_icon_2.png"
import icon3 from "./img/icon/feature_icon_3.png"
import icon4 from "./img/icon/feature_icon_4.png"

function Landing(props) {
   
    return (
      <div>
        <div className="banner_part">
          <div>
            <h2>PICHANGO!!!!</h2>
            <p>En cualquier momento !!! en cualquier lugar !!!</p>
            <h1>ES TIEMPO DE JUGAR</h1>
          </div>
        </div>

        <div className="elegirnos">
          <h2>Porque elegirnos?</h2>
          <p>
            Somos la mayor plataforma a nivel nacional, con la capacidad de
            organizar y formalizar encuentros deportivos de la manera más
            dinámica y sencilla posible, desde donde te encuentres, con la
            posibilidad de que tu seas quien elige el horario de acuerdo a tu
            disponibilidad, además permitir integrar grupos de amigos y nuevos
            compañeros, para así no tener que esperar mas o postegar tus
            "Pichangas".
            
              QUE ESPERAS? disfrúta ahora todos nuestro beneficios
            
          </p>
        </div>
        <div className="autowide">
          <div className="module">
            <p>
              <img src={icon1} alt="" />
              Encontraras muchas diversos tipos de chanchas y podrás crear
              partidos cerca a tu barrio, distrito, ciudad de manera muy sencilla
            </p>
          </div>
        </div>
          <div className="module">
            <p>
              <img src={icon2} alt="" />
              Tu controla el horario, decide
              en qué momento podras juntarte con tus amigos o encuentra nuevos
              compañeros disponibles y divierte en la "Pichanga".
            </p>
          </div>
          <div className="module">
            <p>
              <img src={icon3} alt="" />
              Al ser parte de nuestra comunidad, la más grande de todo el Perú,
              podrás invitar a tus amigos o conocer nuevos
              ¨Pichangueros" y así crecera tu red social cada vez más
            </p>
          </div>
          <div className="module">
            <img src={icon4} alt="" />
            <p>
              Mediante nuestra plataforma podrás compartir los gastos con tus compañeros de ¨Pichanga", de la manera mas sencilla, de
              acuerdo a los disponibilidades de los establecimientos.
            </p>
          </div>
        

        <div className="become_member">
          <div className="become_member_text">
            <h2>Disfruta de todos los beneficios</h2>
            <p>
              Se parte de la comunidad fútbolera mas grande a nivel nacional,
              utiliza nuestros servicios de manera inmediata y GRATUITA, sin
              ninguna restricción No esperes mas..
            </p>
            <button>Registrate ahora!!!</button>
          </div>
        </div> 
      </div>
    );
  }

export { Landing };
