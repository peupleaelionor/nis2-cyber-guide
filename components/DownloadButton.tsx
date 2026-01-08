'use client';

import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function DownloadButton({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleDownload = () => {
    if (!showForm) {
      setShowForm(true);
      return;
    }

    if (!email || !email.includes('@')) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    // Simulate download
    setDownloaded(true);
    
    // Create a fake PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJeLjz9MKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKL01lZGlhQm94IFswIDAgNTk1IDg0Ml0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhLUJvbGQKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDI0IFRmCjEwMCA3MDAgVGQKKENoZWNrbGlzdCBOSVMyKSBUagpFVApzdHJlYW0KZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTQ1IDAwMDAwIG4gCjAwMDAwMDAyNjQgMDAwMDAgbiAKMDAwMDAwMDM1NCAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ0OAolJUVPRgo=';
    link.download = 'Checklist-NIS2-Ultime.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloaded(false);
      setShowForm(false);
      setEmail('');
    }, 3000);
  };

  const buttonClass = variant === 'primary'
    ? 'px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl'
    : 'px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl border-2 border-blue-600';

  if (showForm && !downloaded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h3 className="text-xl font-bold mb-4">📥 Télécharger la Checklist</h3>
        <p className="text-gray-600 mb-4 text-sm">Entrez votre email pour recevoir la checklist NIS2 gratuite</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 focus:border-blue-600 focus:outline-none"
          onKeyPress={(e) => e.key === 'Enter' && handleDownload()}
        />
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
          >
            Télécharger
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(false)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold"
          >
            Annuler
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className={buttonClass}
    >
      {downloaded ? (
        <>
          <CheckCircle className="w-5 h-5 inline mr-2" />
          Téléchargé !
        </>
      ) : (
        <>
          <Download className="w-5 h-5 inline mr-2" />
          Télécharger la Checklist Gratuite
        </>
      )}
    </motion.button>
  );
}
