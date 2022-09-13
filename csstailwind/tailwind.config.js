/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainPage: "url('/src/img/mainPage.png')",
        Rec: "url('/src/img/blueRec.png')",
        recMap: "url('/src/img/bgMap.png')",
        edaps: "url('/src/img/EDAPS.png')",
        dji: "url('/src/img/DJI_0923 2.png')",
        dsco: "url('/src/img/DSC01443 1.png')",
        grafs: "url('/src/img/Grafic _ai-01 2.png')",
        t300: "url('/src/img/T_300_2 1.png')",
        mainPage2: "url('/src/img/DSC03047_1 1.png')",
        edaps2: "url('/src/img/global/EDAPS-Times Square 1 (1).png')",
        dji2: "url('/src/img/global/DJI_0923 2 (1).png')",
        dsco2: "url('/src/img/global/DSC01443 1 (1).png')",
        grafs2: "url('/src/img/global/Grafic _ai_gorizont-01 2.png')",
        t3002: "url('/src/img/global/T_300_2 1 (1).png')",
        
      },
      fontFamily: {
        play: ["Play"],
        jura: ["Jura"],
      },
      colors: {
        // 'button-blue': 'linear-gradient(92.2deg, #000AFF 0%, #000468 100.1%);',
      },
    },
  },
  plugins: [],
};
