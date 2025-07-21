export const estimateReadingTime = (html: string): string => {
  const strippedText = html.replace(/<[^>]+>/g, '');
  const words = strippedText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} Minute Read`;
}
