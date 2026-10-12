export const BRAND = {
  name: 'ZESH',
  tagline: 'The Fit Which Fits Your Budget',
  description:
    'Comfort-first designs with modern fits for work, casual, and weekend wear. ZESH creates women\u2019s bottom wear designed with comfort, fit, and everyday style in mind.',
  longDescription:
    'ZESH creates women\u2019s bottom wear designed with comfort, fit, and everyday style in mind. Our collections are thoughtfully crafted to suit modern lifestyles, offering versatile designs that are easy to wear for work, casual outings, and daily comfort.',
  onlineStoreUrl: 'https://myzesh.in/',
  instagramUrl: 'https://www.instagram.com/myzesh.in',
  logoUrl:
    'https://myzesh.in/wp-content/uploads/2026/01/cropped-ChatGPT-Image-Jan-14-2026-01_38_56-AM-1.png',
  hours: 'Mon \u2013 Sat: 10:00 AM \u2013 7:00 PM',
  startingPrice: '\u20b9399',
  comboOffer: 'Pick Any 3 for Just \u20b9999',
};

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const CATEGORIES: ProductCategory[] = [
  {
    slug: 'pants',
    name: 'Pants',
    description: 'Tailored fits designed for work, casual, and evening wear.',
    image:
      'https://images.pexels.com/photos/7205905/pexels-photo-7205905.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman wearing tailored pants in a studio fashion editorial',
  },
  {
    slug: 'joggers',
    name: 'Joggers',
    description: 'Comfortable joggers blending sporty ease with everyday style.',
    image:
      'https://images.pexels.com/photos/39457735/pexels-photo-39457735.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Comfortable gray joggers for women designed for casual wear',
  },
  {
    slug: 'trousers',
    name: 'Trousers',
    description: 'Refined trousers with clean lines for a polished silhouette.',
    image:
      'https://images.pexels.com/photos/8946961/pexels-photo-8946961.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Fashionable woman in wide-leg trousers posing outdoors',
  },
  {
    slug: 'palazzos',
    name: 'Palazzos',
    description: 'Flowing palazzos for effortless comfort and graceful movement.',
    image:
      'https://images.pexels.com/photos/2659787/pexels-photo-2659787.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman in white palazzo pants posing indoors with dramatic shadows',
  },
  {
    slug: 'leggings',
    name: 'Leggings',
    description: 'Soft, stretch-fit leggings for active days and daily comfort.',
    image:
      'https://images.pexels.com/photos/29259720/pexels-photo-29259720.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman wearing leggings in a fitness and lifestyle setting',
  },
  {
    slug: 'track-pants',
    name: 'Track Pants',
    description: 'Athletic track pants for movement, comfort, and sporty style.',
    image:
      'https://images.pexels.com/photos/33604175/pexels-photo-33604175.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Confident young woman in stylish athletic track pants',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/9082613/pexels-photo-9082613.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Close-up of elegant white pantsuit showcasing refined design',
    category: 'Editorial',
  },
  {
    src: 'https://images.pexels.com/photos/2659787/pexels-photo-2659787.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman in white palazzo pants with dramatic studio lighting',
    category: 'Palazzos',
  },
  {
    src: 'https://images.pexels.com/photos/39457735/pexels-photo-39457735.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Gray joggers designed for women\u2019s casual and sportswear',
    category: 'Joggers',
  },
  {
    src: 'https://images.pexels.com/photos/8946961/pexels-photo-8946961.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman in wide-leg trousers posing with sunglasses outdoors',
    category: 'Trousers',
  },
  {
    src: 'https://images.pexels.com/photos/29259720/pexels-photo-29259720.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman in green top and gray leggings showcasing fitness fashion',
    category: 'Leggings',
  },
  {
    src: 'https://images.pexels.com/photos/33604175/pexels-photo-33604175.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Confident woman in stylish athletic track pants',
    category: 'Track Pants',
  },
  {
    src: 'https://images.pexels.com/photos/5253944/pexels-photo-5253944.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
    alt: 'Three women in stylish pants showcasing diverse fashion styles',
    category: 'Editorial',
  },
  {
    src: 'https://images.pexels.com/photos/18978261/pexels-photo-18978261.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Woman in palazzo pants in an urban setting',
    category: 'Palazzos',
  },
  {
    src: 'https://images.pexels.com/photos/7205905/pexels-photo-7205905.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Fashion model in leather pants against white studio background',
    category: 'Pants',
  },
  {
    src: 'https://images.pexels.com/photos/39646826/pexels-photo-39646826.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Young woman in fashionable outfit posing by a wall',
    category: 'Editorial',
  },
  {
    src: 'https://images.pexels.com/photos/10042912/pexels-photo-10042912.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Athletic woman in sportswear stretching on outdoor bleachers',
    category: 'Leggings',
  },
  {
    src: 'https://images.pexels.com/photos/13102000/pexels-photo-13102000.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    alt: 'Stylish woman in windbreaker and joggers against metal door',
    category: 'Joggers',
  },
];

export type Highlight = {
  icon: string;
  title: string;
  description: string;
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'Truck',
    title: 'Free Shipping',
    description:
      'Free shipping on all orders with \u20b9999 purchase. Get your favourite styles delivered to your doorstep.',
  },
  {
    icon: 'Headphones',
    title: '24/7 Support',
    description:
      'Our support team is available around the clock to assist with orders, sizing, and product queries.',
  },
  {
    icon: 'RefreshCw',
    title: '7-Day Replacement',
    description:
      'Easy replacement within 7 days for unused items, ensuring a smooth and worry-free shopping experience.',
  },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact Us', path: '/contact' },
];
