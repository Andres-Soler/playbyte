'use client'

import { useState } from 'react'

export default function Page() {
  const games = [
    {
      name: 'Rocket League',
      mood: 'Tryhard',
      time: '15 minutos',
      desc: 'Perfecto para partidas rápidas y competitivas.',
    },
    {
      name: 'Minecraft',
      mood: 'Relax',
      time: 'Toda la noche',
      desc: 'Construye tranquilamente y relájate.',
    },
    {
      name: 'Stardew Valley',
      mood: 'Relax',
      time: '1 hora',
      desc: 'Farmea, pesca y descansa un rato.',
    },
    {
      name: 'DOOM Eternal',
      mood: 'Intense',
      time: '1 hora',
      desc: 'Acción rápida para liberar estrés.',
    },
  ]

  const [selectedMood, setSelectedMood] = useState('Relax')
  const [selectedTime, setSelectedTime] = useState('1 hora')
  const [recommendedGame, setRecommendedGame] = useState<any>(null)

  const generateGame = () => {
    const filteredGames = games.filter(
      (game) =>
        game.mood === selectedMood &&
        game.time === selectedTime
    )

    if (filteredGames.length === 0) {
      setRecommendedGame({
        name: 'No game found',
        desc: 'Intenta con otra combinación.',
      })
      return
    }

    const randomGame =
      filteredGames[
        Math.floor(Math.random() * filteredGames.length)
      ]

    setRecommendedGame(randomGame)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
          mood://scanner
        </p>

        <h1 className="mb-8 text-5xl font-black">
          GAME
          <br />
          SELECTOR
        </h1>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-zinc-400">
              Mood
            </label>

            <select
              value={selectedMood}
              onChange={(e) =>
                setSelectedMood(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-zinc-900 p-4 outline-none"
            >
              <option>Relax</option>
              <option>Tryhard</option>
              <option>Intense</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-zinc-400">
              Tiempo disponible
            </label>

            <select
              value={selectedTime}
              onChange={(e) =>
                setSelectedTime(e.target.value)
              }
              className="w-full rounded-2xl border border-white/10 bg-zinc-900 p-4 outline-none"
            >
              <option>15 minutos</option>
              <option>1 hora</option>
              <option>Toda la noche</option>
            </select>
          </div>

          <button
            onClick={generateGame}
            className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 p-4 text-lg font-bold transition hover:scale-[1.02]"
          >
            FIND GAME
          </button>
        </div>

        {recommendedGame && (
          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-zinc-900/70 p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Recommendation Found
            </p>

            <h2 className="mb-3 text-3xl font-black">
              {recommendedGame.name}
            </h2>

            <p className="text-zinc-300">
              {recommendedGame.desc}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}