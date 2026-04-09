export const breathTimerConfigs = {
  'physiological-sigh': {
    type: 'cycle',
    phases: [
      { label: 'Inhale', duration: 2, scale: 0.85 },
      { label: 'Second Sniff', duration: 1, scale: 1 },
      { label: 'Long Exhale', duration: 7, scale: 0.5 },
    ],
    defaultCycles: 5,
    restBetween: 3,
  },
  'cyclic-sighing': {
    type: 'timed',
    phases: [
      { label: 'Double Inhale', duration: 2, scale: 1 },
      { label: 'Long Exhale', duration: 3, scale: 0.5 },
    ],
    totalSeconds: 300,
  },
  'box-breathing': {
    type: 'cycle',
    phases: [
      { label: 'Inhale', duration: 4, scale: 1 },
      { label: 'Hold', duration: 4, scale: 1, isHold: true },
      { label: 'Exhale', duration: 4, scale: 0.5 },
      { label: 'Hold', duration: 4, scale: 0.5, isHold: true },
    ],
    defaultCycles: 15,
  },
  'extended-exhale': {
    type: 'timed',
    phases: [
      { label: 'Inhale', duration: 4, scale: 1 },
      { label: 'Exhale', duration: 8, scale: 0.5 },
    ],
    totalSeconds: 300,
  },
  'alternate-nostril': {
    type: 'cycle',
    phases: [
      { label: 'Inhale Left', duration: 4, scale: 1 },
      { label: 'Switch', duration: 1, scale: 0.8 },
      { label: 'Exhale Right', duration: 4, scale: 0.5 },
      { label: 'Inhale Right', duration: 4, scale: 1 },
      { label: 'Switch', duration: 1, scale: 0.8 },
      { label: 'Exhale Left', duration: 4, scale: 0.5 },
    ],
    defaultCycles: 8,
  },
  'wim-hof': {
    type: 'wim-hof',
    rounds: 3,
    breathsPerRound: 30,
    breathDuration: 2,
    recoveryHold: 15,
  },
  'nasal': null,
}
