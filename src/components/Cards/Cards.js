import React from 'react';
import styles from  "./Cards.module.css";
import CountUp from 'react-countup';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className = {styles.container}>
                <div className = {styles.row}>
                        <h3>Infected</h3>
                        <p>
                            <CountUp start = {0} end = {confirmed.value} duration ={2.5} separator = ","/>
                        </p>
                        <h4>{new Date(lastUpdate).toDateString()}</h4>
                        <h4>Number of Active Cases</h4>
                </div>
                <div className = {styles.row}>
                        <h3>Reacovered</h3>
                        <p>
                            <CountUp start = {0} end = {recovered.value} duration ={2.5} separator = ","/>
                        </p>
                        <h4>{new Date(lastUpdate).toDateString()}</h4>
                        <h4>Number of Reacovered Cases</h4>
                </div>
                <div className = {styles.row}>
                        <h3>Deaths</h3>
                        <p>
                            <CountUp start = {0} end = {deaths.value} duration ={2.5} separator = ","/>
                        </p>
                        <h4>{new Date(lastUpdate).toDateString()}</h4>
                        <h4>Number of Deaths from COVID</h4>
                </div>
        </div>
    );
};

export default Cards;