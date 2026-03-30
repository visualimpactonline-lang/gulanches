
import React from 'react';
import { motion } from 'framer-motion';

function HighlightCard({ icon: Icon, title, description, index, reverse = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`flex justify-center ${reverse ? 'md:order-2' : ''}`}>
        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div className={reverse ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default HighlightCard;
