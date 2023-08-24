
export default function LandingPage(){

    return (
        < div>

  
 {/* <!-- H E R O --> */}
  <section id="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          {/* <img src="images/iphone.png" className="img-fluid" alt="Demo image"> */}
        </div>
        <div className="col-md-7 content-box hero-content">
          <span>Unlimited Data</span>
          <h1>Digital Innovation and the <b>Future of Digital Marketing</b></h1>
          <p>Boost your digital marketing campaigns and increase your conversion rates</p>
          <a href="#" className="btn btn-regular">Learn more</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- E N D  H E R O -->

  <!-- E N D  M A R K E T I N G --> */}
  <section id="marketing">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="content-box">
            <span>Organic Search Report</span>
            <h2>Search Insights</h2>
            <p>Grow your search traffic, research your competitors keywords and monitor your ranking in real time.</p>
            <a href="#" className="btn btn-regular">Start Free Trial</a>
          </div>
        </div>
        <div className="col-md-7">
            {/* <img src="images/demo-image.png" className="img-fluid" alt="Demo image"> */}
        </div>
      </div>
    </div>
  </section>
  {/* <!-- E N D  M A R K E T I N G -->

  <!-- T E S T I M O N I A L S --> */}
  <section id="testimonials">
    <div className="container">
      <div className="title-block">
        <h2>The Best Digital Agencies Recommend Our Software</h2>
        <p>Industry experts mention their experience using our software and the excellent results they have achieved</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-2 col-xs-2">
                <div className="profile-picture review-one"></div>
              </div>
              <div className="col-md-10 col-xs-10">
                <h6>Joshua M. Salas <span className="rating">5 <i className="icon ion-md-star"></i></span></h6>
                <small>Marketing Intelligence | Author & Content Creator</small>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna sit amet enim. Maecenas vulputate auctor ligula sed sollicitudin.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="testimonial-box">
            <div className="row personal-info">
              <div className="col-md-2 col-xs-2">
                <div className="profile-picture review-one"></div>
              </div>
              <div className="col-md-10 col-xs-10">
                <h6>Michael Edwards <span className="rating">5 <i className="icon ion-md-star"></i></span></h6>
                <small>Seo Consultant | Author & Content Creator</small>
              </div>
            </div>
            <p>In euismod, metus ac elementum tincidunt, dui eros ullamcorper lorem, at euismod augue augue quis leo. Fusce non dui augue. In hac habitasse platea dictumst. Mauris quis lacinia mauris. Proin ut pretium quam. Nam at ex finibus.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* E N D  T E S T I M O N I A L S  */}

  {/* <!-- P R I C I N G */}
  <section id="pricing">
    <div className="container">
      <div className="title-block">
        <h2>Plans and Pricing</h2>
        <p>The best software to develop perfect content and advertising strategies to increase leads and sales.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="pricing-box">
            <h3 className="demo">Demo Version</h3>
            <h6>Free</h6>
            <small>forever</small>
            <p>Demo gives you full access to all features for 7 days</p>
            <div className="divider-light"></div>
            <ul>
              <li><i className="icon ion-md-checkmark-circle-outline demo"></i>Marketing plan</li>
              <li><i className="icon ion-md-checkmark-circle-outline demo"></i>Seo reporting tool</li>
              <li><i className="icon ion-md-checkmark-circle-outline demo"></i>Keywords explorer</li>
              <li><i className="icon ion-md-checkmark-circle-outline demo"></i>Competitive analysis</li>
              <li><i className="icon ion-md-checkmark-circle-outline demo"></i>Five projects - <span className="demo">¡New!</span></li>
            </ul>
            <div className="text-center">
              <a href="#" className="btn btn-demo">Demo version</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-box">
            <h3>Standard Version</h3>
            <h6>$9</h6>
            <small>per month</small>
            <p>Outrank your competitors with this amazing software</p>
            <div className="divider-light"></div>
            <ul>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Marketing plan</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Seo reporting tool</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Keywords explorer</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Competitive analysis</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Unlimited projects - <span>¡New!</span></li>
            </ul>
            <div className="text-center">
              <a href="#" className="btn btn-buy">Buy now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="pricing-box">
            <h3>Agency Version</h3>
            <h6>$29</h6>
            <small>per month</small>
            <p>For agencies and businesses with extensive web presence</p>
            <div className="divider-light"></div>
            <ul>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Marketing plan</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Seo reporting tool</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Keywords explorer</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Competitive analysis</li>
              <li><i className="icon ion-md-checkmark-circle-outline"></i>Unlimited projects - <span>¡New!</span></li>
            </ul>
            <div className="text-center">
              <a href="#" className="btn btn-buy">Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- E N D  P R I C I N G --> */}

  {/* <!-- C A L L  T O  A C T I O N --> */}
  <section id="call-to-action">
    <div className="container text-center">
      <h2>Increase your conversion rates now</h2>
      <div className="title-block">
        <p>Learn how to increase both your online and offline conversion rates and boost your sales and profits.</p>
        <a href="#" className="btn btn-regular">Get Started</a>
      </div>
    </div>
  </section>
  {/* <!-- E N D  C A L L  T O  A C T I O N --> */}

 
 
       

        </div>
      )
    }