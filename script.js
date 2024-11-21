function daftar() {
    // Ambil nilai input
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    // Validasi sederhana
    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    if (password.length < 6) {
        alert("Password harus minimal 6 karakter!");
        return false;
    }

    if (!remember) {
        alert("Anda harus menyetujui 'Remember me'!");
        return false;
    }

    // Tampilkan data jika validasi berhasil
    alert(`Pendaftaran berhasil!\nEmail: ${email}\nNama: ${name}`);
}