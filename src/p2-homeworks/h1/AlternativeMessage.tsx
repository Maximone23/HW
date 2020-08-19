import React from "react";
import style from "./AlternativeMessage.module.css";
import {MessageType} from "./HW1";

function AlternativeMessage(props: MessageType) {
    return (
            <div className={style.content}>
                <div className={style.title}>
                    <img src={props.avatar} alt="" className={style.photo}/>
                    <div className={style.name}>{props.name}</div>
                    <span className={style.rank}>{props.rank}</span>
                </div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
    );
}

export default AlternativeMessage;
