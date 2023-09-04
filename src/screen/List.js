import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

function List() {
  const [dataMahasiswa, setDataMahasiswa] = useState([]);

  useEffect(() => {
    getData();
  });

  // get data from db
  const getData = async () => {
    const { data, error } = await supabase.from("mahasiswa").select();
    setDataMahasiswa(data);
  };

  const onDelete = async (id) => {
    const { data, error } = await supabase
      .from("mahasiswa")
      .delete()
      .eq("id", id);
  };

  return (
    <div>
      <h1>List: Mahasiswa</h1>

      <Link to={"/tambah/"}>Tambah</Link>

      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>id</th>
            <th>nim</th>
            <th>nama</th>
            <th>prodi</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {dataMahasiswa.map((value) => (
            <tr>
              <td>{value.id}</td>
              <td>{value.nim}</td>
              <td>{value.nama}</td>
              <td>{value.prodi}</td>
              <td>
                <Link to={"ubah/" + value.id}>Ubah</Link>
                <button
                  onClick={() => {
                    window.confirm("Anda Yakin?" && onDelete(value.id));
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
