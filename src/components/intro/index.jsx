import React from 'react';
import styles from './intro.module.css'

const Intro  = () => {
    return (
        <div className='container'>
            <div className={styles.intro}>
                <div className={styles.leftSide}>
                    <p className='text text-intro'>Lorem ipsum dolor sit.</p>
                    <button className='btn btn-intro'>view bellie</button>
                </div>

                <div className={styles.rightSide}></div>
            </div>

        </div>
    );
};

export default Intro ;