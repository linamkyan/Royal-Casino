/**
 * Game configuration constants
 */

export const GAME_CONFIG = {
  URL: 'https://gateway.eva-digital-playground.com/v0/casino/games/launch',
  PARAMS: {
    gameId: 'n2-novomatic-book-of-ra-deluxe',
    channel: 'desktop',
    partnerKey: '0wl',
    lobbyUrl: 'https://chinchincasino.com',
    mode: 'demo',
    language: 'en',
  },
} as const;

/**
 * Generate full game URL with parameters
 */
export const getGameUrl = (language: string = 'en'): string => {
  const params = new URLSearchParams({
    ...GAME_CONFIG.PARAMS,
    language,
  });

  return `${GAME_CONFIG.URL}?${params.toString()}`;
};
