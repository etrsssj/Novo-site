const SITE_ROOT = document.body.dataset.root || './';
function showPage(n){ location.href = SITE_ROOT + (n === 'inicio' ? '' : n + '/'); }

/* menu */
const burger = document.getElementById('burger'), menu = document.getElementById('menu'), nav = document.getElementById('nav');
function setMenu(o){ menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Fechar menu' : 'Abrir menu'); }
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { setMenu(false); closeArticle(); } });

/* vídeo */
function playVideo(){
  document.getElementById('video-thumb').style.display = 'none';
  document.getElementById('video-iframe-wrap').style.display = 'block';
  document.getElementById('video-close-btn').style.display = 'grid';
  document.getElementById('yt-iframe').src = 'https://www.youtube.com/embed/MrQW5XVRAt0?autoplay=1&rel=0&modestbranding=1';
}
function closeVideo(){
  const t = document.getElementById('video-thumb'); if (!t) return;
  t.style.display = 'block';
  document.getElementById('video-iframe-wrap').style.display = 'none';
  document.getElementById('video-close-btn').style.display = 'none';
  document.getElementById('yt-iframe').src = '';
}

/* quadro de serviços (home) */
const SERVICES = [
  { t:'Projeto fotovoltaico', d:'Dimensionamento e instalação de sistemas de energia solar.', r:'Marabá tem em média 5,5 horas de sol pleno por dia.', k:'fotovoltaico' },
  { t:'Projeto elétrico', d:'Desenvolvimento e adequação de projetos elétricos completos.', r:'Referência: NBR 5410, com ART de engenheiro habilitado.', k:'eletrico' },
  { t:'SPDA', d:'Instalação de Sistemas de Proteção contra Descargas Atmosféricas (SPDA).', r:'Referência: NBR 5419, com análise de risco.', k:'spda' },
  { t:'Projeto luminotécnico', d:'Dimensionamento e instalação de projetos luminotécnicos.', r:'Referência: NBR ISO/CIE 8995-1.', k:'luminotecnico' },
  { t:'Capacitações', d:'Capacitações na área de Engenharia Elétrica', r:'Inclui segurança elétrica para profissionais e empresas.', k:'capacitacoes' }
];
(function(){
  const tabs = Array.from(document.querySelectorAll('.brk')); if (!tabs.length) return;
  function pick(i, focus){
    tabs.forEach((b, j) => { b.setAttribute('aria-selected', j === i); b.tabIndex = j === i ? 0 : -1; });
    const s = SERVICES[i];
    document.getElementById('rd-title').textContent = s.t;
    document.getElementById('rd-desc').textContent = s.d;
    document.getElementById('rd-ref').textContent = s.r;
    document.getElementById('rd-link').href = SITE_ROOT + 'servicos/#' + s.k;
    if (focus) tabs[i].focus();
  }
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => pick(i));
    b.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); pick((i + 1) % tabs.length, true); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); pick((i + tabs.length - 1) % tabs.length, true); }
    });
  });
  pick(0);
})();

/* artigos */
const articles = [
    {
      tag: 'Energia Solar · Destaque',
      title: 'COMO FUNCIONA UM SISTEMA FOTOVOLTAICO: DO PAINEL À TOMADA',
      meta: 'Junho 2025 · 8 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80',
      body: `<p>A energia solar fotovoltaica é hoje uma das fontes mais acessíveis e sustentáveis para geração de energia. Mas como ela realmente funciona, do painel ao equipamento em sua casa?</p>
      <h3>1. Captação: o painel fotovoltaico</h3>
      <p>Os painéis fotovoltaicos são compostos por células de silício que, quando expostas à luz solar, geram corrente elétrica contínua (CC). Quanto maior a irradiação solar e a área dos painéis, maior a geração.</p>
      <h3>2. Conversão: o inversor</h3>
      <p>A corrente contínua gerada pelos painéis não pode ser usada diretamente pelos seus equipamentos. O <strong>inversor solar</strong> converte a CC em corrente alternada (CA), compatível com a rede elétrica brasileira (220V/60Hz).</p>
      <h3>3. Proteção: a string box</h3>
      <p>A string box é o quadro de proteção do sistema fotovoltaico. Ela reúne os dispositivos de proteção como disjuntores, fusíveis e DPS (Dispositivo de Proteção contra Surtos), garantindo a segurança do sistema e das pessoas.</p>
      <h3>4. Medição: o medidor bidirecional</h3>
      <p>Com o sistema conectado à rede (on-grid), a concessionária instala um medidor bidirecional que contabiliza tanto o consumo quanto o excedente de energia injetado na rede, gerando créditos para o proprietário.</p>
      <h3>Dimensionamento correto</h3>
      <p>Para dimensionar corretamente um sistema fotovoltaico, a E3J analisa o <strong>consumo médio mensal em kWh</strong> dos últimos 12 meses, a irradiação solar local (Marabá tem excelente irradiação), a área disponível para instalação e a orientação do telhado.</p>
      <ul><li>Marabá tem média de 5,5 horas de sol pleno por dia</li><li>Tempo médio de retorno do investimento: 4 a 6 anos</li><li>Vida útil dos painéis: 25 a 30 anos</li><li>Redução na conta: até 95%</li></ul>
      <p>Entre em contato com a E3J para um orçamento gratuito do seu sistema fotovoltaico!</p>`
    },
    {
      tag: 'SPDA · Proteção',
      title: 'SPDA: O QUE É E POR QUE TODO IMÓVEL PRECISA DE PARA-RAIOS',
      meta: 'Maio 2025 · 6 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80',
      body: `<p>O Brasil é o país com maior incidência de raios do mundo, com cerca de <strong>77 milhões de descargas atmosféricas por ano</strong>. Nesse contexto, o SPDA não é luxo — é necessidade.</p>
      <h3>O que é o SPDA?</h3>
      <p>O Sistema de Proteção contra Descargas Atmosféricas (SPDA) é o conjunto de dispositivos e instalações que protegem estruturas e pessoas dos efeitos dos raios. É regulamentado pela <strong>NBR 5419</strong>.</p>
      <h3>Componentes do sistema</h3>
      <ul>
        <li><strong>Captores (para-raios):</strong> capturam a descarga atmosférica no ponto mais alto</li>
        <li><strong>Condutores de descida:</strong> conduzem a corrente do raio até o solo com segurança</li>
        <li><strong>Sistema de aterramento:</strong> dissipa a energia elétrica no solo</li>
        <li><strong>DPS (Dispositivos de Proteção contra Surtos):</strong> protegem os equipamentos internos</li>
      </ul>
      <h3>Quando é obrigatório?</h3>
      <p>A NBR 5419 define através de uma análise de risco quais estruturas necessitam de SPDA. Em geral, edificações com mais de 2 pavimentos, postos de combustível, hospitais e escolas são obrigatoriamente protegidos.</p>
      <p>A E3J realiza projetos de SPDA completos, com análise de risco, memorial de cálculo e ART (Anotação de Responsabilidade Técnica) do engenheiro responsável.</p>`
    },
    {
      tag: 'Projeto Elétrico',
      title: 'NBR 5410: GUIA COMPLETO SOBRE INSTALAÇÕES ELÉTRICAS DE BAIXA TENSÃO',
      meta: 'Abril 2025 · 7 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
      body: `<p>A NBR 5410 é a principal norma técnica brasileira para instalações elétricas de baixa tensão. Publicada pela ABNT, ela define os requisitos mínimos para segurança e funcionamento adequado das instalações.</p>
      <h3>Por que a NBR 5410 é importante?</h3>
      <p>Uma instalação elétrica que não segue a norma representa riscos sérios: curtos-circuitos, choques elétricos, incêndios e até mortes. Além disso, a não conformidade pode invalidar seguros e gerar responsabilidade civil.</p>
      <h3>Principais requisitos</h3>
      <ul>
        <li><strong>Dimensionamento de condutores:</strong> cada circuito deve suportar a corrente sem superaquecimento</li>
        <li><strong>Proteção contra choques elétricos:</strong> uso obrigatório de DR (Diferencial Residual)</li>
        <li><strong>Proteção contra sobrecorrentes:</strong> disjuntores termomagnéticos adequados</li>
        <li><strong>Aterramento:</strong> sistema de proteção equipotencial</li>
        <li><strong>Separação de circuitos:</strong> iluminação, tomadas e chuveiro em circuitos independentes</li>
      </ul>
      <h3>O projeto elétrico e a ART</h3>
      <p>Todo projeto elétrico deve ser elaborado por um engenheiro eletricista habilitado e registrado no CREA. A <strong>ART (Anotação de Responsabilidade Técnica)</strong> garante que o profissional assume responsabilidade legal pelo projeto e execução.</p>
      <p>A E3J, com orientação de professores com CREA ativo, elabora projetos elétricos completos e em conformidade com a NBR 5410.</p>`
    },
    {
      tag: 'Luminotécnica',
      title: 'PROJETO LUMINOTÉCNICO: COMO ILUMINAR ESPAÇOS COM EFICIÊNCIA E CONFORTO',
      meta: 'Março 2025 · 5 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80',
      body: `<p>Um projeto luminotécnico bem executado vai além da estética: ele garante conforto visual, produtividade, segurança e economia de energia. Saiba como funciona.</p>
      <h3>O que é luminotécnica?</h3>
      <p>Luminotécnica é a ciência que estuda a luz e sua aplicação em ambientes. Um projeto luminotécnico analisa e dimensiona o sistema de iluminação de um espaço considerando o nível de iluminamento necessário (medido em lux), a distribuição de luz e a eficiência energética.</p>
      <h3>Conceitos fundamentais</h3>
      <ul>
        <li><strong>Lux (lx):</strong> unidade de iluminamento — a quantidade de luz que chega a uma superfície</li>
        <li><strong>Lúmen (lm):</strong> fluxo luminoso emitido pela fonte de luz</li>
        <li><strong>Temperatura de cor (K):</strong> define se a luz é quente (3000K), neutra (4000K) ou fria (6500K)</li>
        <li><strong>IRC (Índice de Reprodução de Cores):</strong> fidelidade das cores sob a luz — quanto maior, melhor</li>
      </ul>
      <h3>Níveis de iluminamento por ambiente (NBR ISO/CIE 8995-1)</h3>
      <ul>
        <li>Sala de estar: 100–150 lux</li>
        <li>Escritórios: 500 lux</li>
        <li>Cirurgias hospitalares: 10.000–100.000 lux</li>
        <li>Galpões industriais: 200–500 lux</li>
      </ul>
      <h3>Economia com LED</h3>
      <p>A substituição de lâmpadas fluorescentes por LED pode gerar economia de <strong>40% a 70%</strong> no consumo de iluminação, com vida útil de 30.000 a 50.000 horas versus 8.000 horas das fluorescentes.</p>`
    },
    {
      tag: 'Eficiência Energética',
      title: 'COMO REDUZIR SUA CONTA DE ENERGIA ELÉTRICA COM MEDIDAS SIMPLES',
      meta: 'Fevereiro 2025 · 5 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=80',
      body: `<p>Com as tarifas de energia elétrica cada vez mais altas no Brasil, a eficiência energética se torna uma necessidade. Confira as principais estratégias para reduzir o consumo.</p>
      <h3>1. Troque lâmpadas por LED</h3>
      <p>Lâmpadas LED consomem até <strong>80% menos energia</strong> que incandescentes e 40% menos que fluorescentes, com vida útil até 5x maior. É a medida com melhor custo-benefício.</p>
      <h3>2. Gerencie o ar-condicionado</h3>
      <p>O ar-condicionado é responsável por até 50% da conta de energia. Mantenha o filtro limpo (a cada 15 dias), prefira modelos inverter e mantenha a temperatura em 23°C (cada grau a menos aumenta 5% no consumo).</p>
      <h3>3. Desligue os aparelhos em standby</h3>
      <p>TVs, micro-ondas e carregadores em standby podem representar até <strong>12% da conta</strong>. Utilize filtros de linha com interruptor para facilitar.</p>
      <h3>4. Faça uma auditoria energética</h3>
      <p>Uma auditoria energética profissional identifica os principais pontos de desperdício e sugere melhorias com análise de retorno do investimento. A E3J oferece esse serviço com diagnóstico completo da instalação.</p>
      <h3>5. Considere energia solar</h3>
      <p>Para consumos acima de 200 kWh/mês, o investimento em energia solar fotovoltaica se paga em 4 a 6 anos e gera economia por 25+ anos.</p>`
    },
    {
      tag: 'Empresa Júnior',
      title: 'O QUE É UMA EMPRESA JÚNIOR E COMO ELA TRANSFORMA A FORMAÇÃO DO ENGENHEIRO',
      meta: 'Janeiro 2025 · 4 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80',
      body: `<p>As Empresas Juniores são organizações sem fins lucrativos, criadas e geridas por estudantes universitários, que prestam serviços reais ao mercado supervisionados por professores.</p>
      <h3>Como surgiu o movimento?</h3>
      <p>O modelo nasceu na França, na década de 1960, e chegou ao Brasil em 1987. Hoje, o país possui mais de 1.000 Empresas Juniores federadas, com cerca de 30.000 membros ativos — o maior movimento de EJs do mundo.</p>
      <h3>O que diferencia uma EJ de um estágio?</h3>
      <ul>
        <li><strong>Gestão estudantil:</strong> os próprios alunos gerenciam comercial, financeiro, projetos e RH</li>
        <li><strong>Projetos reais:</strong> os clientes são empresas e pessoas reais, com contratos formais</li>
        <li><strong>Supervisão técnica:</strong> professores orientadores garantem qualidade e segurança</li>
        <li><strong>Desenvolvimento integral:</strong> habilidades técnicas E de liderança, ao mesmo tempo</li>
      </ul>
      <h3>A E3J na UNIFESSPA</h3>
      <p>A E3J é a Empresa Júnior do curso de Engenharia Elétrica da UNIFESSPA, com mais de 8 anos de história, +40 membros formados e +50 clientes atendidos. Nossa missão é aproximar a universidade da sociedade, gerando valor para os dois lados.</p>`
    },
    {
      tag: 'Segurança · NR-10',
      title: 'NR-10: TUDO SOBRE SEGURANÇA EM INSTALAÇÕES ELÉTRICAS',
      meta: 'Dezembro 2024 · 6 min de leitura · por Equipe E3J',
      img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=900&q=80',
      body: `<p>A NR-10 (Norma Regulamentadora nº 10) estabelece os requisitos e condições mínimas para garantir a segurança e saúde dos trabalhadores que interagem com instalações elétricas e serviços com eletricidade.</p>
      <h3>Quem deve seguir a NR-10?</h3>
      <p>Todos que trabalham direta ou indiretamente com instalações elétricas: eletricistas, engenheiros, técnicos, operadores de máquinas e até gestores de segurança do trabalho.</p>
      <h3>Principais exigências</h3>
      <ul>
        <li><strong>Treinamento obrigatório:</strong> 40 horas para trabalho em proximidade e 40+24h para trabalho em instalações energizadas</li>
        <li><strong>EPI adequado:</strong> luvas dielétricas, capacete com proteção para arco elétrico, óculos e botina de segurança</li>
        <li><strong>Bloqueio e etiquetagem (LOTO):</strong> procedimento de isolamento da energia antes de qualquer intervenção</li>
        <li><strong>Prontuário de instalações:</strong> documentação completa e atualizada das instalações elétricas</li>
      </ul>
      <h3>Acidentes e responsabilidade</h3>
      <p>O descumprimento da NR-10 pode resultar em autuações do Ministério do Trabalho, suspensão das atividades e responsabilização civil e criminal em caso de acidentes. A <strong>prevenção é sempre mais barata que o acidente</strong>.</p>
      <p>A E3J oferece capacitações na área de segurança elétrica para profissionais e empresas da região de Marabá.</p>`
    }
  ];
let lastFocus = null;
function openArticle(idx){
  const a = articles[idx];
  document.getElementById('modal-img').src = a.img;
  document.getElementById('modal-tag').textContent = a.tag;
  document.getElementById('modal-title').textContent = a.title;
  document.getElementById('modal-meta').textContent = a.meta;
  document.getElementById('modal-body').innerHTML = a.body;
  const url = encodeURIComponent(location.href), text = encodeURIComponent('Confira este artigo da E3J: ' + a.title);
  document.getElementById('share-whatsapp').href = 'https://wa.me/?text=' + text + '%20' + url;
  document.getElementById('share-linkedin').href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + text;
  document.getElementById('share-email').href = 'mailto:?subject=' + text + '&body=' + url;
  const m = document.getElementById('article-modal'), box = m.querySelector('.mbox');
  lastFocus = document.activeElement;
  m.classList.add('open'); document.body.style.overflow = 'hidden';
  box.scrollTop = 0; document.getElementById('modal-progress-bar').style.width = '0';
  box.onscroll = () => { const max = box.scrollHeight - box.clientHeight; document.getElementById('modal-progress-bar').style.width = (max > 0 ? Math.min(box.scrollTop / max * 100, 100) : 0) + '%'; };
  document.getElementById('modal-close').focus();
}
function closeArticle(){
  const m = document.getElementById('article-modal'); if (!m || !m.classList.contains('open')) return;
  m.classList.remove('open'); document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
function closeModal(e){ if (e.target === document.getElementById('article-modal')) closeArticle(); }

/* blog: filtro + busca */
let currentFilter = 'all';
function setBlogFilter(cat, btn){
  currentFilter = cat;
  document.querySelectorAll('.chipb').forEach(b => b.setAttribute('aria-pressed', b === btn));
  filterBlog();
}
function filterBlog(){
  const q = (document.getElementById('blog-search')?.value || '').toLowerCase();
  let n = 0;
  document.querySelectorAll('[data-category]').forEach(c => {
    const ok = (currentFilter === 'all' || c.dataset.category === currentFilter) && (!q || c.textContent.toLowerCase().includes(q));
    c.classList.toggle('hidden', !ok); if (ok) n++;
  });
  const e = document.getElementById('blog-empty'); if (e) e.style.display = n ? 'none' : 'block';
}

/* cookies, topo, avisos */
function acceptCookie(){ try { localStorage.setItem('e3j_cookie', '1'); } catch (e) {} document.getElementById('cookie').classList.remove('show'); }
function dismissCookie(){ document.getElementById('cookie').classList.remove('show'); }
function showToast(msg){ const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
function subscribeNewsletter(){
  const i = document.getElementById('newsletter-email'), v = i.value.trim();
  if (!v || !v.includes('@')) { showToast('Digite um e-mail válido'); return; }
  i.value = ''; showToast('Inscrição feita. Obrigado!');
}
window.addEventListener('scroll', () => {
  document.getElementById('top').classList.toggle('show', scrollY > 400);
  nav.classList.toggle('stuck', scrollY > 10);
}, { passive: true });

/* contadores */
function animateCounter(el){
  const target = +el.dataset.target, suffix = el.dataset.suffix || '', t0 = performance.now(), dur = 1400;
  (function f(t){ const p = Math.min((t - t0) / dur, 1); el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix; if (p < 1) requestAnimationFrame(f); })(t0);
}
const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-target]').forEach(animateCounter); co.unobserve(e.target); } }), { threshold: .3 });

window.addEventListener('DOMContentLoaded', () => {
  try { if (!localStorage.getItem('e3j_cookie')) setTimeout(() => document.getElementById('cookie').classList.add('show'), 1500); } catch (e) {}
  document.querySelectorAll('.meter').forEach(el => co.observe(el));
});

/* carrossel da liderança (celular/tablet) */
(function(){
  const grid = document.getElementById('team-grid'); if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.tcard')), box = document.getElementById('team-dots'),
        prev = document.getElementById('team-prev'), next = document.getElementById('team-next');
  cards.forEach((c, i) => {
    const d = document.createElement('button'); d.type = 'button'; d.className = 'team-dot'; d.setAttribute('aria-label', 'Ir para o membro ' + (i + 1));
    d.addEventListener('click', () => grid.scrollTo({ left: c.offsetLeft - grid.offsetLeft - 18, behavior: 'smooth' }));
    box.appendChild(d);
  });
  const dots = Array.from(box.children), step = () => cards[0].getBoundingClientRect().width + 16;
  function update(){
    const max = grid.scrollWidth - grid.clientWidth; let i = Math.round(grid.scrollLeft / step());
    if (grid.scrollLeft >= max - 4) i = cards.length - 1;
    i = Math.max(0, Math.min(cards.length - 1, i));
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
    prev.disabled = grid.scrollLeft <= 4; next.disabled = grid.scrollLeft >= max - 4;
  }
  prev.addEventListener('click', () => grid.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => grid.scrollBy({ left: step(), behavior: 'smooth' }));
  grid.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  addEventListener('resize', update); update();
})();
