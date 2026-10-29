import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24">
      <p className="label">404</p>
      <h1 className="display mt-2 text-4xl">Page not found</h1>
      <p className="mt-3 text-secondary">The page moved or never existed.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/skills" className="btn btn-primary">
          Browse skills
        </Link>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </div>
    </div>
  );
}
