export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5584981256333"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-2 group"
      title="Fale conosco no WhatsApp"
    >
      <span className="text-3xl">💬</span>
      <span className="hidden group-hover:inline-block font-semibold pr-2">
        WhatsApp
      </span>
    </a>
  );
}
