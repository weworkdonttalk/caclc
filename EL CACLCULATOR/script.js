const display = document.getElementById('display');

// Menambahkan angka atau operator ke layar
function appendValue(value) {
    display.value += value;
}

// Menghapus seluruh isi layar (Tombol C)
function clearDisplay() {
    display.value = '';
}

// Menghapus 1 karakter terakhir (Tombol DEL)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil akhir (Tombol =)
function calculate() {
    try {
        // Jika layar kosong, jangan lakukan apa-apa
        if (display.value === '') return;
        
        // Mengevaluasi ekspresi matematika dari string di layar
        display.value = eval(display.value);
    } catch (error) {
        // Menampilkan pesan jika input tidak valid (misal: "5++*")
        display.value = 'Error';
        setTimeout(() => clearDisplay(), 1200);
    }
}