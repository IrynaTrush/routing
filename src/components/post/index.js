import React from "react";
import './style.css';



function post(props) {
    return (
       <div className="postWrapper">
                <div className="user">
                    <img src={props.photo} className="userImage" alt="easter"/>
                    <div className="content">
                        <div className="userInfo">
                        <div className="username">{props.name}</div>
                        <i className="fas fa-check-square"></i>
                        <div className="userlink">{props.nickname} </div>
                        <div className="userdate">{props.date}</div>
                        <div className="open">
                        <i className="fas fa-chevron-down"></i>
                        </div>
                        </div>
                        <div className="message">{props.content}</div>
                    </div>
                </div>
                <div className="ray">
                    <img src={props.image} className="rayImage" alt="another"/>
                </div>
                <div className="footer">
                    <div className="item"><i class="far fa-comment"></i><span>478</span></div>
                    <div className="item"><i class="fas fa-random"></i><span>156</span></div>
                    <div className="item"><i class="far fa-heart"></i><span>756</span></div>
                    <div className="item"><i class="fas fa-cloud-upload-alt"></i></div> 
                </div>
            </div>
        )
}

export default post;