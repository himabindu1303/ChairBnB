import WorkspaceCards from "../Components/Workspace/Workspace.jsx";
import { useState } from "react";
import Search from "../Components/Z.Search/Search.jsx"
import "./Locations.css";

function Pune(){
  const [LocName, setLocName] = useState("");
const workspaces = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFHWr6G9rIDgA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657964205716?e=2147483647&v=beta&t=lO0OXg6K30PNpMGl5MO7Rm9kOND8ad758tvWXY-MMkw",
    location: "Hinjewadi",
    address:"Phase 1, Near Wipro Circle, Opp Infosys Campus",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 2,
    image: "https://coworkinged.com/wp-content/uploads/2023/10/Coworking-Spaces-In-Bronx.webp",
    location: "Magarpatta",
    address:"Magarpatta City, Near Amanora Mall, Opp Seasons Mall",
    individual: 600,
    MeetingRoom: 1000,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/my-first-office-waltairmainroad/zyqj4r.jpg",
    location: "Kharadi",
    address:"EON IT Park, Near World Trade Center, Opp Zensar Technologies",
    individual: 550,
    MeetingRoom: 900,
  },
  {
    id: 4,
    image: "https://www.ikeva.com/wp-content/uploads/2024/11/WSR04643-1-scaled.jpg",
    location: "Baner",
    address:"Balewadi High Street, Near Sadanand Hotel, Opp Cummins India",
    individual: 700,
    MeetingRoom: 1100,
  },
  {
    id: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dvC-Wf302fJli6gytuuNhj0EwnWCSY1NVhbbFQNRpzD1i5ArsmzO9YIFvCZnwtP3UXM&usqp=CAU",
    location: "Viman Nagar",
    address:"Phoenix Market City Road, Near Symbiosis College, Opp Hyatt Regency",
    individual: 750,
    MeetingRoom: 1200,
  },
  {
    id: 6,
    image: "https://coworkingers.com/wp-content/uploads/2023/08/DSCE8005.jpg",
    location: "Shivaji Nagar",
    address:"Jangali Maharaj Road, Near Fergusson College, Opp Modern Cafe",
    individual: 650,
    MeetingRoom: 1000,
  },
  {
    id: 7,
    image: "https://img.cofynd.com/images/latest_images_2024/baf514b1f3fb29f14f66233a82d063b73de80c07.webp",
    location: "Koregaon Park",
    address:"Lane No. 5, Near German Bakery, Opp Osho International Resort",
    individual: 600,
    MeetingRoom: 900,
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm_8tQTO8IDbtg3e1bPlxi_LiCCNbiytl0Q&s",
    location: "Yerwada",
    address:"Nagar Road, Near IBM India, Opp Aga Khan Palace",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDcpLgXknNd428-KMLEHws0Ey-zrrOMsX5kG7xb4_WZbfbefYTbydzUZhWspWekCgSXoA&usqp=CAU",
    location: "Wakad",
    address:"Datta Mandir Road, Near Mumbai-Pune Expressway, Opp Sayaji Hotel",
    individual: 550,
    MeetingRoom: 850,
  },
  {
    id: 10,
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFHWr6G9rIDgA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657964205716?e=2147483647&v=beta&t=lO0OXg6K30PNpMGl5MO7Rm9kOND8ad758tvWXY-MMkw",
    location: "Hadapsar",
    address:"Pune-Solapur Road, Near SP Infocity, Opp Magarpatta City",
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
export default Pune
