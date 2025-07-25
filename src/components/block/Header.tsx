import { Logo } from './Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Logo /> Floa Lite
      </div>
      <nav className="space-x-6 text-sm">
        {/* <Link href="/login" className={cn(buttonVariants({ variant: 'default', }))}>Sign in</Link> */}
      </nav>
    </header>
  );
}
