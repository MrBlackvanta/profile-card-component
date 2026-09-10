import { ProfileCard } from "@/components/card";
import { PageDecorations } from "@/components/decor";
import { Signature } from "@/components/layout";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh items-center-safe justify-center px-6 py-8">
      <PageDecorations />
      <main className="relative w-full max-w-87.5">
        <ProfileCard />
      </main>
      <Signature />
    </div>
  );
}
