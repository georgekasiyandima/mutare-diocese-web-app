import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { TranslationContext } from '../../App';

// Mock translation context
const mockT = (key: string) => {
  if (key === 'welcome') return 'Welcome to the Catholic Diocese of Mutare';
  if (key === 'donateNow') return 'Donate Now';
  return key;
};

const renderWithContext = (component: React.ReactElement) => {
  return render(
    <TranslationContext.Provider value={{ lang: 'en', setLang: () => {}, t: mockT }}>
      {component}
    </TranslationContext.Provider>
  );
};

describe('HeroSection', () => {
  it('renders the welcome message', () => {
    renderWithContext(<HeroSection />);
    expect(screen.getByText('Welcome to the Catholic Diocese of Mutare')).toBeInTheDocument();
  });

  it('renders the Donate Now button', () => {
    renderWithContext(<HeroSection />);
    expect(screen.getByRole('button', { name: /donate now/i })).toBeInTheDocument();
  });
}); 