export const WHATSAPP_NUMBER = '5511999999999';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const MENU_STORAGE_KEY = 'gu-lanches-menu';

export const defaultMenuData = [
  {
    category: 'Hambúrgueres',
    products: [
      {
        id: 'burger-1',
        name: 'X-Burguer',
        description: 'Pão macio, hambúrguer suculento, queijo derretido, alface e tomate.',
        price: 'R$ 18,90',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'burger-2',
        name: 'X-Bacon',
        description: 'Hambúrguer artesanal com bacon crocante, queijo, alface e tomate.',
        price: 'R$ 22,90',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'burger-3',
        name: 'X-Egg',
        description: 'Pão, hambúrguer, ovo, queijo e salada fresca em um clássico irresistível.',
        price: 'R$ 20,90',
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'burger-4',
        name: 'X-Tudo',
        description: 'Hambúrguer, bacon, ovo, queijo, presunto, alface e tomate.',
        price: 'R$ 26,90',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    category: 'Hot Dogs',
    products: [
      {
        id: 'dog-1',
        name: 'Hot Dog Completo',
        description: 'Pão fresquinho, salsicha, molho especial, milho, ervilha e batata palha.',
        price: 'R$ 15,90',
        image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dog-2',
        name: 'Hot Dog Bacon',
        description: 'Salsicha, bacon crocante, queijo, molho especial e batata palha.',
        price: 'R$ 18,90',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    category: 'Porções',
    products: [
      {
        id: 'portion-1',
        name: 'Batata Frita Especial',
        description: 'Batata crocante por fora, macia por dentro, perfeita para compartilhar.',
        price: 'R$ 16,90',
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'portion-2',
        name: 'Batata com Bacon e Cheddar',
        description: 'Porção generosa com cheddar cremoso e bacon crocante.',
        price: 'R$ 22,90',
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    category: 'Bebidas',
    products: [
      {
        id: 'drink-1',
        name: 'Refrigerante Lata',
        description: 'Coca-Cola, Guaraná ou Fanta bem gelados.',
        price: 'R$ 5,90',
        image: 'https://images.unsplash.com/photo-1629203432180-71e9b78e6f7d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'drink-2',
        name: 'Suco Natural 500ml',
        description: 'Laranja, limão ou maracujá preparados na hora.',
        price: 'R$ 8,90',
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  }
];

export function getSavedMenu() {
  if (typeof window === 'undefined') return defaultMenuData;

  const saved = window.localStorage.getItem(MENU_STORAGE_KEY);
  if (!saved) return defaultMenuData;

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : defaultMenuData;
  } catch {
    return defaultMenuData;
  }
}

export function saveMenu(menu) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menu));
}
