import ButtonSubmit from '@/app/(client-components)/(HeroSearchForm)/ButtonSubmit';
import type { Route as NextRoute } from 'next';
import { ComponentType } from 'react';

// Get ready to update to Next.js version 13.2 with X typedRoutes
export type Route<T = string> = NextRoute | '/listing-stay' | '/hot-desk'; // Add '/hot-desk' and preserve '/listing-stay'
export type PathName = Route;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}

// Example usage for the /listing-stay route
const listingStayPage: Page = {
  path: '/listing-stay', // Keep the previous route '/listing-stay'
  exact: true,
  component: ButtonSubmit,
};

// Example usage for the /hot-desk route
const hotDeskPage: Page = {
  path: '/hot-desk', // Add the new route '/hot-desk'
  exact: true,
  component: ButtonSubmit,
};

// You can now use both 'listingStayPage' and 'hotDeskPage' in your routing setup
