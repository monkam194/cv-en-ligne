"use client";

import { motion } from "framer-motion";
import { InteractiveCV } from "@/components/InteractiveCV";

const Ai = () => {
    return (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
          className="min-h-screen p-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[#00ff99] text-4xl font-bold mb-8">Mon IA</h1>
            <p className="text-white/60 text-lg mb-6">
              Découvrez mon intelligence artificielle personnalisée.
            </p>
            
          </div>
          <InteractiveCV />
        </motion.main>
      );
}

export default Ai