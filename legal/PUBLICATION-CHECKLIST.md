# Legal Documents: Publication Checklist

**Internal working document. Do not publish this file or its contents to privkey.io.**

Tracks what must be resolved before `privacy-policy.md` and `terms-of-service.md` can be published as public pages. Previously these lists lived at the bottom of each document, where they would have shipped to the public alongside the policy.

Nothing here is legal advice. Items marked **counsel** need attorney sign-off; items marked **ops** are ours to resolve and do not need a lawyer; items marked **decision** need a business owner to pick an option.

## Who answers the brackets

Short version: **most of the brackets are ours, not the attorney's.** An attorney cannot invent how long we keep scan output, which CRM we use, or what our payment terms are. They review the answers we supply and own the genuinely legal calls, which are few. Handing the drafts over with the brackets empty produces an expensive round trip and a lawyer guessing at our operations.

Work the three groups below in order. Group A and B before the attorney sees the documents; Group C is what we are actually paying them for.

### Group A: ours, and only we know the answer

Facts about how PrivKey operates. No legal judgment involved.

| Where | Bracket | Answer needed |
|---|---|---|
| PP 5.1 | Hosting provider row, and the seven business-operations rows (email, CRM, accounting, payments, conferencing, file transfer, KYC) | Name the actual vendor, or strike the row if we do not use that category |
| PP 8 | Every retention duration: `[24]` months inquiries, `[7]` years engagement records, `[3]` years reports, `[30]` days raw technical data, `[7]` years financial, `[5]` years KYC, `[3]` years training, `[12]` months marketing, `[12]` months logs, `[12]` months applicants | How long we actually keep each, today. A published schedule we do not follow is worse than no schedule |
| PP 9 | `[30]` days destruction window, `[encrypted file transfer or PGP]` | Whether 30 days is achievable, and which encrypted channel we really use for deliverables |
| PP 2 | AI tooling commitment, minimum-collection commitment | Whether our AI tool contracts actually prohibit training on our input |
| PP 12 | The eleven security controls (not bracketed, but gated) | Per-control yes or no. Strike any that is not fully in place |
| PP 3.2 | Hosting log fields and retention | Ask the host what they log and for how long |
| PP 17, ToS 19.7 and 20 | `privacy@`, `legal@` aliases | Create and monitor them, or substitute `information@` |
| PP 17 | Privacy Lead / DPO name and email | Pick the person who owns rights requests |
| ToS 1 | `[Florida]` limited liability company | State of formation. One Sunbiz lookup, and it also gives us the registered agent |
| ToS 3 | Service list | Strike every line we do not currently sell |
| Both | `[DATE]` effective and last-updated | Set on the day we publish. Last step, not first |
| Both | Street address, ZIP | **Answered: 8710 N Renfrew Pl, Tampa, FL 33604** |

### Group B: ours to choose, attorney to sanity-check

Commercial terms. We pick the number because it is our business; counsel confirms it is enforceable and market-standard.

| Where | Bracket | What we are choosing |
|---|---|---|
| ToS 8.2 | `net [30] days` | Invoice payment window |
| ToS 8.3 | `[1.5]%` per month, `[15]` days | Late interest, and how overdue before we suspend |
| ToS 8.6 | refunds in `[USD]` | Refund currency for digital asset payments |
| ToS 10 | `[five (5)]` years | Confidentiality survival period |
| ToS 11.1 | `[30]` days | Warranty claim notice window |
| ToS 12.2 | `[TWELVE (12)]` months, `[USD $100]` | Liability cap basis, and the free-use cap |
| ToS 12.3 | `[three (3)]` times fees | The super-cap option, if we choose option (b). Insurer question, see item 21 |
| ToS 12.5 | `[one (1)]` year | Claim time limit |
| ToS 17.1, 17.2 | `[30]` days, `[15]` days | Termination notice, and breach cure period |
| ToS 18.2, 18.3 | `[30]` days, `[one (1)]` arbitrator | Informal resolution period, arbitrator count |
| ToS 19.3 | `[twelve (12)]` months | Non-solicitation period |
| ToS 19.11, PP 16 | `[30]` days | Notice before terms or policy changes take effect |

### Group C: genuinely the attorney's

Legal judgment we should not make ourselves.

| Where | Question |
|---|---|
| PP 11.6, 17 | Whether we need EU and UK Article 27 representatives, and if so appointing them |
| PP 6, 9 | The SCC and DPA package: which transfer mechanism, and a standing Article 28 DPA |
| ToS 12.3 | Enforceability of the uncapped exceptions, and whether our insurance responds to them (item 21, with the insurer) |
| ToS 18.5, 18.7 | Whether the arbitration clause and class waiver hold up against individual or consumer training customers, and whether we need the 30-day opt-out |
| ToS 12, 13 | Whether the caps, disclaimers, and indemnities are enforceable as drafted under Florida law |
| Both | Final pass on everything, including whether our Group A and B answers create exposure we did not see |

## Blockers for both documents

| # | Type | Item |
|---|---|---|
| 1 | counsel | Full attorney review of both documents, with every remaining `[bracketed]` item resolved or struck |
| 2 | ops | Set the effective date and last-updated date on publication, and remove the DRAFT banner only at that point |
| 3 | ops | Street address added to both contact blocks and ToS 19.7 as 8710 N Renfrew Pl, Tampa, FL 33604 (confirmed 2026-07-27). Still open: state of formation and registered agent, one Sunbiz lookup, which clears the `[Florida]` bracket in ToS 1 |
| 4 | ops | Create and monitor `privacy@privkey.io` and `legal@privkey.io`, or substitute `information@privkey.io` throughout. A rights request landing in an unmonitored alias silently burns the statutory response clock for its jurisdiction (45 days under U.S. state laws, one month under GDPR; see the Section 11.3 table) |
| 5 | ops | Convert both to HTML pages at `/privacy/` and `/terms/`, link them in the footer, and add both URLs to `sitemap.xml`. Markdown under `legal/` does not render as a page on a static host and must not be linked as though it does |
| 6 | ops | Confirm the principal place of business is Tampa. Both documents and `index.html` JSON-LD now say Tampa, and arbitration is seated in Hillsborough County. If the real PPB is elsewhere, all three change together |

## Privacy Policy

| # | Type | Item |
|---|---|---|
| 7 | ops | Fill the hosting row in Section 5.1 and confirm the provider's access-log fields and retention period against Section 3.2 |
| 8 | ops | Fill the business-operations half of the Section 5.1 table (email, CRM, accounting, payments, conferencing, file transfer, KYC) with real vendors, or strike rows for tooling not in use |
| 9 | ops | Publish and maintain a subprocessor page at `privkey.io/subprocessors` before the reference in Section 5.1 goes live, or remove the reference |
| 10 | ops | Re-verify Section 7 against the deployed Site on every publication. It asserts that privkey.io sets no cookies and runs no analytics, which is true of the Site as currently built and becomes false the moment a tag is added |
| 11 | ops | Consider self-hosting the web font. Serving Google Fonts from Google discloses every visitor's IP to Google and is the specific pattern EU regulators have penalized; self-hosting removes the disclosure and the Section 5.1 row with it |
| 12 | counsel | Verify the Section 8 retention schedule matches real practice, including deletion ownership, legal-hold exceptions, and backup handling. A published schedule you do not follow is worse than none |
| 13 | ops | Confirm the 30-day engagement-data destruction window in Section 9 is operationally achievable, and build the certificate-of-destruction template it promises |
| 14 | ops | Attest to each control in Section 12 individually and strike any not fully in place: TLS 1.2+, MFA on all internal systems, least privilege, hardware security keys for privileged accounts, endpoint protection and FDE, centralized monitored logging, segregated client environments, background checks, annual awareness training, documented incident response, vendor security review |
| 15 | ops | Confirm the AI-tooling commitment in Section 2 against actual tool usage and vendor terms, and soften it if the contractual no-training guarantee is not in place |
| 16 | ops | Build the rights-request intake workflow before publishing the address: named owner, logging, identity verification, the Section 11.3 deadlines, and the Section 11.5 appeal path |
| 17 | counsel | Determine whether EU/UK Article 27 representatives are required |
| 18 | counsel | Prepare the standing DPA and SCC package referenced in Sections 6 and 9 |
| 19 | counsel | Confirm the Section 5.4 commitment to challenge overbroad legal process is one we are prepared to fund |
| 20 | ops | Add a notice-at-collection link beside the contact form in `index.html`. Collection happens at the form, and a footer link alone does not satisfy CCPA or GDPR Art. 13 |

## Terms of Service

| # | Type | Item |
|---|---|---|
| 21 | decision | **Section 12.3.** Choose between the drafted uncapped confidentiality exposure and the bracketed super-cap alternative. Take it to the insurer as well as counsel: the question is whether the policy responds to the uncapped exceptions at all, not whether its limit matches the 12.2 cap |
| 22 | counsel | Confirm no offering involves custody, key shares, or asset control. Section 3 now carries explicit advisory-only qualifiers on the multisig and MPC bullets; if any engagement would put a key share in our hands, obtain a money transmission licensing analysis first |
| 23 | ops | Strike every Section 3 service not currently offered. Each line creates obligations elsewhere, and the training and compliance bullets in particular commit the Privacy Policy to operating training accounts, certification records, KYC collection, and sanctions screening |
| 24 | counsel | Confirm the Section 18 arbitration clause and class waiver are enforceable against consumer or individual training customers, and decide the 18.7 consumer opt-out |
| 25 | counsel | Confirm E&O and cyber liability coverage against the Section 12.2 cap and the Section 12.3 exceptions |
| 26 | done | Confirmed 2026-07-27 by the business owner: digital asset payments are accepted, so ToS 8.6 stays, and the Privacy Policy's blockchain payment sections (3.1 billing row, Section 10) stay with it |
| 27 | ops | Build the security-testing Rules of Engagement template that Section 6 says we will not start work without |
| 28 | counsel | Confirm the bracketed cure periods, notice periods, payment terms, interest rate, and survival period |
| 29 | ops | Add click-to-accept or scroll-to-accept on the Site. Browsewrap acceptance by mere access is weakly enforceable, and Section 1 currently relies on it |
| 30 | ops | Confirm the MIT carve-out in Section 9.1.1 reflects the intent. The repository is MIT-licensed today, so the Site's source code, to the extent PrivKey owns it, is already publicly reusable including commercially. The license does not cover third-party theme assets, fonts, or images in the repo, or trademarks; inventory which repo contents are actually PrivKey's before relying on the carve-out, and if the intent is to reserve rights in the code, the license changes rather than the Terms |

## Cross-document consistency

| # | Type | Item |
|---|---|---|
| 31 | ops | `SECURITY.md` is now the single source for the coordinated disclosure safe harbor. Privacy Policy 13.4 and ToS 15 both point at it; keep all three aligned if the process changes |
| 32 | ops | Key material handling is stated identically in Privacy Policy Section 2 and ToS 5.1: delete promptly, tell the client to rotate, accept no responsibility for loss. Change both together |
| 33 | ops | Decide whether to publish a PGP key for `security@privkey.io`. The reference was removed from the Privacy Policy rather than left pointing at a URL that does not exist |
