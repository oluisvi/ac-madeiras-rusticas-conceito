const assets = {
  hero: "assets/hero-oficina.webp",
  detail: "assets/detalhe-madeira.webp",
  room: "assets/ambiente-mesa-banco.webp"
};

const projects = [
  { id: "mesa", category: "mesas", name: "Mesa em madeira maciça", kind: "Referência de peça", image: assets.hero, imageAlt: "Mesa rústica de madeira em oficina aberta para a paisagem", description: "Uma presença marcante para reunir a casa. Medidas, acabamento e disponibilidade são confirmados com a equipe.", tag: "Consulta pelo WhatsApp" },
  { id: "detalhe", category: "detalhes", name: "O desenho natural da madeira", kind: "Detalhe de acabamento", image: assets.detail, imageAlt: "Detalhe ilustrativo de tampo de madeira com borda orgânica", description: "Veios, bordas e acabamento fazem cada peça ter sua própria leitura. Envie uma referência para conversar sobre possibilidades.", tag: "Imagem conceitual" },
  { id: "ambiente", category: "ambientes", name: "Mesa e banco", kind: "Ideia para o ambiente", image: assets.room, imageAlt: "Mesa e banco de madeira em uma sala iluminada", description: "Uma composição ilustrativa para imaginar o espaço. Peças, dimensões e materiais precisam ser validados pela AC.", tag: "Imagem conceitual" }
];

const note = `<p class="image-note"><span aria-hidden="true">✳</span> Imagens ilustrativas criadas para este conceito. Não representam peças disponíveis nem o acervo real da AC.</p>`;
const cardMarkup = (p, index, layout = "") => `<article class="piece-card ${layout}" data-category="${p.category}" style="--i:${index}">
  <button class="piece-image" type="button" data-open-piece="${p.id}" aria-label="Ver detalhes de ${p.name}"><img src="${p.image}" alt="${p.imageAlt}" width="1400" height="1000" loading="lazy"><span class="piece-tag">${p.tag}</span><span class="image-arrow" aria-hidden="true">↗</span></button>
  <div class="piece-copy"><p class="piece-kind">${p.kind}</p><h3>${p.name}</h3><p>${p.description}</p><button class="text-action" type="button" data-contact-piece="${p.id}"><span class="action-label">Perguntar sobre uma peça assim</span><span aria-hidden="true">↗</span></button></div>
</article>`;

const commonPortfolio = `<section class="portfolio-section" id="referencias">
  <div class="section-heading"><div><p class="eyebrow">IDEIAS PARA COMEÇAR A CONVERSA</p><h2>Uma peça muda<br><em>o jeito de estar.</em></h2></div><p class="section-intro">Veja referências visuais e converse com a equipe sobre o que existe, o que pode ser feito sob medida e o que combina com seu espaço.</p></div>
  <div class="filters" role="group" aria-label="Filtrar referências"><button class="filter-button is-selected" data-filter="todos" aria-pressed="true">Todas</button><button class="filter-button" data-filter="mesas" aria-pressed="false">Mesas</button><button class="filter-button" data-filter="detalhes" aria-pressed="false">Detalhes</button><button class="filter-button" data-filter="ambientes" aria-pressed="false">Ambientes</button></div>
  <div class="piece-grid">${projects.map((p,i)=>cardMarkup(p,i)).join("")}</div>${note}
</section>`;

const noDelivery = `<aside class="pickup-note"><span class="pickup-icon" aria-hidden="true">↗</span><div><p class="eyebrow">UM DETALHE IMPORTANTE</p><h3>Atendimento presencial.<br><em>Não fazemos envios.</em></h3><p>Para conhecer uma peça e combinar a retirada, confirme disponibilidade e atendimento diretamente com a equipe.</p><a href="https://wa.me/5512997531478?text=Oi%2C%20gostaria%20de%20confirmar%20como%20funciona%20a%20retirada%20de%20uma%20pe%C3%A7a." target="_blank" rel="noopener noreferrer">Confirmar pelo WhatsApp <span aria-hidden="true">↗</span></a></div></aside>`;

const customForm = `<section class="custom-section" id="sob-medida"><div class="custom-copy"><p class="eyebrow">DO SEU JEITO</p><h2>Tem uma ideia?<br><em>Vamos dar forma.</em></h2><p>A AC também conversa sobre projetos sob medida. Envie uma referência, conte o que imaginou e a equipe segue com você para entender os detalhes e preparar um orçamento.</p><ul class="custom-list"><li><span>01</span> Conte o que você procura</li><li><span>02</span> Envie medidas ou uma referência, se tiver</li><li><span>03</span> Combine os próximos passos com a equipe</li></ul></div><form class="inquiry-form"><label for="interest">O que você tem em mente?</label><select id="interest" name="interest"><option>Quero conversar sobre uma peça</option><option>Quero fazer um projeto sob medida</option><option>Quero confirmar medidas e acabamento</option><option>Quero saber disponibilidade e retirada</option></select><label for="idea">Conte um pouco da ideia <span>(opcional)</span></label><textarea id="idea" name="idea" rows="3" placeholder="Ex.: uma mesa para a sala, tenho uma foto de referência…"></textarea><button class="button-primary" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button><p class="form-note">A mensagem será aberta para você revisar e enviar. Nada é enviado automaticamente.</p></form></section>`;

const locationBlock = `<section class="visit-section" id="visita"><div class="visit-copy"><p class="eyebrow">ONDE ENCONTRAR</p><h2>Venha ver de perto.</h2><p>Av. Marginal, 1.630<br>Enseada · Ubatuba / SP</p><p class="visit-foot">Confirme horário, disponibilidade e retirada pelo WhatsApp. A loja não faz envios.</p><a class="button-outline" href="https://www.google.com/maps/search/?api=1&query=Avenida+Marginal+1630+Enseada+Ubatuba+SP" target="_blank" rel="noopener noreferrer">Abrir localização no Maps <span aria-hidden="true">↗</span></a></div><div class="visit-map"><iframe title="Mapa da região da Avenida Marginal, Enseada, Ubatuba" src="https://maps.google.com/maps?q=Avenida%20Marginal%2C%201630%2C%20Enseada%2C%20Ubatuba%2C%20SP&t=&z=14&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><span class="map-caption">LOCALIZAÇÃO INDICADA PELA AC · CONFIRME ANTES DA VISITA</span></div></section>`;

const faq = `<section class="faq-section" id="duvidas"><div><p class="eyebrow">PERGUNTAS FREQUENTES</p><h2>Antes de escolher.</h2></div><div class="faq-list"><details><summary>Como vejo medidas e acabamentos?</summary><p>Chame a equipe pelo WhatsApp com a peça que chamou sua atenção. Medidas, acabamento e disponibilidade são confirmados caso a caso.</p></details><details><summary>Posso pedir uma peça sob medida?</summary><p>Sim. A equipe informou que conversa sobre projetos sob medida. Envie uma ideia ou referência pelo WhatsApp para iniciar o orçamento.</p></details><details><summary>Vocês fazem entrega?</summary><p>Não. A AC Madeiras Rústicas informou que não faz envios. Combine diretamente com a equipe como funciona a visita e a retirada.</p></details><details><summary>As fotos deste site são de peças da loja?</summary><p>Não neste conceito. As imagens foram criadas para ilustrar uma possível experiência digital. O catálogo final deve usar fotos reais e informações aprovadas pela AC.</p></details></div></section>`;

const layouts = {
  1: () => `<div class="site site-origin" id="top">
    <header class="site-nav"><a class="wordmark" href="#top">AC <span>MADEIRAS RÚSTICAS</span></a><nav aria-label="Navegação do site"><a href="#referencias">Peças</a><a href="#sob-medida">Sob medida</a><a href="#visita">Visite</a></nav><a class="nav-contact" href="https://wa.me/5512997531478" target="_blank" rel="noopener noreferrer">Falar com a equipe ↗</a></header>
    <section class="origin-hero"><div class="origin-lead"><p class="eyebrow">MADEIRA MACIÇA · UBATUBA, SP</p><h1>Há histórias<br>que começam<br><em>pela matéria.</em></h1><p class="hero-text">Peças rústicas, projetos sob medida e uma conversa direta para transformar uma ideia em madeira.</p><a class="button-primary" href="#referencias">Conhecer referências <span aria-hidden="true">↓</span></a><span class="hero-side-note">PEÇAS E PROJETOS<br>CONSULTADOS DIRETO COM A EQUIPE</span></div><div class="origin-photo"><img src="${assets.hero}" alt="Imagem conceitual de uma mesa de madeira maciça em oficina junto à paisagem" width="1920" height="1080" fetchpriority="high"><span class="photo-stamp">CADA VEIO<br>É DIFERENTE</span><p>Imagem ilustrativa · não representa uma peça disponível</p></div></section>
    <div class="origin-ribbon"><span>MADEIRA MACIÇA</span><i>✳</i><span>PROJETOS SOB MEDIDA</span><i>✳</i><span>CONVERSA DIRETA</span><i>✳</i><span>UBATUBA · SP</span></div>
    ${commonPortfolio}
    <section class="origin-story"><div class="story-image"><img src="${assets.detail}" alt="Imagem ilustrativa do detalhe e dos veios da madeira" loading="lazy" width="1080" height="1350"><span class="vertical-label">MATÉRIA QUE PEDE TEMPO</span></div><div class="story-copy"><p class="eyebrow">ESCOLHER TAMBÉM É PERGUNTAR</p><h2>Uma boa peça começa com as perguntas certas.</h2><p>Qual espaço ela vai ocupar? Que medida funciona? Qual acabamento faz sentido? O site pode organizar essas conversas e dar contexto para cada escolha, enquanto a equipe confirma os detalhes pelo WhatsApp.</p><a class="text-action" href="#sob-medida">Conversar sobre meu projeto <span aria-hidden="true">↗</span></a></div></section>
    ${customForm}${noDelivery}${locationBlock}${faq}<section class="last-call"><p class="eyebrow">UMA PEÇA COMEÇA COM UMA IDEIA</p><h2>Mostre o que<br>você imaginou.</h2><a class="button-primary" href="https://wa.me/5512997531478?text=Oi%2C%20quero%20conversar%20sobre%20uma%20pe%C3%A7a%20da%20AC%20Madeiras%20R%C3%BAsticas." target="_blank" rel="noopener noreferrer">Chamar a AC no WhatsApp ↗</a></section>
    <footer class="site-footer"><span>AC · MADEIRAS RÚSTICAS</span><span>Ubatuba, SP · Atendimento direto</span><a href="https://www.instagram.com/ac_madeirasrusticas/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></footer>
  </div>`,
  2: () => `<div class="site site-workshop" id="top">
    <header class="site-nav"><a class="wordmark" href="#top">AC<span class="wordmark-rule"></span><span>OFICINA DE MADEIRA</span></a><nav aria-label="Navegação do site"><a href="#referencias">Catálogo</a><a href="#sob-medida">Encomendas</a><a href="#visita">Local</a></nav><a class="nav-contact" href="https://wa.me/5512997531478" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></header>
    <section class="workshop-hero"><img src="${assets.hero}" alt="Imagem ilustrativa de uma mesa de madeira maciça em oficina" width="1920" height="1080" fetchpriority="high"><div class="workshop-shade"></div><div class="workshop-index">AC / 01<br>UBATUBA<br>BRASIL</div><div class="workshop-title"><p>RÚSTICA POR NATUREZA</p><h1>Madeira<br>com <em>presença.</em></h1><a class="workshop-cta" href="#referencias">EXPLORAR AS REFERÊNCIAS <span aria-hidden="true">↓</span></a></div><p class="workshop-image-note">IMAGEM ILUSTRATIVA · CONCEITO DIGITAL</p><div class="workshop-stamp">FEITO<br>PARA FICAR</div></section>
    <section class="workshop-intro"><span class="big-index">01—</span><div><p class="eyebrow">PEÇAS · IDEIAS · SOB MEDIDA</p><h2>Da primeira referência<br>até o orçamento.</h2></div><p>Veja ideias, envie sua inspiração e fale diretamente com a AC. Medidas, acabamento, disponibilidade e retirada são alinhados com a equipe.</p></section>
    ${commonPortfolio}
    <section class="workshop-process"><div class="process-heading"><p class="eyebrow">COMO A CONVERSA ACONTECE</p><h2>Do “tenho uma ideia”<br>ao próximo passo.</h2></div><div class="process-steps"><article><span>01</span><h3>Encontre uma referência</h3><p>Veja uma peça ou imagem que se aproxima do que você procura.</p></article><article><span>02</span><h3>Conte o que imaginou</h3><p>Se tiver medidas, acabamento ou uma foto de inspiração, envie pelo WhatsApp.</p></article><article><span>03</span><h3>Alinhe com a equipe</h3><p>A AC confirma possibilidades, disponibilidade e prepara o orçamento.</p></article></div></section>
    <section class="workshop-feature"><div class="feature-copy"><p class="eyebrow">SOB MEDIDA</p><h2>Uma ideia sua.<br>Uma peça por desenhar.</h2><p>A equipe informou que também desenvolve projetos personalizados a partir de ideias e referências. Conte o que você precisa para começar a conversa.</p><a href="#sob-medida" class="workshop-cta">COMEÇAR UMA CONVERSA ↗</a></div><img src="${assets.detail}" alt="Imagem ilustrativa de acabamento rústico em madeira" loading="lazy" width="1080" height="1350"></section>
    ${customForm}${noDelivery}${locationBlock}${faq}<section class="workshop-end"><p>MADEIRA · IDEIA · CONVERSA</p><h2>O próximo desenho<br>pode começar aqui.</h2><a class="button-light" href="https://wa.me/5512997531478?text=Oi%2C%20quero%20conversar%20sobre%20um%20projeto%20com%20a%20AC%20Madeiras%20R%C3%BAsticas.">Falar com a AC ↗</a></section>
    <footer class="site-footer"><span>AC MADEIRAS RÚSTICAS</span><span>Sem envios · confirme a retirada</span><a href="https://www.instagram.com/ac_madeirasrusticas/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></footer>
  </div>`,
  3: () => `<div class="site site-materia" id="top">
    <header class="site-nav"><a class="wordmark" href="#top"><span class="monogram">A/C</span><span>MADEIRAS<br>RÚSTICAS</span></a><nav aria-label="Navegação do site"><a href="#sob-medida">Processo</a><a href="#referencias">Referências</a><a href="#visita">Localização</a></nav><a class="nav-contact" href="https://wa.me/5512997531478" target="_blank" rel="noopener noreferrer">Iniciar conversa ↗</a></header>
    <section class="matter-hero"><div class="matter-meta"><span>MATÉRIA / 01</span><span>UBATUBA — SP</span></div><div class="matter-headline"><p>MADEIRA MACIÇA, ESCOLHAS COM CALMA</p><h1>O espaço<br>começa<br><em>na peça.</em></h1><a class="matter-link" href="#referencias">VER REFERÊNCIAS <span aria-hidden="true">↘</span></a></div><figure class="matter-image"><img src="${assets.room}" alt="Imagem ilustrativa de mesa e banco em madeira dentro de uma casa" width="1536" height="1024" fetchpriority="high"><figcaption>IMAGEM CONCEITUAL · NÃO REPRESENTA ESTOQUE REAL</figcaption></figure><span class="matter-vertical">IDEIAS EM MADEIRA · CONVERSA DIRETA</span></section>
    <section class="matter-thesis"><p class="eyebrow">UM CATÁLOGO PARA ESCOLHER MELHOR</p><div><h2>Foto, medidas,<br>acabamento, disponibilidade.</h2><p>Um espaço próprio pode reunir as peças e organizar as perguntas antes do orçamento. O Instagram continua mostrando o dia a dia; o WhatsApp continua sendo o lugar de conversar e confirmar cada detalhe.</p></div></section>
    <section class="matter-process" id="sob-medida"><div class="matter-process-title"><p class="eyebrow">PROJETO PERSONALIZADO</p><h2>Uma referência<br>vira conversa.</h2><p>A AC informou que desenvolve projetos sob medida a partir das ideias e referências enviadas pela pessoa.</p><a class="matter-link" href="#falar">CONTAR MINHA IDEIA ↘</a></div><div class="matter-process-list"><article><span>01 / CONTEXTO</span><h3>O que você quer criar?</h3><p>Conte o uso, o ambiente e o que gostaria que a peça resolvesse.</p></article><article><span>02 / REFERÊNCIAS</span><h3>O que ajuda a imaginar?</h3><p>Envie inspiração, dimensões que já conhece ou uma foto do espaço.</p></article><article><span>03 / ORÇAMENTO</span><h3>Alinhe os detalhes</h3><p>A equipe confirma materiais, acabamento, prazo e disponibilidade antes de qualquer decisão.</p></article></div></section>
    ${commonPortfolio}
    <section class="matter-quote"><img src="${assets.detail}" alt="Imagem ilustrativa de veio e borda natural de madeira" loading="lazy" width="1080" height="1350"><blockquote>“Cada veio guarda<br>um desenho próprio.”</blockquote><p>IMAGEM ILUSTRATIVA · REFERÊNCIA DE MATERIAL</p></section>
    ${customForm}${noDelivery}${locationBlock}${faq}<section class="matter-last" id="falar"><div><p class="eyebrow">AC MADEIRAS RÚSTICAS · UBATUBA</p><h2>Vamos conversar<br>sobre a sua ideia?</h2></div><a class="button-primary" href="https://wa.me/5512997531478?text=Oi%2C%20quero%20conversar%20sobre%20uma%20ideia%20de%20pe%C3%A7a%20em%20madeira.">Abrir WhatsApp ↗</a></section>
    <footer class="site-footer"><span>A/C · MADEIRAS RÚSTICAS</span><span>Av. Marginal, 1.630 · Enseada · Ubatuba/SP</span><a href="https://www.instagram.com/ac_madeirasrusticas/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></footer>
  </div>`
};

const canvas = document.querySelector("#design-canvas");
let activeDesign = 1;
const params = new URLSearchParams(location.search);
const initialDesign = Number(params.get("design")) || Number(location.hash.slice(1)) || 1;
const validDesign = [1,2,3].includes(initialDesign) ? initialDesign : 1;

function renderDesign(id, updateUrl = true) {
  activeDesign = id;
  document.body.dataset.design = String(id);
  canvas.innerHTML = layouts[id]();
  document.querySelector("#design-status").textContent = `Direção ${id}: ${["Origem", "Oficina", "Matéria"][id-1]} carregada.`;
  document.querySelectorAll("[data-design-choice]").forEach(button => {
    const selected = Number(button.dataset.designChoice) === id;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (updateUrl) history.replaceState(null, "", `${location.pathname}?design=${id}`);
  observeReveals();
  bindInteractions();
  window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
}

function observeReveals() {
  const nodes = document.querySelectorAll(".piece-card,.origin-story,.custom-section,.pickup-note,.visit-section,.faq-section,.workshop-process,.workshop-feature,.matter-thesis,.matter-process,.matter-quote,.matter-last");
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
  }), {threshold:.12});
  nodes.forEach(node => io.observe(node));
}

function openWhatsApp(message) {
  window.open(`https://wa.me/5512997531478?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function bindInteractions() {
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(item => {
      const selected = item === button;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll(".piece-card").forEach(card => {
      const visible = filter === "todos" || card.dataset.category === filter;
      card.hidden = !visible;
    });
  }));
  document.querySelectorAll("[data-contact-piece]").forEach(button => button.addEventListener("click", () => {
    const piece = projects.find(item => item.id === button.dataset.contactPiece);
    openWhatsApp(`Oi! Vi no site conceitual da AC a referência “${piece.name}”. Sei que a imagem é ilustrativa; gostaria de saber se vocês têm uma peça parecida disponível ou se conversamos sobre algo sob medida. Podem me passar medidas, acabamento e disponibilidade?`);
  }));
  document.querySelectorAll("[data-open-piece]").forEach(button => button.addEventListener("click", () => {
    const piece = projects.find(item => item.id === button.dataset.openPiece);
    showToast(`${piece.name}: imagem ilustrativa. Consulte peças reais e disponibilidade pelo WhatsApp.`);
  }));
  document.querySelectorAll(".inquiry-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const idea = String(data.get("idea") || "").trim();
    openWhatsApp(`Oi! Vim pelo site da AC Madeiras Rústicas. ${data.get("interest")}.${idea ? ` Minha ideia: ${idea}` : ""} Vocês podem me orientar sobre possibilidades e próximos passos?`);
  }));
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("is-shown");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-shown"), 3600);
}

document.querySelectorAll("[data-design-choice]").forEach(button => button.addEventListener("click", () => renderDesign(Number(button.dataset.designChoice))));
renderDesign(validDesign, false);
