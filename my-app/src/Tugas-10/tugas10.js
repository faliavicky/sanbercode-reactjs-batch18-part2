import React from 'react';


class TabelNama extends React.Component {
    render() {
        return <div>{this.props.nama}</div>;
    }
}

class TabelHarga extends React.Component {
    render() {
        return <div>{this.props.harga}</div>;
    }
}
  
class TabelBerat extends React.Component {
    render() {
        return <div>{this.props.berat}</div>;
    }
}

  let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]
  
  class Tugas10 extends React.Component {
    render() {
        return (
            <>
            <h1 className="judul" style={{fontFamily: "serif"}}>Tabel Harga Buah</h1>
            <table className="tabelbuah">
            <tr>
                <th className="tabelnama">Nama</th>
                <th className="tabelharga">Harga</th>
                <th className="tabelberat">Berat</th>
            </tr>
            {dataHargaBuah.map(buah=> {
                return (
                        <tr>
                            <td>
                            <TabelNama nama={buah.nama}/>
                            </td>
                            <td>
                            <TabelHarga harga={buah.harga}/>
                            </td>
                            <td>
                            <TabelBerat berat={buah.berat}/>
                            </td>
                        </tr>
                )
            })}
            </table>
            </>
        )
    }
}

  export default Tugas10;