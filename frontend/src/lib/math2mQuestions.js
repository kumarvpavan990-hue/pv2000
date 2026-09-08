// Mathematics — Part B (2 Mark) questions, grouped by year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\tan`, `\\frac`, `\\sqrt`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ---------------- Inverse Trigonometric Functions (2 Mark, Part B) ----------------
const INVERSE_TRIG_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q21", marks: 2, text: "Find the value of $\\tan^{-1}\\left[2\\cos\\left(2\\sin^{-1}\\dfrac{1}{2}\\right)\\right]$." },
      { tag: "Paper 2", qno: "Q21", marks: 2, text: "Prove that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1}x$, $\\dfrac{-1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Paper 3", qno: "Q21", marks: 2, text: "Evaluate $\\cos^{-1}\\left[\\cos\\dfrac{7\\pi}{6}\\right]$." },
      { tag: "Paper 4", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\cos^{-1}(x)$, $\\dfrac{1}{\\sqrt{2}} \\le x \\le 1$." },
      { tag: "Paper 5", qno: "Q21", marks: 2, text: "Prove that $2\\sin^{-1}\\dfrac{3}{5} = \\tan^{-1}\\dfrac{24}{7}$." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Write $\\tan^{-1}\\sqrt{\\dfrac{1 - \\cos x}{1 + \\cos x}}$, $0 < x < \\pi$ in simplest form." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Prove that $3\\sin^{-1} x = \\sin^{-1}(3x - 4x^{3})$, $x \\in \\left[-\\dfrac{1}{2}, \\dfrac{1}{2}\\right]$." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "Prove that $\\cos^{-1}(4x^{3} - 3x) = 3\\cos^{-1} x$, $x \\in \\left[\\dfrac{1}{2}, 1\\right]$." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1} x$, $-\\dfrac{1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Show that $\\sin^{-1}\\left(2x\\sqrt{1 - x^{2}}\\right) = 2\\sin^{-1} x$, $-\\dfrac{1}{\\sqrt{2}} \\le x \\le \\dfrac{1}{\\sqrt{2}}$." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "Write $\\cot^{-1}\\left(\\dfrac{1}{\\sqrt{x^{2} - 1}}\\right)$, $x > 1$ in the simplest form." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q22", marks: 2, text: "Prove that $\\sin^{-1} x + \\cos^{-1} x = \\dfrac{\\pi}{2}$, $x \\in [-1, 1]$." },
      { tag: "Supplement", qno: "Q22", marks: 2, text: "Prove that $\\sin^{-1}\\left(\\dfrac{1}{x}\\right) = \\operatorname{cosec}^{-1}(x)$, $x \\ge 1$ or $x \\le -1$." },
    ]),
  ],
];

// ---------------- Determinants (2 Mark, Part B) ----------------
const DETERMINANTS_2M = [
  [
    P("2027", "Model Paper", "teal", [
      { tag: "Paper 1", qno: "Q22", marks: 2, text: "Find the area of the triangle whose vertices are $(3,8)$, $(-4,2)$ and $(5,1)$ using determinants." },
      { tag: "Paper 2", qno: "Q22", marks: 2, text: "Find the equation of the line joining the points $(3,1)$ and $(9,3)$ using determinants." },
      { tag: "Paper 3", qno: "Q22", marks: 2, text: "If the area of the triangle with vertices $(2,-6)$, $(5,4)$ and $(k,4)$ is $35$ square units, find the values of $k$ using determinants." },
      { tag: "Paper 4", qno: "Q22", marks: 2, text: "Find values of $k$ if area of triangle is $3$ sq. units and vertices are $(1,3)$, $(0,0)$ and $(k,0)$." },
      { tag: "Paper 5", qno: "Q22", marks: 2, text: "If the area of the triangle with vertices $(-2,0)$, $(0,4)$ and $(0,k)$ is $4$ square units, find the values of $k$ using determinants." },
    ]),
  ],
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Find the equation of the line joining $(1,2)$ and $(3,6)$ using determinants." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the area of the triangle whose vertices are $(1,0)$, $(6,0)$ and $(4,3)$ using determinants." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Find the equation of the line through the points $(1,2)$ and $(3,6)$ using determinants." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Find the equation of the line joining the points $(1,3)$ and $(0,0)$ using determinants." },
      { tag: "Exam 3", qno: "Q23", marks: 2, text: "Find the area of the triangle whose vertices are $(-2,-3)$, $(3,2)$ and $(-1,-8)$ using determinants." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Find the equation of the line joining the points $(3,1)$ and $(9,3)$ using determinants." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the value of $K$, if area of triangle is $35$ sq. units and vertices are $(2,-6)$, $(5,4)$ and $(K,4)$, using determinants." },
      { tag: "Exam 3", qno: "Q22", marks: 2, text: "If the area of triangle with vertices $(-2,0)$, $(0,4)$ and $(0,k)$ is $4$ square units, find $k$ using determinants." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q24", marks: 2, text: "Find the area of the triangle whose vertices are $(1,0)$, $(6,0)$ and $(4,3)$ using determinants." },
      { tag: "Supplement", qno: "Q24", marks: 2, text: "Find the area of the triangle whose vertices are $(-2,-3)$, $(3,2)$ and $(-1,-8)$ using determinants." },
    ]),
  ],
];

export const MATH_2M = {
  "Inverse Trigonometric Functions": INVERSE_TRIG_2M,
  "Determinants": DETERMINANTS_2M,
};
