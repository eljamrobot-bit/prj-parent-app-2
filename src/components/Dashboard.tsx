import { motion } from "motion/react";
import { Cookie, Trophy, Utensils, StickyNote, PartyPopper, PlusCircle, Plus } from "lucide-react";
import { cn } from "../lib/utils";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-32"
    >
      <section>
        <p className="text-on-surface-variant font-medium tracking-wide mb-2 uppercase text-xs">
          Monday, October 14
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-4">
          The Family Hub
        </h2>
        <div className="h-1 w-24 bg-primary rounded-full" />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Today at a Glance */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_-4px_24px_rgba(47,52,48,0.04)] outline outline-outline-variant/15 outline-1">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight">Today at a Glance</h3>
              <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                3 Events
              </span>
            </div>
            <div className="space-y-4">
              <ActivityCard
                person="Leo"
                time="8:30 AM"
                title="Bake Sale Preparation"
                icon={<Cookie className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />}
                accentClass="bg-error"
              />
              <ActivityCard
                person="Maya"
                time="4:30 PM"
                title="Soccer Practice"
                icon={<Trophy className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />}
                accentClass="bg-secondary"
              />
              <ActivityCard
                person="Family"
                time="7:00 PM"
                title="Weekly Meal Prep"
                icon={<Utensils className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />}
                accentClass="bg-tertiary"
              />
            </div>
          </div>

          {/* Shared Notes */}
          <div className="bg-surface-container p-8 rounded-xl outline outline-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <StickyNote className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold tracking-tight">Shared Notes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Note
                title="Grocery List"
                content="Oat milk, avocados, sourdough bread, cinnamon sticks..."
              />
              <Note
                title="Weekend Ideas"
                content="Hiking at Miller Creek or the new science museum exhibit."
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-6">
          <button className="w-full group bg-primary hover:bg-primary-dim text-on-primary py-6 px-8 rounded-xl flex items-center justify-between transition-all active:scale-95 shadow-lg shadow-primary/10">
            <div className="text-left">
              <span className="block text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mb-1">Action</span>
              <span className="text-xl font-bold">Add Activity</span>
            </div>
            <PlusCircle className="w-8 h-8" />
          </button>

          <div className="bg-secondary-container p-6 rounded-xl">
            <h3 className="text-lg font-bold text-on-secondary-container mb-4 flex items-center gap-2">
              <PartyPopper className="w-5 h-5" />
              Holidays
            </h3>
            <div className="space-y-4">
              <Holiday date="OCT 31" title="Halloween" diff="17 days away" />
              <Holiday date="NOV 28" title="Thanksgiving" diff="42 days away" />
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWRpFaOOX15gW7LRMqrfJ8eUzPHnlHvnjvy1lI83BuVjQpe_3YmxOHA5AIUEzGrjas-84z1qgjQpJBKEBNR6o6xWj6WbgUav_OJpByFePMyvssHmBoO4AL03OCOIBtOgTdW1cd3R4ZO4GkMTwLLaxH0ywnbZwDaeHZua98SXSGZC7h2u3n3BOQnlbB3uaKachQeZPAg99mNNxESCgkQpXY3NpHFqAMoiHSH96nJciNRZX6XzrFyC1zDHlQuvJX2-xYCei-RNciYgs"
              alt="Sunday Picnic"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Last Captured</p>
              <h4 className="text-white font-bold text-lg">Sunday Picnic</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActivityCard({ person, time, title, icon, accentClass }: any) {
  return (
    <div className="group flex items-center p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-highest transition-colors cursor-pointer relative overflow-hidden">
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", accentClass)} />
      <div className="flex-1 ml-4">
        <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
          {person} • {time}
        </p>
        <h4 className="text-lg font-semibold text-on-surface">{title}</h4>
      </div>
      {icon}
    </div>
  );
}

function Note({ title, content }: any) {
  return (
    <div className="bg-surface-container-lowest p-5 rounded-lg border-l-2 border-primary-container">
      <h5 className="font-bold text-sm mb-2">{title}</h5>
      <p className="text-on-surface-variant text-sm line-clamp-2">{content}</p>
    </div>
  );
}

function Holiday({ date, title, diff }: any) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-bold text-on-secondary-container">{title}</p>
        <p className="text-xs text-on-secondary-container/60">{diff}</p>
      </div>
      <span className="text-[10px] font-bold bg-white/40 px-2 py-1 rounded">
        {date}
      </span>
    </div>
  );
}
