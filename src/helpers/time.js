export function getCurrentTime(){
    const date = new Date();
      return new Intl.DateTimeFormat("en", {
        timeStyle: "medium",
        dateStyle: "full",
      }).format(date);
} 