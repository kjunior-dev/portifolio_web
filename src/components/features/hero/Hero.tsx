import {IHeroProps} from "@/components/template/HeroTemplate/HeroTemplate";
import {HeroProfile} from "@/components/features/hero/components/heroProfile";
import {AvatarProfile} from "@/components/features/hero/components/avatarProfile";

export function Hero({
  hero
}: IHeroProps){

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f7fa_0,#f8fafc_34%,#ffffff_72%)] pt-28 sm:pt-32"
    >
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
        {/* HeroProfile */}
        <HeroProfile hero={hero}/>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <div className="grid gap-6 p-5 sm:p-6">
               {/* AvatarProfile */}
                <AvatarProfile hero={hero}/>

                <div className="grid gap-3 sm:grid-cols-2">
                  {hero?.competencias.map((item) => (
                    <div key={item?.ordem} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm font-medium leading-6 text-slate-100">{item?.titulo}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-sm leading-6 text-cyan-50">
                    {hero?.objetivo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
