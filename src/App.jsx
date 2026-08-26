import { useEffect, useState } from "react";
import "./styles/styles.css";

const loadingMessages = [
  "MOLIENDO LOS GRANOS...",
  "PREPARANDO TU CAFÉ...",
  "AÑADIENDO SABOR...",
  "CASI LISTO...",
  "VIVANCOFFEE ESTÁ LISTO",
];

function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("is-loading");
    const startedAt = Date.now();
    let currentProgress = 0;
    let completed = false;

    const finish = () => {
      if (completed) return;
      completed = true;
      window.setTimeout(() => {
        setVisible(false);
        document.body.classList.remove("is-loading");
      }, Math.max(0, 2800 - (Date.now() - startedAt)));
    };

    const interval = window.setInterval(() => {
      const increment = currentProgress < 60 ? Math.floor(Math.random() * 8) + 4 : currentProgress < 85 ? Math.floor(Math.random() * 5) + 2 : Math.floor(Math.random() * 3) + 1;
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);
      if (currentProgress === 100) {
        window.clearInterval(interval);
        finish();
      }
    }, 130);
    const fallback = window.setTimeout(() => {
      currentProgress = 100;
      setProgress(100);
      window.clearInterval(interval);
      finish();
    }, 7000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fallback);
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;
  const message = progress < 30 ? loadingMessages[0] : progress < 60 ? loadingMessages[1] : progress < 90 ? loadingMessages[2] : progress < 100 ? loadingMessages[3] : loadingMessages[4];
  return <div id="loader" className="loader">
    <div className="loader__beans" aria-hidden="true">{Array.from({ length: 35 }, (_, index) => <span className={`coffee-bean coffee-bean--${index + 1}`} key={index} />)}</div>
    <div className="loader__content"><img className="loader__coffee" src="/RVIVANCOFFEE/assets/images/vivancoffee-loading.png" alt="Vivancoffee" /><h1 className="loader__title">VIVANCOFFEE</h1><p className="loader__text">{message}</p><div className="loader__line"><div className="loader__progress" style={{ width: `${progress}%` }} /></div></div>
  </div>;
}

export default function App() {
  usePageInteractions();
  return <>
    <Loader />
{/* =====================================================
         HEADER
    ====================================================== */}

    <header className="header">

      <div className="header__container">

        <a
          className="header__logo"
          href="#inicio"
          aria-label="Ir al inicio de Vivancoffee"
        >
          VIVANCOFFEE
        </a>


        <nav
          className="header__nav"
          aria-label="Navegación principal"
        >

          <a
            className="header__link"
            href="#inicio"
          >
            INICIO
          </a>

          <a
            className="header__link"
            href="#menu"
          >
            MENÚ
          </a>

          <a
            className="header__link"
            href="#experiencia"
          >
            NOSOTROS
          </a>

          <a
            className="header__link"
            href="#galeria"
          >
            GALERÍA
          </a>

          <a
            className="header__link"
            href="#contacto"
          >
            UBICACIÓN
          </a>

          <a
            className="header__link"
            href="#contacto"
          >
            CONTACTO
          </a>

          <a
            className="header__button"
            href="#menu"
          >
            VER MENÚ
          </a>

        </nav>


        <button
          className="header__menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>


    {/* =====================================================
         CONTENIDO
    ====================================================== */}

    <main>


      {/* ===================================================
           HERO
      ==================================================== */}

      <section
        className="hero"
        id="inicio"
      >

        <div className="hero__container">


          {/* PIZARRÓN */}

          <div
            className="hero__illustration hero__illustration--board"
            aria-hidden="true"
          >

            <img
              src="/RVIVANCOFFEE/assets/images/pizarron.png"
              alt=""
            />

          </div>


          {/* CONTENIDO */}

          <div className="hero__content">

            <div className="hero__eyebrow">

              <span
                className="hero__eyebrow-line"
              ></span>

              <span>
                CAFETERÍA &amp; REPOSTERÍA
              </span>

              <span
                className="hero__eyebrow-line"
              ></span>

            </div>


            <h1 className="hero__title">
              VIVANCOFFEE
            </h1>


            <div className="hero__subtitle">

              <span
                className="hero__subtitle-line"
              ></span>

              <h2>
                Un rincón para disfrutar
              </h2>

              <span
                className="hero__subtitle-line"
              ></span>

            </div>


            <p className="hero__description">
              Sabores únicos, un ambiente carismático
              y un espacio hecho para disfrutar,
              compartir y quedarse un rato más.
            </p>


            <div className="hero__actions">

              <a
                href="#menu"
                className="hero__button hero__button--primary"
              >

                <span className="hero__button-icon">
                  ☕
                </span>

                VER MENÚ

              </a>


              <a
                href="#experiencia"
                className="hero__button hero__button--secondary"
              >

                <span className="hero__button-icon">
                  🌿
                </span>

                CONOCE VIVANCOFFEE

              </a>

            </div>

          </div>


          {/* TAZA */}

          <div
            className="hero__illustration hero__illustration--coffee"
            aria-hidden="true"
          >

            <img
              src="/RVIVANCOFFEE/assets/images/taza-cafe.png"
              alt=""
            />

          </div>


          {/* CORAZONES */}

          <span
            className="hero__heart hero__heart--one"
            aria-hidden="true"
          >
            ♡
          </span>

          <span
            className="hero__heart hero__heart--two"
            aria-hidden="true"
          >
            ♡
          </span>

          <span
            className="hero__heart hero__heart--three"
            aria-hidden="true"
          >
            ♡
          </span>


          {/* DESTELLOS */}

          <span
            className="hero__spark hero__spark--one"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="hero__spark hero__spark--two"
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="hero__spark hero__spark--three"
            aria-hidden="true"
          >
            ✦
          </span>


          {/* HOJAS */}

          <span
            className="hero__leaf hero__leaf--1"
            aria-hidden="true"
          ></span>

          <span
            className="hero__leaf hero__leaf--2"
            aria-hidden="true"
          ></span>

          <span
            className="hero__leaf hero__leaf--3"
            aria-hidden="true"
          ></span>

          <span
            className="hero__leaf hero__leaf--4"
            aria-hidden="true"
          ></span>


          {/* MESA */}

          <div
            className="hero__table"
            aria-hidden="true"
          ></div>


          {/* SCROLL */}

          <a
            className="hero__scroll"
            href="#menu"
            aria-label="Descubrir el menú"
          >

            <span>
              DESCUBRE
            </span>

            <span className="hero__scroll-arrow">
              ↓
            </span>

          </a>

        </div>

      </section>


      {/* ===================================================
           MENÚ
      ==================================================== */}

      <section
        className="menu"
        id="menu"
      >

        <div className="menu__container">

          <div className="menu__header">

            <span className="menu__eyebrow">
              NUESTROS SABORES
            </span>

            <h2 className="menu__title">
              HECHO PARA
              <span>DISFRUTARSE</span>
            </h2>

            <p className="menu__subtitle">
              Desde un café recién preparado hasta
              algo dulce para acompañarlo.
            </p>

            <button
              className="menu__download"
              id="menuDownload"
              type="button"
            >
              <span aria-hidden="true">⬇</span>
              DESCARGAR MENÚ COMPLETO
            </button>

          </div>


          <div className="menu__categories">


            {/* =================================================
                 BEBIDAS
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/bebidas.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  BEBIDAS
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        CAFÉ CALIENTE
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Americano
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          CH $45 · GD $60
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Cappuccino
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          CH $55 · GD $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Latte
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          CH $55 · GD $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Moka
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          CH $65 · GD $80
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Latte de sabor
                          </h3>

                          <p className="menu__item-description">
                            Avellana, vainilla, chocolate
                            o caramelo.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          CH $65 · GD $80
                        </span>

                      </div>

                    </div>


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        TÉS
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Té
                          </h3>

                          <p className="menu__item-description">
                            Limón, hierbabuena, manzanilla,
                            manzana-canela, té verde
                            o frutos rojos.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $30
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Té con leche
                          </h3>

                          <p className="menu__item-description">
                            Chai, hierbabuena
                            o frutos rojos.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $45
                        </span>

                      </div>

                    </div>


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        BEBIDAS FRÍAS
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Americano con hielo
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $50
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Latte frío
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $65
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Latte de sabor frío
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Malteada
                          </h3>

                          <p className="menu__item-description">
                            Con crema batida y cereza.
                            Fresa, vainilla, chocolate,
                            nuez o chicle.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $55
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé
                          </h3>

                          <p className="menu__item-description">
                            Vainilla o chocolate.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $70
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappuccino
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $80
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé Oreo
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $70
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé Gansito
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé Ferrero
                          </h3>
                        </div>

                        <span className="menu__item-price">
                          $85
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé Chamoy
                          </h3>

                          <p className="menu__item-description">
                            Fresa o mango con gomitas.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frappé Magnum
                          </h3>

                          <p className="menu__item-description">
                            Con paleta.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $90
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Té helado
                          </h3>

                          <p className="menu__item-description">
                            Limón, hierbabuena
                            o frutos rojos.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $40
                        </span>

                      </div>

                    </div>


                    <div className="menu__note">

                      <strong>
                        Extras
                      </strong>

                      Leche de almendras +$6 ·
                      Espresso extra $15

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 CREPAS DULCES
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/crepas-dulces.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  CREPAS DULCES
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Clásica
                        </h3>

                        <p className="menu__item-description">
                          Nutella, plátano, lechera y nuez.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Philadelphia
                        </h3>

                        <p className="menu__item-description">
                          Queso crema, mermelada de fresa,
                          fresas y lechera.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Nevada
                        </h3>

                        <p className="menu__item-description">
                          Chantilly, plátano o fresa,
                          jarabe de chocolate o fresa
                          y helado a elegir.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Oreo
                        </h3>

                        <p className="menu__item-description">
                          Chantilly, Nutella,
                          fresas y galletas Oreo.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 WAFFLES DULCES
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/waffle-dulce.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  WAFFLES DULCES
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffles Sencillos
                        </h3>

                        <p className="menu__item-description">
                          A elegir plátano o fresa,
                          lechera y Nutella.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffles Mazapán
                        </h3>

                        <p className="menu__item-description">
                          Cajeta, plátano,
                          mazapán y lechera.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffles Delicia
                        </h3>

                        <p className="menu__item-description">
                          Chantilly, fresa y plátano,
                          jarabe de chocolate.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffles Maple
                        </h3>

                        <p className="menu__item-description">
                          Plátano o fresa,
                          Maple y cereal a elegir.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Waffle Nevado
                          </h3>

                          <p className="menu__item-description">
                            Chantilly, plátano y fresa,
                            nieve de vainilla, Oreo
                            o chocolate, lechera,
                            chocolate y cereal a elegir.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $85
                        </span>

                      </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 CREPAS SALADAS
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/crepa-salada.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  CREPAS SALADAS
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepizza
                        </h3>

                        <p className="menu__item-description">
                          Queso asadero, salsa de tomate
                          y pepperoni, acompañada de
                          chimichurri de la casa.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Jamón
                        </h3>

                        <p className="menu__item-description">
                          Queso asadero, queso amarillo
                          y jamón, acompañada de
                          chimichurri de la casa.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa 3 quesos
                        </h3>

                        <p className="menu__item-description">
                          Queso asadero, manchego
                          y queso americano,
                          acompañada de chimichurri.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 WAFFLES SALADOS
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/waffle-salado.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  WAFFLES SALADOS
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffle Pepperoni
                        </h3>

                        <p className="menu__item-description">
                          Queso asadero,
                          salsa de tomate y pepperoni.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $85
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Waffle Jamón
                        </h3>

                        <p className="menu__item-description">
                          Queso asadero, queso amarillo
                          y jamón.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $85
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 BEBIDAS ESPECIALES
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/bebidas-especiales.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  BEBIDAS ESPECIALES
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Matcha latte caliente
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        CH $65 · GD $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Taro latte caliente
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        CH $65 · GD $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Chocolate caliente
                        </h3>

                        <p className="menu__item-description">
                          Con malvaviscos.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $65
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Chocolate frío
                        </h3>

                        <p className="menu__item-description">
                          Con crema batida.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $65
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Frappé chocolate blanco
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Matcha Frappé
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        $85
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Taro Frappé
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Frappé Mazapán
                        </h3>
                      </div>

                      <span className="menu__item-price">
                        $70
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Afogato
                        </h3>

                        <p className="menu__item-description">
                          Helado de vainilla
                          y shot doble de espresso.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $75
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Coca Cola
                        </h3>

                        <p className="menu__item-description">
                          355 ml.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $20
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Agua
                        </h3>

                        <p className="menu__item-description">
                          Botella 1 lt.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $15
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 CREPAS ESPECIALES
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/crepas-especiales.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  CREPAS ESPECIALES
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Ferrero
                        </h3>

                        <p className="menu__item-description">
                          Nutella, fresa, Ferrero,
                          chocolate líquido y nuez.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $90
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Kinder
                        </h3>

                        <p className="menu__item-description">
                          Queso Philadelphia, plátano,
                          pastelito Kinder Delice
                          y chocolate líquido.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $90
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Crepa Cajeta
                        </h3>

                        <p className="menu__item-description">
                          Cajeta, plátano,
                          mazapán y lechera.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 OTROS SALADOS
            ================================================== */}

            <article className="menu__category menu__category--featured">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/otros-salados.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  OTROS SALADOS
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">

                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Baguette
                        </h3>

                        <p className="menu__item-description">
                          Jitomate, cebolla,
                          lechuga y aguacate.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Jamón de pavo
                        </h3>

                        <p className="menu__item-description">
                          Baguette con jamón de pavo.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Pollo
                        </h3>

                        <p className="menu__item-description">
                          Baguette con pollo.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Chorizo
                        </h3>

                        <p className="menu__item-description">
                          Baguette con chorizo.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Jamón serrano
                        </h3>

                        <p className="menu__item-description">
                          A elegir Philadelphia
                          o mayonesa.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $100
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Salmón
                        </h3>

                        <p className="menu__item-description">
                          A elegir Philadelphia
                          o mayonesa.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $100
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Papas a la francesa sencillas
                        </h3>

                        <p className="menu__item-description">
                          200 gr de papas con catsup
                          y chimichurri.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $50
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Papas a la francesa dobles
                        </h3>

                        <p className="menu__item-description">
                          400 gr de papas con catsup
                          y chimichurri.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Salchipapas
                        </h3>

                        <p className="menu__item-description">
                          200 gr de papas más salchicha
                          dorada con catsup y chimichurri.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $70
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Choripapas
                        </h3>

                        <p className="menu__item-description">
                          200 gr de papas más queso
                          asadero y chorizo con catsup
                          y chimichurri.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $80
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Orden de Nachos sencilla
                        </h3>

                        <p className="menu__item-description">
                          100 gr de tostitos nachos
                          con queso amarillo y jalapeño.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $55
                      </span>

                    </div>


                    <div className="menu__item">

                      <div>
                        <h3 className="menu__item-name">
                          Dorinachos
                        </h3>

                        <p className="menu__item-description">
                          100 gr de tostitos nachos
                          más Doritos Nacho con queso
                          amarillo y jalapeño.
                        </p>
                      </div>

                      <span className="menu__item-price">
                        $70
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </article>


            {/* =================================================
                 DESAYUNOS
            ================================================== */}

            <article className="menu__category">

              <button
                className="menu__category-button"
                type="button"
                aria-expanded="false"
              >

                <span className="menu__category-icon">
                  <img
                    className="menu__category-image"
                    src="/RVIVANCOFFEE/assets/images/desayunos.png"
                    alt=""
                  />
                </span>

                <span className="menu__category-name">
                  DESAYUNOS
                </span>

                <span
                  className="menu__category-arrow"
                  aria-hidden="true"
                >
                  +
                </span>

              </button>


              <div className="menu__category-content">

                <div className="menu__category-inner">

                  <div className="menu__items">


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        BATIDOS CON PROTEÍNA
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Choco-plátano
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            plátano, 1 scoop de proteína
                            y cacao.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $70
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Plátano manía
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            crema de cacahuate, plátano
                            y 1 scoop de proteína.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $75
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Vainilla-coco
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            crema de coco, vainilla
                            y 1 scoop de proteína.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $75
                        </span>

                      </div>

                    </div>


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        BOWL CON PROTEÍNA
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Crema de cacahuate
                          </h3>

                          <p className="menu__item-description">
                            Avena cocida en leche,
                            yogurt griego, scoop de proteína,
                            2 frutas, crema de cacahuate
                            y nuez.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $95
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Canela
                          </h3>

                          <p className="menu__item-description">
                            Avena cocida en leche,
                            yogurt griego, scoop de proteína,
                            2 frutas, canela,
                            arándanos y nuez.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $90
                        </span>

                      </div>

                    </div>


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        SMOOTHIES CON PROTEÍNA
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Frutos rojos
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            frutos rojos congelados,
                            scoop de proteína vainilla
                            y miel.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $90
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Fresa
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            fresas congeladas,
                            scoop de proteína vainilla
                            y miel.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $85
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Mango
                          </h3>

                          <p className="menu__item-description">
                            Leche de tu preferencia,
                            mango congelado,
                            scoop de proteína vainilla,
                            avena, miel y canela.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $90
                        </span>

                      </div>

                    </div>


                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        TOAST
                      </h4>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Cottage dulce
                          </h3>

                          <p className="menu__item-description">
                            Queso cottage, frutos rojos,
                            lechera y nuez.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $85
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Crema de cacahuate
                          </h3>

                          <p className="menu__item-description">
                            Crema de cacahuate puro,
                            plátano, maple y nuez.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $80
                        </span>

                      </div>


                      <div className="menu__item">

                        <div>
                          <h3 className="menu__item-name">
                            Cottage salado
                          </h3>

                          <p className="menu__item-description">
                            Queso cottage, aguacate
                            y huevo estrellado.
                          </p>
                        </div>

                        <span className="menu__item-price">
                          $85
                        </span>

                      </div>

                    </div>

                    <div className="menu__group">

                      <h4 className="menu__group-title">
                        BAGUETTE
                      </h4>

                      <div className="menu__item"><div><h3 className="menu__item-name">Jamón</h3><p className="menu__item-description">Mayonesa, jamón, queso amarillo, lechuga, jitomate, cebolla y aguacate.</p></div><span className="menu__item-price">$80</span></div>

                      <div className="menu__item"><div><h3 className="menu__item-name">Huevo</h3><p className="menu__item-description">Mayonesa, huevo en torta y jamón o chorizo.</p></div><span className="menu__item-price">$80</span></div>

                      <div className="menu__item"><div><h3 className="menu__item-name">Pollo</h3><p className="menu__item-description">Mayonesa, pechuga de pollo, lechuga, jitomate, cebolla y aguacate.</p></div><span className="menu__item-price">$80</span></div>

                    </div>


                    <div className="menu__group">
                      <h4 className="menu__group-title">BAGUETTE ESPECIAL</h4>
                      <div className="menu__item"><div><h3 className="menu__item-name">Salmón</h3><p className="menu__item-description">Relleno de queso crema con serrano, pepino y limón.</p></div><span className="menu__item-price">$100</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Jamón Serrano</h3><p className="menu__item-description">Queso crema, jamón serrano, lechuga, jitomate, cebolla y aguacate.</p></div><span className="menu__item-price">$100</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Camarones</h3><p className="menu__item-description">Queso crema, camarones asados, pepino, cebolla y aguacate.</p></div><span className="menu__item-price">$100</span></div>
                    </div>


                    <div className="menu__group">
                      <h4 className="menu__group-title">SÁNDWICH CALIENTE</h4>
                      <div className="menu__item"><div><h3 className="menu__item-name">Jamón</h3><p className="menu__item-description">Queso asadero, queso amarillo y jamón, acompañado de papas a la francesa.</p></div><span className="menu__item-price">$75</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">3 quesos</h3><p className="menu__item-description">Queso asadero, queso amarillo y manchego, acompañado de papas a la francesa.</p></div><span className="menu__item-price">$80</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Pizzandwich</h3><p className="menu__item-description">Queso asadero, pepperoni, salsa de tomate, queso amarillo y jamón, acompañado de papas a la francesa.</p></div><span className="menu__item-price">$80</span></div>
                    </div>


                    <div className="menu__group">
                      <h4 className="menu__group-title">CHILAQUILES</h4>
                      <div className="menu__item"><div><h3 className="menu__item-name">Con huevo</h3><p className="menu__item-description">Chilaquiles verdes con queso y crema, acompañados de frijoles.</p></div><span className="menu__item-price">$80</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Con pollo</h3><p className="menu__item-description">Chilaquiles verdes con queso y crema, acompañados de frijoles.</p></div><span className="menu__item-price">$80</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Con chorizo</h3><p className="menu__item-description">Chilaquiles verdes con queso y crema, acompañados de frijoles.</p></div><span className="menu__item-price">$80</span></div>
                    </div>


                    <div className="menu__group">
                      <h4 className="menu__group-title">HOT DOGS</h4>
                      <div className="menu__item"><div><h3 className="menu__item-name">Sencillos</h3><p className="menu__item-description">Jitomate, cebolla, chimichurri y catsup.</p></div><span className="menu__item-price">$60</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Jamón y queso</h3><p className="menu__item-description">Jamón, queso asadero, queso amarillo y chimichurri.</p></div><span className="menu__item-price">$75</span></div>
                      <div className="menu__item"><div><h3 className="menu__item-name">Choriqueso</h3><p className="menu__item-description">Chorizo, queso asadero y chimichurri.</p></div><span className="menu__item-price">$75</span></div>
                    </div>


                    


                    <div className="menu__note">

                      <strong>
                        Elementos a elegir
                      </strong>

                      Leche entera ·
                      Leche deslactosada ·
                      Lala 100 + proteína +$5 ·
                      Leche de almendra +$5

                      <br /><br />

                      <strong>
                        Fruta
                      </strong>

                      Plátano · Fresa · Frutos rojos ·
                      Manzana verde

                      <br /><br />

                      <strong>
                        Proteína
                      </strong>

                      Chocolate o vainilla ·
                      22 g por scoop

                    </div>


                  </div>

                </div>

              </div>

            </article>


          </div>


          <div className="menu__closing">

            <div className="menu__closing-line"></div>

            <p className="menu__closing-text">
              Un buen café siempre es una buena idea.
            </p>

            <p className="menu__closing-subtitle">
              VIVANCOFFEE
            </p>

          </div>


        </div>

      </section>


      {/* ===================================================
           EXPERIENCIA
      ==================================================== */}

      <section
        className="experience"
        id="experiencia"
      >

        <div className="experience__container">

          <div className="experience__intro">

            <figure className="experience__image-wrapper">

              <img
                className="experience__image"
                src="/RVIVANCOFFEE/assets/images/interior-vivancoffee.jpg"
                alt="Interior de VIVANCOFFEE"
              />

              <figcaption className="experience__image-caption">
                VIVANCOFFEE · SAN FELIPE, GTO.
              </figcaption>

            </figure>


            <div className="experience__story">

              <p className="experience__label">
                NUESTRA ESENCIA
              </p>

              <h2 className="experience__story-title">
                Un café para disfrutar sin prisa.
              </h2>

              <p className="experience__story-text">
                VIVANCOFFEE nació como un espacio para disfrutar
                algo más que una buena taza de café.
              </p>

              <p className="experience__story-text">
                Aquí cada visita puede convertirse en una conversación,
                una cita, una reunión, una foto o simplemente en un
                momento para desconectarte y disfrutar.
              </p>

              <p className="experience__story-signature">
                Hecho para quedarse un rato más.
              </p>

            </div>

          </div>


          <div className="experience__quote">

            <p className="experience__quote-text">
              “Un buen café siempre es una buena idea.”
            </p>

            <span className="experience__quote-author">
              VIVANCOFFEE
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
           GALERÍA
      ===================================================== */}

      <section
        className="gallery"
        id="galeria"
      >

        <div className="gallery__container">


          {/* =================================================
               ENCABEZADO
          ================================================== */}

          <header className="gallery__header">

            <div className="gallery__eyebrow">
              <span>VIVANCOFFEE</span>
            </div>

            <div className="gallery__intro">

              <h2 className="gallery__title">

                <span>
                  MOMENTOS
                </span>

                <span className="gallery__title-accent">
                  QUE COMPARTIMOS
                </span>

              </h2>


              <div className="gallery__description">

                <p>
                  <strong>
                    Pequeños momentos, grandes recuerdos.
                  </strong>
                </p>

                <p>
                  Una taza de café, una buena compañía y un
                  espacio para disfrutar sin prisa.
                </p>

              </div>

            </div>

          </header>


          {/* =================================================
               GALERÍA
          ================================================== */}

          <div className="gallery__grid">


            {/* ===============================================
                 CAFÉ
            ================================================ */}

            <article className="gallery__card">

              <div className="gallery__image-wrapper">

                <img
                  className="gallery__image"
                  src="/RVIVANCOFFEE/assets/images/cafe-vivancoffee.jpeg"
                  alt="Taza de café de VIVANCOFFEE"
                />

                <div className="gallery__overlay"></div>

                <div className="gallery__label">

                  <span className="gallery__number">
                    01
                  </span>

                  <span className="gallery__name">
                    CAFÉ
                  </span>

                </div>

              </div>

            </article>


            {/* ===============================================
                 MOMENTOS
            ================================================ */}

            <article className="gallery__card">

              <div className="gallery__image-wrapper">

                <img
                  className="gallery__image"
                  src="/RVIVANCOFFEE/assets/images/clientes-vivancoffee.jpeg"
                  alt="Clientes disfrutando en VIVANCOFFEE"
                />

                <div className="gallery__overlay"></div>

                <div className="gallery__label">

                  <span className="gallery__number">
                    02
                  </span>

                  <span className="gallery__name">
                    MOMENTOS
                  </span>

                </div>

              </div>

            </article>


            {/* ===============================================
                 DÍA DE MUERTOS
            ================================================ */}

            <article className="gallery__card">

              <div className="gallery__image-wrapper">

                <img
                  className="gallery__image"
                  src="/RVIVANCOFFEE/assets/images/dia-muertos-vivancoffee.jpeg"
                  alt="Decoración de Día de Muertos en VIVANCOFFEE"
                />

                <div className="gallery__overlay"></div>

                <div className="gallery__label">

                  <span className="gallery__number">
                    03
                  </span>

                  <span className="gallery__name">
                    DÍA DE MUERTOS
                  </span>

                </div>

              </div>

            </article>


            {/* ===============================================
                 NAVIDAD
            ================================================ */}

            <article className="gallery__card">

              <div className="gallery__image-wrapper">

                <img
                  className="gallery__image"
                  src="/RVIVANCOFFEE/assets/images/navidad-vivancoffee.jpeg"
                  alt="Bebida especial de Navidad en VIVANCOFFEE"
                />

                <div className="gallery__overlay"></div>

                <div className="gallery__label">

                  <span className="gallery__number">
                    04
                  </span>

                  <span className="gallery__name">
                    NAVIDAD
                  </span>

                </div>

              </div>

            </article>


          </div>


          {/* =================================================
               CIERRE
          ================================================== */}

          <div className="gallery__closing">

            <span className="gallery__closing-line"></span>

            <p className="gallery__closing-text">
              Momentos que saben mejor acompañados.
            </p>

            <span className="gallery__closing-line"></span>

          </div>


        </div>

      </section>


      {/* ===================================================
     CONTACTO
==================================================== */}

<section
  className="contact"
  id="contacto"
>

  <div className="contact__container">


    <div className="contact__header">

      <p className="contact__eyebrow">
        HABLEMOS
      </p>

      <h2 className="contact__title">
        ¿NOS VAMOS
        <span>POR UN CAFÉ?</span>
      </h2>

    </div>


    <div className="contact__content">


      {/* =================================================
           INFORMACIÓN
      ================================================== */}

      <div className="contact__info">


        {/* UBICACIÓN */}

        <div className="contact__block">

          <h3 className="contact__block-title">
            📍 UBICACIÓN
          </h3>

          <p className="contact__text">
            Queretaro 101, Col. Fovissste
          </p>

          <p className="contact__text">
            San Felipe, Gto. C.P. 37600
          </p>

          <p className="contact__text">
            Esquina con Allende, a un costado de
            los campos y frente al Fracc. Santa Teresa.
          </p>

          <p className="contact__text">
            Cerca de Campo Esparta y el Lienzo Charro.
          </p>

        </div>


        {/* HORARIOS */}

        <div className="contact__block">

          <h3 className="contact__block-title">
            🕐 HORARIOS
          </h3>

          <p className="contact__text">
            <strong>📅 Lunes a viernes</strong>
            <br />
            ☕ Desayunos: 9:00 AM – 12:30 PM
            <br />
            <span>
              🛵 Solo servicio a domicilio
            </span>
          </p>

          <p className="contact__text">
            <strong>📅 Lunes a sábado</strong>
            <br />
            🌙 5:00 PM – 11:00 PM
          </p>

        </div>


        {/* SERVICIOS */}

        <div className="contact__block">

          <h3 className="contact__block-title">
            🛍️ SERVICIOS
          </h3>

          <p className="contact__text">
            🥡 Pedidos para llevar
          </p>

          <p className="contact__text">
            🛵 Servicio a domicilio
          </p>

          <p className="contact__text">
            🪑 Consumo en el lugar
          </p>

        </div>

      </div>


      {/* =================================================
           CONTACTO Y REDES
      ================================================== */}

      <div className="contact__socials">


        {/* WHATSAPP */}

        <div className="contact__block">

          <h3 className="contact__block-title">
            💬 CONTÁCTANOS
          </h3>

          <a
            className="contact__social"
            href="https://wa.me/524281088149"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="/RVIVANCOFFEE/assets/images/whatsapp.svg"
              alt=""
              aria-hidden="true"
             />

            <span>
              WHATSAPP
            </span>

          </a>

          <p className="contact__text">
            📱 428 108 8149
          </p>

        </div>


        {/* REDES SOCIALES */}

        <div className="contact__block">

          <h3 className="contact__block-title">
            ✨ SÍGUENOS
          </h3>


          {/* INSTAGRAM */}

          <a
            className="contact__social"
            href="https://www.instagram.com/vivancoffee_sf/"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="/RVIVANCOFFEE/assets/images/instagram.svg"
              alt=""
              aria-hidden="true"
             />

            <span>
              INSTAGRAM
            </span>

          </a>

          <p className="contact__text">
            📸 @vivancoffee_sf
          </p>


          {/* FACEBOOK */}

          <a
            className="contact__social"
            href="https://www.facebook.com/share/14puZRdb2kk/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="/RVIVANCOFFEE/assets/images/facebook.svg"
              alt=""
              aria-hidden="true"
             />

            <span>
              FACEBOOK
            </span>

          </a>

          <p className="contact__text">
            👍 VIVANCOFFEE
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


</main>


{/* =====================================================
     FOOTER
====================================================== */}

<footer className="footer">

  <div className="footer__container">


    <div className="footer__brand">

      <a
        className="footer__logo"
        href="#inicio"
      >
        VIVANCOFFEE ☕
      </a>

      <p className="footer__tagline">
        ☕ CAFÉ · 🥐 REPOSTERÍA · 🤎 BUENOS MOMENTOS
      </p>

    </div>


    <div className="footer__bottom">

      <p>
        © 2026 VIVANCOFFEE.
        TODOS LOS DERECHOS RESERVADOS. 🤎
      </p>

      <p>
        HECHO CON CAFÉ ☕
      </p>

    </div>


  </div>

</footer>


{/* =====================================================
     CURSOR DE CAFÉ
====================================================== */}

<div
  className="coffee-cursor"
  aria-hidden="true"
>
  <img
    src="/RVIVANCOFFEE/assets/images/coffee-bean-cursor.png"
    alt=""
  />
</div>


{/* =====================================================
     JAVASCRIPT
====================================================== */}



  </>;
}

function usePageInteractions() {
  useEffect(() => {
    const categories = [...document.querySelectorAll(".menu__category")];
    const toggleCategory = (category) => {
      const willOpen = !category.classList.contains("is-open");
      categories.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".menu__category-button")?.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        category.classList.add("is-open");
        category.querySelector(".menu__category-button")?.setAttribute("aria-expanded", "true");
      }
    };
    const categoryHandlers = categories.map((category) => {
      const button = category.querySelector(".menu__category-button");
      const handler = () => toggleCategory(category);
      button?.addEventListener("click", handler);
      return [button, handler];
    });

    const menuButton = document.querySelector(".header__menu-button");
    const navigation = document.querySelector(".header__nav");
    const toggleMenu = (force) => {
      if (!menuButton || !navigation) return;
      const open = typeof force === "boolean" ? force : !navigation.classList.contains("is-open");
      navigation.classList.toggle("is-open", open);
      menuButton.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.style.overflow = open ? "hidden" : "";
    };
    const handleMenu = () => toggleMenu();
    menuButton?.addEventListener("click", handleMenu);
    const navLinks = [...document.querySelectorAll(".header__link")];
    const closeMenu = () => toggleMenu(false);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const downloadButton = document.querySelector("#menuDownload");
    const downloadMenu = () => {
      const link = document.createElement("a");
      link.href = "/RVIVANCOFFEE/menu/Menu_Vivancoffee.pdf";
      link.download = "Menu_Vivancoffee.pdf";
      link.click();
    };
    downloadButton?.addEventListener("click", downloadMenu);

    const cursor = document.querySelector(".coffee-cursor");
    let frame; let mouseX = 0; let mouseY = 0; let cursorX = 0; let cursorY = 0;
    const moveCursor = (event) => { mouseX = event.clientX; mouseY = event.clientY; cursor?.classList.add("is-visible"); };
    const animateCursor = () => { cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15; if (cursor) { cursor.style.left = `${cursorX}px`; cursor.style.top = `${cursorY}px`; } frame = requestAnimationFrame(animateCursor); };
    const showCursor = () => cursor?.classList.add("is-visible");
    const hideCursor = () => cursor?.classList.remove("is-visible");
    const pressCursor = () => cursor?.classList.add("is-clicked");
    const releaseCursor = () => cursor?.classList.remove("is-clicked");
    if (cursor) { document.addEventListener("mousemove", moveCursor); document.addEventListener("mouseenter", showCursor); document.addEventListener("mouseleave", hideCursor); document.addEventListener("mousedown", pressCursor); document.addEventListener("mouseup", releaseCursor); animateCursor(); }

    const escape = (event) => { if (event.key === "Escape") { categories.forEach((item) => { item.classList.remove("is-open"); item.querySelector(".menu__category-button")?.setAttribute("aria-expanded", "false"); }); toggleMenu(false); } };
    document.addEventListener("keydown", escape);
    return () => { categoryHandlers.forEach(([button, handler]) => button?.removeEventListener("click", handler)); menuButton?.removeEventListener("click", handleMenu); navLinks.forEach((link) => link.removeEventListener("click", closeMenu)); downloadButton?.removeEventListener("click", downloadMenu); document.removeEventListener("keydown", escape); document.removeEventListener("mousemove", moveCursor); document.removeEventListener("mouseenter", showCursor); document.removeEventListener("mouseleave", hideCursor); document.removeEventListener("mousedown", pressCursor); document.removeEventListener("mouseup", releaseCursor); cancelAnimationFrame(frame); document.body.style.overflow = ""; };
  }, []);
}
