type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  faqs: FAQItem[];
};