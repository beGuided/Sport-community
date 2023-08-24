import {Outlet,Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";





export default function GuestAuthLayouth(){

    const {token, user} = useStateContext();
   
    // if(token && user.email_verified_at!==null){
    //     return <Navigate to='/' />
    // }

    return (
        < div>
                
            {/* <!-- N A V B A R --> */}
            <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon ion-md-menu"></span>
                </button>
                {/* <img src="images/logo.png" className="img-fluid nav-logo-mobile" alt="Company Logo"> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="container">
                    {/* <img src="images/logo.png" className="img-fluid nav-logo-desktop" alt="Company Logo"> */}
                    <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
                    <li className="nav-item nav-custom-link">
                        <a className="nav-link" href="index.html">Home <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li className="nav-item nav-custom-link">
                        <a className="nav-link" href="#marketing">Features <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li className="nav-item nav-custom-link">
                        <a className="nav-link" href="#testimonials">Testimonials <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li className="nav-item nav-custom-link">
                        <a className="nav-link" href="#pricing">Pricing <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li className="nav-item nav-custom-link btn btn-demo-small">
                        <a className="nav-link" href="#">Try for Free <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            {/* <!-- E N D  N A V B A R -->*/}
                    
          <Outlet /> 
           {/* <!--  F O O T E R  --> */}
            <footer>
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <h5>Seo Ranking</h5>
                    <ul>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                        <li><a href="#">Developer API</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Video Tutorials</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <h5>Main Tools</h5>
                    <ul>
                        <li><a href="#">Rank Tracker</a></li>
                        <li><a href="#">Backlink Checker</a></li>
                        <li><a href="#">Keyword Generator</a></li>
                        <li><a href="#">Serp Checker</a></li>
                        <li><a href="#">Site Audit</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <h5>Blog</h5>
                    <ul>
                        <li><a href="#">Get High Quality Backlinks</a></li>
                        <li><a href="#">Top Google Searches</a></li>
                        <li><a href="#">Avoid Google Penalties</a></li>
                        <li><a href="#">White Hat SEO Tips</a></li>
                        <li><a href="#">Google Trends</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3">
                    <h5>Company</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna.</p>
                    <p><a href="mailto:sales@theseocompany.com" className="external-links">sales@theseocompany.com</a></p>
                    </div>
                </div> 
                <div className="divider"></div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <a href="#"><i className="icon ion-logo-facebook"></i></a>
                        <a href="#"><i className="icon ion-logo-instagram"></i></a>
                        <a href="#"><i className="icon ion-logo-twitter"></i></a>
                        <a href="#"><i className="icon ion-logo-youtube"></i></a>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* <small>2018 &copy; All rights reserved. Made by <a href="http://templune.com/" target="blank" className="external-links">Templune</a></small> */}
                    </div>
                </div>
                </div>
            </footer>
        </div>
      )
    }