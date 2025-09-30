
import type { App } from './types';
import { PricingTier } from './types';

export const USAGE_TYPES: string[] = [
  'Lesson Planning',
  'Assessment & Grading',
  'Content Creation',
  'Student Engagement',
  'Personalized Learning',
  'Administrative Tasks',
];

export const YEAR_GROUPS: string[] = [
  'Early Years',
  'Primary (K-2)',
  'Primary (3-5)',
  'Middle School (6-8)',
  'High School (9-12)',
  'Higher Education',
];

export const PRICING_TIERS = Object.values(PricingTier);


export const ALL_APPS: App[] = [
  {
    id: 1,
    name: 'Magic School AI',
    description: 'A comprehensive platform with dozens of tools for lesson planning, assessment creation, and student feedback.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    usageTypes: ['Lesson Planning', 'Assessment & Grading', 'Administrative Tasks'],
    yearGroups: ['Primary (K-2)', 'Primary (3-5)', 'Middle School (6-8)', 'High School (9-12)'],
    pricing: PricingTier.Freemium,
    url: '#',
  },
  {
    id: 2,
    name: 'Curipod',
    description: 'Create interactive, AI-powered lessons that boost student participation with polls, drawings, and word clouds.',
    icon: 'fa-solid fa-lightbulb',
    usageTypes: ['Student Engagement', 'Content Creation'],
    yearGroups: ['Primary (3-5)', 'Middle School (6-8)', 'High School (9-12)'],
    pricing: PricingTier.Freemium,
    url: '#',
  },
  {
    id: 3,
    name: 'Canva for Education',
    description: 'Design presentations, worksheets, and classroom decor with a vast library of templates and AI-powered design tools.',
    icon: 'fa-solid fa-palette',
    usageTypes: ['Content Creation'],
    yearGroups: ['Early Years', 'Primary (K-2)', 'Primary (3-5)', 'Middle School (6-8)', 'High School (9-12)'],
    pricing: PricingTier.Free,
    url: '#',
  },
  {
    id: 4,
    name: 'Khanmigo',
    description: 'An AI-powered tutor and teaching assistant from Khan Academy that helps students and teachers.',
    icon: 'fa-solid fa-graduation-cap',
    usageTypes: ['Personalized Learning', 'Lesson Planning'],
    yearGroups: ['Primary (3-5)', 'Middle School (6-8)', 'High School (9-12)', 'Higher Education'],
    pricing: PricingTier.Paid,
    url: '#',
  },
  {
    id: 5,
    name: 'Gradescope',
    description: 'Streamline grading for paper-based, digital, and code assignments with AI-assisted grading and analytics.',
    icon: 'fa-solid fa-marker',
    usageTypes: ['Assessment & Grading'],
    yearGroups: ['High School (9-12)', 'Higher Education'],
    pricing: PricingTier.Paid,
    url: '#',
  },
  {
    id: 6,
    name: 'Diffit',
    description: 'Differentiate any text or article for any reading level, helping all students access grade-level content.',
    icon: 'fa-solid fa-align-left',
    usageTypes: ['Personalized Learning', 'Content Creation'],
    yearGroups: ['Primary (3-5)', 'Middle School (6-8)', 'High School (9-12)'],
    pricing: PricingTier.Freemium,
    url: '#',
  },
    {
    id: 7,
    name: 'SlidesAI',
    description: 'Automatically generate professional, engaging presentation slides from any text in seconds.',
    icon: 'fa-solid fa-file-powerpoint',
    usageTypes: ['Content Creation', 'Lesson Planning'],
    yearGroups: ['Middle School (6-8)', 'High School (9-12)', 'Higher Education'],
    pricing: PricingTier.Freemium,
    url: '#',
  },
  {
    id: 8,
    name: 'Formative',
    description: 'Get real-time student data with auto-graded questions and AI feedback on interactive assignments.',
    icon: 'fa-solid fa-chart-line',
    usageTypes: ['Assessment & Grading', 'Student Engagement'],
    yearGroups: ['Primary (3-5)','Middle School (6-8)', 'High School (9-12)'],
    pricing: PricingTier.Freemium,
    url: '#',
  },
   {
    id: 9,
    name: 'Goblin.tools',
    description: 'A collection of small, simple, single-task tools to help with tasks a neurodivergent person may find difficult.',
    icon: 'fa-solid fa-ghost',
    usageTypes: ['Administrative Tasks', 'Personalized Learning'],
    yearGroups: ['Middle School (6-8)', 'High School (9-12)', 'Higher Education'],
    pricing: PricingTier.Free,
    url: '#',
  },
];
