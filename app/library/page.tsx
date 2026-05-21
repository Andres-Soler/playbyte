'use client'

import { useState } from 'react'

export default function Page() {
  const [gameName, setGameName] = useState('')
  const [games, setGames] = useState([
    'Rocket League',
    'Minecraft',
    'Stardew Valley',
  ])

  const addGame = () => {
    if (gameName.trim() === '') return

    setGames([...games, gameName])
    setGameName('')
  }

  const removeGame = (index: number) => {
    const updatedGames = games.filter(
      (_, i) => i !== index
    )

    setGames(updatedGames)
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-400">
          library://games
        </p>

        <h1 className="mb-8 text-5xl font-black">
          YOUR
          <br />
          LIBRARY
        </h1>

        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Add a game..."
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="flex-1 rounded-2xl border border-white/10 bg-zinc-900 p-4 outline-none"
          />

          <button
            onClick={addGame}
            className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 px-6 font-bold transition hover:scale-105"
          >
            ADD
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {games.map((game, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5 transition hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  {game}
                </h2>

                <button
                  onClick={() => removeGame(index)}
                  className="text-sm text-red-400 transition hover:text-red-300"
                >
                  Remove
                </button>
              </div>

              <p className="mt-2 text-zinc-400">
                Installed in your cyber library.
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}