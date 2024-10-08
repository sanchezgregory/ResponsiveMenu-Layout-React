import { ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState, useEffect } from "react"
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Link } from "react-router-dom";

type SidebarProps = {
  children: React.ReactNode
}
type ItemProps = {
  icon: React.ReactNode,
  text: string,
  link: string,
  active?: boolean,
  alert?: boolean
}
const SidebarContext = createContext()

export default function Sidebar(props: SidebarProps) {

  const width = useWindowWidth();
  const [expanded, setExpanded] = useState(false);
  const [manualExpand, setManualExpand] = useState(null);


  useEffect(() => {
    setExpanded(width >= 768); // 768px es típicamente el breakpoint 'md' en Tailwind
  }, [width]);

  const toggleExpand = () => {
    setManualExpand(prev => prev === null ? !expanded : !prev);
    setExpanded(prev => !prev);
  };
  
  return (
    
    <aside className={`h-screen transition-all duration-300 ${expanded ? 'w-64' : ''}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center my-5">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={toggleExpand}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{props.children}</ul>
        </SidebarContext.Provider>

        {expanded && <div className="bg-gray-50 p-3 text-gray-600 text-sm">© 2022 Company, Inc</div>}
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, link, alert }: ItemProps) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      <Link to={link} className="flex items-center w-full">
        {icon}

        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  )
}