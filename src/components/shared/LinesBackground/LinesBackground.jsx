export default function LinesBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
      <div className="w-[260px] h-[260px] border-2 border-lightColor rotate-45 absolute -top-20 -left-20"></div>
      <div className="w-[260px] h-[260px] border-2 border-lightColor rotate-6 absolute -top-10 -left-20"></div>

      <div className="w-[180px] h-[180px] border-2 border-lightColor rotate-12 absolute bottom-10 right-2"></div>
      <div className="w-[180px] h-[180px] border-2 border-lightColor rotate-45 absolute bottom-10 right-2"></div>
    </div>
  );
}
