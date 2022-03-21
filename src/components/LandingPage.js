import React from "react";
import "./LandingPage.css";
import book from "./assets/b-1@3x.png";
import book2 from "./assets/b-1.png";
import person1 from "./assets/oval.png";
import one from "./assets/1.jpeg";
import layout11 from "./assets/layout-11.png";
import layers3 from "./assets/layers-3.png";
import responsive from "./assets/responsive.png";
import path from "./assets/path.png";
import darika from "./assets/Darika(1).png";
import elsie from "./assets/ELSIE(1).png";
import trash from "./assets/TRASHAE(3).png";
import JW from "./assets/ovala(cs).png";
import TR from "./assets/tail-right@2x.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="LP">
        <h2 className="Logo" alt="Logo">
          Omega
        </h2>
        <nav>
          <ul className="nav-links">
            <li>
              <Link>
                <select className="DEM" name="Demo" id="Demo">
                  <option value="Demo1">demo1</option>
                  <option value="Demo2">demo2</option>
                  <option value="Demo3">demo3</option>
                </select>
              </Link>
            </li>
            <li>
              <li>Pages</li>
            </li>
            <li>
              <Link>Support</Link>
            </li>
          </ul>
        </nav>
        <Link>
          <button className="GTB">Get this Book</button>
        </Link>
      </div>
      <div className="box-1">
        <div>
          <img className="book" src={book} alt="book" />
          
        </div>
        <div className="book-info">
          <h1>
            Solve your daily life problems in 1 minute.
          </h1>
          <div className="list1">
            <ul className="benefits">
              <li>12 chapters with detail Illustrations</li>
              <li>
                Learn from the experts with 24 years of experience
              </li>
              <li>
                Audio version is included with the purchase
              </li>
            </ul>
          </div>
          <div>
            <Link>
              <button className="GTB29">
                <span className="TWENIN">Get this Book- Starts from $29</span>
              </button>
            </Link>
          </div>
          <div className="CHAP">
            Interested in a free chapter.<Link>Get it now</Link>
          </div>
        </div>
      </div>
        <div className="feedback">
          <img className="person1" src={person1} alt="person" />
          <div className="comment">
            <div className="desc1">
              "OMG! I cannot believe that I got a landing page after getting
              Omega. It was super easy to edit and publish."
            </div>
            <div className="Jonathan-Taylor">Jonathan Taylor</div>
          </div>
        </div>

        
        <div className="Chapters">
          <h2>Chapters we've covered</h2>
          <p>
            Create custom Landing pages with Omega that converts more visitor than
            any websites
          </p>
        </div>
      <div className="BG">
        <div className="BG-child">
        <div className="one">
          <img src={one} alt="one" />
        </div>
        <div className="wrapper">
          <div className="Chapter-01">Chapter 1</div>
            <h2>What is Problem Solving?</h2>
            <p>
              Create custom landing pages with omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build a
              page without coding
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        
          <div className="f1">
            <img src={layout11} alt="yot1" />
            <h3>Solve daily problems</h3>
            <p>
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </p>
          </div>

          <div className="f1">
            <img  src={layers3} alt="yot2" />
            <h3>
              Key Notes On Each Chapter
            </h3>
            <p>
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </p>
          </div>
          <div className="f1">
            <img  src={responsive} alt="yot3" />
            <h3>Audio Book Available</h3>
            <p>
              With lots of unique blocks you can easily,build a page without
              coding. Build your next landing page quickly
            </p>
          </div>
        
      </div>
      
        <div className="opportunities">
          <h2>Things You'll Learn</h2>
          <p>
            Create custom landing pages with omega that converts <br/> more visitors
            than any website. 
          </p>
        </div>
        <div className="cards-container">
          <div className="parent">
                <div className="card">
                
                <ul>
                  <li><strong>How to improve yourself with small tasks.</strong></li>
                  
                </ul>
                </div>

                <div className="card">
                
                    <ul>
                      <li><strong>How to utilize your time while working hard.</strong></li>
                      
                    </ul>
                </div>

                <div className="card">
                
                    <ul>
                      <li><strong>How to thing creatively.</strong></li>
                      
                    </ul>
                </div>
          </div>

          <div className="parent"> 
            
          <div className="card">
          
          <ul>
            <li><strong>Solving your problem without hurting yourself.</strong></li>
            
          </ul>
          </div>

          <div className="card">
          
            <ul>
              <li><strong>Solving your problem without hurting yourself.</strong></li>
              
            </ul>
          </div>

          <div className="card">
          
              <ul>
                <li><strong>Making money smartely.</strong></li>
                
              </ul>
          </div>
          



        </div>

        <div  className="parent">
        
          <div className="card">
          
              <ul>
                <li><strong>Understanding people 101.</strong></li>
                
              </ul>
          </div>
        
          <div className="card">
          
              <ul>
                <li><strong>10 secrets to solve any problem easily.</strong></li>
                
              </ul> 
          </div>

          <div className="card">
          
              <ul>
                <li><strong>Creating valuable goal for next 5 years.</strong></li>
                
              </ul>
          </div>

        </div>
          
  </div>
        <div className="rectangle-1">
          <div>
            <img className="b1" src={book2} alt="book1" />
          </div>
          <div className="p1">
              <h3> Get a free chapter of this book</h3>
              <p>
                Create custom landing pages with Omega that converts more visitors
                than any website.
              </p>
          
          </div>
          <div className="button">
            <Link className="Get-a-free-chapter">Get a free chapter</Link>
          </div>
        </div>
        <div className="data-container">
          <div className="data">50K+
            <p>
              People are already reading this book and improving!
            </p>
          </div>
          <div className="data">96%
            <p>
              Satisfaction rate comes from our awesome customers.
            </p>
          </div>
          <div className="data">4.9/5.0
            <p>
              Average customer ratings we have got from Amazon users.
            </p>
          </div>
        </div>
        
        <div className="reviews">
          <h2>Reviews from readers</h2>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website.
          </p>
        </div>
        <div className="readers-container">
          <div className="readers">
            <div className="readers-content">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              “You made it so simple. My new site is so much faster and easier
              to work with than my old site. I just choose the page, make the
              change and click save.”
            </div>
            <div className="reader-name">
              <img src={darika} alt="darika" />
              <p>Darika Samak <span>From Amazon.com</span></p>
            </div>
          </div>
          
          <div className="readers">
            <div className="readers-content">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              “Simply the best. Better than all the rest. I’d recommend this
              product to beginners and advanced users.”
            </div>
            <div className="reader-name">
              <img src={elsie} alt="elsie" />
              <p>Elsie Curtis <span>From Amazon.com</span></p>
            </div>
          </div>

          <div className="readers">
            <div className="readers-content">
              <div>
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
                <img className="path" src={path} alt="star" />
              </div>
              “Must have book for students, who want to be Product Designer, UX
              Designer, or Interaction Designer.”
            </div>
            <div className="reader-name">
              <img src={trash} alt="trash" />
              <p>Trashae Hubbard <span>From Amazon.com</span></p>
            </div>
          </div>
         
        </div>
        <div className="link">
          <Link>Check all 3,583 reviews on Amazon.com</Link>
        </div>
        <div className="About-the-author">
          <h2>About the Author</h2>
          <div className="author-info">
            <img className="JW" src={JW} alt="JW" />
            <div>
              <h3>Joseph Williams</h3>
              <p className="Hey-My-name-is-Jose">
                Hey! My name is Joseph Williams and I'm a product designer based in
                Berlin. Most recently I led the design of multiple products at WeWork
                and prior to that I worked with startups building their products and
                design culture. <br></br>Previous products I built for the design community are
                used by tens of thousands of designers working at companies like
                Google, Airbnb, Netflix and Boeing. Products I built or designed are
                featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine,
                Awwwards and more. <br></br><br></br>
                Reach me on <a href="#" className="social">Twitter</a> or <a className="social">Email</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="Pricing-Plans">
          <h2>Pricing &amp; Plans</h2>
          <p className="Create-custom-landin6">
            Create custom landing pages with Omega that converts <br></br> more visitors
            than any website.
          </p>
          <div className="plan-cards">
            <div className="plan">
              <p className="accessibility">Limited</p>
              <h2 className="price">Free</h2>
              <p className="plan-info">
                Get a free chapter of our book right now.
              </p>
              <div className="RectangleEmailBox">Email Address</div>
              <div className="freeChapter">
                <a href="#">Send free Chapter</a>
              </div>
            </div>
            <div className="plan">
              <p className="accessibility">Only eBook</p>
              <h2 className="price">$29</h2>
              <p className="plan-info">
                Get the eBook version + Audio version of the book.
              </p>

              <div className="amazoneButton">
                <a href="#">Buy from Amazon</a></div>
            </div>
            <div className="plan">
              <p className="accessibility">Everything</p>
              <h2 className="price">$49</h2>
              <p className="plan-info">
                Hardcover + eBook version + Audio version of the book.
              </p>
              <div className="amazoneButton">
                <a href="#">Buy from Amazon</a></div>
            </div>
          </div>
            <div className="FAQ padding-bottom-0">
              
              <div>
                <img className="arrow-icon" src={TR} alt="tail" />
              </div>
            
              <div>
                <h3>
                  Can I use Omega for my clients?
                </h3>
                <p>
                  Absolutely. The Envato Theme license allows you to build a
                  websites for personal use or for a client. User Omega for your
                  clients.
                </p>
              </div>
              
              <div>
                <img className="arrow-icon" src={TR} alt="tail" />
              </div>
              <div>
                <h3>
                  Do I get free updates?
                </h3>
                <p>
                  Yes. We update all of our themes regularly, plus are
                  constantly adding new components, pages, and features to our
                  themes. Purchase once and get lifetime updates.
                </p>
              </div>
            </div>
            <div className="FAQ">
              <div>
                <img className="arrow-icon" src={TR} alt="tail" />
              </div>
              <div>
                <h3>
                  Does it work with WordPress?
                </h3>
                <p>
                  Create custom landing pages with Omega that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without any design or custom coding.
                </p>
              </div>
              <div>
                <img className="arrow-icon" src={TR} alt="tail" />
                </div>
                <div>
                <h3>
                  Will you provide support?
                </h3>
                <p>
                  With lots of unique blocks, you can easily build a page
                  without any design or custom coding. with Omega that converts
                  more visitors than any website.
                </p>
              </div>
            </div>
        </div>
        <div className="Learn">
          <div>
            <h2>Learn problem solving</h2>
            <p>
            Create custom landing pages with Omega that converts more visitors
            than any website.
            </p>
          </div>
          <button class="GTB">Get this Book</button>
        </div>
       <div className="footer">
          <h2 class="Logo" alt="Logo">Omega</h2>
          <div className="footer-links">
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className = "ARR">© 2020 UXTheme, All Rights Reserved</div>
       </div>
      
    </>
  );
};

export default LandingPage;
