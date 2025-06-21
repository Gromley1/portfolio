import { useEffect, useRef } from 'react';
import styles from './about.module.scss';

export const About = () => {
    const contentRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const textToType = `I am a dedicated software engineer with a passion for building efficient, 
          scalable, and user-friendly applications. With extensive experience in front-end development, 
          I specialize in crafting custom UI solutions using modern frameworks like Angular and React. 
          My expertise spans greenfield projects where I've led teams in implementing pixel-perfect 
          designs, ensuring seamless user experiences across various devices.`;

        const element = contentRef.current;
        if (!element) return;

        let i = 0;
        element.innerHTML = '';

        const typingInterval = setInterval(() => {
            if (i < textToType.length) {
                const currentText = textToType.substring(0, i + 1);
                element.innerHTML = `${currentText}<span class="${styles.caret}">|</span>`;
                i++;
            } else {
                clearInterval(typingInterval);
                element.innerHTML = textToType;
            }
        }, 25);

        return () => {
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <section id="about" className={styles.about}>
            <h2 className={styles.about__header}>Hi, I'm Griffin Romley.</h2>
            <p ref={contentRef} className={styles.about__content} />
        </section>
    );
};
