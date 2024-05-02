import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import logo from "../../assets/hmain.png";
import profile from "../../assets/hlogo.png";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
import { LayoutDashboard, Heart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { RiMegaphoneLine } from "react-icons/ri";
import { RiWallet3Line } from "react-icons/ri";

const SidebarContext = createContext();

const sidebarItems = [
  { icon: <LayoutDashboard size={24} />, text: "Dashboard", path: "/admin" },
  { icon: <FaRegUser size={24} />, text: "Create Campaign", path: "/createcampaign" },
  { icon: <RiMegaphoneLine size={24} />, text: "Campaign List", path: "/campaignlist" },
  { icon: <Heart size={24} />, text: "Influencer List", path: "/influencerlist" },
  { icon: <RiWallet3Line size={24} />, text: "Request Influencer", path: "/requestinfluencer" },

];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-[#272323] border-r shadow-sm">
          <div className="p-4 pb-4 flex justify-between items-center border-b border-gray-400">
            <Link to="/">
              <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
            </Link>
            <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-[#272323] hover:bg-gray-800 text-white">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} text={item.text} alert={item.alert} active={item.active} path={item.path} />
              ))}
            </ul>
          </SidebarContext.Provider>

          <div className={` flex p-3 ${expanded ? "invisible" : "visible"}`}>
            <Link to="/">
              <img src={profile} className="w-10 h-10 rounded-md " />
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}

export function SidebarItem({ icon, text, active, alert, path }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li className={`relative font-Montserrat flex items-center py-2 px-3 my-3 font-medium rounded-md cursor-pointer transition-colors group ${active ? " text-[#A8A79A] hover:text-white" : "hover:bg-[#403bbf] text-[#A8A79A] hover:text-white"}`}>
      <Link to={path} >{icon}</Link> {/* Use Link instead of span */}
      <Link to={path} className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</Link> {/* Use Link instead of span */}
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

        </div>
      )}

      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  )
}
