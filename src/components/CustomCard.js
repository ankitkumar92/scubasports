import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from "reactstrap";
import img from './images/img1.jpg';
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.jpeg"
import img6 from "./images/img7.jpg"
import img7 from "./images/img8.jpeg"
import img8 from "./images/img8.jpg"
import img9 from "./images/img9.jpg"

import img15 from './images/img15.jpg';
import img16 from "./images/img16.jpg"
import img17 from "./images/img17.jpg"
import img18 from "./images/img18.jpg"
import img19 from "./images/img19.jpg"
import img20 from "./images/img20.jpg"
import {Link} from 'react-router-dom'




export default function CustomCard() {
  return (
    <>

      <div className="container text-center">
        <div className="row g-3 ">
          <div className="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Scuba Diving in GOA
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  <h6>Price:<del>1000 INR</del></h6>
                </CardSubtitle>
                <CardText>
                  Offer Price : 599 INR/Person
                </CardText>
                <div >
                <Link to="/ScubaDive" className="btn btn-primary">More Details</Link>

                </div>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img2}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Speed Boat
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price: <del>1500 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 999 INR/Person
                </CardText>
                <Link to="/WaterActivity" className="btn btn-primary">More Details</Link>
               

               
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img3}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Boat Cruise (Adventure Party)
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>1500 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 999 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img4}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Parasailing
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>1500 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 999 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img5}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Top 5 Water Sports Combo
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>300 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 150 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img6}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Dinner Cruise in GOA
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>2400 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 1800 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <br></br>
      <div class="container text-center">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img7}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Top 5 Water Sports Combo
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>300 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 150 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img8}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  DudhSagar Waterfall+Jeep Safari
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>2400 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 1900 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img9}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  DudhSagar Waterfall+Jeep Safari

                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>2400 INR</del>

                </CardSubtitle>
                <CardText>
                  Offer Price : 1900 INR/Person

                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container text-center">
        <div className="row g-3 ">
          <div className="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img15}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  9D Cinema Beach Experience
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  <h6>Price:<del>300 INR</del></h6>
                </CardSubtitle>
                <CardText>
                  Offer Price : 150 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img16}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Fly Boarding 
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price: <del>4200 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 3499 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img17}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Sub Boarding
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>4200 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 3499 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="row g-3">
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img18}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Highest Bungee Jumping
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>4200 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 3499 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img19}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  NorthGOA sightseeing+Private Car
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>5000 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 4499 INR/4pax/1day
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <Card>
              <CardImg
                alt="Card image cap"
                src={img20}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Snow Park full Party
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price:<del>1000 INR</del>
                </CardSubtitle>
                <CardText>
                  Offer Price : 599 INR/Person
                </CardText>
                <a href="https://wa.me/9330234144?text=Hi%20%2C%20It's%20great%20to%20know%20about%20Scubasport%20%2C%20can%20you%20send%20me%20more%20details%20about%20your%20package%3F" className="btn btn-primary">More Details</a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

    </>




  )
}
