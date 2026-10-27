# Victor Hugo — Portfólio estático

Versão do portfólio de **Victor Hugo Corrêa** desenvolvida em HTML, CSS e JavaScript, sem frameworks. A página reúne apresentação profissional, projetos web, tecnologias e links de contato, com identidade escura, detalhes em azul e fundo animado em Canvas.

**[Ver esta versão](https://web-site-portifoliovictorhugo.vercel.app/)** · **[Portfólio atual](https://victor-hugo-portfolio-mocha.vercel.app/)** · **[Contato por e-mail](mailto:correavhc@gmail.com)**

> Este repositório mantém a implementação estática. O portfólio atual em React e TypeScript está em [victor-hugo-portfolio](https://github.com/CorreaVictorHugo/victor-hugo-portfolio).

## O que o projeto apresenta

- Abertura com nome, especialidades e acesso aos projetos.
- Apresentação profissional e seleção de websites e aplicações.
- Organização das tecnologias por área.
- Contato por e-mail, LinkedIn e GitHub.
- Indicador de progresso de leitura, botão de voltar ao topo e animações de entrada.
- Fundo interativo com partículas e caracteres desenhados em Canvas.

As descrições dos projetos registram a apresentação desta versão do portfólio. A disponibilidade dos sites externos depende de cada projeto; o repositório não comprova métricas de conversão ou resultados comerciais.

## Tecnologias

HTML5, CSS3, JavaScript, Canvas 2D e IntersectionObserver. As fontes Space Mono e Syne são carregadas pelo Google Fonts.

Não há dependências npm, backend ou etapa de compilação. Menções a React, Supabase e outras ferramentas nos cartões descrevem os trabalhos apresentados, não a implementação deste site.

## Executar localmente

Com Git e Python 3 disponíveis:

```bash
git clone https://github.com/CorreaVictorHugo/Web_site_portifolio.git
cd Web_site_portifolio
python -m http.server 8000
```

Abra [localhost:8000](http://localhost:8000). Também é possível abrir `index.html` diretamente no navegador ou usar outro servidor estático. O carregamento das fontes externas exige conexão com a internet.

## Estrutura

```text
assets/favicon.png  Ícone da aba do navegador
index.html          Conteúdo, seções e links dos projetos
style.css           Identidade visual, responsividade e animações CSS
script.js           Navegação, progresso, animações de entrada e Canvas
README.md           Apresentação e orientações de manutenção
```

## Manutenção

- Edite textos, projetos e contatos em `index.html`.
- Ajuste cores, tipografia e espaçamentos nas variáveis e regras de `style.css`.
- Edite interações e fundo animado em `script.js`.
- Use apenas links, informações e canais de contato confirmados. O e-mail preferencial é **correavhc@gmail.com**.

Antes de publicar, confira a página em computador e celular, teste os links das seções e o botão de voltar ao topo, e verifique o carregamento do favicon. Para conferir a sintaxe do JavaScript com Node.js, execute `node --check script.js`.

## Publicação

Publique a raiz do repositório em uma hospedagem de sites estáticos. Não há comando de build: os arquivos necessários são `index.html`, `style.css`, `script.js` e `assets/`.

Se a hospedagem estiver integrada ao Git, confirme a branch de produção no painel antes de enviar alterações. A branch principal deste repositório é `main`. Não versione credenciais, configurações locais da hospedagem ou arquivos temporários.

## Autoria e direitos de uso

Desenvolvido por **Victor Hugo Corrêa**. Contato pelo **[e-mail](mailto:correavhc@gmail.com)** ou **[LinkedIn](https://www.linkedin.com/in/victor-hn-correa/)**.

As marcas e os materiais dos projetos apresentados pertencem aos respectivos titulares. Este repositório não declara uma licença de software livre nem concede direitos de reutilização sobre materiais de clientes.
