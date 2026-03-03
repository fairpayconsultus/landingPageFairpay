import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href="https://wa.me/51734548786"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 whatsapp-pulse"
      >
        <MessageCircle size={24} className="text-white sm:hidden" />
        <MessageCircle size={28} className="text-white hidden sm:block" />
      </a>
    </div>
  )
}

export default WhatsappButton
