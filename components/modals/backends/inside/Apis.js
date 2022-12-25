import React from 'react'
import Image from 'next/image'
import telegram from "../../../../public/social/telegram.svg"
import styles from "../../../../styles/InsideModal.module.scss";

const Serverbots = () => {
    return (
        <div className={ styles.all }>
            <div className={ styles.modaltitle }>
                <div className={ styles.nolink }>
                    APIS
                </div>
            </div>
            <div className={ styles.inside }>
                <Image
                    onClick={ () => { } }
                    src={ telegram }
                    alt=""
                    width={ 80 }
                />
            </div>
        </div>
    )
}

export default Serverbots