import React from "react";
import "./PreviousMatches.css";

const PreviousMatchCard = ({ match }) => {
    return (
        <div className="previous-match-card">
            <h3>Match Result</h3>
            <p>
                {match.team1.name}: {match.team1.score} - {match.team1.outPlayers} (
                {match.team1.over})
            </p>
            <p>
                {match.team2.name}: {match.team2.score} - {match.team2.outPlayers} (
                {match.team2.over})
            </p>
            <p>Match Statement: {match.statement}</p>
        </div>
    );
};

const PreviousMatches = ({ matchResults }) => {
    return (
        <div className="previous-matches-container">
            <h2>Previous Matches</h2>
            <div className="previous-matches">
                {matchResults.map((match, index) => (
                    <PreviousMatchCard key={index} match={match} />
                ))}
            </div>
        </div>
    );
};

export default PreviousMatches;
