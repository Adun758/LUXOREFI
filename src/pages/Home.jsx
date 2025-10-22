import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import  room from "../assets/room1.jpg"
import svg from "../assets/star.svg"
import roomImg from "../assets/room1.svg"
import room2 from "../assets/room2.jpg"
import roomImg2 from "../assets/bed.svg"
import user from "../assets/user-circle.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; 
import "@splidejs/react-splide/css";

function Home() {
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your booking logic here
    };

    useEffect(() => {
        document.title = "Lurofexi - Home";
    }, []);
    

    return (
        <>
        <div className="home-hero-video-bg w-background-video w-background-video-atom" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', }}>
            <video
                poster="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6786272a8ed4c6db179f842b_Header-poster-00001.jpg"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100vw", height: "100vh", objectFit: "cover", position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            >
                <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6786272a8ed4c6db179f842b_Header-transcode.mp4" type="video/mp4" />
                <source src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a%2F6786272a8ed4c6db179f842b_Header-transcode.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.3)'
            }}>
                <div>
                    <img src={svg} alt="Logo" style={{ width: 120 , marginTop:190}} className="luro_svg" />
                </div>
                
                <h1 style={{ fontSize: '5rem', marginBottom: 16,   marginTop:'30px', fontFamily:'cursive' }} className="luro_text">Luxury Living, One <br />Booking Away</h1>
                <button style={{
                    backgroundColor: 'rgb(213, 180, 117)',
                    color: '#000',
                    padding: '15px 50px',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}><a href="/about" style={{ color: '#000', textDecoration: 'none' }}>Explore Now</a></button>

                <form className="hotel-booking-form" onSubmit={handleSubmit} style={{
                    marginTop: 32,
                    background: 'rgba(255,255,255,0.15)',
                    padding: 32,
                    borderRadius: 16,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 16,
                    alignItems: 'center',
                    justifyContent: 'center',
                    //  maxWidth: 90,
                    // width: '100%',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                    <div className="field" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <label htmlFor="arrival" style={{ width: '100%', textAlign: 'center', marginBottom: 4 }}>Arrival Date:</label>
                        <DatePicker
                            id="arrival"
                            selected={arrivalDate}
                            onChange={(date) => setArrivalDate(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select Arrival Date"
                            className="datepicker-input"
                            required
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="field" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <label htmlFor="departure" style={{ width: '100%', textAlign: 'center', marginBottom: 4 }}>Departure Date:</label>
                        <DatePicker
                            id="departure"
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            dateFormat="MM/dd/yyyy"
                            placeholderText="Select Departure Date"
                            className="datepicker-input"
                            required
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="field" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <label htmlFor="people" style={{ width: '100%', textAlign: 'center', marginBottom: 4 }}>Number of People:</label>
                        <select
                            id="people"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
                            className="select"
                            required
                            style={{ width: '100%' }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}     
                        </select>
                    </div>
                    <button type="submit" className="submit-button" style={{
                        backgroundColor: 'rgb(213, 180, 117)',
                        color: '#000',
                        padding: '10px 32px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        display:'flex',
                        alignItems:'center',
                        cursor: 'pointer',
                        height: 48,
                        alignSelf: 'center',
                        marginLeft: 16,
                        minWidth: 150,
                        marginTop:20,
                    }}>
                        Book a Hotel
                    </button>
                </form>
            </div>
        </div>

     <div className="luro_about " >
         <div className="about " style={{margin:' 55px '}}>
            {/* luro about */}
        <div className="luro_text">
           <p className="welcome">(WELCOME TO LUXOREFI)</p>
           <h1>Luxorefi Hotel in the Heart of America</h1>
           <p className="about_hotel">Luxury hotel strategically a located near a major transit hubs like airports & railway 
            stations offers paralleled convenience for travellers. Nestled just steps away from the iconic
             tourist destinations, including historic caves bustling marketplace this luxury
             hotel serves as the perfect retreat for both leisure and business guests.</p>
             <a href="/about" className="about_btn">More About</a>
        </div>

        {/* luro img */}
        <div className="about_img">
            <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678649573d6fcc1f3d7191f9_About%20Image.jpg" alt="" className="aboutimg" /></div>
        </div>
        </div>
        </div>
 
                    {/* room&suite */}
              
                    <div className="suites_text">
                        <p>(Rooms & Suites)</p>
                    </div>

                    <div className="suites_heading">
                        <h1>Explore Rooms and Suites</h1>
                        <a href="/room" className="suites_btn">Explore Rooms</a>
                    </div>

            <div className="suites">
                {/* room1 */}
                <div className="suites_img">
                    <div className="roomimg">
                        <img src={room} alt="room" className="roomimg1" />
                        <button className="round-button">view</button>
                    </div>
              <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>
                            <a href="/room/RoomSapphire">Royal Sapphire Suite</a>
                        </h1>
                        <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                                <img src={roomImg} alt="" /> 90 Sq Ft
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                                <img src={roomImg2} alt="" className="" /> 1 Bed
                            </div>
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                                <img src={user} alt="" />4 Sleeps
                            </div>
                        </div>

                </div>
                </div>
                {/* room2 */}
                <div className="suites_img">
                    <div className="roomimg">
                        <img src={room2} alt="room" className="roomimg1" />
                    </div>
                    <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>
                            <a href="/room/RoomDiamond">Royal Diamond Suite </a>
                        </h1>
                        <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                                <img src={roomImg} alt="" /> 90 Sq Ft
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                                <img src={roomImg2} alt="" className="" /> 1 Bed
                            </div>
                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                                <img src={user} alt="" />4 Sleeps
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    <div className="suites" style={{marginLeft:''}}>

                    {/* 3 */}
           <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787436b0e15d3bc251dc11b_Rooms%20Thumbnail%20(6).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/PearlOrchid")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/PearlOrchid">Royal Orchid Suite</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 70 Sq Ft
                         </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" className="" /> 1 Bed
                                </div>
                              <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />2 Sleeps
                            </div>
                           </div>
                
                    </div>
              </div>


                    {/* 4 */}
                        <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67874337a963d7af733ee9a8_Rooms%20Thumbnail%20(5).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/EclipseGrand")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/EclipseGrand">Eclipse Grand Suite</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 50 Sq Ft
                         </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" className="" /> 1 Bed
                                </div>
                              <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />3 Sleeps
                            </div>
                           </div>
                
                    </div>
              </div>

        </div>

        {/* hotel facilites */}
        <div className="facilites">
            <p>(HOTEL FACILITIES)</p>
            <h1>Our Luxorefi Hotel Facilities</h1>
            <p>This luxury hotel services as the perfect retreat for both leisure <br /> and business guests.</p>
        </div>

                    <div className="all_facility">
        {/* facility 1 */}
        <div className="facility">
            {/* 1 */}
            <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678751538394376c697c3404_Facilities%20Item%20Icon.svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Exclusive Suites</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>

            {/* 2 */}
                <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787522dccac7ad2914eb67c_Facilities%20Item%20Icon%20(4).svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Free Wifi</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>

            {/* 3 */}
                <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787522d962a541b51125364_Facilities%20Item%20Icon%20(3).svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Infinity Pools</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>
        </div>

                    {/* 2 */}
                      <div className="facility">
            {/* 1 */}
            <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787522dfb320e5872b5bc49_Facilities%20Item%20Icon%20(2).svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Spa&Wellness</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>

            {/* 2 */}
                <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678752b4c2e7553dab9e597a_Facilities%20Item%20Icon%20(1).svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Luxury Transport</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>

            {/* 3 */}
                <div className="facility_one">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787522d9cf6149b7e7ceed5_Facilities%20Item%20Icon%20(5).svg" alt="" /></div>
                <div className="facility-text">
                    <h1>Exclusive Suites</h1>
                    <p>Spacious rooms are a hallmark of a luxury hotels,
                         designed to provide guests with ample space to relax.</p>
                </div>
            </div>
        </div>
</div>
                {/* extra facility */}
        <div className="e-facility">
            <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678755c90bcd0ee61910ed4b_Extra%20facilities%20Image.jpg" alt=""  className="e-img"/></div>
            <div className="e-text">
                <p>(EXTRA FACILITIES)</p>
                <h1>Luxury Amenities <br /> Awaiting Your Stay</h1>
                <p>These facilities are designed to that provide extra comfort, 
                    <br />convenience, and exclusivity ensuring every moment of <br />
                 the visit is exceptional.</p>
                 <li><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787566ade2529a7506d6e6e_Tick%20Icon.svg" alt="" />  Personalized Concierge Services for Every Guest.

    </li>
                 <li><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787566ade2529a7506d6e6e_Tick%20Icon.svg" alt="" />  Free Welcome Drinks and Snacks for Everyone.

    </li>
                 <li><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787566ade2529a7506d6e6e_Tick%20Icon.svg" alt="" />  Access to exclusive spa discounts during your stay.

    </li>
                 <li><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787566ade2529a7506d6e6e_Tick%20Icon.svg" alt="" />  Free parking for the duration of your stay.

    </li>
            </div>
        </div>
          <div className="carousel-wrapper">
            <div className="testimonial">
            <p>(TESTIMONIALS)</p>
            <h1>What Our Customers Say</h1>
            </div>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          autoplay: true,
          breakpoints: {
            1000: { perPage: 2 },
            600: { perPage: 1 },
          },
        }}
      >
        <SplideSlide>
            <div className="test-box">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678628fd7e8db7ea1432bc35_5%20Star.svg" alt="" />(5.0)</div>
                <div>
                    <p className="test-p">“The transparency pricing ensured there were no hidden fees, which greatly built trust. Additionally multi language 
                        support made accessible for international travellers like myself.
                         </p>
                         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 10px'}} className="test-flex">
                            <div style={{display:'flex', alignItems:'center', gap:'10px', marginTop:''}}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678776f32c5c35b739aceec9_Testimonial%20Avatar%20(3).png" alt="" />
                            <p>Steven Philips <br />
                        CEO at Finteck</p>
                        </div> 
                        <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787783e54f8c790771947b2_Logo.svg" alt=""  style={{color:"black"}}/></div>
                         </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
                 <div className="test-box">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678628fd7e8db7ea1432bc35_5%20Star.svg" alt="" />(5.0)</div>
                <div>
                    <p className="test-p">The inclusion of filters to refines that’s my search by price amenities, and room type saved me a great deal of time. When I encountered a question, the integrated live chat support was prompt and helpful.
                         </p>
                         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 10px'}} className="test-flex">
                            <div style={{display:'flex', alignItems:'center', gap:'10px', marginTop:''}}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678776f32148c912569d0246_Testimonial%20Avatar%20(1).png" alt="" />
                            <p>Jessica Adams <br />
                        CEO at Taskbes</p>
                        </div> 
                        <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787783e6612dbda82533e26_Logo%201.svg" alt=""  style={{color:"black"}}/></div>
                         </div>
                </div>
            </div>

        </SplideSlide>
        <SplideSlide>
              <div className="test-box">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678628fd7e8db7ea1432bc35_5%20Star.svg" alt="" />(5.0)</div>
                <div>
                    <p className="test-p">“The transparency pricing ensured there were no hidden fees, which greatly built trust. Additionally multi language support made accessible for international travellers like myself.
                         </p>
                         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 10px'}} className="test-flex">
                            <div style={{display:'flex', alignItems:'center', gap:'10px', marginTop:''}}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678776f329d6bd96a88a3a67_Testimonial%20Avatar%20(2).png" alt="" />
                            <p>Helena Smith<br />
                        CEO at Bezify</p>
                        </div> 
                        <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787783e7a58ee4f5383b694_Logo%20(1).svg" alt=""  style={{color:"black"}}/></div>
                         </div>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className="test-box">
                      <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678628fd7e8db7ea1432bc35_5%20Star.svg" alt="" />(5.0)</div>
                <div>
                    <p className="test-p">“This platform does not just in serve as a booking tool but also creates a bridge of communication between guests and hotels, ensuring a personalized experiences. I would highly recommend luxury accommodations.
                         </p>
                         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 10px'}} className="test-flex">
                            <div style={{display:'flex', alignItems:'center', gap:'10px', marginTop:''}}>
                            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877829cf380b4c3b4b8065_Testimonial%20Avatar%20(4).png" alt="" />
                            <p>Michael Phillips<br />
                        CEO at Markeotic</p>
                        </div> 
                        <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787783e79212377590fd9d8_Logo%201%20(1).svg" alt=""  style={{color:"black"}}/></div>
                         </div>
                </div>
            </div>
        </SplideSlide>

      </Splide>
    </div>

        {/* gallery */}
        <div className="gallery">
            <p>Gallery Section</p>
            <h1>Explore Your Dream Hotel</h1>
        </div>

            {/* gallery img */}
            <div className="gallery-img">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7e1f62f865dea0329d_Gallery%20Thumbnail%20(3).jpg" alt="" /></div>
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7d07595fa2a0a4e793_Gallery%20Thumbnail%20(2).jpg" alt="" /></div>
            </div>

            <div className="gallery-img">
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7e9926209543a8de57_Gallery%20Thumbnail%20(1).jpg" alt="" /></div>
                <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7ef6fba6015d1abe73_Gallery%20Thumbnail.jpg" alt="" /></div>
                </div>


                {/* blog */}
                     {/* Blog Page */}
     <section className="Blog" >
    <div className="blog">
     <p>(OUR BLOG)</p>
    <div className="news" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 6px'}}>
      <h1>Hotel News & Articles</h1>
      <button><a href="/blog">View All Articles</a></button>
      </div>
      </div>

        <div className="blogs">
     {/* blog 1*/}
     <div className="blog1">
        <div><a href="/Blog/RomanticGateway"><img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg" alt="" /></a></div>
        <div className="blog-text">
          <p>luxury</p>
          <p>Jan 15,2025</p>
          </div> 
            <div>
         <p className="blog-p"><a href="/Blog/RomanticGateway" target="_blank">How to Plan the Perfect Romantic Getaway <br /> at a Luxury Hotel</a></p>
          </div>
           </div>

           {/* blog2 */}
                <div className="blog1">
        <div><a href="/Blog/ExplorePrivate"><img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg" alt="" /></a></div>
        <div className="blog-text">
          <p> Wellness</p>
          <p>Jan 15,2025</p>
          </div>

         <div>
         <p className="blog-p"><a href="/Blog/ExplorePrivate" target="_blank">Explore the Exclusive Perk Private Villas, Spa Retreats, and Unique Excursions</a></p>
          </div>
           </div>
           </div>
        </section>
                </>
    )
}

export default Home;