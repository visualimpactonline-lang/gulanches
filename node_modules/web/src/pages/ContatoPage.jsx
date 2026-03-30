
import React from 'react';
import { WHATSAPP_LINK } from '@/data.js';
import { Helmet } from 'react-helmet';
import { MessageCircle, Instagram, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';

function ContatoPage() {
  return (
    <>
      <Helmet>
        <title>Contato - GU Lanches</title>
        <meta name="description" content="Entre em contato com GU Lanches. Faça seu pedido pelo WhatsApp, visite nossa loja ou siga-nos nas redes sociais." />
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
              <h1 className="mb-4">Entre em contato</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Estamos prontos para atender você. Escolha a melhor forma de contato.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center mb-12"
            >
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-white text-3xl font-bold mb-4">Faça seu pedido agora</h2>
              <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
                Atendimento rápido e personalizado pelo WhatsApp. Tire suas dúvidas e faça seu pedido em poucos minutos.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-200 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </a>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Horário de funcionamento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda a Sexta: 11h - 22h</p>
                  <p>Sábado: 11h - 23h</p>
                  <p>Domingo: 12h - 22h</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Endereço</h3>
                <p className="text-muted-foreground mb-4">
                  Rua das Flores, 123<br />
                  São Paulo, SP
                </p>
                <a
                  href="https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Ver no mapa →
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 mb-12"
            >
              <h3 className="text-xl font-semibold mb-6 text-card-foreground">Redes sociais</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200"
                >
                  <Instagram className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Instagram</p>
                    <p className="text-xs text-muted-foreground">@gulanches</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200"
                >
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </a>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-all duration-200"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Telefone</p>
                    <p className="text-xs text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização GU Lanches"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ContatoPage;