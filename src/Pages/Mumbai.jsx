import WorkspaceCards from "../Components/Workspace/Workspace.jsx";
import { useState } from "react";
import Search from "../Components/Z.Search/Search.jsx"
import "./Locations.css";

function Mumbai(){
  const [LocName, setLocName] = useState("");
const workspaces = [
  {
    id: 1,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/my-first-office-waltairmainroad/zyqj4r.jpg",
    location: "Bandra Kurla Complex",
    address:"Near MMRDA Grounds, Opp National Stock Exchange",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/nuaxa-workspaces-makarba/nngynb.jpg",
    location: "Andheri East",
    address:"MIDC Road No. 2, Near SEEPZ, Opp L&T Business Park",
    individual: 600,
    MeetingRoom: 1000,
  },
  {
    id: 3,
    image: "https://media.licdn.com/dms/image/C5612AQGr2Y8elkOL6Q/article-cover_image-shrink_720_1280/0/1623987921289?e=2147483647&v=beta&t=0d-tTQiKG7j19ZqAksNQaNlhRMU9KsdKUoFL49tjpWo",
    location: "Nariman Point",
    address:"Marine Drive, Near Trident Hotel, Opp Air India Building",
    individual: 550,
    MeetingRoom: 900,
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/nuaxa-workspaces-makarba/6x8q3v.jpg",
    location: "Lower Parel",
    address:"Senapati Bapat Marg, Near Phoenix Mills, Opp Kamala Mills ",
    individual: 700,
    MeetingRoom: 1100,
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/myhq/image/upload/workspaces/awfis-gomtinagar/4vbgf2.jpg",
    location: "Powai",
    address:"Hiranandani Gardens, Near IIT Bombay, Opp Haiko Mall",
    individual: 750,
    MeetingRoom: 1200,
  },
  {
    id: 6,
    image: "https://assets.iwgplc.com/image/upload/f_auto,q_auto,w_400,h_260,c_fill/CentreImagery/2569/2569_8.jpg",
    location: "Malad West ",
    address:"Mindspace, Near Inorbit Mall, Opp Infinity IT Park",
    individual: 650,
    MeetingRoom: 1000,
  },
  {
    id: 7,
    image: "https://coworker.imgix.net/photos/france/lyon/hq-lyon-part-dieu-plaza/AdobeStock_119025976.jpeg?w=370&h=280&q=90&auto=format,compress&fit=crop&mark=/template/img/wm_icon.png&markscale=5&markalign=center,middle",
    location: "Goregaon East ",
    address:"NESCO IT Park, Near Western Express Highway, Opp Bombay Exhibition Centre",
    individual: 600,
    MeetingRoom: 900,
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPf13l8hcfXiUQkmVIjFxsJjMF1lX_2Ev6MHBrOOfLM5tDPIbZxfJnhayW4IlkDJpUWI&usqp=CAU",
    location: "Vikhroli West",
    address:"LBS Road, Near Godrej One, Opp R City Mall",
    individual: 500,
    MeetingRoom: 800,
  },
  {
    id: 9,
    image: "https://s3.ap-south-1.amazonaws.com/worker-app/details_images/256/256_116411.jpeg",
    location: "Worli",
    address:"Annie Besant Road, Near Atria Mall, Opp Nehru Planetarium",
    individual: 550,
    MeetingRoom: 850,
  },
  {
    id: 10,
    image: "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1688967976/pvgl5vyboytznji6ewds.webp",
    location: "Thane West",
    address:"Hiranandani Estate, Near Ghodbunder Road, Opp Viviana Mall",
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
export default Mumbai
