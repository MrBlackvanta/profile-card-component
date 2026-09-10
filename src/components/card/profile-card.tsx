import avatar from "@/assets/image-abdelrhman.webp";
import avatar2x from "@/assets/image-abdelrhman@2x.webp";
import { age, profileName } from "@/data";
import ProfileStats from "./profile-stats";

export default function ProfileCard() {
  return (
    <article className="rounded-card bg-card shadow-card motion-safe:animate-settle overflow-clip text-center">
      <div className="v-band-pattern bg-band h-35 bg-center bg-no-repeat" />
      <img
        src={avatar.src}
        srcSet={`${avatar.src} 1x, ${avatar2x.src} 2x`}
        alt=""
        width={96}
        height={96}
        fetchPriority="high"
        className="ring-card motion-safe:animate-pop mx-auto -mt-12 block rounded-full ring-5"
      />
      <div className="text-body mt-6 flex items-baseline justify-center gap-2.25 px-4">
        <h1 className="text-ink font-bold">{profileName}</h1>
        <span className="text-ink-muted">{age}</span>
      </div>
      <p className="text-meta text-ink-muted mt-3.25">Cairo</p>
      <hr className="border-rule mt-7" />
      <ProfileStats />
    </article>
  );
}
