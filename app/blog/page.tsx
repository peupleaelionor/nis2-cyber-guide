'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'guide-ultime-nis2',
    title: 'Guide Ultime NIS2 : Tout ce que vous devez savoir en 2025',
    excerpt: 'La directive NIS2 est la nouvelle réglementation européenne en matière de cybersécurité. Découvrez tout ce que vous devez savoir pour être conforme.',
    date: '2025-01-08',
    readTime: '10 min',
    category: 'Guide',
  },
  {
    slug: 'checklist-nis2-pme',
    title: 'Checklist NIS2 pour PME : 25 Points Essentiels',
    excerpt: 'Une checklist complète pour vérifier la conformité de votre PME à la directive NIS2. Téléchargement gratuit inclus.',
    date: '2025-01-07',
    readTime: '8 min',
    category: 'Checklist',
  },
  {
    slug: 'obligations-legales-nis2',
    title: 'Obligations Légales NIS2 : Ce que Vous Risquez',
    excerpt: 'Amendes jusqu\'à 2% du CA, sanctions pénales... Découvrez les risques juridiques de la non-conformité NIS2.',
    date: '2025-01-06',
    readTime: '12 min',
    category: 'Juridique',
  },
  {
    slug: 'erreurs-critiques-nis2',
    title: '7 Erreurs Critiques à Éviter avec NIS2',
    excerpt: 'Les erreurs les plus courantes que font les PME lors de leur mise en conformité NIS2, et comment les éviter.',
    date: '2025-01-05',
    readTime: '7 min',
    category: 'Conseils',
  },
  {
    slug: 'etude-cas-pme-nis2',
    title: 'Étude de Cas : Comment une PME a atteint la conformité NIS2',
    excerpt: 'Retour d\'expérience d\'une PME de 80 salariés qui a réussi sa mise en conformité NIS2 en 4 mois.',
    date: '2025-01-04',
    readTime: '15 min',
    category: 'Cas d\'usage',
  },
  {
    slug: 'faq-nis2-complete',
    title: 'FAQ NIS2 : 50 Questions-Réponses Essentielles',
    excerpt: 'Toutes les réponses aux questions les plus fréquentes sur la directive NIS2, expliquées simplement.',
    date: '2025-01-03',
    readTime: '20 min',
    category: 'FAQ',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog NIS2
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guides pratiques, conseils d'experts et actualités sur la conformité NIS2
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-3">
                  <span className="px-3 py-1 bg-blue-100 rounded-full">{article.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'Aide Personnalisée ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont disponibles pour un diagnostic gratuit
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg"
            >
              Demander un Diagnostic Gratuit
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
