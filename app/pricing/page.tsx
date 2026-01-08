'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Diagnostic Express',
      price: '79',
      originalPrice: '299',
      icon: <Zap className="w-8 h-8" />,
      description: 'Évaluation rapide de votre conformité NIS2',
      features: [
        'Rapport détaillé sous 48h',
        'Analyse des écarts critiques',
        'Plan d\'action priorisé',
        '30 min de consulting inclus',
        'Checklist personnalisée',
      ],
      notIncluded: [
        'Accompagnement continu',
        'Formation équipe',
        'Certification',
      ],
      cta: 'Commander Maintenant',
      popular: false,
    },
    {
      name: 'Audit Complet',
      price: '1 490',
      originalPrice: '2 990',
      icon: <Crown className="w-8 h-8" />,
      description: 'Audit approfondi + plan de mise en conformité',
      features: [
        'Tout du Diagnostic Express',
        'Audit technique complet (5-7 jours)',
        'Documentation complète',
        'Roadmap détaillée 90 jours',
        'Templates et politiques',
        '3h de consulting expert',
        'Support email 30 jours',
      ],
      notIncluded: [
        'Certification officielle',
      ],
      cta: 'Démarrer l\'Audit',
      popular: true,
    },
    {
      name: 'Accompagnement Premium',
      price: 'Sur devis',
      originalPrice: null,
      icon: <Rocket className="w-8 h-8" />,
      description: 'Conformité NIS2 clé en main avec certification',
      features: [
        'Tout de l\'Audit Complet',
        'Accompagnement jusqu\'à certification',
        'Mise en œuvre technique',
        'Formation équipe complète',
        'Support prioritaire illimité',
        'Certification NIS2 incluse',
        'Suivi post-certification 6 mois',
        'Garantie conformité',
      ],
      notIncluded: [],
      cta: 'Demander un Devis',
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tarifs Transparents
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Choisissez l'offre adaptée à vos besoins et votre budget
            </p>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-sm">
              🔥 Offre de lancement : -70% sur tous les services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl shadow-xl p-8 ${
                  plan.popular ? 'ring-4 ring-blue-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    ⭐ Plus Populaire
                  </div>
                )}

                <div className="text-blue-600 mb-4">{plan.icon}</div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg">
                      {plan.originalPrice}€
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price === 'Sur devis' ? '' : plan.price}
                    </span>
                    {plan.price !== 'Sur devis' && (
                      <span className="text-gray-600">€</span>
                    )}
                    {plan.price === 'Sur devis' && (
                      <span className="text-3xl font-bold text-gray-900">Sur devis</span>
                    )}
                  </div>
                  {plan.price !== 'Sur devis' && (
                    <div className="text-sm text-gray-500 mt-1">Paiement unique</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-50">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Pourquoi Investir dans la Conformité NIS2 ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  ❌ Coûts de la Non-Conformité
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>💸 Amendes jusqu'à <strong>2% du CA mondial</strong></li>
                  <li>⚖️ Sanctions pénales pour les dirigeants</li>
                  <li>📉 Perte de clients et de réputation</li>
                  <li>🚫 Interdiction d'exercer dans certains secteurs</li>
                  <li>💰 Coût moyen d'une cyberattaque : <strong>200 000€</strong></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  ✅ Bénéfices de la Conformité
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>🛡️ Protection contre les cyberattaques</li>
                  <li>📈 Avantage concurrentiel sur le marché</li>
                  <li>🤝 Confiance clients et partenaires</li>
                  <li>💼 Accès à de nouveaux marchés B2B</li>
                  <li>📊 ROI moyen : <strong>300-500%</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center bg-blue-50 p-8 rounded-2xl">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Investir 1 490€ aujourd'hui peut vous éviter 200 000€+ de pertes demain
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg"
                >
                  Démarrer Maintenant
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Puis-je payer en plusieurs fois ?',
                a: 'Oui, nous proposons un paiement en 3x sans frais pour l\'Audit Complet et l\'Accompagnement Premium.',
              },
              {
                q: 'Y a-t-il des frais cachés ?',
                a: 'Non, tous nos tarifs sont transparents et tout compris. Aucun frais supplémentaire.',
              },
              {
                q: 'Que se passe-t-il si je ne suis pas satisfait ?',
                a: 'Garantie satisfait ou remboursé sous 14 jours sur le Diagnostic Express.',
              },
              {
                q: 'Combien de temps prend la mise en conformité ?',
                a: 'En moyenne 2-4 mois selon votre situation initiale et l\'offre choisie.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
