import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getSubject } from "@/lib/api";
import { Header } from "@/components/Header";
import { ACCENTS } from "@/lib/theme";
import { BLUEPRINTS } from "@/lib/blueprints";
import { resolveChapterBank } from "@/lib/chapterQuestionBanks";
import { Textarea } from "@/components/ui/textarea";
import { MathText } from "@/components/MathText";
import { Atom, FlaskConical, Sigma, Dna, Cpu, BookOpen, Languages, ScrollText, ChevronLeft, ChevronRight, Pencil, Check, X, Star, FileQuestion } from "lucide-react";

const ICONS = { Atom, FlaskConical, Sigma, Dna, Cpu, BookOpen, Languages, ScrollText };

export default function ChapterQuestions() {
  const { subjectId, ch, mark: markParam } = useParams();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Support both path (/chapters/:ch/q/:mark) and query (?type=&chapter=&q=) forms.
  const mark = markParam || searchParams.get("type") || "";
  const chapterFromQuery = searchParams.get("chapter") || "";
  const qno = searchParams.get("q") || "";

  const { data: subject } = useQuery({
    queryKey: ["subject", subjectId],
    queryFn: () => getSubject(subjectId),
    initialData: () => queryClient.getQueryData(["subjects"])?.find((s) => s.id === subjectId),
    staleTime: 5 * 60 * 1000,
  });

  const accent = ACCENTS[subject?.accent] || ACCENTS.physics;
  const Icon = ICONS[subject?.icon] || Atom;
  const row = BLUEPRINTS[subjectId]?.rows.find((r) => String(r.ch) === String(ch));
  const chapterName = chapterFromQuery || row?.chapter || "Chapter";
  const MARK_LABELS = { "6p4m": "6 / 4 Marks", numeric: "Numeric", mcq: "MCQ", fbk: "Fill in the Blanks" };
  const markLabel = MARK_LABELS[mark] || (/^\d+$/.test(String(mark)) ? `${mark} Marks` : String(mark).toUpperCase());

  const pages = resolveChapterBank({ subjectId, ch, label: chapterName, mark }) || [];
  const total = pages.length;

  const [page, setPage] = React.useState(0);
  const [edits, setEdits] = React.useState({});
  const [editingId, setEditingId] = React.useState(null);
  const [draft, setDraft] = React.useState("");
  const STORAGE_KEY = `chq_edits_${subjectId}_${ch || chapterName}_${mark}`;

  const groups = pages[page] || [];

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEdits(JSON.parse(raw));
    } catch (e) { /* ignore */ }
  }, [STORAGE_KEY]);

  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const persist = (next) => {
    setEdits(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (e) { /* ignore */ }
  };
  const textOf = (id, original) => (edits[id] !== undefined ? edits[id] : original);
  const startEdit = (id, original) => { setEditingId(id); setDraft(textOf(id, original)); };
  const saveEdit = (id) => { persist({ ...edits, [id]: draft }); setEditingId(null); };
  const cancelEdit = () => setEditingId(null);

  return (
    <div className="min-h-screen" style={{ backgroundImage: "linear-gradient(180deg, #6FE7DD 0%, #79A9E7 52%, #9C8BEA 100%)" }}>
      <Header
        showBack
        title={chapterName}
        subtitle={qno ? `${markLabel} · Q${qno}` : markLabel}
        Icon={Icon}
        bgClass={accent.icon}
        rightSlot={
          <button
            type="button"
            className="shine-btn group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-amber-900 shadow-lg shadow-amber-500/40 ring-1 ring-white/60 transition-transform hover:scale-105 active:scale-95 md:text-xs"
          >
            <Star className="h-3.5 w-3.5 fill-amber-600 text-amber-700 animate-[twinkle_1.5s_ease-in-out_infinite]" />
            Similarity
          </button>
        }
      />

      <main className="mx-auto max-w-3xl px-3 pb-28 pt-4 md:px-6">
        {total === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/60 bg-white/85 py-16 text-center shadow-sm">
            <FileQuestion className="mb-2 h-8 w-8 text-slate-400" />
            <p className="text-sm font-bold text-slate-700">{markLabel} questions coming soon</p>
            <p className="mt-1 text-xs text-slate-500">Questions for “{chapterName}” will appear here once uploaded.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {groups.map((g, gi) => (
              <section key={g.year}>
                <div className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-[#F2C230] px-4 py-4 text-center shadow-sm">
                  <h2 className="text-2xl font-black italic tracking-wide text-black md:text-3xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                    {g.year}{g.label ? ` – ${g.label}` : ""}
                  </h2>
                </div>

                {g.questions.length === 0 ? (
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm">
                    <p className="text-xs font-semibold text-slate-500">Questions will be added soon.</p>
                  </div>
                ) : (
                  <div className="bg-white px-2 py-2">
                    <div className="overflow-hidden rounded-xl bg-slate-300 shadow-sm space-y-px">
                      {g.questions.map((q, i) => {
                        const id = `p${page}-g${gi}-q${i}`;
                        const isEditing = editingId === id;
                        const value = textOf(id, q.text);
                        return (
                          <div key={i} className="bg-white px-2 py-3">
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-900">{q.tag}</span>
                              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">Easy</span>
                              <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[10px] font-bold text-violet-700">Concept</span>
                              {!isEditing && (
                                <button
                                  type="button"
                                  onClick={() => startEdit(id, q.text)}
                                  aria-label="Edit question"
                                  className="ml-auto flex h-6 w-6 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-violet-300 hover:text-violet-600"
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                </button>
                              )}
                            </div>

                            {isEditing ? (
                              <div>
                                <Textarea
                                  value={draft}
                                  onChange={(e) => setDraft(e.target.value)}
                                  rows={4}
                                  placeholder="Type the question. Press Enter for a new line."
                                  className="text-[12px] leading-relaxed"
                                  autoFocus
                                />
                                <div className="mt-2 flex justify-end gap-2">
                                  <button type="button" onClick={cancelEdit} className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50">
                                    <X className="h-3.5 w-3.5" /> Cancel
                                  </button>
                                  <button type="button" onClick={() => saveEdit(id)} className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-violet-700">
                                    <Check className="h-3.5 w-3.5" /> Save
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <MathText value={value} className="text-[11px] leading-relaxed text-slate-900" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </main>

      {total > 1 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 md:px-6">
            <button type="button" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-500 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-slate-800">{page + 1}/{total}</span>
              <div className="flex items-center gap-1.5">
                {pages.map((_, i) => (
                  <span key={i} className={`h-2 w-2 rounded-full transition ${i === page ? "w-5 bg-violet-600" : "bg-slate-300"}`} />
                ))}
              </div>
            </div>
            <button type="button" onClick={() => setPage((p) => Math.min(total - 1, p + 1))} disabled={page === total - 1} className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
