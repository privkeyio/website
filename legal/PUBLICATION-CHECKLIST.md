# Legal Documents: Publication Checklist

**Internal working document. Do not publish this file or its contents to privkey.io.**

Tracks what must be resolved before `privacy-policy.md` and `terms-of-service.md` can be published as public pages. Previously these lists lived at the bottom of each document, where they would have shipped to the public alongside the policy.

Nothing here is legal advice. Items marked **counsel** need attorney sign-off; items marked **ops** are ours to resolve and do not need a lawyer; items marked **decision** need a business owner to pick an option.

## Blockers for both documents

| # | Type | Item |
|---|---|---|
| 1 | counsel | Full attorney review of both documents, with every remaining `[bracketed]` item resolved or struck |
| 2 | ops | Set the effective date and last-updated date on publication, and remove the DRAFT banner only at that point |
| 3 | ops | Confirm state of formation and registered agent; add the full street address and ZIP to both contact blocks |
| 4 | ops | Create and monitor `privacy@privkey.io` and `legal@privkey.io`, or substitute `information@privkey.io` throughout. A rights request landing in an unmonitored alias burns a 45-day statutory clock silently |
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
| 30 | ops | Confirm the MIT carve-out in Section 9.1.1 reflects the intent. The repository is MIT-licensed today, so the Site's source and content are already publicly reusable including commercially. If the intent is to reserve those rights, the license changes rather than the Terms |

## Cross-document consistency

| # | Type | Item |
|---|---|---|
| 31 | ops | `SECURITY.md` is now the single source for the coordinated disclosure safe harbor. Privacy Policy 13.4 and ToS 15 both point at it; keep all three aligned if the process changes |
| 32 | ops | Key material handling is stated identically in Privacy Policy Section 2 and ToS 5.1: delete promptly, tell the client to rotate, accept no responsibility for loss. Change both together |
| 33 | ops | Decide whether to publish a PGP key for `security@privkey.io`. The reference was removed from the Privacy Policy rather than left pointing at a URL that does not exist |
