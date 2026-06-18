// src/components/TaskCard.jsx
import { PRIORITIES } from "../interfaces/Task";

/**
 * TaskCard — Tek bir görevi gösterir.
 * Props:
 *   task       — görev objesi
 *   onToggle() — tamamlandı/aktif toggle
 *   onEdit()   — düzenleme modunu aç
 *   onDelete() — görevi sil
 */
export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const priorityStyle = PRIORITIES[task.priority]?.color || "";
  const priorityLabel = PRIORITIES[task.priority]?.label || task.priority;

  const formattedDate = new Date(task.createdAt).toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border transition-all duration-200 p-5
        ${task.completed ? "opacity-60 border-slate-200" : "border-slate-100 hover:shadow-md"}`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Sol: checkbox + içerik */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button
            onClick={() => onToggle(task.id)}
            title={task.completed ? "Aktif et" : "Tamamlandı işaretle"}
            className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition
              ${task.completed
                ? "bg-indigo-500 border-indigo-500 text-white"
                : "border-slate-300 hover:border-indigo-400"
              }`}
          >
            {task.completed && (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                <path d="M10 3L5 8.5 2 5.5l-1 1L5 10.5l6-7-1-0.5z" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-semibold leading-snug break-words
                ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}
            >
              {task.title}
            </p>
            {task.description && (
              <p className="text-xs text-slate-500 mt-1 break-words">
                {task.description}
              </p>
            )}
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${priorityStyle}`}
              >
                {priorityLabel}
              </span>
              <span className="text-xs text-slate-400">{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Sağ: eylemler */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            title="Düzenle"
            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(task.id)}
            title="Sil"
            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
