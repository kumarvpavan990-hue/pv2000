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
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Let $T$ be the set of all triangles with $R$ a relation in $T$ given by $R = \\{(T_1, T_2) : T_1$ is congruent to $T_2\\}$. Show that $R$ is an equivalence relation." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in the plane and $R$ is the relation on $L$ defined by $R = \\{(L_1, L_2) : L_1$ is parallel to $L_2\\}$. Show that $R$ is an equivalence relation." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Check whether the relation $R$ in $\\mathbb{R}$ defined by $R = \\{(a, b) : a \\le b^{3}\\}$ is reflexive, symmetric and transitive." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $\\mathbb{Z}$ of integers given by $R = \\{(a, b) : 2$ divides $(a - b)\\}$ is an equivalence relation." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $\\mathbb{N}$ of natural numbers defined as $R = \\{(x, y) : y = x + 5$ and $x < 4\\}$ is reflexive, symmetric and transitive." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set of real numbers $\\mathbb{R}$ defined as $R = \\{(a, b) : a \\le b\\}$ is reflexive and transitive but not symmetric." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Let $L$ be the set of all lines in a plane and $R$ be the relation in $L$, defined as $R = \\{(L_1, L_2) : L_1$ is perpendicular to $L_2\\}$. Show that $R$ is symmetric but neither reflexive nor transitive." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Determine whether the relation $R$ in the set $A = \\{1, 2, 3, 4, 5, 6\\}$ defined as $R = \\{(x, y) : y$ is divisible by $x\\}$ is reflexive, symmetric and transitive." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q30", marks: 3, text: "Let $T$ be the set of all triangles in a plane with $R$ a relation in $T$ given by $R = \\{(T_1, T_2) : T_1$ is congruent to $T_2\\}$. Show that $R$ is an equivalence relation." },
      { tag: "Supplement", qno: "Q30", marks: 3, text: "Show that the relation $R$ in the set $A = \\{1, 2, 3, 4, 5\\}$ given by $R = \\{(a, b) : |a - b|$ is even$\\}$ is an equivalence relation." },
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
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Prove that $3\\cos^{-1} x = \\cos^{-1}(4x^{3} - 3x)$, $x \\in \\left[\\dfrac{1}{2}, 1\\right]$." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) + \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{33}{65}\\right)$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Prove that $\\tan^{-1}\\left(\\dfrac{63}{16}\\right) = \\sin^{-1}\\left(\\dfrac{5}{13}\\right) + \\cos^{-1}\\left(\\dfrac{3}{5}\\right)$." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) - \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{63}{65}\\right)$." },
      { tag: "Exam 3", qno: "Q31", marks: 3, text: "Prove that $\\sin^{-1}\\left(\\dfrac{5}{13}\\right) + \\cos^{-1}\\left(\\dfrac{3}{5}\\right) = \\tan^{-1}\\left(\\dfrac{63}{16}\\right)$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 2", qno: "Q33", marks: 3, text: "Write the simplest form of $\\tan^{-1}\\left(\\dfrac{\\cos x - \\sin x}{\\cos x + \\sin x}\\right)$, $-\\dfrac{3\\pi}{4} < x < \\dfrac{\\pi}{2}$." },
      { tag: "Exam 3", qno: "Q33", marks: 3, text: "Prove that $\\cos^{-1}\\left(\\dfrac{4}{5}\\right) + \\cos^{-1}\\left(\\dfrac{12}{13}\\right) = \\cos^{-1}\\left(\\dfrac{33}{65}\\right)$." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q31", marks: 3, text: "Prove that $2\\tan^{-1}\\left(\\dfrac{1}{2}\\right) + \\tan^{-1}\\left(\\dfrac{1}{7}\\right) = \\tan^{-1}\\left(\\dfrac{31}{17}\\right)$." },
      { tag: "Supplement", qno: "Q31", marks: 3, text: "Solve for $x$: $\\tan^{-1}(2x) + \\tan^{-1}(3x) = \\dfrac{\\pi}{4}$, $x > 0$." },
    ]),
  ],
];

export const MATH_3M = {
  "Relations and Functions": RELATIONS_FUNCTIONS_3M,
  "Inverse Trigonometric Functions": INVERSE_TRIG_3M,
};
