import WorkspaceCards from "../Components/Workspace/Workspace.jsx";
import { useState } from "react";
import Search from "../Components/Z.Search/Search.jsx"
import "./Locations.css";

function Banglore(){ 
  const [LocName, setLocName] = useState("");

const workspaces = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WROD-qIhnoVEY9H6VNUXT2pE9H_0zWyTwMBrFTOQhdvJS1QYdm3NQwT4Xb5dsIPJmv4&usqp=CAU",
    location: "Koramangala",
    address:"5th Block, Near Forum Mall, Opposite Empire Restaurant",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/nuaxa-workspaces-makarba/nngynb.jpg",
    location: "Whitefield",
    address:"ITPL Main Road, Near SAP Labs, Opposite Big Bazaar",
    individual: 600,
    MeetingRoom: 1000,
  },
  {
    id: 3,
    image: "https://media.licdn.com/dms/image/C5612AQGr2Y8elkOL6Q/article-cover_image-shrink_720_1280/0/1623987921289?e=2147483647&v=beta&t=0d-tTQiKG7j19ZqAksNQaNlhRMU9KsdKUoFL49tjpWo",
    location: "Indiranagar",
    address:"100 Feet Road, Near Toit Brewery, Beside Starbucks",
    individual: 550,
    MeetingRoom: 900,
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/nuaxa-workspaces-makarba/6x8q3v.jpg",
    location: "Electronic City",
    address:"Phase 1, Near Infosys Campus, Opposite Ajmera Infinity ",
    individual: 700,
    MeetingRoom: 1100,
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/awfis-gomtinagar/4vbgf2.jpg",
    location: "Marathahalli",
    address:" Outer Ring Road, Near Kalamandir, Opposite Innovative Multiplex",
    individual: 750,
    MeetingRoom: 1200,
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/my-first-office-waltairmainroad/zyqj4r.jpg",
    location: "MG Road ",
    address:" 14-5-32, Near Trinity Metro Station, Beside Taj MG Road",
    individual: 650,
    MeetingRoom: 1000,
  },
  {
    id: 7,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/nuaxa-workspaces-makarba/nngynb.jpg",
    location: "Hebbal ",
    address:"Bellary Road, Near Manyata Tech Park, Opposite Elements Mall",
    individual: 600,
    MeetingRoom: 900,
  },
  {
    id: 8,
    image: "https://media.licdn.com/dms/image/C5612AQGr2Y8elkOL6Q/article-cover_image-shrink_720_1280/0/1623987921289?e=2147483647&v=beta&t=0d-tTQiKG7j19ZqAksNQaNlhRMU9KsdKUoFL49tjpWo",
    location: "Jayanagar,",
    address:"4th Block, Near Cool Joint, Opposite Bangalore Central Mall",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/nuaxa-workspaces-makarba/6x8q3v.jpg",
    location: "HSR Layout",
    address:"27th Main Road, Near BDA Complex, Opposite Cult Fitness",
    individual: 550,
    MeetingRoom: 850,
  },
  {
    id: 10,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/awfis-gomtinagar/4vbgf2.jpg",
    location: "Rajajinagar",
    address:"Dr. Rajkumar Road, Near Orion Mall, Opposite World Trade Center",
    individual: 650,
    MeetingRoom: 950,
  },
];

const filteredWorkspaces = workspaces.filter((workspace) => {
  return workspace.location.toLowerCase().includes(LocName.toLowerCase());
});

  return (
    <div className="app-container">
      <h1 className="page-title">Choose Workspaces</h1>
      <Search onSearch={setLocName} />
      <div className="workspace-list">
        {filteredWorkspaces.map((workspace) => (
          <WorkspaceCards key={workspace.id} image={workspace.image} location={workspace.location} address={workspace.address}
          individual={workspace.individual} MeetingRoom={workspace.MeetingRoom} />
        ))}
      </div>
      
    </div>
  );
}
export default Banglore
