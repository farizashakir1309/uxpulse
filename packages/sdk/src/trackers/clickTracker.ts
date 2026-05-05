export class ClickTracker {
    constructor(private config: { apiUrl: string }) {
      this.init();
    }
  
    init() {
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
  
        const event = {
          type: "click",
          element: this.getElementId(target),
          timestamp: Date.now()
        };
  
        this.send(event);
      });
    }
  
    getElementId(el: HTMLElement) {
      return el.id || el.tagName;
    }
  
    send(event: any) {
        fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event)
        });
      }
  }