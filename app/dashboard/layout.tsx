import type { Metadata } from "next";
import "../globals.css";
import SideBar from "@/app/components/dashboard/SideBar";
import TopBar from "@/app/components/dashboard/TopBar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import Toast from "../components/toast";

export const metadata: Metadata = {
  title: "Catholic Diocese of Kastina",
  description: "Catholic Diocese of Kastina",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const session: any = await getServerSession(authOptions);
  if (!session) return null;
  const role = session?.user?.role;

  return (
    <html lang="en">
      <body className={`$ antialiased`}>
        <div className="min-h-dvh bg-slate-300">
          <TopBar role={role} />
          <Toast />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-6 py-6">
              {/* Sidebar (desktop) */}{" "}
              <aside className="hidden md:block col-span-3 lg:col-span-2">
                <SideBar variant="desktop" role={role} />
              </aside>
              {/* Main */}
              <main className="col-span-12 md:col-span-9 lg:col-span-10">
                <div className="rounded-2xl border bg-white shadow-sm">
                  {children}
                </div>
              </main>{" "}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}



// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-dvh bg-slate-50">
//       <TopBar />
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-12 gap-6 py-6">
//           {/* Sidebar (desktop) */}
//           <aside className="hidden md:block col-span-3 lg:col-span-2">
//             <SideBar variant="desktop" />
//           </aside>

//           {/* Main */}
//           <main className="col-span-12 md:col-span-9 lg:col-span-10">
//             <div className="rounded-2xl border bg-white shadow-sm">{children}</div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }
