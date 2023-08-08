import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { services } from "../utils/Data";
const Home = () => {
  return (
   <>
   <Container class1="home-wrapper-1 py-5">
   <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative ">
           <img src="images/main-banner-6.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="main-banner-content position-absolute">
              <h4>FASHION IS A POPULAR STYLE</h4>
              <h5>FASHION WEEK</h5>
              <Link className="button">SHOP NOW</Link>
              
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className="small-banner position-relative ">
           <img src="images/catbanner-01.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>BEST SALE</h4>
              <h5>FASHION WEEK</h5>
              <p>From $999.00 or <br /> $41.62/mo.</p>
              
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-02.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>NEW ARRIVAL</h4>
              <h5>FASHION WEEK</h5>
              <p>From $999.00 or  <br />$41.62/mo.</p>
              
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-03.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>NEW ARRIVAL</h4>
              <h5>FASHION WEEK</h5>
              <p>From $999.00 or  <br />$41.62/mo.</p>
              
            </div>
          </div>
          <div className="small-banner position-relative ">
           <img src="images/catbanner-04.jpg"
           className="img-fluid rounded-3"
            alt="main-banner" />
            <div className="small-banner-content position-absolute">
              <h4>NEW ARRIVAL</h4>
              <h5>FASHION WEEK</h5>
              <p>From $999.00 or <br /> $41.62/mo.</p>
              
            </div>
          </div>
          
          </div>
        </div>
      </div>
   </Container>
   <Container class1="home-wrapper-2 py-5">
   <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i,j)=>{
                return(
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                  <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                  </div>
                  </div>
                )
               
              })
            }
          </div>
        </div>
       </div>
   </Container>
<Container class1="home-wrapper-2  py-5">
<div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center ">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
          </div>
        </div>
       </div>
</Container>
   <Container class1="featured-wrapper py-5 home-wrapper-2">
   <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collections</h3>
        </div>
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
      </div>
   </Container>
   <Container class1="popular-wrapper py-5 home-wrapper-2">
    
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Popular Products</h3>
        </div>
         
      </div>
      <div className="row">
      <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
      </div>
  
   </Container> 
   <Container class1="marque-wrapper home-wrapper-2 py-5">
    
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee className="d-flex">
      <div className="mx-4 w-25">
      <img src="images/lakme.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-20.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-12.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-11.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-14.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-15.jpg" alt="brand" />
      </div>
      <div className="mx-4 w-25">
      <img src="images/brand-16.jpg" alt="brand" />
      </div>
</Marquee> 
          </div>
        </div>
      </div>
    

   </Container>
   
   </>
  )
}

export default Home