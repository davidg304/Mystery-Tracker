const KEY = 'mystery-tracker-mobile-v2';
export function loadMarks() {
  try { const data = JSON.parse(localStorage.getItem(KEY) || '[]'); return new Set(Array.isArray(data) ? data.filter(Number.isInteger) : []); }
  catch { return new Set(); }
}
export function saveMarks(marks) {
  try { localStorage.setItem(KEY, JSON.stringify([...marks].sort((a,b)=>a-b))); }
  catch { /* Still usable if browser storage is disabled. */ }
}
