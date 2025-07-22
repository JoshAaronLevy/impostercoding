export const estimateReadingTime = (html: string): string => {
  const strippedText = html.replace(/<[^>]+>/g, '');
  const words = strippedText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} Minute Read`;
}

export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')     // camelCase to kebab-case
    .replace(/\s+/g, '-')                    // spaces to dashes
    .replace(/_+/g, '-')                     // underscores to dashes
    .replace(/-+/g, '-')                     // multiple dashes to one
    .toLowerCase();
}

