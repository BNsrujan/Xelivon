"use client";

import React from "react";

type EnquiryContextValue = {
  /** Slug of the service the visitor clicked "Enquire" on, or "". */
  selectedService: string;
  setSelectedService: (slug: string) => void;
  /** Preselect a service and scroll the visitor to the contact form. */
  startEnquiry: (slug?: string) => void;
};

const EnquiryContext = React.createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [selectedService, setSelectedService] = React.useState("");

  const startEnquiry = React.useCallback((slug = "") => {
    setSelectedService(slug);
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const value = React.useMemo(
    () => ({ selectedService, setSelectedService, startEnquiry }),
    [selectedService, startEnquiry]
  );

  return (
    <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
  );
}

export function useEnquiry(): EnquiryContextValue {
  const context = React.useContext(EnquiryContext);

  if (!context) {
    throw new Error("useEnquiry must be used inside <EnquiryProvider>");
  }

  return context;
}
