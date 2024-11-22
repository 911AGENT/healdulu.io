// formulir
function daftar() {
    const email = document.getElementById("email");
    const nohp = document.getElementById("nohp");
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
  
    // Validasi Email
    if (!email.value.includes("@")) {
      alert("Masukkan email yang valid.");
      return;
    }
  
    // Validasi Nomor HP
    if (!/^\+?62|^08[0-9]{8,12}$/.test(nohp.value)) {
      alert("Masukkan nomor HP yang valid.");
      return;
    }
  
    // Validasi Nama
    if (name.value.trim() === "") {
      alert("Nama tidak boleh kosong.");
      return;
    }
  
    // Validasi Kekuatan Password
    if (password.value.length < 6) {
      alert("Password harus memiliki minimal 6 karakter.");
      return;
    }
  
    // Password Lemah, Sedang, Kuat
    const passwordStrength = document.getElementById("password-strength");
    if (!/[A-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
      alert("Password harus mengandung huruf besar dan angka.");
      return;
    }
  
    // Validasi Kesesuaian Password
    if (password.value !== password2.value) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }
  
    alert("Pendaftaran berhasil!");
  }
  // comingsoon
  function comingsoon(){
    alert("Coming Soon");
  }