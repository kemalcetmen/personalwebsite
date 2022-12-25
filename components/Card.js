import React from "react";
import styles from "../styles/Cards.module.scss";
import Image from 'next/image'

const Card = (props) => {
  const { text, url, modalOpening } = props;

  return (
    <div className={ styles.card }>
      <div className={ styles.content } onClick={ modalOpening }>
        <div className={ styles.images }>
          <Image
            src={ url }
            alt=""
            fill
          />
        </div>
        <div className={ styles.textframe }>
          <div className={ styles.texts }>
            { text }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;