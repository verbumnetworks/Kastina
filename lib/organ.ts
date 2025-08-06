export interface PiousOrganization {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const piousOrganizations: PiousOrganization[] = [
  {
    id: 1,
    title: 'Catholic Women Organisation (CWO)',
    image: '/assets/logo.jpg',
    description:
      'A vibrant group of Catholic women committed to spiritual growth, family life, and community service.',
  },
  {
    id: 2,
    title: 'Catholic Men Organisation (CMO)',
    image: '/assets/popeleo1.jpeg',
    description:
      'Men of faith dedicated to leadership, service, and the spiritual development of the family and parish.',
  },
  {
    id: 3,
    title: 'Catholic Youth Organisation of Nigeria (CYON)',
    image: '/assets/cyon.jpeg',
    description:
      'Dynamic youth fostering Christian values through evangelization, community, and peer mentorship.',
  },
  {
    id: 4,
    title: 'Legion of Mary',
    image: '/assets/vexilium.jpeg',
    description:
      'A lay apostolic association focused on prayer, evangelization, and devotion to the Blessed Virgin Mary.',
  },
  {
    id: 5,
    title: 'Sacred Heart of Jesus and Immaculate Heart of Mary',
    image: '/assets/heart.jpeg',
    description:
      'Members promote the love of the Sacred Heart of Jesus and the Immaculate Heart of Mary through prayer and devotion.',
  },
  {
    id: 6,
    title: 'Block Rosary Crusade',
    image: '/assets/block.jpeg',
    description:
      'Children-led Marian prayer group focused on praying the Rosary and learning about the Catholic faith.',
  },
];
