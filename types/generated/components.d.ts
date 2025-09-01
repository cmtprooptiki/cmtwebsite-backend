import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_infos';
  info: {
    displayName: 'About Info';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    infographic: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    displayName: 'Featured Article';
  };
  attributes: {
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksFeaturesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features_blocks';
  info: {
    displayName: 'features block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['black', 'blue']>;
  };
}

export interface BlocksHeroSectionMain extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_section_mains';
  info: {
    displayName: 'Hero Section Main';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    milestones: Schema.Attribute.Component<'elements.milestone', true>;
    theme: Schema.Attribute.Enumeration<['black', 'blue']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'info Block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    theme: Schema.Attribute.Enumeration<['bg-black', 'bg-red-600']>;
  };
}

export interface BlocksLogoCarouselBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logo_carousel_blocks';
  info: {
    displayName: 'logo carousel block';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.logo', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMilestonesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_milestones_blocks';
  info: {
    displayName: 'milestones Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    milestones: Schema.Attribute.Component<'elements.milestone', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph With Image';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksServicesAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_accordion_blocks';
  info: {
    displayName: 'services accordion block';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'elements.service-accordion-item', true>;
  };
}

export interface BlocksStickyMenu extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sticky_menus';
  info: {
    displayName: 'Sticky Menu';
  };
  attributes: {
    hamnavigation: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTeamGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_grids';
  info: {
    displayName: 'Team Grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    team_members: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-member.team-member'
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonialsBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_blocks';
  info: {
    displayName: 'testimonials Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'elements.testimonial-item', true>;
  };
}

export interface BlocksVerticalAccordionBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_vertical_accordion_blocks';
  info: {
    displayName: 'VerticalAccordionBlock';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    items: Schema.Attribute.Component<'blocks.vertical-accordion-item', true>;
    theme: Schema.Attribute.Enumeration<['black', 'white']>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksVerticalAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_vertical_accordion_items';
  info: {
    displayName: 'VerticalAccordionItem';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ElementsBottomLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_bottom_links';
  info: {
    displayName: 'bottomLinks';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['location', 'mail', 'phone']>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsColumns extends Struct.ComponentSchema {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'columns';
  };
  attributes: {
    link: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsMilestone extends Struct.ComponentSchema {
  collectionName: 'components_elements_milestones';
  info: {
    displayName: 'milestone';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.BigInteger;
  };
}

export interface ElementsServiceAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_service_accordion_items';
  info: {
    displayName: 'serviceAccordionItem';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['linkedIn', 'facebook', 'instagram']>;
    url: Schema.Attribute.String;
  };
}

export interface ElementsTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonial_items';
  info: {
    displayName: 'testimonialItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.RichText;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    bottomLink: Schema.Attribute.Component<'elements.bottom-links', true>;
    column: Schema.Attribute.Component<'elements.columns', true>;
    copyrightText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    newsletterButtonLabel: Schema.Attribute.String;
    newsletterInputPlaceholder: Schema.Attribute.String;
    newsletterTitle: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'elements.social-links', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-info': BlocksAboutInfo;
      'blocks.about-section': BlocksAboutSection;
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.features-block': BlocksFeaturesBlock;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.hero-section-main': BlocksHeroSectionMain;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.logo-carousel-block': BlocksLogoCarouselBlock;
      'blocks.milestones-block': BlocksMilestonesBlock;
      'blocks.paragraph': BlocksParagraph;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.services-accordion-block': BlocksServicesAccordionBlock;
      'blocks.sticky-menu': BlocksStickyMenu;
      'blocks.team-grid': BlocksTeamGrid;
      'blocks.testimonials-block': BlocksTestimonialsBlock;
      'blocks.vertical-accordion-block': BlocksVerticalAccordionBlock;
      'blocks.vertical-accordion-item': BlocksVerticalAccordionItem;
      'elements.bottom-links': ElementsBottomLinks;
      'elements.columns': ElementsColumns;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.milestone': ElementsMilestone;
      'elements.service-accordion-item': ElementsServiceAccordionItem;
      'elements.social-links': ElementsSocialLinks;
      'elements.testimonial-item': ElementsTestimonialItem;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
