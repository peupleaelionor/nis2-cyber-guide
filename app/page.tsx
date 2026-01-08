'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, FileText, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/nis2-hero-banner.png"
            alt="NIS2 Cybersecurity"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm"
            >
              ✨ Conformité NIS2 Simplifiée
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Devenez Conforme à la{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                NIS2
              </span>{' '}
              en 30 Jours
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Guides pratiques, checklist gratuite et audit de conformité pour PME et ETI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Télécharger la Checklist Gratuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-blue-600"
              >
                Demander un Diagnostic
              </motion.button>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>100% gratuit</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150K+', label: 'Organisations concernées' },
              { number: '18', label: 'Secteurs critiques' },
              { number: '24h', label: 'Délai de signalement' },
              { number: '2%', label: 'Amende max du CA' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi NIS2 Cyber Guide ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous offrons des guides pratiques, des ressources gratuites et un accompagnement expert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12" />,
                title: 'Guides Pratiques',
                description: '15+ guides détaillés avec explications simples et étapes concrètes',
                features: ['Sans jargon technique', 'Cas d\'usage réels', 'Exemples concrets'],
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Ressources Gratuites',
                description: 'Checklist complète, templates et outils d\'auto-évaluation',
                features: ['Checklist NIS2', 'Templates prêts', 'FAQ détaillée'],
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Support Expert',
                description: 'Audit de conformité et accompagnement personnalisé',
                features: ['Diagnostic gratuit', 'Consulting expert', 'Certification NIS2'],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d'Aide Immédiate ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nos experts sont disponibles pour un diagnostic gratuit de votre conformité NIS2
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Demander un Diagnostic Gratuit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que Disent Nos Utilisateurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Grâce à NIS2 Cyber Guide, nous avons atteint la conformité en 4 mois. Les guides sont clairs et les templates nous ont fait gagner du temps.',
                author: 'Jean Dupont',
                role: 'DSI, PME 80 salariés',
              },
              {
                quote: 'La checklist gratuite nous a permis d\'identifier rapidement nos lacunes. Excellent rapport qualité-prix.',
                author: 'Marie Martin',
                role: 'Dirigeante, ETI 150 salariés',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 text-lg">{testimonial.quote}</p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
