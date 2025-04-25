import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideMenu from "@/components/side-menu";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixilary",
  description: "An Image Gallery using Next.js and Cloudinary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="border-b bg-background fixed top-0 left-0 w-full z-50">
            <div className="flex h-16 items-center px-12 mx-auto">
              <Link href={"/"} className="text-2xl lg:text-3xl font-extrabold tracking-tighter uppercase">{"<Pixinary />"}</Link>
              <div className="ml-auto flex items-center space-x-4">
                <ModeToggle />
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/157738162?v=4" alt="@shadcn" title="Shubhojit Mitra" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </nav>
          <div className="flex">
            {/* <SideMenu /> */}
            <SidebarProvider defaultOpen={false}>
              <SideMenu />
              <SidebarTrigger className="fixed top-0 left-0 mt-5 ml-3 z-50" />
              <main className="w-full p-4 pt-8 mt-16">
                {children}
              </main>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
