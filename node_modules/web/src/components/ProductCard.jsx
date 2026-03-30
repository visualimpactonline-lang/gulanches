
import React from 'react';
import { WHATSAPP_LINK } from '@/data.js';
import { motion } from 'framer-motion';

function ProductCard({ product, index, variant = 'default' }) {
  const cardVariants = {
    default: "bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300",
    muted: "bg-muted rounded-xl overflow-hidden hover:shadow-md transition-all duration-300",
    elevated: "bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  };

  const selectedVariant = variant === 'default' && index % 3 === 0 ? 'elevated' : 
                          variant === 'default' && index % 3 === 1 ? 'muted' : 
                          cardVariants[variant] || cardVariants.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={selectedVariant}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{product.price}</span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 text-sm font-medium"
          >
            Pedir
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;