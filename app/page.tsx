"use client"; // 添加这行来声明这是一个客户端组件

import { useState } from "react"

export default function Component() {
  const [message, setMessage] = useState("") // 现在可以使用 useState 了

  // 添加点击事件处理函数
  const handleClick = () => {
    setMessage("你点击了按钮！")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Gaming For Fun</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">组织你的完美比赛</h2>
        <p className="text-xl mb-6">欢迎来到我的第一个 React 网站。</p>
        {/* 使用原生的 button 元素替代 Button 组件 */}
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          点击我！
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
