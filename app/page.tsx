'use client'

import { useState } from 'react'

export default function Home() {
    const games = [
    {
      name: 'Rocket League',
      mood: 'Tryhard',
      time: 'Short',
      desc: 'Fútbol con carros y caos absoluto.',
      image: '/games/rocket.jpg',
    },

    {
      name: 'Minecraft',
      mood: 'Relax',
      time: 'Long',
      desc: 'Construye, explora y escucha música relajante.',
      image: '/games/minecraft.png',
    },

    {
      name: 'DOOM Eternal',
      mood: 'Intense',
      time: 'Medium',
      desc: 'Dispara primero, pregunta después.',
      image: '/games/Doom.jpg',
    },

    {
      name: 'Stardew Valley',
      mood: 'Relax',
      time: 'Long',
      desc: 'Una vida tranquila lejos del caos.',
      image: '/games/Stardew.jpg',
    },

    {
      name: 'Cyberpunk 2077',
      mood: 'Intense',
      time: 'Long',
      desc: 'Night City nunca duerme.',
      image: '/games/Cyberpunk.jpg',
    },

    {
      name: 'Terraria',
      mood: 'Relax',
      time: 'Medium',
      desc: 'Minería, bosses y aventuras pixeladas.',
      image:'/games/Terraria.jpg',
    },

    {
      name: 'Hollow Knight',
      mood: 'Relax',
      time: 'Medium',
      desc: 'Explora un reino oscuro y hermoso.',
      image:'/games/Hollownight.png',
    },

    {
      name: 'Valorant',
      mood: 'Tryhard',
      time: 'Short',
      desc: 'Precisión, habilidad y rage.',
      image:'/games/Valorant.jpg',
    },

    {
      name: 'Celeste',
      mood: 'Relax',
      time: 'Short',
      desc: 'Escala una montaña mientras reflexionas.',
      image: '/games/Celeste.jpg',
    },

    {
      name: 'The Witcher 3',
      mood: 'Relax',
      time: 'Long',
      desc: 'Monstruos, espadas y una historia gigante.',
      image: '/games/TheWitcher.jpg',
    },
  ]

  const [currentGame, setCurrentGame] = useState(games[0])

  const generateGame = () => {
    const random =
      games[Math.floor(Math.random() * games.length)]

    setCurrentGame(random)
  }

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
                Juegos para
                <br />
                jugar
              </h1>

              <p className="mb-8 text-lg text-zinc-300">
                Una app futurista que recomienda juegos según tu mood.
              </p>

              <button
                onClick={generateGame}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 p-4 text-lg font-bold transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                GENERATE GAME
              </button>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50">
              <img
                src={currentGame.image}
                alt={currentGame.name}
                className="h-full w-full object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-3 flex gap-2">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                    {currentGame.mood}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                    {currentGame.time}
                  </span>
                </div>

                <h2 className="mb-3 text-4xl font-black">
                  {currentGame.name}
                </h2>

                <p className="max-w-md text-zinc-300">
                  {currentGame.desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}