const achievements = [
  { value: "200+", label: "LeetCode problems solved" },
  { value: "150+", label: "TakeUForward problems solved" },
  { value: "7.7 / 10", label: "B.Tech CGPA" },
  { value: "91.6%", label: "Class XII result" },
];

export default function AchievementsSection() {
  return (
    <section aria-label="Highlights" className="grid grid-cols-2 gap-3 py-8 sm:grid-cols-4 sm:gap-4 sm:py-12">
      {achievements.map((item) => <div key={item.label} className="rounded-xl border border-[#33353F] bg-[#181818] p-4 text-center sm:p-6">
        <p className="text-xl font-bold text-white sm:text-2xl">{item.value}</p>
        <p className="mt-2 text-xs leading-relaxed text-[#ADB7BE] sm:text-sm">{item.label}</p>
      </div>)}
    </section>
  );
}
