import WorkspaceCards from "../Components/Workspace/Workspace.jsx";
import { useState } from "react";
import Search from "../Components/Z.Search/Search.jsx"
import "./Locations.css";

function Gurugram(){  
  const [LocName, setLocName] = useState("");

const workspaces = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFHWr6G9rIDgA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657964205716?e=2147483647&v=beta&t=lO0OXg6K30PNpMGl5MO7Rm9kOND8ad758tvWXY-MMkw",
    location: "Cyber City",
    address:"Near NH-8, Opp IndusInd Bank Cyber City Metro Station",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 2,
    image: "https://coworkinged.com/wp-content/uploads/2023/10/Coworking-Spaces-In-Bronx.webp",
    location: "One Horizon Center",
    address:"Golf Course Road, Near Sector 43, Opp Horizon Plaza",
    individual: 600,
    MeetingRoom: 1000,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/my-first-office-waltairmainroad/zyqj4r.jpg",
    location: "Udyog Vihar",
    address:"Phase 4, Near Shankar Chowk, Opp Trident Hotel",
    individual: 550,
    MeetingRoom: 900,
  },
  {
    id: 4,
    image: "https://www.ikeva.com/wp-content/uploads/2024/11/WSR04643-1-scaled.jpg",
    location: "Global Business Park",
    address:"MG Road, Near Guru Dronacharya Metro Station, Opp Sahara Mall",
    individual: 700,
    MeetingRoom: 1100,
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dvC-Wf302fJli6gytuuNhj0EwnWCSY1NVhbbFQNRpzD1i5ArsmzO9YIFvCZnwtP3UXM&usqp=CAU",
    location: "Vatika Business Park",
    address:"Sohna Road, Near Orchid Business Park, Opp Subhash Chowk",
    individual: 750,
    MeetingRoom: 1200,
  },
  {
    id: 6,
    image: "https://coworkingers.com/wp-content/uploads/2023/08/DSCE8005.jpg",
    location: "Emaar Digital Greens",
    address:"Golf Course Extension Road, Near Sector 61, Opp Rapid Metro Station",
    individual: 650,
    MeetingRoom: 1000,
  },
  {
    id: 7,
    image: "https://img.cofynd.com/images/latest_images_2024/baf514b1f3fb29f14f66233a82d063b73de80c07.webp",
    location: "Spaze iTech Park",
    address:"Sohna Road, Near Sector 49, Opp Omaxe Mall",
    individual: 600,
    MeetingRoom: 900,
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm_8tQTO8IDbtg3e1bPlxi_LiCCNbiytl0Q&s",
    location: "Time Tower",
    address:"MG Road, Near IFFCO Chowk, Opp MGF Metropolis Mall",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcpLgXknNd428-KMLEHws0Ey-zrrOMsX5kG7xb4_WZbfbefYTbydzUZhWspWekCgSXoA&usqp=CAU",
    location: "DLF Corporate Greens",
    address:"Sector 74A, Near NH-8, Opp AIPL Joy Square",
    individual: 550,
    MeetingRoom: 850,
  },
  {
    id: 10,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFHWr6G9rIDgA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657964205716?e=2147483647&v=beta&t=lO0OXg6K30PNpMGl5MO7Rm9kOND8ad758tvWXY-MMkw",
    location: "World Tech Park",
    address:"Sector 30, Near Signature Tower, Opp Unitech Business Park",
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
export default Gurugram
