import { TopNavbar } from '../ui/Topnavbar'
import SidebarContent from '../ui/SidebarContent'

export default function Layout({ title, children }) {
 
  return (

    <div className="flex h-screen bg-gray-100">
        <SidebarContent />
        <div className="flex-1 flex flex-col">
            <TopNavbar title={title}/>
            <main className="flex-1 p-8 rounded-xl bg-white overflow-y-auto">
                {children}
            </main>
        </div>
    </div>
  )
}