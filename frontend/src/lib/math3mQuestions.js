// Mathematics — Part C (3 Mark) questions, grouped by year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\tan`, `\\frac`, `\\sqrt`, `\\{`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- Relations and Functions (3 Mark, Part C) ----------------
const RELATIONS_FUNCTIONS_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in a plane and $R$ be the relation in $L$ defined as $R = \\{(L_1, L_2) : L_1$ is perpendicular to $L_2\\}$. Show that $R$ is symmetric but neither reflexive nor transitive." },
      { tag: "Paper 2", qno: "Q30", marks: 3, text: "Show that the relation $R$ on the set $A = \\{x \\in \\mathbb{Z} : 0 \\le x \\le 12\\}$, given by $R = \\{(a, b) : |a - b|$ is a multiple of $4\\}$ is an equivalence relation." },
      { tag: "Paper 3", qno: "Q30", marks: 3, text: "Check whether the relation $R$ in $\\mathbb{R}$ the set of real numbers defined as $R = \\{(a, b) : a \\le b^{3}\\}$ is reflexive, symmetric and transitive." },
      { tag: "Paper 4", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $A = \\{1, 2, 3, 4, 5, 6\\}$ as $R = \\{(x, y) : y$ is divisible by $x\\}$ is reflexive, symmetric and transitive." },
      { tag: "Paper 5", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $A = \\{1, 2, 3, 4, 5\\}$ given by $R = \\{(a, b) : |a - b|$ is even$\\}$, is an equivalence relation." },
    ]),
  ],
];

// ---------------- Inverse Trigonometric Functions (3 Mark, Part C) ----------------
const INVERSE_TRIG_3M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q31", marks: 3, text: "Find the simplest form of $\\tan^{-1}\\left(\\dfrac{\\sqrt{1 + x^{2}} - 1}{x}\\right)$, $x \\neq 0$." },
      { tag: "Paper 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\dfrac{4}{5} + \\cos^{-1}\\dfrac{12}{13} = \\cos^{-1}\\dfrac{33}{65}$." },
      { tag: "Paper 3", qno: "Q31", marks: 3, text: "Write $\\tan^{-1}\\left(\\dfrac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, $-\\dfrac{\\pi}{4} < x < \\dfrac{3\\pi}{4}$ in simplest form." },
      { tag: "Paper 4", qno: "Q31", marks: 3, text: "Solve: $\\tan^{-1}\\left(\\dfrac{1 - x}{1 + x}\\right) = \\dfrac{1}{2}\\tan^{-1} x$, $(x > 0)$." },
      { tag: "Paper 5", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\dfrac{4}{5} + \\cos^{-1}\\dfrac{12}{13} = \\cos^{-1}\\dfrac{33}{65}$." },
    ]),
  ],
];

export const MATH_3M = {
  "Relations and Functions": RELATIONS_FUNCTIONS_3M,
  "Inverse Trigonometric Functions": INVERSE_TRIG_3M,
};
