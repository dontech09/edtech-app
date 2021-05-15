import React from "react";
import "./feature2.style.scss";
import Fade from "react-reveal/Fade";
import MyImage from "../lazyImage";
const Feature2 = () => {
  return (
    <div className="feature2">
      <div className="feature2__col2">
        <Fade left duration={1000}>
          <div className="">
            <MyImage
              src="/images/feature2.jpg"
              alt="Feature Section"
              className="feature2__img"
            />
          </div>
        </Fade>
      </div>
      <div className="feature2__col feature2__col1">
        <Fade left delay={0}>
          <h2 className="about__head feature2__head">
            Membership
            <br /> With Meaning
          </h2>
        </Fade>
        <Fade left delay={100}>
          <p>
            With so much to explore, real projects to create, and the support of
            fellow-creatives, Skillshare empowers you to accomplish real growth.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Feature2;
