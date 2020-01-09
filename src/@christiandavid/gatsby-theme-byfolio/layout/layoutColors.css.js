import { css } from "@emotion/core"
import lineSvg from "../../../images/line.svg"
import Hero from "../../../images/hero-2.jpg";

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #fff;
  }
  .e404 .data-section {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #fff;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .home.layout-wrapper .layout-inner {
    background: #0e0f11;
    background: url(${Hero}) center center fixed, linear-gradient(
      45deg,
      #6f22b9,
      #3a3d98
    );
    background-size: cover;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }


  ul[data-test="skills"]{
    width: 60% !Important;
  }
  .experience.layout-wrapper .layout-inner {
    background: #3a3d98;
    background: url(${lineSvg}) center center fixed, linear-gradient(
        45deg,
        #6f22b9,
        #3a3d98
      );
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }

  .skills-wrapper{
    width: 60% !important;
  }
div[data-test="slideshow"] + div{
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient( 45deg,#1e2021,#1e2021 ) ;
  color: #fff;
}

  .css-16svcdi-jobtitle h1, .css-16svcdi-jobtitle h3{
    color: #fff !important;
  }
  
// main div:nth-child(3){
//   background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient( 45deg,#1e2021,#1e2021 ) ;
// }

.tl-edges > div > .css-161pllf-section{
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient( 45deg, #fff, #fff ) !important;
  color: #000;
}

.aboutme > .page > div:nth-child(4) > .layout-inner{
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiP…AwLCAtNDgwLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) center center fixed,linear-gradient( 45deg,#00ff9f,#001eff ) !important;
}

// .css-a7re6p-aboutContent, .css-sxqkmw-contentText li{
//   color: #fff !important;
// }

.skill.layout-wrapper .layout-inner {
  color: #fff;
  background: #9d316e;
  background: url(${lineSvg}) center center fixed, linear-gradient(
      45deg,
      #9d316e,
      #de2d3e
    ) !important;
  background-size: cover;
}
`

export default styles