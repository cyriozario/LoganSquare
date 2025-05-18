import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionMotion } from "./SectionMotion";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import TextReveal from "./TextReveal";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Emily R.",
    rating: 5,
    feedback:
      "Absolutely the best car wash in Chicago! The crew was fast, friendly, and my car looked brand new afterward.",
  },
  {
    name: "Carlos M.",
    rating: 4,
    feedback:
      "Been coming here for years. They always go the extra mile with detailing. Worth every penny.",
  },
  {
    name: "Sophia L.",
    rating: 5,
    feedback:
      "Super professional staff and amazing results. Highly recommend D&M Car Wash!",
  },
];

export default function Testimonials() {
  return (
    <SectionMotion>
      <section className="w-full px-4 md:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <TextReveal>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Real feedback from our D&M Car Wash family
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Our Customers Say
            </h2>
          </TextReveal>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((t, index) => (
              <motion.div key={index} variants={item}>
                <Card className="rounded-2xl shadow-md h-full">
                  <CardContent className="p-6 text-left flex flex-col justify-between h-full">
                    <div className="mb-4">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700">"{t.feedback}"</p>
                    </div>
                    <p className="text-sm text-gray-500 font-semibold">
                      – {t.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionMotion>
  );
}
