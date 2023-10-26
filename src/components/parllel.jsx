import React, { useEffect, useState } from "react";
import "./CoinToss.css";
import MatchCard from "./matchcard";
import MatchCard2 from "./matchcard2";
import MatchCard3 from "./matchcard3";
import MatchCard4 from "./matchcard4";
import MatchCard5 from "./matchcard5";
import MatchCard6 from "./matchcard6";
import MatchCard7 from "./matchcard7";
import axios from "axios";
function Parllel() {
  const [matchData, setMatchData] = useState([]);

  const [loadingMatches, setLoadingMatches] = useState(true);

  const fetchMatchData = async () => {
    const data = await axios.get("https://cricket-api-lilac.vercel.app//api/cricket/matchs");
    console.log(data.data.data);
    if (data) {
      setMatchData(data.data.data);
      setLoadingMatches(false);
    }
    setLoadingMatches(false);
  };

  useEffect(() => {
    fetchMatchData();
  }, []);

  return (
    <div className="All " id="slider-container">
      {loadingMatches ? (
        <h1>Loading...</h1>
      ) : (
        matchData.map((match) => (
          //   <div className="div-1">
          <MatchCard match={match} />
          //   </div>
        ))
      )}
    </div>
  );
}
export default Parllel;
