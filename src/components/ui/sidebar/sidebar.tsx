import { useState } from 'react'
import {
  ResizablePanel,
} from "@/components/ui/resizable"
import { SidebarItem } from '@/components/ui/sidebar/sidebar-item'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
      <ResizablePanel
        defaultSize={265}
        collapsedSize={80}
        collapsible={true}
        minSize={5}
        maxSize={10}
        onCollapse={(collapsed: boolean) => {
          setIsCollapsed(collapsed)
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            collapsed
          )}`
        }}
        className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
      >
        <SidebarItem
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              variant: "default",
            },
            {
              title: "Widgets",
              label: "9",
              variant: "ghost",
            },
            {
              title: "Buttons",
              label: "",

              variant: "ghost",
            },
            {
              title: "Forms",
              label: "23",

              variant: "ghost",
            },
            {
              title: "Icons",
              label: "",

              variant: "ghost",
            },
            {
              title: "Components",
              label: "",

              variant: "ghost",
            },
          ]}
        />
        <Separator />
        <SidebarItem
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Chart",

              variant: "ghost",
            },
            {
              title: "Calender",
              variant: "ghost",
            },
            {
              title: "Maps",
              variant: "ghost",
            },
            {
              title: "Data Tables",
              variant: "ghost",
            },
            {
              title: "Page",
              variant: "ghost",
            },
          ]}
        />
      </ResizablePanel>
  )
}