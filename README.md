# 📊 API de Vendas Mensais

Projeto Fullstack para gerenciamento de vendas mensais, com autenticação de usuários utilizando JWT, CRUD completo e integração entre frontend e backend.

---

## 🚀 Tecnologias utilizadas

### 🔧 Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT (Json Web Token)
* Bcrypt

### 🎨 Frontend

* React (Vite)
* Axios
* CSS

---

## 📌 Funcionalidades

### 🔐 Autenticação

✔️ Cadastro de usuário
✔️ Login com geração de token JWT
✔️ Proteção de rotas

### 📊 Vendas

✔️ Criar uma venda
✔️ Listar todas as vendas
✔️ Atualizar uma venda
✔️ Deletar uma venda

---

## 📡 Rotas da API

### 🔐 Auth

| Método | Rota      | Descrição           |
| ------ | --------- | ------------------- |
| POST   | /register | Criar usuário       |
| POST   | /login    | Login e gerar token |

### 📊 Vendas (Protegidas 🔒)

| Método | Rota        | Descrição       |
| ------ | ----------- | --------------- |
| POST   | /vendas     | Criar venda     |
| GET    | /vendas     | Listar vendas   |
| PUT    | /vendas/:id | Atualizar venda |
| DELETE | /vendas/:id | Deletar venda   |

---

## 🔐 Autenticação JWT

As rotas de vendas são protegidas.

É necessário enviar o token no header:

```
Authorization: Bearer SEU_TOKEN
```

---

## ⚙️ Como rodar o projeto

### 🔹 1. Clonar repositório

```
git clone https://github.com/seu-usuario/api-mongodb-grafico.git
```

### 🔹 2. Entrar na pasta

```
cd api-mongodb-grafico
```

### 🔹 3. Instalar dependências

```
npm install
```

### 🔹 4. Criar arquivo .env

```
MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta
PORT=3000
```

### 🔹 5. Rodar o backend

```
node server.js
```

---

## 🎨 Rodar o Frontend

```
cd Front_Mongo_VENDAS
npm install
npm run dev
```

---

## 🧪 Testando a API

Você pode testar usando:

* Insomnia
* Postman
* Thunder Client

---

## 📸 Demonstração

👉 Adicione aqui prints do projeto:

* 🔹 Login funcionando
* 🔹 Dashboard
* 🔹 Requisições no Insomnia

---

## 📁 Estrutura do projeto

```
📦 API_MongoDB_VENDAS
 ┣ 📂 Models
 ┃ ┣ 📜 User.js
 ┃ ┗ 📜 VendaMensal.js
 ┣ 📜 server.js
 ┣ 📜 package.json
 ┣ 📜 .env
 ┗ 📜 .gitignore

📦 Front_Mongo_VENDAS
 ┣ 📂 src
 ┣ 📜 package.json
```

---

## 🔐 Observações

* O arquivo `.env` não está incluído por segurança
* O backend precisa estar rodando para o frontend funcionar
* As rotas protegidas exigem token JWT válido

---

## 💼 Autor

Desenvolvido por **Lucas Gaudard**
📧 [Lucasgaudard07@gmail.com](mailto:Lucasgaudard07@gmail.com)

---

## 📌 Status do projeto

✅ Versão inicial finalizada
🚀 Em evolução (melhorias futuras)

---

## 🚀 Próximas melhorias

* Melhorar UI do frontend
* Deploy da aplicação
* Validações mais robustas
* Refresh Token
* Filtros e gráficos de vendas

