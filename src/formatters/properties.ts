const format = ([key, value]: [string, unknown]): string => `${key}="${value}"`;

export const formatProperties = (properties: Record<string, unknown>): string =>
  // adding a space to the start  " <H3 foo.../>"
  ' ' + Object.entries(properties).map(format).join(' ');
