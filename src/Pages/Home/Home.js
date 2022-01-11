import "./home.css";
import Hero from "../../Components/Hero/Hero";
import QuizCardsContainer from "../../Components/QuizCardsContainer/QuizCardContainer";
import { tsParticles } from "tsparticles";

const Home = () => {
  tsParticles.load("tsparticles", {
    fpsLimit: 20,
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 15,
      },
      shape: {
        type: "square",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: 400,
        random: {
          enable: true,
          minimumValue: 200,
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        outModes: {
          default: "out",
          top: "destroy",
          bottom: "none",
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true,
      },
    },
    detectRetina: true,
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light",
        },
        options: {
          background: {
            color: "#f7f8ef",
          },
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#fa7921"],
            },
          },
        },
      },
    ],
    emitters: {
      direction: "top",
      position: {
        x: 50,
        y: 150,
      },
      rate: {
        delay: 1,
        quantity: 2,
      },
      size: {
        width: 100,
        height: 0,
      },
    },
  });
  /* .then((container) => {
      console.log(container);
    }) */
  return (
    <>
      <div className="home-container">
        <div id="tsparticles"></div>
        <Hero />
        <QuizCardsContainer />
      </div>
    </>
  );
};

export default Home;
