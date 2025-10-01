import Navbar from "../components/Navbar";
import "./About.scss";
import video from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";
import { useEffect } from "react";
// import RoomDetails from "../pages/RoomDetails";

function About() {
    useEffect(() => {
        const vid = document.querySelector(".video");
        if (vid) {
            vid.play().catch(() => {});
        }
    }, []);

    useEffect(() => {
        document.title = "Lurofexi - About Us"; // Set the document title
      }, []);

        const testimonials = [
  {
    name: "Steven Philips",
    role: "CEO at Taskbes",
    rating: 5,
    text: "This platform does not just serve as a booking tool but also creates a bridge of communication between guests and hotels, ensuring personalized experiences. I would highly recommend luxury accommodations, as it brings a perfect balance of elegance.",
    image: "https://i.pravatar.cc/100?img=1", // sample avatar
    companyLogo: "https://img.icons8.com/ios-filled/50/000000/company.png"
  },
  {
    name: "Neren Philips",
    role: "CEO at Taskbes",
    rating: 5,
    text: "The calendar feature showed room availability in real-time. It ensures smooth booking experiences with elegance and precision.",
    image: "https://i.pravatar.cc/100?img=2",
    companyLogo: "https://img.icons8.com/ios-filled/50/000000/company.png"
  }
];
    return(
        <>
      <div className="about-page">
        <Navbar/>
            <section>
                {/* About us */}
                <div className="about_text">
                    <p className="about_p">(ABOUT US)</p>
                </div>

                    {/* luxury_hotel */}
                <div className="luxury_hotel">
                    <h1>Streamlining in Your Luxury  <br/
                    >Hotel Stays Effortlessly</h1>
                </div>

                <div className="about_img">
                    {/* img 1 */}
                    <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b2cc8202b2bae4d42a225_About%20Hero%20Image%20(1).jpg" alt="" className="about_img_item" /></div>

                    {/* img 2 */}
                    <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b2c9526ec52b2b73ab858_About%20Hero%20Image%20(3).jpg" alt="" className="about_img_item" /></div>
                    {/* img 3 */}
                    <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b2c952bfabde6231a39b8_About%20Hero%20Image%20(2).jpg" alt="" className="about_img_item" /></div>
                </div>
            </section>
        {/* </div> */}


        {/* story */}
        <div className="story">
        <p>(OUR STORY)</p>
        <h1 className="story_h1">
        Our Platform Connect With
        <video src={video} className="video" autoPlay loop muted playsInline>
        </video> 
        Finest Luxury in The New Accommodations to Worldwide, Offering Unparalleled Comfort, Elegance Services to Suit      <video src={video2} className="video" autoPlay loop muted playsInline>
        </video>
        Every Occasion
        </h1>
        </div>  
        </div>

            {/* facility */}

            <div className="All_facility" >
            <div className="facility-p" style={{color:'white', fontSize:'20px', fontFamily:'sans-seri',marginLeft:'10px', marginTop:'10px'}}>
                <p>(HOTEL FACILITIES)</p>
                <h1 className="facility_h1">Why Choose Luxorefi</h1>
            </div>

            {/* facilities */}
            <div className="facilities">
                <div className="facility_item">
                    <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788d4483c7472b6ff5dd9f9_Wifi%20Icon.svg" alt="" />
                    <h2>Free Wi-Fi</h2>
                    <p>Stay connected with complimentary high-speed Wi-Fi throughout your stay, ensuring you can work .</p>
                </div>
                <div className="facility_item">
                    <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788cf82c934d109d4cb7c25_Building%20Icon.svg" alt="" />
                    <h2>Exclusive Suites</h2>
                    <p>Indulge in a range of exclusive suites, each designed to provide the utmost comfort and luxury for our guests.</p>
                </div>
                <div className="facility_item">
                    <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788d4c4e54c318150437bf8_Spa%20Icon.svg" alt=""  />
                    <h2>Infinity Pools</h2>
                    <p>Take a refreshing dip in our stunning infinity pools, offering breathtaking views and a serene atmosphere.</p>
                </div>
                </div>
            
              </div>


                {/* rooms page */}
                 <div className="suites_text">
                  <p>(Rooms & Suites)</p>
                  </div>
                  <div className="suites_heading">
                  <h1>Explore Rooms and Suites</h1>
                  <a href="/room" className="suites_btn">Explore Rooms</a>
                    </div>

            <div className="suites">

                {/* room 1 */}
                    <div className="suites_img">
                        <div className="roomimg">
                     <img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678743d2572cb060faff37a1_Rooms%20Thumbnail.jpg" alt="room" className="roomimg1" />
                             <button className="round-button">$300</button>
                                    </div>
                              <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h1>
                                            <a href="/room/RoomSapphire" target="_blank">Royal Sapphire Suite</a>
                                        </h1>
                                        <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                                                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 90 Sq Ft
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                                                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" className="" /> 1 Bed
                                            </div>
                                            <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                                                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />4 Sleeps
                                            </div>
                                        </div>
                
                                </div>
            </div>  
             {/*room 2  */}
                 <div className="suites_img">
                                 <div className="roomimg">
                                     <img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787439cc6f7d1f53641ff07_Rooms%20Thumbnail%20(7).jpg" alt="room" className="roomimg1" />
                                 </div>
                                 <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                     <h1>
                                         <a href="/room/RoomDiamond" target="_blank"> Royal Diamond Suite</a>
                                     </h1>
                                     <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 90 Sq Ft
                                         </div>
                                         <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" className="" /> 1 Bed
                                         </div>
                                         <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />4 Sleeps
                                         </div>
                                     </div>
                                 </div>
                             </div>
                 </div>      


                {/* our team */}
           <div className="team" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , marginTop:'100px'}}>
             <p>(OUR TEAM)</p>
            <h1>Meet the Team Members</h1>
        </div>

        <div className="team_members">
        {/* team 1 */}
        <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67879c0a3f0ea1c622112eec_Team%20Image.jpg" alt="Team Member 1" />
            <h2>Sophia Jackson</h2>
            <p>Assistant Manager</p>
        </div>

        {/* team 2 */}
         <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787a28e6e8383c2fedd8a8f_Team%20Image%20(5).jpg" alt="Team Member 1" />
            <h2>Nathaniel Miller</h2>
            <p>Security  Manager</p>
        </div>
        {/* team 3 */}
        <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787a28e35492379bd4523fd_Team%20Image%20(4).jpg" alt="Team Member 1" />
            <h2>Olivia Adamas</h2>
           <p>Sales  Manager</p>
        </div>
      </div>


        <   div className="team_members">
        {/* team 4 */}
        <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787a28e9edd11ae2ddc930c_Team%20Image%20(3).jpg" alt="Team Member 1" />
            <h2>Amelia Shofiya</h2>
            <p>Relations  Manager</p>
        </div>

        {/* team 5 */}
        <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787a28e0142b5601b108236_Team%20Image%20(2).jpg" alt="Team Member 1" />
            <h2>David Branson</h2>
            <p>Executive Chef</p>
        </div>

        {/* team 6 */}
        <div className="team_member">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6787a28eadc1033730f84027_Team%20Image%20(1).jpg" alt="Team Member 1" />
            <h2>Michel Jackson</h2>
            <p>Spa Director</p>
        </div>
        </div>
             {/* explore */}
    <section className="Explore">
        <div className="explore">
            <p>(GALLERY)</p>
            <h1>Explore Your Dream Hotel</h1>
        </div>

        {/* explore image */}
        <div className="explore_img">
            <div className="explore_img1"><a href="/room"><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7e1f62f865dea0329d_Gallery%20Thumbnail%20(3)-p-500.jpg" alt="" className="explore_img1" /></a></div>
            <div className=""><a href="/room"><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/67877f7d07595fa2a0a4e793_Gallery%20Thumbnail%20(2)-p-500.jpg" alt="" className="explore_img2" /></a></div>
        </div>
    </section>

     <section className="Testimonials">      
    <div className="section-top-wrapper with-button">
      <div className="section-top-left-content">
        <p className="subtitle">(TESTIMONIALS)</p>
        <h2 className="testimonial-section-title">What Our Customers Say</h2>
      </div>
    </div>

       <div className="cards">
      <div class="testimonial-item-content-wrapper">
      <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788c2597dc295fe8ff10df8_Testimonial%20Left%20Image.jpg" alt="Testimonial Rating Image" class="testimonial-rating-image" />
        </div>

        {/* card 1 */}
              <div className="card">
        <div className="customer_review">
          <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788c4cb6cb611dd030003f6_Star.svg" alt="" />
          <p>“I arrived at the booking a website, elegant & user friendly interface <br /> captured my attention. 
            Navigating through the site was effortless,<br /> thanks to it’s a responsive design that worked seamlessly on both my laptop and phone.  
             The booking process was straightforward.”</p>
              <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678776f32148c912569d0246_Testimonial%20Avatar%20(1).png" alt="" style={{marginLeft:'10px'}} />
              <div style={{textAlign: 'center', display: 'flex', justifyContent:'space-between'}}> 
              <p>Jessica Adams <br />
            Ceo at Finteck</p>
                    {/* finteck img */}
              <div style={{marginLeft: '20px', marginTop: '10px'}}>
                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788c551fa5dab90850810c4_Logo.svg" alt="" style={{}} />
              </div>
              </div>
           </div>

        {/* card2 */}

           <div className="customer_review" style={{marginTop:'10px'}}>
          <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788c4cb6cb611dd030003f6_Star.svg" alt="" />
          <p>"I came across the booking website, its elegant and user-friendly interface immediately caught my eye
            . Browsing through the site felt effortless, thanks to its responsive design that worked perfectly on both my laptop and phone.
             The booking process was simple."</p>
              <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678776f32c5c35b739aceec9_Testimonial%20Avatar%20(3).png" alt="" style={{marginLeft:'10px'}} />
              <div style={{textAlign: 'center', display: 'flex', justifyContent:'space-between'}}> 
              <p>Steven Phillips <br />
            Ceo at Taskbes</p>
                    {/* Taskbes img */}
              <div style={{marginLeft: '20px', marginTop: '10px'}}>
                <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788c54d3ca42be5ba87f390_Logo%20(1).svg" alt="" style={{}} />
              </div>
              </div>
           </div>
        </div>
        </div>
       </section>
        {/* <div><a href="../pages/RoomDetails"><video src={video} alt="" /></a></div> */}


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
        <div><a href="#"><img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg" alt="" /></a></div>
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
        <div><a href="#"><img src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg" alt="" /></a></div>
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

        {/* forms */}
        <section className="forms" style={{marginTop:'50px'}}>
        <div>
          <div><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/6788d7375e58d998b964c3f0_Footer%20Cta%20Banner.jpg" alt="" style={{height:'90vh'}} className="form-img" /></div>
        </div>

          <div className="form1">
        {/* form text */}
        <div className="form-text">
          <h1>Let’s Explore Your <br /> Luxury Hotel</h1>
          <p>The focus on exclusivity and customization createsan unparalleled stay, <br /> that the memorable experience.
             experiences further guests in the local culture.</p>
              <button className="form-button"><a href="#">Explore Now</a></button>
        </div>

        {/* book form */}
        <div className="book-form">
           <form method="form.php"

        >
         <p className="suite">(ROOM & SUITE)</p>
         <h1 className="suite">Booking Form</h1>
        <input type="date" name="date" id="date"  required/> <br /> <br />
       <input type="date" name="date" id="date"  required/> <br /> <br />
           
       <select class="field select" id="people" name="people" required aria-label="Number of People">
          <option value="" disabled selected>Number of People</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="3">3 People</option>
          <option value="4">4 People</option>
          <option value="5">5 People</option>
        </select>
          
          {/* form button */}
          <div className="button">
            <button className="room_btn" onClick={() => {
              if (!document.getElementById('date').value || !document.getElementById('people').value) {
                alert("Please fill out all required fields.");
              } else {
              alert("Room Booked Successfully");
              }
            }}>
            Book a Room
          </button>


          </div>
            </form>
        </div>
        </div>
        </section>
              

           
    </>   
 );
};
export default About;