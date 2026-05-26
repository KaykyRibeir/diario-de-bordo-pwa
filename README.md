# Diário de Bordo PWA

Aplicação Web Progressiva (PWA) desenvolvida para registro de atividades diárias, com suporte offline e instalação como aplicativo.

---

## 🚀 Funcionalidades

- Criar entradas com título, descrição e data
- Listar entradas registradas
- Remover entradas
- Persistência de dados com localStorage
- Funcionamento offline com Service Worker
- Instalação como PWA
- Interface responsiva

---

## ⚙️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Service Worker
- Manifest.json

---

## 📊 Análise de Performance (Lighthouse)

Foi realizada análise de performance utilizando o Lighthouse no Chrome DevTools.

### 🔴 Antes das otimizações
- Performance: 100
- Accessibility: 77
- Best Practices: 100
- SEO: 90

### 🟢 Depois das otimizações
- Performance: 100
- Accessibility: 92
- Best Practices: 100
- SEO: 100

---

## 🚀 Melhorias Aplicadas

- Conversão de imagens para formato WebP
- Implementação de lazy loading em imagens (`loading="lazy"`)
- Remoção de código não utilizado
- Ajustes de SEO e acessibilidade
- Melhor organização do código
- Uso de cache via Service Worker (PWA)

## 📁 Estrutura do Projeto

```bash
index.html
style.css
script.js
manifest.json
service-worker.js
/icons

Autor
Kayky Ribeiro
---

O que mudou?

Agora você tem:

✔️ comparação antes/depois  
✔️ explicação de melhorias  
✔️ evidência obrigatória (prints)  
✔️ parte de performance (que estava faltando)  
