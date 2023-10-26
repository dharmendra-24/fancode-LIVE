import React from "react";

const LiveScores = () => {
    return (
        <div className="live-score-segmentstyled__Container-sc-19marjr-3 dqYuKg">
            <div className="live-score-segmentstyled__SubContainer-sc-19marjr-4 fXKTbX">
                <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-segmentstyled__Header-sc-19marjr-0 eWrwwS hJMKNj">
                    <div className="live-score-segmentstyled__LabelContainer-sc-19marjr-1 gLhXHQ">
                        <label
                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                            aria-multiline="true"
                            aria-rowcount={1}
                            style={{
                                fontSize: "1.5em",
                                fontFamily: "Saira",
                                fontWeight: 700,
                                textAlign: "left",
                                lineHeight: "32px",
                                color: "#121212",
                                letterSpacing: "0.1px",
                            }}
                        >
                            <h2>Live Scores</h2>
                        </label>
                    </div>
                    <div className="live-score-segmentstyled__SeeAllContainer-sc-19marjr-2 fvqavT">
                        <a
                        // href="/schedule"
                        >
                            <label
                                className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                aria-multiline="true"
                                aria-rowcount={1}
                                style={{
                                    fontSize: "0.75em",
                                    fontFamily: "Saira",
                                    fontWeight: 600,
                                    textAlign: "left",
                                    lineHeight: "16px",
                                    color: "#ff5000",
                                    letterSpacing: "0.1px",
                                }}
                            >
                                SEE ALL
                            </label>
                        </a>
                    </div>
                </div>
                <div
                    style={{ height: "120px" }}
                    className="carousel-v2-styled__CarouselV2Container-sc-w3ale6-3 btdFpE"
                >
                    <button className="carousel-v2-styled__NextArrowContainer-sc-w3ale6-2 hmaKSL">
                        <div className="prev-arrowstyled__ArrowContainer-sc-111ax6r-0 kmOMze">
                            <svg
                                width={28}
                                height={28}
                                viewBox="0 0 24 24"
                                fill="#001240"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 6.71a.996.996 0 000 1.41L13.88 12 10 15.88a.996.996 0 101.41 1.41L16 12.7a.996.996 0 000-1.41L11.41 6.7c-.38-.38-1.02-.38-1.41.01z"
                                    fill="#001240"
                                />
                            </svg>
                        </div>
                    </button>
                    <div className="carousel-v2-styled__CarouselItemsContainer-sc-w3ale6-0 euYtvU">
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/icc-cricket-world-cup-2023/australia-vs-south-africa/live-match-info/77332"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
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
                                            </picture>
                                            <label
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
                                                Australia
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
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
                                            </picture>
                                            <label
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
                                                South Africa
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/icc-cricket-world-cup-2023/afghanistan-vs-india/live-match-info/77330"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Saira",
                                                fontWeight: 700,
                                                textAlign: "left",
                                                lineHeight: "14px",
                                                color: "#00994c",
                                                letterSpacing: "0.2px",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            COMPLETED
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BRkdAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BRkdAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1BRkdAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-AFG@2x.png"
                                                    alt="AFG-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
                                                className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-scorestyled__SquadShortName-sc-v80ryq-2 dHJFMD"
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
                                                AFG
                                            </label>
                                            <div className="live-score-match-scorestyled__SquadViewScoreContainer-sc-v80ryq-3 fBFSTa">
                                                <div className="live-score-match-scorestyled__LiveScoreWithOversContainer-sc-v80ryq-5 egKwNF">
                                                    <label
                                                        className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                                        aria-multiline="true"
                                                        aria-rowcount={1}
                                                        style={{
                                                            fontSize: "0.75em",
                                                            fontFamily: "Roboto",
                                                            fontWeight: 400,
                                                            textAlign: "left",
                                                            lineHeight: "16px",
                                                            color: "#747474",
                                                            letterSpacing: "0.2px",
                                                        }}
                                                    >
                                                        (50)
                                                    </label>
                                                    <label
                                                        className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                                        aria-multiline="true"
                                                        aria-rowcount={1}
                                                        style={{
                                                            fontSize: "0.875em",
                                                            fontFamily: "Roboto",
                                                            fontWeight: 500,
                                                            textAlign: "left",
                                                            lineHeight: "20px",
                                                            color: "#121212",
                                                            letterSpacing: "0.1px",
                                                        }}
                                                    >
                                                        272/8
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JTkRAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JTkRAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JTkRAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-IND@2x.png"
                                                    alt="IND-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
                                                className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-scorestyled__SquadShortName-sc-v80ryq-2 dHJFMD"
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
                                                IND
                                            </label>
                                            <div className="live-score-match-scorestyled__SquadViewScoreContainer-sc-v80ryq-3 fBFSTa">
                                                <div className="live-score-match-scorestyled__LiveScoreWithOversContainer-sc-v80ryq-5 egKwNF">
                                                    <label
                                                        className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                                        aria-multiline="true"
                                                        aria-rowcount={1}
                                                        style={{
                                                            fontSize: "0.75em",
                                                            fontFamily: "Roboto",
                                                            fontWeight: 400,
                                                            textAlign: "left",
                                                            lineHeight: "16px",
                                                            color: "#747474",
                                                            letterSpacing: "0.2px",
                                                        }}
                                                    >
                                                        (35)
                                                    </label>
                                                    <label
                                                        className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                                        aria-multiline="true"
                                                        aria-rowcount={1}
                                                        style={{
                                                            fontSize: "0.875em",
                                                            fontFamily: "Roboto",
                                                            fontWeight: 500,
                                                            textAlign: "left",
                                                            lineHeight: "20px",
                                                            color: "#121212",
                                                            letterSpacing: "0.1px",
                                                        }}
                                                    >
                                                        273/2
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/icc-cricket-world-cup-2023/new-zealand-vs-bangladesh/live-match-info/77334"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1OWkNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1OWkNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1OWkNAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-NZC@2x.png"
                                                    alt="NZ-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                New Zealand
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1CQU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1CQU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1CQU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-BAN@2x.png"
                                                    alt="BAN-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Bangladesh
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/west-indies-women-in-australia-2023/australia-women-vs-west-indies-women/live-match-info/83604"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
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
                                                    alt="AU-W-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Australia Women
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XSU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XSU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XSU5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-WIN@2x.png"
                                                    alt="WI-W-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                West Indies Women
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/australian-womens-national-cricket-league/victoria-women-vs-queensland-fire/live-match-info/82703"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
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
                                            <label
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
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
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
                                            <label
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
                                                Queensland Fire
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/australian-womens-national-cricket-league/south-australian-scorpions-vs-western-australia-women/live-match-info/82702"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TQUNPQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyMCwiaGVpZ2h0IjoyMH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TQUNPQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TQUNPQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo2MCwiaGVpZ2h0Ijo2MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-SACO@2x.png"
                                                    alt="SASC-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                South Australian Scorpions
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XQVVAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XQVVAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1XQVVAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-WAU@2x.png"
                                                    alt="WA-W-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Western Australia Women
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/acc-mens-u19-premier-cup-2023/singapore-under19-vs-maldives-under19/live-match-info/84596"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TSU5HQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyMCwiaGVpZ2h0IjoyMH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TSU5HQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1TSU5HQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo2MCwiaGVpZ2h0Ijo2MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-SING@2x.png"
                                                    alt="SIN-Y-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Singapore Under-19
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1NTERAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1NTERAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1NTERAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-MLD@2x.png"
                                                    alt="MAL-U19-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Maldives Under-19
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a
                            className="live-score-match-cardstyled__LiveScoreMatchCardFcLink-sc-1ogrqfm-1 eNfsnm"
                        // href="/cricket/matches/acc-mens-u19-premier-cup-2023/nepal-under19-vs-iran-under19/live-match-info/84595"
                        >
                            <div className="ripplestyled__RippleContainer-sc-ajq26v-0 doBmRX">
                                <div
                                    style={{ marginLeft: "10px", marginRight: "10px" }}
                                    className="live-score-match-cardstyled__LiveScoreMatchCardContainer-sc-1ogrqfm-0 gzymVk"
                                >
                                    <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 live-score-match-card-titlestyled__Container-sc-1ypw9q8-0 eWrwwS ikRpzP">
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__Sport-sc-1ypw9q8-3 MXgyY"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            Cricket
                                        </label>
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS live-score-match-card-titlestyled__DotDelimiter-sc-1ypw9q8-4 dttpx"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                letterSpacing: "0.2px",
                                            }}
                                        />
                                        <label
                                            className="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
                                            aria-multiline="true"
                                            aria-rowcount={1}
                                            style={{
                                                fontSize: "0.75em",
                                                fontFamily: "Roboto",
                                                fontWeight: 400,
                                                textAlign: "left",
                                                lineHeight: "16px",
                                                color: "#747474",
                                                WebkitLineClamp: 1,
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                letterSpacing: "0.2px",
                                            }}
                                        >
                                            <wbr />
                                        </label>
                                    </div>
                                    <div className="live-score-match-scorestyled__LiveScoreMatchSectionContainer-sc-v80ryq-4 llTwCg">
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9ORVAtQ1IxQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyMCwiaGVpZ2h0IjoyMH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9ORVAtQ1IxQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0MCwiaGVpZ2h0Ijo0MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9ORVAtQ1IxQDJ4LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo2MCwiaGVpZ2h0Ijo2MH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/NEP-CR1@2x.png"
                                                    alt="NP-Y-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Nepal Under-19
                                            </label>
                                        </div>
                                        <div className="live-score-match-scorestyled__SquadViewContainer-sc-v80ryq-0 bEwJP">
                                            <picture>
                                                <source
                                                    media="(min-width: 320px)"
                                                    srcSet="
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JUk5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjIwLCJoZWlnaHQiOjIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 1x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JUk5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQwLCJoZWlnaHQiOjQwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 2x,
                              https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1JUk5AMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjYwLCJoZWlnaHQiOjYwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                            "
                                                />
                                                <img
                                                    loading="lazy"
                                                    height={20}
                                                    width={20}
                                                    src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/FC-IRN@2x.png"
                                                    alt="IRI-U19-squad-image"
                                                    className="imagestyled__StyledImg-sc-rhrvi4-0 live-score-match-scorestyled__SquadFlag-sc-v80ryq-1 gWrsLz"
                                                />
                                            </picture>
                                            <label
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
                                                Iran Under-19
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveScores;

