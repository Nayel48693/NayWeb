# NayWeb

Website da NayWeb, uma empresa online de websites para pequenos negócios. A implementação usa HTML5, CSS3 e JavaScript ES modules, sem npm ou build. O Firebase é carregado pela CDN oficial, mantendo o projeto compatível com GitHub Pages.

## Correr localmente

Como são usados ES modules e imports CDN, abre o projeto através de um servidor local, por exemplo a extensão **Live Server** do VS Code. Não abras diretamente em `file://`.

## Configuração manual

1. O projeto Firebase `nayweb-dd8f1` já está ligado em `js/firebase.js` através do `firebaseConfig` fornecido.
2. No Firebase Console, ativa Firestore e Authentication com email/password e configura as regras de segurança antes de publicar.
3. Copia o conteúdo de `firestore.rules` para o separador **Firestore Database > Rules** e publica as regras.
4. Edita os contactos em `js/config.js` quando tiveres os dados definitivos.
5. Cria o primeiro utilizador no Firebase Authentication e depois cria manualmente `admins/{UID}` no Firestore, com o campo `email`.
6. Entra em `admin.html` e usa **Carregar dados iniciais** para preencher planos, exemplos, FAQ e `configuracoes/site`.
7. Substitui o domínio placeholder em `sitemap.xml`, `robots.txt` e o canonical de `index.html`.
8. Revê `privacidade.html`: é um modelo e precisa da identificação do responsável, prazos e detalhes legais reais.
9. Substitui os placeholders das demos por imagens/endereço/Google Maps reais quando existirem.

## Publicar no GitHub Pages

Faz push deste conteúdo para um repositório GitHub e ativa Pages em **Settings > Pages**, escolhendo a branch e a pasta publicadas. Mantém os caminhos relativos para funcionar em subpastas.

## Checklist de testes

- [ ] Rotador do hero e da barra, incluindo pausa e `prefers-reduced-motion`.
- [ ] Filtros de exemplos sem recarregar a página.
- [ ] Escolha de plano a pré-selecionar o formulário.
- [ ] Submissão do pedido com Firebase e fallback sem Firebase.
- [ ] Login no admin e verificação de permissões.
- [ ] Alteração de estado e nota interna de um pedido.
- [ ] Edição de planos.
- [ ] Carregar dados iniciais.
- [ ] As três demos em mobile e os fluxos simulados.
- [ ] Links de contacto, cookies essenciais e barra inferior.
