import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-secondary mb-6">404</div>
      <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">Oops! The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the good stuff.</p>
      <Link href="/" className="btn-accent px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center justify-center">
        Go Back Home
      </Link>
    </div>
  );
}
