import { useLocation } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar'
import { BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react'

const SidebarContent = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath)

  return (
    <Sidebar >
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" link="/" alert  active={currentPath === '/'}/>
        <SidebarItem icon={<BarChart3 size={20} />} text="Reports" link="/reports" active={currentPath === '/reports'} />
        <SidebarItem icon={<UserCircle size={20} />} text="users" link="/users" active={currentPath === '/users'}/>
        <SidebarItem icon={<Boxes size={20} />} text="Boxes" link="/boxes" active={currentPath === '/boxes'}/>
        <SidebarItem icon={<Package size={20} />} text="Search" link="/search" active={currentPath === '/seacrh'}/>
        <SidebarItem icon={<Receipt size={20} />} text="Payments" link="/payments" active={currentPath === '/payments'}/>
        <hr className='my-3'/>
        <SidebarItem icon={<Settings size={20} />} text="Settings" link="/settings" active={currentPath === '/settings'}/>
        <SidebarItem icon={<LifeBuoy size={20} />} text="Tools" link="/tools" active={currentPath === '/tols'}/>
    </Sidebar>
  )
}

export default SidebarContent

