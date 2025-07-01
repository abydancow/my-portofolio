import Aby from "/assets/abi.webp";

const Image = {
  Aby,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/Laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/php.png";
import Tools6 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/laragon.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Laravel",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Php",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laragon",
    ket: "Database",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/p1.webp";
import Proyek2 from "/assets/proyek/p2.webp";
import Proyek3 from "/assets/proyek/p3.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Apk Surat-Menyurat Kelurahan",
    desk: "This application is designed to facilitate the registration process for letter-making and the submission of public complaints.",
    tools: ["Python", "CSS", "Firebase", "Kivy"],
    link: "https://github.com/abydancow/apk-desa",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Apk Catan Tugas",
    desk: "The application under consideration functions as a tool for task management and facilitates the sharing of notes among students.",
    tools: ["HTML", "Dart", "C++", "Flutter", "Firebase"],
    link: "https://github.com/abydancow/uts_pemmobile",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Clustering Data",
    desk: "The web can be utilized for the purpose of data aggregation, either by leveraging existing data or by generating new data.",
    tools: ["HTML", "Laravel", "TailwindCSS", "Laragon"],
    dad: "400",
  },
];
