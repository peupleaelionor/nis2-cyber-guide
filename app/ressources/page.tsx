'use client';

import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle, Shield, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export default function RessourcesPage() {
  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ressources Gratuites NIS2
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Téléchargez nos guides, checklists et templates pour réussir votre conformité NIS2
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-white"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    📥 Téléchargement Gratuit
                  </div>
                  <h2 className="text-4xl font-bold mb-4">
                    Checklist Ultime NIS2
                  </h2>
                  <p className="text-xl mb-6 opacity-90">
                    25 points essentiels pour vérifier la conformité de votre organisation
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Format PDF téléchargeable',
                      'Checklist complète et actionnable',
                      'Exemples concrets pour chaque point',
                      'Mise à jour 2025',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <DownloadButton variant="secondary" />
                </div>
                <div className="relative">
                  <Image
                    src="/nis2-checklist-icon.png"
                    alt="Checklist NIS2"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Autres Ressources Disponibles
            </h2>
            <p className="text-xl text-gray-600">
              Guides, templates et outils pour votre conformité NIS2
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12" />,
                title: 'Guide Complet NIS2',
                description: 'Tout ce que vous devez savoir sur la directive NIS2 en 2025',
                type: 'PDF - 45 pages',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Template Audit NIS2',
                description: 'Modèle d\'audit de conformité prêt à l\'emploi',
                type: 'Excel - 15 onglets',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Plan d\'Action 30 Jours',
                description: 'Roadmap détaillée pour atteindre la conformité rapidement',
                type: 'PDF - 12 pages',
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Calculateur Budget',
                description: 'Estimez le coût de votre mise en conformité NIS2',
                type: 'Excel - Calculateur',
              },
              {
                icon: <FileText className="w-12 h-12" />,
                title: 'Glossaire NIS2',
                description: 'Tous les termes techniques expliqués simplement',
                type: 'PDF - 8 pages',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Templates Politiques',
                description: 'Modèles de politiques de sécurité conformes NIS2',
                type: 'Word - 10 templates',
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-blue-600 mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <p className="text-sm text-gray-500 mb-6">{resource.type}</p>
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Téléchargement de ' + resource.title + ' en cours...');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gray-50 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'un Accompagnement Personnalisé ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nos experts peuvent vous aider à atteindre la conformité NIS2 rapidement
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700"
              >
                Demander un Diagnostic Gratuit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
