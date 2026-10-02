export const profile = {
  name: "Nasywa Fairuz Nafis",
  badge: "Mahasiswa IT",
  tagline: "Welcome to my portfolio.",
  location: "Tegal, Indonesia",
  email: "nasywafairuz911@gmail.com",
  avatar: "/fotosaya.jpeg",
  status: "Mahasiswa Teknologi Informasi",
};

export const aboutParagraphs = [
  "Saya merupakan mahasiswa Teknologi Informasi yang memiliki ketertarikan pada dunia teknologi, khususnya dalam pengembangan sistem, jaringan komputer, dan pemanfaatan teknologi untuk menyelesaikan berbagai permasalahan.",
  "Saya memiliki latar belakang pendidikan dari SMK Negeri 1 Tonjong, jurusan Teknik Elektronika Industri, yang membekali saya dengan dasar pengetahuan mengenai elektronika, sistem kontrol, serta keterampilan teknis. Saat ini, saya terus mengembangkan kemampuan di bidang Teknologi Informasi melalui perkuliahan, berbagai proyek, dan pembelajaran mandiri.",
  "Saya adalah pribadi yang memiliki semangat untuk belajar, mampu beradaptasi dengan hal baru, dan tertarik untuk mengembangkan keterampilan baik secara teknis maupun nonteknis. Melalui portofolio ini, saya ingin menunjukkan perjalanan, kemampuan, serta berbagai proyek yang telah saya kerjakan di bidang teknologi.",
];

export type SkillCard = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export const skills: SkillCard[] = [
  {
    icon: "🏅",
    title: "Olahraga",
    description:
      "Aktif berenang dan bermain badminton untuk menjaga kebugaran serta sportivitas.",
    tags: ["Renang", "Badminton"],
  },
  {
    icon: "🌐",
    title: "Jaringan",
    description:
      "Dasar jaringan komputer, konfigurasi, dan troubleshooting untuk menunjang praktik kuliah.",
    tags: ["TCP/IP", "LAN/WiFi"],
  },
  {
    icon: "📢",
    title: "Komunikasi",
    description:
      "Public speaking, disiplin, kerja sama tim, dan bertanggung jawab.",
    tags: ["Disiplin", "Presentasi", "Bertanggung jawab"],
  },
];

export type Project = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    icon: "🚀",
    title: "Introduction to Network",
    description:
      "Sertifikat pencapaian akademik — klik gambar untuk melihat ukuran penuh.",
    tags: ["Kuliah", "Sertifikat"],
    image: "/Sertifikat%20Cisco.pdf",
    link: "/Sertifikat%20Cisco.pdf",
  },
  {
    icon: "🌟",
    title: "Switching & Routing",
    description:
      "Sertifikat kerja sama tim — klik gambar untuk melihat ukuran penuh.",
    tags: ["Tim", "Sertifikat"],
    image: "/sertifikat%20switching%20and%20routing%20cisco.pdf",
    link: "/sertifikat%20switching%20and%20routing%20cisco.pdf",
  },
];
