import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link, useNavigate, useParams } from "react-router-dom";

function Ubah() {
  const param = new useParams();
  const navigate = new useNavigate();

  const [nim, setNim] = useState("");
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data, error } = await supabase
      .from("mahasiswa")
      .select()
      .eq("id", param.id)
      .single();
    setNim(data.nim);
    setNama(data.nama);
    setProdi(data.prodi);
  };

  // update data to db
  const onUpdate = async () => {
    const { data, error } = await supabase
      .from("mahasiswa")
      .update({ nim: nim, nama: nama, prodi: prodi })
      .eq("id", param.id);
    navigate("/");
  };

  return (
    <div>
      <h1>Ubah: Mahasiswa {param.id}</h1>

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

      <button onClick={() => onUpdate()}>Simpan</button>

      <br />
      <br />

      <Link to={"/"}>Kembali ke List</Link>
    </div>
  );
}

export default Ubah;
