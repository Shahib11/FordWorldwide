import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions &amp; Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xl mx-auto">
            Everything you need to know about booking our Southampton private cruise transfers.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 cursor-pointer"
                >
                  <span className="font-semibold text-sm text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
