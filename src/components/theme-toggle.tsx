'use client';

import ThemeToggleButton from './ui/theme-toggle-button';

import { ButtonProps } from '@/components/button';

export const ThemeToggle = ({ className }: ButtonProps) => {
  return (
    <div className={className}>
      <ThemeToggleButton variant="circle" start="bottom-right" />
    </div>
  );
};
