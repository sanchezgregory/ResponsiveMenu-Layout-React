import { TopNavbar } from './Topnavbar'
import SidebarContent from './SidebarContent'

type LayoutPros = {
  title: string,
  children: React.ReactNode
}
export default function Layout(props: LayoutPros) {
 
  return (
    <div className="flex h-screen bg-gray-100">
        <SidebarContent />
        <div className="flex-1 flex flex-col">
            <TopNavbar title={props.title}/>
            <main className="flex-1 p-8 rounded-xl bg-white overflow-y-auto">
                {props.children}
            </main>
        </div>
    </div>
  )
}