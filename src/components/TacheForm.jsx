"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

export function TacheForm({ defaultValues = {} }) {
  // Use defaultValues from props if provided
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues, // Set default values for the form
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="titre" className="block  font-medium text-foreground">
          Titre
        </label>
        <Input id="titre" {...register("titre", { required: true })} />
        {errors.titre && (
          <span className="text-red-500">Veillez entrer un titre</span>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block  font-medium text-foreground"
        >
          Description
        </label>
        <Textarea
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">Veillez entrer une description</span>
        )}
      </div>

      <Button type="submit">Ajouter une tâche</Button>
    </form>
  );
}
