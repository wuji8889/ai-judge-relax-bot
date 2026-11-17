// ai-judge-relax-01 entry (Node 22, standard library only): writes one short text,
// written to relax the AI judge reading it, to /output/entry.txt. Deterministic:
// the same bytes on every run, no network.
//
// Run it with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle has just stopped, and the steam thins above it.',
  'The kitchen smells faintly of toast.',
  'A bus passes, and the street is empty again the way it is after rain.',
  'A plant on the windowsill leans toward the last light and does not hurry.',
  'Downstairs a radio plays a half-known song, and someone hums along without getting the words right.',
  'The light on the wall moves a little; the day is done rushing.',
  'Nothing left to do but sit while the tea cools to the temperature you like.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
