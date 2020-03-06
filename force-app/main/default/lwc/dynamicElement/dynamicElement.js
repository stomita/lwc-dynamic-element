import { LightningElement, api } from 'lwc';

import defaultTemplate from './dynamicElement.html';
import text from './templates/node/text.html';

import a from './templates/html/a.html';
import abbr from './templates/html/abbr.html';
import acronym from './templates/html/acronym.html';
import address from './templates/html/address.html';
import area from './templates/html/area.html';
import article from './templates/html/article.html';
import aside from './templates/html/aside.html';
import audio from './templates/html/audio.html';
import b from './templates/html/b.html';
import bdo from './templates/html/bdo.html';
import big from './templates/html/big.html';
import blockquote from './templates/html/blockquote.html';
import br from './templates/html/br.html';
import button from './templates/html/button.html';
import canvas from './templates/html/canvas.html';
import caption from './templates/html/caption.html';
import center from './templates/html/center.html';
import cite from './templates/html/cite.html';
import code from './templates/html/code.html';
import col from './templates/html/col.html';
import colgroup from './templates/html/colgroup.html';
import data from './templates/html/data.html';
import datalist from './templates/html/datalist.html';
import dd from './templates/html/dd.html';
import del from './templates/html/del.html';
import dfn from './templates/html/dfn.html';
import dir from './templates/html/dir.html';
import div from './templates/html/div.html';
import dl from './templates/html/dl.html';
import dt from './templates/html/dt.html';
import em from './templates/html/em.html';
import fieldset from './templates/html/fieldset.html';
import figcaption from './templates/html/figcaption.html';
import figure from './templates/html/figure.html';
import font from './templates/html/font.html';
import footer from './templates/html/footer.html';
import form from './templates/html/form.html';
import frame from './templates/html/frame.html';
import frameset from './templates/html/frameset.html';
import h1 from './templates/html/h1.html';
import h2 from './templates/html/h2.html';
import h3 from './templates/html/h3.html';
import h4 from './templates/html/h4.html';
import h5 from './templates/html/h5.html';
import h6 from './templates/html/h6.html';
import header from './templates/html/header.html';
import hgroup from './templates/html/hgroup.html';
import hr from './templates/html/hr.html';
import i from './templates/html/i.html';
import iframe from './templates/html/iframe.html';
import img from './templates/html/img.html';
import input from './templates/html/input.html';
import ins from './templates/html/ins.html';
import isindex from './templates/html/isindex.html';
import kbd from './templates/html/kbd.html';
import keygen from './templates/html/keygen.html';
import label from './templates/html/label.html';
import legend from './templates/html/legend.html';
import li from './templates/html/li.html';
import listing from './templates/html/listing.html';
import map from './templates/html/map.html';
import mark from './templates/html/mark.html';
import marquee from './templates/html/marquee.html';
import menu from './templates/html/menu.html';
import meter from './templates/html/meter.html';
import nav from './templates/html/nav.html';
import nextid from './templates/html/nextid.html';
import nobr from './templates/html/nobr.html';
import noframes from './templates/html/noframes.html';
import noscript from './templates/html/noscript.html';
import ol from './templates/html/ol.html';
import optgroup from './templates/html/optgroup.html';
import option from './templates/html/option.html';
import output from './templates/html/output.html';
import p from './templates/html/p.html';
import param from './templates/html/param.html';
import picture from './templates/html/picture.html';
import pre from './templates/html/pre.html';
import progress from './templates/html/progress.html';
import q from './templates/html/q.html';
import rt from './templates/html/rt.html';
import ruby from './templates/html/ruby.html';
import s from './templates/html/s.html';
import samp from './templates/html/samp.html';
import section from './templates/html/section.html';
import select from './templates/html/select.html';
import small from './templates/html/small.html';
import source from './templates/html/source.html';
import span from './templates/html/span.html';
import strike from './templates/html/strike.html';
import strong from './templates/html/strong.html';
import sub from './templates/html/sub.html';
import sup from './templates/html/sup.html';
import table from './templates/html/table.html';
import tbody from './templates/html/tbody.html';
import td from './templates/html/td.html';
import textarea from './templates/html/textarea.html';
import tfoot from './templates/html/tfoot.html';
import th from './templates/html/th.html';
import thead from './templates/html/thead.html';
import time from './templates/html/time.html';
import tr from './templates/html/tr.html';
import track from './templates/html/track.html';
import tt from './templates/html/tt.html';
import u from './templates/html/u.html';
import ul from './templates/html/ul.html';
import varTmpl from './templates/html/var.html';
import video from './templates/html/video.html';
import wbr from './templates/html/wbr.html';
import xmp from './templates/html/xmp.html';
import lightningAccordionSection from './templates/lightning/lightning-accordion-section.html';
import lightningAccordion from './templates/lightning/lightning-accordion.html';
import lightningAvatar from './templates/lightning/lightning-avatar.html';
import lightningBadge from './templates/lightning/lightning-badge.html';
import lightningBreadcrumb from './templates/lightning/lightning-breadcrumb.html';
import lightningBreadcrumbs from './templates/lightning/lightning-breadcrumbs.html';
import lightningButtonGroup from './templates/lightning/lightning-button-group.html';
import lightningButtonIconStateful from './templates/lightning/lightning-button-icon-stateful.html';
import lightningButtonIcon from './templates/lightning/lightning-button-icon.html';
import lightningButtonMenu from './templates/lightning/lightning-button-menu.html';
import lightningButtonStateful from './templates/lightning/lightning-button-stateful.html';
import lightningButton from './templates/lightning/lightning-button.html';
import lightningCard from './templates/lightning/lightning-card.html';
import lightningCarousel from './templates/lightning/lightning-carousel.html';
import lightningCheckboxGroup from './templates/lightning/lightning-checkbox-group.html';
import lightningClickToDial from './templates/lightning/lightning-click-to-dial.html';
import lightningCombobox from './templates/lightning/lightning-combobox.html';
import lightningDatatable from './templates/lightning/lightning-datatable.html';
import lightningDualListbox from './templates/lightning/lightning-dual-listbox.html';
import lightningDynamicIcon from './templates/lightning/lightning-dynamic-icon.html';
import lightningFileUpload from './templates/lightning/lightning-file-upload.html';
import lightningFormattedAddress from './templates/lightning/lightning-formatted-address.html';
import lightningFormattedDateTime from './templates/lightning/lightning-formatted-date-time.html';
import lightningFormattedEmail from './templates/lightning/lightning-formatted-email.html';
import lightningFormattedLocation from './templates/lightning/lightning-formatted-location.html';
import lightningFormattedName from './templates/lightning/lightning-formatted-name.html';
import lightningFormattedNumber from './templates/lightning/lightning-formatted-number.html';
import lightningFormattedPhone from './templates/lightning/lightning-formatted-phone.html';
import lightningFormattedRichText from './templates/lightning/lightning-formatted-rich-text.html';
import lightningFormattedText from './templates/lightning/lightning-formatted-text.html';
import lightningFormattedTime from './templates/lightning/lightning-formatted-time.html';
import lightningFormattedUrl from './templates/lightning/lightning-formatted-url.html';
import lightningHelptext from './templates/lightning/lightning-helptext.html';
import lightningIcon from './templates/lightning/lightning-icon.html';
import lightningInputAddress from './templates/lightning/lightning-input-address.html';
import lightningInputField from './templates/lightning/lightning-input-field.html';
import lightningInputLocation from './templates/lightning/lightning-input-location.html';
import lightningInputName from './templates/lightning/lightning-input-name.html';
import lightningInputRichText from './templates/lightning/lightning-input-rich-text.html';
import lightningInput from './templates/lightning/lightning-input.html';
import lightningLayoutItem from './templates/lightning/lightning-layout-item.html';
import lightningLayout from './templates/lightning/lightning-layout.html';
import lightningMap from './templates/lightning/lightning-map.html';
import lightningMenuItem from './templates/lightning/lightning-menu-item.html';
import lightningOutputField from './templates/lightning/lightning-output-field.html';
import lightningPillContainer from './templates/lightning/lightning-pill-container.html';
import lightningPill from './templates/lightning/lightning-pill.html';
import lightningProgressBar from './templates/lightning/lightning-progress-bar.html';
import lightningProgressIndicator from './templates/lightning/lightning-progress-indicator.html';
import lightningProgressRing from './templates/lightning/lightning-progress-ring.html';
import lightningRadioGroup from './templates/lightning/lightning-radio-group.html';
import lightningRecordEditForm from './templates/lightning/lightning-record-edit-form.html';
import lightningRecordForm from './templates/lightning/lightning-record-form.html';
import lightningRecordViewForm from './templates/lightning/lightning-record-view-form.html';
import lightningRelativeDateTime from './templates/lightning/lightning-relative-date-time.html';
import lightningSlider from './templates/lightning/lightning-slider.html';
import lightningSpinner from './templates/lightning/lightning-spinner.html';
import lightningTab from './templates/lightning/lightning-tab.html';
import lightningTabset from './templates/lightning/lightning-tabset.html';
import lightningTextarea from './templates/lightning/lightning-textarea.html';
import lightningTile from './templates/lightning/lightning-tile.html';
import lightningTreeGrid from './templates/lightning/lightning-tree-grid.html';
import lightningTree from './templates/lightning/lightning-tree.html';
import lightningVerticalNavigationItemBadge from './templates/lightning/lightning-vertical-navigation-item-badge.html';
import lightningVerticalNavigationItemIcon from './templates/lightning/lightning-vertical-navigation-item-icon.html';
import lightningVerticalNavigationItem from './templates/lightning/lightning-vertical-navigation-item.html';
import lightningVerticalNavigation from './templates/lightning/lightning-vertical-navigation.html';

const TEMPLATES = {
  '#text': text,
  a,
  abbr,
  acronym,
  address,
  area,
  article,
  aside,
  audio,
  b,
  bdo,
  big,
  blockquote,
  br,
  button,
  canvas,
  caption,
  center,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  dfn,
  dir,
  div,
  dl,
  dt,
  em,
  fieldset,
  figcaption,
  figure,
  font,
  footer,
  form,
  frame,
  frameset,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  hr,
  i,
  iframe,
  img,
  input,
  ins,
  isindex,
  kbd,
  keygen,
  label,
  legend,
  li,
  listing,
  map,
  mark,
  marquee,
  menu,
  meter,
  nav,
  nextid,
  nobr,
  noframes,
  noscript,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rt,
  ruby,
  s,
  samp,
  section,
  select,
  small,
  source,
  span,
  strike,
  strong,
  sub,
  sup,
  table,
  tbody,
  td,
  textarea,
  tfoot,
  th,
  thead,
  time,
  tr,
  track,
  tt,
  u,
  ul,
  var: varTmpl,
  video,
  wbr,
  xmp,
  'lightning-accordion-section': lightningAccordionSection,
  'lightning-accordion': lightningAccordion,
  'lightning-avatar': lightningAvatar,
  'lightning-badge': lightningBadge,
  'lightning-breadcrumb': lightningBreadcrumb,
  'lightning-breadcrumbs': lightningBreadcrumbs,
  'lightning-button-group': lightningButtonGroup,
  'lightning-button-icon-stateful': lightningButtonIconStateful,
  'lightning-button-icon': lightningButtonIcon,
  'lightning-button-menu': lightningButtonMenu,
  'lightning-button-stateful': lightningButtonStateful,
  'lightning-button': lightningButton,
  'lightning-card': lightningCard,
  'lightning-carousel': lightningCarousel,
  'lightning-checkbox-group': lightningCheckboxGroup,
  'lightning-click-to-dial': lightningClickToDial,
  'lightning-combobox': lightningCombobox,
  'lightning-datatable': lightningDatatable,
  'lightning-dual-listbox': lightningDualListbox,
  'lightning-dynamic-icon': lightningDynamicIcon,
  'lightning-file-upload': lightningFileUpload,
  'lightning-formatted-address': lightningFormattedAddress,
  'lightning-formatted-date-time': lightningFormattedDateTime,
  'lightning-formatted-email': lightningFormattedEmail,
  'lightning-formatted-location': lightningFormattedLocation,
  'lightning-formatted-name': lightningFormattedName,
  'lightning-formatted-number': lightningFormattedNumber,
  'lightning-formatted-phone': lightningFormattedPhone,
  'lightning-formatted-rich-text': lightningFormattedRichText,
  'lightning-formatted-text': lightningFormattedText,
  'lightning-formatted-time': lightningFormattedTime,
  'lightning-formatted-url': lightningFormattedUrl,
  'lightning-helptext': lightningHelptext,
  'lightning-icon': lightningIcon,
  'lightning-input-address': lightningInputAddress,
  'lightning-input-field': lightningInputField,
  'lightning-input-location': lightningInputLocation,
  'lightning-input-name': lightningInputName,
  'lightning-input-rich-text': lightningInputRichText,
  'lightning-input': lightningInput,
  'lightning-layout-item': lightningLayoutItem,
  'lightning-layout': lightningLayout,
  'lightning-map': lightningMap,
  'lightning-menu-item': lightningMenuItem,
  'lightning-output-field': lightningOutputField,
  'lightning-pill-container': lightningPillContainer,
  'lightning-pill': lightningPill,
  'lightning-progress-bar': lightningProgressBar,
  'lightning-progress-indicator': lightningProgressIndicator,
  'lightning-progress-ring': lightningProgressRing,
  'lightning-radio-group': lightningRadioGroup,
  'lightning-record-edit-form': lightningRecordEditForm,
  'lightning-record-form': lightningRecordForm,
  'lightning-record-view-form': lightningRecordViewForm,
  'lightning-relative-date-time': lightningRelativeDateTime,
  'lightning-slider': lightningSlider,
  'lightning-spinner': lightningSpinner,
  'lightning-tab': lightningTab,
  'lightning-tabset': lightningTabset,
  'lightning-textarea': lightningTextarea,
  'lightning-tile': lightningTile,
  'lightning-tree-grid': lightningTreeGrid,
  'lightning-tree': lightningTree,
  'lightning-vertical-navigation-item-badge': lightningVerticalNavigationItemBadge,
  'lightning-vertical-navigation-item-icon': lightningVerticalNavigationItemIcon,
  'lightning-vertical-navigation-item': lightningVerticalNavigationItem,
  'lightning-vertical-navigation': lightningVerticalNavigation,
};

/**
 *
 */
export default class DynamicElement extends LightningElement {
  @api
  tag;

  @api
  attrs = {};

  @api
  children = [];

  get slots() {
    return this.children.map(c => {
      const slotName = c.attrs.slot || 'default';
      return {
        [slotName]: c,
      };
    });
  }

  render() {
    console.log('render()', this.tag);
    const template = TEMPLATES[this.tag];
    return template || defaultTemplate;
  }
}
