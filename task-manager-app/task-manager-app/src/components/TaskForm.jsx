// src/components/TaskForm.jsx
import { useState, useEffect } from "react";
import { PRIORITIES } from "../interfaces/Task";

/**
 * TaskForm — Görev ekleme ve düzenleme formu.
 * Props:
 *   onSubmit(taskData)  — form gönderildiğinde çağrılır
 *   editingTask         — düzenlenecek görev objesi (null ise "Ekle" modu)
 *   onCancel()          — düzenleme iptal edildiğinde çağrılır
 */
export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  // Düzenleme moduna girildiğinde formu doldur
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
    setError("");
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Görev başlığı boş olamaz.");
      return;
    }
    onSubmit({ title: title.trim(), description: description.trim(), priority });
    setTitle("");
    setDescription("");
    setPriority("medium");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-slate-100"
    >
      <h2 className="text-lg font-bold text-slate-700 mb-4">
        {editingTask ? "✏️ Görevi Düzenle" : "➕ Yeni Görev Ekle"}
      </h2>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3">
          {error}
        </p>
      )}

      {/* Başlık */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Başlık <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Görev başlığını yazın..."
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* Açıklama */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Açıklama
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="İsteğe bağlı açıklama..."
          rows={2}
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
        />
      </div>

      {/* Öncelik */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Öncelik
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
        >
          {Object.entries(PRIORITIES).map(([key, { label }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-2.5 text-sm transition"
        >
          {editingTask ? "Güncelle" : "Ekle"}
        </button>
        {editingTask && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl py-2.5 text-sm transition"
          >
            İptal
          </button>
        )}
      </div>
    </form>
  );
}
