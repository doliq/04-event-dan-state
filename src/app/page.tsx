"use client";
import Tombol_1, {Tombol_2, Tombol_3} from "./component/button";
import Gallery from "./data/gallery";
import Form from "./component/form";
import Accordion from "./component/accordion";

export default function Home(){
  return(
    <>
    <div className="container ,mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1/>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
      <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
      <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
      </div>
      <br></br>
      <Gallery/>
      <br></br>
      <Form/>
      <Accordion/>
      </>
  );
}