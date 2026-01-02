import Link from "next/link";

interface IdeaCardProps {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  status: "draft" | "structured";
}

const IdeaCard = ({ id, title, preview, createdAt, status }: IdeaCardProps) => {
  return (
    <Link
      href={`/chat/${id}`}
      className="block border border-border rounded-md p-4 hover:bg-accent/50 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground truncate">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {preview}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="text-xs text-muted-foreground">{createdAt}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              status === "structured"
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {status === "structured" ? "Structured" : "Draft"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default IdeaCard;
