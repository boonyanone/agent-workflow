export default function Footer() {
  return (
    <footer className="bg-[#020205] border-t border-glass-border py-12 text-center text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© 2026 Agent Workflow Hub. Built for the era of AI engineering.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-neon-cyan transition-colors">Documentation</a>
          <a href="#" className="hover:text-neon-purple transition-colors">GitHub</a>
          <a href="#" className="hover:text-neon-blue transition-colors">Community</a>
        </div>
      </div>
    </footer>
  );
}
