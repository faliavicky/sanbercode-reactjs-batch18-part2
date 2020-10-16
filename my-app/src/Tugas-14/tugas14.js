import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {Context} from "./1.js"


function Tugas14() {
    const [dataHargaBuah, setDataHargaBuah] = useContext(Context);
    const [inputBuah, setInputBuah] = useState("");
    const [inputHarga, setInputHarga] = useState("");
    const [inputBerat, setInputBerat] = useState("");
    const [index, setIndex] = useState(-1);


        function handleSubmit(event){
            event.preventDefault();
            let index = index
            let inputBuah = inputBuah
            let inputHarga = inputHarga
            let inputBerat = inputBerat
            let dataHargaBuah = dataHargaBuah

            if (index ===-1){
                setDataHargaBuah([...dataHargaBuah], inputBuah)
                setDataHargaBuah([...dataHargaBuah], inputHarga)
                setDataHargaBuah([...dataHargaBuah], inputBerat)
            }

            else {
                dataHargaBuah.nama[index] = inputBuah
                dataHargaBuah.harga[index] = inputHarga
                dataHargaBuah.berat[index] = inputBerat
                setDataHargaBuah(dataHargaBuah, inputBuah)
                setDataHargaBuah(dataHargaBuah, inputHarga)
                setDataHargaBuah(dataHargaBuah, inputBerat)
            }

            axios.post(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                console.log(res);
                console.log(res.data);
             })
        }

        function handleEdit(event){
            let index = event.target.value
            setInputBuah(dataHargaBuah.nama[index], index)
            setInputHarga(dataHargaBuah.harga[index], index)
            setInputBerat(dataHargaBuah.berat[index], index)

            axios.put(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`)
            .then(res => {
               // lakukan handle ketika sukses
      })
        }

        function handleInputBuahChange(event){
            var value = event.target.value
            setInputBuah(value)
        }

        function handleInputHargaChange(event){
            var value = event.target.value
            setInputHarga(value)
        }

        function handleInputBeratChange(event){
            var value = event.target.value
            setInputBerat(value)
        }

        function handleDelete(event){
            let index = event.target.value
            dataHargaBuah.splice(index,1)
            setDataHargaBuah(dataHargaBuah)

            axios.delete(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`)
             .then(res => {
            console.log(res);
            console.log(res.data);
                })
        }

        useEffect( () => {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                const datadata = res.data;
                setDataHargaBuah(datadata);
            })
          })

    return (
        <>
        <h1 className="judul">Tabel Harga Buah</h1>
        <table className="tabelbuah">
        <tr>
            <th className="tabelnomor">Nomor</th>
            <th className="tabelnama">Nama</th>
            <th className="tabelharga">Harga</th>
            <th className="tabelberat">Berat</th>
            <th className="tabelaksi">Aksi</th>
        </tr>
        {
           setDataHargaBuah.map = (val,index) =>{
            var number = index+1; 
            return (
                    <tr>
                        <td>
                        {number}
                        </td>
                        <td>
                        {val.nama}
                        </td>
                        <td>
                        {val.harga}
                        </td>
                        <td>
                        {val.berat}
                        </td>
                        <td>
                        <button  value={index} onClick={handleEdit}>Edit</button>
                        <button style={{marginLeft: "1em"}} value={index} onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                )
            }
        }
        </table>
        <br></br>
        <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
      <label>
        Masukkan buah:
      </label>          
      <input type="text" required onChange={handleInputBuahChange} value={inputBuah} />
      <br></br>
      <label>
        Masukkan harga:
      </label>          
      <input type="text" required onChange={handleInputHargaChange} value={inputHarga} />
      <br></br>
      <label>
        Masukkan berat:
      </label>          
      <input type="text" required onChange={handleInputBeratChange} value={inputBerat} />
      <br></br>
      <input type="submit" value="Submit" className="buttonsubmit" />
    </form>

        </>
    )
}

export default Tugas14; 