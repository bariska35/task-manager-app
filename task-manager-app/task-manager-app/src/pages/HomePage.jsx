// src/pages/HomePage.jsx
import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createTask } from "../interfaces/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import StatsBar from "../components/StatsBar";

const FILTERS = [
  { key: "all", label: "Tümü" },
  { key: "active", label: "Aktif" },
  { key: "completed", label: "Tamamlanan" },
];

/**
 * HomePage — Uygulamanın ana sayfası.
 * Tüm CRUD işlemleri burada yönetilir, LocalStorage'a yazar.
 */
export default function HomePage() {
  const [tasks, setTasks] = useLocalStorage("tasks_v1", []);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all");

  // ─── CREATE ───────────────────────────────────────────────
  const handleAdd = ({ title, description, priority }) => {
    const newTask = createTask(title, description, priority);
    setTasks((prev) => [newTask, ...prev]);
  };

  // ─── UPDATE ───────────────────────────────────────────────
  const handleUpdate = ({ title, description, priority }) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingTask.id ? { ...t, title, description, priority } : t
      )
    );
    setEditingTask(null);
  };

  // ─── TOGGLE (complete/incomplete) ─────────────────────────
  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // ─── DELETE ───────────────────────────────────────────────
  const handleDelete = (id) => {
    if (window.confirm("Bu görevi silmek istediğine emin misin?")) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
      if (editingTask?.id === id) setEditingTask(null);
    }
  };

  // ─── FILTERED LIST ────────────────────────────────────────
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-lg mx-auto px-4 py-8">

        {/* İstatistik kartı */}
        <StatsBar tasks={tasks} />

        {/* Form */}
        <TaskForm
          onSubmit={editingTask ? handleUpdate : handleAdd}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />

        {/* Filtre sekmeleri */}
        <div className="flex bg-white rounded-2xl p-1 shadow-sm border border-slate-100 mb-4">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition
                ${filter === key
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-500 hover:text-indigo-600"
                }`}
            >
              {label}
              {key === "all" && tasks.length > 0 && (
                <span className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5
                  ${filter === key ? "bg-white/25 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {tasks.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Görev listesi */}
        <TaskList
          tasks={filteredTasks}
          filter={filter}
          onToggle={handleToggle}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />

        {/* Temizleme butonu */}
        {tasks.some((t) => t.completed) && (
          <button
            onClick={() => {
              if (window.confirm("Tamamlanan görevlerin tümü silinsin mi?")) {
                setTasks((prev) => prev.filter((t) => !t.completed));
              }
            }}
            className="w-full mt-4 text-sm text-slate-400 hover:text-red-500 transition py-2"
          >
            🗑 Tamamlananları temizle
          </button>
        )}
      </div>
    </div>
  );
}
