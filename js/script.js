// Saat gösterimi
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = `Saat: ${timeString}`;
}

// Saat güncellemesi
setInterval(updateClock, 1000);


// İletişim Formu Doğrulama
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Hata mesajı gizleme
    errorMessage.style.display = "none";
    errorMessage.innerText = "";

    // Alan kontrolü
    if (!name || !email || !message) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Lütfen tüm alanları doldurunuz.";
        return;
    }

    // E-posta formatı kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Geçerli bir e-posta adresi giriniz.";
        return;
    }

    alert("Mesajınız gönderildi!");
}

// Biyografi Gösterimi
function toggleBio() {
    const fullBio = document.getElementById("fullBio");
    const button = document.getElementById("toggleButton");

    if (fullBio.style.display === "none" || fullBio.style.display === "") {
        fullBio.style.display = "block";
        button.innerText = "Daha Az Gör";
    } else {
        fullBio.style.display = "none";
        button.innerText = "Daha Fazla Gör";
    }
}


// Proje Filtreleme
function filterProjects(category) {
    const recentProjects = document.querySelectorAll('[data-category="recent"]');
    const popularProjects = document.querySelectorAll('[data-category="popular"]');

    if (category === 'recent') {
        // En Son Projeler
        recentProjects.forEach(project => {
            const projectTitle = project.querySelector('h3').innerText;
            if (projectTitle.includes("Bisiklet") || projectTitle.includes("Gezi")) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
        popularProjects.forEach(project => project.style.display = 'none');
    } else if (category === 'popular') {
        // En Beğenilen Projeler
        recentProjects.forEach(project => {
            const projectTitle = project.querySelector('h3').innerText;
            project.style.display = projectTitle.includes("Ambulans") ? 'block' : 'none';
        });
        popularProjects.forEach(project => project.style.display = 'block');
    } else if (category === 'all') {
        // Tüm projeleri gösterme
        recentProjects.forEach(project => project.style.display = 'block');
        popularProjects.forEach(project => project.style.display = 'block');
    }
}
