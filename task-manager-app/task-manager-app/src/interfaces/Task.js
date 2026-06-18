// src/interfaces/Task.js
// Proje boyunca kullanılan görev veri modelini tanımlar.

/**
 * @typedef {Object} Task
 * @property {string}  id         - Benzersiz görev kimliği (crypto.randomUUID veya Date.now())
 * @property {string}  title      - Görev başlığı
 * @property {string}  description - Görev açıklaması (isteğe bağlı)
 * @property {string}  priority   - Öncelik seviyesi: "low" | "medium" | "high"
 * @property {boolean} completed  - Tamamlanma durumu
 * @property {string}  createdAt  - Oluşturulma tarihi (ISO string)
 */

export const PRIORITIES = {
  low: { label: "Düşük", color: "bg-green-100 text-green-800" },
  medium: { label: "Orta", color: "bg-yellow-100 text-yellow-800" },
  high: { label: "Yüksek", color: "bg-red-100 text-red-800" },
};

export const createTask = (title, description = "", priority = "medium") => ({
  id: Date.now().toString(),
  title,
  description,
  priority,
  completed: false,
  createdAt: new Date().toISOString(),
});
