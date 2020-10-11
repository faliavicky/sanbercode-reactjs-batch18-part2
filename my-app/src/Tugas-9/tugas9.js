import React from 'react';

function Tugas9() {
    return (
        <div className="App" style={{display:"flex", justifyContent:"center"}}>
        <div style={{fontFamily: "serif", border:"1.5px black solid", width:"500px", borderRadius:"10px", marginTop:"100px"}}>
          <h1 style={{paddingTop:"20px"}}>Form Pembelian Buah</h1>
          <form style={{paddingLeft:"20px"}}>
            <label style={{float:"left"}}>
              <span style={{marginRight:"30px"}}><b>Nama Pelanggan</b></span>
              <input type="text" name="name" />
            </label>
            <br></br><br></br>
            <label>
              <table>
                <tr>
                  <td> </td>
                  <td style={{textAlign:"left"}}><input type="radio" name="item" value="semangka"/>Semangka <br></br></td>
                </tr>
                <tr>
                  <td> </td>
                  <td style={{textAlign:"left"}}><input type="radio" name="item" value="jeruk"/>Jeruk<br></br></td>
                </tr>
                <tr>
                  <td> </td>
                  <td style={{textAlign:"left"}}><input type="radio" name="item" value="nanas"/>Nanas<br></br></td>
                </tr>
                <tr>
                  <td> </td>
                  <td style={{textAlign:"left"}}><input type="radio" name="item" value="salak"/>Salak<br></br></td>
                </tr>
                <tr>
                  <td style={{paddingRight:"50px", textAlign:"left"}}><b>Daftar Item</b></td>
                  <td style={{textAlign:"left"}}><input type="radio" name="item" value="anggur"/>Anggur <br></br></td>
                </tr>
              </table>
            </label>
            <button style={{float:"left", marginTop:"10px", marginBottom:"20px", border:"2px solid #616161", borderRadius:"20px", paddingTop:"3px",paddingBottom:"3px", backgroundColor:"#fff"}} >Kirim</button>
          </form>
        </div>
      </div>
    );
  }

export default Tugas9;