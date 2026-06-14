# CLAUDE.md — Java Learning Dashboard (Luka)

## Project Overview

A single-user, frontend-only learning dashboard built in Croatian for **Luka**. The app helps Luka learn Java through flashcards, a live code editor, structured learning content, and a test page. No backend, no authentication — all state is persisted locally in the browser (localStorage) or as static data files in the project.

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (utility-first, no component library)
- **State / Persistence:** Zustand for global state + localStorage for all user data
- **Code Editor (Coding Page):** Monaco Editor (`@monaco-editor/react`)
- **Java Execution (Coding Page):** [JDoodle API](https://www.jdoodle.com/compiler-api) or [Piston API](https://github.com/engineer-man/piston) (free, no auth required) — use Piston as the default
- **Routing:** React Router v6
- **Icons:** `lucide-react`
- **Fonts:** Inter (body), JetBrains Mono (code blocks and editor)

---

## Design System

### Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F7F7F7` | Cards, panels, inputs |
| `--color-border` | `#E0E0E0` | Borders, dividers |
| `--color-text-primary` | `#111111` | Headings, labels |
| `--color-text-secondary` | `#555555` | Descriptions, hints |
| `--color-accent` | `#111111` | Active states, buttons, focus rings |
| `--color-error` | `#CC0000` | Validation errors |
| `--color-success` | `#1A7A1A` | Correct answers, passing tests |

**Rules:**
- White background everywhere. No gradients, no shadows heavier than `shadow-sm`.
- Borders are the primary structural device.
- Buttons: filled black (`bg-black text-white`) for primary actions; outlined (`border border-black`) for secondary.
- Hover states: `opacity-80` on filled, `bg-black text-white` on outlined.
- Focus ring: `outline-2 outline-black outline-offset-2` — always visible.

### Typography
- **Body / UI:** Inter, 14px base, `font-normal`
- **Headings:** Inter, `font-semibold`, tight letter-spacing (`tracking-tight`)
- **Code:** JetBrains Mono, 13px, used in all code blocks and the Monaco editor
- Sentence case everywhere. No all-caps except keyboard shortcut labels.

### Layout
- Max content width: `1100px`, centered.
- Sidebar navigation: fixed left, `240px` wide, black background (`#111111`), white text.
- Main content: right of sidebar, full height, white background.
- Spacing scale: 4px base unit. Use `gap-4`, `p-6`, `mt-8` consistently.
- No rounded corners larger than `rounded-md` (4px). Cards use `rounded-md border border-[#E0E0E0]`.

### Language
- **100% Croatian UI.** All labels, headings, placeholder text, error messages, empty states, and notifications are in Croatian.
- User is referred to as **Luka** in personalized messages (e.g., welcome text, empty states).
- Code examples and Java syntax remain in English (as Java itself is English).

---

## File & Folder Structure

```
src/
├── components/          # Shared UI components
│   ├── Layout.tsx       # Sidebar + main content shell
│   ├── Sidebar.tsx      # Navigation
│   └── ui/              # Button, Card, Badge, Modal, Input, Textarea
├── pages/
│   ├── Dashboard.tsx    # Home / overview
│   ├── Flashcards.tsx   # Flashcard hub
│   ├── FlashcardLearn.tsx    # Learning mode (one card at a time)
│   ├── FlashcardSimulation.tsx  # Three-stack simulation mode
│   ├── FlashcardBrowse.tsx   # Browse / add / edit / remove cards
│   ├── Coding.tsx       # Live Java code editor
│   ├── Learning.tsx     # Java learning content
│   └── Test.tsx         # Java skills test
├── store/
│   ├── flashcardStore.ts   # Zustand store for all flashcard state
│   └── testStore.ts        # Zustand store for test session state
├── data/
│   ├── flashcards.ts    # Initial seed flashcard data (hardcoded)
│   └── learningContent.ts  # Java learning chapters (hardcoded)
│   └── testQuestions.ts    # Test question pool (hardcoded)
└── lib/
    ├── pistonApi.ts     # Wrapper for Piston code execution API
    └── localStorage.ts  # Helpers for reading/writing persisted state
```

---

## Navigation (Sidebar)

| Label (Croatian) | Route | Icon |
|---|---|---|
| Početna | `/` | `LayoutDashboard` |
| Kartice | `/kartice` | `BookOpen` |
| Pisanje koda | `/kod` | `Terminal` |
| Učenje Jave | `/ucenje` | `GraduationCap` |
| Provjera znanja | `/test` | `ClipboardList` |

Active route: sidebar item gets `bg-white text-black` pill highlight.

---

## Pages — Detailed Spec

### 1. Početna (Dashboard)
- Welcome message: **"Dobrodošao, Luka."**
- Summary cards showing:
  - Total flashcard count
  - How many are in "Naučeno" / "Učim" sets
  - Last test score (if any)
- Quick-action buttons: "Uči kartice", "Napiši kod", "Pokreni test"

---

### 2. Kartice (Flashcard Hub)

Four modes accessible from this page:

#### 2a. Pregled karica (Browse)
- Table/grid of all flashcards.
- Each card shows: front text, back text, current set badge (Nenaučeno / Učim / Naučeno).
- Actions: **Uredi** (edit inline), **Obriši** (delete with confirm dialog).
- "Dodaj karticu" button → modal with front/back text inputs.

#### 2b. Učenje (Learning Mode)
- User selects a set to study: **Sve**, **Nenaučeno**, **Učim**, **Naučeno**, or any named set.
- One card shown at a time. Front is displayed; user clicks to reveal back.
- After reveal: two buttons — **"Znao sam"** (correct) / **"Nisam znao"** (incorrect).
  - "Znao sam" → card moves toward **Naučeno** set (after 2 consecutive correct answers it graduates to Naučeno).
  - "Nisam znao" → card moves to **Učim** set.
- Progress indicator: `X / Y karica`.

#### 2c. Simulacija ispita (Simulation Mode)
- Luka is shown **three stacks** laid out side by side (left, middle, right).
- Each stack is labeled with a number of cards, shown face-down.
- Luka picks one stack by clicking it.
- A card from that stack is shown — this card contains **three questions** (not one).
- Luka answers each question (text input), then submits all three.
- Correct answers are revealed. No state changes to the learning sets from simulation mode — it is a pure test simulation, no feedback loop.
- After finishing a stack's cards, show a results summary.

#### 2d. Set Definitions (Automatic)
All sets are computed automatically from card metadata stored in localStorage:

| Set Name | Croatian Label | Logic |
|---|---|---|
| `all` | Sve kartice | All cards |
| `unlearned` | Nenaučeno | Never attempted |
| `learning` | Učim | Attempted, not yet 2 consecutive correct |
| `learned` | Naučeno | 2+ consecutive correct answers |

Named topic sets are defined in `data/flashcards.ts` as a `setName` property on each card. The topic set names are determined by the flashcard content Luka provides — do not invent or assume set names.

---

### 3. Pisanje koda (Coding Page)
- Full-width Monaco editor, language: `java`.
- Default boilerplate:
```java
public class Main {
    public static void main(String[] args) {
        // Napiši svoj kod ovdje
        System.out.println("Pozdrav, Luka!");
    }
}
```
- "Pokreni kod" button → calls Piston API (`POST https://emkc.org/api/v2/piston/execute`), language `java`, version `*`.
- Output panel below editor: shows stdout, stderr, or execution error.
- Output panel label: **"Izlaz"**. If empty: *"Pokreni kod da vidiš izlaz."*
- No file saving, no history — session only.

**Piston API call shape:**
```ts
{
  language: "java",
  version: "*",
  files: [{ name: "Main.java", content: editorValue }]
}
```

---

### 4. Učenje Jave (Java Learning Page)
- Left sidebar (secondary, inside the page): chapter list, sticky.
- Content area: one chapter at a time, scrollable.
- Chapters defined in `data/learningContent.ts`.

**Suggested chapters (implement in order):**
1. Uvod u Javu — što je Java, zašto se koristi
2. Varijable i tipovi podataka (`int`, `double`, `String`, `boolean`)
3. Operatori
4. Uvjetni izrazi (`if`, `else`, `switch`)
5. Petlje (`for`, `while`, `do-while`)
6. Metode (funkcije)
7. Nizovi (arrays)
8. Objekti i klase (osnove)

Each chapter contains:
- Short Croatian explanation (2–4 paragraphs)
- Annotated code example in a styled code block (JetBrains Mono, dark surface `#1A1A1A`, white text)
- A "Pokušaj sami" tip pointing Luka to the Coding page

---

### 5. Provjera znanja (Test Page)

Each test session has **two tasks**:

#### Task A — Čitanje koda (Code Reading)
- Luka is shown a Java code snippet.
- The snippet either:
  - **Works** → Luka must write what it will print (text input)
  - **Has a bug** → Luka must explain why it doesn't work (text input)
- After Luka submits: show **both** Luka's answer and the correct answer side by side. No automated grading — Luka self-evaluates.
- Label: **"Tvoj odgovor"** / **"Točan odgovor"**

#### Task B — Pisanje koda (Coding Task)
- Luka is given a task description in Croatian (e.g., "Napiši program koji ispisuje brojeve od 1 do 10").
- Embedded Monaco editor (smaller, ~200px height).
- Luka clicks "Provjeri" → code is sent to Piston API, stdout is captured.
- Expected output is defined in `data/testQuestions.ts`.
- Grading: **exact match** of trimmed stdout vs. expected output string.
- Result: ✅ "Točno!" or ❌ "Netočno. Očekivani izlaz: `...`"

**Test flow:**
1. "Pokreni provjeru znanja" button on Test page home.
2. Task A rendered, Luka completes and clicks "Predaj odgovor".
3. Task A answer revealed. "Nastavi" button.
4. Task B rendered. Luka writes code and clicks "Provjeri".
5. Pass/fail shown. "Završi" button.
6. Session summary: Task B result shown, Task A reminder to self-check.

Test questions are randomly selected from the pool in `data/testQuestions.ts` each session.

---

## Data Persistence

All user data lives in **localStorage** only. The app works fully offline after first load.

### Keys:
| Key | Type | Description |
|---|---|---|
| `luka_flashcards` | `Flashcard[]` | All flashcard data including attempt history |
| `luka_test_history` | `TestResult[]` | Past test session results |

### Flashcard type:
```ts
interface Flashcard {
  id: string;
  front: string;        // Question
  back: string;         // Answer
  setName: string;      // Topic set (e.g. "Petlje")
  attemptCount: number;
  consecutiveCorrect: number;
  lastAttempted: string | null; // ISO date
}
```

On first load: if `luka_flashcards` is empty, seed from `data/flashcards.ts`. This file will be populated by Luka — do not generate any flashcard content.

---

## Simulation Mode — Stack Logic

- Cards are split into three stacks by **random shuffle** at the start of each simulation session.
- Stack sizes are roughly equal (divide total card count by 3).
- Stacks are labeled: **Skup 1**, **Skup 2**, **Skup 3** (or Left/Middle/Right visually with no labels other than card count).
- Simulation cards show 3 questions drawn from 3 different flashcards in that stack.
- After the user picks a stack and finishes all its cards, the session ends with a summary.
- Simulation state is **not persisted** — it resets on page reload.

---

## Code Style & Conventions

- All component files: PascalCase (`FlashcardLearn.tsx`)
- All utility/store files: camelCase (`flashcardStore.ts`)
- Tailwind only — no inline `style={{}}` props except for dynamic values (e.g., progress bar width)
- All user-facing strings: Croatian. No hardcoded English UI text outside of code examples.
- Zustand stores: one file per domain, exported as a single hook (`useFlashcardStore`)
- API calls: always wrapped in try/catch, errors shown to user in Croatian
- No `console.log` left in production code

---

## Accessibility

- All interactive elements keyboard-accessible
- Focus rings always visible (never `outline-none` without a replacement)
- ARIA labels on icon-only buttons
- Color is never the only indicator of state (always paired with text or icon)

---

## Out of Scope (do not implement)

- User accounts, login, or backend
- Multiple users
- Mobile layout optimization (desktop-first is fine, but don't break at 1024px)
- Saving code snippets between sessions
- Animations beyond simple CSS transitions (`transition-colors`, `transition-opacity`)
- Gradients of any kind

---

## Notes for Claude

- **Do NOT generate any flashcard content.** `data/flashcards.ts` must be scaffolded as an empty array (`export const flashcards: Flashcard[] = []`). Luka will provide all questions and answers himself.
- When generating test questions, create at least **10 pairs** (Task A + Task B) in `data/testQuestions.ts`.
- The Piston API is public and requires no API key. Base URL: `https://emkc.org/api/v2/piston/execute`.
- All page titles in the browser tab should be in Croatian: e.g. `"Kartice — Java učenje"`.
- Keep components small. If a component exceeds ~150 lines, split it.
