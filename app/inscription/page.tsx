"use client"; 
import {useState} from "react"; 
export default function Page(){
 const [n,setN]=useState(""); const [e,setE]=useState("");
 return <div style={{padding:40,maxWidth:400,margin:'auto'}}><h1>Enskripsyon SSP</h1>
 <input placeholder="Non w" value={n} onChange={a=>setN(a.target.value)} style={{width:'100%',padding:12,margin:'10px 0'}}/>
 <input placeholder="Email" value={e} onChange={a=>setE(a.target.value)} style={{width:'100%',padding:12}}/>
 <button onClick={()=>{const u=JSON.parse(localStorage.getItem('ssp')||'[]');u.push({name:n,email:e});localStorage.setItem('ssp',JSON.stringify(u));alert('Voye!')}} style={{width:'100%',padding:12,marginTop:10,background:'white',color:'black'}}>Voye</button>
 <br/><br/><a href="/">Akèy</a></div>
}
