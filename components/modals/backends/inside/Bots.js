import React, { useState } from 'react'
import Image from 'next/image'
import telegram from "../../../../public/social/telegram.svg"
import discord from "../../../../public/social/discord.svg"
import styles from "../../../../styles/InsideModal.module.scss";

const Serverbots = () => {
    const [telegramOpen, setTelegramOpen] = useState(false)
    const [discordOpen, setDiscordOpen] = useState(false)

    return (
        <div className={ styles.all }>
            <div className={ styles.modaltitle }>
                <div className={ styles.nolink }>
                    BOTS
                </div>
            </div>
            <div className={ styles.inside }>
                { !telegramOpen
                    ?
                    <Image
                        onClick={ () => { setTelegramOpen(true) } }
                        src={ telegram }
                        alt=""
                        width={ 80 }
                    /> :
                    <div className={ styles.botProjects }>
                        <Image
                            src={ discord }
                            alt=""
                            width={ 80 }
                        />
                    </div>
                }
                { !discordOpen
                    ?
                    <Image
                        onClick={ () => { setDiscordOpen(true) } }
                        src={ discord }
                        alt=""
                        width={ 80 }
                    /> :
                    <div className={ styles.botProjects }>
                        <Image
                            src={ telegram }
                            alt=""
                            width={ 80 }
                        />
                    </div>
                }
            </div>

        </div>
    )
}

export default Serverbots