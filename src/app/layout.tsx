import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Tanimowo | Full-Stack & DevSecOps",
  description:
    "Portfolio of Stephen Tanimowo — Full-Stack Developer & DevSecOps Engineer focused on secure software, cloud security, SIEM, compliance automation, and incident response.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-900 antialiased">
        {/* Background image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/stephen-bg.jpg"
            alt="Stephen Tanimowo background"
            fill
            priority
            className="object-cover object-center blur-sm"
          />

          {/* Professional overlays for readability */}
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/80" />
        </div>

        {/* Content */}
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
