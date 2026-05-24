import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const ibm = IBM_Plex_Sans_Thai_Looped({
  variable: "--font-ibm",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent Workflow Hub | AI Coding Protocol",
  description: "A strict, memory-persistent workflow framework for coding agents. Eliminate context bloat, hallucination, and UI inconsistency forever.",
  keywords: "AI Coding Protocol, Agentic Workflow, NotebookLM, Context Bloat, LLM Context Management, AI Agents",
  openGraph: {
    title: "Agent Workflow Hub | AI Coding Protocol",
    description: "Framework to eliminate context amnesia for AI coding agents.",
    type: "website"
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${ibm.variable} font-sans bg-black text-slate-200 transition-colors duration-300 relative`}
      >
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
          <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[150px] mix-blend-screen animate-blob animation-delay-4000"></div>
        </div>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
