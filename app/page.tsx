"use client";
import { useState } from "react";

const BRANCHES = [
  {id:1,code:"BR01",name:"Super-Star Production",role:"Directeur administratif"},
  {id:2,code:"BR02",name:"Kora Vision",role:"Directeur administratif adjoint"},
  {id:3,code:"BR03",name:"Starline",role:"Secrétaire général"},
  {id:4,code:"BR04",name:"Max Serve",role:"Secrétaire adjoint",fill:"5/8"},
  {id:5,code:"BR05",name:"Trust Point",role:"Directeur Financier"},
  {id:6,code:"BR06",name:"Production Hub",role:"Directeur développement et business"},
  {id:7,code:"BR07",name:"Impact Global",role:"Directeur marketing et publicité"},
  {id:8,code:"BR08",name:"Alpha Production",role:"Directeur évènementiel"},
  {id:9,code:"BR09",name:"Nexus Group",role:"Directeur Créatif"},
  {id:10,code:"BR10",name:"Star Ventures",role:"Directeur Média et Production"},
  {id:11,code:"BR11",name:"Future Group",role:"Directeur Capital Humain"},
  {id:12,code:"BR12",name:"New Standard",role:"Directeur Relation Stratégique"},
];

export default function Page(){
  const [tab,setTab]=useState("Dashboard");
  const [branch,setBranch]=useState<any>(null);
  const [member,setMember]=useState<any>(null);
  const [mtab,setMtab]=useState("Idantite");
  const tabs=["Dashboard","Apèsi","Direction","6 Komite","12 Branch","Investissements","Finans","Membres Komite","6 Komite (Detaye)"];

  return(
    <div style={{minHeight:"100vh",background:"#F7F4EC",fontFamily:"Inter,sans-serif",color:"#0B1739"}}>
      <style>{`
        .hero{background:radial-gradient(120% 160% at 50% 0%, #16266A 0%, #0B1739 55%, #060D24 100%);padding:1.6rem 1rem;border-bottom:3px solid #D4AF37;text-align:center}
        .tabs{display:flex;gap:0;overflow-x:auto;background:#F7F4EC;border-bottom:1px solid #E4DCC5;position:sticky;top:0;z-index:10}
        .t{padding:0.6rem 0.8rem;font-size:12px;font-weight:600;color:#5C6478;cursor:pointer;white-space:nowrap;border:none;background:none;border-bottom:2px solid transparent}
        .t.active{color:#0B1739;border-bottom-color:#D4AF37;font-weight:700}
        .card{background:#fff;border:1px solid #E4DCC5;border-radius:4px}
        .card-top{border-left:4px solid #A9822A;padding:0.9rem}
        .kpi{background:#0B1739;border-radius:4px;padding:1rem;color:#fff;position:relative} .kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#A9822A,#D4AF37)}
        .overlay{position:fixed;inset:0;background:rgba(11,23,57,0.6);z-index:50;display:flex;align-items:flex-start;justify-content:center;padding:1rem;overflow-y:auto}
        .panel{background:#fff;max-width:760px;width:100%;border-radius:6px;overflow:hidden;margin-bottom:2rem}
        .f{margin-bottom:0.9rem} .f label{font-size:11px;color:#5C6478;font-weight:600;display:block;margin-bottom:3px}
        .f input,.f textarea,.f select{width:100%;border:1px solid #E4DCC5;border-radius:3px;padding:0.55rem;font-size:13px}
      `}</style>

      <div className="hero">
        <div style={{width:72,height:72,margin:"0 auto",background:"#D4AF37",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#0B1739"}}>SSP</div>
        <h1 style={{color:"#fff",margin:"0.5rem 0 0",fontSize:24}}>SSP <span style={{color:"#D4AF37"}}>CENTRAL</span></h1>
        <p style={{color:"#C8CFE6",fontSize:10,letterSpacing:"0.15em",margin:"4px 0 0"}}>VISION · DISCIPLINE · DÉVELOPPEMENT</p>
      </div>

      <div className="tabs">
        {tabs.map(t=><button key={t} className={`t ${tab===t?'active':''}`} onClick={()=>setTab(t)}>{t}</button>)}
      </div>

      <div style={{maxWidth:1080,margin:"0 auto",padding:"1rem"}}>
        {tab==="Dashboard" && <>
          <h2 style={{borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Sitiyasyon jeneral</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12}}>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0/12</div><div style={{fontSize:11,color:"#B8C1DE"}}>Branch aktif (ak responsab)</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>1</div><div style={{fontSize:11,color:"#B8C1DE"}}>Pwojè & misyon an kou</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0</div><div style={{fontSize:11,color:"#B8C1DE"}}>Travay an reta</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0</div><div style={{fontSize:11,color:"#B8C1DE"}}>Envestisman anrejistre</div></div>
          </div>
          <div className="card" style={{marginTop:16,padding:12,borderLeft:"3px solid #D4AF37"}}><div style={{fontSize:11,color:"#5C6478"}}>Total revni tout branch (mwa sa a)</div><div style={{fontSize:20,fontWeight:800}}>0 HTG</div></div>
          <div style={{background:"#EEF6EF",borderLeft:"3px solid #3E7A4F",padding:10,marginTop:12,fontSize:12,borderRadius:3}}>Pa gen okenn travay an reta kounye a — tout bagay alè.</div>
        </>}

        {tab==="12 Branch" && <>
          <h2 style={{borderLeft:"4px solid #D4AF37",paddingLeft:8}}>12 branch yo</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:10,marginTop:12}}>
            {BRANCHES.map(b=><div key={b.id} className="card" style={{cursor:"pointer"}} onClick={()=>setBranch(b)}><div className="card-top"><div style={{fontSize:10,color:"#A9822A",fontWeight:700}}>{b.code}</div><div style={{fontWeight:700}}>{b.name}</div><div style={{fontSize:11,color:"#5C6478"}}>{b.role}</div></div><div style={{padding:"6px 12px",background:"#FBF9F2",fontSize:10,color:"#5C6478",borderTop:"1px solid #E4DCC5"}}>● {b.fill||"0/8"} detay ranpli</div></div>)}
          </div>
        </>}

        {tab==="Finans" && <>
          <h2 style={{borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Chèn rapò finansye (1→10)</h2>
          {["Kès / biznis endividyèl","Responsab Business","Directeur Branche","Secrétaire Général","DA + DF","SG — dosye global","DG — Validasyon","DF — Egzekite peman","Benefis net — 8 FON","Rapò Finansye Konsolide"].map((t,i)=><div key={i} className="card" style={{display:"flex",gap:8,padding:10,marginBottom:6}}><div style={{width:22,height:22,background:"#0B1739",color:"#D4AF37",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700}}>{i+1}</div><div style={{fontSize:12}}>{t}</div></div>)}
          <h2 style={{marginTop:20,borderLeft:"4px solid #D4AF37",paddingLeft:8}}>8 Fon SSP CENTRAL</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10}}>
            {["Capital des Investisseurs","Fonds Rémunération Membres","Fonds Opérationnels","Fonds Investissement Interne","Fonds Réserve Urgence","Fonds Marketing","Fonds Gouvernance","Fonds Investissements Externes"].map(f=><div key={f} className="card" style={{borderLeft:"3px solid #D4AF37",padding:10}}><div style={{fontWeight:600,fontSize:12}}>{f}</div><div style={{fontSize:10,color:"#5C6478"}}>Fon kolektif pou jesyon SSP CENTRAL</div></div>)}
          </div>
        </>}

        {tab==="Membres Komite" && <>
          <h2 style={{borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Membres du Comité (12)</h2>
          <p style={{fontSize:12,color:"#5C6478"}}>Dosye pèsonèl konplè pou 12 moun ki dirije Komite/branch yo</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:10}}>
            {[
              {c:"DA",n:"Directeur Administratif"},{c:"DAA",n:"Directeur Administratif Adjoint"},{c:"SG",n:"Secrétaire Général"},{c:"SA",n:"Secrétaire Adjoint"},{c:"DF",n:"Directeur Financier"},{c:"DDB",n:"Directeur développement et business"},{c:"DMP",n:"Directeur marketing et publicité"},{c:"DEV",n:"Directeur évènementiel"},{c:"DC",n:"Directeur Créatif"},{c:"DMPR",n:"Directeur Média & Production"},{c:"DCH",n:"Directeur Capital Humain"},{c:"DRS",n:"Directeur Relation Stratégique"},
            ].map(m=><div key={m.c} className="card" style={{cursor:"pointer"}} onClick={()=>setMember(m)}><div className="card-top"><div style={{fontSize:10,color:"#A9822A",fontWeight:700}}>{m.c}</div><div style={{fontWeight:700}}>{m.n}</div><div style={{fontSize:11,color:"#5C6478"}}>{m.n}</div></div><div style={{padding:"6px 12px",background:"#FBF9F2",fontSize:10,color:"#888"}}>● 0/6 seksyon aktif</div></div>)}
          </div>
          <h2 style={{marginTop:24,borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Dosye kolektif (plizyè manm ansanm)</h2>
          <button style={{width:"100%",padding:10,border:"1px dashed #A9822A",color:"#A9822A",background:"#FFFEF9",borderRadius:4,marginTop:8}}>+ Ajoute yon dosye kolektif</button>
          <h2 style={{marginTop:24,borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Décisions & Engagements (Komite Central)</h2>
          <button style={{width:"100%",padding:10,border:"1px dashed #A9822A",color:"#A9822A",background:"#FFFEF9",borderRadius:4,marginTop:8}}>+ Ajoute yon desizyon</button>
        </>}

        {tab==="6 Komite (Detaye)" && <>
          <h2 style={{borderLeft:"4px solid #D4AF37",paddingLeft:8}}>Komite Central</h2>
          <p style={{fontSize:12,color:"#5C6478"}}>Gwo desizyon, apwouve pwojè, valide gwo depans, nonmen/revoke responsab — siveye tout lòt komite</p>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:8}}>
            {["Komite Central","Komite Estratejik & Devlopman","Komite Finans & Envestisman","Komite Jiridik & Disiplin","Komite Maketing & Medya","Komite Evènman & Kominikasyon"].map(k=><div key={k} style={{background:k==="Komite Central"?"#0B1739":"#fff",color:k==="Komite Central"?"#D4AF37":"#0B1739",border:"1px solid #E4DCC5",padding:"4px 10px",borderRadius:20,fontSize:11}}>{k}</div>)}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:14}}>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>5</div><div style={{fontSize:11,color:"#B8C1DE"}}>Manm Komite Central</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0/0</div><div style={{fontSize:11,color:"#B8C1DE"}}>Reyinyon prevwa / reyalize</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0/0</div><div style={{fontSize:11,color:"#B8C1DE"}}>Desizyon an tann / egzekite</div></div>
            <div className="kpi"><div style={{fontSize:26,fontWeight:700}}>0</div><div style={{fontSize:11,color:"#B8C1DE"}}>Misyon an kou</div></div>
          </div>
          <div style={{display:"flex",justifyContent:"flex-end",marginTop:20}}><button style={{background:"#0B1739",color:"#fff",padding:"8px 14px",borderRadius:4,border:"none",fontSize:12}}>Sove tout dosye a</button></div>
        </>}

        {(tab==="Apèsi"||tab==="Direction"||tab==="6 Komite"||tab==="Investissements") && <div style={{padding:40,textAlign:"center",color:"#888"}}>Seksyon {tab} — vèsyon konplè a ak tout fòmilè yo ap vini nan menm modèl Finans & Membres yo!</div>}
      </div>

      {branch && (
        <div className="overlay" onClick={()=>setBranch(null)}>
          <div className="panel" onClick={e=>e.stopPropagation()}>
            <div style={{background:"#0B1739",padding:16,color:"#fff",display:"flex",justifyContent:"space-between"}}>
              <div><div style={{color:"#D4AF37",fontSize:11,fontWeight:700}}>{branch.code}</div><div style={{fontSize:20,fontWeight:700}}>{branch.name}</div><div style={{fontSize:12,color:"#B8C1DE"}}>{branch.role}</div></div>
              <button onClick={()=>setBranch(null)} style={{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer"}}>×</button>
            </div>
            <div style={{padding:16}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div className="f"><label>Non responsab la (moun reyèl)</label><input placeholder="Non konplè" /></div>
                <div className="f"><label>Deviz / slogan</label><input placeholder="Deviz branch la" /></div>
              </div>
              <div className="f"><label>Objektif jeneral</label><textarea placeholder="Objektif jeneral..." /></div>
              <div className="f"><label>Revni mwa sa a (HTG) — pou Dashboard</label><input type="number" placeholder="0" /></div>
              <div style={{display:"flex",justifyContent:"flex-end",gap:8,marginTop:16}}><button onClick={()=>setBranch(null)} style={{padding:"8px 14px",border:"1px solid #E4DCC5",background:"#fff",borderRadius:4}}>Fèmen</button><button style={{padding:"8px 14px",background:"#0B1739",color:"#fff",border:"none",borderRadius:4}}>Sove branch sa a</button></div>
            </div>
          </div>
        </div>
      )}

      {member && (
        <div className="overlay" onClick={()=>setMember(null)}>
          <div className="panel" onClick={e=>e.stopPropagation()} style={{maxWidth:860}}>
            <div style={{background:"#121F4A",padding:14,color:"#fff",display:"flex",justifyContent:"space-between"}}>
              <div><div style={{color:"#D4AF37",fontSize:11,fontWeight:700}}>{member.c}</div><div style={{fontSize:20,fontWeight:700}}>{member.n}</div><div style={{fontSize:12,color:"#B8C1DE"}}>Pwofil manm Komite</div></div>
              <button onClick={()=>setMember(null)} style={{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer"}}>×</button>
            </div>
            <div style={{display:"flex",gap:0,overflowX:"auto",borderBottom:"1px solid #E4DCC5",background:"#FBF9F2"}}>
              {["Idantite","Fonction","Missions","Dosye kolektif","Disiplin","Évolution","Présence","Calendrier","Décisions","Rapò mansyèl","Documents","Istorik"].map(t=><button key={t} onClick={()=>setMtab(t)} style={{padding:"8px 10px",fontSize:11,fontWeight:mtab===t?700:500,color:mtab===t?"#0B1739":"#5C6478",border:"none",background:mtab===t?"#fff":"none",borderBottom:mtab===t?"2px solid #D4AF37":"2px solid transparent",whiteSpace:"nowrap",cursor:"pointer"}}>{t}</button>)}
            </div>
            <div style={{padding:16}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div className="f"><label>Non konplè</label><input /></div>
                <div className="f"><label>Referans / Nimewo manm</label><input /></div>
                <div className="f"><label>Dat nesans</label><input type="date" /></div>
                <div className="f"><label>Sèks</label><select><option>--</option><option>Gason</option><option>Fanm</option></select></div>
                <div className="f"><label>Telefòn</label><input /></div>
                <div className="f"><label>WhatsApp</label><input /></div>
                <div className="f"><label>Imèl</label><input /></div>
                <div className="f"><label>Adrès</label><input /></div>
                <div className="f" style={{gridColumn:"1 / -1"}}><label>Pyès idantifikasyon / referans</label><input /></div>
                <div className="f"><label>Dat antre nan Komite</label><input type="date" /></div>
                <div className="f"><label>Statut</label><select><option>Aktif</option><option>Inaktif</option></select></div>
                <div className="f"><label>Dat kòmansman manda</label><input type="date" /></div>
                <div className="f"><label>Dat fen manda</label><input type="date" /></div>
                <div className="f"><label>Kontak ijans (non)</label><input /></div>
                <div className="f"><label>Kontak ijans (tel)</label><input /></div>
                <div className="f" style={{gridColumn:"1 / -1"}}><label>Nòt administratif</label><textarea /></div>
                <div className="f" style={{gridColumn:"1 / -1"}}><label>Foto (imaj)</label><input type="file" /></div>
              </div>
              <div style={{display:"flex",justifyContent:"flex-end",marginTop:16}}><button style={{background:"#0B1739",color:"#fff",padding:"10px 18px",border:"none",borderRadius:4}}>Sove pwofil sa a</button></div>
            </div>
          </div>
        </div>
      )}

      <div style={{textAlign:"center",padding:20,fontSize:11,color:"#999"}}>SSP CENTRAL © 2026 — VISION · DISCIPLINE · DÉVELOPPEMENT — Done chaje soti nan baz pataje a.</div>
    </div>
  );
}
