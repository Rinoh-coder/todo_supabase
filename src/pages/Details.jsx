import { TacheForm } from "../components/TacheForm";

const Details = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-3xl font-bold">Détails de la Tâche</h1>
      </div>
      <div className="mt-10 max-w-xl">
          <TacheForm  />
      </div>
    </>
  );
};

export default Details;
