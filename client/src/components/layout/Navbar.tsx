import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-2 font-mono text-[10px]"
    >
      <div className="flex gap-4 mb-4">
        <a href="#about" className="hover:line-through">INDEX</a>
        <a href="#projects" className="hover:line-through">WORKS</a>
        <a href="#contact" className="hover:line-through">VOICE</a>
      </div>
      <div className="h-[1px] w-20 bg-white" />
    </motion.nav>
  );
}
