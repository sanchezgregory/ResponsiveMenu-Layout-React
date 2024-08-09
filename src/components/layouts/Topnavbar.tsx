import { MoreVertical } from "lucide-react"

export function TopNavbar({title = "Dashboard"}) {

    const expanded = false

    return (
      <nav className={`flex justify-between items-centerbg-white py-8 pl-5 transition-all duration-300 ml-1 `}> 
        {/* Contenido del navbar */}
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="border-l flex">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
               flex justify-between items-center
                overflow-hidden transition-all
                ${expanded ? "w-52 ml-3" : "w-0 mr-5"}
                md:w-52 md:ml-3
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    )
  }