import React from 'react';
import { motion } from 'framer-motion';

interface SEOSection {
  title: string;
  content: string;
}

interface SEOContentProps {
  title: string;
  sections: SEOSection[];
}

const SEOContent: React.FC<SEOContentProps> = ({ title, sections }) => {
  return (
    <motion.section 
      className="mt-32 prose prose-invert max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
            <p className="text-gray-300">{section.content}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SEOContent;