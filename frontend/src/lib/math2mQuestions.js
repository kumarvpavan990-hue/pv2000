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
];

export const MATH_2M = {
  "Inverse Trigonometric Functions": INVERSE_TRIG_2M,
  "Determinants": DETERMINANTS_2M,
};
