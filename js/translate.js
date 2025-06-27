document.addEventListener('DOMContentLoaded', function() {
    const resources = {
        en: {
            translation: {
                name: "Imam Ramlan",
                load_portofolio: "Loading portfolio...",
                about_nav: "About",
                project_nav: "Projects",
                expertise_nav: "Skills",
                contact_nav: "Contact",
                dark_mode_label: "Dark Mode",
                greeting: "Hello, I'm Imam Ramlan",
                job_title: "Web Developer | Problem Solver",
                intro_text: "As a fresh graduate, I have built several web projects with a modern and efficient approach, prioritizing clean code and user-friendly design.",
                btn_view_projects: "View My Projects",
                btn_contact_me: "Contact Me",
                about_title: "About Me",
                about_description: "A web developer passionate about creating beautiful and functional digital solutions.",
                about_whoami: "Who Am I?",
                about_whoami_desc: "I am a fresh graduate in Informatics Engineering with a strong interest in web development. I have built several personal projects using HTML, CSS, JavaScript, as well as frameworks like Laravel and CodeIgniter. I believe that the combination of neat design and clean code structure creates an effective user experience.",
                status_label: "Status",
                btn_access: "Access",
                status_value: "Fresh Graduate",
                specialization_label: "Specialization",
                specialization_value: "Backend, Web Apps",
                education_label: "Education",
                education_value: "Bachelor of Informatics Engineering",
                language_label: "Languages",
                language_value: "Indonesian, English (medium)",
                contact_me: "Contact Me",
                new_projects: "New Projects",
                text_projects: "Some of the best projects I've worked on with various modern technologies.",
                text_project1: "A modern cashier system for retail stores with sales features, inventory management, and financial reports, manual routing, and good security.",
                text_project2: "A personal portfolio website with a modern look, dark mode, animations, and project showcase. Built with Tailwind CSS and responsive on various devices.",
                title_project3: "Vehicle Auction Service App",
                text_project3: "This app supports vehicle data management, participant registration, bidding process, and winner confirmation in a transparent.",  
                title_project4: "Flower Ordering App",
                text_project4: "A flower ordering app with features for selecting flowers, shopping cart, and payment. Makes it easy for users to order flowers online.",
                title_project5: "BEM E-Voting",
                text_project5: "An online voting system for BEM with features for voter registration, voting, and result reports. Simplifies the election process digitally.",
                title_project6: "Badminton Court Rental",
                text_project6: "A badminton court rental system with features for booking, payment, and schedule management. Makes it easy for users to rent courts.",
                title_project7: "Scooter Rental",
                text_project7: "A scooter rental app with features for booking, payment, and location tracking. Makes it easy for users to rent scooters online.",
                title_project8: "Medical Records",
                text_project8: "A medical records system with features for patient registration, medical history, and health reports. Makes it easy for doctors to manage patient data.",
                title_project9: "Read Comics",
                text_project9: "A comic reading app with features for searching, bookmarking, and recommendations. Makes it easy for users to find and read their favorite comics.",
                title_project10: "Food Queue",
                text_project10: "A food queue system with features for registration, ordering, and queue management. Makes it easy for users to order food online.",
                title_project11: "Futsal Court Rental",
                text_project11: "A futsal court rental system with features for booking, payment, and schedule management.",
                title_project12: "Workshop Spare Parts Management",
                text_project12: "A simple web-based motorcycle workshop management system, allowing for service, customer, and report recording. Created with PHP Native and Bootstrap.",
                title_project13: "Bus Ticket Ordering System",
                text_project13: "A web-based application for ordering bus tickets online. Includes features for booking, payment confirmation, and departure schedule management.",
                title_project14: "Digital KMS Posyandu",
                text_project14: "A digital application for recording the Healthy Card (KMS) at Posyandu. Makes it easy for officers to monitor the growth and development of toddlers and manage data.",
                title_project15: "Fitness e-Commerce",
                text_project15: "An online store website themed around fitness that provides fitness products and accessories. Created with PHP Native and simple shopping cart system integration.",
                title_expertise: "Technical Skills",
                text_expertise: "I have expertise in various technologies and tools used in web development.",
                title_contact: "Contact Me",
                text_contact: "If you're interested in collaborating or have any questions, feel free to reach out to me.",
                input_name: "Name",
                input_email: "Email",
                input_subject: "Subject",
                input_message: "Message",
                button_send: "Send",
                information_contact: "Contact Information",
                title_number_call: "Phone Number",
                title_location: "Location",
                text_location: "Makassar, South Sulawesi, Indonesia",
                title_follow: "Follow Me",
            }
        },
        id: {
            translation: {
                name: "Imam Ramlan",
                load_portofolio: "Memuat Portfolio...",
                about_title: "Tentang Saya",
                about_nav: "Tentang",
                project_nav: "Proyek",
                expertise_nav: "Keahlian",
                contact_nav: "Kontak",
                dark_mode_label: "Mode Gelap",
                greeting: "Halo, Saya Imam Ramlan",
                job_title: "Web Developer | Problem Solver",
                intro_text: "Sebagai fresh graduate, saya telah membangun beberapa proyek web dengan pendekatan modern dan efisien, mengutamakan clean code dan desain yang ramah pengguna.",
                btn_view_projects: "Lihat Proyek Saya",
                btn_contact_me: "Hubungi Saya",
                about_title: "Tentang Saya",
                about_description: "Seorang pengembang web dengan passion menciptakan solusi digital yang indah dan fungsional.",
                about_whoami: "Siapa Saya?",
                about_whoami_desc: "Saya adalah fresh graduate di bidang Teknik Informatika dengan minat besar dalam pengembangan web. Saya telah membangun beberapa proyek pribadi menggunakan HTML, CSS, JavaScript, serta framework seperti Laravel dan CodeIgniter. Saya percaya bahwa kombinasi antara desain yang rapi dan struktur kode yang bersih dapat menciptakan pengalaman pengguna yang efektif.",
                status_label: "Status",
                btn_access: "Aksess",
                status_value: "Fresh Graduate",
                specialization_label: "Spesialisasi",
                specialization_value: "Backend, Web Apps",
                education_label: "Pendidikan",
                education_value: "Sarjana Teknik Informatika",
                language_label: "Bahasa",
                language_value: "Indonesia, Inggris (medium)",
                contact_me: "Hubungi Saya",
                new_projects: "Proyek Baru",
                text_projects: "Beberapa proyek terbaik yang telah saya kerjakan dengan berbagai teknologi modern.",
                text_project1: "Sistem kasir modern untuk toko retail dengan fitur penjualan, inventori barang keluar masuk, dan laporan keuangan, routing manual serta keamanan yang baik.",
                text_project2: "Website portfolio pribadi dengan tampilan modern, dark mode, animasi, dan showcase project. Dibangun dengan Tailwind CSS dan responsif di berbagai perangkat.",
                title_project3: "Aplikasi Pelayanan Lelang Kendaraan",
                text_project3: "Aplikasi ini mendukung pengelolaan data kendaraan, pendaftaran peserta, proses penawaran (bidding), hingga konfirmasi pemenang lelang secara transparan",
                title_project4: "Aplikasi Pemesanan Bunga",
                text_project4: "Aplikasi pemesanan bunga dengan fitur pemilihan bunga, keranjang belanja, dan pembayaran. Memudahkan pengguna dalam memesan bunga secara online.",
                title_project5: "E-Voting BEM",
                text_project5: "Sistem pemungutan suara online untuk BEM dengan fitur pendaftaran pemilih, pemungutan suara, dan laporan hasil. Memudahkan proses pemilihan secara digital.",
                title_project6: "Penyewaan Lapangan Bulutangkis",
                text_project6: "Sistem penyewaan lapangan bulutangkis dengan fitur pemesanan, pembayaran, dan manajemen jadwal. Memudahkan pengguna dalam menyewa lapangan.",
                title_project7: "Penyewaan Skuter",
                text_project7: "Aplikasi penyewaan skuter dengan fitur pemesanan, pembayaran, dan pelacakan lokasi. Memudahkan pengguna dalam menyewa skuter secara online.",
                title_project8: "Rekam Medis",
                text_project8: "Sistem rekam medis dengan fitur pendaftaran pasien, riwayat medis, dan laporan kesehatan. Memudahkan dokter dalam mengelola data pasien.",
                title_project9: "Baca Komik",
                text_project9: "Aplikasi baca komik dengan fitur pencarian, bookmark, dan rekomendasi. Memudahkan pengguna dalam menemukan dan membaca komik favorit.",
                title_project10: "Antrian Makanan",
                text_project10: "Sistem antrian makanan dengan fitur pendaftaran, pemesanan, dan manajemen antrian. Memudahkan pengguna dalam memesan makanan secara online.",
                title_project11: "Penyewaan Lapangan Futsal",
                text_project11: "Sistem penyewaan lapangan futsal dengan fitur pemesanan, pembayaran, dan manajemen jadwal.",
                title_project12: "Manajemen Suku Cadang Bengkel",
                text_project12: "Sistem manajemen bengkel motor sederhana berbasis web, memungkinkan pencatatan servis, pelanggan, dan laporan. Dibuat dengan PHP Native dan Bootstrap.",
                title_project13: "Sistem Pemesanan Bus",
                text_project13: "Aplikasi berbasis web untuk pemesanan tiket bus secara online. Termasuk fitur pemesanan, konfirmasi pembayaran, dan manajemen jadwal keberangkatan.",
                title_project14: "Posyandu KMS Digital",
                text_project14: "Aplikasi digital untuk pencatatan Kartu Menuju Sehat (KMS) pada Posyandu. Memudahkan petugas dalam memantau tumbuh kembang balita dan manajemen data.",
                title_project15: "Fitness e-Commerce",
                text_project15: "Website toko online bertema kebugaran yang menyediakan produk fitness dan perlengkapannya. Dibuat dengan PHP Native dan integrasi sistem keranjang belanja sederhana.",
                title_expertise: "Keahlian Teknis",
                text_expertise: "Saya memiliki keahlian dalam berbagai teknologi dan alat yang digunakan dalam pengembangan web.",
                title_contact: "Hubungi Saya",
                text_contact: "Jika Anda tertarik untuk bekerja sama atau memiliki pertanyaan, jangan ragu untuk menghubungi saya.",
                input_name: "Nama",
                input_email: "Email",
                input_subject: "Subjek",
                input_message: "Pesan",
                button_send: "Kirim",
                information_contact: "Informasi Kontak",
                title_number_call: "Nomor Telepon",
                title_location: "Lokasi",
                text_location: "Makassar, Sulawesi Selatan, Indonesia",
                title_follow: "Ikuti Saya",
            }
        }
    };

    // Ambil bahasa tersimpan dari localStorage, atau default ke 'en'
    const initialLang = localStorage.getItem('selectedLang') || 'en';

    i18next.init({
        lng: initialLang,
        debug: false,
        resources
    }, function(err, t) {
        translateContent();
        updateActiveButton(i18next.language);
    });

    function translateContent() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
        });
    }

    function updateActiveButton(lang) {
        // Desktop buttons
        const btnEn = document.getElementById('btn-en');
        const btnId = document.getElementById('btn-id');

        // Mobile buttons
        const btnEnMobile = document.getElementById('btn-en-mobile');
        const btnIdMobile = document.getElementById('btn-id-mobile');

        // Reset semua
        [btnEn, btnEnMobile, btnId, btnIdMobile].forEach(btn => {
            btn ?.classList.remove('ring', 'ring-primary-500');
        });

        // Tambah highlight tombol aktif
        if (lang === 'en') {
            btnEn ?.classList.add('ring', 'ring-primary-500');
            btnEnMobile ?.classList.add('ring', 'ring-primary-500');
        } else {
            btnId ?.classList.add('ring', 'ring-primary-500');
            btnIdMobile ?.classList.add('ring', 'ring-primary-500');
        }
    }

    // Fungsi ganti bahasa + refresh
    window.changeLang = function(lang) {
    localStorage.setItem('selectedLang', lang);
    i18next.changeLanguage(lang, function() {
        translateContent();
        updateActiveButton(lang);
    });
};
});