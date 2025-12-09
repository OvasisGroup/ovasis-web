"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  PencilSquareIcon,
  LightBulbIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that prioritize user experience and drive engagement.",
      icon: PencilSquareIcon,
    },
    {
      title: "Product Development",
      description: "Developing comprehensive products from concept to launch with strategic planning and technical expertise.",
      icon: LightBulbIcon,
    },
    {
      title: "Product Management",
      description: "Guiding products from conception to launch with strategic planning and development oversight.",
      icon: ClipboardDocumentListIcon,
    },
    {
      title: "Bespoke Software Development",
      description: "Creating custom software solutions tailored to your specific business needs and requirements.",
      icon: CodeBracketIcon,
    },
    {
      title: "Website Development",
      description: "Building responsive and performant websites using modern technologies and best practices.",
      icon: GlobeAltIcon,
    },
    {
      title: "Mobile App Development",
      description: "Developing robust mobile applications for iOS and Android platforms tailored to your business objectives.",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/SVG/og_logo_white.svg"
              alt="Ovasis Logo"
              width={100}
              height={100}
              className="mx-auto mb-6"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: "#b68b2d" }}>
              About Ovasis
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ovasis is a Kenyan digital agency specializing in crafting
              exceptional digital experiences through a comprehensive suite of
              services that blend creativity, innovation, and technical
              expertise. Our core focus lies in UI/UX Design, Front-End
              Engineering, Software Development (Web & Mobile), Product
              Management & Development, and Graphic Design & Branding. We are
              passionate about transforming ideas into visually stunning and
              highly functional products that resonate with users and meet
              business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-12 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-primary-foreground/5 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/10 hover:border-primary-foreground/30 transition-all"
              >
                <service.icon className="w-12 h-12 mb-4" style={{ color: "#b68b2d" }} />
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 mb-4">
                  {service.description}
                </p>
                <a
                  href={`mailto:info@ovasis.com?subject=Website Inquiry - ${service.title}`}
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity font-medium"
                  style={{ color: "#b68b2d" }}
                >
                  Let&apos;s work
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <div className="flex gap-8 pb-4 justify-center min-w-max">
              {[
                { name: "Figma", logo: "/images/logos/figma.png" },
                { name: "Next.js", logo: "/images/logos/nextjs.png" },
                { name: "shadcn/ui", logo: "/images/logos/shadcn.png" },
                { name: "Python", logo: "/images/logos/python.png" },
                { name: "Prisma", logo: "/images/logos/prisma.png" },
                { name: "PostgreSQL", logo: "/images/logos/postgres.png" },
                { name: "Flutter", logo: "/images/logos/flutter.png" },
                { name: "Swift", logo: "/images/logos/Swift_logo.png" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center p-3 rounded-lg bg-white transition-all"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={87}
                    height={87}
                    className="w-[87px] h-60px] object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Ovasis Group Limited. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
