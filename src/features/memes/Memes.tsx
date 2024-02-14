import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadMemes } from './memesAction';
import { useSelector } from 'react-redux';
import styles from './Memes.module.css'

const Memes:FC = () => {
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(loadMemes());
    }, [])

    const {memes} = useAppSelector(state => state.memes);

    return (
        <div>
            <h1>Memes</h1>
            {memes.map(el => (
                <div key={el.id} className={styles.container}>
                <h4>{el.name}</h4>
                <div className={styles.image}>
                <img src={el.url} width={el.width/3} height={el.height/3}/>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Memes;