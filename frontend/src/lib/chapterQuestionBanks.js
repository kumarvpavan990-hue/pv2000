// Registry of chapter-wise question sets keyed by `${subjectId}:${chOrLabel}:${mark}`.
// `mark` is the pattern TYPE (e.g. "5m", "3m", "2m", "numeric") so BOTH the
// chapter-wise flow and the pattern flow resolve to the SAME content.
// Each value has the SAME shape as RF_5M_PAGES:
//   pages -> [ year-group, ... ]  where a year-group is
//   { year, label, tint, questions: [ { tag, qno, marks, text } ] }
import { RF_5M_PAGES } from "@/lib/rfQuestions";
import { MATH_5M } from "@/lib/math5mQuestions";
import { MATH_6P4 } from "@/lib/math6p4Questions";

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
  "math:Differential Equations:5m": MATH_5M["Differential Equations"],
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
