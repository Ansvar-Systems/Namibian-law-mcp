/**
 * Response metadata utilities for Namibia Law MCP.
 */

import type Database from '@ansvar/mcp-sqlite';

export interface ResponseMetadata {
  data_source: string;
  jurisdiction: string;
  disclaimer: string;
  freshness?: string;
  note?: string;
  query_strategy?: string;
}

export interface ToolResponse<T> {
  results: T;
  _metadata: ResponseMetadata;
}

export function generateResponseMetadata(
  db: InstanceType<typeof Database>,
): ResponseMetadata {
  let freshness: string | undefined;
  try {
    const row = db.prepare(
      "SELECT value FROM db_metadata WHERE key = 'built_at'"
    ).get() as { value: string } | undefined;
    if (row) freshness = row.value;
  } catch {
    // Ignore
  }

  return {
    data_source: 'NamibLII (namiblii.org) — Namibia Legal Information Institute, hosted by AfricanLII',
    jurisdiction: 'NA',
    disclaimer:
      'This data is sourced from NamibLII under free access principles. ' +
      'Government legislation is public domain under Namibian law. ' +
      'Always verify with the official Namibia Government Gazette or Parliament of Namibia portal.',
    freshness,
  };
}
