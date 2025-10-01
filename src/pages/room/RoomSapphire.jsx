import { useParams } from "react-router-dom";
import "./RoomSapphire.css";
import img from "../../assets/bed.png"
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
function RoomDetails() {
  useEffect(() => {
    document.title = "Lurofexi - Room Details"; // Set the document title
  }, []);
  const { roomName } = useParams(); // get the room name from the URL

  // Example data (you could fetch this from an API or a JSON file later)
  const roomData = {
    RoomSapphire: {

      title2:"(ROOMS & SUITES DETAILS)",
      title: "Royal Sapphire Suite",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678743daf94c34a419029810_Rooms%20Main%20Image%20(3).jpg",
      title3:"Room Overview",
      text:"A luxury hotel room is designed to offer an the unparalleled blend comfort, sophistication, and exclusive amenities. These accommodations often feature a spacious is layouts with carefully curated interiors that exude elegance and style. Guests can do the enjoy plush bedding, premium linens, and the modern furnishings that create a serene ambiance for relaxation. Many luxury rooms provide scenic views, ranging from the new city skylines to tranquil ocean vistas, accessible through private balconies floor ceiling windows.",
      text2:"Room Facilities",
      text3:"Luxury hotel rooms are designed to provide an experience comfort, convenience, and opulence. These rooms typically feature premium linens, ensuring a restful sleep.Awesome Bed",
      info:"More Information",
      info1:" 90 Sq Ft",
      info2:"1 Bed",
      info3:"3 sleeps",
      info4:"1 Bathroom",
      info5:"$300USD per Night",
      button:"Book Now",
      // img:"https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg",
      img1:"https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg",
      img2:"https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg",
      img3:"https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b613a9db3c959bae67f73_Bath%20Icon.svg",
      room1:"Room Rules & Regulations",
      reg:"Each room has a specified maximum number of occupants that must respected.",
      reg2:"Smoking is prohibited in non-smoking rooms; a fine may apply for violations.",
      reg3:"Guests are responsible for any damage to the hotel property during their stay.",
      reg4:"Only registered guests are allowed to the room unless prior approval is given.",
      reg5:"Return room keys at check-out and avoid sharing them with others.",
      reg6:"Guests must follow fair usage policies when using hotel-provided Wi-Fi.",
      reg7:"Guests must not engage in illegal activities on the property.",
      conc:"Conclusion",
      conc1:"Additional perks like personalized room service, daily housekeeping, and turn-down services ensure that every aspect of the guest’s stay is catered to with precision. Spacious wardrobes, digital safes, and climate-controlled air conditioning add layers of practicality to luxury.",
      explore:"(SIMILAR ROOMS & SUITES)",
      exploreImage:"Explore Similar Rooms and Suites"
      // facilities: ["WiFi", "TV", "Air Conditioning"],
     
    },
    RoomDiamond: {
      title: "Room Diamond",
      price: "$250/night",
      info5:"$400USD per Night",
      bed: "Queen size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678743a70e15d3bc251df4bf_Rooms%20Main%20Image%20(2).jpg",
       info1:" 50 Sq Ft",
      info2:"2 Beds",
      info3:"3 sleeps",
      info4:"1 Bathroom",
      info5:"$300USD per Night",
    },
     PearlOrchid:{
      title: "Pearl Orchid",
      price: "$300/night",
      bed: "King size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
      info5:"$500USD per Night",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787436b0e15d3bc251dc11b_Rooms%20Thumbnail%20(6).jpg",
       info1:" 60 Sq Ft",
      info2:"3 Beds",
      info3:"6 sleeps",
      info4:"3 Bathroom",
      info5:"$300USD per Night",
    },
    EclipseGrand:{
      title: "Eclipse Grand",
      price: "$350/night",
      bed: "King size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
      info5:"$100USD per Night",
      img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67874337a963d7af733ee9a8_Rooms%20Thumbnail%20(5).jpg",
       info1:" 100 Sq Ft",
      info2:"1 Bed",
      info3:"2 sleeps",
      info4:"2 Bathroom",
      info5:"$300USD per Night",
    },
    SuperHeritage:{
        title: "Super Heritage",
        price: "$400/night",
        bed: "King size",
        facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
        info5:"$470USD per Night",
        img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678742e79a68f12c2a2a4df4_Rooms%20Thumbnail%20(4).jpg",
       info1:" 50 Sq Ft",
      info2:"1 Bed",
      info3:"6 sleeps",
      info4:"2 Bathroom",
      info5:"$300USD per Night",
    },
    GardenView:{
        title: "Garden View",
        price: "$450/night",
        bed: "King size",
        facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
        info5:"$250USD per Night",
        img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678742c41d5575184b653d08_Rooms%20Thumbnail%20(3).jpg",
         info1:" 90 Sq Ft",
      info2:"1 Bed",
      info3:"3 sleeps",
      info4:"1 Bathroom",
      info5:"$300USD per Night",
    },
    LuxuryLoft:{
      title :" Luxury Loft",
   price: "$800/night",
    bed: "King size",
    facilities: ["WiFi", "TV", "Air Conditioning"],
    info5:"$800USD per Night",
    img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67874286812787c6dc3f824c_Rooms%20Thumbnail%20(2).jpg",
     info1:" 120 Sq Ft",
      info2:"2 Bed",
      info3:"3 sleeps",
      info4:"1 Bathroom",
      info5:"$300USD per Night",
    },
    EcoLodge:{
      title :" EcoLodge",
   price: "$800/night",
    bed: "King size",
    facilities: ["WiFi", "TV", "Air Conditioning"],
    info5:"$100USD per Night",
    img:"https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67873fc2bb4b913c4b3e03d2_Rooms%20Thumbnail%20(1).jpg",
     info1:" 90 Sq Ft",
      info2:"1 Bed",
      info3:"3 sleeps",
      info4:"1 Bathroom",
      info5:"$300USD per Night",
    }
  };

  const details = roomData[roomName];

  if (!details) {
    return <h2>Room not found</h2>;
  }

  return (
    <>
      <div className="room-details">
        <div style={{ padding: "20px", marginTop: '100px', fontFamily: 'sans-seri', fontSize: '18px' }}>
          <p style={{ textAlign: "center" }}><strong>(ROOMS & SUITES DETAILS)</strong></p>
          <h1 style={{ textAlign: "center" }}>{details.title}</h1>
          <img src={details.img} alt="" style={{ width: '72%',height:'90vh', borderRadius: '8px', margin: '0 auto', display: 'block' }} className="image22" />
        </div>
        {/* Removed inline style from the parent div */}
        <div className="container" style={{ padding: '', display: 'flex', justifyContent: 'center', alignItems: 'center', position:'', }}>
          <Navbar />
          <div style={{ fontFamily: 'sans-seri', fontSize: '23px', marginBottom: '40px' }}>
            <h1><strong>Room Overview</strong></h1>
            <p>A luxury hotel room is designed to offer an the unparalleled blend comfort, sophistication, and exclusive amenities. These accommodations often feature a spacious is layouts with carefully curated interiors that exude elegance and style. Guests can do the enjoy plush bedding, premium linens, and the modern furnishings that create a serene ambiance for relaxation. Many luxury rooms provide scenic views, ranging from the new city skylines to tranquil ocean vistas, accessible through private balconies floor ceiling windows.</p>
            <h1>Room Facilities</h1>
            <p>Luxury hotel rooms are designed to provide an experience comfort, convenience, and opulence. These rooms typically feature premium linens, ensuring a restful sleep.</p>
          </div>
    
            <div className="sapphire-details" style={{ border: '1px solid #ccc', padding: '20px 40px', borderRadius: '8px', width: '40%', height: 'auto', marginBottom: '40px', position:'sticky', top: '100px' }}>
              <h1>More Information</h1>
              <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <p><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> {details.info1}</p>
                <p><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" />{details.info2}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg " alt="" />{details.info3}</p>
              <p><img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678b613a9db3c959bae67f73_Bath%20Icon.svg" alt="" />{details.info4}</p>
            </div>
            <hr />
            <h1>More Information</h1>
            <p>{details.info5}</p>
            <button className="contact_btn"><a href="/contact">book now</a></button>
          </div>
        </div>

        <div className="regulation" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'18px', lineHeight:'30px', gap:'20px', padding: ' 0 90px', fontFamily: 'sans-seri', marginBottom: '40px', marginTop:'40px' }}>
          <img src={img} alt="" style={{ width: "47vw" }}  />
          <div>
            <h1>Room Rules & Regulations</h1>
            <li>Each room has a specified maximum number of occupants that must respected</li>
            <li>Smoking is prohibited in non-smoking rooms; a fine may apply for violations.</li>
             <li>Guests are responsible for any damage to the hotel property during their stay</li>
            <li>Only registered guests are allowed to the room unless prior approval is given.</li>
            <li>Return room keys at check-out and avoid sharing them with others.</li>
            <li>Guests must follow fair usage policies when using hotel-provided Wi-Fi.</li>
            <li>Guests must not engage in illegal activities on the property.</li>

          {/* conc */}

        <div>
        <h1>Conclusion</h1>
        <p>Additional perks like personalized room service, daily housekeeping, and turn-down services ensure that every aspect of the guest’s stay is catered to with precision. Spacious wardrobes, digital safes, and climate-controlled air conditioning add layers of practicality to luxury.</p>
        </div>
          </div>
      </div>

        <div className="explore" style={{fontSize:'23px', fontFamily:'sans-seri'}}>
          {/* explore suites */}
          <p>{details.explore}</p>
          <p>{details.exploreImage}</p>
      </div>
      {/* <room1_text/> */}
          <div className="suites">
         <div className="">
                 <img
                   src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/6787439cc6f7d1f53641ff07_Rooms%20Thumbnail%20(7).jpg"
                   alt="Room"
                   className="roomimg2"
                   style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
                   onClick={() => navigate("/room/RoomDiamond")} // ✅ goes to dynamic page
                 />
                 <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h1>
                     <a href="/room/RoomDiamond">Room Diamond Suite</a>
                                </h1>
                        <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                                    <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 60 Sq Ft
                                </div>
                               <div style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                                   <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621267307ee329be2ddb1_bed-double.svg" alt="" className="" /> 2 Beds
                                       </div>
                                     <div style={{ fontSize: '15px', display: 'flex', justifyContent: 'center' }}>
                                    <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />4 Sleeps
                                   </div>
                                  </div>
                       
                           </div>
           </div>

           {/* 2 */}
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
                     <a href="/room/PearlOrchid">Pearl Orchid Suite</a>
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
           </div>
    </div>
    </>
  );
}

export default RoomDetails;
