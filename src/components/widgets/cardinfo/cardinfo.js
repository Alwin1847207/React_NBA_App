import React from "react";
import FontAwesome from 'react-fontawesome';
import styles from './cardinfo.css';

const CardInfo = (props) => {

    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team
        });

        if(data){
            return data.name
        }

    };

    return (
        <div className={styles.cardINfo}>
            <span className={styles.teamName}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={styles.date}>
                <FontAwesome name={"clock-0"}/>
                {props.date}
            </span>
        </div>
    )
};

export default CardInfo;