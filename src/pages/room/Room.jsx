import "./Room.css";
import roomImage from '../../assets/room1.jpg'; 
import roomImg2 from '../../assets/room2.jpg';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";

function Room() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Rooms | Luxorefi ";
  }, []);

  return (
    <>  
    <div className="room-page">

          {/* rooms */}
          <section className="room">
        <p>(ROOMS&SUITES)</p>
        <h1>Explore  Rooms & Suites</h1>
          </section>
           <div className="suites">
          {/* room1 */}
          <div className="">
        <Navbar/>
      <img
        src={roomImage}
        alt="Room"
        className="roomimg1"
        style={{ cursor: "pointer", marginTop: '46px', marginLeft:'20px' }}
        onClick={() => navigate("/room/RoomSapphire")} // ✅ goes to dynamic page
      />
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
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621263a24186c93c7321b_user-circle.svg" alt="" />3 Sleeps
                            </div>
                           </div>
                
                    </div>
    </div>

      {/* room 2 */}
      <div className="">
          <img
            src={roomImg2}
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/RoomDiamond")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/RoomDiamond" target="_blank">Royal Diamond Suite</a>
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
    </div>

    {/* room 2 pair */}
      {/* room1 */}
        <div className="suites" style={{marginLeft:'70px'}}>
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
              <a href="/room/PearlOrchid" target="_blank">Royal Orchid Suite</a>
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

              {/* room2 */}
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
              <a href="/room/EclipseGrand" target="_blank">Eclipse Grand Suite</a>
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
`       </div>

    {/* room 3 */}
    <div className="suites">
         <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678742e79a68f12c2a2a4df4_Rooms%20Thumbnail%20(4).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/GardenView")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/GardenView" target="_blank">Garden View Room</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 90 Sq Ft
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
              
              {/* room2 */}
            <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/678742c41d5575184b653d08_Rooms%20Thumbnail%20(3).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/SuperHeritage")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/SuperHeritage" target="_blank">Super Heritage Suite</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 100 Sq Ft
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
    </div>

      {/* room4 */}
    <div className="suites">
         <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67874286812787c6dc3f824c_Rooms%20Thumbnail%20(2).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/SuperHeritage")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/EcoLodge" target="_blank">  Eco Lodge room</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" />75  Sq Ft
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

              {/* room2 */}
            <div className="">
          <img
            src="https://cdn.prod.website-files.com/67873acd962a541b51fc1df9/67873fc2bb4b913c4b3e03d2_Rooms%20Thumbnail%20(1).jpg"
            alt="Room"
            className="roomimg2"
            style={{ cursor: "pointer", marginTop: '60px', borderRadius:'8px' }}
            onClick={() => navigate("/room/SuperHeritage")} // ✅ goes to dynamic page
          />
          <div className="room1_text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <h1>
              <a href="/room/LuxuryLoft" target="_blank"> Luxury Loft Room</a>
                         </h1>
                 <div className="room_icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '15px' }}>
                             <img src="https://cdn.prod.website-files.com/6784f8a1cbbb1f7bbe6ce52a/678621269defbf311ba2e386_3-d-view.svg" alt="" /> 90 Sq Ft
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
        </div>      
    </div>
    </>
  );
}

export default Room;
