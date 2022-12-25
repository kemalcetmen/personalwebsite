import { useState } from 'react'
import Card from "./Card";
import styles from "../styles/Cards.module.scss";
import Modal from '../components/Modal'
import BackendJobs from './modals/backends'
import Websites3D from './modals/models'
import Responsive from './modals/websites'

const Cards = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState();

  const cards = [
    { text: "WEBSITES", url: "/cards/responsive2.svg", contents: <Responsive /> },
    { text: "3D MODELS", url: "/cards/three.svg", contents: <Websites3D /> },
    { text: "BACKEND JOBS", url: "/cards/backend.svg", contents: <BackendJobs /> },
  ];
  const modalOpening = (contents) => {
    setContents(contents)
    setIsOpen(true)
  }
  return (
    <main className={ styles.cards }>
      { !modalIsOpen && cards.map((card, i) => (
        <Card
          key={ i }
          text={ card.text }
          url={ card.url }
          modalOpening={ () => modalOpening(card.contents) }
        />
      )) }
      <Modal
        modalIsOpen={ modalIsOpen }
        setIsOpen={ setIsOpen }
        contents={ contents }
      />
    </main>
  );
};

export default Cards;