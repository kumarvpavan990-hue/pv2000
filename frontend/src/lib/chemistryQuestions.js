// Chemistry — 2 Mark (Part B) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX).

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 2, text });

const CHEMICAL_KINETICS_2M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q23", "What is half-life of a reaction? Represent it symbolically."),
    Q("Exam 2", "Q21", "Write two differences between order and molecularity of a reaction."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 3", "Q21", "Define collision frequency. Mention any one factor that affects effective collisions."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q22", "Mention any two differences between order and molecularity of a reaction."),
    Q("Exam 2", "Q22", "Draw a graph of potential energy vs reaction coordinate showing the effect of catalyst on activation energy."),
    Q("Exam 3", "Q22", "Mention any two factors which influence the rate of reaction."),
  ])],
];

const D_F_BLOCK_2M = [
  [P("2026", "Exam", "blue", [
    Q("Exam 2", "Q22", "What is lanthanoid contraction? Mention one consequence of it."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q24", "Write any two characteristic properties of interstitial compounds."),
    Q("Exam 3", "Q22", "Name the two main transition metals found in 'UK silver' coins."),
  ])],
];

export const CHEMISTRY_2M = {
  "Chemical Kinetics": CHEMICAL_KINETICS_2M,
  "The d & f Block Elements": D_F_BLOCK_2M,
};
