export const slots = [
  {
    id: 'slot1',
    name: 'Slot 1 — Morning, Empty Stomach',
    time: '6:05 AM',
    note: 'Take with full glass of water. Wait 20-30 min before eating.',
    supplements: [
      { name: 'L-Tyrosine', dose: '500–1000mg', target: 'Dopamine, Norepinephrine', flag: 'yellow', note: 'Monitor for overstimulation with Focalin' },
      { name: 'NAC', dose: '600mg', target: 'Glutamate modulation, antioxidant', flag: 'green', note: '' },
      { name: 'Rhodiola Rosea', dose: '200–400mg', target: 'Dopamine, Serotonin, Stress', flag: 'red', note: 'Serotonin syndrome risk with Lexapro. PRESCRIBER APPROVAL REQUIRED.' },
    ]
  },
  {
    id: 'slot2',
    name: 'Slot 2 — Morning with Food',
    time: '6:15 AM (breakfast)',
    note: 'Take with meal containing fat (eggs, avocado, nuts).',
    supplements: [
      { name: 'Alpha-GPC', dose: '300mg', target: 'Acetylcholine (focus, memory)', flag: 'green', note: '' },
      { name: 'ALCAR', dose: '500mg', target: 'Acetylcholine, mitochondrial energy', flag: 'green', note: '' },
      { name: 'B Complex + C', dose: '1 cap', target: 'Cofactor for serotonin, dopamine, NE, GABA', flag: 'green', note: '' },
      { name: 'Vitamin D3', dose: '2000–5000 IU', target: 'Dopamine synthesis, serotonin gene activation', flag: 'green', note: '' },
      { name: 'Omega-3 (EPA+DHA)', dose: '2g combined', target: 'Serotonin, Endocannabinoids, BDNF', flag: 'green', note: '' },
      { name: 'Lion\'s Mane', dose: '500mg', target: 'NGF, neuroplasticity', flag: 'yellow', note: 'Flagged with aripiprazole. Likely safe.' },
      { name: 'Bacopa Monnieri', dose: '300mg', target: 'Acetylcholine, Serotonin, memory', flag: 'red', note: 'Increases Lexapro CNS concentration. PRESCRIBER APPROVAL REQUIRED.' },
      { name: 'Creatine', dose: '5g (powder)', target: 'ATP/purinergic, cognitive resilience', flag: 'green', note: 'Mix in coffee or shake' },
    ]
  },
  {
    id: 'slot3',
    name: 'Slot 3 — Evening with Food',
    time: '~6:15 PM (dinner)',
    note: 'Calming, GABAergic, sleep-supporting. Take with dinner.',
    supplements: [
      { name: 'Magnesium Glycinate', dose: '400mg elemental', target: 'GABA/glutamate balance, sleep', flag: 'green', note: '2+ hrs away from Lamotrigine' },
      { name: 'Glycine', dose: '3g (powder)', target: 'Sleep quality, inhibitory tone', flag: 'green', note: 'Mix in water. Slightly sweet.' },
      { name: 'Taurine', dose: '1–2g', target: 'GABA-A agonist, glutamate modulation', flag: 'green', note: '' },
      { name: 'Uridine', dose: '150–250mg', target: 'Synaptogenesis, dopamine receptor upregulation', flag: 'green', note: '' },
      { name: 'Ashwagandha KSM-66', dose: '300–600mg', target: 'Cortisol reduction, GABA, stress', flag: 'red', note: 'Serotonin syndrome risk with Lexapro. Case report in Neurology 2024. PRESCRIBER APPROVAL REQUIRED.' },
    ]
  }
];

export const medications = [
  { name: 'Escitalopram (Lexapro)', class: 'SSRI', mechanism: 'Serotonin reuptake inhibition' },
  { name: 'Dexmethylphenidate ER (Focalin XR)', class: 'Stimulant', mechanism: 'Dopamine + NE reuptake inhibition' },
  { name: 'Aripiprazole (Abilify)', class: 'Atypical antipsychotic', mechanism: 'Partial D2 agonist, 5-HT1A partial agonist' },
  { name: 'Lamotrigine', class: 'Mood stabilizer', mechanism: 'Sodium channels, glutamate modulation' },
];

export const introductionSchedule = [
  { week: 'Week 1', items: 'NAC, B Complex+C, D3, Omega-3, Magnesium Glycinate, Glycine', note: 'All GREEN — no interaction concerns' },
  { week: 'Week 2', items: '+ Alpha-GPC, ALCAR, Creatine, Taurine, Uridine', note: 'All GREEN' },
  { week: 'Week 3', items: '+ L-Tyrosine, Lion\'s Mane', note: 'YELLOW — monitor jitteriness with Focalin' },
  { week: 'Week 4+', items: '+ Ashwagandha, Rhodiola, Bacopa', note: 'RED — ONLY after prescriber conversation' },
];

export const warningSymptoms = [
  { type: 'Serotonin Syndrome', severity: 'danger', symptoms: 'Agitation, confusion, rapid heart rate, high BP, dilated pupils, muscle rigidity/twitching, heavy sweating, diarrhea, high fever', action: 'Seek immediate medical attention' },
  { type: 'Overstimulation', severity: 'warning', symptoms: 'Jitteriness, racing thoughts, irritability, insomnia, elevated resting HR', action: 'Reduce L-Tyrosine or morning stack' },
  { type: 'Magnesium Excess', severity: 'info', symptoms: 'Loose stools, drowsiness, low blood pressure', action: 'Reduce dose' },
];
