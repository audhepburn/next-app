// import { Button } from "@/components/ui/button"
"use client";
import { useState } from "react"

export default function Component() {
  const [message, setMessage] = useState("") // 添加状态来存储消息

  // 添加点击事件处理函数
  const handleClick = () => {
    setMessage("Lotte")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Gaming For Fun</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Organize Your Tournament. Perfect. </h2>
        <p className="text-xl mb-6">Welcome to my first React website.</p>
        <button onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Section review
        </button>
        {message && <p className="mt-4 text-lg">{message}</p>} {/* 显示消息 */}
      </main>
      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hello World Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}