document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission (akan menampilkan pesan karena tidak ada backend)
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.classList.remove('success', 'error');
            formStatus.textContent = '';

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Dalam skenario nyata, data ini akan dikirim ke server.
                // Untuk GitHub Pages (situs statis), kita hanya bisa menampilkan pesan.
                // Anda bisa menggunakan layanan pihak ketiga seperti Formspree.io atau Getform.io
                // untuk menerima email dari formulir statis.

                formStatus.textContent = 'Terima kasih! Pesan Anda telah kami terima (simulasi).';
                formStatus.classList.add('success');
                contactForm.reset(); // Kosongkan formulir
            } else {
                formStatus.textContent = 'Mohon lengkapi semua kolom formulir.';
                formStatus.classList.add('error');
            }
        });
    }

    // Animasi fade-in untuk elemen saat masuk viewport (opsional, bisa lebih kompleks)
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    }, { threshold: 0.1 }); // Trigger saat 10% elemen terlihat

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
