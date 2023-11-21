<?php
// NAMA  :Ahmad Rizki Maulana
// NIM   : 121140105
// KELAS : RB

class Mahasiswa {
    private $nama;
    private $nim;
    private $prodi;

    public function setNama($nama) {
        $this->nama = $nama;
    }

    public function getNama() {
        return $this->nama;
    }

    public function setNim($nim) {
        $this->nim = $nim;
    }

    public function getNim() {
        return $this->nim;
    }

    public function setProdi($prodi) {
        $this->prodi = $prodi;
    }

    public function getProdi() {
        return $this->prodi;
    }

    public function display() {
        echo "Nama  : " . $this->getNama() . "<br>";
        echo "NIM   : " . $this->getNim() . "<br>";
        echo "Prodi : " . $this->getProdi() . "<br>";
        echo "<br>";
    }
}

$mahasiswa1 = new Mahasiswa();
$mahasiswa1->setNama("Benedictus Budhi Dharmawan");
$mahasiswa1->setNim("121140098");
$mahasiswa1->setProdi("Teknik Informatika");
$mahasiswa1->display();

$mahasiswa2 = new Mahasiswa();
$mahasiswa2->setNama("Ahmad Rizki Maulana");
$mahasiswa2->setNim("121140105");
$mahasiswa2->setProdi("Teknik Informatika");
$mahasiswa2->display();

?>
