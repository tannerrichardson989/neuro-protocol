export const weeklyOverview = [
  { day: 'Mon', label: 'HIIT Power', icon: '⚡', target: 'BDNF, Dopamine, NE, Endorphins', duration: '35 min', slug: 'monday' },
  { day: 'Tue', label: 'Skill & Flow', icon: '🎯', target: 'Acetylcholine, Endocannabinoids, NO', duration: '35 min', slug: 'tuesday' },
  { day: 'Wed', label: 'HIIT Endurance', icon: '🔥', target: 'BDNF, Serotonin, Endocannabinoids', duration: '40 min', slug: 'wednesday' },
  { day: 'Thu', label: 'Mobility + Breath', icon: '🧘', target: 'GABA, NO, Parasympathetic', duration: '30 min', slug: 'thursday' },
  { day: 'Fri', label: 'HIIT Strength', icon: '💪', target: 'BDNF, Dopamine, NE, NGF', duration: '40 min', slug: 'friday' },
  { day: 'Sat', label: 'Skill & Play', icon: '🤸', target: 'Acetylcholine, BDNF, Endocannabinoids', duration: '35 min', slug: 'saturday' },
  { day: 'Sun', label: 'Active Recovery', icon: '🌿', target: 'Serotonin, GABA, Endocannabinoids', duration: '30 min', slug: 'sunday' },
];

export const coldProtocol = [
  { weeks: '1–2', duration: '30 seconds', note: 'Focus on controlled nasal breathing through the shock.' },
  { weeks: '3–4', duration: '60 seconds', note: 'Breathe through it. The urge to gasp is the NE hit landing.' },
  { weeks: '5–8', duration: '90–120 seconds', note: 'Dopamine surge peaks around 1–2 min and sustains for hours.' },
  { weeks: '9–12', duration: '2–3 minutes', note: 'Protocol range shown to produce 250% dopamine elevation.' },
];

export const workoutDetails = {
  monday: {
    title: 'HIIT Power',
    subtitle: 'Maximum lactate → BDNF spike. Explosive movements → dopamine, NE, endorphins.',
    warmup: [
      { exercise: 'Jumping jacks', detail: '60 sec' },
      { exercise: 'Arm circles (forward + backward)', detail: '30 sec' },
      { exercise: 'Bodyweight squats (slow, full depth)', detail: '60 sec' },
      { exercise: 'Inchworms', detail: '60 sec' },
    ],
    blocks: [
      {
        name: 'Main Block — 4 Rounds',
        format: '40 sec work / 20 sec rest. All 5 exercises = 1 round. 60 sec rest between rounds.',
        exercises: [
          { exercise: 'Burpees (full, chest to floor)', detail: '40s work' },
          { exercise: 'Jump squats', detail: '40s work' },
          { exercise: 'Mountain climbers (fast)', detail: '40s work' },
          { exercise: 'Explosive push-ups', detail: '40s work' },
          { exercise: 'High knees (sprint pace)', detail: '40s work' },
        ]
      },
      {
        name: 'Tabata Finisher',
        format: '20 sec max effort / 10 sec rest × 8 rounds',
        exercises: [
          { exercise: 'Wk 1–4: Squat jumps | Wk 5–8: Burpees | Wk 9–12: Burpee tuck jumps', detail: '4 min total' },
        ]
      }
    ],
    cooldown: '90 sec forward fold (nasal breathing 4-6) → 60 sec child\'s pose → 30 sec standing eyes closed → Cold shower'
  },
  tuesday: {
    title: 'Skill & Flow',
    subtitle: 'Complex motor patterns → acetylcholine. Sustained effort → endocannabinoids. All nasal breathing.',
    warmup: [
      { exercise: 'Cat-cow stretches', detail: '60 sec' },
      { exercise: 'World\'s greatest stretch', detail: '60 sec' },
      { exercise: 'Slow-motion squats', detail: '60 sec' },
    ],
    blocks: [
      {
        name: 'Skill Block A — Balance (10 min)',
        format: '',
        exercises: [
          { exercise: 'Single-leg stand (eyes closed)', detail: '3×30s each' },
          { exercise: 'Pistol squat negatives', detail: '3×5 each, 5/1/–' },
          { exercise: 'Crow pose hold', detail: '5× max hold' },
          { exercise: 'Single-leg Romanian deadlift', detail: '3×8 each, 3/1/2' },
        ]
      },
      {
        name: 'Skill Block B — Locomotion (10 min)',
        format: 'High-complexity movements for acetylcholine and cerebellar activation.',
        exercises: [
          { exercise: 'Bear crawl (fwd + back)', detail: '3×30s' },
          { exercise: 'Crab walk (fwd + back)', detail: '3×30s' },
          { exercise: 'Lateral ape walks', detail: '3×30s' },
          { exercise: 'Floor flow (freestyle)', detail: '3×60s' },
        ]
      },
      {
        name: 'Flow Finisher (8 min)',
        format: 'Continuous movement, no rest. Nasal breathing only.',
        exercises: [
          { exercise: 'Down dog → Chaturanga → Up dog → Warrior I → II → Triangle → Low lunge → Pigeon → Repeat', detail: '8 min continuous' },
        ]
      }
    ],
    cooldown: 'Cold shower'
  },
  wednesday: {
    title: 'HIIT Endurance',
    subtitle: 'Sustained high heart rate → serotonin, endocannabinoids. Longer intervals → deeper BDNF.',
    warmup: [
      { exercise: 'Seal jacks', detail: '60 sec' },
      { exercise: 'Hip circles', detail: '30 sec' },
      { exercise: 'Reverse lunges', detail: '60 sec' },
      { exercise: 'Push-up to downward dog', detail: '60 sec' },
    ],
    blocks: [
      {
        name: 'EMOM × 20 min',
        format: 'Every Minute On the Minute. Perform reps, rest remainder. Repeat 4x.',
        exercises: [
          { exercise: 'Burpees', detail: '8 reps' },
          { exercise: 'Jumping lunges', detail: '16 total' },
          { exercise: 'Push-ups', detail: '15 reps' },
          { exercise: 'Squat jumps', detail: '12 reps' },
          { exercise: 'Plank shoulder taps', detail: '20 total' },
        ]
      },
      {
        name: 'Endurance Finisher (8 min)',
        format: 'Continuous circuit, no rest. 3 rounds.',
        exercises: [
          { exercise: 'Bodyweight squats (deep)', detail: '20 reps' },
          { exercise: 'Push-ups (slow 2/1/2)', detail: '10 reps' },
          { exercise: 'Reverse lunges', detail: '16 reps' },
          { exercise: 'Plank hold', detail: '30 sec' },
        ]
      }
    ],
    cooldown: 'Box breathing 3 min (4-4-4-4 in child\'s pose) → Cold shower'
  },
  thursday: {
    title: 'Mobility + Breathwork',
    subtitle: 'Parasympathetic activation → GABA. Deep stretching → endocannabinoids. Full nervous system reset.',
    warmup: [],
    blocks: [
      {
        name: 'Breathwork Opening (5 min)',
        format: '',
        exercises: [
          { exercise: 'Physiological sigh', detail: '5 reps' },
          { exercise: 'Box breathing (4-4-4-4)', detail: '2 min' },
          { exercise: 'Extended exhale (4 in, 8 out)', detail: '2 min' },
        ]
      },
      {
        name: 'Mobility Flow (20 min)',
        format: 'Hold 45–60 sec each. Nasal breathing. Sink deeper with each exhale.',
        exercises: [
          { exercise: 'Deep squat hold', detail: '60 sec' },
          { exercise: '90/90 hip switch (L + R)', detail: '60 sec each' },
          { exercise: 'Pigeon pose (L + R)', detail: '60 sec each' },
          { exercise: 'Prone scorpion (L + R)', detail: '60 sec each' },
          { exercise: 'Thread the needle (L + R)', detail: '60 sec each' },
          { exercise: 'Pancake stretch', detail: '60 sec' },
          { exercise: 'Seated forward fold', detail: '60 sec' },
          { exercise: 'Bridge hold', detail: '60 sec' },
          { exercise: 'Wall angels', detail: '60 sec' },
          { exercise: 'Neck circles + stretches', detail: '60 sec' },
        ]
      },
      {
        name: 'Closing Meditation (5 min)',
        format: 'Lie flat. Eyes closed. Extended exhale (4 in, 6-8 out). No movement.',
        exercises: []
      }
    ],
    cooldown: 'Cold shower (60 sec today)'
  },
  friday: {
    title: 'HIIT Strength',
    subtitle: 'High-tension, slow eccentrics → maximum BDNF + muscular adaptation. Hardest session.',
    warmup: [
      { exercise: 'Arm swings (cross body)', detail: '30 sec' },
      { exercise: 'Bodyweight good mornings', detail: '60 sec' },
      { exercise: 'Push-up plus', detail: '60 sec' },
      { exercise: 'Reverse lunge with rotation', detail: '60 sec' },
    ],
    blocks: [
      {
        name: 'Upper Body (12 min)',
        format: '',
        exercises: [
          { exercise: 'Diamond push-ups', detail: '4×AMRAP, 3/1/1, 60s rest' },
          { exercise: 'Pike push-ups (feet elevated)', detail: '4×AMRAP, 3/1/1, 60s rest' },
          { exercise: 'Pseudo planche push-ups', detail: '3×AMRAP, 3/1/1, 60s rest' },
        ]
      },
      {
        name: 'Lower Body (12 min)',
        format: '',
        exercises: [
          { exercise: 'Bulgarian split squat', detail: '4×8 each, 4/1/2, 60s rest' },
          { exercise: 'Pistol squat (progression)', detail: '3×AMRAP each, 3/1/1, 60s rest' },
          { exercise: 'Single-leg glute bridge', detail: '3×12 each, 2/2/1, 45s rest' },
        ]
      },
      {
        name: 'Core (6 min)',
        format: '',
        exercises: [
          { exercise: 'Hollow body hold', detail: '3×30s, 30s rest' },
          { exercise: 'L-sit hold (or tuck)', detail: '3×max, 45s rest' },
          { exercise: 'Ab wheel walkout', detail: '3×8, 3/1/3, 30s rest' },
        ]
      }
    ],
    cooldown: 'Cold shower'
  },
  saturday: {
    title: 'Skill & Complexity',
    subtitle: 'Novel motor learning → peak acetylcholine. Playful movement → endocannabinoids, dopamine.',
    warmup: [
      { exercise: 'Joint circles (all joints)', detail: '90 sec' },
      { exercise: 'Light bouncing / shaking', detail: '60 sec' },
      { exercise: '3 slow sun salutations', detail: '60 sec' },
    ],
    blocks: [
      {
        name: 'Skill Practice — Pick 2 (15 min)',
        format: '7–8 min each. LEARNING, not grinding. Quality over volume.',
        exercises: [
          { exercise: 'Handstand progressions', detail: 'Wall walks → Chest-to-wall → Kick-up → Free' },
          { exercise: 'L-sit progressions', detail: 'Tucked → One leg → Full → V-sit' },
          { exercise: 'Pistol squat progressions', detail: 'Assisted → Negative → Full → Eyes closed' },
          { exercise: 'Crow/Crane progressions', detail: 'Frog stand → Crow → Crane → Side crow' },
        ]
      },
      {
        name: 'Complexity Circuit (12 min)',
        format: '3 rounds. If your brain feels tired — that\'s acetylcholine working.',
        exercises: [
          { exercise: 'Turkish get-up (bodyweight)', detail: '3 each side' },
          { exercise: 'Breakdance kick-throughs', detail: '30 sec' },
          { exercise: 'Animal flow (beast-crab-ape)', detail: '60 sec' },
          { exercise: 'Handstand kick-ups or wall walks', detail: '5 reps' },
        ]
      },
      {
        name: 'Play Block (5 min)',
        format: 'Unstructured freestyle. Try things. Combine movements. Invent transitions.',
        exercises: []
      }
    ],
    cooldown: 'Cold shower'
  },
  sunday: {
    title: 'Active Recovery',
    subtitle: 'Gentle movement → serotonin, endocannabinoids. Breathwork → GABA, NO. Do it outside if possible.',
    warmup: [],
    blocks: [
      {
        name: 'Walk or Gentle Movement (15–20 min)',
        format: 'Nasal breathing only. Heart rate should stay conversational.',
        exercises: [
          { exercise: 'Walk outside OR slow yoga flow', detail: '15–20 min' },
        ]
      },
      {
        name: 'Breathwork Session (10 min)',
        format: '',
        exercises: [
          { exercise: 'Alternate nostril breathing', detail: '3 min' },
          { exercise: 'Extended exhale (4 in, 8 out)', detail: '3 min' },
          { exercise: 'Body scan + natural breathing', detail: '4 min' },
        ]
      }
    ],
    cooldown: 'Cold shower (gentle — 60 sec)'
  }
};

export const progressiveOverload = [
  { phase: 'Weeks 1–4: Foundation', items: ['Use base rep/time prescriptions', 'Start easiest progression', 'Cold: 30→60 sec', 'Focus on clean form'] },
  { phase: 'Weeks 5–8: Intensification', items: ['Add 1 round Monday, +2 reps EMOM Wednesday', 'Next exercise variation or +1 set', 'Cold: 60→120 sec', 'Increase eccentric by 1 sec'] },
  { phase: 'Weeks 9–12: Peak', items: ['Add difficulty (burpee tuck jumps, clap push-ups)', 'Advance to hardest progression', 'Cold: 2–3 min sustained', 'Add 2nd Tabata Monday, 25 min EMOM Wednesday'] },
  { phase: 'Week 13: Deload', items: ['Cut volume by 50%', 'Conversational intensity', 'Extra mobility and breathwork', 'Maintain cold protocol'] },
];

export function getTodayWorkout() {
  const day = new Date().getDay();
  const slugs = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  return { overview: weeklyOverview[day === 0 ? 6 : day - 1], detail: workoutDetails[slugs[day]] };
}
