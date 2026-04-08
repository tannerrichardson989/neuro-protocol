export const techniques = [
  {
    id: 'physiological-sigh',
    name: 'Physiological Sigh',
    target: 'Immediate calm. Fastest parasympathetic activator.',
    systems: ['GABA ↑', 'NE ↓', 'Cortisol ↓'],
    duration: '30 seconds (1–5 reps)',
    when: 'Acute stress, anxiety spike, before difficult conversation, task transitions',
    steps: [
      'Inhale through nose — fill lungs ~75%',
      'Without exhaling, take a second short sniff through nose to completely fill lungs',
      'Long, slow exhale through mouth — 6–8 seconds',
      'Repeat 1–5 times',
    ],
    why: 'Double inhale maximizes alveolar surface area. Long exhale directly activates vagus nerve via diaphragm. You do this naturally when crying — doing it intentionally triggers the same calming cascade.'
  },
  {
    id: 'cyclic-sighing',
    name: 'Cyclic Sighing',
    target: 'Sustained mood improvement. Outperformed meditation in Stanford trial.',
    systems: ['GABA ↑', 'Serotonin ↑', 'Cortisol ↓', 'Vagal tone ↑'],
    duration: '5 minutes',
    when: 'Daily practice (morning or evening). The "default" breathwork.',
    steps: [
      'Double inhale through nose (big breath + second sniff)',
      'Long, slow exhale through mouth (2x length of inhale)',
      'Repeat continuously for 5 minutes',
      'No breath holds. Smooth rhythm.',
    ],
    why: 'Stanford 2023 study (Cell Reports Medicine): 5 min daily cyclic sighing produced greater mood improvement than equal-time mindfulness meditation.'
  },
  {
    id: 'box-breathing',
    name: 'Box Breathing (4-4-4-4)',
    target: 'Balanced arousal. Centers the nervous system.',
    systems: ['GABA ↑', 'NE regulation', 'CO2 tolerance ↑'],
    duration: '4–10 minutes',
    when: 'Pre-focus work, transitions, mild anxiety, reset without drowsiness',
    steps: [
      'Inhale through nose: 4 seconds',
      'Hold (lungs full): 4 seconds',
      'Exhale through nose: 4 seconds',
      'Hold (lungs empty): 4 seconds',
      'Repeat. Progress to 5-5-5-5, then 6-6-6-6.',
    ],
    why: 'Used by Navy SEALs and first responders. Holds build CO2 tolerance, which directly improves stress resilience (same circuit as anxiety).'
  },
  {
    id: 'extended-exhale',
    name: 'Extended Exhale (4-8)',
    target: 'Deep parasympathetic activation. Pre-sleep. Anxiety reduction.',
    systems: ['GABA ↑↑', 'Serotonin ↑', 'Vagal tone ↑↑', 'Heart rate ↓'],
    duration: '5–10 minutes',
    when: 'Evening wind-down, post-workout cooldown, anxiety episodes',
    steps: [
      'Inhale through nose: 4 seconds',
      'Exhale through nose: 6–8 seconds (2x inhale)',
      'No holds. Smooth, continuous.',
      'Repeat for 5–10 min',
    ],
    why: 'At 4:8 ratio, you spend 67% of each cycle in parasympathetic activation. Single best breathwork for sleep onset.'
  },
  {
    id: 'alternate-nostril',
    name: 'Alternate Nostril (Nadi Shodhana)',
    target: 'Balance sympathetic/parasympathetic. Bilateral brain activation.',
    systems: ['GABA ↑', 'NO ↑↑', 'Autonomic balance', 'Cortisol ↓'],
    duration: '3–5 minutes',
    when: 'Sunday recovery, pre-meditation, when feeling "off"',
    steps: [
      'Right thumb closes right nostril',
      'Inhale through left nostril: 4 seconds',
      'Close left (ring finger), release right',
      'Exhale through right: 4 seconds',
      'Inhale through right: 4 seconds',
      'Close right, release left, exhale left: 4 seconds',
      'Repeat 6–10 cycles',
    ],
    why: 'Each nostril dominates in ~90 min cycles. Alternating rebalances autonomic nervous system and delivers NO from both sinus cavities.'
  },
  {
    id: 'wim-hof',
    name: 'Wim Hof / Cyclic Hyperventilation',
    target: 'Acute stress inoculation. Catecholamine spike + deep calm.',
    systems: ['NE ↑↑↑', 'Dopamine ↑↑', 'Endorphins ↑↑', 'then GABA ↑'],
    duration: '3 rounds, ~10–15 min total',
    when: 'Pre-training activation, morning energy, before cold exposure. NOT before bed.',
    steps: [
      '30 deep breaths: full inhale nose, passive exhale mouth (~2 sec/cycle)',
      'After breath 30: exhale fully, hold with lungs empty (60–90+ sec)',
      'Recovery breath: inhale fully, hold 15 sec with lungs full, release',
      'Repeat for 3 rounds',
    ],
    why: 'Hyperventilation phase is controlled stress inoculation. Retention is where parasympathetic rebound hits. Primes CO2 tolerance for cold exposure.'
  },
  {
    id: 'nasal',
    name: 'Nasal Breathing (Default Mode)',
    target: 'Baseline nitric oxide delivery. Permanent default.',
    systems: ['NO ↑ (continuous)', 'O2 efficiency ↑', 'CO2 tolerance ↑'],
    duration: 'Always',
    when: 'All waking hours except peak HIIT effort',
    steps: [
      'Breathe through your nose. That\'s it.',
      'Optional: sleep tape (3M Micropore) for nighttime nasal breathing.',
    ],
    why: 'Paranasal sinuses produce NO continuously. Nasal breathing delivers it to lungs (+10-15% O2 absorption) and brain. Mouth breathing bypasses this entirely.'
  },
];

export const quickReference = [
  { situation: 'Morning activation (6:05 AM)', technique: 'Cyclic sighing', duration: '5 min', link: 'cyclic-sighing' },
  { situation: 'Pre-training (5:05 PM)', technique: 'Wim Hof', duration: '10–15 min', link: 'wim-hof' },
  { situation: 'Pre-deep work', technique: 'Box breathing', duration: '4–10 min', link: 'box-breathing' },
  { situation: 'Acute anxiety / stress', technique: 'Physiological sigh', duration: '30 sec', link: 'physiological-sigh' },
  { situation: 'Daily mood maintenance', technique: 'Cyclic sighing', duration: '5 min', link: 'cyclic-sighing' },
  { situation: 'Post-workout cooldown', technique: 'Extended exhale (4-8)', duration: '3–5 min', link: 'extended-exhale' },
  { situation: 'Evening wind-down', technique: 'Extended exhale → body scan', duration: '10–15 min', link: 'extended-exhale' },
  { situation: 'Pre-sleep (in bed)', technique: 'Extended exhale or Yoga Nidra', duration: '5–10 min', link: 'extended-exhale' },
  { situation: 'Recovery day (Sunday)', technique: 'Alternate nostril → walking meditation', duration: '20–30 min', link: 'alternate-nostril' },
  { situation: 'Feeling uncentered', technique: 'Alternate nostril', duration: '3–5 min', link: 'alternate-nostril' },
  { situation: 'Before cold exposure', technique: 'Wim Hof (2–3 rounds)', duration: '10 min', link: 'wim-hof' },
];

export const meditationStyles = [
  { style: 'Focused Attention', systems: 'Acetylcholine ↑, Dopamine ↑, NE regulation', duration: '10–20 min', best: 'Building focus, attentional control, deep work' },
  { style: 'Open Monitoring', systems: 'Serotonin ↑, GABA ↑, reduced amygdala reactivity', duration: '10–20 min', best: 'Emotional regulation, anxiety reduction' },
  { style: 'Body Scan / Yoga Nidra', systems: 'GABA ↑↑, Serotonin ↑, Parasympathetic', duration: '15–30 min', best: 'Pre-sleep, recovery, deep relaxation' },
  { style: 'Walking Meditation', systems: 'Serotonin ↑, Endocannabinoids ↑, NO ↑, Dopamine ↑', duration: '15–30 min', best: 'Sunday recovery, combining with sunlight/movement' },
];
