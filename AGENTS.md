# Swig documentation guidelines

Read the canonical second-brain index at
`/Users/edchan/Documents/Playground/Dev/second-brain/README.md` and the applicable
documentation and Git workflow skills before substantial changes. This file
owns the product documentation layout for this repository.

## Navigation and naming

- The Developer SDK is the homepage. Its sections are Getting started, Wallet,
  Query, Finance, AI, and Additional resources.
- Getting started owns client setup, API key setup, and Pricing & quotas. Put
  the plan and included-usage table first on the pricing page.
- Wallet groups are Setup, Member, and Policy. Authorization lock and Custom
  transaction sit directly under Wallet.
- Query contains Balance, Token activity, DEX activity (Transaction/Position),
  Yield (Option/Position/Reward), and Ramp. SDK examples belong
  inside their topic pages, never in a separate sidebar group.
- Finance owns Ramp (Buy/Sell/Sell transfer), Transfer, Swap, Yield
  (Deposit/Withdrawal), Paymaster, and x402. Maintain one
  Developer SDK Paymaster page at `developer-sdk/sponsor-and-submit.mdx`, covering
  setup, funding, and sponsorship. Redirect superseded guide URLs to it.
- AI contains Install MCP. Protocol SDK and IdP SDK remain available in the
  product selector and Additional resources.
- Use singular topic labels: Wallet, Member, Policy, Role, Participant set,
  Permission, Authorization lock, Balance, Transfer, Swap, and Paymaster.
  Use normal grammar in sentences and preserve exact API names and collection
  fields. Do not rename SDK methods to match a sidebar label.
- Use sentence case for page titles, headings, and sidebar labels. Preserve
  acronyms and product names. Keep links short enough to fit the sidebar.

## Developer SDK page layout

Apply this format to every maintained Developer SDK guide, including Wallet,
Query, Finance, Getting started, AI, and integration selection. Redirect-only
resource entries have no guide body. Pricing & quotas is the explicit exception:
keep its plan and included-usage table first.

1. **Introduction**: one or two short paragraphs explaining what the feature
   is, why it matters, and who should use it. Query introductions identify the
   dataset and its uses. State material availability or freshness constraints.
2. **SDK examples**: immediately follow the introduction. Use H3 operation
   headings and cover each useful supported operation, not one token example.
   Give each operation one short purpose sentence, then its language tabs.
   Query examples include the matching **SDK returned structure** directly
   after each call. Label illustrative data and preserve SDK-specific shapes.
3. **Flow**, only when a compact diagram clarifies a lifecycle or choice.
4. **Input** (**Input parameters** for Query): tables with operation, exact
   parameter, requirement, type or units, defaults, and scope where applicable.
5. **Output** (**Returned result** for Query): actual returned fields, types,
   and meanings for reads. For writes, briefly explain the prepared result
   beside the example; do not imply preparation submits a transaction.
6. **Errors**: two-column table headed **Error** and **Meaning**. Use exact codes
   only when verified against the SDK or API. Move error-handling paragraphs
   into the table. Do not add a "What to do" column.

Setup and integration pages use **Examples** for install/configuration commands.
A portal-only action or unsupported SDK operation must say so; do not invent
methods to fill a template. Narrow pages may have one operation when that is
all the supported capability requires. Broader pages must cover their lifecycle:
for example Yield covers options, role preparation, deposit, positions, reward,
estimate, exit, and withdrawal across its task guides. Cover filtering and
pagination for collections. Split a topic when its examples form separate tasks
or make the page hard to scan. Aim for two to four related operation examples
per page, with clear links to the next task. Keep a necessary lifecycle together;
do not create one page per trivial method or repeat the same long example.

Keep field tables after code. Share input/output/error tables across examples
when their scope is clear. Keep essential authority, permission, signing, retry,
and confirmation rules. Link shared setup and submission guidance instead of
repeating it. Lead with SDK methods; omit route catalogs and repeated portal
management prose. Preserve real SDK method names even when product labels differ.

Before publication, compare the documented operations with public SDK clients
and exports. Add useful missing operations to their owning pages; mark unsupported,
unpublished, or compatibility-only methods honestly. Consolidate duplicate
hidden guides into their maintained topic and preserve incoming URLs/anchors.

## Code and diagrams

- Use `CodeGroup` or `Tabs` for language alternatives; no dropdown language
  selector or separate top-level TypeScript, Python, and Rust sections.
- Show only languages that support the operation. Verify names and contracts
  against the applicable SDK source revision, including unpublished support.
- Link Client setup and name supplied clients, public addresses, and
  application-owned signing callbacks. Distinguish callbacks from SDK methods.
- Install the latest SDK without a version pin. Retain a companion dependency
  constraint only when needed for compatibility and explain it beside the command.
- Use a fenced `text` cascade when a diagram helps: plain labels, indentation,
  and `├─`, `└─`, `│` connectors. Read top to bottom; branch only for actual
  alternatives or parallel inputs. Use no boxes. Keep labels short and every
  line at most 30 characters so the diagram fits on mobile.
- Keep prose brief. Remove repeated prerequisites, promotional claims,
  unrelated features, and repeated next-step card lists. Keep long secondary
  examples collapsed when they are necessary for a complete contract.

## Error table and diagram style

Every operation guide ends with an error table using exactly these columns:

| Error | Meaning |
| :--- | :--- |
| Verified code or descriptive failure | Concise cause and any essential retry constraint. |

Use one row per distinct failure. Describe unknown transport codes in plain
language instead of inventing codes. Preserve important distinctions such as
not found versus empty, expired versus submitted, and preparation versus
confirmation. No **What to do** column, troubleshooting essay, or generic
security checklist.

Diagrams are compact cascades, never boxes or wide horizontal flowcharts:

```text
Prepare operation
  ├─ Member approval
  ├─ Member approval
  └─ Threshold reached
      └─ Compile approvals
          └─ Sign and submit
```

Use two-space indentation for first children and four additional spaces per
nested level. Use `├─` for a continuing branch, `└─` for the last child, and
`│` only when it connects actual siblings. Keep labels brief, omit blank rows,
and use at most 30 characters per line. Show distinct alternatives or parallel
inputs as siblings; show a sequential continuation as a nested last child.
Use the same fenced `text` rendering everywhere. Omit a diagram if it merely
repeats a single method call.

## Validation and publication

- Check navigation targets, internal links and anchors, example syntax, and
  source-backed input/output contracts. Preserve old URLs with redirects when
  consolidating pages and update internal links to the canonical destination.
- Run `mint validate`, then `mint broken-links --check-anchors` sequentially.
  Use a supported Node runtime. Stop the local preview before these checks so
  they do not race over Mintlify's generated cache.
- Verify changed pages in the internal browser: desktop and mobile layout,
  product selector, sidebar, language tabs, visible code, and copy behavior.
  Check diagram width and tables; do not infer rendering from source alone.
- Follow the canonical Git workflow: feature branch, scoped commit, draft PR,
  independent review of the exact base/head, and required checks before ready.
  Merge only within current-session authorization, then verify the deployment.
