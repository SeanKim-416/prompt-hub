import type { Prompt } from '../types/prompt';

function PromptCard({ title, description, tags }: Prompt) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default PromptCard;