import { AppSidebar } from "@/components/sidebar";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function HomeLayout({ children }) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar></AppSidebar>
        {children}
      </SidebarProvider>
    </main>
  );
}
