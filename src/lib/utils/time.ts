/**
 * Formats the current local time as HH:MM:SS (24-hour).
 */
export function formatLocalTime(): string {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
