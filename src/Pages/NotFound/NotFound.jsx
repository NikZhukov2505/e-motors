import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css'
const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [navigate])
    return (
        <>
            <Helmet>
                <title>404 | Emotors.kg</title>
            </Helmet>
            <div className={styles.wrapper}>
                <h1>Oops! You seem to be lost.</h1>
                <Link to='/'>вжух и на Главную</Link>
            </div>
        </>
    );
};

export default NotFound;