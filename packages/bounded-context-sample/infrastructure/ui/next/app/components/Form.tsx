'use client';

import { Example } from "@/domain/Example";
import { useCreateExample } from "@app/app-hooks/useCreateExample";
import { useState } from "react";
import Button from "shared/ui/Button";

export default function Form() {
  const createExample = useCreateExample();

  const [example, setExample] = useState<Example | undefined>()
  
  return (
    <div>
      <h1 className="text-white">Form</h1>
      <pre>{JSON.stringify(example)}</pre>
      <Button onClick={() => {
        createExample.execute("WOW!").then(example => {
          setExample(example);
        });
      }} />
    </div>
  );
}
