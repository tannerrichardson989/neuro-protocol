export const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const DAY_SHORT = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

export const phases = [
  {
    id: 'wake',
    name: 'Wake + Prime',
    time: '6:00 AM – 6:45 AM',
    items: [
      { time: '6:00', action: 'Alarm off. Do NOT touch your phone. Feet on floor. Glass of water.', link: '/library/dopamine', systems: ['Dopamine'] },
      { time: '6:00', action: '"Start Day" Shortcut fires. Wind Down Focus deactivates.', link: '/library/dopamine', systems: [] },
      { time: '6:05', action: 'Slot 1 Supplements — empty stomach: L-Tyrosine, NAC, (Rhodiola if approved). Full glass of water.', link: '/nutrition/supplements', systems: ['Dopamine','Glutamate'] },
      { time: '6:05', action: 'Cyclic sighing (5 min) while Slot 1 absorbs. Sitting or standing, eyes closed.', link: '/library/breathwork/cyclic-sighing', systems: ['GABA','Serotonin'] },
      { time: '6:10', action: 'Take Focalin XR as early as possible — maximum clearance before bed.', link: '/library/sleep', systems: [] },
      { time: '6:15', action: 'Breakfast + Slot 2 Supplements. Protocol meal (Neuro Scramble or Bliss Smoothie).', link: '/nutrition', systems: ['Choline','Tyrosine','Omega-3','BDNF'] },
      { time: '6:35', action: 'Get ready for work. Pack lunch (Tryptophan Bowl or Omega Plate).', link: '/nutrition', systems: [] },
    ]
  },
  {
    id: 'commute',
    name: 'Commute + Sunlight',
    time: '6:45 AM – 7:55 AM',
    items: [
      { time: '6:45', action: 'If sunlight available: 10 min outside. Nasal breathing. No sunglasses.', link: '/library/sleep', systems: ['Serotonin','Cortisol','Melatonin','NO'] },
      { time: '7:40', action: 'Leave for work. 5-min commute.', link: null, systems: [] },
      { time: '7:45', action: 'If missed morning sun: walk outside 10 min at work. Non-negotiable.', link: '/library/sleep', systems: ['Circadian'] },
    ]
  },
  {
    id: 'work',
    name: 'Work Day',
    time: '7:45 AM – 5:00 PM',
    items: [
      { time: '7:45', action: 'Morning work block. Peak cognition: Focalin active, Alpha-GPC online, cortisol high. Nasal breathing.', link: '/library/breathwork/nasal', systems: ['Acetylcholine','Dopamine','NE'] },
      { time: '10:00', action: 'Mid-morning break. 3 physiological sighs. Stand, nasal breathe, walk. No social media.', link: '/library/breathwork/physiological-sigh', systems: ['GABA','NO'] },
      { time: '12:00', action: 'Lunch — protocol meal. Eat with coworkers if possible. Swap one caffeine for green tea.', link: '/nutrition', systems: ['Serotonin','Omega-3','Oxytocin'] },
      { time: '12:45', action: 'LAST CAFFEINE. Hard cutoff. Coffee, V8, green tea — final one.', link: '/library/sleep', systems: ['Adenosine'] },
      { time: '13:00', action: 'Afternoon work block. If energy dips: 3 physiological sighs, brief walk, nasal breathing.', link: '/library/breathwork/physiological-sigh', systems: [] },
      { time: '15:00', action: 'Afternoon snack if needed: banana + almond butter, dark chocolate, pumpkin seeds.', link: '/nutrition', systems: ['Tyrosine','Magnesium'] },
    ]
  },
  {
    id: 'train',
    name: 'Commute + Train',
    time: '5:00 PM – 6:10 PM',
    items: [
      { time: '17:00', action: 'Leave work. 5-min drive home.', link: null, systems: [] },
      { time: '17:05', action: 'Optional: 2 rounds Wim Hof breathwork (8 min) as pre-training activation.', link: '/library/breathwork/wim-hof', systems: ['NE','Dopamine','Endorphins'] },
      { time: '17:10', action: 'Training session (30–45 min from Fitness Plan).', link: '/train', systems: ['Varies'] },
      { time: '17:50', action: 'Cold shower. Follow progression (30 sec → 3 min over 12 weeks).', link: '/train', systems: ['Dopamine','NE','Endorphins','NPY'] },
      { time: '18:00', action: '3 min extended exhale cooldown (4 in, 8 out, nasal). Parasympathetic transition.', link: '/library/breathwork/extended-exhale', systems: ['GABA'] },
    ]
  },
  {
    id: 'evening',
    name: 'Dinner + Evening',
    time: '6:10 PM – 9:00 PM',
    items: [
      { time: '18:10', action: 'Dinner — protocol meal.', link: '/nutrition', systems: ['Tryptophan','Omega-3'] },
      { time: '18:15', action: 'Slot 3 Supplements with dinner: Mag Glycinate, Glycine, Taurine, Uridine. Ensure 2+ hrs from Lamotrigine.', link: '/nutrition/supplements', systems: ['GABA','Glutamate'] },
      { time: '18:30', action: 'Unstructured evening. Read, socialize, walk, hobby. Dim lights after sunset. Warm lamp only.', link: '/library/social', systems: ['Oxytocin','Serotonin','Melatonin'] },
      { time: '20:30', action: 'Screens dim. Night Shift ON. Brightness low. Or no screens.', link: '/library/sleep', systems: ['Melatonin'] },
    ]
  },
  {
    id: 'winddown',
    name: 'Wind-Down + Sleep',
    time: '9:00 PM – 10:00 PM',
    items: [
      { time: '21:00', action: '"Shut Down" Shortcut fires. Wind Down Focus activates. Phone face-down or another room.', link: '/library/dopamine', systems: ['Dopamine'] },
      { time: '21:15', action: 'Hot shower (5–10 min, warm/hot).', link: '/library/sleep', systems: ['Vasodilation'] },
      { time: '21:30', action: 'Breathwork in bed. Extended exhale (4 in, 8 out, nasal), 5 min. Or body scan.', link: '/library/breathwork/extended-exhale', systems: ['GABA'] },
      { time: '21:45', action: 'Lights out. Dark. Cool (65–68°F). Cognitive Shuffle if mind races.', link: '/library/sleep', systems: ['NREM','BDNF','Dopamine'] },
    ]
  }
];

export const dayVariations = [
  { day: 'Monday', training: 'HIIT Power', meal: 'Neuro Scramble', notes: 'Hardest effort. Wim Hof pre-training. Full cold shower.' },
  { day: 'Tuesday', training: 'Skill & Flow', meal: 'Tryptophan Bowl or Omega Plate', notes: 'Mental focus session. Skip Wim Hof.' },
  { day: 'Wednesday', training: 'HIIT Endurance', meal: 'Neuro Scramble', notes: 'Longest session. Wim Hof pre-training.' },
  { day: 'Thursday', training: 'Mobility + Breathwork', meal: 'Omega Plate (lighter)', notes: 'Recovery day. No Wim Hof. Shorter cold (60 sec).' },
  { day: 'Friday', training: 'HIIT Strength', meal: 'Neuro Scramble', notes: 'Hardest strength day. Wim Hof pre-training.' },
  { day: 'Saturday', training: 'Skill & Complexity', meal: 'Whatever you want', notes: 'Fun session. Invite a friend.' },
  { day: 'Sunday', training: 'Active Recovery', meal: 'Tryptophan Bowl', notes: 'Lightest day. Walk with someone. Longer cold OK.' },
];

export const circadianAnchors = [
  { anchor: 'Wake', time: '6:00 AM daily (±30 min)', purpose: 'Master clock. Everything cascades from this.' },
  { anchor: 'Sunlight', time: 'Within 60 min of waking', purpose: 'Cortisol pulse, melatonin countdown (14–16 hrs)' },
  { anchor: 'Caffeine cutoff', time: '12:45 PM', purpose: 'Protects sleep. Critical on Focalin.' },
  { anchor: 'Training', time: '5:10 PM (weekdays)', purpose: 'Stress metabolism, neuromodulator surge' },
  { anchor: 'Wind Down', time: '9:00 PM', purpose: 'Parasympathetic transition begins' },
  { anchor: 'Lights out', time: '~10:00 PM', purpose: '8 hours to wake time' },
];

export const packingChecklist = [
  'Packed lunch (Tryptophan Bowl or Omega Plate)',
  'Afternoon snack (banana, dark chocolate, pumpkin seeds)',
  'Water bottle',
  'Green tea bags',
];

export function getCurrentPhase() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  if (t < 405) return { phase: phases[0], status: 'Before wake', next: 'Wake + Prime at 6:00 AM' };
  if (t < 475) return { phase: phases[1], status: 'Commute + Sunlight', next: 'Work at 7:45 AM' };
  if (t < 1020) return { phase: phases[2], status: 'Work Day', next: 'Training at 5:00 PM' };
  if (t < 1090) return { phase: phases[3], status: 'Training Window', next: 'Dinner at 6:10 PM' };
  if (t < 1260) return { phase: phases[4], status: 'Evening', next: 'Wind-Down at 9:00 PM' };
  if (t < 1380) return { phase: phases[5], status: 'Wind-Down', next: 'Lights out at ~10:00 PM' };
  return { phase: null, status: 'Rest', next: 'Wake at 6:00 AM' };
}

export function getTimeStatus(timeStr) {
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  const parts = timeStr.split(':');
  let h = parseInt(parts[0]);
  const m = parseInt(parts[1] || '0');
  const t = h * 60 + m;
  if (current > t + 30) return 'past';
  if (current >= t - 10 && current <= t + 30) return 'active-now';
  return 'future';
}
