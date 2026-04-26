"use client";

import { events } from "@/data/events";

const STORAGE_KEY = "odyssey_items";

const normalizeItem = (item) => ({
  ...item,
  id: Number(item.id),
  description: item.description || item.shortDescription || "",
  long_description: item.long_description || item.fullDescription || "",
  image: item.image || item.imageUrl || "",
  location: item.location || "TBD",
});

export const getStoredItems = () => {
  if (typeof window === "undefined") return events;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    return events;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
      return events;
    }
    return parsed.map(normalizeItem);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    return events;
  }
};

export const saveItems = (items) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.map(normalizeItem)));
};

export const addStoredItem = (item) => {
  const items = getStoredItems();
  const nextItems = [...items, normalizeItem(item)];
  saveItems(nextItems);
  return nextItems;
};

export const deleteStoredItem = (id) => {
  const items = getStoredItems();
  const nextItems = items.filter((item) => Number(item.id) !== Number(id));
  saveItems(nextItems);
  return nextItems;
};
