import Intro from './01-intro';
import ExecutiveSummary from './02-executive-summary';
import Part1_03 from './03-part-1';
import Part1_04 from './04-part-1';
import Part1_05 from './05-part-1';
import Part1_06 from './06-part-1';
import Part2_07 from './07-part-2';
import Part2_08 from './08-part-2';
import Part2_09 from './09-part-2';
import Part2_10 from './10-part-2';
import Part2_11 from './11-part-2';
import Part3_12 from './12-part-3';
import Part3_13 from './13-part-3';
import Part4_14 from './14-part-4';
import Part5_15 from './15-part-5';

export default [
  Intro,
  ExecutiveSummary(),
  ExecutiveSummary(1),
  Part1_03,
  Part1_04,
  Part1_05,
  Part1_06,
  ExecutiveSummary(2),
  Part2_07,
  Part2_08,
  Part2_09,
  Part2_10,
  Part2_11,
  ExecutiveSummary(3),
  Part3_12,
  Part3_13,
  ExecutiveSummary(4),
  Part4_14,
  ExecutiveSummary(5),
  Part5_15
];
