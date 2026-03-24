import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'airworthiness',
    title: 'Airworthiness Certification',
    description: 'Standard and Special Airworthiness Certificates for all aircraft types.',
    icon: 'ShieldCheck',
    details: [
      'Standard Airworthiness Certificates',
      'Special Airworthiness Certificates',
      'Amended & Replacement Certificates',
      'Export Airworthiness Approvals'
    ]
  },
  {
    id: 'experimental',
    title: 'Experimental Certification',
    description: 'Expert guidance for E-AB, E-LSA, and Research & Development aircraft.',
    icon: 'FlaskConical',
    details: [
      'Amateur-Built (E-AB)',
      'Light Sport Aircraft (LSA)',
      'Exhibition & Air Racing',
      'Market Survey & R&D'
    ]
  },
  {
    id: 'consulting',
    title: 'Aviation Consulting',
    description: 'Strategic compliance and documentation support for complex operations.',
    icon: 'Briefcase',
    details: [
      'FAA Coordination',
      'Documentation Review',
      'Compliance Audits',
      'Import/Export Strategy'
    ]
  }
];

export const TRUST_INDICATORS = [
  { label: 'Years Experience', value: '18+' },
  { label: 'FAA Designation', value: 'DAR-F' },
  { label: 'Background', value: 'USMC' },
  { label: 'Global Support', value: 'U.S. & Int\'l' }
];
