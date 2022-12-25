import React, { useState } from 'react'
import Image from 'next/image'
import telegram from "../../../../public/social/telegram.svg"
import discord from "../../../../public/social/discord.svg"
import flightbot from "../../../../public/bots/flightbot.jpg"
import styles from "../../../../styles/InsideModal.module.scss";
import Link from 'next/link'

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
                    <Link href={ "https://t.me/flight_warning_bot" }>
                        <Image
                            src={ flightbot }
                            alt=""
                            width={ 80 }
                        />
                    </Link>
                }
                { !discordOpen
                    ?
                    <Image
                        // onClick={ () => { setDiscordOpen(true) } }
                        src={ discord }
                        alt=""
                        width={ 80 }
                        title="sorry there is no discord bot yet"
                    /> :
                    <Image
                        src={ telegram }
                        alt=""
                        width={ 80 }
                    />
                }
            </div>
        </div>
    )
}

export default Serverbots