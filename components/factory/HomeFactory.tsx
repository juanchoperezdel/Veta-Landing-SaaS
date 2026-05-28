import React from 'react';
import HeroFactory from './HeroFactory';
import TrustedByFactory from './TrustedByFactory';
import PainPointsFactory from './PainPointsFactory';
import ROICalculator from './ROICalculator';
import ProcessFactory from './ProcessFactory';
import CaseStudies from './CaseStudies';
import ComparisonFactory from './ComparisonFactory';
import BookingFactory from './BookingFactory';
import FaqFactory from './FaqFactory';

const HomeFactory: React.FC = () => {
  return (
    <>
      <HeroFactory />
      <TrustedByFactory />
      <PainPointsFactory />
      <ROICalculator />
      <ProcessFactory />
      <CaseStudies />
      <ComparisonFactory />
      <BookingFactory />
      <FaqFactory />
    </>
  );
};

export default HomeFactory;
