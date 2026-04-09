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
      { exercise: 'Jumping jacks', detail: '60 sec', instructions: 'Stand with feet together, arms at sides. Jump feet apart while raising arms overhead. Jump back to start. Keep a steady rhythm and land softly on the balls of your feet.' },
      { exercise: 'Arm circles (forward + backward)', detail: '30 sec', instructions: 'Extend arms straight out to the sides at shoulder height. Make small circles, gradually increasing to large circles. Do 15 sec forward, then 15 sec backward.' },
      { exercise: 'Bodyweight squats (slow, full depth)', detail: '60 sec', instructions: 'Stand shoulder-width apart. Push hips back and bend knees, lowering until thighs are below parallel. Keep chest up, weight in heels. Rise slowly. Use a 3-second down, 1-second up tempo.' },
      { exercise: 'Inchworms', detail: '60 sec', instructions: 'Stand tall. Hinge at hips, place hands on floor. Walk hands out to a plank position. Pause, then walk hands back to feet and stand. Keep legs as straight as possible.' },
    ],
    blocks: [
      {
        name: 'Main Block — 4 Rounds',
        format: '40 sec work / 20 sec rest. All 5 exercises = 1 round. 60 sec rest between rounds.',
        exercises: [
          { exercise: 'Burpees (full, chest to floor)', detail: '40s work', instructions: 'From standing, squat down and place hands on floor. Jump feet back to plank. Lower your entire chest to the floor. Push up to plank, jump feet forward to hands, then explode up into a jump with arms overhead. Land softly and immediately go into the next rep.' },
          { exercise: 'Jump squats', detail: '40s work', instructions: 'Feet shoulder-width apart. Squat down until thighs are parallel. Explode upward, jumping as high as possible. Swing arms for momentum. Land softly with bent knees and immediately drop into the next squat.' },
          { exercise: 'Mountain climbers (fast)', detail: '40s work', instructions: 'Start in a high plank with hands under shoulders. Drive one knee toward your chest, then quickly switch legs. Keep hips low and level — don\'t let them pike up. Sprint pace: as fast as you can while maintaining form.' },
          { exercise: 'Explosive push-ups', detail: '40s work', instructions: 'Start in push-up position. Lower chest to the floor. Push up explosively so hands leave the ground. Land with soft elbows and go directly into the next rep. Modify by doing these from knees if needed.' },
          { exercise: 'High knees (sprint pace)', detail: '40s work', instructions: 'Stand tall. Drive knees up to hip height alternately as fast as possible. Pump arms like sprinting. Stay on the balls of your feet. Keep core tight and torso upright — don\'t lean back.' },
        ]
      },
      {
        name: 'Tabata Finisher',
        format: '20 sec max effort / 10 sec rest × 8 rounds',
        exercises: [
          { exercise: 'Wk 1–4: Squat jumps | Wk 5–8: Burpees | Wk 9–12: Burpee tuck jumps', detail: '4 min total', instructions: 'Weeks 1–4: Perform squat jumps (see above). Weeks 5–8: Perform full burpees. Weeks 9–12: Burpee tuck jumps — same as a burpee but at the top, tuck knees to chest mid-air. Every round is max effort for 20 sec, then 10 sec complete rest.' },
        ]
      }
    ],
    cooldown: '90 sec forward fold (nasal breathing 4-6) → 60 sec child\'s pose → 30 sec standing eyes closed → Cold shower'
  },
  tuesday: {
    title: 'Skill & Flow',
    subtitle: 'Complex motor patterns → acetylcholine. Sustained effort → endocannabinoids. All nasal breathing.',
    warmup: [
      { exercise: 'Cat-cow stretches', detail: '60 sec', instructions: 'On hands and knees, hands under shoulders, knees under hips. Inhale: drop belly, lift chest and tailbone (cow). Exhale: round spine, tuck chin and tailbone (cat). Move slowly with breath, one transition per breath cycle.' },
      { exercise: 'World\'s greatest stretch', detail: '60 sec', instructions: 'Lunge forward with right foot. Place left hand on floor inside right foot. Rotate right arm up to the ceiling, following with your gaze. Hold 3 sec. Return hand to floor. Switch sides. This opens hips, thoracic spine, and hamstrings.' },
      { exercise: 'Slow-motion squats', detail: '60 sec', instructions: 'Perform bodyweight squats with a 5-second descent and 5-second ascent. Focus on control and balance at every point in the range. Breathe through the nose throughout.' },
    ],
    blocks: [
      {
        name: 'Skill Block A — Balance (10 min)',
        format: '',
        exercises: [
          { exercise: 'Single-leg stand (eyes closed)', detail: '3×30s each', instructions: 'Stand on one foot. Close your eyes. Keep a micro-bend in the standing knee. Arms out for balance if needed. Focus on the subtle ankle and foot adjustments. If you fall, reset immediately. Alternate legs each set.' },
          { exercise: 'Pistol squat negatives', detail: '3×5 each, 5/1/–', instructions: 'Stand on one leg, other leg extended in front. Slowly lower yourself on the standing leg over 5 seconds until your glute touches your calf (or as low as you can go). Use a wall or doorframe for balance if needed. Stand up with both feet — the negative (lowering) is the work.' },
          { exercise: 'Crow pose hold', detail: '5× max hold', instructions: 'Squat down, hands on floor shoulder-width apart, fingers spread. Place knees on the backs of your upper arms near the armpits. Lean forward, shifting weight onto hands until feet lift off. Round your upper back. Look slightly forward, not down. Hold as long as possible.' },
          { exercise: 'Single-leg Romanian deadlift', detail: '3×8 each, 3/1/2', instructions: 'Stand on one leg with a slight knee bend. Hinge at the hip, extending the free leg behind you as your torso lowers. Reach hands toward the floor. Keep hips square. Return to standing. Tempo: 3 sec down, 1 sec pause at bottom, 2 sec up.' },
        ]
      },
      {
        name: 'Skill Block B — Locomotion (10 min)',
        format: 'High-complexity movements for acetylcholine and cerebellar activation.',
        exercises: [
          { exercise: 'Bear crawl (fwd + back)', detail: '3×30s', instructions: 'On hands and feet, knees hovering 1 inch off the ground. Move opposite hand and foot forward together (right hand + left foot). Keep hips low and stable. Crawl forward 15 sec, then reverse backward 15 sec. Keep knees close to the ground throughout.' },
          { exercise: 'Crab walk (fwd + back)', detail: '3×30s', instructions: 'Sit on the floor. Place hands behind you, fingers forward. Lift hips off the ground. Walk forward using opposite hand and foot. After 15 sec, reverse direction. Keep hips elevated the entire time.' },
          { exercise: 'Lateral ape walks', detail: '3×30s', instructions: 'Start in a deep squat. Place both hands on the floor to one side. Shift weight onto hands and hop feet laterally toward your hands. Replant hands further in the same direction. Continue laterally for 15 sec, then reverse. Stay low throughout.' },
          { exercise: 'Floor flow (freestyle)', detail: '3×60s', instructions: 'Combine any ground-based movements creatively: transitions between sitting, kneeling, prone, supine. Roll, crawl, twist. There is no wrong way — the goal is continuous, improvisational movement. Let your body explore ranges of motion it doesn\'t normally visit.' },
        ]
      },
      {
        name: 'Flow Finisher (8 min)',
        format: 'Continuous movement, no rest. Nasal breathing only.',
        exercises: [
          { exercise: 'Down dog → Chaturanga → Up dog → Warrior I → II → Triangle → Low lunge → Pigeon → Repeat', detail: '8 min continuous', instructions: 'Flow through this yoga sequence continuously. Down dog: inverted V, press heels down. Chaturanga: lower halfway like a push-up. Up dog: press up, hips off floor, chest open. Step forward to Warrior I (arms up), open to Warrior II (arms wide), extend to Triangle (reach forward and down). Step back to low lunge, then lower to Pigeon (front leg bent, back leg extended). Return to down dog and repeat on the other side.' },
        ]
      }
    ],
    cooldown: 'Cold shower'
  },
  wednesday: {
    title: 'HIIT Endurance',
    subtitle: 'Sustained high heart rate → serotonin, endocannabinoids. Longer intervals → deeper BDNF.',
    warmup: [
      { exercise: 'Seal jacks', detail: '60 sec', instructions: 'Like jumping jacks but with arms. Jump feet apart while opening arms wide to the sides at shoulder height. Jump feet together while clapping hands in front of chest. Keep a fast rhythm.' },
      { exercise: 'Hip circles', detail: '30 sec', instructions: 'Stand with feet shoulder-width apart, hands on hips. Make large circles with your hips — push forward, right, back, left. Do 15 sec clockwise, then 15 sec counterclockwise. Keep your upper body relatively still.' },
      { exercise: 'Reverse lunges', detail: '60 sec', instructions: 'Stand tall. Step one foot backward and lower until both knees are at 90 degrees. Front knee stays over ankle. Push through front heel to return to standing. Alternate legs each rep.' },
      { exercise: 'Push-up to downward dog', detail: '60 sec', instructions: 'Start in plank. Perform one push-up. At the top, push hips up and back into downward dog (inverted V). Hold 2 sec, feeling the stretch in hamstrings and calves. Return to plank and repeat.' },
    ],
    blocks: [
      {
        name: 'EMOM × 20 min',
        format: 'Every Minute On the Minute. Perform reps, rest remainder. Repeat 4x.',
        exercises: [
          { exercise: 'Burpees', detail: '8 reps', instructions: 'Full burpees: squat, hands down, jump back to plank, chest to floor, push up, jump feet to hands, jump with arms overhead. Complete 8 reps as fast as possible, then rest the remainder of that minute.' },
          { exercise: 'Jumping lunges', detail: '16 total', instructions: 'Start in a lunge position. Explode upward, switching legs mid-air. Land softly in a lunge with the opposite leg forward. That\'s 1 rep per side. Complete 16 total (8 each leg) then rest the remainder of the minute.' },
          { exercise: 'Push-ups', detail: '15 reps', instructions: 'Hands slightly wider than shoulders. Lower chest to the floor with a straight body line. Push back up to full arm extension. Keep core tight — no sagging hips or piking. Complete 15 reps, rest the remainder.' },
          { exercise: 'Squat jumps', detail: '12 reps', instructions: 'Feet shoulder-width. Squat to parallel. Explode up into a max-height jump. Land softly with bent knees. Immediately descend into the next squat. Complete 12, rest the remainder.' },
          { exercise: 'Plank shoulder taps', detail: '20 total', instructions: 'Hold a high plank with feet slightly wider than normal for stability. Lift one hand and tap the opposite shoulder. Return hand to floor. Alternate sides. Minimize hip rotation — keep your body as still as possible. 20 total taps.' },
        ]
      },
      {
        name: 'Endurance Finisher (8 min)',
        format: 'Continuous circuit, no rest. 3 rounds.',
        exercises: [
          { exercise: 'Bodyweight squats (deep)', detail: '20 reps', instructions: 'Full depth squats — go as low as your mobility allows, ideally hamstrings touching calves. Keep heels on the floor, chest up. Move at a steady, controlled pace. These are not explosive — focus on depth and breathing.' },
          { exercise: 'Push-ups (slow 2/1/2)', detail: '10 reps', instructions: 'Perform push-ups with controlled tempo: 2 seconds down, 1 second pause at the bottom (chest near floor), 2 seconds up. This slow tempo increases time under tension. Keep perfect form throughout.' },
          { exercise: 'Reverse lunges', detail: '16 reps', instructions: 'Step back, lower to 90/90. Push through front heel to return. 8 each leg, alternating. Keep torso upright and core braced. Maintain steady pace — don\'t rush.' },
          { exercise: 'Plank hold', detail: '30 sec', instructions: 'Forearm plank: elbows under shoulders, body in a straight line from head to heels. Squeeze glutes and brace core. Don\'t let hips sag or pike up. Breathe steadily through the nose. Hold for the full 30 seconds.' },
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
          { exercise: 'Physiological sigh', detail: '5 reps', instructions: 'Double inhale through the nose: one full inhale, then a short second inhale on top to fully expand the lungs. Then a long, slow exhale through the mouth. This rapidly activates the parasympathetic nervous system. Pause 5 seconds between reps.' },
          { exercise: 'Box breathing (4-4-4-4)', detail: '2 min', instructions: 'Inhale through the nose for 4 counts. Hold full lungs for 4 counts. Exhale through the nose for 4 counts. Hold empty lungs for 4 counts. Repeat. Keep counts even and steady. Sit upright with eyes closed.' },
          { exercise: 'Extended exhale (4 in, 8 out)', detail: '2 min', instructions: 'Inhale through the nose for 4 counts. Exhale slowly through the nose for 8 counts. The extended exhale activates the vagus nerve and shifts toward parasympathetic dominance. Keep the exhale smooth and controlled, not forced.' },
        ]
      },
      {
        name: 'Mobility Flow (20 min)',
        format: 'Hold 45–60 sec each. Nasal breathing. Sink deeper with each exhale.',
        exercises: [
          { exercise: 'Deep squat hold', detail: '60 sec', instructions: 'Stand with feet slightly wider than shoulder-width, toes turned out 15–30 degrees. Squat as deep as possible, ideally with heels on the floor. Use elbows to push knees outward. Keep chest up. Hands together in front of chest. Breathe and relax deeper with each exhale.' },
          { exercise: '90/90 hip switch (L + R)', detail: '60 sec each', instructions: 'Sit on the floor. Arrange both legs at 90-degree angles: front leg has knee pointing forward, back leg has knee pointing to the side. Sit tall and lean into the front hip. To switch, lift knees and rotate both legs to mirror the position on the other side. Spend 60 sec on each side.' },
          { exercise: 'Pigeon pose (L + R)', detail: '60 sec each', instructions: 'From a tabletop position, bring one knee forward behind the wrist. Extend the back leg straight behind you. Lower hips toward the floor. Walk hands forward and fold over the front leg if possible. Keep hips square. Breathe into the stretch. Switch sides.' },
          { exercise: 'Prone scorpion (L + R)', detail: '60 sec each', instructions: 'Lie face down with arms extended to the sides (T-shape). Lift one foot and reach it across your body toward the opposite hand, rotating through the spine. Keep both arms flat on the floor. Hold the stretch, then switch sides.' },
          { exercise: 'Thread the needle (L + R)', detail: '60 sec each', instructions: 'Start on hands and knees. Reach one arm under your body, sliding it along the floor as you rotate your torso. Let your shoulder and temple rest on the floor. You should feel a stretch through the upper back and shoulder. Hold, then switch sides.' },
          { exercise: 'Pancake stretch', detail: '60 sec', instructions: 'Sit on the floor with legs spread as wide as comfortable in a straddle. Keep knees pointing up. Hinge at the hips and walk hands forward along the floor between your legs. Keep your back flat — don\'t round the spine. Go to your comfortable edge and breathe.' },
          { exercise: 'Seated forward fold', detail: '60 sec', instructions: 'Sit with legs extended straight in front of you. Hinge at the hips and reach toward your toes. Keep your back as flat as possible. If you can\'t reach your toes, hold your shins or use a towel around your feet. Relax into it with each exhale.' },
          { exercise: 'Bridge hold', detail: '60 sec', instructions: 'Lie on your back, knees bent, feet flat on the floor hip-width apart. Press through heels and lift hips toward the ceiling. Squeeze glutes at the top. Keep core braced and don\'t overextend the lower back. Hold at the top for the full duration.' },
          { exercise: 'Wall angels', detail: '60 sec', instructions: 'Stand with your back flat against a wall, feet 6 inches away. Press lower back, upper back, and head against the wall. Place arms in a "goal post" position (elbows and wrists touching wall). Slowly slide arms up and down the wall. Maintain all contact points.' },
          { exercise: 'Neck circles + stretches', detail: '60 sec', instructions: 'Slowly roll your head in full circles — 5 clockwise, 5 counterclockwise. Then: tilt ear to shoulder (hold 10 sec each side), look left and right (hold 10 sec each), tuck chin to chest (hold 10 sec). Be gentle and move slowly.' },
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
      { exercise: 'Arm swings (cross body)', detail: '30 sec', instructions: 'Stand tall, swing both arms simultaneously across your chest, alternating which arm is on top. Keep arms relatively straight and let momentum carry the movement. This opens up the chest and warms the shoulder joints.' },
      { exercise: 'Bodyweight good mornings', detail: '60 sec', instructions: 'Stand with feet hip-width apart, hands behind your head. Hinge at the hips, pushing your butt back while keeping your back flat. Lower your torso until you feel a stretch in the hamstrings (roughly parallel to the floor). Squeeze glutes to return to standing.' },
      { exercise: 'Push-up plus', detail: '60 sec', instructions: 'Perform a regular push-up. At the top, push further by protracting your shoulder blades (rounding your upper back and pushing the floor away). This extra push activates the serratus anterior. Return to normal plank position and repeat.' },
      { exercise: 'Reverse lunge with rotation', detail: '60 sec', instructions: 'Step back into a reverse lunge. At the bottom of the lunge, rotate your torso over the front leg, reaching your arms or hands across. This combines lower body activation with thoracic spine mobility. Return to standing and switch sides.' },
    ],
    blocks: [
      {
        name: 'Upper Body (12 min)',
        format: '',
        exercises: [
          { exercise: 'Diamond push-ups', detail: '4×AMRAP, 3/1/1, 60s rest', instructions: 'Place hands close together under your chest, thumbs and index fingers forming a diamond shape. Lower chest to hands with a 3-second descent, pause 1 second at bottom, push up in 1 second. Elbows track back along your sides. AMRAP = as many reps as possible with good form.' },
          { exercise: 'Pike push-ups (feet elevated)', detail: '4×AMRAP, 3/1/1, 60s rest', instructions: 'Place feet on an elevated surface (chair, step, bed). Walk hands back until your body forms an inverted V with hips high. Bend elbows and lower the top of your head toward the floor. Press back up. 3 sec down, 1 sec pause, 1 sec up. This targets shoulders heavily.' },
          { exercise: 'Pseudo planche push-ups', detail: '3×AMRAP, 3/1/1, 60s rest', instructions: 'Set up like a push-up but rotate hands outward (fingers pointing to sides or slightly backward). Lean forward so shoulders are well past your wrists. Perform push-ups from this position. 3 sec down, 1 sec pause, 1 sec up. This heavily loads the shoulders and chest.' },
        ]
      },
      {
        name: 'Lower Body (12 min)',
        format: '',
        exercises: [
          { exercise: 'Bulgarian split squat', detail: '4×8 each, 4/1/2, 60s rest', instructions: 'Stand with one foot on the floor, rear foot elevated on a bench or chair behind you. Lower straight down until the front thigh is parallel or below. 4 sec descent, 1 sec pause at the bottom, 2 sec up. Keep torso upright. Complete all reps on one side before switching.' },
          { exercise: 'Pistol squat (progression)', detail: '3×AMRAP each, 3/1/1, 60s rest', instructions: 'Stand on one leg, other leg extended in front. Squat all the way down on the standing leg, then stand back up. Use a doorframe or TRX for assistance if needed. Progression: assisted → negative-only → full range → eyes closed. 3 sec down, 1 sec pause, 1 sec up.' },
          { exercise: 'Single-leg glute bridge', detail: '3×12 each, 2/2/1, 45s rest', instructions: 'Lie on your back, one foot flat on the floor, other leg extended or held at 90 degrees. Press through the grounded heel to lift hips. 2 sec up, 2 sec hold at the top (squeeze glute hard), 1 sec down. Keep hips level — don\'t let the non-working side drop.' },
        ]
      },
      {
        name: 'Core (6 min)',
        format: '',
        exercises: [
          { exercise: 'Hollow body hold', detail: '3×30s, 30s rest', instructions: 'Lie on your back. Press lower back firmly into the floor. Lift shoulders and legs off the ground, arms extended overhead. Your body should form a shallow banana shape. The key is keeping the lower back glued to the floor. If it lifts, bend your knees or raise your arms less.' },
          { exercise: 'L-sit hold (or tuck)', detail: '3×max, 45s rest', instructions: 'Sit on the floor with legs extended. Place hands on the floor beside your hips (or on parallettes/books). Press down to lift your entire body off the floor with legs extended horizontally. If you can\'t straighten legs, keep knees tucked to chest (tuck L-sit). Hold as long as possible.' },
          { exercise: 'Ab wheel walkout', detail: '3×8, 3/1/3, 30s rest', instructions: 'Kneel on the floor. Place hands on an ab wheel (or use a towel on a smooth floor). Slowly roll/walk hands forward, extending your body toward the floor over 3 seconds. Pause 1 second at your furthest comfortable point. Roll/walk back over 3 seconds. Don\'t let your lower back sag.' },
        ]
      }
    ],
    cooldown: 'Cold shower'
  },
  saturday: {
    title: 'Skill & Complexity',
    subtitle: 'Novel motor learning → peak acetylcholine. Playful movement → endocannabinoids, dopamine.',
    warmup: [
      { exercise: 'Joint circles (all joints)', detail: '90 sec', instructions: 'Work from top to bottom: neck circles, shoulder rolls, arm circles, wrist circles, torso rotations, hip circles, knee circles, ankle circles. 5–10 rotations each direction per joint. Move smoothly and gently to lubricate every joint.' },
      { exercise: 'Light bouncing / shaking', detail: '60 sec', instructions: 'Stand relaxed and gently bounce on the balls of your feet. Shake out your arms, legs, and whole body. Let everything be loose and floppy. This activates the nervous system and releases tension. Bounce light — heels barely leaving the ground.' },
      { exercise: '3 slow sun salutations', detail: '60 sec', instructions: 'Mountain pose → reach overhead → forward fold → halfway lift → step back to plank → lower to floor → cobra or up dog → down dog (hold 3 breaths) → step forward → forward fold → reach up → mountain pose. Move with breath, one movement per inhale or exhale.' },
    ],
    blocks: [
      {
        name: 'Skill Practice — Pick 2 (15 min)',
        format: '7–8 min each. LEARNING, not grinding. Quality over volume.',
        exercises: [
          { exercise: 'Handstand progressions', detail: 'Wall walks → Chest-to-wall → Kick-up → Free', instructions: 'Wall walks: start in plank with feet against wall, walk feet up as hands walk toward wall. Chest-to-wall: face wall, walk up until chest nearly touches. Kick-ups: face away from wall, kick up to handstand and hold. Free: kick up without wall. Always bail safely by cartwheeling out. Practice the level you\'re currently at.' },
          { exercise: 'L-sit progressions', detail: 'Tucked → One leg → Full → V-sit', instructions: 'Tucked: hands on floor, lift body with knees tucked to chest. One leg: extend one leg while keeping the other tucked. Full L-sit: both legs extended horizontally. V-sit: legs raised above horizontal. Use parallettes or books for hand clearance. Focus on pressing shoulders down and engaging core.' },
          { exercise: 'Pistol squat progressions', detail: 'Assisted → Negative → Full → Eyes closed', instructions: 'Assisted: hold a doorframe or TRX and squat on one leg. Negative: slowly lower on one leg (use support to stand up). Full: complete full pistol squat unassisted. Eyes closed: full pistol with eyes shut for vestibular challenge. Keep heel on the ground and chest up.' },
          { exercise: 'Crow/Crane progressions', detail: 'Frog stand → Crow → Crane → Side crow', instructions: 'Frog stand: squat, hands on floor, lean forward until feet lift (knees on elbows). Crow: knees on the backs of upper arms, round back, lean forward. Crane: same as crow but arms are straight (harder). Side crow: twist torso, stack both legs on one arm. Progress when you can hold 15+ sec consistently.' },
        ]
      },
      {
        name: 'Complexity Circuit (12 min)',
        format: '3 rounds. If your brain feels tired — that\'s acetylcholine working.',
        exercises: [
          { exercise: 'Turkish get-up (bodyweight)', detail: '3 each side', instructions: 'Lie on your back, one arm extended toward the ceiling. Roll to elbow, then to hand. Lift hips into a bridge. Sweep the back leg under you to a kneeling position. Stand up. Reverse every step to return to the floor. Keep the raised arm pointed at the ceiling throughout. Go slowly and deliberately.' },
          { exercise: 'Breakdance kick-throughs', detail: '30 sec', instructions: 'Start in a bear crawl position (hands and feet, knees hovering). Pick up one hand and kick the opposite leg through underneath your body, rotating and extending the leg. Return to bear crawl and repeat on the other side. Keep it flowing and rhythmic.' },
          { exercise: 'Animal flow (beast-crab-ape)', detail: '60 sec', instructions: 'Beast: move in bear crawl position, knees hovering. Transition to Crab: flip over, hips up, walk forward and backward. Transition to Ape: deep squat, hands on floor, hop laterally. Flow between all three without stopping. Create smooth transitions — the goal is continuous, creative movement.' },
          { exercise: 'Handstand kick-ups or wall walks', detail: '5 reps', instructions: 'Kick-ups: place hands on the floor, kick one leg up and follow with the other to reach a handstand. Hold briefly, come down controlled. Wall walks: start in plank with feet against wall, walk feet up the wall while walking hands toward wall. Walk back down = 1 rep. Choose based on your current level.' },
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
          { exercise: 'Walk outside OR slow yoga flow', detail: '15–20 min', instructions: 'Option A: Walk at an easy pace outdoors. Breathe through the nose only. No music or podcasts — just be present. Option B: Slow yoga flow — sun salutations, warrior sequences, seated stretches. Move with your breath, never pushing hard. This is recovery, not training.' },
        ]
      },
      {
        name: 'Breathwork Session (10 min)',
        format: '',
        exercises: [
          { exercise: 'Alternate nostril breathing', detail: '3 min', instructions: 'Sit comfortably. Use your right thumb to close the right nostril. Inhale through the left nostril for 4 counts. Close the left nostril with your ring finger, release the right. Exhale through the right for 4 counts. Inhale through the right for 4 counts. Close right, open left, exhale left. That\'s one cycle. Continue.' },
          { exercise: 'Extended exhale (4 in, 8 out)', detail: '3 min', instructions: 'Inhale through the nose for 4 counts. Exhale slowly through the nose for 8 counts. The long exhale activates the parasympathetic nervous system through the vagus nerve. Keep the breath smooth and effortless. Eyes closed, body relaxed.' },
          { exercise: 'Body scan + natural breathing', detail: '4 min', instructions: 'Lie down or sit comfortably. Let your breathing be completely natural. Bring attention to your feet — notice any sensations. Slowly move attention upward: calves, thighs, hips, belly, chest, hands, arms, shoulders, neck, face, scalp. Don\'t try to change anything. Just observe.' },
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
