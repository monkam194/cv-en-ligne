"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const DEFAULT_MESSAGES = [
  {
    type: "ai",
    content:
      "Bonjour ! Je suis l'IA représentant le propriétaire de ce CV. Comment puis-je vous aider ?",
  },
];

export function InteractiveCV() {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", content: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          content:
            "Je suis programmé pour répondre comme le propriétaire de ce CV. Que souhaitez-vous savoir sur mon expérience professionnelle, mes compétences ou ma formation ?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="flex items-center justify-center bg-black p-4"
    >
      <Card className="w-full h-full max-w-4xl flex flex-col border-[#00ff99] border-2 bg-black shadow-lg overflow-hidden">
        <ScrollArea className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === "user"
                    ? "bg-[#00ff99] text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {message.content}
              </motion.div>
            </div>
          ))}
        </ScrollArea>
        <div className="p-4 border-t border-[#00ff99] flex items-center gap-2 bg-gray-900">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Posez une question sur mon CV..."
            className="flex-1 bg-gray-800 text-white border-[#00ff99] px-4 py-2 rounded-lg"
          />
          <Button
            onClick={handleSend}
            className="bg-[#00ff99] text-black hover:bg-[#00cc00] p-2 rounded-lg"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
