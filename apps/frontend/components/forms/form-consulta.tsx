"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

const FormConsulta = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState(searchParams.get("id") ?? "");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const trimmed = id.trim();
    if (!trimmed) return;
    router.push(`/consultar?id=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="consulta-id">Código de acompanhamento</FieldLabel>
          <Input
            id="consulta-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Cole aqui o código recebido no cadastro"
            autoComplete="off"
            spellCheck={false}
          />
        </Field>

        <Field orientation="horizontal">
          <Button type="submit" variant="primary" className="w-full">
            {"Consultar posição"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default FormConsulta;
