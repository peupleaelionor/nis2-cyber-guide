'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowUp, Moon, Sun, Send, Linkedin, Twitter, Share2 } from 'lucide-react';

// 1. Chatbot Widget
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold">💬 Besoin d'aide NIS2 ?</h3>
              <p className="text-sm opacity-90">Réponse sous 24h</p>
            </div>
            <div className="p-4 h-48 bg-gray-50">
              <p className="text-gray-600 text-sm">Bonjour ! Comment puis-je vous aider avec votre conformité NIS2 ?</p>
            </div>
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre question..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}

// 2. Progress Bar
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 h-1 bg-gray-200 z-40">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 to-green-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// 3. Scroll to Top
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// 4. Toast Notification
export function Toast({ message, show, onClose }: { message: string; show: boolean; onClose: () => void }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg"
        >
          ✅ {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 5. Dark Mode Toggle
export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

// 6. Skeleton Loader
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  );
}

// 7. Social Share
export function SocialShare({ url, title }: { url: string; title: string }) {
  const shareLinkedIn = () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  const shareTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500">Partager :</span>
      <button onClick={shareLinkedIn} className="p-2 hover:bg-blue-100 rounded-lg text-blue-600">
        <Linkedin className="w-5 h-5" />
      </button>
      <button onClick={shareTwitter} className="p-2 hover:bg-blue-100 rounded-lg text-blue-400">
        <Twitter className="w-5 h-5" />
      </button>
    </div>
  );
}

// 8. Newsletter Popup
export function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletter_closed')) setShow(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('newsletter_closed', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-2">📧 Restez Informé !</h3>
            <p className="text-gray-600 mb-6">Recevez nos guides NIS2 et actualités cybersécurité</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 border rounded-lg"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                OK
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// 9. Sticky CTA
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg p-4 md:hidden"
        >
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold">
            📥 Télécharger la Checklist Gratuite
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Export All
export default function UXEnhancements() {
  return (
    <>
      <ReadingProgress />
      <ChatWidget />
      <ScrollToTop />
      <StickyCTA />
      <NewsletterPopup />
    </>
  );
}
