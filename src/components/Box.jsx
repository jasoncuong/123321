import React from "react";

const Box = (props) => {
    return (
        <div className="box">
            <p className="title">{props.title}</p>
            <p className="text">{props.content}</p>
        </div>
    );
};

export default Box;
