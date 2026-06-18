// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

/**
 * LocalStorage ile senkronize çalışan bir state hook'u.
 * Sayfa yenilenince veriler kaybolmaz.
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("LocalStorage okuma hatası:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("LocalStorage yazma hatası:", error);
    }
  };

  return [storedValue, setValue];
}
