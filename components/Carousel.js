import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";

const NextButton = ({ enabled, onClick }) => (
    <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        onClick={onClick}
        disabled={!enabled}
    >
        <svg className={styles.emblaButtonSvg} viewBox="0 0 238.003 238.003">
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
    </button>
);

const PrevButton = ({ enabled, onClick }) => (
    <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrevious}`}
        onClick={onClick}
        disabled={!enabled}
    >
        <svg className={styles.emblaButtonSvg} viewBox="0 0 238.003 238.003" transform="rotate(180,0,0)">
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
    </button>
);

const Carousel = ({ birds }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        skipSnaps: false
    });

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

    return (
        <div className={styles.emblaCarousel}>
            <div className={styles.emblaViewport} ref={viewportRef}>
                <div className={styles.slidesContainer}>
                    {Object.keys(birds).map((index) => {
                        const bird = birds[index];
                        return (
                                <div className={styles.imageContainer} key={index}>
                                    <div className={styles.innerImageContainer}>
                                        <img
                                            className={styles.slideImage}
                                            src={bird.srcSet}
                                            alt={bird.name}
                                        />
                                    </div>

                                    <h3 className={styles.imageTitle}>{bird.name}</h3>
                                    <p className={styles.imageText}>{bird.text}</p>
                                </div>
                        );
                    })}
                </div>
            </div>

            <PrevButton onClick={scrollPrev} enabled={true} />
            <NextButton onClick={scrollNext} enabled={true} />
        </div>
    );
};

export default Carousel;
