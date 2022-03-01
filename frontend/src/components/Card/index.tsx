import * as React from 'react';
import { tw } from 'twind';

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <div className={tw`bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: CardProps) => (
  <div className={tw`px-4 py-5 sm:px-6`}>
    {children}
  </div>
);

export const CardContent = ({ children }: CardProps) => (
  <div className={tw`px-4 py-5 sm:p-6`}>
    {children}
  </div>
);
