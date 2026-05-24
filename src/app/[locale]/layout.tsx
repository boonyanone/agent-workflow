import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        className={`${inter.variable} font-sans bg-slate-50 dark:bg-indigo-950 text-slate-800 dark:text-slate-200 transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
