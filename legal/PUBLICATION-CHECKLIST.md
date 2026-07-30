# Legal Documents: Publication Checklist

**Internal working document. Do not publish this file or its contents to privkey.io.**

Tracks what must be resolved before `privacy-policy.md` and `terms-of-service.md` can be published as public pages.

Nothing here is legal advice. Items marked **counsel** need attorney sign-off; **ops** are ours to resolve and do not need a lawyer; **decision** needs a business owner to pick an option.

## Resolved on 2026-07-30

Applied to the drafts. Attorney still confirms these in the final Group C pass, but no bracket remains.

### First pass — facts, retention, commercial terms

- **Company facts:** street address 8710 N Renfrew Pl, Tampa, FL 33604 (both contact blocks + ToS 19.7); ToS 1 set to "a Florida limited liability company"; PP 5.1 hosting row = GitHub Pages (GitHub, Inc.), with PP 3.2 noting GitHub holds request logs and does not expose them to us; PP 5.1 accounting row = Xero.
- **Retention (PP 8):** durations set — 24mo inquiries, term + 7yr engagement records, 12mo reports, **credentials/key material split out** to 5 business days, 30 days raw technical data, 7yr financial, 5yr sanctions-screening records (reserved), 12mo marketing, 12mo logs, 12mo applicants. Training-account retention row later removed (see service-list strike). PP 9 destruction reworded to 30 days + 5-business-day credential rotation + backup carve-out.
- **Aliases:** decision made to use `privacy@` and `legal@`; resolved throughout both docs. *(Creating + monitoring them is still an ops task below.)*
- **Commercial terms (ToS, all Group B numbers set):** net 30; interest at lower of 1.5%/mo or legal max, no compounding/stacking, suspend at 15 days; digital-asset refunds in USD at fiat value received; 5-year confidentiality survival; 30-day warranty notice; 12-month / USD $100 liability cap; 30-day termination-for-convenience; **split cure period 30 days / 10 days for payment breach**; 30-day informal resolution; one arbitrator; 12-month non-solicitation; 30-day change notice (ToS 19.11 + PP 16).
- **ToS §12.5 (time limit): DELETED.** A contractual limitations period under one year is void under Fla. Stat. §95.03; the agreement is Florida-governed and Florida-seated, so the clause was dead weight. Florida's 5-year written-contract SOL now governs by default.
- **Confirmed earlier (2026-07-27):** digital-asset payments are accepted, so ToS 8.6 and the PP blockchain-payment sections stay.

### Second pass — vendors, controls, AI, custody, service list

- **PP 5.1 business-operations vendors:** email/productivity = **Proton (Proton for Business)**; CRM = **no dedicated CRM; records kept in email and accounting systems**; payment = purpose changed to "Bank transfer and digital asset payments," provider **"No third-party card processor; we do not accept card payments"**; video conferencing = **Proton (Proton Meet)**; secure file transfer = **Proton (Proton Mail / Proton Drive)**; **sanctions-screening row struck** — we do not screen today. ToS 14's "may conduct" reservation left intact, so the strike is consistent.
- **PP 9 encrypted delivery channel:** resolved to **Proton Mail or Proton Drive, or PGP-encrypted files**.
- **PP 2 AI commitment:** softened to "we do not knowingly input client confidential information into any third-party AI tool that trains on that input," and now discloses AI-assisted tooling use. **Confirmed:** the AI assistant in use is **Claude (Anthropic) paid/API**, which contractually does not train on inputs, so the claim holds; verify-bracket removed. Proton for Business tier confirmed for the email row.
- **PP 12 security controls — attested per control.** Kept: TLS 1.2+ / at-rest encryption, MFA on all internal systems, least-privilege RBAC, **hardware security keys (YubiKeys)**, file-level encryption of stored client data (Cryptomator), segregated client environments, vendor security review. **Struck:** centralized monitored logging, background checks, annual awareness training. **Reworded for accuracy:** endpoint-protection/FDE → "file-level encryption of stored client data" (Cryptomator is file-level, no disk-level FDE claimed); "documented incident response with defined roles" → "incident response procedures" (not documented yet). Internal publication-gate note removed.
- **PP Privacy Lead:** **William K. Santiago**, privacy@privkey.io.
- **Custody redraft (ToS 3 multisig, MPC bullet, §3 closing, §4.1):** rewritten to match actual practice — **PrivKey never holds production keys and never takes custody of any key that controls client assets; in the multisig architectures we advise on, signing keys are held only by the client and client-approved third parties, never PrivKey; any key material we handle is confined to testing/PoC and never controls production assets.** MPC bullet → "controlling share"; §3 closing gate → "asset-moving authority." Supersedes the prior absolute "hold nothing, in any combination" language, which overstated it in the opposite direction. **Still counsel — MTL ratification (item below).**
- **Sunbiz confirmation (2026-07-30, from the filed 2026 Annual Report):** PRIVKEY LLC, document L18000284183, FEI 83-2811040, **Florida LLC** formed 12/11/2018. **2026 Florida LLC Annual Report filed 01/11/2026** (William K. Santiago, CEO) — current, no dissolution risk. Officers: William K. Santiago (CEO) and Kyle W. Santiago (CTO), both at 8710 N Renfrew Pl, Tampa FL 33604. Clears the ToS 1 "Florida limited liability company" confirmation. **BUT the report lists the principal place of business, mailing address, and registered agent as 7901 4th St N Ste 300, St. Petersburg, FL 33702 (Registered Agents Inc) — NOT the Tampa address the drafts use. See open item on the PPB conflict.**
- **PPB confirmed Tampa + Sunbiz pointer added (2026-07-30):** owner confirms 8710 N Renfrew Pl, Tampa is the true operating address, so all doc addresses and Hillsborough County arbitration stand. Added a Sunbiz-pointer sentence (ToS 1) and a "Florida Division of Corporations: sunbiz.org (Document No. L18000284183)" line to both contact blocks, so registration status and registered-agent details stay verifiable from the public record without yearly doc edits. Physical Tampa contact/notice address retained in both docs (required by GDPR Art. 13 and for notices). Only real-move relocations require future address edits.
- **Service list (ToS 3):** **struck #9** (compliance & AML/KYC advisory) and **#10** (training programs & educational resources); **narrowed #1** CCSS to advisory/guidance only (no auditing, no certification — points at §4.3); kept multisig/MPC advisory, self-custody, pen testing, smart contracts, Bitcoin/Lightning, AI tooling. **PP reconciled:** removed training-account data row (3.1), training retention row (8), "and training" (4 legal basis), "training programs" (1 overview). **ToS reconciled:** "educational and training materials" → "educational materials" (1), training→educational (4.2, 9.1, 9.6). **§3 publication-gate note removed.**

---

## Still open

### Deferred by decision

| Type | Item |
|---|---|
| decision → counsel + insurer | **ToS §12.3 confidentiality cap.** Deferred until counsel and insurer review. Left as drafted — option (a), uncapped confidentiality exposure — with the (a)-vs-(b) 3× super-cap decision box intact. The question for the insurer is whether the E&O/cyber policy responds to the uncapped exceptions at all, not whether its limit matches the 12.2 cap. Pick (a) or (b) after that review. |

### Blockers for both documents

| # | Type | Item |
|---|---|---|
| 1 | counsel | Full attorney review of both documents, with every remaining `[bracketed]` item resolved or struck |
| 2 | ops | Set the effective and last-updated dates on publication, and remove the DRAFT banner only at that point |
| 3 | done | 2026 annual report confirmed filed 01/11/2026 — see Resolved log. (Address conflict tracked in item 6.) |
| 4 | ops | Actually create and monitor `privacy@privkey.io` and `legal@privkey.io`. A rights request landing in an unmonitored alias silently burns the statutory response clock (45 days U.S. state / one month GDPR; PP 11.3 table) |
| 5 | ops | Convert both to HTML pages at `/privacy/` and `/terms/`, footer-link them, add both URLs to `sitemap.xml`. Markdown under `legal/` does not render as a page on a static host |
| 6 | ops | **PPB confirmed Tampa (2026-07-30).** Owner confirms 8710 N Renfrew Pl, Tampa FL 33604 is the true operating address, so both docs, `index.html` JSON-LD, and Hillsborough County arbitration stay unchanged. Remaining cleanup: correct the principal-place-of-business/mailing address on the **next Florida annual report** (currently shows the registered agent's St. Petersburg suite), so the public record matches. |

### Privacy Policy

| # | Type | Item |
|---|---|---|
| 7 | counsel/ops | Confirm the Section 8 retention schedule matches real practice — deletion ownership, legal-hold exceptions, backup handling. A published schedule you do not follow is worse than none |
| 8 | ops | Confirm the 30-day / 5-business-day destruction windows in Section 9 are operationally achievable, and build the certificate-of-destruction template |
| 9 | ops | Publish and maintain `privkey.io/subprocessors` before the Section 5.1 reference goes live, or remove the reference |
| 10 | ops | Re-verify Section 7 against the deployed Site on every publication — it asserts privkey.io sets no cookies and runs no analytics, true as built and false the moment a tag is added |
| 11 | ops | Consider self-hosting the web font. Serving Google Fonts discloses every visitor's IP to Google — the pattern EU regulators have penalized; self-hosting removes the disclosure and the Section 5.1 row |
| 12 | ops | Build the rights-request intake workflow before publishing the address: named owner, logging, identity verification, Section 11.3 deadlines, Section 11.5 appeal path |
| 13 | ops | Add a notice-at-collection link beside the contact form in `index.html`. A footer link alone does not satisfy CCPA or GDPR Art. 13 |
| 14 | counsel | Determine whether EU/UK Article 27 representatives are required (PP 11.6, 17), and appoint if so |
| 15 | counsel | Prepare the standing DPA and SCC package referenced in Sections 6 and 9, and decide whether to publish a PGP key for `security@privkey.io` |
| 16 | counsel | Confirm the Section 5.4 commitment to challenge overbroad legal process is one we are prepared to fund |

### Terms of Service

| # | Type | Item |
|---|---|---|
| 17 | decision/counsel | **Section 18.7 consumer opt-out.** Training is struck, so the main consumer trigger is gone — but "self-custody consulting for individuals" remains, and an individual can be a consumer. Decide whether to include the 30-day arbitration opt-out and confirm the class waiver holds against consumer clients |
| 18 | counsel | **Money-transmitter ratification.** The custody redraft (ToS 3 / 4.1) now says PrivKey never holds production or controlling keys and only handles key material in testing/PoC. Confirm this matches every engagement and that holding no asset-moving key keeps us outside MSB/money-transmitter status |
| 19 | counsel | Confirm E&O and cyber liability coverage against the Section 12.2 cap and Section 12.3 exceptions (ties to the §12.3 deferral above) |
| 20 | counsel | Confirm the set cure periods, notice periods, payment terms, and interest rate are enforceable and market-standard, and that the caps, disclaimers, and indemnities hold under Florida law |
| 21 | ops | Build the security-testing Rules of Engagement template that Section 6 says we will not start work without |
| 22 | ops | Add click-to-accept or scroll-to-accept on the Site. Browsewrap acceptance by mere access is weakly enforceable, and Section 1 relies on it |
| 23 | ops | Confirm the MIT carve-out in Section 9.1.1 reflects the intent. Inventory which repo contents are actually PrivKey's (MIT does not cover third-party theme assets, fonts, images, or trademarks). If the intent is to reserve rights in the code, the license changes rather than the Terms |

### Cross-document consistency

| # | Type | Item |
|---|---|---|
| 24 | ops | `SECURITY.md` is the single source for the coordinated-disclosure safe harbor. PP 13.4 and ToS 15 both point at it; keep all three aligned if the process changes |
| 25 | ops | Key-material handling is stated across PP Section 2, ToS 5.1, and now the ToS 3 / 4.1 custody language: delete promptly, tell the client to rotate, never hold controlling keys, accept no responsibility for loss. Change them together |
| 26 | counsel | Final pass on everything, including whether the answers applied above create exposure we did not see |
