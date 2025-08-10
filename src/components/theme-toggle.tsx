'use client';

import ThemeToggleButton from './ui/theme-toggle-button';

import { Button, ButtonProps } from '@/components/button';

export const ThemeToggle = ({ className }: ButtonProps) => {
  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
    >
      <ThemeToggleButton variant="circle" start="bottom-right" />
    </Button>
  );
};
