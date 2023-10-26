import React from "react";
import Header from "../../components/Header";
import "./home.css";
import BannerArea from "../../components/BannerArea";
import WatchLives from "../../components/WatchLives";
import LiveScores from "../../components/LiveScores";
import WatcheTrendings from "../../components/WatcheTrendings";
import PopularLiveStreaming from "../../components/PopularLiveStreaming";
import Footer from "../../components/Footer";
import MatchCard from "../../components/matchcard";
import Parllel from "../../components/parllel";

const Home = () => {
  return (
    <div className="fc-web-app">
      <Header />
      <div className="common-styles-comp__RowFlex-sc-1j0qvf0-1 home-screen-viewdesktopstyled__DesktopContainer-sc-gjtz4e-1 eWrwwS koVFeI">
        <div className="home-screen-viewdesktopstyled__ContentContainer-sc-gjtz4e-0 kUuVqu">
          <BannerArea />
          {/* <MatchCard /> */}
          <Parllel />

          <WatchLives />

          {/* <LiveScores /> */}
          <WatcheTrendings />
          <PopularLiveStreaming />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
