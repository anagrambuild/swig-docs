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
- Query contains Balance, DEX activity, Yield, and Ramp. SDK examples belong
  inside their topic pages, never in a separate sidebar group.
- Finance owns Ramp, Transfer, Swap, Yield, Paymaster, and x402. Maintain one
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

## Wallet page layout

Use these H2 sections in this order:

1. **Introduction**: explain what it is, why it matters, and who should use it
   in one or two short paragraphs. State preparation versus submission and any
   material availability constraint.
2. **Flow**, only when a diagram clarifies the lifecycle.
3. **Input**: a parameter table with requirements, types or units, and scope.
   For mixed operations, identify which inputs belong to the read or write.
4. **Output**, for reads: describe the returned fields or values in a table.
   Write-only pages need no output section; explain the prepared result briefly
   beside the example when needed.
5. **Errors**: table of the failure, cause, and corrective action. Use exact
   error names/status codes only when verified against the SDK or API. Move
   error-handling paragraphs into this table.
6. **SDK example**: concrete code using the configured clients. Use H3 headings
   for distinct operations within a page, with the same operation shown in
   language tabs.

Concept pages follow the same order where applicable. A portal-only action or
unsupported SDK operation must say so; do not invent a runnable SDK method.
Keep essential authority, permission, signing, retry, and confirmation rules.
Link shared setup and submission guidance instead of repeating it.

## Query page layout

Use these H2 sections in this exact order:

1. **Introduction**: identify the dataset and practical uses. Explain quota,
   ownership, freshness, and pagination constraints where relevant.
2. **Returned result**: table of actual SDK fields, types, and meanings.
3. **Input parameters**: table of required and optional inputs, defaults, units,
   supported values, and filters.
4. **Errors**: table of failure, cause, and corrective action; distinguish
   request validation, access, quota, and dependency failures where applicable.
5. **SDK example**: a concrete query using the supported language clients.
6. **SDK returned structure**: a code block showing the matching result shape.

Lead with the Developer SDK. Link transport details to the REST reference.
Label illustrative output, preserve exact field names and integer encodings,
and show language-specific shapes when they differ. A Python JSON view of a
dataclass must include its nullable fields. Never present sample data as a live
API response unless the request was actually performed.

## Code and diagrams

- Use `CodeGroup` or `Tabs` for language alternatives; no dropdown language
  selector or separate top-level TypeScript, Python, and Rust sections.
- Show only languages that support the operation. Verify names and contracts
  against the applicable SDK source revision, including unpublished support.
- Link Client setup and name supplied clients, public addresses, and
  application-owned signing callbacks. Distinguish callbacks from SDK methods.
- Install the latest SDK without a version pin. Retain a companion dependency
  constraint only when needed for compatibility and explain it beside the command.
- Prefer a fenced `text` ASCII flow when a diagram helps. Read top to bottom,
  use consistent boxes and vertical arrows, and wrap labels inside the box.
  Keep each line at most 26 characters so it fits the mobile content area.
- Keep prose brief. Remove repeated prerequisites, promotional claims,
  unrelated features, and repeated next-step card lists. Keep long secondary
  examples collapsed when they are necessary for a complete contract.

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
