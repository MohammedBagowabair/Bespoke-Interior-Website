export const WA = '60166060615'
export const PHONE = '+60 16-606 0615'
export const EMAIL = 'sherman@bespokeinterior.com.my'
export const FB = 'https://www.facebook.com/bespokeinteriormy'
export const IG = 'https://www.instagram.com/bespokeinterior_my/'
export const MAPS = 'https://www.google.com/maps/search/?api=1&query=Menara+2+KL+Eco+City+3+Jalan+Bangsar+59200+Kuala+Lumpur'
export const PITCH_WA = 'https://wa.me/601151198497'

export type SectorKey = 'corporate' | 'medical' | 'hotel' | 'fnb'
export type Project = { id: string; img: string; sector: SectorKey; name: string; client: string }

export const projects: Project[] = [
  { id: 'tdcx-google', img: 'tdcx-google', sector: 'corporate', name: 'Google Office, Level 7 & 8', client: 'TDCX Malaysia' },
  { id: 'tdcx-razer', img: 'tdcx-razer', sector: 'corporate', name: 'Razer & DJI', client: 'TDCX Malaysia' },
  { id: 'gsk', img: 'gsk', sector: 'corporate', name: 'GlaxoSmithKline Pharmaceutical', client: 'GSK' },
  { id: 'renaissance', img: 'renaissance', sector: 'hotel', name: 'Gym, Spa & Child Care Centre', client: 'Renaissance Hotel' },
  { id: 'dermadarah', img: 'dermadarah', sector: 'medical', name: 'DermaDarah Blood Donation Centre', client: 'PPUM' },
  { id: 'ppum', img: 'ppum', sector: 'medical', name: 'Pusat Perubatan Universiti Malaya', client: 'PPUM' },
  { id: 'celsius', img: 'celsius', sector: 'fnb', name: 'Celsius Coffee', client: 'Celsius Coffee' },
]

export const clients = ['GSK', 'TDCX', 'Roche', 'Cushman & Wakefield', 'PPUM', 'Universiti Malaya', 'Celsius Coffee', 'Renaissance Hotel']

const en = {
  nav: { sectors: 'Sectors', projects: 'Projects', services: 'Services', process: 'Process', studio: 'Studio', contact: 'Contact' },
  langLabel: 'BM',
  langAria: 'Tukar ke Bahasa Melayu',
  menu: 'Menu', close: 'Close',
  hero: {
    eyebrow: 'Interior design & build · KL Eco City',
    title1: 'Interiors built around',
    title2: 'how you work.',
    lead: 'Corporate offices, clinics, hotels and cafés — designed, built and project-managed by one team, with a single point of contact from first sketch to final walk-through.',
    cta: 'Start a project on WhatsApp',
    cta2: 'See our work',
    switchLabel: 'Explore by sector',
    now: 'Project',
    photo: 'Photo: Bespoke Interior',
  },
  sectorNames: { corporate: 'Corporate', medical: 'Medical', hotel: 'Hotel', fnb: 'F&B' } as Record<SectorKey, string>,
  stats: [
    { k: '9', v: 'sectors served' },
    { k: '1', v: 'point of contact' },
    { k: '5.0', v: 'Google rating' },
  ],
  clientsLabel: 'Projects & clients featured on our portfolio',
  sectors: {
    kicker: 'Sectors',
    title: 'One studio, nine kinds of space.',
    lead: 'We started with homes, then grew into the commercial and corporate work that now defines us. Each sector has its own rules — we know them.',
    items: [
      ['Corporate office', 'Workplaces that carry your brand and support how teams actually work.'],
      ['Commercial', 'Shared and leased spaces planned for flexibility and long life.'],
      ['Retail', 'Layouts that guide customers and showcase product.'],
      ['F&B', 'Cafés and restaurants that work hard behind the counter and look good in front of it.'],
      ['Bank branches', 'Secure, orderly and welcoming customer halls.'],
      ['Medical centres', 'Clean, durable and calm spaces for patients and staff.'],
      ['Hotels', 'Guest-facing amenities — gyms, spas and family areas.'],
      ['Residential', 'Where we began: homes tailored to the people in them.'],
      ['Factory', 'Practical offices and facilities within industrial sites.'],
    ],
  },
  work: {
    kicker: 'Selected projects',
    title: 'Work that is already in use.',
    all: 'All',
    view: 'View project',
    note: 'Project photos from bespokeinterior.com.my',
    sheetSector: 'Sector',
    sheetClient: 'Client',
    sheetCta: 'Discuss a similar project',
    sheetWa: 'Hi Bespoke Interior, I saw your project "{p}" and would like to discuss something similar.',
  },
  services: {
    kicker: 'Services',
    title: 'Three ways to work with us.',
    items: [
      { t: 'Design & Build', d: 'Design and construction under one roof. Our designers and builders work side by side, so what is drawn is what gets built — a cohesive, turnkey result with one team accountable.', tags: ['Turnkey', 'Single contract', 'Fit-out'] },
      { t: 'Interior Consultation', d: 'We study how you use your space, then recommend the right layout, design and functionality — custom solutions that reflect your brand or personal taste.', tags: ['Space planning', 'Concept', 'Layout'] },
      { t: 'Corporate Project Management', d: 'For offices, retail, F&B, banks, clinics and hotels: experienced project managers oversee planning, design, construction and the final walk-through.', tags: ['Planning', 'Site coordination', 'Handover'] },
    ],
  },
  process: {
    kicker: 'Process',
    title: 'From brief to keys, one line of communication.',
    steps: [
      ['Consult', 'We listen to your brief, budget and timeline and visit the site.'],
      ['Design', 'Layout, concept and specifications developed with you.'],
      ['Build', 'Our team builds and coordinates every trade on site.'],
      ['Walk-through', 'Final inspection together before handover.'],
    ],
  },
  studio: {
    kicker: 'Studio',
    title: 'Designers and project managers, in one team.',
    p1: 'Bespoke Interior began with residential projects and quickly saw the need for professional design in the commercial and corporate world. Today our team of experienced designers and project managers takes on workplaces, healthcare, hospitality and F&B across the Klang Valley.',
    p2: 'Every project starts fresh. We take time to understand your needs, then turn them into a space that is functional, visually striking and true to your brand.',
    teamLabel: 'The team',
    team: [['Sherman Ho', 'Sr. Interior Designer'], ['Zack', 'Sr. Interior Designer'], ['Reezan', 'Business Development'], ['Shah Rasih', 'Business Development'], ['Salleh Sani', 'Marketing'], ['Lori Harvey', 'Executive Accountant']],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Good questions.',
    items: [
      ['Do you only design offices?', 'No. Besides corporate offices we work on commercial, retail, F&B, bank branches, medical centres, hotels, residential and factory projects.'],
      ['Can you handle both design and construction?', 'Yes. Our Design & Build service is turnkey — one team and one point of contact from design through to completion.'],
      ['Do you offer consultation only?', 'Yes. Our Interior Consultation service gives expert advice on design, layout and functionality, even before you commit to a full build.'],
      ['Where is your studio?', 'Level 19, Boutique Office 1 (B-01-D), Menara 2, KL Eco City, Jalan Bangsar, Kuala Lumpur.'],
      ['How do we get started?', 'Send us a WhatsApp or email with your location, approximate floor area and target timeline, and we will arrange a consultation.'],
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Planning a new space?',
    lead: 'Tell us about your space and timeline. Sherman and the team will get back to you.',
    wa: 'WhatsApp us',
    waText: 'Hi Bespoke Interior, I would like to discuss an interior project.',
    call: 'Call', email: 'Email', visit: 'Visit', directions: 'Get directions',
    address: 'Level 19, Boutique Office 1 (B-01-D), Menara 2, KL Eco City, No. 3 Jalan Bangsar, 59200 Kuala Lumpur',
    follow: 'Follow',
  },
  footer: {
    tagline: 'Design For You',
    pitch: 'Website concept prepared for this studio. Not an official site yet — open to making it yours.',
    pitchLink: 'Talk to the designer',
    credit: 'Project photography © Bespoke Interior.',
  },
}

export type Content = typeof en

const ms: Content = {
  nav: { sectors: 'Sektor', projects: 'Projek', services: 'Servis', process: 'Proses', studio: 'Studio', contact: 'Hubungi' },
  langLabel: 'EN',
  langAria: 'Switch to English',
  menu: 'Menu', close: 'Tutup',
  hero: {
    eyebrow: 'Reka bentuk & bina dalaman · KL Eco City',
    title1: 'Ruang dalaman dibina',
    title2: 'mengikut cara anda bekerja.',
    lead: 'Pejabat korporat, klinik, hotel dan kafe — direka, dibina dan diurus oleh satu pasukan, dengan satu titik hubungan dari lakaran pertama hingga pemeriksaan akhir.',
    cta: 'Mulakan projek di WhatsApp',
    cta2: 'Lihat hasil kerja',
    switchLabel: 'Teroka mengikut sektor',
    now: 'Projek',
    photo: 'Foto: Bespoke Interior',
  },
  sectorNames: { corporate: 'Korporat', medical: 'Perubatan', hotel: 'Hotel', fnb: 'F&B' },
  stats: [
    { k: '9', v: 'sektor diurus' },
    { k: '1', v: 'titik hubungan' },
    { k: '5.0', v: 'penarafan Google' },
  ],
  clientsLabel: 'Projek & pelanggan dalam portfolio kami',
  sectors: {
    kicker: 'Sektor',
    title: 'Satu studio, sembilan jenis ruang.',
    lead: 'Kami bermula dengan rumah kediaman, kemudian berkembang ke projek komersial dan korporat yang kini menjadi kekuatan kami. Setiap sektor ada peraturannya — kami memahaminya.',
    items: [
      ['Pejabat korporat', 'Ruang kerja yang membawa jenama anda dan menyokong cara pasukan sebenarnya bekerja.'],
      ['Komersial', 'Ruang sewaan dan perkongsian yang dirancang untuk fleksibel dan tahan lama.'],
      ['Runcit', 'Susun atur yang memandu pelanggan dan menonjolkan produk.'],
      ['F&B', 'Kafe dan restoran yang cekap di belakang kaunter dan menarik di hadapannya.'],
      ['Cawangan bank', 'Dewan pelanggan yang selamat, teratur dan mesra.'],
      ['Pusat perubatan', 'Ruang yang bersih, tahan lasak dan tenang untuk pesakit serta kakitangan.'],
      ['Hotel', 'Kemudahan tetamu — gimnasium, spa dan ruang keluarga.'],
      ['Kediaman', 'Permulaan kami: rumah yang disesuaikan untuk penghuninya.'],
      ['Kilang', 'Pejabat dan kemudahan praktikal di tapak perindustrian.'],
    ],
  },
  work: {
    kicker: 'Projek terpilih',
    title: 'Hasil kerja yang sedang digunakan.',
    all: 'Semua',
    view: 'Lihat projek',
    note: 'Foto projek daripada bespokeinterior.com.my',
    sheetSector: 'Sektor',
    sheetClient: 'Pelanggan',
    sheetCta: 'Bincang projek serupa',
    sheetWa: 'Hai Bespoke Interior, saya melihat projek "{p}" dan ingin berbincang tentang projek yang serupa.',
  },
  services: {
    kicker: 'Servis',
    title: 'Tiga cara bekerja dengan kami.',
    items: [
      { t: 'Reka & Bina', d: 'Reka bentuk dan pembinaan di bawah satu bumbung. Pereka dan pembina kami bekerja seiring, jadi apa yang dilukis itulah yang dibina — hasil turnkey yang padu dengan satu pasukan bertanggungjawab.', tags: ['Turnkey', 'Satu kontrak', 'Kemasan dalaman'] },
      { t: 'Perundingan Dalaman', d: 'Kami mengkaji cara anda menggunakan ruang, kemudian mencadangkan susun atur, reka bentuk dan fungsi yang sesuai — penyelesaian khas yang mencerminkan jenama atau citarasa anda.', tags: ['Perancangan ruang', 'Konsep', 'Susun atur'] },
      { t: 'Pengurusan Projek Korporat', d: 'Untuk pejabat, runcit, F&B, bank, klinik dan hotel: pengurus projek berpengalaman memantau perancangan, reka bentuk, pembinaan dan pemeriksaan akhir.', tags: ['Perancangan', 'Koordinasi tapak', 'Serahan'] },
    ],
  },
  process: {
    kicker: 'Proses',
    title: 'Dari taklimat hingga kunci, satu saluran komunikasi.',
    steps: [
      ['Perundingan', 'Kami mendengar taklimat, bajet dan jadual anda serta melawat tapak.'],
      ['Reka bentuk', 'Susun atur, konsep dan spesifikasi dibangunkan bersama anda.'],
      ['Pembinaan', 'Pasukan kami membina dan menyelaras setiap kerja di tapak.'],
      ['Pemeriksaan', 'Pemeriksaan akhir bersama sebelum serahan.'],
    ],
  },
  studio: {
    kicker: 'Studio',
    title: 'Pereka dan pengurus projek, dalam satu pasukan.',
    p1: 'Bespoke Interior bermula dengan projek kediaman dan cepat menyedari keperluan reka bentuk profesional dalam dunia komersial dan korporat. Kini pasukan pereka dan pengurus projek kami mengendalikan ruang kerja, penjagaan kesihatan, hospitaliti dan F&B di sekitar Lembah Klang.',
    p2: 'Setiap projek bermula dengan pandangan baharu. Kami meluangkan masa memahami keperluan anda, kemudian menjadikannya ruang yang berfungsi, menarik dan setia kepada jenama anda.',
    teamLabel: 'Pasukan',
    team: [['Sherman Ho', 'Pereka Dalaman Kanan'], ['Zack', 'Pereka Dalaman Kanan'], ['Reezan', 'Pembangunan Perniagaan'], ['Shah Rasih', 'Pembangunan Perniagaan'], ['Salleh Sani', 'Pemasaran'], ['Lori Harvey', 'Akauntan Eksekutif']],
  },
  faq: {
    kicker: 'Soalan lazim',
    title: 'Soalan yang baik.',
    items: [
      ['Adakah anda hanya mereka pejabat?', 'Tidak. Selain pejabat korporat, kami mengendalikan projek komersial, runcit, F&B, cawangan bank, pusat perubatan, hotel, kediaman dan kilang.'],
      ['Bolehkah anda uruskan reka bentuk dan pembinaan sekali?', 'Boleh. Servis Reka & Bina kami adalah turnkey — satu pasukan dan satu titik hubungan dari reka bentuk hingga siap.'],
      ['Adakah anda menawarkan perundingan sahaja?', 'Ya. Servis Perundingan Dalaman kami memberi nasihat pakar tentang reka bentuk, susun atur dan fungsi, sebelum anda komited kepada pembinaan penuh.'],
      ['Di manakah studio anda?', 'Aras 19, Boutique Office 1 (B-01-D), Menara 2, KL Eco City, Jalan Bangsar, Kuala Lumpur.'],
      ['Bagaimana untuk bermula?', 'Hantar WhatsApp atau e-mel bersama lokasi, anggaran keluasan lantai dan sasaran jadual anda, dan kami akan mengatur sesi perundingan.'],
    ],
  },
  contact: {
    kicker: 'Hubungi',
    title: 'Merancang ruang baharu?',
    lead: 'Ceritakan tentang ruang dan jadual anda. Sherman dan pasukan akan menghubungi anda.',
    wa: 'WhatsApp kami',
    waText: 'Hai Bespoke Interior, saya ingin berbincang tentang projek dalaman.',
    call: 'Telefon', email: 'E-mel', visit: 'Lawati', directions: 'Dapatkan arah',
    address: 'Aras 19, Boutique Office 1 (B-01-D), Menara 2, KL Eco City, No. 3 Jalan Bangsar, 59200 Kuala Lumpur',
    follow: 'Ikuti',
  },
  footer: {
    tagline: 'Design For You',
    pitch: 'Konsep laman web disediakan untuk studio ini. Bukan laman rasmi lagi — sedia dijadikan milik anda.',
    pitchLink: 'Hubungi pereka',
    credit: 'Fotografi projek © Bespoke Interior.',
  },
}

export const content = { en, ms }
