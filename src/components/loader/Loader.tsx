import React, { FC } from 'react';
import styles from './Loader.module.css';

const Loader:FC = () => {
    return (
        <div>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;