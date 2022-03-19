
export function MaxTextLenth(text: string, length: number): string {
  const cleanText = text.trim();
  const subString = text.substring(0, 150) + '...';

  if (cleanText.length < subString.length){
    return text;
  }

  return subString;
};