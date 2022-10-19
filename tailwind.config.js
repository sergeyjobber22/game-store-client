/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black:"#161a1e",
      brown: "#4f3f3b",
      gold : "#e58d27",
      "transparent":"rgba(255,255,255,.05)",
      "transparent-dark":"rgba(0,0,0,0.5)",
      white:"#fff", 
      gray: "	#909090",
    }
  },
  plugins: [],
}
