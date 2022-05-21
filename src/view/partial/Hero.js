import React from 'react'
import './Hero.css'
import hero_guy_bottom from '../../assets/images/hero-guy-bottom.png'
export default function Hero() {
    return (
        <>
            <section className="hero is-primary is-halfheight zebra-bg">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title">
                            I am Elisée,
                        </p>
                        <p className="subtitle">
                            A passionate developper and teacher from Europe
                        </p>
                        <div className="button is-primary">Let's talk</div>
                    </div>
                </div>
                <div className="hero-bottom">
                    {/* <img src={hero_guy_bottom} /> */}
                    <img src={hero_guy_bottom} />
                </div>
            </section>

            <section>
                <div className="title">
                    Titre de section...
                </div>
                <p>
                    Paragraphe...
                </p>
            </section>
        </>
    );
}

