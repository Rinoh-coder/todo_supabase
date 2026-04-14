import { useEffect, useState } from "react";
import Tache from "./Tache";
import supabase from "@/supabase/supabaseClient";

const ListeDesTaches = () => {
  const [ taches, setTaches ] = useState([]);
  // const taches = [
  //   {
  //     id: 1,
  //     titre: "Créer une vidéo marketing",
  //     description:
  //       "Développer une vidéo promotionnelle pour le lancement du nouveau produit, en mettant l'accent sur les principales caractéristiques et les avantages pour les clients.",
  //     status: false,
  //     created_at: "2023-08-15T10:30:00Z",
  //   },
  //   {
  //     id: 2,
  //     titre: "Mettre à jour le contenu du site web",
  //     description:
  //       "Réviser le contenu de la page d'accueil pour refléter les récents changements dans la gamme de produits et améliorer le SEO.",
  //     status: false,
  //     created_at: "2023-08-20T09:00:00Z",
  //   },
  // ];
useEffect(() => {
  const fetchTaches = async () => {
    const { data, error } = await supabase.from("taches").select("*").order("id", { ascending: false });
    if (error) {
      console.error('Erreur lors de la récupération des tâches', error);
    } else {
      setTaches(data);
    }
  };
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
