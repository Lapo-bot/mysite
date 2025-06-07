document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') { // Pastikan href bukan hanya '#'
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                // Tutup menu burger jika dibuka (untuk mobile)
                if (document.querySelector('.nav-links').classList.contains('active')) {
                    document.querySelector('.nav-links').classList.remove('active');
                }
            }
        });
    });

    // --- Burger Menu Toggle (untuk Mobile) ---
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // --- Animasi Fade-in (saat elemen masuk viewport) ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1 // Ketika 10% elemen terlihat
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Berhenti mengamati setelah animasi
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // --- Modal Detail Mobil ---
    const carDetailBtns = document.querySelectorAll('.car-detail-btn');
    const modal = document.getElementById('carDetailModal');
    const closeButton = document.querySelector('.close-button');
    const modalCarTitle = document.getElementById('modal-car-title');
    const modalCarDescription = document.getElementById('modal-car-description');
    const modalContactBtn = document.querySelector('.modal-contact-btn');

    // Data mobil (bisa ditambahkan lebih banyak)
    const carData = {
        "Sportscar X": {
            title: "Sportscar X 2024",
            description: "Mobil sport revolusioner dengan mesin V8 twin-turbo 800 HP, akselerasi 0-100 km/jam dalam 2.8 detik, dan desain interior kokpit yang terinspirasi dari pesawat jet. Dilengkapi suspensi adaptif dan sistem pengereman keramik."
        },
        "SUV Grandeur": {
            title: "SUV Grandeur 2024",
            description: "SUV mewah yang menggabungkan kekuatan, kenyamanan, dan teknologi terkini. Interior ultra-lega dengan kursi pijat, sistem infotainment layar ganda, dan fitur keselamatan semi-otonom. Ideal untuk keluarga dan perjalanan jarak jauh."
        },
        "Executive Sedan Z": {
            title: "Executive Sedan Z 2023",
            description: "Sedan eksekutif yang memancarkan kemewahan dan performa. Mesin V6 supercharged yang halus, kabin kedap suara dengan material premium, dan sistem bantuan parkir otomatis. Sempurna untuk eksekutif yang membutuhkan gaya dan substansi."
        }
    };

    carDetailBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const model = this.dataset.model; // Ambil data-model dari tombol
            const carInfo = carData[model];

            if (carInfo) {
                modalCarTitle.textContent = carInfo.title;
                modalCarDescription.textContent = carInfo.description;
                modal.style.display = 'flex'; // Tampilkan modal
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Sembunyikan modal
    });

    // Menutup modal saat klik di luar area modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Menggulir ke bagian kontak saat tombol "Hubungi Sekarang" di modal diklik
    if (modalContactBtn) {
        modalContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'none'; // Tutup modal
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
