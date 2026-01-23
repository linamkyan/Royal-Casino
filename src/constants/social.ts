
export interface SocialLink {
  icon: string;
  label: string;
  className: string;
  url: string;
  external: boolean;
}

export const SOCIAL_LINKS_CONFIG: Omit<SocialLink, 'icon'>[] = [
  {
    label: 'Instagram',
    className: 'instagram',
    url: 'https://instagram.com/casinoroyale',
    external: true,
  },
  {
    label: 'Telegram',
    className: 'telegram',
    url: 'https://t.me/casinoroyale_official',
    external: true,
  },
  {
    label: 'X',
    className: 'x',
    url: 'https://x.com/casinoroyale',
    external: true,
  },
  {
    label: 'Email',
    className: 'email',
    url: 'mailto:support@casinoroyale.com',
    external: false,
  },
] as const;
