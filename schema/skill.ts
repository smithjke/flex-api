export type Skill = {
  id: string;
  title: string;
};

export type SkillRaw = {
  id: string;
  title: string;
};

export function mapSkill(data: Partial<Skill>): SkillRaw {
  return {
    id: data.id,
    title: data.title
  };
}

export function mapSkillRaw(dataRaw: SkillRaw): Skill {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
  };
}
