'use client';

import { useEffect, useRef } from 'react';

interface ButtonProps {
  children: string;
  className?: string;
  variant?: 'alternative' | 'simple';
  href?: string;
  target?: string;
}

const Button = ({ children, className = '', variant = 'alternative', href, target }: ButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const div = document.createElement('div');
    const letters = button.textContent?.trim().split('') || [];

    letters.forEach((letter, index, array) => {
      const element = document.createElement('span');
      const part = index >= array.length / 2 ? -1 : 1;
      const position = index >= array.length / 2 
        ? array.length / 2 - index + (array.length / 2 - 1) 
        : index;
      const move = position / (array.length / 2);
      const rotate = 1 - move;

      element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
      element.style.setProperty('--move', move.toString());
      element.style.setProperty('--rotate', rotate.toString());
      element.style.setProperty('--part', part.toString());

      div.appendChild(element);
    });

    button.innerHTML = div.outerHTML;

    const handleMouseEnter = () => {
      if (!button.classList.contains('out')) {
        button.classList.add('in');
      }
    };

    const handleMouseLeave = () => {
      if (button.classList.contains('in')) {
        button.classList.add('out');
        setTimeout(() => button.classList.remove('in', 'out'), 950);
      }
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [children]);

  if (href) {
    return (
      <a
        href={href}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        className={`button ${variant} ${className}`}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={`button ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 