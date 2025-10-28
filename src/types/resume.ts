export interface SkillsMatch {
  resume_skills: string[];
  job_skills: string[];
  matched_skills: string[];
  missing_skills: string[];
  match_score: number;
}

export interface ResumeResult {
  resume_text: string;
  job_role: string;
  job_description: string;
  skills_match: SkillsMatch;
}
