# Concessionaria

Landing page e vitrine de estoque para a Fenix Veiculos, desenvolvida com Next.js, React e Tailwind CSS.

## Visao geral

O projeto entrega um site institucional para concessionaria com:

- pagina inicial com hero, destaques e provas sociais
- vitrine de veiculos com filtros
- pagina de detalhes por veiculo
- paginas de contato, financiamento e sobre
- CTAs integrados ao WhatsApp

Os dados do estoque estao mockados localmente em `data/vehicles.ts` e as informacoes de contato ficam centralizadas em `data/constants.ts`.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hook Form

## Rotas

- `/` pagina inicial
- `/estoque` listagem de veiculos
- `/estoque/[slug]` detalhes do veiculo
- `/financiamento` simulacao e informacoes de credito
- `/contato` canais de atendimento
- `/sobre` apresentacao da loja

## Como rodar

Requisitos:

- Node.js 20 ou superior
- npm

Instalacao e execucao:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

Para producao:

```bash
npm run build
npm run start
```

## Estrutura principal

```text
app/                rotas da aplicacao
components/ui/      componentes reutilizaveis da interface
data/               mock de estoque e constantes da empresa
public/             arquivos estaticos
styles/             estilos globais
```

## Configuracoes pendentes

Antes de usar em producao, atualize `data/constants.ts` com os dados reais da empresa:

- numero de WhatsApp
- endereco completo
- URL de embed do Google Maps
- email
- CNPJ
- dominio final do site

Tambem vale revisar os veiculos mockados em `data/vehicles.ts` para refletir o estoque real.

## Scripts

- `npm run dev` inicia o ambiente local
- `npm run build` gera o build de producao
- `npm run start` sobe o build gerado
- `npm run lint` executa o lint
