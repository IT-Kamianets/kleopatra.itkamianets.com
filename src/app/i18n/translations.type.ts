export type Lang = 'uk' | 'en' | 'pl';

export interface MenuItemT { name: string; weight?: string; desc?: string; price: string; }
export interface MenuSectionT { group: string; title: string; items: MenuItemT[]; }

export interface Translations {
  nav: {
    rooms: string; restaurant: string; leisure: string;
    biznes: string; turizm: string; gallery: string;
    contacts: string; bookBtn: string;
  };

  home: {
    hero: { title: string; subtitle: string; btn1: string; btn2: string; };
    about: { label: string; title: string; span: string; p1: string; p2: string; };
    services: { label: string; title: string; span: string; };
    bentoRooms: { title: string; desc: string; btn: string; };
    bentoRestaurant: { title: string; desc: string; more: string; };
    bentoLeisure: { title: string; desc: string; more: string; };
    bentoBusiness: { title: string; desc: string; more: string; };
    bentoTourism: { title: string; desc: string; more: string; };
    whyUs: { label: string; title: string; span: string; };
    features: Array<{ title: string; desc: string; }>;
    stats: Array<{ label: string; }>;
    cta: { title: string; span: string; desc: string; btn1: string; btn2: string; };
  };

  numbers: {
    label: string; title: string; span: string; subtitle: string;
    categories: Array<{ id: string; label: string; }>;
    rooms: Array<{
      id: number; category: string; name: string; price: string;
      size: string; capacity: string; image: string;
      features: string[]; badge?: string;
    }>;
    detailsBtn: string;
    cta: { text: string; btn1: string; btn2: string; };
  };

  roomDetail: {
    backBtn: string; hotelLabel: string; includedTitle: string;
    variantsTitle: string; variantsSpan: string;
    galleryTitle: string; gallerySpan: string;
    amenitiesTitle: string; amenitiesSpan: string;
    bookTitle: string; bookSpan: string; bookSubtitle: string;
    callBtn: string; writeBtn: string; bookVariantBtn: string;
    notFound: string; allRooms: string;
    rooms: Record<string, {
      title: string; subtitle: string; description: string;
      amenities: string[];
      variants: Array<{ name: string; price: string; size: string; capacity: string; details: string[]; }>;
      included: string[];
    }>;
  };

  menu: {
    label: string; title: string; span: string; subtitle: string;
    groups: Array<{ id: string; label: string; }>;
    sections: MenuSectionT[];
    cta: { title: string; desc: string; btn1: string; btn2: string; };
  };

  restaurants: {
    label: string; title: string; span: string; subtitle: string;
    aboutLabel: string; aboutTitle: string; aboutSpan: string;
    aboutP1: string; aboutP2: string;
    hours: Array<{ icon: string; label: string; time: string; }>;
    btn1: string; btn2: string;
    hallsLabel: string; hallsTitle: string; hallsSpan: string;
    halls: Array<{ name: string; type: string; desc: string; img: string; }>;
    ctaLabel: string; ctaTitle: string; ctaSpan: string;
    ctaDesc: string; ctaBtn1: string; ctaBtn2: string;
  };

  leisure: {
    label: string; title: string; span: string; subtitle: string;
    spaItems: string[];
    services: Array<{ title: string; desc: string; }>;
    spaLabel: string; spaTitle: string; spaSpan: string; spaSuffix: string; spaP: string; spaBtn: string;
  };

  biznes: {
    label: string; title: string; span: string; subtitle: string;
    services: Array<{ title: string; desc: string; }>;
    confLabel: string; confTitle: string; confSpan: string; confDesc: string;
    specs: Array<{ label: string; value: string; }>;
    confBtn: string;
  };

  turizm: {
    label: string; title: string; span: string; subtitle: string;
    attractionsTitle: string; attractionsSpan: string;
    attractions: Array<{ name: string; desc: string; distance: string; }>;
    mapTitle: string; mapSpan: string;
    legend1Title: string; legend1Span: string; legend1Items: string[];
    legend2Title: string; legend2Span: string;
    legend2Items: Array<{ name: string; desc: string; }>;
    toursTitle: string; toursSpan: string; toursSubtitle: string;
    tours: Array<{ name: string; duration: string; price: string; group: string; }>;
    tourBtn: string; tourIndividual: string; tourCta: string;
  };

  gallery: {
    label: string; title: string; subtitle: string;
    categories: Array<{ id: string; label: string; }>;
  };

  contacts: {
    label: string; title: string; subtitle: string; formTitle: string; infoTitle: string;
    form: {
      name: { label: string; placeholder: string; error: string; };
      email: { label: string; placeholder: string; error: string; };
      phone: { label: string; placeholder: string; };
      subject: { label: string; booking: string; restaurant: string; event: string; other: string; };
      message: { label: string; placeholder: string; error: string; };
      submitBtn: string;
    };
    success: { title: string; desc: string; again: string; };
    infoItems: Array<{ title: string; lines: string[]; }>;
    directCall: string;
  };

  footer: {
    about: string; navTitle: string; contactsTitle: string;
    bookingTitle: string; reception: string;
    checkinLabel: string; checkinValue: string;
    bookBtn: string; address: string; links: Array<{ label: string; path: string; }>;
    copyright: string; city: string;
  };

  common: {
    detailsBtn: string; bookBtn: string; callBtn: string;
    writeBtn: string; orderBtn: string; moreBtn: string;
  };
}
