'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const articlesData: Record<string, any> = {
  'guide-ultime-nis2': {
    title: 'Guide Ultime NIS2 : Tout ce que vous devez savoir en 2025',
    date: '2025-01-08',
    readTime: '10 min',
    category: 'Guide',
    content: `
## Introduction à la NIS2

La directive NIS2 (Network and Information Security Directive 2) est la nouvelle réglementation européenne en matière de cybersécurité qui entre en vigueur en 2025. Elle remplace la directive NIS1 et étend considérablement son champ d'application.

## Qui est concerné par NIS2 ?

La directive NIS2 s'applique à plus de 150 000 organisations en Europe, contre seulement 4 000 pour NIS1. Les secteurs concernés incluent :

- **Secteurs hautement critiques** : Énergie, Transport, Santé, Eau, Infrastructure numérique
- **Secteurs critiques** : Services postaux, Gestion des déchets, Chimie, Alimentation, Fabrication
- **PME et ETI** : À partir de 50 salariés ou 10M€ de CA dans les secteurs concernés

## Obligations principales

### 1. Mesures de sécurité techniques

- Gestion des risques cyber
- Sécurité des systèmes d'information
- Gestion des incidents
- Continuité d'activité et reprise après sinistre

### 2. Notification des incidents

- Délai de 24h pour la notification initiale
- Rapport intermédiaire sous 72h
- Rapport final sous 1 mois

### 3. Gouvernance

- Responsabilité de la direction
- Formation du personnel
- Audit régulier

## Sanctions en cas de non-conformité

Les sanctions peuvent être très lourdes :

- **Entités essentielles** : Jusqu'à 10M€ ou 2% du CA mondial
- **Entités importantes** : Jusqu'à 7M€ ou 1,4% du CA mondial
- **Sanctions pénales** possibles pour les dirigeants

## Comment se mettre en conformité ?

### Phase 1 : Diagnostic (2-4 semaines)
- Évaluation de l'état actuel
- Identification des écarts
- Priorisation des actions

### Phase 2 : Plan d'action (4-8 semaines)
- Mise en place des mesures techniques
- Formation des équipes
- Documentation des processus

### Phase 3 : Certification (2-4 semaines)
- Audit de conformité
- Corrections finales
- Obtention de la certification

## Conclusion

La conformité NIS2 est obligatoire et les sanctions sont sévères. Il est crucial de commencer dès maintenant votre mise en conformité pour être prêt avant l'entrée en vigueur.

**Besoin d'aide ?** Téléchargez notre checklist gratuite ou contactez nos experts pour un diagnostic personnalisé.
    `,
  },
  'checklist-nis2-pme': {
    title: 'Checklist NIS2 pour PME : 25 Points Essentiels',
    date: '2025-01-07',
    readTime: '8 min',
    category: 'Checklist',
    content: `
## Checklist Complète NIS2 pour PME

Cette checklist vous permet de vérifier rapidement votre niveau de conformité à la directive NIS2.

### 1. Gouvernance et Organisation

- [ ] Désignation d'un responsable cybersécurité
- [ ] Implication de la direction dans la cybersécurité
- [ ] Budget alloué à la cybersécurité
- [ ] Politique de sécurité documentée

### 2. Gestion des Risques

- [ ] Analyse des risques cyber réalisée
- [ ] Cartographie des actifs critiques
- [ ] Plan de traitement des risques
- [ ] Revue annuelle des risques

### 3. Sécurité Technique

- [ ] Pare-feu et antivirus à jour
- [ ] Chiffrement des données sensibles
- [ ] Authentification multi-facteurs (MFA)
- [ ] Sauvegardes régulières et testées
- [ ] Gestion des correctifs de sécurité

### 4. Gestion des Incidents

- [ ] Procédure de gestion des incidents
- [ ] Équipe de réponse aux incidents
- [ ] Outils de détection des incidents
- [ ] Tests réguliers du plan

### 5. Continuité d'Activité

- [ ] Plan de continuité d'activité (PCA)
- [ ] Plan de reprise d'activité (PRA)
- [ ] Tests réguliers du PCA/PRA
- [ ] Sites de secours identifiés

### 6. Formation et Sensibilisation

- [ ] Programme de formation cybersécurité
- [ ] Sensibilisation au phishing
- [ ] Tests de phishing réguliers
- [ ] Documentation accessible

### 7. Conformité et Audit

- [ ] Registre des traitements (RGPD)
- [ ] Audits de sécurité réguliers
- [ ] Documentation à jour
- [ ] Contrats fournisseurs conformes

## Comment utiliser cette checklist ?

1. **Évaluez chaque point** : Cochez les éléments déjà en place
2. **Identifiez les lacunes** : Notez les points non cochés
3. **Priorisez les actions** : Commencez par les points critiques
4. **Planifiez** : Établissez un calendrier de mise en œuvre

## Téléchargement Gratuit

Téléchargez la version PDF complète de cette checklist avec des exemples concrets pour chaque point.

[Télécharger la Checklist PDF →]
    `,
  },
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articlesData[slug];

  if (!article) {
    return (
      <main className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
                Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-20 bg-white">
      <article className="container max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-4">
            {article.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <Share2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {article.content.split('\n').map((paragraph: string, index: number) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-3xl font-bold mt-12 mb-6">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="ml-6 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="font-bold mb-4">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'Aide pour Votre Conformité NIS2 ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Téléchargez notre checklist gratuite ou demandez un diagnostic personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold shadow-lg"
            >
              Télécharger la Checklist
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold"
            >
              Demander un Diagnostic
            </motion.button>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
