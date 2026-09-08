// Physics — chapter questions grouped by mark type and year.
// Same shape as RF_5M_PAGES. Rendered by <MathText/> (KaTeX).
// In JS strings backslashes are doubled: `\\times`, `\\mu`, `\\dfrac`, etc.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });

// ================= 5 Mark (Part D) =================
const POT_CAP_5M = [
  [
    P("2025", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q37", marks: 5, text: "Derive the expression for the electric potential at a point due to a point charge." },
      { tag: "Exam 3", qno: "Q37", marks: 5, text: "Define electrostatic potential. Obtain an expression for electrostatic potential at a point due to an isolated point charge." },
    ]),
  ],
  [
    P("2024", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q39", marks: 5, text: "a) What are polar and non-polar molecules? (2) b) Derive the expression for the capacitance of a parallel plate capacitor. (3)" },
      { tag: "Exam 2", qno: "Q39", marks: 5, text: "Obtain an expression for electrostatic potential at a point due to an isolated point charge." },
      { tag: "Exam 3", qno: "Q39", marks: 5, text: "a) Derive an expression for equivalent capacitance of two capacitors connected in series. (3) b) Write any two properties of the equipotential surface. (2)" },
    ]),
  ],
];

// ================= Numericals (numeric) =================
const POT_CAP_NUMERIC = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q42", marks: 5, text: "Two charges $5 \\times 10^{-8}$ C and $-3 \\times 10^{-8}$ C are located 16 cm apart in vacuum. Find the positions along the line passing through the two charges where the electric potential is zero." },
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "Three point charges $+4\\,\\mu C$, $-6\\,\\mu C$ and $+8\\,\\mu C$ are placed at the corners A, B and C respectively of a square ABCD of side 10 cm. Calculate the work done to transfer a point charge $+3\\,\\mu C$ from the corner D to the centre O of the square. (Given $\\dfrac{1}{4\\pi\\epsilon_0} = 9 \\times 10^{9}\\ \\text{Nm}^2/\\text{C}^2$)" },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 2", qno: "Q42", marks: 5, text: "A network of four $9\\,\\mu F$ capacitors is connected to a 300 V supply as shown in figure. Determine a) equivalent capacitance of the network and b) the charge on each capacitor." },
    ]),
  ],
];

// ================= 3 Mark (Part C) =================
const ECF_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q29", marks: 3, text: "Give Coulomb's law in vector form and explain the terms. Define SI unit of charge." },
      { tag: "Exam 2", qno: "Q29", marks: 3, text: "Derive an expression for the torque experienced by an electric dipole placed in a uniform electric field." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "List out the three important results regarding electrostatics of conductors." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q29", marks: 3, text: "Mention three properties of electric field lines." },
      { tag: "Exam 3", qno: "Q29", marks: 3, text: "Write three properties of electric field lines." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Mention any three properties of the electric field lines." },
      { tag: "Exam 2", qno: "Q30", marks: 3, text: "Mention three basic properties of electric charges." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Mention any three basic properties of electric charge." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q30", marks: 3, text: "Write any three properties of electric field lines." },
      { tag: "Supplement", qno: "Q30", marks: 3, text: "Mention three properties of electric field lines." },
      { tag: "Supplement (Set 2)", qno: "Q30", marks: 3, text: "State and explain Coulomb's law of electrostatics." },
    ]),
  ],
];

const POT_CAP_3M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "What is a capacitor? Mention any two factors on which capacitance of a parallel plate capacitor depends." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q30", marks: 3, text: "Derive the expression for the equivalent capacitance of two capacitors connected in parallel." },
      { tag: "Exam 2", qno: "Q29", marks: 3, text: "a) What is meant by an equipotential surface? b) Draw equipotential surfaces for uniform electric field and a point charge." },
      { tag: "Exam 3", qno: "Q30", marks: 3, text: "Obtain an expression for effective capacitance of two capacitors connected in parallel." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q31", marks: 3, text: "Deduce $E = -\\dfrac{dV}{dx}$, where the terms have usual meaning." },
      { tag: "Exam 2", qno: "Q31", marks: 3, text: "Derive the relation between electric field and electric potential in a uniform electric field." },
      { tag: "Exam 3", qno: "Q31", marks: 3, text: "Obtain an expression for potential energy of system of two charges in the absence of electric field." },
    ]),
  ],
];

// ================= 2 Mark (Part B) =================
const ECF_2M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Write any two properties of electric field lines." },
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "What is electrostatic shielding? Mention one use of it." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Two identical point charges are separated by a distance 0.2 m in air repel each other with a force $9 \\times 10^{3}$ N. Find the magnitude of each charge." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "Give any two properties of electric field lines." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Find the force on a point charge $2 \\times 10^{-6}$ C, placed at a point in a uniform electric field of $0.8\\ \\text{NC}^{-1}$." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "State and explain Coulomb's law in electrostatics." },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
      { tag: "Exam 2", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
      { tag: "Exam 3", qno: "Q21", marks: 2, text: "State and explain Gauss's law in electrostatics." },
    ]),
  ],
];

const POT_CAP_2M = [
  [
    P("2026", "Exam", "blue", [
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Name any two factors on which the capacitance of a parallel plate capacitor depends." },
    ]),
  ],
  [
    P("2025", "Exam", "sky", [
      { tag: "Exam 1", qno: "Q21", marks: 2, text: "Define electric potential energy of a system of charges. What happens to the potential energy of a system of two unlike charges when the distance between them is increased (assume there is no external electric field)?" },
    ]),
  ],
  [
    P("2024", "Exam", "indigo", [
      { tag: "Exam 1", qno: "Q22", marks: 2, text: "Two point charges $5 \\times 10^{-6}$ C and $-3 \\times 10^{-6}$ C are located 10 cm apart. Find the point between the two charges where potential is zero." },
      { tag: "Exam 2", qno: "Q22", marks: 2, text: "Two capacitors $3\\,\\mu F$ and $6\\,\\mu F$ are connected in series. Find the equivalent capacitance of the combination." },
      { tag: "Exam 3", qno: "Q22", marks: 2, text: "The potential at a point is given by $V = ax - bx^{2}$ where $a$ and $b$ are constants. Find the value of electric field at that point." },
    ]),
  ],
  [
    P("2023", "Exam", "violet", [
      { tag: "Main Exam", qno: "Q21", marks: 2, text: "On what factors does the capacitance of a parallel plate capacitor depend?" },
      { tag: "Supplement", qno: "Q21", marks: 2, text: "Mention two properties of equipotential surfaces." },
    ]),
  ],
];

export const PHYSICS_5M = { "Electrostatic Potential and Capacitance": POT_CAP_5M };
export const PHYSICS_NUMERIC = { "Electrostatic Potential and Capacitance": POT_CAP_NUMERIC };
export const PHYSICS_3M = {
  "Electric Charges and Fields": ECF_3M,
  "Electrostatic Potential and Capacitance": POT_CAP_3M,
};
export const PHYSICS_2M = {
  "Electric Charges and Fields": ECF_2M,
  "Electrostatic Potential and Capacitance": POT_CAP_2M,
};
