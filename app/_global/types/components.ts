import type { JSX } from "vue/jsx-runtime";

export type DivAttributes = /* @vue-ignore */ JSX.IntrinsicElements['div'];
export type AsDiv = DivAttributes & {
	as?: 'div';
};
export type SectionAttributes = /* @vue-ignore */ JSX.IntrinsicElements['section'];
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = /* @vue-ignore */ JSX.IntrinsicElements['a'];
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type HAttributes = /* @vue-ignore */ JSX.IntrinsicElements['h1'];

export type ParagraphAttributes = /* @vue-ignore */ JSX.IntrinsicElements['p'];

export type UListAttributes = /* @vue-ignore */ JSX.IntrinsicElements['ul'];

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
