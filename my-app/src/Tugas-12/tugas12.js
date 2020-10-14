import React from 'react';
/*
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
}*/
  
  class Tugas12 extends React.Component {
    constructor(props){
        super(props)
        this.state ={
         dataHargaBuah : [ {nama: "Semangka", harga: 10000, berat: 1000},
         {nama: "Anggur", harga: 40000, berat: 500},
         {nama: "Strawberry", harga: 30000, berat: 400},
         {nama: "Jeruk", harga: 30000, berat: 1000},
         {nama: "Mangga", harga: 30000, berat: 500} ],
         inputBuah: "",
         inputHarga: "",
         inputBerat: "",
         index: -1  
        }
        // bind in constructor
        this.handleEdit = this.handleEdit.bind(this)
      }

       // method with normal function
    handleSubmit(event){
    event.preventDefault()
    let index = this.state.index
    let inputBuah = this.state.inputBuah
    let inputHarga = this.state.inputHarga
    let inputBerat = this.state.inputBerat
    let dataHargaBuah = this.state.dataHargaBuah
    
    // if index -1 means submit create
    if (index === -1){
      this.setState({dataHargaBuah: [...dataHargaBuah, inputBuah], inputBuah: ""})
      this.setState({dataHargaBuah: [...dataHargaBuah, inputHarga], inputHarga: ""})
      this.setState({dataHargaBuah: [...dataHargaBuah, inputBerat], inputBerat: ""})
    }else{
      // means submit edit
      dataHargaBuah.nama[index] = inputBuah
      dataHargaBuah.harga[index] = inputHarga
      dataHargaBuah.berat[index] = inputBerat
      this.setState({dataHargaBuah, inputBuah: "",})
      this.setState({dataHargaBuah, inputHarga: "",})
      this.setState({dataHargaBuah, inputBerat: "",})
    }
  }

  handleEdit(event){
    let index = event.target.value;
    this.setState({inputBuah: this.state.dataHargaBuah.nama[index], index})
    this.setState({inputHarga: this.state.dataHargaBuah.harga[index], index})
    this.setState({inputBerat: this.state.dataHargaBuah.berat[index], index})

  }

  //method with arrow function
  handleInputBuahChange = (event) =>{
    var value = event.target.value
    this.setState({
      inputBuah: value,
    })
  }
  handleInputHargaChange = (event) =>{
    var value = event.target.value
    this.setState({
      inputHarga: value,
    })
  }
  handleInputBeratChange = (event) =>{
    var value = event.target.value
    this.setState({
      inputBerat: value,
    })
  }

  handleDelete = (event) =>{
    let index = event.target.value;
    this.state.dataHargaBuah.splice(index, 1)
    this.setState({dataHargaBuah: this.state.dataHargaBuah})
  }

    render() {
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
               this.state.dataHargaBuah.map((val,index)=>{
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
                            <button  value={index} onClick={this.handleEdit}>Edit</button>
                            <button style={{marginLeft: "1em"}} value={index} onClick={this.handleDelete}>Delete</button>
                            </td>
                        </tr>
                )
            })}
            </table>
            <br></br>
            <form style={{textAlign: "center"}} onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Masukkan buah:
          </label>          
          <input type="text" required onChange={this.handleInputBuahChange} value={this.state.inputBuah} />
          <br></br>
          <label>
            Masukkan harga:
          </label>          
          <input type="text" required onChange={this.handleInputHargaChange} value={this.state.inputHarga} />
          <br></br>
          <label>
            Masukkan berat:
          </label>          
          <input type="text" required onChange={this.handleInputBeratChange} value={this.state.inputBerat} />
          <br></br>
          <input type="submit" value="Submit" className="buttonsubmit" />
        </form>

            </>
        )
    }
}

export default Tugas12;