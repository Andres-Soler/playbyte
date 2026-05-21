export default function Home() {
  const games = [
    {
      name: 'Rocket League',
      mood: 'Tryhard',
      time: 'Short',
      desc: 'Partidas rápidas, competitivas y llenas de caos.',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Minecraft',
      mood: 'Relax',
      time: 'Long',
      desc: 'Construye cosas tranquilamente mientras escuchas música.',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'DOOM Eternal',
      mood: 'Intense',
      time: 'Medium',
      desc: 'Destruye demonios con música pesada de fondo.',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Stardew Valley',
      mood: 'Relax',
      time: 'Long',
      desc: 'Una granjita bonita para descansar del mundo.',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const randomGame = games[Math.floor(Math.random() * games.length)]

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#6d28d9_0%,transparent_35%)] opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500 blur-3xl opacity-20" />

      <section className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                queue://start
              </p>

              <h1 className="mb-4 text-5xl font-black leading-tight lg:text-6xl">
                WHAT SHOULD
                <br />
                I PLAY?
              </h1>

              <p className="mb-8 text-lg text-zinc-300">
                Una app futurista que recomienda juegos según tu mood.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Mood
                  </label>

                  <select className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 p-4 outline-none transition focus:border-cyan-400">
                    <option>Relax</option>
                    <option>Tryhard</option>
                    <option>Intense</option>
                    <option>Random</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Tiempo disponible
                  </label>

                  <select className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 p-4 outline-none transition focus:border-purple-400">
                    <option>15 minutos</option>
                    <option>1 hora</option>
                    <option>Toda la noche</option>
                  </select>
                </div>

                <button className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 p-4 text-lg font-bold transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  GENERATE GAME
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50">
              <img
                src={randomGame.image}
                alt={randomGame.name}
                className="h-full w-full object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-3 flex gap-2">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {randomGame.mood}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                    {randomGame.time}
                  </span>
                </div>

                <h2 className="mb-3 text-4xl font-black">
                  {randomGame.name}
                </h2>

                <p className="max-w-md text-zinc-300">
                  {randomGame.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
