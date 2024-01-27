import React from 'react';

import styles from './styles.module.scss';
import { SideBar } from '../../components/common/sideBar/sideBar';

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <SideBar /> 
            <div>Poov puroom</div> 
        </div>
    )
} 