import { motion } from "motion/react";
import { User, Shield, Bell, Heart } from "lucide-react";
import { cn } from "../lib/utils";

export default function Profiles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 pb-32"
    >
      <header>
        <p className="text-on-surface-variant font-medium text-sm tracking-widest uppercase mb-2">Family Members</p>
        <h2 className="text-5xl font-extrabold text-on-surface tracking-tighter">Profiles</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard
          name="Sarah Archer"
          role="Organizer"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuCIHasp0nBQCz84G_UQYW0iXKJBC1B0Uy_zij4Je-B0I0FqQwO7N9V5VDw7afgtkcg1ddRfGxxHDWbY3WuzN_nKEOP9KKy2vXgLT86hvMl3hR7Q61oNulqUUcpeEsOF6-Qc8sRqQeENFYQ5d-iC1rzmpAXNBA2Rsj10U_AsiLKO6uo5JKjtD09eBVpJRrOPDpE2Qbyy-7wJRrOPDpE2Qbyy-7wJrE4euMCUgzaim9Vj9v-I-QQHhpenf6mCkt4npgDct9-bjjegvOcbq6isCSfTwppQ7y4"
        />
        <ProfileCard
          name="Leo Archer"
          role="Member"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDQNg43Vh3S1ClvVXsk6ZFxPpqAztkmMT2P4daeNLfVWPVHeSeQcdg9jhCOEFFtx3nfEccHDLt1M--d1z_JsznHRat9BoA8VAmn1nKs6XAAdGpeRPxE3JYmNOJ8pD4f1wdWy-LAAjX43u7kVEomTdt8p12GVLmfNcZBFAFe0ECWgSYD5Of3UG_L-6gssskxm0rW668yvGRHqC0jvP8qHmGgYbYl3S3Zq5tTkJl6-Q4wf5dlGM_SXO4HR2yyJWyRpUO0tfMWHtwJ37Q"
        />
        <ProfileCard
          name="Maya Archer"
          role="Member"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuCkr3SqFGp0Tiihf23X_YRCDyOQhoVFM_a0h7o5dEhjqfv8FYaTeXPCQEhM26rX1n71Vmfr9MjE0t5HbntbiNEjeim8umDU-0sX7ZGlATNKk5GD2RKNEVKdD5YjBuZN21YTkqd8lWLLGluQNoQo7olIb9wpXriMu77wMazpnNCnXrGO3dY1GQVQeSnIcNLIPnG5V8LE4MgMhAXAderThBBYXgnuJBE6pohQiapCPXfj0JgO5Nezcq1sPR26HQv4jNQEcAprPLAzCHM"
        />
      </div>

      <div className="bg-surface-container-low rounded-2xl p-8 space-y-6">
        <h3 className="text-xl font-bold tracking-tight">Family Settings</h3>
        <div className="space-y-4">
          <SettingItem icon={<Shield className="w-5 h-5" />} label="Privacy & Security" />
          <SettingItem icon={<Bell className="w-5 h-5" />} label="Notification Preferences" />
          <SettingItem icon={<Heart className="w-5 h-5" />} label="Family Subscription" />
        </div>
      </div>
    </motion.div>
  );
}

function ProfileCard({ name, role, img }: any) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(47,52,48,0.04)] outline outline-outline-variant/15 outline-1 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-container">
        <img src={img} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div>
        <h4 className="font-bold text-on-surface">{name}</h4>
        <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mt-1">{role}</p>
      </div>
    </div>
  );
}

function SettingItem({ icon, label }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-surface rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
      <span className="text-outline-variant">→</span>
    </div>
  );
}
