import React from 'react';

/**
 * PixelIcon — maps semantic icon names to pixelarticons classes.
 * Social icons (github, instagram, facebook, tiktok) are inline
 * pixel-grid SVGs drawn on a 16x16 viewBox using only <rect> elements.
 */

// Inline pixel SVG icons (16×16 grid, each rect = 1 pixel)
const SVG_ICONS = {
  github: (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {/* GitHub pixel cat head */}
      <rect x="4" y="1" width="8" height="1"/><rect x="3" y="2" width="10" height="1"/>
      <rect x="2" y="3" width="12" height="1"/><rect x="1" y="4" width="14" height="1"/>
      <rect x="1" y="5" width="14" height="1"/><rect x="1" y="6" width="14" height="1"/>
      <rect x="1" y="7" width="14" height="1"/>
      {/* eye gaps */}
      <rect x="1" y="8" width="4" height="1"/><rect x="7" y="8" width="2" height="1"/><rect x="11" y="8" width="4" height="1"/>
      <rect x="1" y="9" width="3" height="1"/><rect x="5" y="9" width="6" height="1"/><rect x="12" y="9" width="3" height="1"/>
      <rect x="2" y="10" width="12" height="1"/><rect x="3" y="11" width="10" height="1"/>
      <rect x="4" y="12" width="3" height="1"/><rect x="9" y="12" width="3" height="1"/>
      <rect x="3" y="13" width="3" height="2"/><rect x="10" y="13" width="3" height="2"/>
      {/* ears */}
      <rect x="1" y="2" width="2" height="2"/><rect x="13" y="2" width="2" height="2"/>
    </svg>
  ),
  instagram: (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {/* outer square */}
      <rect x="1" y="1" width="14" height="2"/><rect x="1" y="13" width="14" height="2"/>
      <rect x="1" y="1" width="2" height="14"/><rect x="13" y="1" width="2" height="14"/>
      {/* inner circle */}
      <rect x="5" y="4" width="6" height="1"/><rect x="5" y="11" width="6" height="1"/>
      <rect x="4" y="5" width="1" height="6"/><rect x="11" y="5" width="1" height="6"/>
      <rect x="5" y="5" width="6" height="6"/>
      {/* center hole */}
      <rect x="6" y="6" width="4" height="4" fill="var(--color-parchment)"/>
      {/* dot top-right */}
      <rect x="11" y="2" width="2" height="2"/>
    </svg>
  ),
  facebook: (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {/* block F */}
      <rect x="4" y="1" width="8" height="2"/>
      <rect x="4" y="1" width="2" height="14"/>
      <rect x="4" y="7" width="6" height="2"/>
    </svg>
  ),
  tiktok: (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {/* TikTok pixel T shape with music note */}
      <rect x="6" y="1" width="4" height="2"/>
      <rect x="8" y="1" width="2" height="8"/>
      <rect x="9" y="7" width="4" height="2"/>
      <rect x="11" y="7" width="2" height="4"/>
      <rect x="9" y="9" width="4" height="2"/>
      {/* circle at bottom */}
      <rect x="3" y="9" width="6" height="2"/>
      <rect x="2" y="11" width="8" height="2"/>
      <rect x="3" y="13" width="6" height="1"/>
    </svg>
  ),
};

// Mapping from semantic name → pixelarticons class suffix
const PIXEL_CLASS_MAP = {
  home:         'home',
  user:         'user',
  mail:         'mail',
  envelope:     'mail',
  search:       'search',
  star:         'star',
  sparkle:      'sparkle',
  close:        'close',
  x:            'close',
  zap:          'zap',
  lightning:    'zap',
  coffee:       'coffee',
  database:     'database',
  'git-branch': 'git-branch',
  terminal:     'terminal',
  brush:        'brush',
  'paint-brush':'brush',
  palette:      'brush',
  pencil:       'pencil',
  edit:         'pencil',
  'arrow-up-right': 'external-link',
  'external-link':  'external-link',
  images:       'images',
  gallery:      'gallery-thumbnails',
  camera:       'camera',
  brackets:     'brackets',
  'brackets-curly': 'brackets',
  snake:        'snake',
  cpu:          'cpu',
  atom:         'cpu',
  layers:       'grid-3x3',
  stack:        'grid-3x3',
  music:        'music',
  code:         'brackets',
  'code-block': 'brackets',
};

export default function PixelIcon({ name, className = '', style = {}, 'aria-hidden': ariaHidden = 'true', 'aria-label': ariaLabel }) {
  // Inline SVG social icons
  if (SVG_ICONS[name]) {
    return (
      <span
        className={`pixel-svg-icon ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}
        aria-hidden={ariaHidden}
        aria-label={ariaLabel}
      >
        {SVG_ICONS[name]}
      </span>
    );
  }

  // Pixelarticons class-based
  const iconName = PIXEL_CLASS_MAP[name] || name;
  return (
    <i
      className={`pixelart-icons-font-${iconName} ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', lineHeight: 1, ...style }}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
    />
  );
}
