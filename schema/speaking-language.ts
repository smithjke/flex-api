export type SpeakingLanguage = {
  id: string;
  title: string;
};

export type SpeakingLanguageRaw = {
  id: string;
  title: string;
};

export function mapSpeakingLanguage(data: Partial<SpeakingLanguage>): SpeakingLanguageRaw {
  return {
    id: data.id,
    title: data.title,
  };
}

export function mapSpeakingLanguageRaw(dataRaw: SpeakingLanguageRaw): SpeakingLanguage {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
  };
}
