"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const API_URL = "https://mon-api-aspnet-f2ezcsc9chgag6bm.canadacentral-01.azurewebsites.net/api/GroqChat/send-message";

const DEFAULT_MESSAGES = [
  {
    type: "ai",
    content: "Bonjour ! Mon nom est José. Comment puis-je vous aider ?",
  },
];

export function InteractiveCV() {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { type: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (response.ok && data.response) {
        setMessages((prev) => [...prev, { type: "ai", content: data.response }]);
      } else {
        setMessages((prev) => [...prev, { type: "ai", content: "Je ne peux pas répondre pour le moment." }]);
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
      setMessages((prev) => [...prev, { type: "ai", content: "Une erreur est survenue. Réessayez plus tard." }]);
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="flex items-center justify-center"
    >
      <Card className="w-full h-full max-w-4xl flex flex-col border-[#00ff99] border-2 bg-black shadow-lg overflow-hidden">
        <ScrollArea className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } pt-2`}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`max-w-[100%] rounded-lg p-3 ${
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
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            placeholder="Posez une question..."
            rows={1}
            style={{ minHeight: "40px" }}
            className="flex-1 bg-gray-800 text-white border-[#00ff99] px-4 py-2 rounded-lg resize-none overflow-hidden"
            onInput={(e) => {
              e.currentTarget.style.height = "auto"; // Reset pour recalculer
              e.currentTarget.style.height = e.currentTarget.scrollHeight + "px"; // Ajuste la hauteur dynamiquement
            }}
          />
          <Button
            onClick={handleSend}
            className="bg-[#00ff99] text-black hover:bg-[#00cc00] p-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "..." : <Send className="h-5 w-5" />}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
