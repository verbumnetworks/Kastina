import SideBar from "@/app/components/dashboard/SideBar";
import TopBar from "@/app/components/dashboard/TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-slate-50">
      <TopBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 py-6">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block col-span-3 lg:col-span-2">
            <SideBar variant="desktop" />
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="rounded-2xl border bg-white shadow-sm">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
