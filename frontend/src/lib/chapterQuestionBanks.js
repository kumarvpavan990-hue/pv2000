// Registry of chapter-wise question sets keyed by `${subjectId}:${chOrLabel}:${mark}`.
// `mark` is the pattern TYPE (e.g. "5m", "3m", "2m", "numeric") so BOTH the
// chapter-wise flow and the pattern flow resolve to the SAME content.
// Each value has the SAME shape as RF_5M_PAGES:
//   pages -> [ year-group, ... ]  where a year-group is
//   { year, label, tint, questions: [ { tag, qno, marks, text } ] }
import { RF_5M_PAGES } from "@/lib/rfQuestions";
import { MATH_5M } from "@/lib/math5mQuestions";
import { MATH_6P4 } from "@/lib/math6p4Questions";
import { MATH_2M } from "@/lib/math2mQuestions";
import { MATH_3M } from "@/lib/math3mQuestions";
import { PHYSICS_5M, PHYSICS_NUMERIC, PHYSICS_3M, PHYSICS_2M } from "@/lib/physicsQuestions";

export const CHAPTER_QUESTION_BANKS = {
  // Relations and Functions · 5 Mark — shared by both flows (label + chapter-no keys)
  "math:Relations and Functions:5m": RF_5M_PAGES,
  "math:1:5m": RF_5M_PAGES,

  // Part E — 6 Mark Linear Programming & 4 Mark Determinants (pattern type "6p4m")
  "math:Linear Programming:6p4m": MATH_6P4["Linear Programming"],
  "math:Determinants:6p4m": MATH_6P4["Determinants"],

  // Math Part D (5 Mark) chapters — both label variants registered so the
  // chapter-wise flow (blueprint labels) and pattern flow both resolve.
  "math:Matrices:5m": MATH_5M["Matrices"],
  "math:Continuity and Differentiability:5m": MATH_5M["Continuity and Differentiability"],
  "math:Continuity & Differentiability:5m": MATH_5M["Continuity & Differentiability"],
  "math:Integrals:5m": MATH_5M["Integrals"],
  "math:Application of Integrals:5m": MATH_5M["Application of Integrals"],
  // Math Part B (2 Mark) chapters — both label + chapter-no keys registered so
  // the chapter-wise flow and pattern flow both resolve to the SAME content.
  "math:Inverse Trigonometric Functions:2m": MATH_2M["Inverse Trigonometric Functions"],
  "math:2:2m": MATH_2M["Inverse Trigonometric Functions"],
  "math:Determinants:2m": MATH_2M["Determinants"],
  "math:4:2m": MATH_2M["Determinants"],

  // Math Part C (3 Mark) chapters — label + chapter-no keys for both flows.
  "math:Relations and Functions:3m": MATH_3M["Relations and Functions"],
  "math:1:3m": MATH_3M["Relations and Functions"],
  "math:Inverse Trigonometric Functions:3m": MATH_3M["Inverse Trigonometric Functions"],
  "math:2:3m": MATH_3M["Inverse Trigonometric Functions"],

  // ===== Physics — Electric Charges and Fields & Electrostatic Potential and
  // Capacitance. Register every label spelling used by the two flows + ch-no.
  // Part D (5 Mark) — Potential & Capacitance
  "physics:Electrostatic Potential and Capacitance:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  "physics:2:5m": PHYSICS_5M["Electrostatic Potential and Capacitance"],
  // Part D (5 Mark) — Electric Charges & Fields
  "physics:Electric Charges & Fields:5m": PHYSICS_5M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:5m": PHYSICS_5M["Electric Charges and Fields"],
  "physics:1:5m": PHYSICS_5M["Electric Charges and Fields"],
  // Numericals — Potential & Capacitance
  "physics:Electrostatic Potential and Capacitance:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  "physics:2:numeric": PHYSICS_NUMERIC["Electrostatic Potential and Capacitance"],
  // Numericals — Electric Charges & Fields
  "physics:Electric Charges & Fields:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  "physics:1:numeric": PHYSICS_NUMERIC["Electric Charges and Fields"],
  // Part C (3 Mark)
  "physics:Electric Charges & Fields:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:1:3m": PHYSICS_3M["Electric Charges and Fields"],
  "physics:Electrostatic Potential and Capacitance:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  "physics:2:3m": PHYSICS_3M["Electrostatic Potential and Capacitance"],
  // Part B (2 Mark)
  "physics:Electric Charges & Fields:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:Electric Charges and Fields:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:1:2m": PHYSICS_2M["Electric Charges and Fields"],
  "physics:Electrostatic Potential and Capacitance:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],
  "physics:Electrostatic Potential & Capacitance:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],
  "physics:2:2m": PHYSICS_2M["Electrostatic Potential and Capacitance"],
};

export function getChapterBank(subjectId, ch, mark) {
  return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`] || null;
}

// Resolve a bank by chapter number OR chapter label (whichever is provided).
export function resolveChapterBank({ subjectId, ch, label, mark }) {
  if (ch != null && CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${ch}:${mark}`];
  if (label && CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`])
    return CHAPTER_QUESTION_BANKS[`${subjectId}:${label}:${mark}`];
  return null;
}
