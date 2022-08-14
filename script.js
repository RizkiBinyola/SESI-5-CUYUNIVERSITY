let roles = document.getElementById("roles");
let loginBtn = document.getElementById("loginBtn");
let username = document.getElementById("username");
let password = document.getElementById("password");
let userReg = document.getElementById("userReg");
let passReg = document.getElementById("passReg");
let information1 = document.getElementById("information1");
let informationDataUser = document.getElementById("informationDataUser");
let information3 = document.getElementById("information3");
let proPic = document.getElementById("proPic");
var userList = JSON.parse(localStorage.getItem('userList')) || [];
var passList = JSON.parse(localStorage.getItem('passList')) || [];
var rolesList = JSON.parse(localStorage.getItem('rolesList')) || [];

function login() {
  if (username.value == "hokage" && password.value == "hokage") {
    alert("Anda berhasil login sebagai Hokage!");
    location.href = "dashboard.html"
    localStorage.setItem("role", "Hokage");
    localStorage.setItem("username", "Rizki");
  }else {
    if (userList.includes(username.value)) {
      if (passList[userList.indexOf(username.value)] == password.value) {
        localStorage.setItem("role", rolesList[userList.indexOf(username.value)]);
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        alert("Anda berhasil login sebagai " + rolesList[userList.indexOf(username.value)]);
        location.href = "dashboard.html"
      }
      else {
        alert("Password anda salah! Tolong ulangi!");
      }
    }
    else {
      alert("Warga tidak terdaftar! Mohon daftar terlebih dahulu!");
      alert("Apakah anda penyusup desa lain!!");
    }
  }
}

// Fungsi register
function register() {
  if (userReg.value == "") {
    alert("Username tidak boleh kosong. Tolong masukkan username!");
    return;
  }
  if (passReg.value == "") {
    alert("Password tidak boleh kosong. Tolong masukkan password!");
    return;
  }
  if (roles.value == 1) {
    rolesList.push("Murid akademi");
  } else if (roles.value == 2) {
    rolesList.push("Genin");
  } else if (roles.value == 3) {
    rolesList.push("Chuunin");
  }else if (roles.value == 4){
    rolesList.push("Jounin");
  }else if (roles.value == 5){
    rolesList.push("Tensai Jounin");
  }else if (roles.value == 6){
    rolesList.push("Anbu");
  }
  else if (roles.value == 0) {
    alert("Tolong pilih status terlebih dahulu!");
    return;
  }

  userList.push(userReg.value);
  passList.push(passReg.value);
  localStorage.setItem('userList', JSON.stringify(userList));
  localStorage.setItem('passList', JSON.stringify(passList));
  localStorage.setItem('rolesList', JSON.stringify(rolesList));
  // alert('User berhasil ditambahkan \nUsername : ${}');
  alert(`User berhasil ditambahkan \nUsername anda : ${userReg.value} \nPassword anda : ${passReg.value} \nSilahkan Login Menggunakan Akun Anda`);
  window.location.href = "index.html"
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("roles");
  location.reload();
}

function hapusAkun() {
  confirm("Yakin ingin menghapus data warga desa?");
  localStorage.clear();
}

let hapus = document.getElementById("hapus");

// localstorage Hokage
if (localStorage.getItem("role") == "Hokage") {
  proPic.src = "images/hokage.png";
  information1.textContent = "Halo Tuan "  + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information2.textContent = "Tingkat : " + localStorage.getItem("role") + " 火";
  hapus.innerText = "Hapus data warga desa";
} 
else if (localStorage.getItem("role") == "Murid akademi") {
  proPic.src = "images/murid-akademi.jpg";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di akademi , Akademi adalah tempat calon-calon ninja memulai latihannya. Mereka belum dapat disebut sebagai ninja sebelum mereka lulus akademi.";
  information2.textContent = "Tingkat : " + "Murid akademi";

} 
else if (localStorage.getItem("role") == "Genin") {
  proPic.src = "images/genin.png";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di Genin , Genin adalah ninja kelas rendah yang hanya menjalankan misi kelas D. Misi-misinya juga kadang-kadang sangat gampang.";
  information2.textContent = "Tingkat : " + "Genin";
} 
else if (localStorage.getItem("role") == "Chuunin") {
  proPic.src = "images/Chuunin.png";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di Chuunin , Chuunin adalah ninja yang telah mencapai tingkat kedewasaan dan kemampuan yang terutama terdiri dari keterampilan kepemimpinan dan kecakapan taktis. Chunin biasanya dikirim pada misi peringkat -C atau peringkat -B .";
  information2.textContent = "Tingkat : " + "Chuunin";
}
else if (localStorage.getItem("role") == "Jounin"){
  proPic.src = "images/Jounin.png";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di Jounin , Jounin adalah tingkat tertinggi dalam tingkatan resmi ini. Para Jounin ini yaitu daya utama desa-desa tersembunyi. Para Jounin biasa diberi misi untuk menyerang kawasan musuh, pembunuhan, sabotase, dsb-nya. ";
  information2.textContent = "Tingkat : " + "Jounin";
}
else if (localStorage.getItem("role") == "Tensai Jounin"){
  proPic.src = "images/Tensai-Jounin.png";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di Tensai Jounin , Tensai Jounin memiliki tugas khusus seperti mengajar, medis dsb-nya. Para ninja medis yaitu Jounin khusus yang tugasnya hanya mencari, mengobati atau memulangkan kenalannya yang terluka.";
  information2.textContent = "Tingkat : " + "Tensai Jounin";
}
else if (localStorage.getItem("role") == "Anbu"){
  proPic.src = "images/Anbu.jpg";
  information1.textContent = "Halo " + localStorage.getItem("username") + "!";
  informationDataUser.textContent = "Username akun anda : " + localStorage.getItem("username");
  information3.textContent = "Selamat datang di anbu , Anbu yaitu pasukan elit pembunuh rahasia yang ditugasi untuk melaksanakan misi yang sangat berbahaya.";
  information2.textContent = "Tingkat : " + "Anbu";
}