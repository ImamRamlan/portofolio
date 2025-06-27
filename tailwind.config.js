/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // sesuaikan dengan struktur file kamu
  ],
  darkMode: 'class', // penting! agar toggle class 'dark' berfungsi
  theme: {
    extend: {
      // Kamu bisa menambahkan warna kustom di sini jika perlu
      colors: {
        primary: '#6366f1', // contoh warna utama
      },
    },
  },
  plugins: [],
};
