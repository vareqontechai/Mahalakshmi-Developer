"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import EnquiryModal from "./EnquiryModal";

interface EnquiryContextValue {
  openEnquiry: (project?: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return ctx;
}

const SEEN_KEY = "enquiry_popup_seen";
const AUTO_OPEN_DELAY_MS = 1500;

export default function EnquiryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState("");

  const openEnquiry = useCallback((p?: string) => {
    setProject(p ?? "");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  // Auto-open once per visit (per browser tab session)
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
      setIsOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}
      {isOpen && <EnquiryModal defaultProject={project} onClose={close} />}
    </EnquiryContext.Provider>
  );
}