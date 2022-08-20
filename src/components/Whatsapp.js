import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import "./Whatsapp.css"
import img32 from './images/img32.jpg'
import img from './images/img1.jpg'
import pack3 from './images/img5.jpeg'
import img3 from './images/img3.jpg'

const Whatsapp = () => {



    return (


        <div style={{ backgroundColor: '#ECF0F1 ' }}>

            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

          {/*introduction*/}
            <div className="container text-center" style={{ backgroundColor: '#ECF0F1 ' }}>
                <div className="row g-3">
                    <div className="col-12 col-md-6 ">
                        <h5 style={{ color: '#000080' }}> Welcome to Goa Scuba Diving </h5>
                        <hr />

                        <h3 style={{ color: '#D80E67 ' }}> Goa Scuba Diving & Water Sports.</h3>
                        <hr />
                        <p style={{ textAlign: 'justify' }}>Goa Scuba diving experience should be on everyone’s list of must-to-do activities in Goa. Goascubadiving is famous for providing one of a kind experience when it comes to water sports and scuba diving in Goa With a depth ranging from 10-15 meters.

                            <br /><br />  At Goascubadiving we thrive to provide the best 1st scuba experience in goa.  we have been here for 5+ years and serve thousands of travellers every season.<br /><br />
                            <b> Nothing is more enjoyable in Goa. Just Come and enjoy your best day over the Arabian Sea. </b>
                        </p>
                    </div>
                    <div className="col">
                        <h5 style={{ color: '#000080' }}> Get the Best Experience in Scuba Diving & Watersports</h5>
                        <hr />
                        <h3 style={{ color: '#D80E67 ' }}>Best Service, We Strive To Provide Our Customers.</h3>
                        <hr />
                        <ul style={{ textAlign: 'justify' }}>
                            <li>Real Scuba Experience</li>
                            <hr />
                            <li>Fun rides in Watersports</li>
                            <hr />
                            <li>Professional & Expert Instructors</li>
                            <hr />
                            <li>Quality & Best Equipment's</li>
                            <hr />
                            <li>Instant Booking Confirmation on Phone</li>
                            <hr />
                            <li>Pre Booking Discount available</li>
                            <hr />
                            <li>Certified & Safe activities</li>
                            <hr />
                            <li>Enjoy Best Day in Goa.</li>
                        </ul>
                        <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a>



                    </div>

                </div>
            </div>

             {/*pack1*/}
            <br />
            <br />
            <hr />
            <h1 style={{ color: '#000080' }}> Bestselling Packages</h1>
            <br />

            <h5 style={{ color: '#D80E67 ' }}>Select the best scuba diving in goa package and get a special discount on pre-bookings.</h5>
            <br />
            <div style={{ backgroundColor: '#ECF0F1 ' }}>

                <div className="container text-center">
                    <div className="row g-3">
                        <div className="col-12 col-md-6">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Scuba Diving in Goa with Water Sports, Grand Island Unlimited Package</h5>
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

                                </CardBody>
                            </Card>
                            
                        </div>
                        <div className="col">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Highlights ( 8 Activities Included – Best First Experience)</h5>
                            <ul style={{ textAlign: 'justify' }}>

                                <li>Trip to Grand island</li>
                                <li>40 Km Sea Trip</li>
                                <li>White Water Deep-Sea Dive.</li>
                                <li>Scuba Diving</li>
                                <li>Scuba Training by PADI Certified Trainer</li>
                                <li>Parasailing With Dip For Free</li>
                                <li>Jet Ski</li>
                                <li>Banana Ride</li>
                                <li>Bumper Ride</li>
                                <li>Speed Boat</li>
                                <li>Underwater HD Video GoPro8</li>
                                <li>Free Pickup/Drop from Hotel</li>
                                <li>Beers, Water, Breakfast</li>
                                <li>Delicious Lunch Non-Veg/ Veg</li>
                                <li>Equipment Rental</li>
                            </ul>
                            <div>
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a><br />
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Book Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/*pack2*/}
            <br />
            <div style={{ backgroundColor: '#ECF0F1' }}>

                <div className="container text-center">
                    <div className="row g-2">
                        <div className="col-12 col-md-6">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Monsoon Scuba Diving in Goa with Watersports Package</h5>
                                <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={img32}
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

                                </CardBody>
                            </Card>
                            

                        </div>
                        <div className="col">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Highlights ( 6 Activities Included – Best First Experience)</h5>
                            <ul style={{ textAlign: 'justify' }}>

                                <li>Watersports</li>
                                <li>Scuba Diving</li>
                                <li>Scuba Training by PADI Certified Trainer</li>
                                <li>Jet Ski</li>
                                <li>Banana Ride</li>
                                <li>Bumper Ride</li>
                                <li>Speed Boat</li>
                                <li>Underwater HD Video GoPro8</li>
                                <li>Free Pickup/Drop from Hotel</li>
                                <li>Snacks, Water, Breakfast</li>
                                <li>Delicious Lunch Non-Veg/ Veg</li>
                                <li>Equipment Rental</li>
                            </ul>
                            <div>
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a><br />
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Book Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
{/*pack3*/}
            <br />
            <div style={{ backgroundColor: '#ECF0F1' }}>

                <div className="container text-center">
                    <div className="row g-2">
                        <div className="col-12 col-md-6">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                 Watersports Package</h5>
                                <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={pack3}
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Water Sports
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

                                </CardBody>
                            </Card>
                            

                        </div>
                        <div className="col">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Highlights ( 6 Activities Included – Best First Experience)</h5>
                            <ul style={{ textAlign: 'justify' }}>

                            <li>Watersports</li>
                              
                              <li>Jet Ski</li>
                              <li>Banana Ride</li>
                              <li>Bumper Ride</li>
                              <li>Speed Boat</li>
                              <li>Parasailing</li>
                              <li>Instructor</li>
                              <li>Life jacket</li>
                              <li>Equipment Rental</li>
                            </ul>
                            <div>
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a><br />
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Book Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
{/*pack4*/}
            <br />
            <div style={{ backgroundColor: '#ECF0F1' }}>

                <div className="container text-center">
                    <div className="row g-2">
                        <div className="col-12 col-md-6">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                               Boat Party in Goa</h5>
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
               
              </CardBody>
            </Card>

                        </div>
                        <div className="col">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Highlights ( 6 Activities Included – Best First Experience)</h5>
                            <ul style={{ textAlign: 'justify' }}>
                           











Watersports Rides | Swimming with Life Jacket
We have a number of water sports equipment with us on board. All Famous Watersports in Goa including Banana Ride, Bumper Ride, Jetski, Speed Boat,  Zorbing Ball Ride.
                                <li> Watersports & island trip Goa Timings</li>
                                <p><i>Timing: 09.00 AM - 01.30 PM | 12:30 PM- 6:00 PM</i></p>
                                <li>AC Vehicle Pickup & Drop</li>
                                <p><i>Get Picked Up by AC Bus or Traveller From Selected Location in Goa.</i></p>

                                <li>Boat Party nearby Island, Sightseeing</li>
                                <p><i>Our friendly staff will assist you in boarding the boat and the journey begins. We visit one islands on this trip and stop nearby for swimming, Watersports Rides, lunch and even a dolphin sighting.</i></p>

                                <li>Onboard DJ Music | Delicious lunch | Snacks</li>
                                <p><i>Dance at the centre of sea. Enjoy Delicious Buffet Lunch and Snacks. Complementary Soft Drinks & Beers. Enjoy Dance on our boat party nearby Island.</i></p>

                                <li>Watersports Rides | Swimming with Life Jacket</li>
                                <p><i>We have a number of water sports equipment with us on board. All Famous Watersports in Goa including Banana Ride, Bumper Ride, Jetski, Speed Boat,  Zorbing Ball Ride.</i></p>

                           
                            </ul>
                            <div>
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a><br />
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Book Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
{/*pack5*/}
            <br />
            <div style={{ backgroundColor: '#ECF0F1' }}>

                <div className="container text-center">
                    <div className="row g-2">
                        <div className="col-12 col-md-6">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Monsoon Scuba Diving in Goa with Watersports Package</h5>
                                <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={img32}
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

                                </CardBody>
                            </Card>
                            

                        </div>
                        <div className="col">
                            <br />
                            <h5 style={{ color: '#000080', }}>
                                Highlights ( 6 Activities Included – Best First Experience)</h5>
                            <ul style={{ textAlign: 'justify' }}>

                                <li>Watersports</li>
                                <li>Scuba Diving</li>
                                <li>Scuba Training by PADI Certified Trainer</li>
                                <li>Jet Ski</li>
                                <li>Banana Ride</li>
                                <li>Bumper Ride</li>
                                <li>Speed Boat</li>
                                <li>Underwater HD Video GoPro8</li>
                                <li>Free Pickup/Drop from Hotel</li>
                                <li>Snacks, Water, Breakfast</li>
                                <li>Delicious Lunch Non-Veg/ Veg</li>
                                <li>Equipment Rental</li>
                            </ul>
                            <div>
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Get more videos and Details on Phone</a><br />
                                <br />
                                <a href="https://wa.me/919330234144?text=Its%20great%20to%20know%20about%20goascubadiving.in.Please%20let%20me%20know%20further%20details%20about%20scuba%20diving%20in%20north%20goa%20and%20booking%20process." className="btn btn-primary" style={{ backgroundColor: '#8C0ED8 ' }}>Book Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
{/*pack6*/}
           













        </div>



    )
}
export default Whatsapp;