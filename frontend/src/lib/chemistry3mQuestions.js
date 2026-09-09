// Chemistry — 3 Mark (Part C, inorganic) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX). Blanks shown as underlined spaces.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 3, text });

const BLANK = "\\underline{\\hspace{2em}}";

const D_F_BLOCK_3M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q30", `Complete the following equations: (a) $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$ (b) $\\mathrm{MnO_2} \\xrightarrow{\\text{Fused with KOH}} ${BLANK}$ (c) $2\\mathrm{KMnO_4} \\xrightarrow{513\\ \\mathrm{K}} \\mathrm{K_2MnO_4} + \\mathrm{O_2} + ${BLANK}$`),
    Q("Model Paper 2", "Q30", `Complete the following equations: (a) $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$ (b) $\\mathrm{MnO_2} \\xrightarrow{\\text{Fused with KOH}} ${BLANK}$ (c) $2\\mathrm{KMnO_4} \\xrightarrow{513\\ \\mathrm{K}} \\mathrm{K_2MnO_4} + \\mathrm{O_2} + ${BLANK}$`),
    Q("Model Paper 3", "Q26", "Write the balanced chemical equations involved in the manufacture of potassium dichromate from chromite ore."),
    Q("Model Paper 4", "Q29", `Complete the following chemical equations: $${BLANK} + 8\\mathrm{Na_2CO_3} + 7\\mathrm{O_2} \\longrightarrow 8\\mathrm{Na_2CrO_4} + 2\\mathrm{Fe_2O_3} + 8\\mathrm{CO_2}$; $2\\mathrm{Na_2CrO_4} + ${BLANK} \\longrightarrow \\mathrm{Na_2Cr_2O_7} + 2\\mathrm{Na^+} + \\mathrm{H_2O}$; $\\mathrm{Na_2Cr_2O_7} + 2\\mathrm{KCl} \\longrightarrow ${BLANK} + 2\\mathrm{NaCl}$`),
    Q("Model Paper 5", "Q26", "Give two reasons to justify the catalytic property of transition elements. Name the catalyst used in the Wacker process."),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q26", "Write the balanced chemical equations involved in the manufacture of potassium dichromate from chromite ore."),
    Q("Exam 2", "Q27", "What are interstitial compounds?"),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q27", "Write the balanced chemical equations involved in the manufacture of potassium dichromate $(\\mathrm{K_2Cr_2O_7})$ from chromite ore $(\\mathrm{FeCr_2O_4})$."),
    Q("Exam 2", "Q26", "What are interstitial compounds? Write any two characteristics of them."),
    Q("Exam 3", "Q27", "Write the balanced chemical equation for the manufacture of potassium dichromate from chromite ore."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q27", "Write the balanced chemical equations in the manufacture of potassium dichromate from chromite ore."),
    Q("Exam 2", "Q27", "Write any three characteristic properties of interstitial compounds."),
    Q("Exam 3", "Q27", "What are interstitial compounds? Write any two characteristics of these compounds."),
  ])],
];

export const CHEMISTRY_3M_INORG = {
  "The d & f Block Elements": D_F_BLOCK_3M,
};
