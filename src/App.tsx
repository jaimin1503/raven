import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Aperture,
  Camera,
  Check,
  ChevronDown,
  Clapperboard,
  Lock,
  Gauge,
  Instagram,
  Menu,
  MoveRight,
  Play,
  ScanLine,
  X,
} from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'What is RAVEN?',
    answer: 'RAVEN is an Android camera that records what your sensor actually sees: untouched RAW frames, before any phone processing, sharpening or noise reduction. It is built by TwoPixel Labs.',
  },
  {
    question: 'Which Android devices are supported?',
    answer: "RAW capture needs a phone whose camera supports Android's RAW_SENSOR output, on Android 10 or newer. Many recent mid-range and flagship phones do, but not all, and support can differ between rear and front cameras. RAVEN tells you on launch if a camera can't capture RAW.",
  },
  {
    question: 'What do I get out of a RAW recording?',
    answer: 'Every frame of a take is saved as a RAW sensor frame, with a lightweight preview video recorded alongside so you can play it back the moment you stop. When you are ready, RAVEN exports a high-bitrate HEVC video in Rec.709 for sharing or S-Log3 for grading. Photos are saved as standard DNG files for Lightroom, Darktable or RawTherapee.',
  },
  {
    question: 'How much storage does it need?',
    answer: 'RAW files are large: a few seconds of RAW video can take several gigabytes before export. You can keep the RAW frames for re-exporting later, or clean them up automatically after saving.',
  },
  {
    question: 'Does RAVEN collect my data?',
    answer: 'No. The app has no internet access, no accounts, no ads and no tracking. Your photos and videos never leave your phone unless you share them.',
  },
  {
    question: 'How do I get the app?',
    answer: 'RAVEN is in closed testing on Google Play. Join the tester group with the Google account you use on your Android phone, then opt in on Google Play and install. It takes about a minute, and you get updates through the Play Store like any other app.',
  },
];

const featureCards = [
  {
    number: '01',
    icon: Clapperboard,
    title: 'True RAW video',
    description: 'Every frame saved straight from the sensor, then exported to smooth, high-bitrate HEVC when you are ready.',
    label: 'SENSOR / VIDEO',
  },
  {
    number: '02',
    icon: Aperture,
    title: 'DNG photos',
    description: 'Single RAW photos as standard DNG files, ready for any RAW editor. Live photos capture a short clip around the shot.',
    label: 'STILLS / DNG',
  },
  {
    number: '03',
    icon: ScanLine,
    title: 'Monitoring tools',
    description: 'Histogram, zebra stripes, focus peaking and a framing grid, one tap away.',
    label: 'MONITOR / PRECISION',
  },
];

// Must also be added in Play Console → Closed testing → Testers
const TESTER_GROUP_URL = 'https://groups.google.com/g/ravenroll-testers/about';
const PLAY_OPT_IN_URL = 'https://play.google.com/apps/testing/com.twopixellabs.raven';
const INSTAGRAM_URL = 'https://www.instagram.com/theravenroll/';

function EarlyAccessSteps() {
  return (
    <div className="access-steps">
      <a className="access-step" href={TESTER_GROUP_URL} target="_blank" rel="noopener noreferrer"><span className="mono">STEP 01</span><strong>Join the tester group</strong><ArrowUpRight size={18} /></a>
      <a className="access-step" href={PLAY_OPT_IN_URL} target="_blank" rel="noopener noreferrer"><span className="mono">STEP 02</span><strong>Opt in and install from Google Play</strong><ArrowUpRight size={18} /></a>
      <small className="signup-note">Use the same Google account as on your Android phone. Joining the group is what gives you access on Play.</small>
    </div>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="RAVEN home">
      <span className="logo-mark"><span /></span>
      <span>RAVEN</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = (): void => setMenuOpen(false);
  const toggleFaq = (index: number): void => setOpenFaq(openFaq === index ? null : index);

  return (
    <main id="top">
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#footage">Footage</a>
            <a href="#workflow">How it works</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#early-access">Join early access <ArrowRight size={15} /></a>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#footage" onClick={closeMenu}>Footage</a>
            <a href="#workflow" onClick={closeMenu}>How it works</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="mobile-cta" href="#early-access" onClick={closeMenu}>Join early access <ArrowRight size={16} /></a>
          </nav>
        )}
      </header>

      <section className="hero section-pad">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> RAW VIDEO ENGINE <span className="eyebrow-divider" /> ANDROID <span className="eyebrow-divider" /> CLOSED TESTING</div>
            <h1>Your phone.<br /><em>Your frame.</em><br />Your vision.</h1>
            <p className="hero-lede">Record what your camera sensor actually sees. Untouched RAW frames, before any phone processing, sharpening or noise reduction.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#early-access">Join early access <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#showcase"><span className="play-icon"><Play size={13} fill="currentColor" /></span> See it in action</a>
            </div>
            <div className="hero-note"><span className="mono">GOOGLE PLAY</span><span className="rule" /><span>Now in closed testing</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="hero-image-frame">
              <img src="/assets/images/screenshot-sample.png" alt="A mountain ridge captured through RAVEN" />
              <div className="hero-image-shade" />
              <div className="crosshair crosshair-one" /><div className="crosshair crosshair-two" />
              <div className="capture-meta top-meta"><span className="live-dot" /> REC <span>00:12:08</span></div>
              <div className="capture-meta bottom-meta"><span>RAVEN / RAW DNG</span><span>ONEPLUS 9R</span></div>
              <div className="frame-label">FRAME<br /><strong>001</strong></div>
            </div>
            <div className="visual-caption"><span>01</span><span>ALPINE PASS — MONSOON LIGHT</span><span className="mono">RAW / 4:3</span></div>
          </div>
        </div>
        <a className="scroll-cue" href="#footage"><span>Scroll to explore</span><ArrowDown size={16} /></a>
      </section>

      <section className="manifesto section-pad" id="footage">
        <div className="container manifesto-grid">
          <div className="section-kicker">THE RAVEN APPROACH <span /></div>
          <div>
            <h2>Less automation.<br /><span>More intention.</span></h2>
            <p className="section-intro">The best camera is the one that gets out of your way. No AI enhancement. No denoising. No HDR. No sharpening. In manual mode, RAVEN switches off auto processing and puts every decision back in your hands.</p>
            <a className="text-link" href="#features">See what you can control <MoveRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="feature-section section-pad" id="features">
        <div className="container">
          <div className="section-heading-row">
            <div><div className="section-kicker">CONTROL SURFACE <span /></div><h2>Control every<br /><span>part of the frame.</span></h2></div>
            <p className="section-intro compact">A focused toolkit for people who already know what they want the image to say.</p>
          </div>
          <div className="feature-layout">
            <div className="feature-primary">
              <div className="feature-screen-wrap"><img src="/assets/images/screenshot-1.png" alt="RAVEN camera interface showing manual controls and histogram" /></div>
              <div className="feature-primary-copy"><span className="mono accent">FULL MANUAL CONTROL</span><h3>Every setting, by hand.<br />Nothing between you and the shot.</h3><p>Shutter speed, ISO, focus distance and white balance on precise, detented rulers. Exposure compensation, AE/AF lock, tap to meter, and Kelvin and tint when presets are not enough.</p></div>
            </div>
            <div className="feature-stack">
              {featureCards.map(({ number, icon: Icon, title, description, label }) => (
                <article className="feature-card" key={number}>
                  <div className="feature-card-top"><span className="mono">{number}</span><Icon size={22} strokeWidth={1.5} /></div>
                  <div><span className="mono muted">{label}</span><h3>{title}</h3><p>{description}</p></div>
                  <ArrowUpRight />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="raw-section section-pad" id="showcase">
        <div className="container raw-grid">
          <div className="raw-copy"><div className="section-kicker">STRAIGHT FROM THE SENSOR <span /></div><h2>Keep the<br /><span>unprocessed.</span></h2><p className="section-intro">A real RAVEN capture, no phone processing. Start with the complete image and build your look from there.</p><div className="raw-facts"><div><span className="mono">FORMAT</span><strong>RAW DNG</strong></div><div><span className="mono">DEVICE</span><strong>ONEPLUS 9R</strong></div><div><span className="mono">STATUS</span><strong className="accent">UNEDITED</strong></div></div></div>
          <figure className="raw-image"><img loading="lazy" src="/assets/images/screenshot-sample.png" alt="Misty green mountain landscape with a hiker on a ridge" /><figcaption><span>RAVEN CAPTURE / 001</span><span className="accent">NO PHONE PROCESSING</span></figcaption></figure>
        </div>
      </section>

      <section className="technical section-pad">
        <div className="container technical-grid">
          <div><div className="section-kicker">UNDER THE HOOD <span /></div><h2>Built for the<br /><span>details that matter.</span></h2><p className="section-intro">RAVEN talks to the camera through Android's Camera2 API and only treats cameras that advertise RAW support as capturable. Your phone's own processing never touches the recorded frames.</p></div>
          <div className="technical-panel"><div className="panel-header"><span className="mono">RAVEN / CAPTURE PIPELINE</span><span className="live-indicator">● SYSTEM READY</span></div><div className="waveform"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="technical-list"><div><span>01</span><strong>Sensor data</strong><small>RAW_SENSOR frames as DNG, RAW or RCAP, with per-frame metadata</small><Check size={16} /></div><div><span>02</span><strong>Colour pipeline</strong><small>Black level, white balance, colour matrix, gamma</small><Check size={16} /></div><div><span>03</span><strong>Export workflow</strong><small>High-bitrate HEVC in Rec.709 or S-Log3</small><Check size={16} /></div><div><span>04</span><strong>Private by design</strong><small>No internet access, accounts, ads or tracking</small><Lock size={16} /></div></div></div>
        </div>
      </section>

      <section className="workflow section-pad" id="workflow">
        <div className="container"><div className="section-kicker">THE WORKFLOW <span /></div><div className="workflow-heading"><h2>From sensor<br /><span>to cinema.</span></h2><p className="section-intro compact">Four deliberate steps between seeing something and making it yours.</p></div><div className="steps"><div className="step active"><span className="step-number">01</span><Camera /><h3>Capture</h3><p>Record RAW frames by hand, with a preview video recorded alongside.</p></div><div className="step"><span className="step-number">02</span><Play /><h3>Review</h3><p>Play a take back the moment you stop. No waiting on the export.</p></div><div className="step"><span className="step-number">03</span><Gauge /><h3>Export</h3><p>Render HEVC in Rec.709 or S-Log3, in 16:9 up to 21:9.</p></div><div className="step"><span className="step-number">04</span><Clapperboard /><h3>Grade</h3><p>Bring the footage or the DNGs into your editor and develop your look.</p></div></div></div>
      </section>

      <section className="showcase section-pad">
        <div className="container showcase-grid"><div className="showcase-device"><img loading="lazy" src="/assets/images/screenshot-settings.png" alt="RAVEN settings interface showing full sensor and DNG options" /><div className="device-reflection" /></div><div className="showcase-copy"><div className="section-kicker">MEET YOUR CAMERA <span /></div><h2>Settings that<br /><span>feel like yours.</span></h2><p className="section-intro">Full sensor. Any aspect ratio. Keep DNG or RAW. The interface stays calm so the decisions can stay yours.</p><div className="showcase-tags"><span>FULL SENSOR</span><span>16:9 — 21:9</span><span>DNG / RAW</span><span>REC.709 / S-LOG3</span></div><a className="text-link" href="#early-access">Join the closed test <MoveRight size={17} /></a></div></div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="container faq-grid"><div><div className="section-kicker">QUESTIONS, ANSWERED <span /></div><h2>Good to<br /><span>know.</span></h2><p className="section-intro">RAVEN is built around the reality of Android camera hardware. Here is what to expect.</p></div><div className="faq-list">{faqs.map((item, index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.question}><button type="button" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}><span>{item.question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{item.answer}</p>}</div>)}</div></div>
      </section>

      <section className="cta-section section-pad" id="early-access"><div className="container cta-inner"><div className="cta-mark"><span /></div><div><div className="section-kicker">TWO PIXEL LABS <span /></div><h2>Make more of<br /><span>every frame.</span></h2><p>RAVEN is in closed testing on Google Play. Join the tester group, opt in, and install. No waiting for an invite.</p><EarlyAccessSteps /></div></div></section>

      <footer className="site-footer" id="about"><div className="container footer-top"><div><Logo /><p>Your phone. Your frame. Your vision.</p></div><div className="footer-columns"><div><span className="mono">EXPLORE</span><a href="#features">Features</a><a href="#footage">Footage</a><a href="#workflow">How it works</a></div><div><span className="mono">CONTACT</span><a href="mailto:twopixellabs@gmail.com">Support</a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={13} /> @theravenroll</a><a href="#early-access">Early access</a><a href="#faq">FAQ</a></div></div></div><div className="container footer-bottom"><span>© 2026 TwoPixel Labs</span><span>Made for the details.</span><span className="footer-status"><i /> CLOSED TESTING / ANDROID</span></div></footer>
    </main>
  );
}

export default App;
