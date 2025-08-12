"use client";

import { useState } from "react";
import SideBar from "./SideBar";

export default function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-slate-50"
              aria-label="Open menu"
            >
              {/* hamburger */}
              <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <span className="font-semibold tracking-tight">Admin Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            {/* placeholder actions */}
            <button className="hidden sm:inline-flex rounded-lg border px-3 py-1.5 text-sm hover:bg-slate-50">
              New
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600" />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 h-14">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-slate-50"
                aria-label="Close menu"
              >
                {/* x icon */}
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="p-3">
              <SideBar variant="mobile" onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
