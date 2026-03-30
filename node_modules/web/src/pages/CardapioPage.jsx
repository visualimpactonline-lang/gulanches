import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';
import CategorySection from '@/components/CategorySection.jsx';
import { getSavedMenu, WHATSAPP_LINK } from '@/data.js';

function CardapioPage() {
  const [menuData, setMenuData] = useState(getSavedMenu);

  useEffect(() => {
    setMenuData(getSavedMenu());
  }, []);

  return (
    <>
      <Helmet>
        <title>Cardápio - GU Lanches</title>
        <meta name="description" content="Confira nosso cardápio completo com hambúrgueres artesanais, hot dogs, porções e bebidas. Peça agora pelo WhatsApp." />
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      <div className="min-h-screen bg-background">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="mb-4">Nosso cardápio</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Escolha seu lanche favorito, veja a foto de cada produto e faça seu pedido pelo WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {menuData.map((section, index) => (
              <CategorySection
                key={section.category}
                category={section.category}
                products={section.products}
                index={index}
              />
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-sm border-t border-border p-4 md:hidden"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir no WhatsApp
          </a>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default CardapioPage;
