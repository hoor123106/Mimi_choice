"use client";

import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import type { ContactFormData } from "../data/types";

export function useSubmitContact() {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);

  const mutate = (data: ContactFormData, options?: { onSuccess?: () => void }) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out to Mimi Choice. We'll be in touch soon.",
      });
      options?.onSuccess?.();
    }, 800);
  };

  return { mutate, isPending };
}
