# 📊 API de Vendas Mensais

API REST para gerenciamento de vendas mensais, com operações completas de CRUD, utilizando Node.js, Express e MongoDB.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose

---

## 📌 Funcionalidades

* Criar uma venda
* Listar todas as vendas
* Atualizar uma venda
* Deletar uma venda

---

## 📡 Rotas da API

| Método | Rota        | Descrição              |
| ------ | ----------- | ---------------------- |
| POST   | /vendas     | Criar uma nova venda   |
| GET    | /vendas     | Listar todas as vendas |
| PUT    | /vendas/:id | Atualizar uma venda    |
| DELETE | /vendas/:id | Deletar uma venda      |

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/api-mongodb-grafico.git
```

### 2. Entrar na pasta

```bash
cd api-mongodb-grafico
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Criar arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
MONGO_URI=sua_string_do_mongodb
PORT=3000
```

### 5. Rodar o servidor

```bash
npm run dev
```

---

## 🧪 Testando a API

Você pode testar usando:

* Postman
* Insomnia
* Thunder Client (VS Code)

---

## 📁 Estrutura do projeto

```
📦 API_MongoDB_Grafico
 ┣ 📜 server.js
 ┣ 📜 VendaMensal.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 .gitignore
```

---

## 🔐 Observações

* O arquivo `.env` não está incluído no repositório por motivos de segurança
* Certifique-se de configurar corretamente sua string de conexão do MongoDB

---

## 💼 Autor

Desenvolvido por Lucas Gaudard
📧 [Lucasgaudard07@gmail.com](mailto:Lucasgaudard07@gmail.com)

---

## 📌 Status do projeto

✅ Finalizado (versão inicial)
🚀 Em evolução (melhorias futuras)

---
