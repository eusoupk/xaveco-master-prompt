import React, { useEffect, useState, useRef } from 'react'

const POPUP_KEY = 'xaveco_popup_closed_at'
const TIMER_KEY = 'xaveco_timer_end'
const POPUP_DELAY = 1500
const TIMER_DURATION_SEC = 15 * 60
const CTA_URL = 'https://desenrola-comigo.lovable.app/'

function useTimer() {
  const [timeText, setTimeText] = useState('15:00')
  useEffect(()=>{
    function getEnd(){
      try{
        const saved = localStorage.getItem(TIMER_KEY)
        if(saved){ const n = Number(saved); if(!isNaN(n)) return n }
      }catch(e){}
      const end = Date.now() + TIMER_DURATION_SEC*1000
      try{ localStorage.setItem(TIMER_KEY, String(end)) }catch(e){}
      return end
    }
    const end = getEnd()
    const tick = ()=>{
      const rem = end - Date.now()
      if(rem <= 0){ setTimeText('00:00'); return }
      const s = Math.max(0, Math.floor(rem/1000))
      const m = Math.floor(s/60); const ss = s % 60
      setTimeText(String(m).padStart(2,'0') + ':' + String(ss).padStart(2,'0'))
    }
    tick(); const id = setInterval(tick, 1000)
    return ()=> clearInterval(id)
  },[])
  return timeText
}

export default function App(){
  const [popupVisible, setPopupVisible] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)
  const popupRef = useRef(null)
  const timeText = useTimer()

  useEffect(()=>{
    function shouldShow(){
      try{
        const ts = localStorage.getItem(POPUP_KEY)
        if(!ts) return true
        const then = Number(ts); if(isNaN(then)) return true
        return (Date.now() - then) > 24*60*60*1000
      }catch(e){ return true }
    }
    if(shouldShow()){
      const t = setTimeout(()=>{ setPopupVisible(true); if(popupRef.current) popupRef.current.focus() }, POPUP_DELAY)
      return ()=> clearTimeout(t)
    }
  },[])

  useEffect(()=>{
    function onScroll(){
      const sc = window.scrollY; const h = document.documentElement.scrollHeight - window.innerHeight
      if(h <= 0) return
      setStickyVisible((sc / h) > 0.3)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  function closePopupAndPersist(){
    setPopupVisible(false)
    try{ localStorage.setItem(POPUP_KEY, String(Date.now())) }catch(e){}
  }

  function handleCtaClick({ closePopup=false } = {}){
    return (e)=>{
      e && e.preventDefault && e.preventDefault()
      document.body.classList.add('cta-clicked')
      setTimeout(()=> document.body.classList.remove('cta-clicked'), 180)
      if(closePopup) closePopupAndPersist()
      try{ window.location.href = CTA_URL }catch(err){}
    }
  }

  return (
    <div className="page-root">

      {popupVisible && (
        <div id="popup-overlay" className="overlay" onClick={(e)=>{ if(e.target === e.currentTarget) closePopupAndPersist() }}>
          <div className="popup-card" role="dialog" aria-modal="true" aria-label="Oferta" id="entry-popup" tabIndex={-1} ref={popupRef}>
            <button className="popup-close" id="popup-close" aria-label="Fechar popup" onClick={closePopupAndPersist}>×</button>
            <div className="popup-icon">⏰</div>
            <h3 className="popup-title">⚠️ ATENÇÃO!</h3>
            <p className="popup-text">Enquanto você lê isso, <strong>alguém está mandando mensagem pra pessoa que você quer.</strong><br/>E provavelmente sabe exatamente o que falar.</p>
            <a className="btn btn-primary popup-btn" id="popup-cta" href={CTA_URL} onClick={handleCtaClick({closePopup:true})}>Não Vou Perder Mais Tempo</a>
          </div>
        </div>
      )}

      <header id="hero" className="hero">
        <div className="badge" id="hero-badge">⚡ Acesso Limitado · Expira em <span id="hero-timer">{timeText}</span></div>
        <div className="hero-inner">
          <h1 className="hero-title">Pare de Ser<br/><span className="gradient">IGNORADO</span></h1>
          <p className="hero-sub">Você sabe aquela pessoa que você quer há meses?<br/><strong>Aquela que você pensa antes de dormir?</strong><br/><strong className="accent">Chegou a hora de parar de sonhar.</strong></p>
          <div className="hero-cta">
            <a className="btn btn-xl btn-gradient" href={CTA_URL} id="main-cta" onClick={handleCtaClick()}>Quero Parar de Ser Ignorado</a>
            <p className="hero-mini">✓ Acesso imediato • ✓ Sem enrolação</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section bg-dark">
          <div className="container">
            <h2 className="section-title">Você Está <span className="highlight-red">Cansado</span> Disso?</h2>
            <div className="cards">
              <div className="card card-alert">Mandar "oi, tudo bem?" e ser <strong>IGNORADO</strong> pela 47ª vez</div>
              <div className="card card-alert">Ver ela online, mas não responder você (<strong>enquanto responde os outros</strong>)</div>
              <div className="card card-alert">Travar na hora de puxar assunto e perder a chance</div>
              <div className="card card-alert">Ser deixado no vácuo depois de 3 mensagens</div>
              <div className="card card-alert">Ver ela com outro cara que "sabe conversar"</div>
            </div>
            <div className="truth">
              <p className="muted">A verdade que ninguém te conta:</p>
              <p className="truth-main"><strong>Não existe gente feia.</strong><br/><strong>Existe gente que não sabe conversar.</strong></p>
              <a href={CTA_URL} className="btn btn-small btn-dark-green">A Solução Que Muda Tudo</a>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <h2 className="section-title">Apresentando o <span className="gradient">Xaveco</span></h2>
            <p className="section-sub">O aplicativo secreto que cria mensagens tão perfeitas, tão naturais e tão interessantes que a pessoa <strong>NÃO CONSEGUE</strong> ignorar.</p>
            <div className="grid-features">
              <div className="feature"><div className="feature-icon">💬</div><h3>Mensagens que Fazem Ela RESPONDER</h3><p>Esqueça "oi, tudo bem?". Tenha aberturas que geram curiosidade instantânea.</p></div>
              <div className="feature"><div className="feature-icon">❤️</div><h3>Crie Conexão Emocional REAL</h3><p>Conversas que fazem ela sentir algo especial. Não é manipulação, é inteligência emocional.</p></div>
              <div className="feature"><div className="feature-icon">⚡</div><h3>Escape da Friendzone</h3><p>Mensagens estratégicas que despertam atração sem parecer forçado ou desesperado.</p></div>
            </div>
          </div>
        </section>

        <section className="section bg-dark">
          <div className="container">
            <h2 className="section-title">Pessoas Reais. Resultados Reais.</h2>
            <div className="grid-testimonials">
              <div className="testimonial"><div className="stars">★★★★★</div><p className="quote">"Eu era PÉSSIMO em conversar..."</p><p className="author">Lucas M. — 24 anos <span className="badge">✓ Namora há 4 meses</span></p></div>
              <div className="testimonial"><div className="stars">★★★★★</div><p className="quote">"Funcionou DEMAIS."</p><p className="author">Mariana S. — 27 anos <span className="badge">✓ Primeiro encontro em 3 dias</span></p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Enquanto Você Decide...</h2>
            <div className="decision">
              <div className="option option-bad">Continuar travando, sendo ignorado...</div>
              <div className="option option-good">Ter as mensagens perfeitas, despertar interesse real...</div>
            </div>
            <div className="decision-cta">
              <div className="chip">⏳ Oferta expira em <span id="decision-timer">{timeText}</span></div>
              <a className="btn btn-xl btn-gradient" id="decision-cta" href={CTA_URL} onClick={handleCtaClick()}>Quero Começar Agora</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="quote">"As melhores conversas da sua vida começam com uma única mensagem."</p>
          <p className="footer-strong">O Xaveco escreve essa mensagem por você.</p>
          <p className="legal">© 2024 Xaveco. Todos os direitos reservados.</p>
        </div>
      </footer>

      <a id="sticky-buy" className={`sticky-btn ${stickyVisible ? 'show' : ''}`} href={CTA_URL} onClick={handleCtaClick()}>Ativar Xaveco – R$ 49,90/mês</a>

    </div>
  )
}
