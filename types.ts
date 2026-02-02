import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  clinic: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}