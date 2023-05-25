import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1", }, [
        React.createElement("h1", {}, "this is best react course ")
        , React.createElement("h2", {}, "by Akshay bhaiya")]),
    React.createElement("div", { id: "child2", }, [
        React.createElement("h1", {}, "i am student of this course"),
        React.createElement("h2", {}, " my self krishna kumar from kanpur up")])]
)




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);