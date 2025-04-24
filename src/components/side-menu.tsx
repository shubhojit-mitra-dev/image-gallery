import { Heart, Image } from "lucide-react";
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

const items = [
    {
        title: "Gallery",
        url: "/gallery",
        icon: Image,
    },
    // {
    //     title: "Albums",
    //     url: "/albums",
    //     icon: Folder,
    // },
    {
        title: "Favorites",
        url: "/favorites",
        icon: Heart,
    },
]

export default function SideMenu() {
    return (
        <Sidebar variant="floating" className="mt-16 h-[90vh] w-[250px]">
            <SidebarHeader className="mt-5">
                <h2 className="mb-2 text-2xl ml-5 font-extrabold tracking-tight">
                    Manage
                </h2>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="flex flex-col">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="text-xl px-5 py-5 hover:bg-accent">
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}