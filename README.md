
# Gerador de Senhas - Frontend em Angular

Este é o frontend da aplicação **Gerador de Senhas**, desenvolvido com Angular.  
Ele fornece uma interface amigável para gerar senhas seguras com opções personalizáveis.  
O backend deste projeto foi implementado utilizando **.NET Core** e **AWS Lambda**, e você pode encontrá-lo [aqui](#).

---

## 🔐 Funcionalidades

Gere senhas seguras com as seguintes opções personalizáveis:

- 🔢 Tamanho da senha  
- 🔠 Inclusão de letras maiúsculas  
- 🔡 Inclusão de letras minúsculas  
- 🔢 Inclusão de números  
- 💥 Inclusão de caracteres especiais  
- 📱 Interface responsiva e intuitiva

---

## 🛠️ Tecnologias Utilizadas

- **Angular CLI**: Versão 19.2.0  
- **HTML/CSS**: Para a interface do usuário  
- **TypeScript**: Para a lógica da aplicação

---

## 🚀 Primeiros Passos

### ✅ Pré-requisitos

Certifique-se de que os seguintes itens estão instalados no seu sistema:

- [Node.js](https://nodejs.org/) – Versão LTS recomendada  
- [Angular CLI](https://angular.io/cli) – Versão 19.2.0 ou superior

### 📥 Instalação

Clone este repositório:

```bash
git clone https://github.com/Everton-Buenno/Password-Generator-Angular.git
```

Navegue até o diretório do projeto:

```bash
cd Password-Generator-Angular
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a Aplicação

Inicie o servidor de desenvolvimento com o comando:

```bash
ng serve
```

Depois, abra seu navegador e acesse:

[http://localhost:4200/](http://localhost:4200/)

> A aplicação será recarregada automaticamente sempre que você fizer alterações nos arquivos-fonte.

---

## 🔗 Integração com o Backend

Este frontend se comunica com o backend, que foi implementado com **.NET Core** e **AWS Lambda**.  
Você pode encontrar o repositório do backend [aqui](https://github.com/Everton-Buenno/PasswordGenerator-AWS-Lambda-DotNet).

---

## 📡 Exemplo de Requisição à API

A API do backend aceita o seguinte JSON para gerar uma senha:

```json
{
  "length": 16,
  "includeUppercase": true,
  "includeLowercase": true,
  "includeNumbers": true,
  "includeSpecialChars": true
}
```

---

## 🏗️ Gerando para Produção

Para gerar a build de produção da aplicação, execute:

```bash
ng build --prod
```

Os arquivos gerados estarão disponíveis na pasta `dist/`.  
A build já vem otimizada para melhor desempenho.

---

## 🤝 Contribuições

Contribuições são bem-vindas!  
Se você tiver sugestões, melhorias ou correções, sinta-se à vontade para:

- Abrir uma **issue**
- Enviar um **pull request**

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.  


---

## 📬 Suporte

Caso tenha dúvidas ou precise de ajuda, você pode:

- Entrar em contato comigo  
- Abrir uma **issue** no repositório

---
