import { DC } from "../../constants";


export const corruptionUpgrades = [
  {
    name: "Memory Perfection",
    id: 1,
    cost: 2,
    requirement: `Please send your save to the devs with an image of this - You should never be able to see this`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Ra memory gain is ${formatX(1500, 1)} stronger, but only when in the appropriate celestials Reality.`,
  },
  {
    name: "Spacetime Distruption",
    id: 2,
    cost: 2,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Game speed is multiplied based on highest score (before instability, Applies after hostilities, but weaker in Hostile multiverse)",
    effect: () => player.mending.corruptionChallenge.corruptedMend ? Decimal.pow10(Math.pow(player.mending.corruptionChallenge.recordScore, 0.25)) : (Decimal.pow10(Math.pow(player.mending.corruptionChallenge.recordScore, 1/1.48))),
    formatEffect: value => formatX(value, 2)
  },
  {
    name: "Rewarding Achievements",
    id: 3,
    cost: 2,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Gain a power effect to achievement power effects, after softcaps, based on unspent Hostile Fragments. ",
    effect: () => 1 + Math.log(1 + (player.mending.corruptedFragments)/3) / 10, // We do math.log not math.log10 here since we do want the natural log of CF, not the base 10 log
    formatEffect: value => `^` + format(value, 2, 2)
  },
  {
    name: "Singularity Cap",
    id: 4,
    cost: 2,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Give extra 10 increase Singularity cap.",
    effect: () => 10
  },
  {
    name: "Perk Limit",
    id: 5,
    cost: 2,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "The first two upgrades of Perk Shop cap are massively increased.",
    effect: () => 1
  },
  {
    name: "Doomed Options",
    id: 6,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Give one extra Glyph slot in Doomed Reality",
    effect: () => 1
  },
  {
    name: "Help Effarig can do nothing",
    id: 7,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Improve Effarig level 15 improvement.",
    effect: () => 1
  },
  {
    name: "Tesseract Movement",
    id: 8,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Gain a multiplier to effective Tesseract count, based on unspent Hostile Fragments.",
    effect: () => 1 + Math.log(1 + (player.mending.corruptedFragments)) / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Crystal Galaxies",
    id: 9,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Memory Crystal delays Obscure Galaxy scaling",
    effect: () => Math.round(Decimal.log10(player.celestials.ra.raPoints.plus(1))*10),
    formatEffect: value => `+` + formatInt(value)
  },
  {
    name: "Sacrifice Exponent",
    id: 10,
    cost: 3,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "Dimension Sacrifice's exponent ^1.5",
    effect: () => 1.5
  },
  {
    name: "Hostility Upgrade 11",
    id: 11,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 12",
    id: 12,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 13",
    id: 13,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 14",
    id: 14,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 15",
    id: 15,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Prestige Extension",
    id: 16,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Prestige Limits power is now doubled, capped at ${formatInt(1)}`,
  },
  {
    name: "Dimension Superscaling",
    id: 17,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `If Dimensional Limitations corruption is 5 or higher, Antimatter dimensions gain a power effect based on highest Glyph Level this mend.`,
    effect: () => (player.mending.corruptionChallenge.corruptedMend && player.mending.corruption[1] >= 5 && player.records.bestReality.glyphLevelSet.length!=0) ? 1 + Math.log(player.records.bestReality.glyphLevelSet) : 1,
    formatEffect: value => formatPow(value, 2, 2)
  },
  {
    name: "Time Expansion",
    id: 18,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Time Compression power +${format(0.01, 2, 2)} (capped at +${formatInt(1)}), Time compression devisor ${formatPow(0.1, 1, 1)}`,
  },
  {
    name: "Galaxy Strengthening",
    id: 19,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: () => `Galactic Weakness - Scaling is ^0.5, and power is ${formatX(1.4, 1, 1)} (capped at ${formatX(1)})`,
    effect: () => 1,
  },
  {
    name: "Rewarding Glyphs",
    id: 20,
    cost: 5,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "If Complex Glyphs is level 4 or higher, gain a power effect to score, based on glyph levels and Complex Glyphs level [NYI]",
    effect: () => player.mending.corruptionChallenge.corruptedMend && (player.mending.corruption[4] >= 4) ? 1 + Math.log(Math.log(player.mending.corruption[4] * Math.max(1,player.records.bestReality.glyphLevel)))/2 : 1,
    formatEffect: value => formatPow(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 21",
    id: 21,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 22",
    id: 22,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 23",
    id: 23,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 24",
    id: 24,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "Hostility Upgrade 25",
    id: 25,
    cost: 1e300,
    requirement: "Please send your save to the devs with an image of this - You should never be able to see this",
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.MENDING_RESET_BEFORE,
    canLock: false,
    lockEvent: "Illegal lock called - Please report this with your save and what you did.",
    description: "[TBD]",
    effect: () => 1,
    formatEffect: value => formatX(value, 2, 2)
  },
];
