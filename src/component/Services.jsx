import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Car, Sparkles, Droplets } from "lucide-react";
import { SectionMotion } from "./SectionMotion";
import { motion } from "framer-motion";
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

const services = [
  {
    title: "Exterior Hand Wash",
    description:
      "Gentle hand wash, rinse, and dry to give your car a spotless finish.",
    price: "$25",
    icon: <Car className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Interior Detailing",
    description: "Thorough interior vacuum, wipe-down, and window cleaning.",
    price: "$40",
    icon: <Sparkles className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Full Premium Package",
    description: "Includes full wash, wax, interior clean, and tire shine.",
    price: "$80",
    icon: <Droplets className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Mini Detailing",
    description: "Exterior wash + light vacuum and dash wipe.",
    price: "$45",
    icon: <Sparkles className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Tire Shine & Wax",
    description: "High gloss finish and protective wax for a showroom look.",
    price: "$30",
    icon: <Droplets className="h-6 w-6 text-green-600" />,
  },
];

export default function Services() {
  return (
    <SectionMotion>
      <section className="w-full px-4 md:px-8 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <TextReveal>
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              Packages crafted for every need
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Services
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-gray-600 mb-12">
              Choose from a range of hand-crafted packages to suit your car’s
              needs.
            </p>
          </TextReveal>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 shadow-md rounded-2xl h-full">
                  <CardHeader className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-xl text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">
                      {service.description}
                    </p>
                    <p className="font-semibold">{service.price}</p>
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
