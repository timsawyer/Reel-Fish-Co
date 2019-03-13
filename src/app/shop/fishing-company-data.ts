export interface IFishingCatch {
  name: string;
  amount: number;
  date: string;
}

export interface IFishingCompany {
  name: string;
  image: string;
  desc: string;
  location: string;
  catches: IFishingCatch[];
}

export const FishingCompanyData: IFishingCompany[] = [
  {
    name: 'Glacier Fish Company',
    location: 'Seattle, WA',
    desc: `
    Bruce Smith and his company, Glacier Fish Company, had been marketing hook-and-line caught wild
    salmon from southeast Alaska since 1978. Fish are caught using slow hook-and-line method to
    minimize stress, processed immediately on-board, and frozen within 90 minutes.
    `,
    image: '/assets/glacier-fish-co.png',
    catches: [
      {
        name: 'Pink Salmon',
        amount: 100,
        date: '3/13/19',
      },
      {
        name: 'King Salmon',
        amount: 190,
        date: '3/12/19',
      },
    ],
  },
  {
    name: 'Alaska Seafood',
    location: 'Naknek, AK',
    desc: `
    Our Alaska seafood is 100% WILD, which is even better than Organic. All natural, and heart 
    healthy. The pristine waters of Alaska's 34,000 mile coastline and rivers supply the sustainable 
    fishery from which we harvest our catch.
    `,
    image: '/assets/alaska-fish-co.jpg',
    catches: [
      {
        name: 'Sockeye Salmon',
        amount: 120,
        date: '3/13/19',
      },
      {
        name: 'Pink Salmon',
        amount: 40,
        date: '3/11/19',
      },
    ],
  },
  {
    name: 'Loki Fish Company',
    location: 'Seattle, WA',
    desc: `
    We aren't your average fish sellers. At Loki Fish Co, we're part of a unique group of small-boat
    fishermen who have chosen to bypass the processors and market their catch directly to you.
    We've been family owned and operated since our inception in 1979
    `,
    image: '/assets/loki-fish-co.jpg',
    catches: [
      {
        name: 'King Salmon',
        amount: 135,
        date: '3/12/19',
      },
      {
        name: 'Coho Salmon',
        amount: 75,
        date: '3/12/19',
      },
    ],
  },
];
