
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 break-inside-avoid mb-6"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-card-foreground mb-4 leading-relaxed">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center font-semibold text-primary">
          {review.initials}
        </div>
        <div>
          <p className="font-medium text-card-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
