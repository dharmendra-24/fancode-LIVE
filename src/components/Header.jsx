import React, { useState, useEffect } from "react";

export const HeaderItems = ({ title, link, isWhite, isDropDown }) => {
  return (
    <div class="header-dynamic-nav-itemstyled__NavLink-sc-1jiybj0-0 itTQPF">
      <a href="/" target="_self">
        <div class="header-dynamic-nav-itemstyled__NavTitle-sc-1jiybj0-1 ckSNsf">
          <label
            class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-dynamic-nav-itemstyled__NavTitleLabel-sc-1jiybj0-2 dktLTK"
            aria-multiline="true"
            aria-rowcount="1"
            style={{
              fontSize: "1em",
              fontFamily: "Saira",
              fontWeight: "700",
              textAlign: "left",
              lineHeight: "20px",
              color: isWhite ? "#ffffff" : "#121212",
              letterSpacing: "0.1px",
            }}
          >
            {title}
          </label>
          {isDropDown && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="header-dynamic-nav-itemstyled__ChevronIcon-sc-1jiybj0-3 gdbeOu"
            >
              <path
                d="M6.704 9.293a.996.996 0 011.41 0l3.88 3.88 3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0l-4.59-4.59c-.38-.38-.38-1.02.01-1.41z"
                fill={isWhite ? "#ffffff" : "#121212"}
              ></path>
            </svg>
          )}
        </div>
      </a>
    </div>
  );
};

const Header = () => {
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarBackground("white");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      style={{ "background-color": navbarBackground }}
      class="headerstyled__Container-sc-76gbq0-0 bscsmO"
    >
      <div class="logocontainer">
        <a href="/">
          <picture>
            <source
              media="(min-width: 320px)"
              srcset="
                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvZmMtd2ViLWxvZ28vZmNfbG9nb193aGl0ZV9iZy5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudCIsIndpZHRoIjoxMzAsImhlaWdodCI6NDB9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9     1x,
                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvZmMtd2ViLWxvZ28vZmNfbG9nb193aGl0ZV9iZy5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudCIsIndpZHRoIjoyNjAsImhlaWdodCI6ODB9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9     2x,
                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvZmMtd2ViLWxvZ28vZmNfbG9nb193aGl0ZV9iZy5zdmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOiJ0cmFuc3BhcmVudCIsIndpZHRoIjozOTAsImhlaWdodCI6MTIwfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ== 3x
                "
            />
            <img
              loading="lazy"
              src="https://www.fancode.com/skillup-uploads/fc-web-logo/fc_logo_white_bg.svg"
              width="130"
              height="40"
              alt="Fancode logo"
              class="imagestyled__StyledImg-sc-rhrvi4-0"
            />
          </picture>
        </a>
      </div>
      <div class="headerstyled__HeaderNavListContainer-sc-76gbq0-6 kwoRwk">
        <div class="common-styles-comp__RowFlex-sc-1j0qvf0-1 header-nav-liststyled__NavList-sc-17d9ntc-0 eWrwwS bCCbpS">
          <HeaderItems
            title="HOME"
            link="/"
            isWhite={navbarBackground == "transparent"}
          />
          <HeaderItems
            title="SCHEDULE"
            link="/cricket/schedule/today"
            isWhite={navbarBackground == "transparent"}
          />
          <div class="header-dynamic-nav-itemstyled__NavLink-sc-1jiybj0-0 itTQSh">
            <HeaderItems
              title="CRICKET"
              link="/cricket"
              isWhite={navbarBackground == "transparent"}
              isDropDown={true}
            />
            <div class="header-sub-menustyled__HeaderSubMenuContainer-sc-jgg5fs-0 hUQRub">
              <div class="header-sub-menu-itemstyled__SubMenuItemContainer-sc-weliep-0 iIsdNo">
                <HeaderItems
                  title="Featured Tours"
                  link="/cricket/tour"
                  isWhite={navbarBackground == "transparent"}
                />

                <div class="header-sub-menu-l2styled__HeaderSubMenuContainer-sc-140b7le-0 laugKB">
                  <div class="header-sub-menu-items-l2styled__SubMenuItemContainer-sc-1e7ztkh-0 jTpJmg">
                    <a
                      // href="/cricket/tour/new-zealand-women-tour-of-south-africa-2023-16590975/today-matches"
                      target="_self"
                    >
                      <div class="header-sub-menu-items-l2styled__MenuItem-sc-1e7ztkh-1 fZIsJO">
                        <div class="header-sub-menu-items-l2styled__MenuItemLogoContainer-sc-1e7ztkh-3 SJcgL">
                          <picture>
                            <source
                              media="(min-width: 320px)"
                              srcset="
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9OZXctWmVhbGFuZC10b3VyLW9mLVNvdXRoLUFmcmljYS1Xb21lbnMtVDIwX1RvdXItTG9nby5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6MjQsImhlaWdodCI6MjR9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9 1x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9OZXctWmVhbGFuZC10b3VyLW9mLVNvdXRoLUFmcmljYS1Xb21lbnMtVDIwX1RvdXItTG9nby5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6NDgsImhlaWdodCI6NDh9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9 2x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9OZXctWmVhbGFuZC10b3VyLW9mLVNvdXRoLUFmcmljYS1Xb21lbnMtVDIwX1RvdXItTG9nby5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6NzIsImhlaWdodCI6NzJ9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9 3x
                                "
                            />
                            <img
                              loading="lazy"
                              src="https://fancode.com/skillup-uploads/prod-images/2023/10/New-Zealand-tour-of-South-Africa-Womens-T20_Tour-Logo.png"
                              alt="menu-item-logo"
                              height="24"
                              width="24"
                              class="imagestyled__StyledImg-sc-rhrvi4-0 header-sub-menu-items-l2styled__MenuItemLogo-sc-1e7ztkh-5 eMeno"
                            />
                          </picture>
                        </div>
                        <label
                          class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-sub-menu-items-l2styled__MenuItemLabel-sc-1e7ztkh-2 eGFtgH"
                          aria-multiline="true"
                          aria-rowcount="1"
                          style={{
                            fontSize: "0.875em",
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            textAlign: "left",
                            lineHeight: "20px",
                            color: "#121212",
                            letterSpacing: "0.1px",
                          }}
                        >
                          New Zealand Women tour of South Africa, 2023
                        </label>
                      </div>
                    </a>
                  </div>
                  <div class="header-sub-menu-items-l2styled__SubMenuItemContainer-sc-1e7ztkh-0 jTpJmg">
                    <a
                      // href="/cricket/tour/afghanistan-a-tour-of-oman-2023-16660773/today-matches"
                      target="_self"
                    >
                      <div class="header-sub-menu-items-l2styled__MenuItem-sc-1e7ztkh-1 fZIsJO">
                        <div class="header-sub-menu-items-l2styled__MenuItemLogoContainer-sc-1e7ztkh-3 SJcgL">
                          <picture>
                            <source
                              media="(min-width: 320px)"
                              srcset="
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9PbWFuLXZzLUFmZ2hhbmlzdGFuLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyNCwiaGVpZ2h0IjoyNH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9PbWFuLXZzLUFmZ2hhbmlzdGFuLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0OCwiaGVpZ2h0Ijo0OH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8xMC9PbWFuLXZzLUFmZ2hhbmlzdGFuLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo3MiwiaGVpZ2h0Ijo3Mn19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                                "
                            />
                            <img
                              loading="lazy"
                              src="https://fancode.com/skillup-uploads/prod-images/2023/10/Oman-vs-Afghanistan.png"
                              alt="menu-item-logo"
                              height="24"
                              width="24"
                              class="imagestyled__StyledImg-sc-rhrvi4-0 header-sub-menu-items-l2styled__MenuItemLogo-sc-1e7ztkh-5 eMeno"
                            />
                          </picture>
                        </div>
                        <label
                          class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-sub-menu-items-l2styled__MenuItemLabel-sc-1e7ztkh-2 eGFtgH"
                          aria-multiline="true"
                          aria-rowcount="1"
                          style={{
                            fontSize: "0.875em",
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            textAlign: "left",
                            lineHeight: "20px",
                            color: "#121212",
                            letterSpacing: "0.1px",
                          }}
                        >
                          Afghanistan A tour of Oman, 2023
                        </label>
                      </div>
                    </a>
                  </div>
                  <div class="header-sub-menu-items-l2styled__SubMenuItemContainer-sc-1e7ztkh-0 jTpJmg">
                    <a
                      // href="/cricket/tour/oman-d20-league-2023-24-16588625/today-matches"
                      target="_self"
                    >
                      <div class="header-sub-menu-items-l2styled__MenuItem-sc-1e7ztkh-1 fZIsJO">
                        <div class="header-sub-menu-items-l2styled__MenuItemLogoContainer-sc-1e7ztkh-3 SJcgL">
                          <picture>
                            <source
                              media="(min-width: 320px)"
                              srcset="
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wMS9PbWFuX0QyMF8yMDIzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyNCwiaGVpZ2h0IjoyNH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wMS9PbWFuX0QyMF8yMDIzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0OCwiaGVpZ2h0Ijo0OH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wMS9PbWFuX0QyMF8yMDIzLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo3MiwiaGVpZ2h0Ijo3Mn19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                                "
                            />
                            <img
                              loading="lazy"
                              src="https://fancode.com/skillup-uploads/prod-images/2023/01/Oman_D20_2023.png"
                              alt="menu-item-logo"
                              height="24"
                              width="24"
                              class="imagestyled__StyledImg-sc-rhrvi4-0 header-sub-menu-items-l2styled__MenuItemLogo-sc-1e7ztkh-5 eMeno"
                            />
                          </picture>
                        </div>
                        <label
                          class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-sub-menu-items-l2styled__MenuItemLabel-sc-1e7ztkh-2 eGFtgH"
                          aria-multiline="true"
                          aria-rowcount="1"
                          style={{
                            fontSize: "0.875em",
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            textAlign: "left",
                            lineHeight: "20px",
                            color: "#121212",
                            letterSpacing: "0.1px",
                          }}
                        >
                          Oman D20 League 2023-24
                        </label>
                      </div>
                    </a>
                  </div>
                  <div class="header-sub-menu-items-l2styled__SubMenuItemContainer-sc-1e7ztkh-0 jTpJmg">
                    <a
                      // href="/cricket/tour/european-cricket-championship-2023-16587216/today-matches"
                      target="_self"
                    >
                      <div class="header-sub-menu-items-l2styled__MenuItem-sc-1e7ztkh-1 fZIsJO">
                        <div class="header-sub-menu-items-l2styled__MenuItemLogoContainer-sc-1e7ztkh-3 SJcgL">
                          <picture>
                            <source
                              media="(min-width: 320px)"
                              srcset="
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wNy9FQ05fVG91ci1Mb2dvLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjoyNCwiaGVpZ2h0IjoyNH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 1x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wNy9FQ05fVG91ci1Mb2dvLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo0OCwiaGVpZ2h0Ijo0OH19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 2x,
                                  https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMy8wNy9FQ05fVG91ci1Mb2dvLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsIndpZHRoIjo3MiwiaGVpZ2h0Ijo3Mn19LCJvdXRwdXRGb3JtYXQiOiJ3ZWJwIn0= 3x
                                "
                            />
                            <img
                              loading="lazy"
                              src="https://fancode.com/skillup-uploads/prod-images/2023/07/ECN_Tour-Logo.png"
                              alt="menu-item-logo"
                              height="24"
                              width="24"
                              class="imagestyled__StyledImg-sc-rhrvi4-0 header-sub-menu-items-l2styled__MenuItemLogo-sc-1e7ztkh-5 eMeno"
                            />
                          </picture>
                        </div>
                        <label
                          class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-sub-menu-items-l2styled__MenuItemLabel-sc-1e7ztkh-2 eGFtgH"
                          aria-multiline="true"
                          aria-rowcount="1"
                          style={{
                            fontSize: "0.875em",
                            fontFamily: "Roboto",
                            fontWeight: "500",
                            textAlign: "left",
                            lineHeight: "20px",
                            color: "#121212",
                            letterSpacing: "0.1px",
                          }}
                        >
                          European Cricket Championship, 2023
                        </label>
                      </div>
                    </a>
                  </div>
                  <a
                    target="_self"
                    //  href="/cricket/tour"
                  >
                    <div class="header-see-all-linkstyled__SeeAllContainer-sc-pt0e0u-0 fuBAEB">
                      <label
                        class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS header-see-all-linkstyled__SeeAllLabel-sc-pt0e0u-1 iGKPFr"
                        aria-multiline="true"
                        aria-rowcount="1"
                        style={{
                          fontSize: "0.875em",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          textAlign: "left",
                          lineHeight: "20px",
                          color: "#121212",
                          letterSpacing: "0.1px",
                        }}
                      >
                        VIEW ALL TOURS
                      </label>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <HeaderItems
            title="FOOTBALL"
            link="/football"
            isWhite={navbarBackground == "transparent"}
            isDropDown={true}
          />
          <HeaderItems
            title="MORE SPORTS"
            link="/"
            isWhite={navbarBackground == "transparent"}
            isDropDown={true}
          />

          <HeaderItems
            title="SHOP"
            link="/shop"
            isWhite={navbarBackground == "transparent"}
          />
        </div>
      </div>
      <div class="common-styles-comp__RowFlex-sc-1j0qvf0-1 headerstyled__DownloadAppCTA-sc-76gbq0-2 eWrwwS dlUgpt">
        <label
          class="labelstyled__LabelView-sc-cnprxi-0 gRyWPS"
          aria-multiline="true"
          aria-rowcount="1"
          style={{
            fontSize: "0.75em",
            fontFamily: "Roboto",
            fontWeight: "500",
            textAlign: "left",
            lineHeight: "16px",
            color: "#b8beca",
            letterSpacing: "0.1px",
          }}
        >
          Download the app:
        </label>
        <div
          style={{ backgroundColor: "#ffffff1a" }}
          class="common-styles-comp__RowFlex-sc-1j0qvf0-1 headerstyled__DownLoadAppItemsContainer-sc-76gbq0-3 eWrwwS fOskzp"
        >
          <a
            target="_blank"
            //  href="https://fancode.onelink.me/tTJR/DWebAndroid"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.30036 9.5515L1.0766 18.3381C1.07691 18.3399 1.07753 18.3415 1.07782 18.3433C1.33003 19.2975 2.19579 20 3.22327 20C3.63401 20 4.01963 19.8882 4.35034 19.692L4.37661 19.6765L13.634 14.2993L9.30036 9.5515Z"
                fill="#EB3131"
              ></path>
              <path
                d="M17.6209 8.05558L17.613 8.05015L13.6163 5.7179L9.11353 9.75114L13.632 14.2988L17.6076 11.9898C18.3046 11.611 18.7777 10.8714 18.7777 10.0184C18.7777 9.17161 18.311 8.43559 17.6209 8.05558Z"
                fill="#F6B60B"
              ></path>
              <path
                d="M1.07542 1.66125C1.02598 1.84477 1 2.03699 1 2.2366V17.7634C1 17.9626 1.02568 18.1555 1.07574 18.3384L9.5834 9.77626L1.07542 1.66125Z"
                fill="#5778C5"
              ></path>
              <path
                d="M9.36125 10L13.6181 5.71627L4.37119 0.319593C4.03508 0.116951 3.64279 0 3.22303 0C2.19555 0 1.32862 0.703818 1.07636 1.65906C1.07605 1.65999 1.07605 1.66063 1.07605 1.66145L9.36125 10Z"
                fill="#3BAD49"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            //  href="https://fancode.onelink.me/tTJR/DWebiOS"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7322 10.5385C15.7092 7.98555 17.8226 6.74351 17.9192 6.68569C16.7223 4.94066 14.8672 4.70223 14.2153 4.68322C12.6572 4.51925 11.1458 5.61554 10.3521 5.61554C9.54259 5.61554 8.32036 4.69906 7.00307 4.72599C5.30795 4.75213 3.72213 5.73356 2.85239 7.25759C1.05746 10.3651 2.39613 14.9316 4.11581 17.4434C4.97605 18.6735 5.98124 20.0471 7.29695 19.9988C8.58413 19.9457 9.06495 19.1781 10.6183 19.1781C12.1574 19.1781 12.6089 19.9988 13.9507 19.9679C15.3322 19.9457 16.2019 18.7322 17.032 17.4909C18.0261 16.081 18.4254 14.6924 18.4412 14.6211C18.4087 14.61 15.7583 13.5985 15.7322 10.5385Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M13.1974 3.23896C13.8897 2.37317 14.3634 1.1953 14.2319 0C13.2298 0.0443584 11.9767 0.6931 11.2551 1.53987C10.6167 2.28604 10.0463 3.50907 10.1937 4.65922C11.3193 4.74318 12.475 4.09127 13.1974 3.23896Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        class="quick-loginstyled__Container-sc-1o55c8w-8 cCjJQt"
      >
        <div data-analytics='{"name":"LoginButtonClicked","params":{"pageName":"app-header"}}'>
          <div class="headerstyled__UserIcon-sc-76gbq0-5 gPEVJp">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 14.3049 3.86647 16.4075 5.29146 17.9997C6.94 16.1586 9.3347 15 12 15C14.6655 15 17.0604 16.1588 18.7083 18C20.1334 16.4077 21 14.3051 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5Z"
                fill={navbarBackground == "transparent" ? "#ffffff" : "#121212"}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
