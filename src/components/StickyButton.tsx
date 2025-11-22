interface StickyButtonProps {
  visible: boolean;
}

export const StickyButton = ({ visible }: StickyButtonProps) => {
  const handleClick = () => {
    window.location.href = 'https://xaveco.online/';
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF1744] to-[#FF4081] text-white px-8 py-4 rounded-full font-bold shadow-2xl z-40 transition-all duration-300 hover:scale-105 ${
        visible ? 'bottom-6' : '-bottom-24'
      }`}
    >
      Ativar Xaveco – R$ 19,90/semana
    </button>
  );
};
