import React, { useState } from 'react'
import Modal from 'react-modal';
import Image from 'next/image'
import styles from "../../../../styles/InsideModal.module.scss";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link'

const ResWeb2 = () => {
    const photos = [[1, 1], [1, 2], [2, 3], [2, 4], [3, 5], [3, 6], [4, 7], [4, 8], [5, 9], [5, 10]]
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            border: 'none',
            padding: 'none',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
        },
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const [openNumber, setNumber] = useState(1);
    const modalOpener = (num) => {
        setIsOpen(true)
        setNumber(num)
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className={ styles.all }>
            <div className={ styles.modaltitle }>
                <Link href="https://rockpaperscissorss.vercel.app/">
                    <div className={ styles.link }>
                        RPC
                        <Image
                            onClick={ () => { } }
                            src={ `/link.svg` }
                            alt=""
                            height={ 25 }
                            width={ 25 }
                        />
                    </div>
                </Link>
            </div>
            <div className={ styles.inside }>
                <div className={ styles.webinside }>
                    { [1, 2, 3, 4, 5].map((number) =>
                        <div key={ number } className={ styles.photoline }>
                            <div className={ styles.webphoto }>
                                <Image
                                    onClick={ () => { modalOpener(number * 2 - 2) } }
                                    src={ `/webs/rpcweb${number}.jpg` }
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className={ styles.phonephoto }>
                                <Image
                                    onClick={ () => { modalOpener(number * 2 - 1) } }
                                    src={ `/webs/rpcphone${number}.jpg` }
                                    alt=""
                                    fill
                                />
                            </div>
                        </div>
                    ) }
                </div>
                <Modal
                    isOpen={ modalIsOpen }
                    onRequestClose={ closeModal }
                    ariaHideApp={ false }
                    style={ customStyles }
                    contentLabel="Modal"
                >
                    <div className={ styles.insidemodalframe }>
                        <Swiper
                            modules={ [Navigation, Pagination] }
                            spaceBetween={ 50 }
                            slidesPerView={ 1 }
                            navigation
                            initialSlide={ openNumber }
                        >
                            { photos.map((photo) =>
                                <SwiperSlide key={ photo[1] } >
                                    <div className={ styles.insideall }>

                                        <div className={ photo[1] % 2 == 1 ? styles.modalphotoweb : styles.modalphotophone }>
                                            <Image
                                                src={ `/webs/rpc${photo[1] % 2 == 1 ? "web" : "phone"}${photo[0]}.jpg` }
                                                alt=""
                                                fill
                                                quality={ 100 }
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ) }
                        </Swiper>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default ResWeb2
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
