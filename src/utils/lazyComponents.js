import { lazy } from 'react';

// Lazy load components for code splitting
export const LazyHomepage = lazy(() => import('../pages/Homepage'));
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyBooking = lazy(() => import('../pages/Booking'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyContact = lazy(() => import('../pages/Contact'));
export const LazyBlog = lazy(() => import('../pages/Blog'));
export const LazyNotFound = lazy(() => import('../pages/NotFound'));
