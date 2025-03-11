"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Téléphone", description: "(+33) 751 529 035" },
  { icon: <FaEnvelope />, title: "Email", description: "monkamjose41@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Adresse", description: "Île-de-France, France" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs.init("EzyX6jOiwgHbF45ZS");
      await emailjs.send(
        "service_w9f7wyg",
        "template_17vwifq",
        {
          prenom: formData.prenom,
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
        },
        "EzyX6jOiwgHbF45ZS"
      );

      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({ prenom: "", nom: "", email: "", telephone: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulaire */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                Vous avez un projet ou une idée ? N'hésitez pas à me contacter, je serai ravi d'en discuter avec vous.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Prénom" required />
                <Input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" required />
                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Adresse email" required />
                <Input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Numéro de téléphone" />
              </div>

              {/* Message */}
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-[200px]"
                placeholder="Décrivez votre projet ou laissez-moi un message."
                required
              />

              {/* Bouton d'envoi */}
              <Button type="submit" size="md" className="max-w-40">
                Envoyer
              </Button>

              {/* Message de succès */}
              {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            </form>
          </div>

          {/* Infos */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
