import React from 'react';
import styles from './features.module.css'
import Title from "../title/index.jsx";
const Features = () => {
    return (
        <div className={styles.features}>
            <div className='container'>
                <div className={styles.inner}>
                    <div className={styles.leftSide}>
                    </div>
                    <div className={styles.rightSide}>
                        <Title text={'Features'} className={'title '} />
                        <h3 className={styles.subtitle}>Innovation-led Products</h3>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.</p>
                        <button className='btn btn-features'>Read more</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Features;