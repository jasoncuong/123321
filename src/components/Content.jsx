import React from "react";
import "./Content.css";
import Box from "./Box";
import nodes from "../node";

const createBox = (value) => {
    return <Box key={value.key} title={value.title} content={value.content} />;
};

const Content = () => {
    return (
        <div className="container">
            {nodes.map(createBox)}
            {/* <Box title={nodes[0].title} content={nodes[0].content} />
            <Box title={nodes[1].title} content={nodes[1].content} />
            <Box title={nodes[2].title} content={nodes[2].content} /> */}
        </div>
    );
};

export default Content;
