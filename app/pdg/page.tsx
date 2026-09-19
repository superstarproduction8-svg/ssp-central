"use client"
import { useEffect, useState } from "react"
const PDG_EMAIL="superstarproduction8@gmail.com"
export default function PDG(){
  const [auth,setAuth]=useState(false)
  const [email,setEmail]=useState('')
  const [users,setUsers]=useState<any[]>([])
  const [tab,setTab]=useState('all')
  useEffect(()=>{
    const saved=localStorage.getItem('ssp_pdg_auth')
    if(saved==='true') setAuth(true)
    const u=JSON.parse(localStorage.getItem('ssp_pending_users')||'[]')
    setUsers(u)
  },[])
  const login=()=>{if(email.toLowerCase()===PDG_EMAIL){localStorage.setItem('ssp_pdg_auth','true');setAuth(true)}else{alert('Email PDG selman: '+PDG_EMAIL)}}
  const valider=(id:number)=>{const u=users.filter((x:any)=>x.id!==id);const validated=JSON.parse(localStorage.getItem('ssp_validated')||'[]');const toVal=users.find((x:any)=>x.id===id);validated.push(toVal);localStorage.setItem('ssp_validated',JSON.stringify(validated));localStorage.setItem('ssp_pending_users',JSON.stringify(u));setUsers(u)}
  const refuser=(id:number)=>{const u=users.filter((x:any)=>x.id!==id);localStorage.setItem('ssp_pending_users',JSON.stringify(u));setUsers(u)}
  if(!auth) return <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0f172a'}}><div style={{background:'white',padding:32,borderRadius:16,width:360}}><h2>🔐 Espace PDG</h2><p>Accès réservé</p><input placeholder="Email PDG" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginBottom:12}}/><button onClick={login} style={{width:'100%',padding:12,background:'black',color:'white',borderRadius:8,border:0}}>Entrer</button><p style={{fontSize:12,color:'#666',marginTop:12}}>{PDG_EMAIL}</p></div></div>
  const filtered=tab==='all'?users:users.filter((u:any)=>u.profil===tab)
  return <div style={{minHeight:'100vh',background:'#f1f5f9',padding:16}}><div style={{maxWidth:900,margin:'0 auto'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><h1>Dashboard PDG</h1><button onClick={()=>{localStorage.removeItem('ssp_pdg_auth');setAuth(false)}} style={{padding:'8px 12px'}}>Déconnexion</button></div><div style={{display:'flex',gap:8,flexWrap:'wrap',margin:'16px 0'}}>{['all','membre','agent','investisseur','employe','etudiant'].map(t=> <button key={t} onClick={()=>setTab(t)} style={{padding:'6px 12px',borderRadius:20,border:0,background:tab===t?'black':'white',color:tab===t?'white':'black',cursor:'pointer'}}>{t} ({t==='all'?users.length:users.filter((u:any)=>u.profil===t).length})</button>)}</div><div style={{display:'grid',gap:12}}>{filtered.length===0 && <div style={{background:'white',padding:24,borderRadius:12,textAlign:'center'}}>Aucun utilisateur en attente</div>}{filtered.map((u:any)=> <div key={u.id} style={{background:'white',padding:16,borderRadius:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><b>{u.nom}</b> - {u.profil}<br/><small>{u.email} | {u.tel}<br/>{u.date}</small></div><div style={{display:'flex',gap:8}}><button onClick={()=>valider(u.id)} style={{padding:'8px 14px',background:'#16a34a',color:'white',border:0,borderRadius:8}}>Valider</button><button onClick={()=>refuser(u.id)} style={{padding:'8px 14px',background:'#ef4444',color:'white',border:0,borderRadius:8}}>Refuser</button></div></div>)}</div><div style={{marginTop:24,background:'white',padding:16,borderRadius:12}}><h3>Lyen Public ou:</h3><code style={{background:'#f1f5f9',padding:8,display:'block',borderRadius:8}}>https://ssp-central.vercel.app/inscription</code></div></div></div>
}
