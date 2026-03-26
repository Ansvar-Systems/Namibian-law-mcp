# Namibian Law MCP Server

**The NamLII alternative for the AI age.**

[![npm version](https://badge.fury.io/js/@ansvar%2Fnamibian-law-mcp.svg)](https://www.npmjs.com/package/@ansvar/namibian-law-mcp)
[![MCP Registry](https://img.shields.io/badge/MCP-Registry-blue)](https://registry.modelcontextprotocol.io)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub stars](https://img.shields.io/github/stars/Ansvar-Systems/Namibian-law-mcp?style=social)](https://github.com/Ansvar-Systems/Namibian-law-mcp)
[![CI](https://github.com/Ansvar-Systems/Namibian-law-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/Ansvar-Systems/Namibian-law-mcp/actions/workflows/ci.yml)
[![Provisions](https://img.shields.io/badge/provisions-21%2C040-blue)](https://github.com/Ansvar-Systems/Namibian-law-mcp)

Query **660 Namibian laws** -- from the Data Protection Act and the Labour Act 2007 to the Companies Act, Minerals (Prospecting and Mining) Act, and more -- directly from Claude, Cursor, or any MCP-compatible client.

If you're building legal tech, compliance tools, or doing Namibian legal research, this is your verified reference database.

Built by [Ansvar Systems](https://ansvar.eu) -- Stockholm, Sweden

---

## Why This Exists

Namibian legal research is spread across namlii.org, parliament.na, and laws.gov.na. Whether you're:
- A **lawyer** validating citations in a brief or contract
- A **compliance officer** checking obligations under the Data Protection Act or Labour Act 2007
- A **legal tech developer** building tools on Namibian law
- A **researcher** tracing legislative history across 660 Acts

...you shouldn't need dozens of browser tabs and manual cross-referencing. Ask Claude. Get the exact provision. With context.

This MCP server makes Namibian law **searchable, cross-referenceable, and AI-readable**.

---

## Quick Start

### Use Remotely (No Install Needed)

> Connect directly to the hosted version -- zero dependencies, nothing to install.

**Endpoint:** `https://namibian-law-mcp.vercel.app/mcp`

| Client | How to Connect |
|--------|---------------|
| **Claude.ai** | Settings > Connectors > Add Integration > paste URL |
| **Claude Code** | `claude mcp add namibian-law --transport http https://namibian-law-mcp.vercel.app/mcp` |
| **Claude Desktop** | Add to config (see below) |
| **GitHub Copilot** | Add to VS Code settings (see below) |

**Claude Desktop** -- add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "namibian-law": {
      "type": "url",
      "url": "https://namibian-law-mcp.vercel.app/mcp"
    }
  }
}
```

**GitHub Copilot** -- add to VS Code `settings.json`:

```json
{
  "github.copilot.chat.mcp.servers": {
    "namibian-law": {
      "type": "http",
      "url": "https://namibian-law-mcp.vercel.app/mcp"
    }
  }
}
```

### Use Locally (npm)

```bash
npx @ansvar/namibian-law-mcp
```

**Claude Desktop** -- add to `claude_desktop_config.json`:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "namibian-law": {
      "command": "npx",
      "args": ["-y", "@ansvar/namibian-law-mcp"]
    }
  }
}
```

**Cursor / VS Code:**

```json
{
  "mcp.servers": {
    "namibian-law": {
      "command": "npx",
      "args": ["-y", "@ansvar/namibian-law-mcp"]
    }
  }
}
```

---

## Example Queries

Once connected, just ask naturally:

- *"What does the Data Protection Act say about personal information?"*
- *"Find provisions in the Labour Act 2007 about unfair dismissal"*
- *"Search for company law under the Companies Act"*
- *"Is the Namibia Investment Promotion Act still in force?"*
- *"What does the Minerals (Prospecting and Mining) Act say about prospecting licences?"*
- *"Find provisions about environmental compliance under the Environmental Management Act"*
- *"Validate the citation 'Section 5 Labour Act 2007'"*
- *"Build a legal stance on employment termination requirements in Namibia"*

---

## What's Included

| Category | Count | Details |
|----------|-------|---------|
| **Statutes** | 660 laws | Comprehensive Namibian legislation from namlii.org |
| **Provisions** | 21,040 sections | Full-text searchable with FTS5 |
| **Database Size** | ~51 MB | Optimized SQLite, portable |
| **Legal Definitions** | Table reserved | Extraction planned for upcoming release |
| **Freshness Checks** | Automated | Drift detection against official sources |

**Verified data only** -- every citation is validated against official sources (NamLII, Parliament of Namibia). Zero LLM-generated content.

---

## Why This Works

**Verbatim Source Text (No LLM Processing):**
- All statute text is ingested from [namlii.org](https://namlii.org) (Namibia Law Library) and [parliament.na](https://parliament.na)
- Provisions are returned **unchanged** from SQLite FTS5 database rows
- Zero LLM summarization or paraphrasing -- the database contains statute text, not AI interpretations

**Smart Context Management:**
- Search returns ranked provisions with BM25 scoring (safe for context)
- Provision retrieval gives exact text by Act identifier + section number
- Cross-references help navigate without loading everything at once

**Technical Architecture:**
```
namlii.org / parliament.na --> Parse --> SQLite --> FTS5 snippet() --> MCP response
                                 ^                        ^
                          Provision parser         Verbatim database query
```

### Traditional Research vs. This MCP

| Traditional Approach | This MCP Server |
|---------------------|-----------------|
| Search namlii.org by Act name | Search by plain English: *"unfair dismissal notice period"* |
| Navigate multi-section statutes manually | Get the exact provision with context |
| Manual cross-referencing between Acts | `build_legal_stance` aggregates across sources |
| "Is this Act still in force?" -- check manually | `check_currency` tool -- answer in seconds |
| Find SADC/AU alignment -- search manually | `get_eu_basis` -- linked frameworks instantly |
| No API, no integration | MCP protocol -- AI-native |

**Traditional:** Search NamLII -> Navigate HTML -> Ctrl+F -> Cross-reference between Acts -> Repeat

**This MCP:** *"What are the data protection obligations for private-sector entities under Namibian law?"* -> Done.

---

## Available Tools (13)

### Core Legal Research Tools (8)

| Tool | Description |
|------|-------------|
| `search_legislation` | FTS5 full-text search across 21,040 provisions with BM25 ranking. Supports quoted phrases, boolean operators, prefix wildcards |
| `get_provision` | Retrieve specific provision by Act identifier + section number |
| `check_currency` | Check if a statute is in force, amended, or repealed |
| `validate_citation` | Validate citation against database -- zero-hallucination check |
| `build_legal_stance` | Aggregate citations from multiple statutes for a legal topic |
| `format_citation` | Format citations per Namibian legal conventions |
| `list_sources` | List all available statutes with metadata, coverage scope, and data provenance |
| `about` | Server info, capabilities, dataset statistics, and coverage summary |

### International Law Integration Tools (5)

| Tool | Description |
|------|-------------|
| `get_eu_basis` | Get EU directives/regulations that a Namibian statute aligns with (e.g., Data Protection Act and GDPR principles) |
| `get_namibian_implementations` | Find Namibian laws aligning with a specific international framework |
| `search_eu_implementations` | Search EU documents with Namibian alignment counts |
| `get_provision_eu_basis` | Get international law references for a specific provision |
| `validate_eu_compliance` | Check alignment status of Namibian statutes against EU/SADC frameworks |

---

## International Law Alignment

Namibia is not an EU member state. The international alignment tools cover the frameworks that matter for Namibian law practice:

- **SADC frameworks** -- Southern African Development Community protocols and model laws
- **African Union** -- AU conventions including the Malabo Convention on Data Protection
- **Commonwealth** -- Commonwealth legal frameworks and model laws
- **Data Protection Act** aligns with international data protection principles; the `get_eu_basis` tool maps these to GDPR-equivalent provisions for cross-reference
- **Labour Act 2007** aligns with ILO conventions and SADC labour protocols

The international bridge tools allow you to explore alignment relationships -- checking which Namibian provisions correspond to SADC or international requirements, and vice versa.

> **Note:** International cross-references reflect alignment and treaty obligations, not formal transposition. Namibia adopts its own legislative approach, and these tools help identify where Namibian and international law address similar domains.

---

## Data Sources & Freshness

All content is sourced from authoritative Namibian legal databases:

- **[Namibia Law Library (NamLII)](https://namlii.org/)** -- Primary source for Namibian legislation and case law
- **[Parliament of Namibia](https://parliament.na/)** -- Official parliamentary records and Acts
- **[Laws of Namibia](https://laws.gov.na/)** -- Official consolidated statutes

### Data Provenance

| Field | Value |
|-------|-------|
| **Authority** | NamLII, Parliament of Namibia |
| **Primary language** | English |
| **License** | Public domain (government publications) |
| **Coverage** | 660 Namibian Acts and statutory instruments |
| **Last ingested** | 2026-02-28 |

### Automated Freshness Checks

A [GitHub Actions workflow](.github/workflows/check-updates.yml) monitors Namibian legal sources for changes:

| Check | Method |
|-------|--------|
| **Statute amendments** | Drift detection against known provision anchors |
| **New statutes** | Comparison against NamLII index |
| **Repealed statutes** | Status change detection |

**Verified data only** -- every citation is validated against official sources. Zero LLM-generated content.

---

## Security

This project uses multiple layers of automated security scanning:

| Scanner | What It Does | Schedule |
|---------|-------------|----------|
| **CodeQL** | Static analysis for security vulnerabilities | Weekly + PRs |
| **Semgrep** | SAST scanning (OWASP top 10, secrets, TypeScript) | Every push |
| **Gitleaks** | Secret detection across git history | Every push |
| **Trivy** | CVE scanning on filesystem and npm dependencies | Daily |
| **Socket.dev** | Supply chain attack detection | PRs |
| **Dependabot** | Automated dependency updates | Weekly |

See [SECURITY.md](SECURITY.md) for the full policy and vulnerability reporting.

---

## Important Disclaimers

### Legal Advice

> **THIS TOOL IS NOT LEGAL ADVICE**
>
> Statute text is sourced from NamLII and Parliament of Namibia official sources. However:
> - This is a **research tool**, not a substitute for professional legal counsel
> - **Court case coverage is not included** -- do not rely solely on this for case law research
> - **Verify critical citations** against primary sources before court filings
> - **International cross-references** reflect alignment relationships, not formal transposition
> - **Namibia-specific law** (customary law, regional regulations) may not be fully captured

**Before using professionally, read:** [DISCLAIMER.md](DISCLAIMER.md) | [SECURITY.md](SECURITY.md)

### Client Confidentiality

Queries go through the Claude API. For privileged or confidential matters, use on-premise deployment.

### Bar Association Reference

For professional use, consult the **Law Society of Namibia** guidelines on AI-assisted legal research.

---

## Development

### Setup

```bash
git clone https://github.com/Ansvar-Systems/Namibian-law-mcp
cd Namibian-law-mcp
npm install
npm run build
npm test
```

### Running Locally

```bash
npm run dev                                       # Start MCP server
npx @anthropic/mcp-inspector node dist/index.js   # Test with MCP Inspector
```

### Data Management

```bash
npm run ingest              # Ingest statutes from namlii.org
npm run build:db            # Rebuild SQLite database
npm run drift:detect        # Run drift detection against anchors
npm run check-updates       # Check for source updates
npm run census              # Generate coverage census
```

### Performance

- **Search Speed:** <100ms for most FTS5 queries
- **Database Size:** ~51 MB (efficient, portable)
- **Reliability:** 100% ingestion success rate across 660 laws

---

## Related Projects: Complete Compliance Suite

This server is part of **Ansvar's Compliance Suite** -- MCP servers that work together for end-to-end compliance coverage:

### [@ansvar/eu-regulations-mcp](https://github.com/Ansvar-Systems/EU_compliance_MCP)
**Query 49 EU regulations directly from Claude** -- GDPR, AI Act, DORA, NIS2, MiFID II, eIDAS, and more. Full regulatory text with article-level search. `npx @ansvar/eu-regulations-mcp`

### [@ansvar/us-regulations-mcp](https://github.com/Ansvar-Systems/US_Compliance_MCP)
**Query US federal and state compliance laws** -- HIPAA, CCPA, SOX, GLBA, FERPA, and more. `npx @ansvar/us-regulations-mcp`

### [@ansvar/security-controls-mcp](https://github.com/Ansvar-Systems/security-controls-mcp)
**Query 261 security frameworks** -- ISO 27001, NIST CSF, SOC 2, CIS Controls, SCF, and more. `npx @ansvar/security-controls-mcp`

**80+ national law MCPs** covering Tanzania, Uganda, South Africa, Kenya, Nigeria, Ghana, Dominican Republic, Sri Lanka, and more.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Priority areas:
- Court case law expansion (Supreme Court, High Court judgments from NamLII)
- Customary law coverage
- SADC treaty cross-references
- Historical statute versions and amendment tracking

---

## Roadmap

- [x] Core statute database with FTS5 search
- [x] Full corpus ingestion (660 laws, 21,040 provisions)
- [x] International law alignment tools
- [x] Vercel Streamable HTTP deployment
- [x] npm package publication
- [ ] Court case law expansion (NamLII case law archive)
- [ ] Customary law coverage
- [ ] SADC protocol cross-references
- [ ] Historical statute versions

---

## Citation

If you use this MCP server in academic research:

```bibtex
@software{namibian_law_mcp_2026,
  author = {Ansvar Systems AB},
  title = {Namibian Law MCP Server: AI-Powered Legal Research Tool},
  year = {2026},
  url = {https://github.com/Ansvar-Systems/Namibian-law-mcp},
  note = {660 Namibian laws with 21,040 provisions}
}
```

---

## License

Apache License 2.0. See [LICENSE](./LICENSE) for details.

### Data Licenses

- **Statutes & Legislation:** Government of Namibia (public domain)
- **International Metadata:** Public domain

---

## About Ansvar Systems

We build AI-accelerated compliance and legal research tools for the global market. This MCP server makes Namibian law accessible to legal professionals and compliance teams worldwide.

So we're open-sourcing it. Navigating 660 Acts shouldn't require a law degree.

**[ansvar.eu](https://ansvar.eu)** -- Stockholm, Sweden

---

<p align="center">
  <sub>Built with care in Stockholm, Sweden</sub>
</p>
