import './Team.css'
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";    
const Team = () => {
  const [sections, setSections] = useState({ section1: [], section2: [] });

        useEffect(() => {
            document.title = "Lurofexi - Team ";

                fetch("/Teamdata.json")
      .then((res) => res.json())
      .then((data) => setSections(data))
      .catch((err) => console.error("Error loading blog data:", err));
  }, []);

      
    return(
        <>  
     <div className="Team-page">
    <Navbar />

    <section className='member'>
      <p>(Our Team)</p>
    <h1>Team Members</h1>
    </section>

<section className="Teams">
  <div className="Team">
    {sections.section1.map((team) => (
      <div key={team.id} className="blog1">
        <a href={team.link}>
          <img src={team.image} alt={team.title} />
        </a>
        <div className="team-text" onClick={() => navigate(team.link)}>
          <a href={team.link}>{team.title}</a> <br />
          <span>{team.desc}</span>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 2 */}
      <section className="Teams">
  <div className="Team" style={{marginTop:'22px'}}>
    {sections.section2.map((team) => (
      <div key={team.id} className="blog1">
        <a href={team.link}>
          <img src={team.image} alt={team.title} />
        </a>
        <div className="team-text" onClick={() => navigate(team.link)}>
          <a href={team.link}>{team.title}</a> <br />
          <span>{team.desc}</span>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
        </>
    );
};
export default Team;