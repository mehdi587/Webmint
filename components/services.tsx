"use client";

import { motion } from "framer-motion";
import { Code2, Search, ShoppingCart, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies. From responsive websites to complex full-stack platforms using JavaScript, Next.js, and Java.",
    features: ["React & Next.js", "Node.js APIs", "Java Backend", "Database Design"],
  },
  {
    icon: Search,
    title: "SEO Strategy",
    description:
      "Comprehensive SEO solutions tailored for Shopify stores and Google Merchant Center optimization. Drive organic traffic and boost your visibility.",
    features: ["Technical SEO", "Shopify Optimization", "Google Merchant", "Analytics Setup"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce development and optimization. We build stores that convert visitors into customers with seamless shopping experiences.",
    features: ["Shopify Development", "Payment Integration", "Inventory Systems", "Conversion Optimization"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Everything you need to{" "}
            <span className="text-primary">succeed online</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative glass rounded-2xl p-8 gradient-border hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary/50 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
