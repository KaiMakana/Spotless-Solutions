/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  preferredContact: string;
  projectDetails: string;
  date: string;
  status: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  process: string[];
  faq: { question: string; answer: string }[];
  beforeImage?: string;
  afterImage?: string;
}

export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  title: string;
  category: string;
  description: string;
}

export interface ChatMessage {
  role: "user" | "bot";
  text: string;
  timestamp: string;
}

export interface SeoLandingPage {
  slug: string; // e.g., pressure-washing-waukesha-wi
  serviceKey: string; // e.g., pressure-washing
  city: string;
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  localBodyText: string;
  keywords: string[];
}
