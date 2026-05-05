import { ClickTracker } from "./trackers/clickTracker";

export function initOverlay(config: { apiUrl: string }) {
  new ClickTracker(config);
}