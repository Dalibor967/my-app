'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <Card className="w-[360px] shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-blue-600">Hello World 🚀</h1>
          <p className="text-sm text-gray-600">
            Next.js + Tailwind + shadcn/ui je spreman.
          </p>
          <Button onClick={() => alert("Klik!")}>Klikni me</Button>
        </CardContent>
      </Card>
    </main>
  )
}