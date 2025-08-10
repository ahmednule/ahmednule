import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Home, User, Code, Mail, Github, Linkedin, Youtube, Download } from "lucide-react"
import Link from "next/link"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: Code },
  { title: "Contact", url: "/contact", icon: Mail },
]

const socialLinks = [
  { title: "Github", url: "https://github.com/ahmednule", icon: Github },
  { title: "LinkedIn", url: "https://linkedin.com/in/ahmednule", icon: Linkedin },
  { title: "YouTube", url: "https://youtube.com/", icon: Youtube },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">Ahmed Nule</h2>
          <div className="mt-2 inline-block rounded-full border border-purple-500 px-4 py-1">
            <span className="text-sm text-purple-300">Software Engineer</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-base font-medium mb-4">Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 text-base">
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-6" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-base font-medium mb-4">Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12 text-base">
                    <Link href={item.url} target="_blank" className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <Link href="/files/ahmednule.pdf" target="_blank">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Download className="mr-2 h-4 w-4" />
          Download CV
        </Button></Link>
      </SidebarFooter>
    </Sidebar>
  )
}
