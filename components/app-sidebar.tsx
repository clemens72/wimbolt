"use client"

import * as React from "react"

import { navUserItems, navMainItems } from "@/lib/nav-items"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navUserItems.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMainItems} />
        <NavProjects projects={navUserItems.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navUserItems} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
