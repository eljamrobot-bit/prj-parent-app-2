/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { LayoutDashboard, Calendar as CalendarIcon, CheckCircle2, Users, Search } from "lucide-react";
import { cn } from "./lib/utils";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";
import Tasks from "./components/Tasks";
import Profiles from "./components/Profiles";

type Tab = "dashboard" | "calendar" | "tasks" | "profiles";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:bg-surface-container p-2 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-on-surface tracking-tight">The Living Archive</h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <NavHeaderLink active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>Dashboard</NavHeaderLink>
              <NavHeaderLink active={activeTab === 'calendar'} onClick={() => setActiveTab('calendar')}>Calendar</NavHeaderLink>
              <NavHeaderLink active={activeTab === 'profiles'} onClick={() => setActiveTab('profiles')}>Profiles</NavHeaderLink>
            </nav>
            <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-surface-container shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIHasp0nBQCz84G_UQYW0iXKJBC1B0Uy_zij4Je-B0I0FqQwO7N9V5VDw7afgtkcg1ddRfGxxHDWbY3WuzN_nKEOP9KKy2vXgLT86hvMl3hR7Q61oNulqUUcpeEsOF6-Qc8sRqQeENFYQ5d-iC1rzmpAXNBA2Rsj10U_AsiLKO6uo5JKjtD09eBVpJRrOPDpE2Qbyy-7wJRrOPDpE2Qbyy-7wJrE4euMCUgzaim9Vj9v-I-QQHhpenf6mCkt4npgDct9-bjjegvOcbq6isCSfTwppQ7y4" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-surface-container" />
      </header>

      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-6 pt-12">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "tasks" && <Tasks />}
        {activeTab === "profiles" && <Profiles />}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 glass border-t border-outline-variant/15 px-4 pb-6 pt-3 flex justify-around items-center">
        <BottomNavItem
          active={activeTab === "dashboard"}
          onClick={() => setActiveTab("dashboard")}
          icon={<LayoutDashboard className="w-6 h-6" />}
          label="Dashboard"
        />
        <BottomNavItem
          active={activeTab === "calendar"}
          onClick={() => setActiveTab("calendar")}
          icon={<CalendarIcon className="w-6 h-6" />}
          label="Calendar"
        />
        <BottomNavItem
          active={activeTab === "tasks"}
          onClick={() => setActiveTab("tasks")}
          icon={<CheckCircle2 className="w-6 h-6" />}
          label="Tasks"
        />
        <BottomNavItem
          active={activeTab === "profiles"}
          onClick={() => setActiveTab("profiles")}
          icon={<Users className="w-6 h-6" />}
          label="Profiles"
        />
      </nav>
    </div>
  );
}

function NavHeaderLink({ children, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-semibold text-lg tracking-tight transition-colors",
        active ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
      )}
    >
      {children}
    </button>
  );
}

function BottomNavItem({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center px-5 py-2 rounded-full transition-all duration-300",
        active ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"
      )}
    >
      {icon}
      <span className="text-[11px] font-medium uppercase tracking-wider mt-0.5">{label}</span>
    </button>
  );
}
