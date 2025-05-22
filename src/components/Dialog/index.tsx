import { ReactNode } from 'react';

interface DialogProps {
  children: ReactNode;
}

export function Dialog({ children }: DialogProps) {
  return (
    <>
      <h1>Dialog</h1>
      {children}
    </>
  );
}
