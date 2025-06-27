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
            <div className={styles.about__container}>
                <div className={styles.about__content}>
                    <div className={styles.about__badge}>
                        <span className={styles.about__badge__icon}>👋</span>
                        <span>Available for opportunities</span>
                    </div>
                    
                    <h1 className={styles.about__title}>
                        Hi, I'm <span className={styles.about__title__highlight}>Griffin Romley</span>
                    </h1>
                    
                    <h2 className={styles.about__subtitle}>
                        Frontend Developer & UI/UX Enthusiast
                    </h2>
                    
                    <p ref={contentRef} className={styles.about__description} />
                    
                    <div className={styles.about__tech}>
                        <span className={styles.about__tech__label}>Tech Stack:</span>
                        <div className={styles.about__tech__list}>
                            <span className={styles.about__tech__item}>React</span>
                            <span className={styles.about__tech__item}>TypeScript</span>
                            <span className={styles.about__tech__item}>Angular</span>
                            <span className={styles.about__tech__item}>SCSS</span>
                            <span className={styles.about__tech__item}>Node.js</span>
                        </div>
                    </div>
                </div>
                
                <div className={styles.about__visual}>
                    <div className={styles.about__code}>
                        <div className={styles.about__code__header}>
                            <span className={styles.about__code__dot}></span>
                            <span className={styles.about__code__dot}></span>
                            <span className={styles.about__code__dot}></span>
                        </div>
                        <pre className={styles.about__code__content}>
                            <code>
{`const developer = {
  name: "Griffin Romley",
  role: "Frontend Developer",
  skills: ["React", "TypeScript", "Angular"],
  passion: "Building amazing UIs",
  available: true
};`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};
