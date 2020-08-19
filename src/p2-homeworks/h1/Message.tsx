import React from "react";
import {MessageType} from "./HW1";
import style from "./Message.module.css"

function Message(props: MessageType) {
    return (
        <div className={style.wrapper}>
            <div>
                <img src={props.avatar} alt="" className={style.photo}/>
            </div>
            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>

        </div>
    );
}

export default Message;
