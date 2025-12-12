import { PXSmall } from "@/components/ui/typography";

interface FooterProps {
  copyright: string;
  location: string;
  email: string;
}

export function Footer({ copyright, location, email }: FooterProps) {
  return (
    <footer className="bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <PXSmall className="text-slate-500">{copyright}</PXSmall>
        <div className="flex flex-wrap gap-3">
          <span>{location}</span>
          <span className="hidden text-slate-600 sm:inline">·</span>
          <a
            href={`mailto:${email}`}
            className="text-slate-400 hover:text-slate-200"
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
