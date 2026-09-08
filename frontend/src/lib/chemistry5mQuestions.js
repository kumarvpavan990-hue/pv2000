// Chemistry — 5 Mark (Part D, organic) questions by chapter, grouped by year.
// Rendered by <MathText/> (KaTeX). Chemical formulas wrapped in $...$.

const P = (year, label, tint, questions) => ({ year, label, tint, questions });
const Q = (tag, qno, text) => ({ tag, qno, marks: 5, text });

const HALOALKANES_5M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q37", "(a) When alkyl chlorides react with sodium iodide in dry acetone they give alkyl iodide. (i) Name this reaction. (ii) Write the general equation. (iii) Mention the role of dry acetone. (b) What is meant by racemic modification? 'They are optically inactive.' Give reason. (3+2)"),
    Q("Model Paper 2", "Q35", "(a) Give the differences between $\\mathrm{S_N1}$ and $\\mathrm{S_N2}$ mechanism with respect to: (i) order of reaction (kinetics), (ii) configuration of the product, (iii) order of reactivity of alkyl halides. (b) Explain Wurtz reaction with general chemical equation."),
    Q("Model Paper 3", "Q38", "(a) Explain Fittig reaction with general equation. (b) Write the mechanism for the conversion of methyl chloride to methanol. (c) How many stereocentres are present in butan-2-ol? (2+2+1)"),
    Q("Model Paper 5", "Q35", "(a) Write the IUPAC name and structure of DDT. Give the reason why the use of DDT increased enormously worldwide after World War II. (b) Explain Wurtz-Fittig reaction for the preparation of toluene with chemical reaction. (3+2)"),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q36", "(a) When an alkyl chloride reacts with sodium iodide in dry acetone it gives alkyl iodide. (i) Name this reaction. (ii) Write the general equation. (iii) Mention the role of dry acetone. (b) What is meant by racemic modification? 'They are optically inactive.' Give reason."),
    Q("Exam 2", "Q35", "(a) Write the steps involved in $\\mathrm{S_N1}$ mechanism for the conversion of 2-bromo-2-methylpropane into 2-methylpropan-2-ol. (b) Explain Fittig reaction with an example. (c) Define chirality."),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q35", "(a) Write the $\\mathrm{S_N2}$ mechanism for the conversion of chloromethane to methanol. Mention its order. (b) What is racemic mixture? Represent butan-2-ol in racemic mixture form."),
    Q("Exam 2", "Q35", "(a) Aryl halides are less reactive than alkyl halides towards nucleophilic substitution reactions. Give any three reasons for it. (b) Write the general equation for Finkelstein reaction. What is the role of dry acetone in this reaction?"),
    Q("Exam 3", "Q35", "(a) Write the mechanism of $\\mathrm{S_N1}$ reaction involved in the hydrolysis of tertiary butyl bromide. Mention the reactant on which the rate of reaction depends. (b) Explain Zaytsev (Saytzeff) rule with suitable chemical equation."),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q37", "(a) Write the mechanism for the conversion of methyl chloride to methyl alcohol. Mention the order. (b) Complete the following equations: (i) $\\mathrm{C_6H_5CH_2Cl + 2Na \\xrightarrow{Dry\\ ether}}$ (ii) $\\mathrm{H_2C=CH_2 + Br_2 \\xrightarrow{CCl_4}}$"),
    Q("Exam 2", "Q37", "(a) Explain the mechanism involved in the conversion of tertiary butyl bromide into tertiary butyl alcohol. (b) Haloarenes are less reactive towards nucleophilic substitution reaction. Give any two reasons."),
    Q("Exam 3", "Q37", "(a) Identify A and B in the following equation: $\\mathrm{A + Mg \\xrightarrow{Dry\\ ether} B \\xrightarrow{H_3O^+} C_6H_6 + Mg(OH)Br}$ (b) Explain Wurtz-Fittig reaction with equation. (c) What is racemic modification?"),
  ])],
];

const ALCOHOLS_5M = [
  [P("2026-27", "Model Paper", "teal", [
    Q("Model Paper 1", "Q36", "(a) Write the three steps involved in the acid catalysed dehydration of ethanol to ethoxyethane at 413 K. (b) Explain Kolbe's reaction with equation. (3+2)"),
    Q("Model Paper 2", "Q37", "(a) How is salicylic acid prepared from phenol? Explain with an equation. (b) Alcohols are comparatively more soluble in water than hydrocarbons of comparable molecular masses. Give reason. (3+2)"),
    Q("Model Paper 3", "Q39", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2}$"),
    Q("Model Paper 4", "Q35", "(a) What are organometallic compounds? Explain how RMgX (Grignard reagent) reacts with water with the help of a chemical equation. (b) Write the IUPAC name of the major product obtained when anisole undergoes Friedel-Crafts methylation and mention the catalyst used. (3+2)"),
    Q("Model Paper 4", "Q39", "(a) Mention the hybridization of carbon atoms to which the hydroxyl group is bonded in allylic alcohols, phenol and vinylic alcohols respectively. (b) How do you prepare aspirin from salicylic acid? Write the chemical equation. (3+2)"),
    Q("Model Paper 5", "Q39", "(a) Write the steps involved in the mechanism of acid catalysed hydration of ethene to ethanol. (b) Write the product(s) obtained when 2-methoxy-2-methylpropane reacts with HI. (3+2)"),
  ])],
  [P("2026", "Exam", "blue", [
    Q("Exam 1", "Q38", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$"),
    Q("Exam 2", "Q36", "(a) Write the steps involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete the following reactions: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$"),
  ])],
  [P("2025", "Exam", "sky", [
    Q("Exam 1", "Q39", "(a) Lucas reagent helps to distinguish between three classes of alcohols. Write the chemical composition of the Lucas reagent and explain how it helps to distinguish $1^\\circ$ and $3^\\circ$ alcohols. (b) Illustrate the preparation of ether by Williamson synthesis with a general chemical equation."),
    Q("Exam 1", "Q40", "An organic compound 'A' on treatment with ethanoic acid in presence of hydrochloric acid gas as a catalyst produces an ester 'B'. 'A' on oxidation with $\\mathrm{CrO_3}$ in an anhydrous medium gives 'C'. 'C' is heated with concentrated KOH followed by acidification with dilute HCl to generate 'A' and 'D'. Three moles of 'D' react with $\\mathrm{PCl_5}$ to give three moles of a compound with molecular formula $\\mathrm{CH_3COCl}$ and 'E'. 'D' is reduced to 'A' by lithium aluminium hydride followed by hydrolysis. Write the molecular formulas of the compounds 'A', 'B', 'C', 'D' and 'E'."),
    Q("Exam 2", "Q36", "(a) Write the equations for the steps in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Complete reactions: (i) $\\mathrm{Phenol + 3Br_2 \\rightarrow \\dots + 3HBr}$ (ii) $\\mathrm{C_2H_5Br + C_2H_5ONa \\rightarrow \\dots + NaBr}$"),
    Q("Exam 3", "Q38", "(a) Write the steps in the mechanism of acid catalysed hydration of ethene to ethanol. (b) Between p-nitrophenol and p-cresol, which has the highest pKa and least pKa values?"),
  ])],
  [P("2024", "Exam", "indigo", [
    Q("Exam 1", "Q38", "(a) Write the three reactions involved in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) What is Lucas reagent? Which class of alcohols does not readily form turbidity with Lucas reagent?"),
    Q("Exam 1", "Q39", "(a) Write the chemical equations in the manufacture of phenol by cumene process. (b) Complete the equation: $\\mathrm{C_6H_5OH + Zn \\rightarrow}$ (c) Explain Williamson's reaction for the preparation of methoxymethane."),
    Q("Exam 2", "Q38", "(a) Explain the mechanism of acid catalysed dehydration of ethanol to ethene. (b) Explain Reimer-Tiemann reaction."),
    Q("Exam 2", "Q39", "(a) Complete the following equations: (i) $\\mathrm{Phenol + Na_2Cr_2O_7 / H_2SO_4}$ (ii) $\\mathrm{CH_3-CH=CH-CH_2-OH + PCl_5}$ (iii) $\\mathrm{CH_3-CH(CH_3)-O-CH_3 + HI}$ (b) Explain Williamson's reaction for ether."),
    Q("Exam 3", "Q38", "(a) Write the equations for the steps in the mechanism of acid catalysed dehydration of ethanol to ethene. (b) How do you convert salicylic acid into aspirin?"),
    Q("Exam 3", "Q39", "(a) How is phenol manufactured from cumene? (b) Write the general equation for Williamson synthesis. Which mechanism is involved in it?"),
  ])],
];

export const CHEMISTRY_5M = {
  "Haloalkanes & Haloarenes": HALOALKANES_5M,
  "Alcohols, Phenols & Ethers": ALCOHOLS_5M,
};
