import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Trash2, Plus, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsApp from '@/components/FloatingWhatsApp.jsx';
import { defaultMenuData, getSavedMenu, saveMenu } from '@/data.js';

const initialForm = {
  category: 'Hambúrgueres',
  name: '',
  description: '',
  price: '',
  image: ''
};

function AdminPage() {
  const [menu, setMenu] = useState(getSavedMenu);
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  const categories = useMemo(() => menu.map((item) => item.category), [menu]);

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: `${Date.now()}`,
      name: form.name.trim(),
      description: form.description.trim(),
      price: form.price.trim(),
      image: form.image.trim() || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80'
    };

    if (!newProduct.name || !newProduct.description || !newProduct.price) {
      setMessage('Preencha nome, descrição e preço antes de adicionar.');
      return;
    }

    const updatedMenu = menu.map((section) =>
      section.category === form.category
        ? { ...section, products: [...section.products, newProduct] }
        : section
    );

    setMenu(updatedMenu);
    saveMenu(updatedMenu);
    setForm(initialForm);
    setMessage('Produto adicionado com sucesso no cardápio.');
  };

  const handleRemove = (category, productId) => {
    const updatedMenu = menu.map((section) =>
      section.category === category
        ? { ...section, products: section.products.filter((product) => product.id !== productId) }
        : section
    );

    setMenu(updatedMenu);
    saveMenu(updatedMenu);
    setMessage('Produto removido com sucesso.');
  };

  const resetMenu = () => {
    setMenu(defaultMenuData);
    saveMenu(defaultMenuData);
    setMessage('Cardápio restaurado para o modelo inicial.');
  };

  return (
    <>
      <Helmet>
        <title>Admin - Lanches</title>
        <meta name="description" content="Painel simples para adicionar ou remover produtos do cardápio da GU Lanches." />
      </Helmet>

      <Header />
      <FloatingWhatsApp />

      <main className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 rounded-3xl bg-primary text-primary-foreground p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-7 h-7" />
              <h1 className="text-3xl font-extrabold">Página administrativa</h1>
            </div>
            <p className="text-primary-foreground/90 max-w-3xl">
              Use esta página para adicionar produtos com foto ao cardápio ou remover itens antigos. As alterações ficam salvas no navegador.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <section className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Adicionar novo produto</h2>
                  <p className="text-muted-foreground">Preencha os dados abaixo para publicar um item no cardápio.</p>
                </div>
                <button
                  type="button"
                  onClick={resetMenu}
                  className="px-4 py-2 rounded-xl border border-border hover:bg-muted font-medium"
                >
                  Restaurar modelo
                </button>
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Categoria</label>
                  <select
                    value={form.category}
                    onChange={(event) => handleChange('category', event.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Nome do produto</label>
                  <input
                    value={form.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    placeholder="Ex: X-Salada Especial"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Descrição</label>
                  <textarea
                    value={form.description}
                    onChange={(event) => handleChange('description', event.target.value)}
                    placeholder="Descreva os ingredientes ou o diferencial do lanche"
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preço</label>
                    <input
                      value={form.price}
                      onChange={(event) => handleChange('price', event.target.value)}
                      placeholder="Ex: R$ 24,90"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">URL da foto</label>
                    <input
                      value={form.image}
                      onChange={(event) => handleChange('image', event.target.value)}
                      placeholder="Cole o link de uma imagem do produto"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold hover:bg-primary/90"
                >
                  <Plus className="w-5 h-5" />
                  Adicionar ao cardápio
                </button>

                {message && <p className="text-sm text-muted-foreground">{message}</p>}
              </form>
            </section>

            <section className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-2">Produtos cadastrados</h2>
              <p className="text-muted-foreground mb-6">Clique em remover quando quiser tirar um item do cardápio.</p>

              <div className="space-y-6 max-h-[800px] overflow-auto pr-1">
                {menu.map((section) => (
                  <div key={section.category}>
                    <h3 className="text-lg font-bold mb-3 text-primary">{section.category}</h3>
                    <div className="space-y-3">
                      {section.products.map((product) => (
                        <div key={product.id} className="flex items-center gap-4 rounded-2xl border border-border p-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 rounded-xl object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold truncate">{product.name}</p>
                            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                            <p className="text-sm font-bold text-primary mt-1">{product.price}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemove(section.category, product.id)}
                            className="inline-flex items-center gap-2 rounded-xl border border-red-200 text-red-600 px-3 py-2 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remover
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AdminPage;
