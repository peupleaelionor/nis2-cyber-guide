'use client';

import { motion } from 'framer-motion';
import { Check, Download, Star, Clock, FileText, Shield, Users, TrendingUp, Gift, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EbookPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-sm mb-6">
                🔥 OFFRE DE LANCEMENT : -52% pendant 48h
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Guide Complet NIS2
              </h1>
              
              <p className="text-2xl mb-4 opacity-90">
                De la Conformité à la Certification en 90 Jours
              </p>
              
              <p className="text-xl mb-8 opacity-80">
                Le seul guide dont vous avez besoin pour maîtriser NIS2 et protéger votre entreprise
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm opacity-80">4.9/5 - 127 avis vérifiés</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold">47€</span>
                  <span className="text-2xl line-through opacity-60">97€</span>
                  <span className="px-3 py-1 bg-green-500 rounded-full text-sm font-bold">-52%</span>
                </div>
                <p className="text-sm opacity-80">Accès immédiat • Paiement sécurisé • Garantie 30 jours</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl font-bold text-xl shadow-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-3"
              >
                <Lock className="w-6 h-6" />
                Acheter Maintenant
              </motion.button>

              <p className="text-sm mt-4 opacity-70">
                ✅ Téléchargement instantané • ✅ Satisfait ou remboursé • ✅ Mises à jour gratuites
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <Image
                  src="/nis2-hero-banner.png"
                  alt="Guide NIS2"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm rotate-12">
                  BEST-SELLER
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ce que vous allez recevoir */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce Que Vous Allez Recevoir
            </h2>
            <p className="text-xl text-gray-600">
              Un package complet d'une valeur de 497€ pour seulement 47€
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'eBook Premium (120 pages)',
                value: '97€',
                items: [
                  '15 chapitres détaillés et illustrés',
                  'Explications simples sans jargon',
                  'Cas pratiques réels d\'entreprises',
                  'Schémas et infographies',
                  'Format PDF optimisé mobile',
                ]
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Templates & Outils',
                value: '197€',
                items: [
                  'Checklist interactive NIS2 (Excel)',
                  '10 templates de politiques de sécurité',
                  'Modèle d\'audit de conformité',
                  'Plan d\'action 90 jours (Gantt)',
                  'Calculateur de budget NIS2',
                ]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Bonus Exclusifs',
                value: '147€',
                items: [
                  'Accès groupe privé LinkedIn',
                  '30 min de consulting offert (valeur 150€)',
                  'Mises à jour gratuites à vie',
                  'Support email prioritaire',
                  'Certificat de formation',
                ]
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Ressources Complémentaires',
                value: '56€',
                items: [
                  'Liste des 50 outils cyber recommandés',
                  'Glossaire NIS2 complet (200+ termes)',
                  'FAQ avec 100+ questions-réponses',
                  'Roadmap de certification',
                  'Veille réglementaire mensuelle',
                ]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border-2 border-blue-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-blue-600">{item.icon}</div>
                  <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">
                    Valeur {item.value}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 rounded-2xl max-w-3xl mx-auto"
          >
            <p className="text-3xl font-bold mb-2">Valeur Totale : 497€</p>
            <p className="text-5xl font-bold mb-4">Votre Prix : 47€</p>
            <p className="text-xl opacity-90">Économisez 450€ (90% de réduction)</p>
          </motion.div>
        </div>
      </section>

      {/* Table des matières */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Table des Matières Détaillée
            </h2>
            <p className="text-xl text-gray-600">
              120 pages de contenu actionnable et pratique
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-4">
              {[
                { chapter: 'Chapitre 1', title: 'Introduction à NIS2', pages: '8 pages' },
                { chapter: 'Chapitre 2', title: 'Qui est concerné par NIS2 ?', pages: '10 pages' },
                { chapter: 'Chapitre 3', title: 'Les 10 obligations essentielles', pages: '15 pages' },
                { chapter: 'Chapitre 4', title: 'Gestion des risques cyber', pages: '12 pages' },
                { chapter: 'Chapitre 5', title: 'Notification des incidents', pages: '8 pages' },
                { chapter: 'Chapitre 6', title: 'Gouvernance et responsabilité', pages: '10 pages' },
                { chapter: 'Chapitre 7', title: 'Sécurité de la chaîne d\'approvisionnement', pages: '9 pages' },
                { chapter: 'Chapitre 8', title: 'Audit et conformité', pages: '11 pages' },
                { chapter: 'Chapitre 9', title: 'Sanctions et risques juridiques', pages: '7 pages' },
                { chapter: 'Chapitre 10', title: 'Plan d\'action 90 jours', pages: '12 pages' },
                { chapter: 'Chapitre 11', title: 'Budget et ROI', pages: '6 pages' },
                { chapter: 'Chapitre 12', title: 'Outils et solutions techniques', pages: '8 pages' },
                { chapter: 'Chapitre 13', title: 'Cas pratiques PME/ETI', pages: '10 pages' },
                { chapter: 'Chapitre 14', title: 'Certification NIS2', pages: '7 pages' },
                { chapter: 'Chapitre 15', title: 'Maintien de la conformité', pages: '7 pages' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-blue-600">{item.chapter}</div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.pages}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ce Qu'en Disent Nos Lecteurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sophie Durand',
                role: 'DSI, PME 120 salariés',
                rating: 5,
                text: 'Ce guide m\'a fait économiser des milliers d\'euros en consulting. Tout est clair, actionnable et les templates sont prêts à l\'emploi. Meilleur investissement de l\'année !',
              },
              {
                name: 'Marc Lefebvre',
                role: 'Dirigeant, ETI 200 salariés',
                rating: 5,
                text: 'J\'étais perdu avec NIS2. Ce guide m\'a permis de comprendre exactement ce qu\'il fallait faire. En 3 mois, nous étions conformes. Le ROI est incroyable.',
              },
              {
                name: 'Julie Martin',
                role: 'RSSI, Groupe 500 salariés',
                rating: 5,
                text: 'Enfin un guide qui va à l\'essentiel ! Les cas pratiques sont excellents et le plan 90 jours est parfaitement structuré. Je recommande à 100%.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Maîtriser NIS2 ?
            </h2>
            <p className="text-2xl mb-8 opacity-90">
              Rejoignez les 500+ entreprises qui ont déjà transformé leur conformité
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-baseline justify-center gap-3 mb-4">
                <span className="text-6xl font-bold">47€</span>
                <span className="text-3xl line-through opacity-60">97€</span>
              </div>
              <p className="text-xl mb-6">Offre limitée : -52% pendant 48h</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-12 py-5 bg-yellow-400 text-gray-900 rounded-xl font-bold text-2xl shadow-2xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-3"
              >
                <Lock className="w-6 h-6" />
                Acheter Maintenant - Accès Immédiat
              </motion.button>

              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 mb-2" />
                  <span>Paiement Sécurisé</span>
                </div>
                <div className="flex flex-col items-center">
                  <Download className="w-6 h-6 mb-2" />
                  <span>Téléchargement Instantané</span>
                </div>
                <div className="flex flex-col items-center">
                  <Gift className="w-6 h-6 mb-2" />
                  <span>Garantie 30 Jours</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="font-bold text-lg mb-2">🎁 BONUS LIMITÉ</p>
              <p>Les 50 premiers acheteurs reçoivent en plus une session de consulting de 60 min (valeur 300€) !</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantie */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Garantie Satisfait ou Remboursé 30 Jours
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Si vous n'êtes pas 100% satisfait, nous vous remboursons intégralement. Sans question. Sans condition.
            </p>
            <p className="text-gray-600">
              Nous sommes tellement confiants dans la qualité de ce guide que nous prenons tout le risque. Vous n'avez rien à perdre et tout à gagner.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
