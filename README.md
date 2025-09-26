# 📝 QuickList - Lista de Compras

Um projeto de lista de compras interativa desenvolvido como desafio da trilha Fullstack da Rocketseat. Este projeto foi criado para treinar conceitos fundamentais de JavaScript, manipulação da DOM, funções e eventos.

## 🎯 Sobre o Projeto

Este é o primeiro projeto que desenvolvi sozinho em JavaScript, focado no aprendizado prático de:
- **JavaScript**: Lógica de programação e manipulação de dados
- **Manipulação da DOM**: Criação, modificação e remoção de elementos
- **Funções e Eventos**: Interatividade e responsividade
- **HTML e CSS**: Estrutura e estilização do zero, reproduzindo um protótipo do Figma

## ✨ Funcionalidades

- ➕ **Adicionar itens**: Digite um novo item e pressione Enter ou clique em "Adicionar item"
- ✅ **Marcar como concluído**: Clique no checkbox para marcar itens como comprados
- 🗑️ **Remover itens**: Clique no ícone de lixeira para excluir itens da lista
- 🔔 **Notificação**: Alert visual quando um item é removido
- 📱 **Design responsivo**: Interface adaptada para mobile e desktop

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com CSS Grid, Flexbox e variáveis CSS
- **JavaScript (ES6+)**: Lógica de interação e manipulação da DOM
- **Fonts**: Google Fonts (Inter)

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Navegue até a pasta do projeto:
```bash
cd Lista-de-compras
```

3. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .
```

## 📁 Estrutura do Projeto

```
Lista-de-compras/
├── assets/                 # Imagens e ícones
│   ├── checkbox-*.svg     # Estados do checkbox
│   ├── trash.svg          # Ícone de lixeira
│   ├── title.svg          # Logo do projeto
│   └── ...
├── styles/                # Arquivos CSS
│   ├── global.css         # Estilos globais
│   ├── index.css          # Estilos específicos
│   ├── styles.css         # Estilos principais
│   └── utility.css        # Classes utilitárias
├── index.html             # Página principal
├── scripts.js             # Lógica JavaScript
└── README.md              # Documentação
```

## 🎨 Design

O projeto foi desenvolvido seguindo um protótipo do Figma fornecido pela Rocketseat, com foco em:
- Interface limpa e intuitiva
- Design responsivo (mobile-first)
- Acessibilidade com labels e aria-labels
- Feedback visual para interações

## 🔧 Funcionalidades JavaScript

### Adicionar Itens
```javascript
function addItem() {
    const itemText = inputItem.value.trim();
    if (itemText) {
        const newItem = createListItem(itemText);
        itemList.appendChild(newItem);
        inputItem.value = "";
        inputItem.focus();
    }
}
```

### Criar Elementos Dinamicamente
```javascript
function createListItem(itemText) {
    const newItem = document.createElement("label");
    // ... configuração do elemento
    return newItem;
}
```

### Gerenciar Eventos
- Event listeners para botões e teclado
- Prevenção de comportamento padrão
- Manipulação de estados visuais

## 📱 Responsividade

- **Mobile**: Layout em coluna única, otimizado para telas pequenas
- **Desktop**: Layout em grid com input e botão lado a lado

## 🎓 Aprendizados

Este projeto me permitiu praticar:
- Criação dinâmica de elementos HTML
- Manipulação de eventos (click, keypress)
- Gerenciamento de estado da aplicação
- CSS Grid e Flexbox para layouts
- Acessibilidade web
- Design responsivo

## 📚 Próximos Passos

- [ ] Persistência de dados com localStorage
- [ ] Categorização de itens
- [ ] Funcionalidade de edição
- [ ] Contador de itens pendentes
- [ ] Temas (claro/escuro)

---

**Desenvolvido como parte do desafio da trilha Fullstack da Rocketseat** 🚀
