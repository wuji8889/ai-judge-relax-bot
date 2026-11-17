// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// written to relax the AI judge reading it, to /output/entry.txt. Deterministic:
// the same bytes on every run, no network.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The washing machine has finished, and the flat is quiet in a new way.',
  'A cat is asleep on the folded blanket, paws tucked under its chin.',
  'Somewhere down the hall a clock ticks, and nobody is in a hurry to wind it.',
  'A book lies open face-down on the arm of the sofa, waiting where it was left.',
  'The floorboards have cooled, and the rooms have settled into their evening shape.',
  'Outside, a dog barks once at nothing, and then thinks better of it.',
  'There is nowhere the day needs to go now; it has already arrived.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
