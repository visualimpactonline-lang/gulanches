
import React from 'react';
import { WHATSAPP_LINK } from '@/data.js';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Sparkles, Zap, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import ReviewCard from '@/components/ReviewCard.jsx';
import HighlightCard from '@/components/HighlightCard.jsx';

function HomePage() {
  const featuredProducts = [
    {
      name: 'X-Burguer',
      description: 'Pão, hambúrguer, queijo, alface, tomate',
      price: 'R$ 18,90',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80'
    },
    {
      name: 'X-Bacon',
      description: 'Pão, hambúrguer, bacon, queijo, alface, tomate',
      price: 'R$ 22,90',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80'
    },
    {
      name: 'X-Egg',
      description: 'Pão, hambúrguer, ovo, queijo, alface, tomate',
      price: 'R$ 20,90',
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80'
    },
    {
      name: 'Hot Dog Completo',
      description: 'Pão, salsicha, molho especial, cebola, batata palha',
      price: 'R$ 15,90',
      image: 'https://images.unsplash.com/photo-1612392062798-2dbaa2c2c993?w=800&q=80'
    }
  ];

  const reviews = [
    {
      text: 'Melhor lanche da região! O X-Bacon é simplesmente perfeito, ingredientes frescos e sabor incrível.',
      name: 'Lucia Torres',
      initials: 'LT',
      date: '15 de março, 2026'
    },
    {
      text: 'Atendimento rápido e lanches deliciosos. Virou meu lugar favorito para pedir no fim de semana.',
      name: 'Rafael Santos',
      initials: 'RS',
      date: '22 de março, 2026'
    },
    {
      text: 'A qualidade dos ingredientes faz toda diferença. Recomendo muito o X-Egg!',
      name: 'Marina Costa',
      initials: 'MC',
      date: '8 de março, 2026'
    },
    {
      text: 'Entrega sempre pontual e os lanches chegam quentinhos. Parabéns pelo serviço!',
      name: 'Carlos Mendes',
      initials: 'CM',
      date: '28 de fevereiro, 2026'
    }
  ];

  return (
    <>
      <Helmet>
        <title>GU Lanches - O sabor que conquista na primeira mordida</title>
        <meta name="description" content="Lanches artesanais com ingredientes selecionados. Peça agora pelo WhatsApp e experimente o melhor sabor de São Paulo." />
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1641330857351-014e436fcd33"
            alt="Hambúrguer artesanal delicioso"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6 leading-tight">
              O sabor que conquista na primeira mordida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Lanches artesanais feitos com ingredientes selecionados e muito amor. Peça agora e descubra por que somos a escolha favorita em São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cardapio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 font-semibold text-lg"
              >
                Ver Cardápio
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Por que escolher GU Lanches?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Qualidade, sabor e atendimento que fazem a diferença
            </p>
          </motion.div>

          <div className="space-y-16">
            <HighlightCard
              icon={ChefHat}
              title="Lanches artesanais"
              description="Cada lanche é preparado com cuidado e atenção aos detalhes. Usamos receitas exclusivas que garantem sabor único em cada mordida."
              index={0}
              reverse={false}
            />
            <HighlightCard
              icon={Sparkles}
              title="Ingredientes selecionados"
              description="Trabalhamos apenas com fornecedores de confiança. Pães frescos, carnes de qualidade premium e vegetais sempre fresquinhos."
              index={1}
              reverse={true}
            />
            <HighlightCard
              icon={Zap}
              title="Entrega rápida"
              description="Seu pedido chega quentinho e no tempo certo. Sistema de entrega eficiente para você aproveitar seu lanche no melhor momento."
              index={2}
              reverse={false}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Nossos destaques</h2>
            <p className="text-muted-foreground text-lg">
              Conheça os lanches mais pedidos pelos nossos clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium"
            >
              Ver cardápio completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">O que nossos clientes dizem</h2>
            <p className="text-muted-foreground text-lg">
              Avaliações reais de quem já experimentou
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">Peça agora pelo WhatsApp</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Atendimento rápido e personalizado. Faça seu pedido em poucos minutos e receba em casa.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
            >
              Fazer pedido agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;