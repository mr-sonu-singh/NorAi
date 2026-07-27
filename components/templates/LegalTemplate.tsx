import React from 'react';

export interface LegalTemplateProps {
  hero: React.ReactNode;
  body: React.ReactNode;
}

export function LegalTemplate({ hero, body }: LegalTemplateProps) {
  return (
    <>
      {hero}
      {body}
    </>
  );
}
