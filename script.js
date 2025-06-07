const facts = [
    "Madu tidak pernah basi.",
    "Jantung udang berada di kepalanya.",
    "Kucing bisa menghasilkan lebih dari 100 suara yang berbeda, sedangkan anjing hanya sekitar 10.",
    "Lebah madu mati setelah menyengat.",
    "Bintang laut tidak memiliki otak.",
    "Seekor jerapah membersihkan telinganya sendiri dengan lidahnya yang sepanjang 50 cm.",
    "Rata-rata manusia menghabiskan satu tahun hidupnya untuk mencari barang yang hilang.",
    "Bunga matahari bisa membantu membersihkan tanah yang terkontaminasi radioaktif.",
    "Ada lebih banyak atom di sebutir garam daripada butiran pasir di semua pantai di dunia.",
    "Pluto membutuhkan 248 tahun Bumi untuk menyelesaikan satu orbit mengelilingi Matahari.",
    "Otak manusia menghasilkan daya listrik yang cukup untuk menyalakan bola lampu kecil.",
    "Kupu-kupu merasakan rasa dengan kakinya.",
    "Satu-satunya makanan yang tidak pernah rusak adalah madu.",
    "Bulu beruang kutub sebenarnya transparan, bukan putih.",
    "Semut bisa mengangkat 50 kali berat badannya sendiri."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}

// Tampilkan fakta acak saat halaman dimuat pertama kali
displayRandomFact();

// Tampilkan fakta acak saat tombol diklik
newFactBtn.addEventListener('click', displayRandomFact);
