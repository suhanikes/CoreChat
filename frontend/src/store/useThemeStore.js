/*import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));*/

// import { create } from "zustand";

// export const useThemeStore = create((set) => {
//   // Retrieve stored theme or default to "coffee"
//   const savedTheme = localStorage.getItem("chat-theme") || "coffee";
//   document.documentElement.setAttribute("data-theme", savedTheme);

//   return {
//     theme: savedTheme,
//     setTheme: (theme) => {
//       localStorage.setItem("chat-theme", theme);
//       document.documentElement.setAttribute("data-theme", theme); // Apply theme dynamically
//       set({ theme });
//     },
//   };
// });
import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("chat-theme") || "coffee";
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      console.log("Changing theme to:", theme); // Debugging log
      document.documentElement.setAttribute("data-theme", theme); // Apply immediately
      localStorage.setItem("chat-theme", theme); // Save to storage
      set(() => ({ theme })); // Update Zustand store
    },
  };
});
