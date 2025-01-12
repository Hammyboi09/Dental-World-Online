export const styles = {
  container: `
    fixed right-4 top-28 z-50
    pointer-events-none
    h-[60vh]
  `,
  wrapper: `
    relative h-full flex items-center justify-center
    pointer-events-auto
  `,
  sectionList: `
    relative flex flex-col justify-between h-full py-4
    z-10
  `,
  sectionButton: `
    group relative flex items-center
    transition-all duration-300 ease-out
  `,
  sectionLabel: `
    absolute right-full mr-4 px-4 py-2
    bg-gray-900/40 backdrop-blur-md
    border border-white/10 rounded-lg
    text-sm font-medium text-white
    transform transition-all duration-300
    shadow-lg shadow-black/10
  `,
  iconContainer: {
    base: `
      relative flex items-center justify-center
      w-10 h-10 rounded-full
      backdrop-blur-md border-2
      transition-all duration-300
      cursor-pointer
      overflow-hidden
      focus:outline-none
    `,
    active: `
      border-transparent
      bg-gradient-to-br from-orange-400/80 to-orange-600/80
      shadow-lg shadow-orange-400/20
    `,
    inView: `
      border-white/30
      hover:border-orange-400/50
      hover:bg-gradient-to-br hover:from-orange-400/10 hover:to-orange-600/10
    `
  },
  glowEffect: `
    absolute inset-0
    bg-gradient-to-br from-orange-400/20 to-orange-600/20
    blur-xl
  `,
  icon: {
    base: `
      w-5 h-5
      transition-all duration-300
      relative z-10
    `,
    active: `
      text-white
      filter drop-shadow-lg
      scale-110
    `,
    inView: `
      text-white/70
      group-hover:text-white
      group-hover:scale-105
    `
  },
  progressBar: {
    container: `
      absolute right-4 top-0 bottom-0
      w-1.5 rounded-full
      bg-white/10
      overflow-hidden
      z-0
    `,
    fill: `
      w-full bg-gradient-to-t from-orange-600 to-orange-400
      rounded-full
      transition-all duration-300
      relative
    `,
    glow: `
      absolute inset-0
      bg-gradient-to-t from-orange-600 to-orange-400
      blur-sm
    `,
    shimmer: `
      absolute inset-0
      bg-gradient-to-b from-transparent via-white/30 to-transparent
    `
  }
} as const;