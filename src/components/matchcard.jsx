import React, { useEffect, useState } from "react";
import "./CoinToss.css";
const CardItems = ({ match }) => {
  return (
    <li className="cb-view-all-ga cb-match-card cb-bg-white">
      <a

        title="Sri Lanka v Australia - 14th Match"
        //  href="https://www.cricbuzz.com/live-cricket-scores/75479/Team 2-vs-Team 1-14th-match-icc-cricket-world-cup-2023"
        target="_self"
      >
        <div className="cb-mtch-crd-hdr cb-font-10">
          <div
            title="14th Match • ICC Cricket World Cup 2023"
            className="cb-col-90 cb-color-light-sec cb-ovr-flo"
          >
            {match.date} {match.tournamentOrganisingBody}
          </div>
          <div className="cb-card-match-format text-center text-white cb-mtch-frmt-bg-odi">
            ODI
          </div>
        </div>
        <div>
          <div className="cb-hmscg-bwl-txt">
            <div className="cb-hmscg-tm-bat-scr cb-font-14">
              <div className="cb-col-50 cb-ovr-flo cb-hmscg-tm-name">
                <picture>
                  <source
                    media="(min-width: 200px)"
                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1RVUZAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1RVUZAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1RVUZAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                  />
                  <img
                    loading="lazy"
                    height={20}
                    width={20}
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-QUF@2x.png"
                    alt="QLF-squad-image"
                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                  />
                </picture>
                {/* <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP"> */}
                {/* <picture>
                                        <source
                                            media="(min-width: 320px)"
                                            srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                        />
                                        <img
                                            loading="lazy"
                                            height={20}
                                            width={20}
                                            src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-VCT@2x.png"
                                            alt="VCTW-squad-image"
                                            className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                        />
                                    </picture> */}
                {/* <label
                                        className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-scorestyled__SquadShortName-sc-v80ryq-2 hJokYi"
                                        aria-multiline="true"
                                        aria-rowcount={1}
                                        style={{
                                            fontSize: "0.875em",
                                            fontFamily: "Roboto",
                                            fontWeight: 500,
                                            textAlign: "left",
                                            lineHeight: "20px",
                                            color: "#121212",
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            letterSpacing: "0.1px",
                                        }}
                                    >
                                        Victoria Women
                                    </label> */}
                {/* </div> */}
                {/* <picture>
                                    <source
                                        media="(min-width: 320px)"
                                        srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1SU0FAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1SU0FAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1SU0FAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                    />
                                    <img
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                        src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-RSA@2x.png"
                                        alt="SA-squad-image"
                                        className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                    />
                                </picture> */}
                <span>{match.tossWinner}</span>
                <span title="Sri Lanka" className="text-normal">
                  {match.team1.name}
                </span>
              </div>
              <div className="cb-col-50 cb-ovr-flo">
                {match.team1.score}-
                {match.team1.outPlayers && match.team1.outPlayers}(
                {match.team1.over})
              </div>
            </div>
          </div>
          <div className="cb-hmscg-bat-txt">
            <div className="cb-hmscg-tm-bwl-scr cb-font-14">
              <div className="cb-col-50 cb-ovr-flo cb-hmscg-tm-name">
                {/* <div className="cb-hmscg-tm-nm-img">
                                    <img
                                        width="18px"
                                        height="12px"
                                        src={match.team2.url}
                                        className="cb-img-rad-0"
                                    />
                                </div> */}
                {/* <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP"> */}
                <picture>
                  <source
                    media="(min-width: 320px)"
                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1WQ1RAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                  />
                  <img
                    loading="lazy"
                    height={20}
                    width={20}
                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-VCT@2x.png"
                    alt="VCTW-squad-image"
                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                  />
                </picture>
                {/* <label
                                                className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-scorestyled__SquadShortName-sc-v80ryq-2 hJokYi"
                                                aria-multiline="true"
                                                aria-rowcount={1}
                                                style={{
                                                    fontSize: "0.875em",
                                                    fontFamily: "Roboto",
                                                    fontWeight: 500,
                                                    textAlign: "left",
                                                    lineHeight: "20px",
                                                    color: "#121212",
                                                    WebkitLineClamp: 1,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    display: "-webkit-box",
                                                    letterSpacing: "0.1px",
                                                }}
                                            >
                                                Victoria Women
                                            </label> */}
                {/* </div> */}
                {/* <picture>
                                    <source
                                        media="(min-width: 320px)"
                                        srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BVVNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BVVNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BVVNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                    />
                                    <img
                                        loading="lazy"
                                        height={20}
                                        width={20}
                                        src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-AUS@2x.png"
                                        alt="AUS-squad-image"
                                        className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                    />
                                </picture> */}
                <span title="Australia" className="text-normal">
                  {match.team2.name}
                </span>
              </div>
              <div
                className="cb-col-50 cb-ovr-flo"
                style={{ display: "inline-block" }}
              >
                {match.team2.score}-
                {match.team2.outPlayers && match.team2.outPlayers}(
                {match.team2.over})
              </div>
            </div>
          </div>
          <div
            title="Australia won by 5 wkts"
            className="cb-mtch-crd-state cb-ovr-flo cb-font-12 cb-text-complete"
          >
            {match.statement}
          </div>
        </div>
      </a>
    </li>
  );
};

const CoinToss = ({ teams, onTossResult }) => {
  const [tossing, setTossing] = useState(false);

  const tossCoin = () => {
    if (!tossing) {
      setTossing(true);

      // Randomize the rotation
      const rotation = Math.floor(Math.random() * 360) + 720; // Rotate at least 2 full spins

      // Apply the rotation and reset after the animation
      const coin = document.getElementById("coin");
      coin.style.transition = "transform 0.6s ease";
      coin.style.transform = `rotate(${rotation}deg)`;

      const randomIndex = Math.floor(Math.random() * 2);
      const selectedTeam = teams[randomIndex];

      setTimeout(() => {
        coin.style.transition = "none";
        coin.style.transform = "rotate(0deg)";
        setTossing(false);
        onTossResult(selectedTeam);
      }, 700);
    }
  };

  return (
    <div className="coin-container">
      <div id="coin" className={`coin ${tossing ? "tossing" : ""}`}></div>
      <button className="toss-button" onClick={tossCoin} disabled={tossing}>
        {tossing ? "Starting..." : "Start Match"}
      </button>
    </div>
  );
};

const MatchCard = ({ match }) => {
  const [liveMatchDetails, setLiveMatchDetails] = useState([match]);

  console.log("liveMatchDetails : ", liveMatchDetails);

  const data = [
    {
      date: "14th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "Team 2",
        score: 209,
        over: 43.3,
        outPlayers: 0,
        url: "../../assets/images/sri-lanka.jpg", // Replace with actual URL
      },
      team2: {
        name: "Team 1",
        score: 209,
        over: 35.3,
        outPlayers: 5,
        url: "./australia.jpg", // Replace with actual URL
      },
      statement: "Australia won by 5 wkts",
    },
    {
      date: "15th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "South Africa",
        score: 284,
        over: 49.5,
        outPlayers: 0,
        url: "./south-africa.jpg",
      },
      team2: {
        name: "Netherlands",
        score: 215,
        over: 40.3,
        outPlayers: 10,
        url: "./netherlands.jpg", // Replace with actual URL
      },
      statement: "Afghanistan won by 69 runs",
    },
    {
      date: "16th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "India",
        score: 301,
        over: 50.0,
        outPlayers: 5,
        url: "./india.jpg", // Replace with actual URL
      },
      team2: {
        name: "England",
        score: 290,
        over: 49.2,
        outPlayers: 3,
        url: "./england.jpg", // Replace with actual URL
      },
      statement: "India won by 11 runs",
    },
    {
      date: "17th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "Pakistan",
        score: 268,
        over: 48.5,
        outPlayers: null,
        url: "./pakistan.jpg", // Replace with actual URL
      },
      team2: {
        name: "West Indies",
        score: 246,
        over: 50.0,
        outPlayers: 9,
        url: "./west-indies.jpg", // Replace with actual URL
      },
      statement: "Pakistan won by 22 runs",
    },
    // Add more matches using the same structure
    {
      date: "18th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "New Zealand",
        score: 290,
        over: 49.5,
        outPlayers: null,
        url: "./new-zealand.jpg", // Replace with actual URL
      },
      team2: {
        name: "Bangladesh",
        score: 275,
        over: 49.0,
        outPlayers: 8,
        url: "./bangladesh.jpg", // Replace with actual URL
      },
      statement: "New Zealand won by 15 runs",
    },
    {
      date: "19th March",
      tournamentOrganisingBody: "ICC Cricket World Cup 2023",
      team1: {
        name: "Sri Lanka",
        score: 210,
        over: 45.0,
        outPlayers: null,
        url: "./sri-lanka.jpg", // Replace with actual URL
      },
      team2: {
        name: "Pakistan",
        score: 215,
        over: 43.0,
        outPlayers: 5,
        url: "./pakistan.jpg", // Replace with actual URL
      },
      statement: "Pakistan won by 5 wickets",
    },
  ];

  //   useEffect(() => {

  //     setLiveMatchDetails([match]);
  //   }, []);

  const [team1, setTeam1] = useState(match.team1); // Replace with actual team names
  if (match.tossWinner == team1.name) {
    setTeam1(match.tossWinner);
  }

  const [currentOverA, setCurrentOverA] = useState(0);
  const [currentOverB, setCurrentOverB] = useState(0);
  const [currentBall, setCurrentBall] = useState(0);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [outPlayers1, setOutPlayers1] = useState(0);
  const [outPlayers2, setOutPlayers2] = useState(0);
  const [isMatchOverA, setIsMatchOverA] = useState(false);
  const [isMatchOverB, setIsMatchOverB] = useState(false);

  useEffect(() => {
    const ballUpdateInterval = setInterval(() => {
      if ((!isMatchOverB || !isMatchOverA) && team1 != null) {
        const randomScore = Math.floor(Math.random() * 7); // Random score between 0-6

        if (!isMatchOverA) {
          setTeam1Score((prevScore) => prevScore + randomScore);
          if (randomScore == 6) {
            setOutPlayers1((e) => e + 1);
            if (outPlayers1 >= 9 || currentOverA >= 20) {
              setIsMatchOverA(true);
            }
          }
          if (currentBall === 6) {
            setCurrentOverA((prevOver) => prevOver + 1);
            setCurrentBall(1);
          } else {
            setCurrentBall((prevBall) => prevBall + 1);
          }
        } else {
          setTeam2Score((prevScore) => prevScore + randomScore);
          if (team2Score > team1Score) {
            setIsMatchOverB(true);
          }
          if (randomScore == 0) {
            setOutPlayers2((e) => e + 1);
            if (outPlayers2 >= 9 || currentOverB >= 20) {
              setIsMatchOverB(true);
            }
          }
          if (currentBall === 6) {
            setCurrentOverB((prevOver) => prevOver + 1);
            setCurrentBall(1);
          } else {
            setCurrentBall((prevBall) => prevBall + 1);
          }
        }

        // if (currentOver >= 40) {
        //   setIsMatchOver(true);
        // }
      }
    }, 30000); // Update every 30 seconds

    // Clear interval when the component is unmounted or match is over
    return () => clearInterval(ballUpdateInterval);
  }, [
    currentOverA,
    currentOverB,
    currentBall,
    isMatchOverA,
    isMatchOverB,
    team1,
  ]);

  const handleTossResult = (selectedTeam) => {
    // Handle the toss result here if needed
    console.log("Toss result:", selectedTeam);
    setTeam1(selectedTeam.name);
  };

  useEffect(() => {
    setLiveMatchDetails([
      {
        date: "14th March",
        tournamentOrganisingBody: "ICC Cricket World Cup 2023",
        team1: {
          name: liveMatchDetails[0].team2.name,
          score: team1Score,
          outPlayers: outPlayers1,
          over: currentOverA + "." + (!isMatchOverA ? currentBall : 0),
          url: "./sri-lanka.jpg", // Replace with actual URL
        },
        team2: {
          name: liveMatchDetails[0].team2.name,
          score: team2Score,
          outPlayers: outPlayers2,
          over: currentOverB + "." + (!isMatchOverA ? 0 : currentBall),
          url: "./australia.jpg", // Replace with actual URL
        },
        statement:
          isMatchOverA && isMatchOverB
            ? liveMatchDetails.map((match) => (
              <div>
                {match.team1.score > match.team2.score ? (
                  <div>

                    {match.team1.name} won the match by{" "}
                    {match.team1.score - match.team2.score} runs
                  </div>
                ) : match.team1.score === match.team2.score ? (
                  <div>Match tied </div>
                ) : (
                  <div>
                    {match.team2.name} won the match by{" "}
                    {10 - match.team2.outPlayers} wickets
                  </div>
                )}
              </div>
            ))
            : "In Progress",
      },
    ]); //team2Score < team1Score ? "Team 1 wins"
  }, [team1Score, team2Score, isMatchOverA, isMatchOverB]);
  return (
    <div className="home_matches" style={{ marginTop: "5px" }}>
      <div className="cb-col cb-col-100">
        <div
          id="match_menu_container"
          className="cb-col cb-col-100 html-refresh ng-isolate-scope"
          url="/api/html/homepage-scag"
          timeout={45000}
        >
          <div className="cb-col cb-col-100 cb-mtch-crd-rt ng-scope">
            {team1 == null && (
              <div>
                <CoinToss
                  teams={
                    liveMatchDetails && [
                      liveMatchDetails[0].team1,
                      liveMatchDetails[0].team2,
                    ]
                  }
                  onTossResult={handleTossResult}
                />
              </div>
            )}
            <div
              className="videos-list-carousal hgt-145 ng-isolate-scope"
              total={6}
              minLength={3}
              pagename="homepage"
            >
              {/* Use flexbox and overflow properties for horizontal scrolling */}
              <ul
                className="cb-col cb-col-100 videos-carousal-wrapper cb-mtch-crd-rt-itm"
              // style={{
              //     display: "flex",
              //     overflowX: "scroll",
              //     padding: "0",
              //     overflowY: "hidden",
              //     overflowX: "auto",
              //     marginBottom: "20px",
              // }}
              >
                {liveMatchDetails &&
                  liveMatchDetails.map((match) => (
                    <CardItems key={match.date} match={match} />
                  ))}
              </ul>
              {/* {
                                isMatchOverA && isMatchOverB ? liveMatchDetails && liveMatchDetails.map(
                                    (match) => (
                                        <div>
                                            {
                                                match.team1.score > match.team2.score ?
                                                    (
                                                        <div>
                                                            {match.team1.name} won the match by{" "}
                                                            {match.team1.score - match.team2.score} runs
                                                        </div>
                                                    )
                                                    : match.team1.score === match.team2.score ? (
                                                        <div>Match tied </div>
                                                    )
                                                        : (
                                                            <div>
                                                                {match.team2.name} won the match by{" "}
                                                                {10 - match.team2.outPlayers} wickets
                                                            </div>
                                                        )
                                            }
                                        </div>

                                    )
                                )
                                } */}
              <div className="cb-vid-slider-arrs">
                {/* <div className="cb-vid-slider-arr cb-vid-slider-arr-prev cb-hmpg-slider-arr"> */}
                {/* ... (rest of the component remains unchanged)
                                </div>
                                <div
                                    className="cb-vid-slider-arr cb-vid-slider-arr-next cb-view-all-ga cb-hmpg-slider-arr"
                                    gtm-title="View All"
                                    gtm-video-label="homepage_undefined"
                                >
                                    ... (rest of the component remains unchanged)
                                </div> */}
              </div>
            </div>
          </div>
          <style
            className="ng-scope"
            dangerouslySetInnerHTML={{
              __html:
                "\n                .hgt-90 {\n                  height: 100px;\n                }\n                .hgt-110 {\n                  height: 110px;\n                }\n              ",
            }}
          />
        </div>
        <div
          id="menu_branding"
          className="ad-unit"
          style={{ float: "right" }}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .hgt-90 {\n              height: 90px;\n            }\n            .hgt-110 {\n              height: 110px;\n            }\n          ",
        }}
      />
    </div>
  );
};

export default MatchCard;
