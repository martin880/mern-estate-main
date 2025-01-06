/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
    // Tambahkan plugin lain jika diperlukan
  ],
};

// /* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     // Hapus baris berikut karena sudah termasuk secara default di Tailwind CSS v3.3
//     // require('@tailwindcss/line-clamp'),
//   ],
// };
