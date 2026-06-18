// src/components/TaskList.jsx
import TaskCard from "./TaskCard";

/**
 * TaskList — Filtrelenmiş görev listesini render eder.
 */
export default function TaskList({ tasks, filter, onToggle, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-4xl mb-3">📋</p>
        <p className="text-sm font-medium">
          {filter === "completed"
            ? "Henüz tamamlanan görev yok."
            : filter === "active"
            ? "Tüm görevler tamamlandı, tebrikler!"
            : "Görev listesi boş. Yukarıdan yeni bir görev ekle!"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
