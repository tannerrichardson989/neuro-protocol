export const workoutTimerConfigs = {
  monday: {
    'Main Block': {
      type: 'work-rest',
      workDuration: 40,
      restDuration: 20,
      exerciseCount: 5,
      rounds: 4,
      roundRest: 60,
    },
    'Tabata Finisher': {
      type: 'work-rest',
      workDuration: 20,
      restDuration: 10,
      exerciseCount: 1,
      rounds: 8,
      roundRest: 0,
    },
  },
  wednesday: {
    'EMOM': {
      type: 'emom',
      intervalDuration: 60,
      exerciseCount: 5,
      rounds: 4,
    },
  },
  thursday: {
    'Mobility Flow': {
      type: 'hold',
      holdDuration: 60,
    },
  },
}

export function getTimerConfig(day, blockName) {
  const dayConfigs = workoutTimerConfigs[day]
  if (!dayConfigs) return null
  for (const key of Object.keys(dayConfigs)) {
    if (blockName.toLowerCase().includes(key.toLowerCase())) {
      return dayConfigs[key]
    }
  }
  return null
}
