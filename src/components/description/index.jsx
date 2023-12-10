import React from 'react';
import styles from './description.module.css'

import one from '../../assets/img/description/1.svg'
import two from '../../assets/img/description/2.svg'
import three from '../../assets/img/description/3.svg'
import four from '../../assets/img/description/4.svg'

const Description = () => {
    return (
        <div className={styles.description}>
                <div className={styles.inner}>
                        <p className={styles.text}>
                            "Generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic"
                        </p>
                    <div className={styles.brands}>
                        <div className={styles.item}>
                            <img src={one} alt=""/>
                        </div>
                        <div className={styles.item}>
                            <img src={two} alt=""/>
                        </div>
                        <div className={styles.item}>
                            <img src={three} alt=""/>
                        </div>
                        <div className={styles.item}>
                            <img src={four} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default Description;