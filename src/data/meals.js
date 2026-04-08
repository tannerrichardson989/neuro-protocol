export const meals = [
  {
    id: 'neuro-scramble',
    name: 'The Neuro Scramble',
    emoji: '🍳',
    targets: 'Choline, Tyrosine, Nitrates, Flavonoids',
    time: '8 min stovetop or 3 min microwave',
    ingredients: [
      { item: 'Eggs', amount: '3 large', why: '450mg choline, tyrosine, tryptophan' },
      { item: 'Baby spinach', amount: '1 big handful', why: 'Nitrates (NO), magnesium, folate' },
      { item: 'Avocado', amount: '1/2', why: 'Healthy fat, tyrosine' },
      { item: 'Seasoning / hot sauce', amount: 'to taste', why: 'Capsaicin → endorphins' },
    ],
    prep: 'Crack 3 eggs in microwave-safe bowl, toss in spinach, microwave 90 sec, stir, 60 sec more. Top with avocado.'
  },
  {
    id: 'tryptophan-bowl',
    name: 'The Tryptophan Bowl',
    emoji: '🥗',
    targets: 'Tryptophan + carbs (serotonin combo), fiber, gut health',
    time: '5 min (microwave rice + assemble)',
    ingredients: [
      { item: 'Canned chicken', amount: '1 can / 4-5 oz', why: 'Tryptophan, tyrosine, choline' },
      { item: 'Microwave rice', amount: '1 pouch', why: 'Carbs drive tryptophan into brain' },
      { item: 'Black beans (canned)', amount: '1/2 can', why: 'Magnesium, prebiotic fiber' },
      { item: 'Sauerkraut or kimchi', amount: '2-3 tbsp', why: 'Live cultures for gut-serotonin axis' },
      { item: 'Hot sauce', amount: 'to taste', why: 'Capsaicin → endorphins' },
    ],
    prep: 'Microwave rice (90 sec). Open cans. Dump into bowl. Top with sauerkraut and hot sauce. Zero cooking.'
  },
  {
    id: 'omega-plate',
    name: 'The Omega Plate',
    emoji: '🐟',
    targets: 'Omega-3 EPA/DHA, choline, nitrates, flavonoids',
    time: '3 min (open cans, assemble)',
    ingredients: [
      { item: 'Canned salmon (wild)', amount: '1 can (5-6 oz)', why: 'Omega-3 EPA/DHA, choline' },
      { item: 'Arugula', amount: '2 big handfuls', why: 'Highest nitrate vegetable → NO' },
      { item: 'Walnuts', amount: '~1 oz', why: 'Plant omega-3, magnesium' },
      { item: 'Olive oil + lemon', amount: 'drizzle + squeeze', why: 'Polyphenols, absorption' },
      { item: 'Pumpkin seeds', amount: '1 tbsp', why: 'Magnesium, tryptophan, zinc' },
    ],
    prep: 'Open can. Dump salmon on arugula. Drizzle oil and lemon. Scatter walnuts and seeds.'
  },
  {
    id: 'bliss-smoothie',
    name: 'The Bliss Smoothie',
    emoji: '🫐',
    targets: 'Flavonoids (endocannabinoid), prebiotic fiber, tryptophan',
    time: '2 min (blender)',
    ingredients: [
      { item: 'Frozen mixed berries', amount: '1 cup', why: 'Flavonoids → preserve anandamide' },
      { item: 'Banana', amount: '1', why: 'Prebiotic fiber, tyrosine' },
      { item: 'Oat milk', amount: '1 cup', why: 'Dairy-free base, B12/D fortified' },
      { item: 'Pumpkin seeds', amount: '1 tbsp', why: 'Tryptophan, magnesium, zinc' },
      { item: 'Dark cocoa powder', amount: '1 tbsp', why: 'Anandamide + flavanols + magnesium' },
      { item: 'Oats', amount: '1/4 cup', why: 'Prebiotic fiber, slow carbs' },
    ],
    prep: 'Everything in blender. Blend 30 sec. Drink.'
  }
];

export const weeklyMealPlan = [
  { day: 'Mon', training: 'HIIT Power', breakfast: 'Bliss Smoothie', lunch: 'Tryptophan Bowl', dinner: 'Neuro Scramble' },
  { day: 'Tue', training: 'Skill', breakfast: 'Bliss Smoothie', lunch: 'Omega Plate', dinner: 'Tryptophan Bowl' },
  { day: 'Wed', training: 'HIIT Endurance', breakfast: 'Neuro Scramble', lunch: 'Tryptophan Bowl', dinner: 'Omega Plate' },
  { day: 'Thu', training: 'Mobility', breakfast: 'Bliss Smoothie', lunch: 'Omega Plate', dinner: 'Tryptophan Bowl' },
  { day: 'Fri', training: 'HIIT Strength', breakfast: 'Neuro Scramble', lunch: 'Tryptophan Bowl', dinner: 'Neuro Scramble' },
  { day: 'Sat', training: 'Skill', breakfast: 'Neuro Scramble', lunch: 'Omega Plate', dinner: 'Tryptophan Bowl' },
  { day: 'Sun', training: 'Recovery', breakfast: 'Bliss Smoothie', lunch: 'Tryptophan Bowl', dinner: 'Whatever you want' },
];

export const snacks = [
  { item: '2 hard-boiled eggs', target: 'Choline, tyrosine', note: 'Boil 6 on Sunday' },
  { item: 'Dark chocolate (70%+)', target: 'Anandamide, flavanols, magnesium', note: '1-2 squares daily' },
  { item: 'Banana + almond butter', target: 'Tyrosine, prebiotic fiber', note: '30 seconds' },
  { item: 'Pumpkin seeds', target: 'Tryptophan, magnesium, zinc', note: 'Keep at desk' },
  { item: 'Green tea', target: 'L-theanine (GABA), EGCG', note: 'Swap one caffeine source' },
];

export const groceryList = [
  {
    category: 'Produce',
    items: [
      { name: 'Baby spinach (5oz)', qty: '2 bags', price: '$3.50' },
      { name: 'Arugula (5oz)', qty: '2 bags', price: '$4.00' },
      { name: 'Avocados', qty: '4', price: '$4.00' },
      { name: 'Bananas', qty: '1 bunch', price: '$1.50' },
      { name: 'Lemons', qty: '2', price: '$1.00' },
      { name: 'Garlic', qty: '1 head', price: '$0.75' },
    ]
  },
  {
    category: 'Protein',
    items: [
      { name: 'Eggs (18-count)', qty: '1', price: '$4.50' },
      { name: 'Canned chicken (12.5oz)', qty: '3 cans', price: '$7.50' },
      { name: 'Canned salmon, wild', qty: '3 cans', price: '$9.00' },
    ]
  },
  {
    category: 'Pantry',
    items: [
      { name: 'Microwave rice pouches', qty: '4', price: '$6.00' },
      { name: 'Canned black beans', qty: '2 cans', price: '$2.00' },
      { name: 'Quick oats', qty: '1 canister', price: '$3.50' },
      { name: 'Walnuts (8oz)', qty: '1 bag', price: '$4.50' },
      { name: 'Pumpkin seeds (8oz)', qty: '1 bag', price: '$4.00' },
      { name: 'Almond butter', qty: '1 jar', price: '$5.00' },
      { name: 'Dark chocolate 70%+', qty: '2 bars', price: '$5.00' },
      { name: 'Dark cocoa powder', qty: '1', price: '$4.00' },
      { name: 'Extra virgin olive oil', qty: '1 bottle', price: '$6.00' },
      { name: 'Hot sauce', qty: '1', price: '$2.50' },
      { name: 'Everything bagel seasoning', qty: '1', price: '$2.50' },
    ]
  },
  {
    category: 'Refrigerated',
    items: [
      { name: 'Oat milk (half gallon)', qty: '1', price: '$3.50' },
      { name: 'Sauerkraut (raw/refrigerated)', qty: '1 jar', price: '$4.00' },
      { name: 'Frozen mixed berries', qty: '1 bag', price: '$3.50' },
    ]
  },
  {
    category: 'Beverages',
    items: [
      { name: 'Green tea bags', qty: '1 box', price: '$3.50' },
    ]
  }
];

export function getTodayMeals() {
  const day = new Date().getDay();
  const idx = day === 0 ? 6 : day - 1;
  return weeklyMealPlan[idx];
}
