import { useEffect, useState } from "react";
import Tache from "./Tache";
import supabase from "@/supabase/supabaseClient";

const ListeDesTaches = () => {
  const [ taches, setTaches ] = useState([]);
  const fetchTaches = async () => {
    const { data, error } = await supabase.from("taches").select("*").order("id", { ascending: false });
    if (error) {
      console.error('Erreur lors de la récupération des tâches', error);
    } else {
      setTaches(data);
    }
  };
useEffect(() => {

  fetchTaches();
}, []);
  return (
    <>
      {taches.length ? (
        <ul className="mt-6 space-y-5">
          {taches.map((tache) => (
            <Tache tache={tache} key={tache.id} />
          ))}
        </ul>
      ) : (
        <p className="text-xl mt-8 ">Pas de Taches 😭 </p>
      )}
    </>
  );
};

export default ListeDesTaches;
