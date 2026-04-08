export const dailyChecklist = [
  { id: 'wake', label: 'Up by 6:00 AM, no phone first', time: '6:00 AM' },
  { id: 'sun', label: 'Sunlight (10+ min, at home or work)', time: '6:45 AM' },
  { id: 'supp1', label: 'Supplements — AM empty stomach', time: '6:05 AM' },
  { id: 'supp2', label: 'Supplements — AM with food', time: '6:15 AM' },
  { id: 'lunch', label: 'Packed & ate protocol lunch', time: '12:00 PM' },
  { id: 'caffeine', label: 'Caffeine cutoff by 12:45 PM', time: '12:45 PM' },
  { id: 'train', label: 'After-work training session', time: '5:10 PM' },
  { id: 'cold', label: 'Cold shower post-training', time: '5:50 PM' },
  { id: 'supp3', label: 'Supplements — PM with dinner', time: '6:15 PM' },
  { id: 'winddown', label: 'Wind-down started by 9 PM', time: '9:00 PM' },
];

export const weeklyReviewQuestions = [
  { category: 'Energy & Motivation', questions: [
    'How was my overall energy this week compared to last? (worse / same / better)',
    'Did I want to do hard things or had to force myself?'
  ]},
  { category: 'Mood & Stress', questions: [
    'Baseline mood? (1–10, gut feeling)',
    'Anxiety spikes? How many? Better or worse than last week?'
  ]},
  { category: 'Sleep', questions: [
    'Sleep quality? (waking refreshed vs. dragging)',
    'Trouble falling asleep? Middle-of-night wakeups?'
  ]},
  { category: 'Focus & Cognition', questions: [
    'Could I sustain focus during work? For how long?',
    'New cognitive effects — clarity, memory, creativity, brain fog?'
  ]},
];

export const sleepProtocol = {
  anchors: [
    { rule: 'Wake time', setting: '6:00 AM every day, ±30 min max', why: 'Master clock. Entrains entire 24-hour hormone cascade.' },
    { rule: 'Bedtime', setting: '10:00 PM target (8 hours)', why: 'Hold wake time constant, not bedtime.' },
    { rule: 'No sleeping in weekends', setting: '6:30 AM fine. 9 AM is not.', why: 'Social jet lag fragments rhythm for 2-3 days.' },
  ],
  lightProtocol: [
    { time: 'Within 30 min of waking', action: 'Get outside. 10–30 min sunlight. No sunglasses.', why: 'Sets cortisol pulse + melatonin timer' },
    { time: 'Throughout the day', action: 'Maximize bright light during waking hours', why: 'Stronger circadian amplitude' },
    { time: 'After sunset', action: 'Dim all lights. Warm-toned only.', why: 'Bright light delays melatonin up to 90 min' },
    { time: 'Last 1-2 hours', action: 'No overhead lights. Single warm lamp or candles.', why: 'Blue/green wavelengths suppress melatonin' },
  ],
  temperatureProtocol: [
    { intervention: 'Hot shower', timing: '60–90 min before bed', why: 'Vasodilation → core temp drop after' },
    { intervention: 'Cool bedroom', timing: 'All night', why: '65–68°F. Above 70 fragments deep sleep.' },
    { intervention: 'No heavy exercise <2hrs before bed', timing: 'Training at 5:10 PM clears', why: 'Exercise raises core temp 2–4 hrs' },
  ],
  windDown: [
    { time: '9:00 PM', action: '"Shut Down" fires. Wind Down Focus. Screens dim.' },
    { time: '9:00–9:15', action: 'Evening supplements: Mag Glycinate, Glycine, Taurine, Uridine.' },
    { time: '9:15–9:30', action: 'Hot shower (5–10 min).' },
    { time: '9:30–9:45', action: 'Breathwork in bed: Extended exhale (4-8) for 5 min.' },
    { time: '9:45–10:00', action: 'Lights out. Dark. Cool. Cognitive Shuffle if needed.' },
  ],
  environmentChecklist: [
    'Bedroom temp: 65–68°F',
    'Blackout: curtains or blanket, cover LEDs',
    'Sound: white noise or fan',
    'Phone: another room or face-down across room',
    'Clock: face away or remove',
    'Bedding: breathable sheets (cotton/bamboo)',
  ],
  threeAmProtocol: {
    doNot: ['Check phone', 'Check time', 'Lie frustrated >20 min'],
    doThis: ['Stay in bed, eyes closed, Cognitive Shuffle or extended exhale', 'If still awake after 20 min: get up, dim room, boring activity, return when drowsy'],
  },
  cognitiveShuffle: 'Pick a random word (e.g., "BRIDGE"). For each letter, visualize random unrelated objects starting with that letter. B: balloon, bus, bracelet. R: raindrop, robot, ribbon... Loads visual cortex without engaging rumination circuit.',
};

export const dopamineProtocol = {
  eliminate: [
    { app: 'TikTok / Reels / Shorts', why: 'Fastest dopamine receptor downregulation', alt: 'YouTube full-length only' },
    { app: 'Twitter/X', why: 'Outrage-optimized algorithm', alt: 'Single RSS reader at set time' },
    { app: 'Reddit (app)', why: 'Infinite scroll, variable-ratio', alt: 'Safari only with time limit' },
    { app: 'News apps with push', why: 'Negativity bias exploitation', alt: 'Single daily news check time' },
  ],
  screenTimeLimits: [
    { limit: 'Social media category', setting: '30 min/day' },
    { limit: 'YouTube', setting: '45 min/day' },
    { limit: 'Safari (reddit, news)', setting: '20 min/day' },
    { limit: 'Games', setting: '0 min (or delete)' },
    { limit: 'Downtime', setting: '9:00 PM → 6:30 AM' },
  ],
  replacements: [
    { old: 'Morning phone scroll', replacement: 'Morning sunlight + walk', benefit: 'Serotonin, dopamine receptor sensitivity' },
    { old: 'Social media downtime', replacement: 'Read a book (physical/Kindle)', benefit: 'Acetylcholine, no variable-ratio' },
    { old: 'Short-form video', replacement: 'Skill practice from fitness plan', benefit: 'Acetylcholine, BDNF, endocannabinoids' },
    { old: 'News scrolling', replacement: 'Single 10-min check at lunch', benefit: 'Removes chronic NE spikes' },
    { old: 'Late-night phone', replacement: 'Breathwork or stretching', benefit: 'GABA, melatonin protection' },
    { old: 'Boredom scrolling', replacement: '2 min nasal breathing, eyes closed', benefit: 'NO, GABA, interoception' },
  ],
  shortcuts: [
    { name: 'Start Day', trigger: 'When alarm stopped', actions: 'Wind Down OFF → Reduce Interruptions ON → Open Weather → 90-min timer' },
    { name: 'Lock In', trigger: 'Manual / Siri / NFC', actions: 'Deep Work Focus ON → Timer → Open work app → Volume 0' },
    { name: 'Shut Down', trigger: '9:00 PM auto', actions: 'Wind Down ON → Brightness 30% → Night Shift → DND → Open Health' },
    { name: 'Reset', trigger: 'Manual / "Hey Siri, Reset"', actions: 'Close all apps → "What are you trying to do?" → Open Reminders' },
  ],
  recoveryTimeline: [
    { time: 'Days 1–3', what: 'Withdrawal. Brain expects dopamine hits.', feel: 'Restlessness, boredom, phone urge, mild irritability.' },
    { time: 'Days 4–7', what: 'Habituation begins. Checking fades.', feel: 'Boredom decreases. More present.' },
    { time: 'Weeks 1–2', what: 'Early receptor upregulation.', feel: 'Simple activities more satisfying. Sleep improves.' },
    { time: 'Weeks 2–4', what: 'Significant receptor recovery.', feel: 'Clearer thinking, stronger focus, reduced anxiety.' },
    { time: 'Months 1–3', what: 'New baseline. Earned rewards.', feel: 'Flow states accessible. Motivation for hard things increases.' },
  ],
  metrics: [
    { metric: 'Total screen time/day', target: '↓ below 3 hrs (non-work)' },
    { metric: 'Pickups/day', target: '↓ below 50 (ideally <30)' },
    { metric: 'Notifications/day', target: '↓ below 30' },
    { metric: 'First pickup after waking', target: '↑ delay to 30+ min' },
    { metric: 'Social media time', target: '↓ below 30 min/day' },
    { metric: 'Most used app', target: 'Should be a tool, not a feed' },
  ],
};

export const socialFramework = {
  connectionTypes: [
    { type: 'Physical touch', system: 'Oxytocin ↑↑', note: '6+ second hugs produce measurably more oxytocin' },
    { type: 'Eye contact + conversation', system: 'Oxytocin ↑, Serotonin ↑', note: 'Social belonging axis' },
    { type: 'Shared laughter', system: 'Endorphins ↑↑, Dopamine ↑', note: 'Genuine, involuntary laughter triggers opioid release' },
    { type: 'Group singing/music', system: 'Oxytocin ↑↑, Endorphins ↑', note: 'Most potent oxytocin trigger' },
    { type: 'Physical play/team sport', system: 'All social + exercise neuro', note: 'Most neurochemically complete activity' },
    { type: 'Acts of generosity', system: 'Oxytocin ↑, Serotonin ↑, Dopamine ↑', note: 'The "helper\'s high"' },
    { type: 'Pet interaction', system: 'Oxytocin ↑↑', note: 'Mutual gaze with dogs triggers oxytocin in both' },
    { type: 'Shared meals', system: 'Oxytocin ↑, Serotonin ↑', note: 'Oldest human bonding ritual' },
  ],
  weeklyMinimums: [
    { freq: 'Daily', activity: '1 meaningful human interaction', systems: 'Oxytocin, Serotonin', examples: 'Real conversation at work. Lunch with coworker. Phone/FaceTime.' },
    { freq: '2–3x/week', activity: 'Physical presence outside work', systems: 'Oxytocin, Endorphins, Serotonin', examples: 'Hang out after work, eat together weekends, walk with friend.' },
    { freq: '1x/week', activity: 'Physical touch or activity with others', systems: 'Oxytocin ↑↑, Endorphins ↑↑', examples: 'Hug someone. Pickup sport. Massage.' },
    { freq: '1x/week', activity: 'Real laughter with someone', systems: 'Endorphins ↑↑', examples: 'Watch comedy together. The key is shared laughter.' },
  ],
  monthlyTargets: [
    { freq: '2–4x/month', activity: 'Group activity (3+ people)', why: 'Tribal bonding circuits' },
    { freq: '1–2x/month', activity: 'Novel social experience', why: 'Dopamine + oxytocin combo' },
    { freq: '1x/month', activity: 'Vulnerable conversation', why: 'Vasopressin and deep bonding' },
  ],
  ideas: [
    { effort: 'Zero', items: ['Pet a dog', 'Hug someone 6+ seconds', 'Eye contact with cashier/barista', 'Call someone on your drive'] },
    { effort: 'Low', items: ['Eat a meal with someone', 'Walk with someone (Sunday recovery)', 'Watch something funny together', 'Play a game'] },
    { effort: 'Medium', items: ['Join a rec sport league', 'Take a class', 'Volunteer', 'Start a weekly dinner group'] },
    { effort: 'Gold Standard', items: ['Team physical activity — basketball, climbing, martial arts, hiking group. Hits more neuromodulators simultaneously than anything else.'] },
  ],
};

export const startupSequence = [
  { week: 'Week 1', title: 'The Big Three', items: ['Consistent 6:00 AM wake + sunlight', 'After-work training daily', 'Cold shower after training', 'Wind Down at 9 PM'] },
  { week: 'Week 2', title: 'Add Fuel', items: ['Start Slot 1 + 2 supplements (GREEN only)', 'Start packing protocol lunches', 'Screen Time limits + notification purge'] },
  { week: 'Week 3', title: 'Add Evening Stack', items: ['Start Slot 3 supplements (GABA stack)', 'Full wind-down sequence', 'Caffeine cutoff at 12:45 PM'] },
  { week: 'Week 4', title: 'Add Depth', items: ['5 min daily cyclic sighing', 'Start weekly review', 'Make one social plan per week'] },
  { week: 'Month 2+', title: 'Refine', items: ['Full protocol running. Track, adjust, iterate.', 'Prescriber conversation about RED supplements.', 'Progressive overload (weeks 5–8).'] },
];
