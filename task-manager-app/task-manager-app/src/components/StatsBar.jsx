// src/components/StatsBar.jsx

/**
 * StatsBar — Toplam, aktif ve tamamlanan görev sayılarını gösterir.
 */
export default function StatsBar({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-5 mb-6 text-white shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold tracking-tight">📌 Görev Yöneticim</h1>
        <span className="text-sm font-medium opacity-80">%{percent} tamamlandı</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/25 rounded-full mb-4">
        <div
          className="h-2 bg-white rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white/15 rounded-xl py-2">
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-xs opacity-75">Toplam</p>
        </div>
        <div className="bg-white/15 rounded-xl py-2">
          <p className="text-2xl font-bold">{active}</p>
          <p className="text-xs opacity-75">Aktif</p>
        </div>
        <div className="bg-white/15 rounded-xl py-2">
          <p className="text-2xl font-bold">{completed}</p>
          <p className="text-xs opacity-75">Tamamlanan</p>
        </div>
      </div>
    </div>
  );
}
