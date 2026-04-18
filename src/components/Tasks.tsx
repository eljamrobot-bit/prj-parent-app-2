import { motion } from "motion/react";
import { CheckCircle2, MoreHorizontal, School, ShoppingBasket, Plus, Leaf } from "lucide-react";
import { cn } from "../lib/utils";

export default function Tasks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-32"
    >
      <header>
        <p className="text-on-surface-variant font-medium text-sm tracking-widest uppercase mb-2">Daily Coordination</p>
        <h2 className="text-5xl font-extrabold text-on-surface tracking-tighter">Tasks</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-8 space-y-12">
          {/* Active Tasks */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold tracking-tight">Active Tasks</h3>
                <span className="bg-surface-container text-on-surface-variant text-[11px] font-bold px-2 py-0.5 rounded-full">4</span>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-1">
              <TaskItem
                title="Renew homeowners insurance"
                tags={[
                  { label: "Urgent", color: "text-error bg-error-container/20" },
                  { label: "Admin", color: "text-on-surface-variant bg-surface-container" }
                ]}
                due="Today"
                accent="border-tertiary"
              />
              <TaskItem
                title="Pick up dry cleaning"
                tags={[
                  { label: "Errands", color: "text-on-surface-variant bg-surface-container" }
                ]}
                due="4:00 PM"
                accent="border-secondary"
              />
              <TaskItem
                title="Liam's soccer registration"
                tags={[
                  { label: "Liam", color: "text-primary bg-primary-container/40" }
                ]}
                due="Fri"
                accent="border-on-tertiary-fixed-variant"
              />
            </div>
          </div>

          {/* School Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <School className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold tracking-tight">School Projects</h3>
                <span className="bg-surface-container text-on-surface-variant text-[11px] font-bold px-2 py-0.5 rounded-full">2</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard
                tag="Science Fair"
                tagColor="bg-tertiary-container text-on-tertiary-container"
                progress={80}
                title="Solar System Model"
                desc="Final painting and wiring the LED sun."
                accent="border-tertiary"
              />
              <ProjectCard
                tag="History"
                tagColor="bg-surface-container text-on-surface-variant"
                progress={10}
                title="Family Tree Poster"
                desc="Interview grandparents about lineage."
                accent="border-primary"
              />
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-low rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <ShoppingBasket className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold tracking-tight">Shopping List</h3>
              </div>
              <button className="text-primary hover:text-primary-dim text-xs font-bold uppercase tracking-wider">Clear</button>
            </div>
            <div className="space-y-3">
              <ShoppingItem label="Oat milk (unsweetened)" />
              <ShoppingItem label="Greek yogurt" />
              <ShoppingItem label="Fresh basil and pine nuts" />
              <ShoppingItem label="Whole grain bread" />
              <div className="pt-4 mt-4 border-t border-outline-variant/15">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-surface-container-lowest border-none rounded-lg py-2 pl-3 pr-10 text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-outline"
                    placeholder="Add item..."
                  />
                  <Plus className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold text-on-surface mb-2">Focus Session</h4>
              <p className="text-xs text-on-surface-variant mb-4">3 tasks remaining for today. You're doing great!</p>
              <div className="flex -space-x-2">
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJCKL_6kjolvvToppqLeWeYlFCrWzevzqxhESDl3be-uifu-NQFlRJLNMdtMUKNMrO9UHGz5xdFTPuYXSwQ6u3zSvZhGDSustPfY_A5ERgqdzLbN6x6EdAvNtpq37ani6uPMHdaMYxw5dlErL6lYPzxcoGbSBPyKXIYetUN504wEkb945L1dPMNaYbkP83j1yMCzwuEBvIDtgXhqpUDM9cwe_VfjVjqR3rZKfsNtuV-zdxZCKkdHu7A4soB_049j-Gpo4wzM95ho" />
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJCKL_6kjolvvToppqLeWeYlFCrWzevzqxhESDl3be-uifu-NQFlRJLNMdtMUKNMrO9UHGz5xdFTPuYXSwQ6u3zSvZhGDSustPfY_A5ERgqdzLbN6x6EdAvNtpq37ani6uPMHdaMYxw5dlErL6lYPzxcoGbSBPyKXIYetUN504wEkb945L1dPMNaYbkP83j1yMCzwuEBvIDtgXhqpUDM9cwe_VfjVjqR3rZKfsNtuV-zdxZCKkdHu7A4soB_049j-Gpo4wzM95ho" />
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] font-bold text-on-primary-container border-2 border-surface">+2</div>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Leaf className="w-16 h-16 text-primary fill-primary" />
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed bottom-10 right-10 z-50">
        <button className="flex items-center gap-3 bg-gradient-to-br from-[#615e57] to-[#55524c] text-[#fdf7ee] px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 group">
          <Plus className="group-hover:rotate-90 transition-transform" />
          <span className="font-bold tracking-tight">Add Task</span>
        </button>
      </div>
    </motion.div>
  );
}

function TaskItem({ title, tags, due, accent }: any) {
  return (
    <div className={cn("group/item flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer border-l-4", accent)}>
      <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40 bg-surface-container-low transition-all" />
      <div className="flex-1">
        <p className="text-on-surface font-medium">{title}</p>
        <div className="flex gap-2 mt-1">
          {tags.map((tag: any) => (
            <span key={tag.label} className={cn("text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full", tag.color)}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <span className="text-on-surface-variant text-xs font-medium">{due}</span>
    </div>
  );
}

function ProjectCard({ tag, tagColor, progress, title, desc, accent }: any) {
  return (
    <div className={cn("bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(47,52,48,0.04)] border-l-4", accent)}>
      <div className="flex justify-between items-start mb-4">
        <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded", tagColor)}>{tag}</span>
        <span className="text-on-surface-variant text-xs">{progress}% Done</span>
      </div>
      <h4 className="font-bold text-on-surface mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant mb-4">{desc}</p>
      <div className="w-full bg-surface-container h-1 rounded-full overflow-hidden">
        <div 
          className={cn("h-full", accent.replace('border-', 'bg-'))} 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
}

function ShoppingItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-5 h-5 rounded-md border-2 border-outline-variant group-hover:border-primary transition-colors" />
      <span className="text-on-surface-variant text-sm">{label}</span>
    </div>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <img src={src} className="w-8 h-8 rounded-full border-2 border-surface object-cover" alt="User" />
  );
}
