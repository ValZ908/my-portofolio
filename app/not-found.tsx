import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-8xl font-bold text-blue-400/30">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground max-w-sm">
        Looks like this route doesn&apos;t exist. Let&apos;s get you back to the portfolio.
      </p>
      <Link
        href="/"
        className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 text-sm font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
