"use client";

import { useEnquiry } from "@/components/enquiry/EnquiryProvider";

interface Props {
  project?: string;
  className?: string;
  children: React.ReactNode;
}

export default function EnquiryButton({ project, className, children }: Props) {
  const { openEnquiry } = useEnquiry();
  return (
    <button type="button" onClick={() => openEnquiry(project)} className={className}>
      {children}
    </button>
  );
}