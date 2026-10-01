import { FormEvent, useEffect, useMemo, useState } from 'react'

/* =========================================================
   EXISTING GOOGLE DRIVE IMAGES
   ---------------------------------------------------------
   These are the same images that were already used in the
   generated frontend. Nothing new has to be uploaded.
   ========================================================= */

const driveImage = (value: string) => {
  const match = value.match(/\/d\/([^/]+)/)
  const fileId = match ? match[1] : value
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2400`
}

const heroOne = driveImage('https://drive.google.com/file/d/15vwf5WvOsS52EhscmTn1y0dwQu6V3YHB/view?usp=sharing')
const heroTwo = driveImage('https://drive.google.com/file/d/11i2olS3JqgI_ZWbZF1_yufMwf2xheRk2/view?usp=sharing')
const heroThree = driveImage('https://drive.google.com/file/d/17_cGgeg8hjo1sltPa8bs4Xmfk43X9UA1/view?usp=sharing')
const heroFour = driveImage('https://drive.google.com/file/d/1JsEXee53RtfDQfzEsNvYHx5lCZCUxExd/view?usp=sharing')

const sigiriyaImage = driveImage('https://drive.google.com/file/d/12vlZRgTbnx3zfWg7PAvg_7Ty7mpPya38/view?usp=sharing')
const ellaImage = driveImage('https://drive.google.com/file/d/1vd_GfpAYaxQpFIAj8kOLCa8HeNBHayJb/view?usp=sharing')
const galleImage = driveImage('https://drive.google.com/file/d/1Ni9XJAp6E8Cvlrzdzb39a_XQUhUCJ2AO/view?usp=sharing')
const yalaImage = driveImage('https://drive.google.com/file/d/1JNVtC0FL4NbsJ8a2ClYsNPc7st53jxaD/view?usp=sharing')

const trainImage = driveImage('https://drive.google.com/file/d/1ukBog520JiDr0Ow2oC1d45363W-WAHXg/view?usp=sharing')
const safariImage = driveImage('https://drive.google.com/file/d/1nm5Z1U1b68EuvAFKj5OWnctz8m31QNph/view?usp=sharing')

const classicImage = driveImage('https://drive.google.com/file/d/189EkI8pfoV8feFetyDnJarEX2zPE9T3Y/view?usp=sharing')
const wildImage = driveImage('https://drive.google.com/file/d/1vcXolaqlwn4wekkAPhA4Wuh-DRVHC3pp/view?usp=sharing')
const honeymoonImage = driveImage('https://drive.google.com/file/d/1WzH4THI8RJsSOhaA6LFCDcHJgN2QDHIi/view?usp=sharing')

const galleryOne = driveImage('https://drive.google.com/file/d/17hPEwBzTjpMf40wwMPCmToKg8tyQQ41h/view?usp=sharing')
const galleryTwo = driveImage('https://drive.google.com/file/d/1R7pMbh3uf1ky-wslLJjcPleSF0IOYCsn/view?usp=sharing')
const galleryThree = driveImage('https://drive.google.com/file/d/1hTayPWXPBvDDUchwkSBbB3iNPpdPQ70l/view?usp=sharing')
const galleryFour = driveImage('https://drive.google.com/file/d/1Q-aoUW0CWOiW7R-Qa7Ub_tPfHTqxRHP6/view?usp=sharing')
const galleryFive = driveImage('https://drive.google.com/file/d/1Ss210RTIYWuzPWWOXiVRfsSpRtw42z4_/view?usp=sharing')
const gallerySix = driveImage('https://drive.google.com/file/d/1qCWNdkCHYQpCD9CDMohrMoVyWGyovdlB/view?usp=sharing')

const teaCountryImage = driveImage('https://drive.google.com/file/d/1vKua7erjZK2MqcrtjWYKM8CXoCtaBUwJ/view?usp=sharing')
const finalCtaImage = driveImage('https://drive.google.com/file/d/1e4a7JFGx6DlFQwUmZOioOe80ztlNWxZH/view?usp=sharing')

const WHATSAPP_NUMBER = '94774546822'
const PHONE_DISPLAY = '+94 77 454 6822'
const EMAIL = 'samanthawmsb@gmail.com'
const ADDRESS = '680/2, Bolanegama, Horampella, Minuwangoda, Sri Lanka'

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

type Service = {
  icon: string
  title: string
  description: string
}

type TourPackage = {
  title: string
  tag: string
  duration: string
  route: string
  description: string
  highlights: string[]
  image: string
}

type Destination = {
  name: string
  category: string
  description: string
  image: string
}

const services: Service[] = [
  {
    icon: '✈',
    title: 'Airport Transfers',
    description:
      'Private pick-up and drop-off arrangements for a smooth start or finish to your Sri Lanka journey.',
  },
  {
    icon: '⌖',
    title: 'All Island Tours',
    description:
      'Flexible multi-day journeys planned around your travel dates, interests, pace and preferred destinations.',
  },
  {
    icon: '▦',
    title: 'City Tours',
    description:
      'Comfortable city experiences that help you discover local culture, landmarks, food and everyday life.',
  },
  {
    icon: '●',
    title: 'Organizing Wild Safari',
    description:
      'Safari arrangements for travellers who want to experience Sri Lanka’s national parks and wildlife responsibly.',
  },
  {
    icon: '▲',
    title: 'Trekking & Hiking',
    description:
      'Scenic walks and hiking experiences through hill country, viewpoints, forests and memorable mountain landscapes.',
  },
  {
    icon: '❧',
    title: 'Nature Trails',
    description:
      'Slower journeys through lush surroundings, waterfalls, tea country and peaceful natural landscapes.',
  },
  {
    icon: '◆',
    title: 'Adventure Activities',
    description:
      'Add active experiences to your trip, with activities selected to suit your destination and comfort level.',
  },
  {
    icon: '≈',
    title: 'Boat Safari',
    description:
      'Relaxing river, lagoon and mangrove boat experiences that reveal another side of Sri Lanka’s natural beauty.',
  },
]

const tourPackages: TourPackage[] = [
  {
    title: 'Classic Sri Lanka Discovery',
    tag: 'Culture + Scenic',
    duration: '8 Days · 7 Nights',
    route: 'Negombo · Sigiriya · Kandy · Nuwara Eliya · Ella · Galle',
    description:
      'A balanced first-time journey combining cultural landmarks, tea country, the scenic highlands and the southern coast.',
    highlights: ['Sigiriya', 'Kandy', 'Scenic train country'],
    image: classicImage,
  },
  {
    title: 'Wildlife & Southern Coast',
    tag: 'Wildlife + Beach',
    duration: '7 Days · 6 Nights',
    route: 'Udawalawe · Yala · Mirissa · Galle',
    description:
      'Designed for nature lovers who want safari experiences, relaxed coastal time and historic southern highlights.',
    highlights: ['Safari', 'Southern beaches', 'Galle Fort'],
    image: wildImage,
  },
  {
    title: 'Romantic Island Escape',
    tag: 'Couples',
    duration: '9 Days · 8 Nights',
    route: 'Kandy · Nuwara Eliya · Ella · Tangalle · Galle',
    description:
      'A slower, more intimate route with cool highlands, scenic journeys and peaceful stays beside the Indian Ocean.',
    highlights: ['Hill country', 'Ella', 'Beach time'],
    image: honeymoonImage,
  },
  {
    title: 'Cultural Triangle Explorer',
    tag: 'Heritage',
    duration: '5 Days · 4 Nights',
    route: 'Dambulla · Sigiriya · Polonnaruwa · Kandy',
    description:
      'A compact cultural route through ancient cities, dramatic landscapes and some of Sri Lanka’s best-known heritage sites.',
    highlights: ['Ancient cities', 'Sigiriya', 'Kandy'],
    image: sigiriyaImage,
  },
  {
    title: 'Hill Country Adventure',
    tag: 'Nature + Hiking',
    duration: '5 Days · 4 Nights',
    route: 'Kandy · Nuwara Eliya · Ella',
    description:
      'Cool mountain air, tea-covered scenery, viewpoints and flexible hiking experiences for travellers who enjoy the outdoors.',
    highlights: ['Tea country', 'Hiking', 'Mountain views'],
    image: ellaImage,
  },
  {
    title: 'Southern Highlights',
    tag: 'Coast + Leisure',
    duration: '6 Days · 5 Nights',
    route: 'Bentota · Galle · Mirissa · Tangalle',
    description:
      'A relaxed coastal escape with heritage, beaches and optional boat or nature experiences along Sri Lanka’s south coast.',
    highlights: ['Galle', 'Beaches', 'Boat experience'],
    image: galleImage,
  },
]

const destinations: Destination[] = [
  {
    name: 'Sigiriya',
    category: 'Culture & Heritage',
    description:
      'An iconic rock fortress surrounded by ancient history, dramatic views and the cultural heart of the island.',
    image: sigiriyaImage,
  },
  {
    name: 'Ella',
    category: 'Hill Country',
    description:
      'Misty valleys, tea landscapes, hiking trails and one of Sri Lanka’s most memorable scenic regions.',
    image: ellaImage,
  },
  {
    name: 'Galle',
    category: 'Southern Coast',
    description:
      'Historic streets, ocean views and an easy-going coastal atmosphere centred around the famous fort.',
    image: galleImage,
  },
  {
    name: 'Yala',
    category: 'Wildlife',
    description:
      'A celebrated national park where forest, grassland and lagoons create rich wildlife habitats.',
    image: yalaImage,
  },
]

const gallery = [galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive, gallerySix]

const faqs = [
  {
    question: 'Can you customize a tour for our dates and interests?',
    answer:
      'Yes. The sample packages are starting ideas only. RS Ceylon Tours can shape the route, duration and activities around your travel dates, interests and pace.',
  },
  {
    question: 'Can I arrange only an airport transfer?',
    answer:
      'Yes. You can contact RS Ceylon Tours for airport transfers as a standalone service or include transfers within a longer tour.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use the trip planner or any WhatsApp button on the website. Share your travel dates, number of travellers and the places or activities you are interested in.',
  },
  {
    question: 'Are the packages shown here fixed?',
    answer:
      'No. They are sample itineraries for the website. Final routes, inclusions and pricing should be confirmed directly with RS Ceylon Tours.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
      <path d="M5 12h13" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="close-icon">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export default function App() {
  const [activeHero, setActiveHero] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const heroImages = useMemo(() => [heroOne, heroTwo, heroThree, heroFour], [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [heroImages.length])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeImage !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, activeImage])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openPackageChat = (tour: TourPackage) => {
    const message = `Hello RS Ceylon Tours, I am interested in the ${tour.title} (${tour.duration}). Please send me more information and a customized quote.`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  const submitPlanner = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const interest = String(form.get('interest') || 'Custom Sri Lanka journey')
    const date = String(form.get('date') || 'Not selected')
    const travellers = String(form.get('travellers') || 'Not selected')
    const message = `Hello RS Ceylon Tours, I would like to plan a trip.\n\nInterest: ${interest}\nTravel date: ${date}\nTravellers: ${travellers}\n\nPlease help me create a suitable itinerary and quote.`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="topbar">
        <div className="page-container topbar-inner">
          <span>Sri Lanka awaits you — explore with a local tour service</span>
          <div className="topbar-links">
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="page-container header-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="RS Ceylon Tours home">
            <span className="brand-main">RS Ceylon</span>
            <span className="brand-sub">Tours</span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            <button onClick={() => scrollTo('services')}>Services</button>
            <button onClick={() => scrollTo('packages')}>Tours</button>
            <button onClick={() => scrollTo('destinations')}>Destinations</button>
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('gallery')}>Gallery</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>

          <div className="header-actions">
            <a
              className="button button-gold header-book"
              href={whatsappLink('Hello RS Ceylon Tours, I would like to plan a Sri Lanka trip.')}
              target="_blank"
              rel="noreferrer"
            >
              Plan my trip <ArrowIcon />
            </a>
            <button
              className="mobile-menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div id="main-content">
        <section className="hero" id="home" aria-label="RS Ceylon Tours introduction">
          <div className="hero-media" aria-hidden="true">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className={`hero-slide ${index === activeHero ? 'active' : ''}`}
              />
            ))}
            <div className="hero-overlay" />
          </div>

          <div className="page-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow light-eyebrow">Private tours · transfers · island experiences</p>
              <h1>
                Your Sri Lanka.
                <br />
                <em>Your story.</em>
              </h1>
              <p className="hero-description">
                Explore iconic places, hidden corners and meaningful local experiences with a journey shaped around you.
              </p>
              <div className="hero-actions">
                <button className="button button-light" onClick={() => scrollTo('packages')}>
                  Explore sample tours <ArrowIcon />
                </button>
                <a
                  className="button button-ghost"
                  href={whatsappLink('Hello RS Ceylon Tours, I would like help planning my Sri Lanka journey.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="hero-trust" aria-label="Service highlights">
                <span>Local assistance</span>
                <span>Custom itineraries</span>
                <span>Direct WhatsApp support</span>
              </div>
            </div>

            <div className="hero-controls" aria-label="Hero image controls">
              <span className="hero-count">
                {String(activeHero + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
              </span>
              <div className="hero-dots">
                {heroImages.map((image, index) => (
                  <button
                    key={image}
                    className={index === activeHero ? 'active' : ''}
                    aria-label={`Show hero image ${index + 1}`}
                    onClick={() => setActiveHero(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="planner-wrap" aria-label="Quick trip planner">
          <div className="page-container">
            <form className="planner-card" onSubmit={submitPlanner}>
              <div className="planner-title">
                <span className="mini-icon">✦</span>
                <div>
                  <strong>Start planning your journey</strong>
                  <small>Send the basics to WhatsApp in one click</small>
                </div>
              </div>

              <label>
                <span>What are you interested in?</span>
                <select name="interest" defaultValue="Custom island tour">
                  <option>Custom island tour</option>
                  <option>Airport transfer</option>
                  <option>Wildlife safari</option>
                  <option>City tour</option>
                  <option>Trekking & hiking</option>
                  <option>Nature trail</option>
                  <option>Adventure activities</option>
                  <option>Boat safari</option>
                </select>
              </label>

              <label>
                <span>Travel date</span>
                <input name="date" type="date" />
              </label>

              <label>
                <span>Travellers</span>
                <select name="travellers" defaultValue="2 travellers">
                  <option>1 traveller</option>
                  <option>2 travellers</option>
                  <option>3–4 travellers</option>
                  <option>5–8 travellers</option>
                  <option>9+ travellers</option>
                </select>
              </label>

              <button className="button button-gold planner-submit" type="submit">
                Plan with us <ArrowIcon />
              </button>
            </form>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="page-container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Everything you need for the journey</p>
                <h2>
                  Travel services,
                  <br />
                  <em>made simple.</em>
                </h2>
              </div>
              <p className="section-lead">
                From the moment you arrive to the day you leave, RS Ceylon Tours can help organize transport, tours and memorable experiences around the island.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <a
                    className="service-link"
                    href={whatsappLink(`Hello RS Ceylon Tours, I would like to know more about ${service.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ask about ${service.title} on WhatsApp`}
                  >
                    Ask about this service <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section packages-section" id="packages">
          <div className="page-container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Sample itineraries</p>
                <h2>
                  Start with an idea.
                  <br />
                  <em>Make it yours.</em>
                </h2>
              </div>
              <div className="section-lead-wrap">
                <p className="section-lead">
                  These packages are sample routes for inspiration. Every itinerary can be adjusted to your dates, interests and travel style.
                </p>
                <span className="sample-note">Sample packages · Final itinerary and quote on request</span>
              </div>
            </div>

            <div className="packages-grid">
              {tourPackages.map((tour) => (
                <article className="package-card" key={tour.title}>
                  <div className="package-image-wrap">
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="package-tag">{tour.tag}</span>
                  </div>
                  <div className="package-content">
                    <span className="package-duration">{tour.duration}</span>
                    <h3>{tour.title}</h3>
                    <p className="package-route">{tour.route}</p>
                    <p className="package-description">{tour.description}</p>
                    <div className="package-highlights">
                      {tour.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <button className="text-button" onClick={() => openPackageChat(tour)}>
                      Request details <ArrowIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section destinations-section" id="destinations">
          <div className="page-container">
            <div className="section-heading compact-heading">
              <p className="eyebrow">Places worth the journey</p>
              <h2>
                Four sides of
                <br />
                <em>Sri Lanka.</em>
              </h2>
            </div>

            <div className="destination-grid">
              {destinations.map((destination) => (
                <article className="destination-card" key={destination.name}>
                  <img src={destination.image} alt={destination.name} loading="lazy" />
                  <div className="destination-shade" />
                  <div className="destination-copy">
                    <span>{destination.category}</span>
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>
                  <a
                    className="destination-action"
                    href={whatsappLink(`Hello RS Ceylon Tours, I am interested in visiting ${destination.name}. Please suggest a tour.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ask about ${destination.name}`}
                  >
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" aria-label="Featured experiences">
          <article className="experience-panel">
            <img src={trainImage} alt="Sri Lankan hill country train journey" loading="lazy" />
            <div className="experience-content dark-panel">
              <p className="eyebrow light-eyebrow">Highland journeys</p>
              <h2>
                Travel slowly.
                <br />
                <em>See more.</em>
              </h2>
              <p>
                Wind through tea country, mountain towns and green valleys while enjoying one of the island’s most memorable travel experiences.
              </p>
              <a href={whatsappLink('Hello RS Ceylon Tours, I am interested in a hill-country and scenic train journey.')} target="_blank" rel="noreferrer" className="text-button light-text">
                Build a hill-country trip <ArrowIcon />
              </a>
            </div>
          </article>

          <article className="experience-panel reverse">
            <img src={safariImage} alt="Wildlife safari in Sri Lanka" loading="lazy" />
            <div className="experience-content light-panel">
              <p className="eyebrow">Wild Sri Lanka</p>
              <h2>
                Get closer to
                <br />
                <em>the wild.</em>
              </h2>
              <p>
                Add a safari to your route and discover landscapes shaped by elephants, birds and the remarkable biodiversity of Sri Lanka.
              </p>
              <a href={whatsappLink('Hello RS Ceylon Tours, I am interested in organizing a wildlife safari.')} target="_blank" rel="noreferrer" className="text-button">
                Ask about safari options <ArrowIcon />
              </a>
            </div>
          </article>
        </section>

        <section className="section about-section" id="about">
          <div className="page-container about-layout">
            <div className="about-image">
              <img src={teaCountryImage} alt="Sri Lankan tea country landscape" loading="lazy" />
              <div className="about-image-card">
                <span>Our priority</span>
                <strong>Your journey, your way.</strong>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow">About RS Ceylon Tours</p>
              <h2>
                Local knowledge.
                <br />
                <em>Personal care.</em>
              </h2>
              <p className="about-intro">
                RS Ceylon Tours helps travellers explore Sri Lanka with flexible planning, direct communication and services that can be shaped around each journey.
              </p>
              <p>
                Whether you need a simple airport transfer, a full island tour or help combining culture, wildlife, nature and the coast, the goal is to make planning clear and travel comfortable.
              </p>

              <div className="about-points">
                <div><strong>01</strong><span>Flexible routes and travel dates</span></div>
                <div><strong>02</strong><span>Direct support before and during the trip</span></div>
                <div><strong>03</strong><span>Services for couples, families and groups</span></div>
                <div><strong>04</strong><span>Experiences across Sri Lanka</span></div>
              </div>

              <a className="button button-forest" href={whatsappLink('Hello Samantha, I would like to discuss a Sri Lanka tour with RS Ceylon Tours.')} target="_blank" rel="noreferrer">
                Talk to Samantha <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="page-container">
            <div className="section-heading split-heading gallery-heading">
              <div>
                <p className="eyebrow">A glimpse of the island</p>
                <h2>
                  Moments worth
                  <br />
                  <em>remembering.</em>
                </h2>
              </div>
              <p className="section-lead">Tap any image to view it larger. The gallery uses the existing images already connected to this project.</p>
            </div>

            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <button key={image} className={`gallery-item gallery-item-${index + 1}`} onClick={() => setActiveImage(index)} aria-label={`Open Sri Lanka gallery image ${index + 1}`}>
                  <img src={image} alt={`Sri Lanka travel moment ${index + 1}`} loading="lazy" />
                  <span>View image</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section" aria-label="Sample traveller reviews">
          <div className="page-container testimonial-layout">
            <div>
              <p className="eyebrow">Traveller experience</p>
              <h2>
                Easy planning.
                <br />
                <em>Memorable journeys.</em>
              </h2>
              <p className="review-disclaimer">Sample review content for the frontend — replace with verified client reviews before launch.</p>
            </div>
            <div className="reviews-grid">
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>“The route felt relaxed and well planned. We had enough time for the highlights without feeling rushed.”</p>
                <strong>Emily & James</strong>
                <span>Sample traveller review</span>
              </article>
              <article className="review-card">
                <div className="stars">★★★★★</div>
                <p>“Being able to discuss the plan directly on WhatsApp made everything simple before our trip.”</p>
                <strong>Daniel</strong>
                <span>Sample traveller review</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="page-container faq-layout">
            <div className="faq-heading">
              <p className="eyebrow">Good to know</p>
              <h2>
                Simple answers
                <br />
                <em>before you travel.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <article className={`faq-item ${isOpen ? 'open' : ''}`} key={faq.question}>
                    <button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                      <span>{faq.question}</span>
                      <strong>{isOpen ? '−' : '+'}</strong>
                    </button>
                    {isOpen && <p>{faq.answer}</p>}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <img src={finalCtaImage} alt="Sri Lankan travel landscape" loading="lazy" />
          <div className="final-cta-overlay" />
          <div className="page-container final-cta-content">
            <p className="eyebrow light-eyebrow">Ready when you are</p>
            <h2>
              Sri Lanka awaits.
              <br />
              <em>Let’s plan your journey.</em>
            </h2>
            <p>Tell us your dates, interests and travel style. We’ll help turn them into a route that feels right for you.</p>
            <div className="contact-actions">
              <a className="button button-light" href={whatsappLink('Hello RS Ceylon Tours, I am ready to plan my Sri Lanka trip.')} target="_blank" rel="noreferrer">
                WhatsApp us <ArrowIcon />
              </a>
              <a className="button button-ghost" href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="page-container">
          <div className="footer-grid">
            <div className="footer-brand-column">
              <div className="footer-brand">
                <span>RS Ceylon</span>
                <small>Tours</small>
              </div>
              <p>Explore · Experience · Create Memories</p>
              <p>Private travel services and customizable journeys across Sri Lanka.</p>
            </div>

            <div className="footer-column">
              <strong>Explore</strong>
              <button onClick={() => scrollTo('services')}>Services</button>
              <button onClick={() => scrollTo('packages')}>Sample Tours</button>
              <button onClick={() => scrollTo('destinations')}>Destinations</button>
              <button onClick={() => scrollTo('gallery')}>Gallery</button>
            </div>

            <div className="footer-column contact-column">
              <strong>Contact</strong>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>{ADDRESS}</span>
            </div>

            <div className="footer-column">
              <strong>Need help?</strong>
              <p>Send your travel dates and ideas directly on WhatsApp for an easier first conversation.</p>
              <a className="footer-whatsapp" href={whatsappLink('Hello RS Ceylon Tours, I would like to plan a trip.')} target="_blank" rel="noreferrer">
                Chat on WhatsApp <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} RS Ceylon Tours. All rights reserved.</span>
            <span>Your Journey, Our Priority</span>
          </div>
        </div>
      </footer>

      <button className="floating-whatsapp" onClick={() => setChatOpen(true)} aria-label="Open WhatsApp contact card">
        <span>WA</span>
        <strong>Need help?</strong>
      </button>

      <div className="mobile-quickbar" aria-label="Quick contact actions">
        <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}><span>Call</span></a>
        <a href={whatsappLink('Hello RS Ceylon Tours, I would like to plan a trip.')} target="_blank" rel="noreferrer"><span>WhatsApp</span></a>
        <button onClick={() => scrollTo('packages')}><span>Tours</span></button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-top">
            <div className="footer-brand">
              <span>RS Ceylon</span>
              <small>Tours</small>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close navigation menu"><CloseIcon /></button>
          </div>
          <nav className="mobile-nav">
            {[
              ['Home', 'home'],
              ['Services', 'services'],
              ['Sample Tours', 'packages'],
              ['Destinations', 'destinations'],
              ['About', 'about'],
              ['Gallery', 'gallery'],
              ['Contact', 'contact'],
            ].map(([label, id], index) => (
              <button key={id} onClick={() => scrollTo(id)}>
                <small>0{index + 1}</small>
                <span>{label}</span>
                <ArrowIcon />
              </button>
            ))}
          </nav>
          <a className="button button-gold mobile-menu-cta" href={whatsappLink('Hello RS Ceylon Tours, I would like to plan a Sri Lanka trip.')} target="_blank" rel="noreferrer">
            Plan my trip <ArrowIcon />
          </a>
        </div>
      )}

      {chatOpen && (
        <div className="chat-overlay" role="presentation" onMouseDown={() => setChatOpen(false)}>
          <div className="chat-card" role="dialog" aria-modal="true" aria-label="Contact RS Ceylon Tours" onMouseDown={(event) => event.stopPropagation()}>
            <button className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close contact card"><CloseIcon /></button>
            <span className="chat-badge">RS CEYLON TOURS</span>
            <h3>Ayubowan 👋</h3>
            <p>Tell us what kind of Sri Lanka journey you have in mind. You can continue directly on WhatsApp.</p>
            <div className="chat-person">
              <span className="avatar">SW</span>
              <div>
                <strong>Samantha Waniasekara</strong>
                <small>RS Ceylon Tours</small>
              </div>
            </div>
            <a className="button button-whatsapp" href={whatsappLink('Hello Samantha, I found RS Ceylon Tours online and would like help planning my trip.')} target="_blank" rel="noreferrer">
              Start WhatsApp chat <ArrowIcon />
            </a>
            <a className="chat-call" href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>Or call {PHONE_DISPLAY}</a>
          </div>
        </div>
      )}

      {activeImage !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Close gallery"><CloseIcon /></button>
          <button
            className="lightbox-arrow prev"
            onClick={() => setActiveImage((activeImage + gallery.length - 1) % gallery.length)}
            aria-label="Previous gallery image"
          >
            ←
          </button>
          <img src={gallery[activeImage]} alt={`Sri Lanka travel moment ${activeImage + 1}`} />
          <button
            className="lightbox-arrow next"
            onClick={() => setActiveImage((activeImage + 1) % gallery.length)}
            aria-label="Next gallery image"
          >
            →
          </button>
          <span className="lightbox-count">{activeImage + 1} / {gallery.length}</span>
        </div>
      )}
    </main>
  )
}
