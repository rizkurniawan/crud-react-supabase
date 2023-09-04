import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate } from "react-router-dom";

function Tambah() {
  const navigate = new useNavigate();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");

  // insert data to db
  const onInsert = async () => {
    const { data, error } = await supabase
      .from("mahasiswa")
      .insert([{ nim: nim, nama: nama, prodi: prodi }]);
    navigate("/");
  };

  return (
    <div>
      <h1>Tambah: Mahasiswa</h1>

      <input
        type="text"
        name="nim"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
        placeholder="masukan NIM anda"
      />

      <br />

      <input
        type="text"
        name="nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="masukan nama anda"
      />

      <br />

      <input
        type="text"
        name="prodi"
        value={prodi}
        onChange={(e) => setProdi(e.target.value)}
        placeholder="masukan prodi anda"
      />

      <br />

      <button onClick={() => onInsert()}>Tambah</button>

      <br />
      <br />

      <Link to={"/"}>Kembali ke List</Link>
    </div>
  );
}

export default Tambah;
