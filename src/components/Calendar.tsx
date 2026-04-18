import { motion } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

export default function Calendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const prevMonthDays = [25, 26, 27, 28, 29, 30];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-32"
    >
      <section>
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">
          October 2023
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface">
          Month in Bloom
        </h2>
      </section>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Calendar Grid */}
        <div className="flex-1">
          <div className="bg-surface-container-low rounded-xl p-8 shadow-[0_4px_24px_rgba(47,52,48,0.02)]">
            <div className="grid grid-cols-7 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-outline-variant/10 rounded-lg overflow-hidden border border-outline-variant/15">
              {prevMonthDays.map(day => (
                <div key={`prev-${day}`} className="bg-surface h-24 md:h-32 p-3 text-on-surface-variant/40 text-sm font-medium">
                  {day}
                </div>
              ))}
              {days.map(day => (
                <div
                  key={day}
                  className={cn(
                    "bg-surface h-24 md:h-32 p-3 text-on-surface text-sm font-medium group hover:bg-surface-container transition-colors cursor-pointer",
                    day === 6 && "bg-primary-container/20 relative"
                  )}
                >
                  <span className={cn(day === 6 && "text-primary font-bold")}>{day}</span>
                  {day === 6 && <div className="absolute inset-0 border-2 border-primary/20 pointer-events-none" />}
                  <div className="flex gap-1 mt-2">
                    {day === 1 && <Dot color="bg-tertiary" />}
                    {day === 3 && (
                      <>
                        <Dot color="bg-secondary" />
                        <Dot color="bg-error" />
                      </>
                    )}
                    {day === 6 && (
                      <>
                        <Dot color="bg-secondary" />
                        <Dot color="bg-tertiary" />
                      </>
                    )}
                    {day === 11 && <Dot color="bg-error" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Day Details */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-24">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-on-surface">Friday, 6th</h3>
              <button className="bg-primary text-on-primary rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-primary-dim active:scale-95 transition-all">
                Add New
              </button>
            </div>
            <div className="space-y-6">
              <ActivityItem
                time="3:45 PM • Pool"
                title="Swim Class"
                desc="Level 3 • Oliver's turn for carpool."
                accent="bg-secondary"
              />
              <ActivityItem
                time="All Day • School"
                title="Homework Due"
                desc="Science Fair Project: Submit the first draft of the hypothesis."
                accent="bg-tertiary"
              />

              <div className="pt-8 border-t border-outline-variant/10">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Family Legend</h5>
                <div className="grid grid-cols-2 gap-4">
                  <LegendItem color="bg-secondary" label="Maya" />
                  <LegendItem color="bg-tertiary" label="Oliver" />
                  <LegendItem color="bg-error" label="Important" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function Dot({ color }: { color: string }) {
  return <span className={cn("w-1.5 h-1.5 rounded-full", color)} />;
}

function ActivityItem({ time, title, desc, accent }: any) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_2px_12px_rgba(47,52,48,0.04)] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", accent)} />
      <div className="flex justify-between items-start mb-4">
        <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant">{time}</span>
        <MoreHorizontal className="w-4 h-4 text-outline" />
      </div>
      <h4 className="text-lg font-bold text-on-surface mb-1">{title}</h4>
      <p className="text-sm text-on-surface-variant">{desc}</p>
    </div>
  );
}

function LegendItem({ color, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("w-2 h-2 rounded-full", color)} />
      <span className="text-xs font-medium text-on-surface-variant">{label}</span>
    </div>
  );
}
