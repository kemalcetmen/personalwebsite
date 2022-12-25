import React, { useEffect, useState, Suspense, useRef } from 'react'
import Image from 'next/image'
import styles from "../../../../styles/InsideModal.module.scss";
import { Canvas } from "@react-three/fiber";
import Ricktwerk from "../../../Rick.js"
import { OrbitControls } from '@react-three/drei'
import Link from 'next/link'

const Rick = () => {
    const [dancing, setDancing] = useState(false)
    useEffect(() => {
        return () => {
            setDancing(false)
        };
    }, []);

    return (
        <div className={ styles.all }>
            <div className={ styles.modaltitle }>
                <Link href="https://myrick.vercel.app/">
                    <div className={ styles.link }>
                        MYRICK
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
                <Canvas shadows camera={ { fov: 50 } }>
                    <ambientLight intensity={ 0.4 } />
                    <directionalLight intensity={ 0.7 } position={ [-2, 5, 2] } />
                    <Suspense fallback={ null }>
                        <Ricktwerk dancing={ dancing } />
                    </Suspense>
                    <OrbitControls makeDefault />
                </Canvas>
            </div>
            <div className={ styles.modalfooter }>
                <button className={ styles.dancebutton } onClick={ () => { setDancing((prev) => !prev) } }>
                    { dancing ? "Stop" : "Dance" }
                </button>
            </div>
        </div>
    )
}

export default Rick