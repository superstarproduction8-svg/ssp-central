"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const BRANCHES_BASE = [
  {id:1,code:"BR01",name:"Super-Star Production",role:"Directeur administratif"},
  {id:2,code:"BR02",name:"Kora Vision",role:"Directeur administratif adjoint"},
  {id:3,code:"BR03",name:"Starline",role:"Secrétaire général"},
  {id:4,code:"BR04",name:"Max Serve",role:"Secrétaire adjoint"},
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
  const [branchesData, setBranchesData] = useState<any[]>([]);
  const [totalRevenu, setTotalRevenu] = useState(0);
  const [formBranch, setFormBranch] = useState({responsable:'', devise:'', objectif:'', revenu:0});
  const [formMembre, setFormMembre] = useState({nom_complet:'', telephone:'', whatsapp:'', email:'', adresse:'', statut:'Aktif', notes:''});

  // CHAJE DONE SOU SUPABASE
  async function loadBranches(){
    const { data } = await supabase.from('branches').select('*');
    if(data){
      setBranchesData(data);
      setTotalRevenu(data.reduce((s:any, b:any)=> s + Number(b.revenu||0), 0));
    }
  }
  useEffect(()=>{ loadBranches(); }, []);

  // SOVE BRANCH NAN SUPABASE (pa localStorage)
  async function saveBranch(){
    if(!branch) return;
    const { error } = await supabase.from('branches').update({
      responsable: formBranch.responsable,
      devise: formBranch.devise,
      objectif: formBranch.objectif,
      revenu: formBranch.revenu
    }).eq('code', branch.code);
    
    if(!error){
      alert('Branch sove sou Supabase!');
      setBranch(null);
      loadBranches();
    } else alert(error.message);
  }

  // SOVE MANM NAN SUPABASE
  async function saveMembre(){
    if(!member) return;
    const { error } = await supabase.from('membres').upsert({
      code: member.c,
      ...formMembre
    });
    if(!error){
      alert('Manm sove sou Supabase!');
      setMember(null);
    } else alert(error.message);
  }

  const tabs=["Dashboard","Apèsi","Direction","6 Komite","12 Branch","Investissements","Finans","Membres Komite","6 Komite (Detaye)"];
  // ... RES KOD OU A RETE MENM JAN ... (mwen koupe pou pa twò long, ou jis ajoute fonksyon saveBranch ak saveMembre sou bouton yo)
