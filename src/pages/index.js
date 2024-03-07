import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import picHeadshot from '../assets/images/DNewman_Headshot.jpg';
//import picFlower from '../assets/images/flower 2.jpg'; // budbranchcrop.jpg
import branchBuds from '../assets/images/budbranchcrop.jpeg';
import branch from '../assets/images/willow-branch-svgrepo-com-whiteoutline.svg'; //willow-branch-svgrepo-com-3  willow-branch-svgrepo-com-bw willow-branch-svgrepo-com-whiteoutline

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          {/* <span className="icon fa-envira" src={branch}></span> */}
          {/* <span className="icon"><img src={branch}></img></span> */}
          <span className="icon fa-leaf"></span>
        </div>
        <div className="bannerText">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
        </div>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={picHeadshot} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Dom Newman</h2>
            <p>
              I am a Licensed Mental Health Counselor looking to empower people
              to thrive as they face challenges and transitions in life. I take
              a supportive, empathic, and strengths-based approach and will
              partner with you as you work towards accomplishing your goals. As
              your counselor I am invested in your success and will provide you
              with the unwavering support and non-judgmental safe space you need
              to be comfortable in the therapeutic process. My therapeutic
              approach is informed by both my professional and personal
              experience.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={branchBuds} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Tempus adipiscing</h2>
            <p>
              Are you having trepidations about taking the next step? Never been
              to therapy before and not sure what to expect? That’s ok! I am
              happy to speak over the phone and answer any questions you may
              have.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              I offer virtual sessions and have flexibility in my schedule. I
              look forward to speaking with you!
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>


      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Vitae phasellus</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section> */}

    </section>
  </Layout>
);

export default IndexPage;
