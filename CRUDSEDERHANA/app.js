let siswa = [];


function tambahSiswa(){


    let nisn = document.getElementById("nisn").value;

    let nama = document.getElementById("nama").value;

    let kelas = document.getElementById("kelas").value;



    if(nisn=="" || nama=="" || kelas==""){

        alert("Semua data harus diisi!");

        return;

    }



    siswa.push({

        nisn:nisn,
        nama:nama,
        kelas:kelas

    });



    tampilData();



    document.getElementById("nisn").value="";
    document.getElementById("nama").value="";
    document.getElementById("kelas").value="";


}



function tampilData(){


    let tabel = document.getElementById("tabelSiswa");


    tabel.innerHTML="";


    siswa.forEach((data,index)=>{


        tabel.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${data.nisn}</td>

            <td>${data.nama}</td>

            <td>${data.kelas}</td>


            <td>

            <button class="hapus" onclick="hapusSiswa(${index})">
            Hapus
            </button>

            </td>


        </tr>


        `;


    });


}



function hapusSiswa(index){


    siswa.splice(index,1);


    tampilData();


}