import React from "react";
import MatchCard from "./matchcard";
import MatchCard2 from "./matchcard2";
import MatchCard3 from "./matchcard3";
import MatchCard4 from "./matchcard4";

import ReactDOM from 'react-dom';
import Carousel from './parllel.jsx';

const items = [
    <div key={1} className="div-1">
        <MatchCard />
    </div>,
    <div key={2} className="div-1">
        <MatchCard2 />
    </div>,
    <div key={3} className="div-1">
        <MatchCard3 />
    </div>,
    <div key={4} className="div-1">
        <MatchCard4 />
    </div>
];



ReactDOM.render(
    <Carousel items={items} />,
    document.getElementById('root')
);
