const ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
};

/** Escapes text for element content or a double-quoted attribute value. */
export const escapeHtml = (value: string): string =>
  value.replace(/[&<>"]/g, (character) => ENTITIES[character] as string);
