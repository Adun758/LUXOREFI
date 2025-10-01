import { useParams } from "react-router-dom";

function RoomDetails() {
  const { roomName } = useParams(); // get the room name from the URL

  // Example data (you could fetch this from an API or a JSON file later)
  const roomData = {
    RoomSapphire: {
      title: "Room Sapphire",
      price: "$200/night",
      bed: "King size",
      facilities: ["WiFi", "TV", "Air Conditioning"],
    },
    RoomDiamond: {
    
    },
    PearlOrchid:{
      title: "Pearl Orchid",
      price: "$300/night",
      bed: "King size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
    },
    EclipseGrand:{
      title: "Eclipse Grand",
      price: "$350/night",
      bed: "King size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
    },
    SuperHeritage:{ 
        title: "Super Heritage",
        price: "$400/night",
        bed: "King size",
        facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
    }
  };

  const details = roomData[roomName];

  if (!details) {
    return <h2>Room not found</h2>;
  }

  return (
        <div className="room-details">
        <div style={{ padding: "20px", marginTop: '100px', fontFamily: 'sans-seri', fontSize: '18px' }}>
          <p style={{ textAlign: "center" }}><strong>{details.title2}</strong></p>
          <h1 style={{ textAlign: "center" }}>{details.title}</h1>
          <img src={details.image} alt="" style={{ width: '83%', borderRadius: '8px', margin: '0 auto', display: 'block' }} />
        </div>
        {/* Removed inline style from the parent div */}
        <div className="container" style={{ padding: '', display: 'flex', justifyContent: 'center', alignItems: 'center', position:'', }}>
          <Navbar />
          <div style={{ fontFamily: 'sans-seri', fontSize: '23px', marginBottom: '40px' }}>
            <h1><strong>{details.title3}</strong></h1>
            <p>{details.text}</p>
            <h1>{details.text2}</h1>
            <p>{details.text3}</p>
          </div>

    
            <div className="sapphire-details" style={{ border: '1px solid #ccc', padding: '20px 40px', borderRadius: '8px', width: '40%', height: 'auto', marginBottom: '40px', position:'sticky', top: '100px' }}>
              <h1>{details.info}</h1>
              <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <p><img src={details.img} alt="" />  {details.info1}</p>
                <p><img src={details.img1} alt="" />{details.info2}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p><img src={details.img2} alt="" /> {details.info3}</p>
              <p><img src={details.img3} alt="" /> {details.info4}</p>
            </div>
            <hr />
            <h1>{details.info}</h1>
            <p>{details.info5}</p>
            <button className="contact_btn"><a href="/contact">{details.button}</a></button>
          </div>
        </div>

        <div className="regulation" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'18px', lineHeight:'30px', gap:'20px', padding: ' 0 90px', fontFamily: 'sans-seri', marginBottom: '40px', marginTop:'40px' }}>
          <img src={img} alt="" style={{ width: "47vw" }}  />
          <div>
            <h1>{details.room1}</h1>
            <li>{details.reg}</li>
            <li>{details.reg2}</li>
             <li>{details.reg3}</li>
            <li>{details.reg4}</li>
            <li>{details.reg5}</li>
            <li>{details.reg6}</li>
            <li>{details.reg7}</li>

          {/* conc */}

        <div>
        <h1>{details.conc}</h1>
        <p>{details.conc1}</p>
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
    
  
  );
}

export default RoomDetails;
