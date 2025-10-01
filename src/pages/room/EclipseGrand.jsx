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
      room:'Room '
    },
    RoomDiamond: {
      title: "Room Diamond",
      price: "$250/night",
      bed: "Queen size",
      facilities: ["WiFi", "Smart TV", "Mini Bar", "Jacuzzi"],
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
    <div style={{ padding: "20px", marginTop:'80px' }}>
      <h1>{details.title}</h1>
      <p><strong>Price:</strong> {details.price}</p>
      <p><strong>Bed:</strong> {details.bed}</p>
      <p><strong>Facilities:</strong></p>
      <ul>
        {details.facilities.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomDetails;
