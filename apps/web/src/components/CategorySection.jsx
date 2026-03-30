import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data.js';

function CategorySection({ category, products, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-primary">{category}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-card border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold text-card-foreground">{product.name}</h3>
                <span className="text-xl font-bold text-primary whitespace-nowrap">{product.price}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.description}</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default CategorySection;
