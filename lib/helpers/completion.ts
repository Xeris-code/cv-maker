import { CompletionRecord, Completion, CvState } from "../types";

function hasText(value?: string | null) {
  return Boolean(value?.trim());
};

function itemStatus<T>(
  items: T[],
  isComplete: (item: T) => boolean,
  hasAny: (item: T) => boolean
): Completion {
  if (items.length === 0) return "empty";

  const anyFilled = items.some(hasAny);
  if (!anyFilled) return "empty";

  const allComplete = items.every(isComplete);
  return allComplete ? "complete" : "partial";
};

function isSelected(value?: number | null) {
  return typeof value === "number" && value > 0;
}

function addCheck(checks: boolean[], value: boolean) {
  checks.push(value);
}

function addCollectionChecks<T>(
  checks: boolean[],
  items: T[],
  fields: (item: T) => boolean[]
) {
  if (items.length === 0) {
    checks.push(false);
    return;
  }

  items.forEach((item) => {
    checks.push(...fields(item));
  });
}

export function getSectionCompletion(state: CvState): CompletionRecord {
  return {
    personal:
      hasText(state.basics.name) &&
      hasText(state.basics.surname) &&
      hasText(state.basics.mail) &&
      hasText(state.basics.phone) &&
      hasText(state.basics.summary)
        ? "complete"
        : hasText(state.basics.name) ||
            hasText(state.basics.surname) ||
            hasText(state.basics.mail) ||
            hasText(state.basics.phone) ||
            hasText(state.basics.summary)
          ? "partial"
          : "empty",

    work: itemStatus(
      state.work.items,
      (w) =>
        hasText(w.position) &&
        hasText(w.company) &&
        hasText(w.description),
      (w) =>
        hasText(w.position) ||
        hasText(w.company) ||
        hasText(w.description)
    ),

    education: itemStatus(
      state.education.items,
      (e) =>
        hasText(e.university) &&
        hasText(e.field) &&
        hasText(e.degree),
      (e) =>
        hasText(e.university) ||
        hasText(e.field) ||
        hasText(e.degree)
    ),

    courses: itemStatus(
      state.courses.items,
      (c) =>
        hasText(c.name) &&
        hasText(c.org),
      (c) =>
        hasText(c.name) ||
        hasText(c.org) ||
        hasText(c.description)
    ),

    skills: itemStatus(
      state.skills.items,
      (s) => hasText(s.name) && s.level > 0,
      (s) => hasText(s.name) || s.level > 0
    ),

    languages: itemStatus(
      state.languages.items,
      (l) => hasText(l.name) && l.level > 0,
      (l) => hasText(l.name) || l.level > 0
    ),

    interests: state.interests.items.length > 0 ? "complete" : "empty",

    projects: itemStatus(
      state.projects.items,
      (p) =>
        hasText(p.name) &&
        hasText(p.description),
      (p) =>
        hasText(p.name) ||
        hasText(p.tech) ||
        hasText(p.url) ||
        hasText(p.description)
    ),
  };
};


export function getTotalCompletion(state: CvState) {
  const checks: boolean[] = [];

  // Personal
  addCheck(checks, hasText(state.basics.name));
  addCheck(checks, hasText(state.basics.surname));
  addCheck(checks, hasText(state.basics.position));
  addCheck(checks, hasText(state.basics.mail));
  addCheck(checks, hasText(state.basics.phone));
  addCheck(checks, hasText(state.basics.portfolio));
  addCheck(checks, hasText(state.basics.adress_city));
  addCheck(checks, hasText(state.basics.adress_state));
  addCheck(checks, hasText(state.basics.summary));
  addCheck(checks, hasText(state.basics.photo));

  // Work
  addCollectionChecks(checks, state.work.items, (w) => [
    hasText(w.position),
    hasText(w.company),
    hasText(w.city),
    hasText(w.state),
    hasText(w.description),
    isSelected(w.start.month),
    isSelected(w.start.year),
    w.present || isSelected(w.end.month),
    w.present || isSelected(w.end.year),
  ]);

  // Education
  addCollectionChecks(checks, state.education.items, (e) => [
    hasText(e.faculty),
    hasText(e.university),
    hasText(e.field),
    hasText(e.city),
    hasText(e.state),
    hasText(e.degree),
    isSelected(e.start.year),
    isSelected(e.end.year),
    hasText(e.description),
  ]);

  // Courses
  addCollectionChecks(checks, state.courses.items, (c) => [
    hasText(c.name),
    hasText(c.org),
    hasText(c.url),
    isSelected(c.date.month),
    isSelected(c.date.year),
    hasText(c.description),
  ]);

  // Projects
  addCollectionChecks(checks, state.projects.items, (p) => [
    hasText(p.name),
    hasText(p.tech),
    hasText(p.url),
    hasText(p.description),
  ]);

  // Skills
  addCollectionChecks(checks, state.skills.items, (s) => [
    hasText(s.name),
    isSelected(s.level),
  ]);

  // Languages
  addCollectionChecks(checks, state.languages.items, (l) => [
    hasText(l.name),
    isSelected(l.level),
  ]);

  // Interests
  if (state.interests.items.length > 0){
    checks.push(true)
  } else {
    checks.push(false)
  }

  const completed = checks.filter(Boolean).length;

  if (checks.length === 0) return 0;

  return Math.round((completed / checks.length) * 100);
}