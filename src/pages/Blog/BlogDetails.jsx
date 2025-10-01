import { useParams } from "react-router-dom";
import './BlogDetails.css'
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
// import image from "../assests/luro.png";

function BlogDetails() {
  useEffect(() => {
    document.title = "Lurofexi - Blog Details"; 
  }, []);
  const { blogName } = useParams(); 

  const blogData = {
      RomanticGateway: {
      title: "How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887d3f5ed22525c256b2_Blog%20Main%20Image%20(6).jpg",
      img2:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787878067f43377a78812d7_Blog%20Inner%20Image%20(1).jpg",
      img3:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67878780828d0e4965672127_Blog%20Inner%20Image.jpg",
       img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"Luxury Hotels around the World:Top Picks for 2025",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787883ca4646056b5d545fc_Blog%20Thumbnail%20Image%20(3).jpg",
    },
    ExplorePrivate: {
      title: "Explore the Exclusive Perk Private Villas, Spa Retreats, and Unique Excursions",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678788603f5ed22525c214d4_Blog%20Main%20Image%20(7).jpg",
      img2:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787878067f43377a78812d7_Blog%20Inner%20Image%20(1).jpg",
      img3:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67878780828d0e4965672127_Blog%20Inner%20Image.jpg",
       img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787883ca4646056b5d545fc_Blog%20Thumbnail%20Image%20(3).jpg",
       text:"Luxury Hotels Around the World: Top Picks for 2024",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
      LuxuryHotel: {
      title: "Luxury Hotels Around the World",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67878841b71d6b3064bd1c21_Blog%20Main%20Image%20(5).jpg",
      img2:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787878067f43377a78812d7_Blog%20Inner%20Image%20(1).jpg",
      img3:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67878780828d0e4965672127_Blog%20Inner%20Image.jpg",
       img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
    EcoFriendly:{
       title: "Family Eco-Friendly Luxury Hotels What to Look For Your Needs",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678788201f62f865deaaa0f4_Blog%20Thumbnail%20Image%20(4).jpg",
      img2:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787878067f43377a78812d7_Blog%20Inner%20Image%20(1).jpg",
      img3:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67878780828d0e4965672127_Blog%20Inner%20Image.jpg",
       img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
    LuxuryPool:{
      title:"Luxury Hotels with Private Villas and The Best Swimming Pools",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678787f9696e3ba10c8b1283_Blog%20Main%20Image%20(3).jpg",
        img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },

     HotelBook:{
      title:"How to Avoid Hidden Fees in The New Hotel Bookings",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678787d4e79e282d8bdca32a_Blog%20Main%20Image%20(2).jpg",
        img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
     HotelRoom:{
      title:"How to Choose Eco-Friendly Hotel Room for Your Needs",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678787b802a48cf486003915_Blog%20Main%20Image%20(1).jpg",
        img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
    HotelTravel:{
  title:"How to Book a Luxury Hotel for Business Travel",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678786ed2cea4c9cbaae823f_Blog%20Main%20Image.jpg",
        img4:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787885c6e66d5a79a6a10bf_Blog%20Thumbnail%20Image%20(2).jpg",
       text:"Explore the Exclusive Perk Private Villas,Spa Retreats, and Unique Excursions",
       text2:"How to Plan the Perfect Romantic Getaway at a Luxury Hotel",
       img5:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787887b634290ac292cf869_Blog%20Thumbnail%20Image%20(1).jpg",
    },
  };


    const details = blogData[blogName];
    if (!details) {
    return <h2>Blog not found</h2>;
    }
    
    return (
        <>
      <div className="blog-details">

        <Navbar />
        <div className="details">
        <h1>{details.title}</h1>
        <p><img src={details.img} alt="" /></p>
      {/* <img src={image} alt="" /> */}

      </div>

      {/*  */}
      <div className="detail">
        <h1>Choosing a Luxury Hotel Sets the Stage for Indulgence
    </h1>
      <p>Start by selecting the perfect destination, considering the preferences of both partners—whether it's a beachfront resort,
         a serene in the mountain retreat, or an urban hotel with stunning skyline views. Research luxury hotels in the area that offer romantic amenities like private suites, spa services, and dining experiences tailored for couples. Booking early
         ensures access to premium accommodations, especially during popular travel seasons.</p>

         <p>Upon choosing the hotel, explore its unique offerings. Look for special packages designed for couples, such as spa treatments, candlelit dinners, or private excursions. Personalized room options,
           such as suites with balconies, jacuzzi tubs, or oceanfront views, can elevate the experience.</p>
      </div>

      {/* detail2 */}
        <div className="detail2">
          <h1>Plan Activities That Align With Both Your Interests
        </h1>
        <p>Dining is another critical element of a romantic getaway. Many luxury hotels boast gourmet restaurants with world-class chefs,
           offering menus that cater to a variety of tastes. Reserve a table for a candlelit dinner under the stars or opt for in-room dining to enjoy a private meal together. Breakfast in bed, complete with fresh pastries and coffee, adds a touch of indulgence to your mornings.</p>

          {/* detail2 li */}
        <div className="detail2">
          <li>During your stay, take advantage of the hotel’s concierge services.</li>
          <li>Booking exclusive experiences, the concierge can help craft seamless.</li>
          <li>Communication with your partner is key throughout planning process.</li>
          <li>Finally, prioritize quality time together by  from daily distractions.</li>
        </div>

        {/* detaail2  */}
        </div>

        {/* detail img */}
        <div className="detail-img">
          <div><img src={details.img2} alt="" /></div>
          <div><img src={details.img3} alt="" /></div>
        </div>

        {/* luxury-text*/}
        <div className="luxury-text">
          <h1>Luxury Environment to Celebrate Milestones
      </h1>
      <p>Use the luxury environment to celebrate milestones, 
        strengthen your bond, or simply enjoy a tranquil escape together. Luxury 
        hotels provide the perfect setting for deepening your relationship, with amenities and experiences
         designed to enhance intimacy. Capture moments through photos or journaling to
         cherish the memories long after your getaway ends.</p>
        </div>

          {/* luro img */}
          <div className="luro">
           <div className="luro-img">
            <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b46638af081131d1c6535_comma%202.svg" alt="" />
            <p>Start by selecting the perfect destination, considering the preferences of both partners—whether it's a 
              beachfront resort, a serene mountain retreat, or an urban hotel with stunning 
              skyline views. Booking early ensures access to premium accommodations, especially travel seasons.</p>
          </div>
    </div>
          {/* luro-text2 */}
          <div className="luro-text2">
            <h1>Tailor Activities to Your Shared Interests</h1>
            <p>Many luxury hotels offer curated experiences, from wine and 
              cheese pairings to guided tours of local landmarks. For a day of relaxation, book a couples’
               massage or enjoy lounging by a private pool. More adventurous duos might appreciate snorkeling,
               zip-lining, or cultural excursions that deepen your connection to the destination.</p>
          </div>

          <div className="luro-text2">
            <h1>Hotel With Stunning Skyline Views
          </h1>
          <p>Research luxury hotels in the area that offer romantic amenities like private suites,
            spa services, dining experiences tailored for couples. Booking early ensures access premium accommodations, 
            especially during popular travel seasons. Upon choosing the hotel, exploreits unique offerings. Look for special packages designed for couples,
            such as spa treatments or private excursions.</p>
                  </div>
              </div>

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
        <div><a href="/Blog/"><img src={details.img4} alt="" /></a></div>
        <div className="blog-text">
          <p>luxury</p>
          <p>Jan 15,2025</p>
          </div> 
            <div>
         <p className="blog-p"><a href="/Blog/">{details.text}</a></p>
          </div>
           </div>

           {/* blog2 */}
                <div className="blog1">
        <div><a href="/Blog/"><img src={details.img5} alt="" /></a></div>
        <div className="blog-text">
          <p> Wellness</p>
          <p>Jan 15,2025</p>
          </div>

         <div>
         <p className="blog-p"><a href="/Blog/">{details.text2}</a></p>
          </div>
           </div>
           </div>
        </section>

      </>

    );
}

export default BlogDetails;