import Sidebar, { SidebarItem } from './Sidebar'
import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react'

const SidebarContent = () => {

  return (
    <Sidebar >
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert />
        <SidebarItem icon={<BarChart3 size={20} />} text="Reports" active />
        <SidebarItem icon={<UserCircle size={20} />} text="users" />
        <SidebarItem icon={<Boxes size={20} />} text="Boxes" />
        <SidebarItem icon={<Package size={20} />} text="Search" />
        <SidebarItem icon={<Receipt size={20} />} text="Payments" />
        <hr className='my-3'/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Tools" />
    </Sidebar>
  )
}

export default SidebarContent

