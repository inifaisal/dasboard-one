import { PropsWithChildren } from 'react'

import Sidebar from '@/components/ui/sidebar/sidebar'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { MainNavbar } from './main-navbar'
import { Input } from './ui/input'
import { ModeToggle } from './mode-toggle'
import { UserNavDropdown } from './use-nav-dropdown'

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNavbar className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <div>
                <Input
                  type="search"
                  placeholder="Search..."
                  className="md:w-[100px] lg:w-[300px]"
                />
              </div>
              <ModeToggle />
              <UserNavDropdown />
            </div>
          </div>
        </div>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <Sidebar />
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={1200} minSize={30}>
          <div className="h-screen">
          {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export { Container }