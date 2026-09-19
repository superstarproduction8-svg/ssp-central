"use client"
import { useState } from "react"
const profils = [
  {id:'membre',label:'Membre',color:'#2563eb',emoji:'👤'},
  {id:'agent',label:'Agent Commercial',color:'#16a34a',emoji:'💼'},
  {id:'investisseur',label:'Investisseur',color:'#ca8a04',emoji:'💰'},
  {id:'employe',label:'Employé',color:'#7c3aed',emoji:'👨‍💼'},
  {id:'etudiant',label:'Étudiant',color:'#ea580c',emoji:'🎓'},
]
export default function Inscription(){
  const [selected,setSelected]=useState(null as any)
  const [form,setForm]=useState({nom:'',email:'',tel:'',pwd:'',extra:''})
  const [done,setDone]=useState(false)
  const submit=()=>{
    if(!form.nom||!form.email||!form.tel||!form.pwd){alert('Ranpli tout chan yo');return}
    const users=JSON.parse(localStorage.getItem('ssp_pending_users')||'[]')
    users.push({id:Date.now(),profil:selected,...form,date:new Date().toLocaleString()})
    localStorage.setItem('ssp_pending_users',JSON.stringify(users))
    setDone(true)
  }
  if(done) return <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f8fafc'}}><div style={{background:'white',padding:32,borderRadius:16,textAlign:'center',maxWidth:400}}><div style={{fontSize:48}}>✅</div><h2>Compte créé!</h2><p>En attente de validation par le PDG.</p><button onClick={()=>{setDone(false);setSelected(null)}} style={{marginTop:16,padding:'10px 20px',background:'black',color:'white',borderRadius:8,border:0}}>Retour</button></div></div>
  return <div style={{minHeight:'100vh',background:'#f8fafc',padding:20}}><div style={{maxWidth:520,margin:'0 auto'}}><div style={{textAlign:'center',margin:'20px 0'}}><h1>SSP Central</h1><p>Rejoignez la plateforme</p></div>{!selected ? <><h3>Choisissez votre profil:</h3><div style={{display:'grid',gap:12}}>{profils.map(p=> <button key={p.id} onClick={()=>setSelected(p.id)} style={{display:'flex',alignItems:'center',gap:12,padding:16,borderRadius:12,border:'1px solid #e2e8f0',background:'white',cursor:'pointer',textAlign:'left'}}><span style={{fontSize:28}}>{p.emoji}</span><span style={{fontWeight:600}}>{p.label}</span><span style={{marginLeft:'auto',background:p.color,color:'white',padding:'4px 10px',borderRadius:20,fontSize:12}}>Choisir</span></button>)}</div></> : <><button onClick={()=>setSelected(null)} style={{marginBottom:12,background:'none',border:0,cursor:'pointer'}}>← Retour</button><div style={{background:'white',padding:24,borderRadius:16}}><h2>Inscription: {profils.find((x:any)=>x.id===selected)?.label}</h2><input placeholder="Nom complet" value={form.nom} onChange={e=>setForm({...form,nom:e.target.value})} style={{width:'100%',padding:12,borderRadius:10,border:'1px solid #e2e8f0',marginBottom:12}}/><input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:12,borderRadius:10,border:'1px solid #e2e8f0',marginBottom:12}}/><input placeholder="Téléphone WhatsApp" value={form.tel} onChange={e=>setForm({...form,tel:e.target.value})} style={{width:'100%',padding:12,borderRadius:10,border:'1px solid #e2e8f0',marginBottom:12}}/><input placeholder="Mot de passe" type="password" value={form.pwd} onChange={e=>setForm({...form,pwd:e.target.value})} style={{width:'100%',padding:12,borderRadius:10,border:'1px solid #e2e8f0',marginBottom:12}}/><button onClick={submit} style={{width:'100%',padding:14,background:'black',color:'white',borderRadius:10,border:0,fontWeight:600,marginTop:12}}>S'inscrire</button></div></>}</div></div>
}
