import React from 'react';
import { FAQItem } from './FAQItem';
import { faqData } from './faqData';

export function FAQSection() {
  return (
    <div className="space-y-6 mb-16">
      {faqData.map((faq) => (
        <FAQItem key={faq.id} {...faq} />
      ))}
    </div>
  );
}