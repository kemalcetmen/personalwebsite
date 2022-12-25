import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "../../../styles/Modal.module.scss";
import Rick from './inside/Rick';

const Websites3D = () => {
    return (
        <div className={ styles.modalframe }>
            <Swiper
                modules={ [Navigation, Pagination] }
                spaceBetween={ 50 }
                slidesPerView={ 1 }
                navigation
                pagination={ { clickable: false } }
            >
                <SwiperSlide>
                    <Rick />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Websites3D