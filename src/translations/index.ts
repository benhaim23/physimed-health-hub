
import { general } from './general';
import { navigation } from './navigation';
import { hero } from './hero';
import { features } from './features';
import { healthcare } from './healthcare';
import { pricing } from './pricing';
import { testimonials } from './testimonials';
import { contact } from './contact';
import { chatbot } from './chatbot';
import { footer } from './footer';

// Combine all translation modules
export const translations = {
  ...general,
  ...navigation,
  ...hero,
  ...features,
  ...healthcare,
  ...pricing,
  ...testimonials,
  ...contact,
  ...chatbot,
  ...footer
};
