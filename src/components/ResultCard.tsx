import type { ResumeResult } from "../types/resume";

interface ResultCardProps {
  result: ResumeResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const { job_role, job_description, skills_match } = result;

  if (!skills_match) return null;

  return (
    <div className="bg-fuchsia-700 mt-8 p-6 rounded-2xl shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2 text-center capitalize">
        {job_role} - Analysis Result
      </h2>
      <p className="text-gray-200 mb-4  text-center break-words whitespace-pre-line">{job_description}</p>

      <div className="space-y-3">
        <div>
          <strong>Resume Skills:</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills_match.resume_skills?.map((skill, i) => (
              <span key={i} className="bg-fuchsia-500 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <strong>Matched Skills:</strong>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills_match.matched_skills?.map((skill, i) => (
              <span key={i} className="bg-green-500 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {skills_match.missing_skills?.length > 0 && (
          <div>
            <strong>Missing Skills:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills_match.missing_skills.map((skill, i) => (
                <span key={i} className="bg-red-500 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 text-center">
          <strong>Match Score:</strong>{" "}
          <span className="text-2xl font-bold text-green-400">
            {skills_match.match_score}%
          </span>
        </div>
      </div>
    </div>
  );
};


export default ResultCard;
