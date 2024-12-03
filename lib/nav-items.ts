import { Home, PenTool, Calendar, Scroll, User, AudioWaveform, Command, Disc3, DiscAlbum, FerrisWheel, GalleryVerticalEnd, Settings, type LucideIcon } from "lucide-react";

export const navMobileItems =
    [
        { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
        { title: "Log", url: "/log", icon: PenTool, isActive: true },
        { title: "Calendar", url: "/calendar", icon: Calendar, isActive: true },
        { title: "Knowledge", url: "/knowledge", icon: Scroll, isActive: true },
        { title: "Account", url: "/account", icon: User, isActive: true }
    ];

export const navUserItems = {

    name: "Test User", email: "testuser@test.com", avatar: "./logo.png",
    teams: [
        { name: "Test User", logo: GalleryVerticalEnd, plan: "Individual", },
        { name: "Red Healer", logo: AudioWaveform, plan: "Band", },
        { name: "Class Acts Entertainment", logo: Command, plan: "Agency", },
    ],
    projects: [
        { name: "Recording the EP", url: "#", icon: Disc3, },
        { name: "Album Release Show", url: "#", icon: DiscAlbum, },
        { name: "Festival Booking 2025", url: "#", icon: FerrisWheel, },
    ],
}

export const navMainItems = [
    { 
        title: "Dashboard", url: "/dashboard", icon: Home, isActive: true, 
        items: [

        ],
    },
    {
        title: "Log", url: "/log", icon: PenTool, isActive: true,
        items: [
            { title: "Published", url: "/log/published", },
            { title: "Create New", url: "/log/new", },
            { title: "Drafts", url: "/log/drafts", },
        ],
    },
    {
        title: "Calendar", url: "/calendar", icon: Calendar, isActive: true,
        items: [
            { title: "Tasks", url: "/calendar/tasks", },
            { title: "Events", url: "/calendar/events", },
            { title: "Availability", url: "/calendar/availability", },
        ],
    },
    {
        title: "Knowledge", url: "/knowledge", icon: Scroll, isActive: true,
        items: [
            { title: "Categories", url: "/knowledge/categories", },
            { title: "Contribute", url: "/knowledge/contribute", }
        ],
    },
    {
        title: "Settings", url: "/account", icon: Settings, isActive: true,
        items: [
            { title: "Account", url: "/account", },
            { title: "Roles", url: "/account/roles", },
            { title: "Memberships", url: "/account/memberships", },
            { title: "Report Bugs", url: "/account/bugs", },
        ],
    },
]