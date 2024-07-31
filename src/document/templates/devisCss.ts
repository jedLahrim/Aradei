export const DevisCss = `  <link rel="stylesheet" type="text/css" href="Aradei%20Capital_fichiers/loader.css">
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VApp/VApp.sass?v=3687d9c4">
 
.content {
    padding-bottom: 100px;
}
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
    text-align: center;
    padding: 5px 0;
 
}
  .v-application {
    display: flex;
    background: rgb(var(--v-theme-background));
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
  }

  .v-application__wrap {
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 100%;
    min-height: 100vh;
    position: relative;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VAppBar/VAppBar.sass?v=3687d9c4">
  
  .v-app-bar {
    display: flex;
  }

  .v-app-bar.v-toolbar {
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-app-bar:not(.v-toolbar--absolute) {
    padding-inline-end: var(--v-scrollbar-offset);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VToolbar/VToolbar.sass?v=3687d9c4">
  
  .v-toolbar {
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: height, width, transform, max-width, left, right, top, bottom;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 0;
    background: rgb(var(--v-theme-on-surface-variant));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-toolbar--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-toolbar--absolute {
    position: absolute;
  }

  .v-toolbar--collapse {
    max-width: 112px;
    overflow: hidden;
  }

  .v-toolbar--collapse .v-toolbar-title {
    display: none;
  }

  .v-toolbar--collapse.v-locale--is-ltr,
  .v-locale--is-ltr .v-toolbar--collapse {
    border-bottom-right-radius: 24px;
  }

  .v-toolbar--collapse.v-locale--is-rtl,
  .v-locale--is-rtl .v-toolbar--collapse {
    border-bottom-left-radius: 24px;
  }

  .v-toolbar--flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-toolbar--floating {
    display: inline-flex;
  }

  .v-toolbar--rounded {
    border-radius: 6px;
  }

  .v-toolbar__content,
  .v-toolbar__extension {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    position: relative;
    transition: inherit;
    width: 100%;
  }

  .v-toolbar__content>.v-btn:first-child {
    margin-inline-start: 10px;
  }

  .v-toolbar__content>.v-btn:last-child {
    margin-inline-end: 10px;
  }

  .v-toolbar__content>.v-toolbar-title {
    margin-inline-start: 16px;
  }

  .v-toolbar--density-prominent .v-toolbar__content {
    align-items: flex-start;
  }

  .v-toolbar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }

  .v-toolbar__prepend,
  .v-toolbar__append {
    align-items: center;
    display: flex;
  }

  .v-toolbar__prepend {
    margin-inline-start: 10px;
    margin-inline-end: auto;
  }

  .v-toolbar__append {
    margin-inline-start: auto;
    margin-inline-end: 10px;
  }

  .v-toolbar-title {
    flex: 1 1;
    font-size: 1.25rem;
    min-width: 0;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.75rem;
    text-transform: none;
  }

  .v-toolbar--density-prominent .v-toolbar-title {
    align-self: flex-end;
    padding-bottom: 6px;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 2.25rem;
    text-transform: none;
  }

  .v-toolbar-title__placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-toolbar-items {
    display: flex;
    height: inherit;
  }

  .v-toolbar-items>.v-btn {
    border-radius: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VImg/VImg.sass?v=3687d9c4">
  
  .v-img {
    --v-theme-overlay-multiplier: 3;
    z-index: 0;
  }

  .v-img--booting .v-responsive__sizer {
    transition: none;
  }

  .v-img__img,
  .v-img__picture,
  .v-img__gradient,
  .v-img__placeholder,
  .v-img__error {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-img__img--preload {
    filter: blur(4px);
  }

  .v-img__img--contain {
    object-fit: contain;
  }

  .v-img__img--cover {
    object-fit: cover;
  }

  .v-img__gradient {
    background-repeat: no-repeat;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VResponsive/VResponsive.sass?v=3687d9c4">
  
  .v-responsive {
    display: flex;
    flex: 1 0 auto;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
  }

  .v-responsive__content {
    flex: 1 0 0px;
    max-width: 100%;
  }

  .v-responsive__sizer~.v-responsive__content {
    margin-inline-start: -100%;
  }

  .v-responsive__sizer {
    flex: 1 0 0px;
    transition: padding-bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBtn/VBtn.sass?v=3687d9c4">
  
  .v-btn {
    align-items: center;
    border-radius: 6px;
    display: inline-grid;
    grid-template-areas: "prepend content append";
    grid-template-columns: max-content auto max-content;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0.0892857143em;
    line-height: normal;
    max-width: 100%;
    outline: none;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857143em;
    text-transform: uppercase;
    transition-property: box-shadow, transform, opacity, background;
    transition-duration: 0.28s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    vertical-align: middle;
    flex-shrink: 0;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
  }

  .v-btn--size-x-small {
    --v-btn-size: 0.625rem;
    --v-btn-height: 22px;
    font-size: 0.625rem;
    min-width: 40px;
    padding: 0 12px;
  }

  .v-btn--size-small {
    --v-btn-size: 0.75rem;
    --v-btn-height: 30px;
    font-size: 0.75rem;
    min-width: 54px;
    padding: 0 16px;
  }

  .v-btn--size-default {
    --v-btn-size: 0.875rem;
    --v-btn-height: 38px;
    font-size: 0.875rem;
    min-width: 68px;
    padding: 0 20px;
  }

  .v-btn--size-large {
    --v-btn-size: 1rem;
    --v-btn-height: 46px;
    font-size: 1rem;
    min-width: 82px;
    padding: 0 24px;
  }

  .v-btn--size-x-large {
    --v-btn-size: 1.125rem;
    --v-btn-height: 54px;
    font-size: 1.125rem;
    min-width: 96px;
    padding: 0 28px;
  }

  .v-btn.v-btn--density-default {
    height: calc(var(--v-btn-height) + 0px);
  }

  .v-btn.v-btn--density-comfortable {
    height: calc(var(--v-btn-height) + -8px);
  }

  .v-btn.v-btn--density-compact {
    height: calc(var(--v-btn-height) + -12px);
  }

  .v-btn--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-btn--absolute {
    position: absolute;
  }

  .v-btn--fixed {
    position: fixed;
  }

  .v-btn:hover>.v-btn__overlay {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-btn:focus-visible>.v-btn__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .v-btn:focus>.v-btn__overlay {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-btn--active>.v-btn__overlay,
  .v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  .v-btn--active:hover>.v-btn__overlay,
  .v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  .v-btn--active:focus-visible>.v-btn__overlay,
  .v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .v-btn--active:focus>.v-btn__overlay,
    .v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay {
      opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-btn--variant-plain,
  .v-btn--variant-outlined,
  .v-btn--variant-text,
  .v-btn--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-btn--variant-plain {
    opacity: 0.62;
  }

  .v-btn--variant-plain:focus,
  .v-btn--variant-plain:hover {
    opacity: 1;
  }

  .v-btn--variant-plain .v-btn__overlay {
    display: none;
  }

  .v-btn--variant-elevated,
  .v-btn--variant-flat {
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-btn--variant-elevated {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-btn--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-btn--variant-outlined {
    border: thin solid currentColor;
  }

  .v-btn--variant-text .v-btn__overlay {
    background: currentColor;
  }

  .v-btn--variant-tonal .v-btn__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  @supports selector(:focus-visible) {
    .v-btn::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border: 2px solid currentColor;
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }

    .v-btn:focus-visible::after {
      opacity: calc(0.25 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-btn--icon {
    border-radius: 50%;
    min-width: 0;
    padding: 0;
  }

  .v-btn--icon.v-btn--size-default {
    font-size: 1rem;
  }

  .v-btn--icon.v-btn--density-default {
    width: calc(var(--v-btn-height) + 8px);
    height: calc(var(--v-btn-height) + 8px);
  }

  .v-btn--icon.v-btn--density-comfortable {
    width: calc(var(--v-btn-height) + 0px);
    height: calc(var(--v-btn-height) + 0px);
  }

  .v-btn--icon.v-btn--density-compact {
    width: calc(var(--v-btn-height) + -4px);
    height: calc(var(--v-btn-height) + -4px);
  }

  .v-btn--elevated:hover,
  .v-btn--elevated:focus {
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-btn--elevated:active {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-btn--flat {
    box-shadow: none;
  }

  .v-btn--block {
    display: flex;
    flex: 1 0 auto;
    min-width: 100%;
  }

  .v-btn--disabled {
    pointer-events: none;
    opacity: 0.26;
  }

  .v-btn--disabled.v-btn--variant-elevated,
  .v-btn--disabled.v-btn--variant-flat {
    box-shadow: none;
    opacity: 1;
    color: rgba(var(--v-theme-on-surface), 0.26);
    background: rgb(var(--v-theme-surface));
  }

  .v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,
  .v-btn--disabled.v-btn--variant-flat .v-btn__overlay {
    opacity: 0.4615384615;
  }

  .v-btn--loading {
    pointer-events: none;
  }

  .v-btn--loading .v-btn__content,
  .v-btn--loading .v-btn__prepend,
  .v-btn--loading .v-btn__append {
    opacity: 0;
  }

  .v-btn--stacked {
    grid-template-areas: "prepend" "content" "append";
    grid-template-columns: auto;
    grid-template-rows: max-content max-content max-content;
    justify-items: center;
    align-content: center;
  }

  .v-btn--stacked .v-btn__content {
    flex-direction: column;
    line-height: 1.25;
  }

  .v-btn--stacked .v-btn__prepend,
  .v-btn--stacked .v-btn__append,
  .v-btn--stacked .v-btn__content>.v-icon--start,
  .v-btn--stacked .v-btn__content>.v-icon--end {
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  .v-btn--stacked .v-btn__prepend,
  .v-btn--stacked .v-btn__content>.v-icon--start {
    margin-bottom: 4px;
  }

  .v-btn--stacked .v-btn__append,
  .v-btn--stacked .v-btn__content>.v-icon--end {
    margin-top: 4px;
  }

  .v-btn--stacked.v-btn--size-x-small {
    --v-btn-size: 0.625rem;
    --v-btn-height: 56px;
    font-size: 0.625rem;
    min-width: 56px;
    padding: 0 12px;
  }

  .v-btn--stacked.v-btn--size-small {
    --v-btn-size: 0.75rem;
    --v-btn-height: 64px;
    font-size: 0.75rem;
    min-width: 64px;
    padding: 0 14px;
  }

  .v-btn--stacked.v-btn--size-default {
    --v-btn-size: 0.875rem;
    --v-btn-height: 72px;
    font-size: 0.875rem;
    min-width: 72px;
    padding: 0 16px;
  }

  .v-btn--stacked.v-btn--size-large {
    --v-btn-size: 1rem;
    --v-btn-height: 80px;
    font-size: 1rem;
    min-width: 80px;
    padding: 0 18px;
  }

  .v-btn--stacked.v-btn--size-x-large {
    --v-btn-size: 1.125rem;
    --v-btn-height: 88px;
    font-size: 1.125rem;
    min-width: 88px;
    padding: 0 20px;
  }

  .v-btn--stacked.v-btn--density-default {
    height: calc(var(--v-btn-height) + 0px);
  }

  .v-btn--stacked.v-btn--density-comfortable {
    height: calc(var(--v-btn-height) + -16px);
  }

  .v-btn--stacked.v-btn--density-compact {
    height: calc(var(--v-btn-height) + -24px);
  }

  .v-btn--rounded {
    border-radius: 36px;
  }

  .v-btn .v-icon {
    --v-icon-size-multiplier: 0.8571428571;
  }

  .v-btn--icon .v-icon {
    --v-icon-size-multiplier: 1;
  }

  .v-btn--stacked .v-icon {
    --v-icon-size-multiplier: 1.1428571429;
  }

  .v-btn__loader {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-btn__content,
  .v-btn__prepend,
  .v-btn__append {
    align-items: center;
    display: flex;
    transition: transform, opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-btn__prepend {
    grid-area: prepend;
    margin-inline-start: calc(var(--v-btn-height) / -9);
    margin-inline-end: calc(var(--v-btn-height) / 4.5);
  }

  .v-btn__append {
    grid-area: append;
    margin-inline-start: calc(var(--v-btn-height) / 4.5);
    margin-inline-end: calc(var(--v-btn-height) / -9);
  }

  .v-btn__content {
    grid-area: content;
    justify-content: center;
    white-space: nowrap;
  }

  .v-btn__content>.v-icon--start {
    margin-inline-start: calc(var(--v-btn-height) / -9);
    margin-inline-end: calc(var(--v-btn-height) / 4.5);
  }

  .v-btn__content>.v-icon--end {
    margin-inline-start: calc(var(--v-btn-height) / 4.5);
    margin-inline-end: calc(var(--v-btn-height) / -9);
  }

  .v-btn--stacked .v-btn__content {
    white-space: normal;
  }

  .v-btn__overlay {
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .v-btn__overlay,
  .v-btn__underlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .v-app-bar .v-btn {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-card-actions .v-btn {
    padding: 0 8px;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-card-actions .v-btn~.v-btn {
    margin-inline-start: 0.5rem;
  }

  .v-banner-actions .v-btn {
    padding: 0 8px;
  }

  .v-pagination .v-btn {
    border-radius: 6px;
  }

  .v-btn__overlay {
    transition: none;
  }

  .v-pagination__item--is-active .v-btn__overlay {
    opacity: var(--v-border-opacity);
  }

  .v-snackbar-actions .v-btn {
    padding: 0 8px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBtnToggle/VBtnToggle.sass?v=3687d9c4">
  
  .v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay {
    opacity: var(--v-activated-opacity);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBtnGroup/VBtnGroup.sass?v=3687d9c4">
  
  .v-btn-group {
    display: inline-flex;
    flex-wrap: nowrap;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    vertical-align: middle;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 6px;
    background: transparent;
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-btn-group--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-btn-group--density-default.v-btn-group {
    height: 48px;
  }

  .v-btn-group--density-comfortable.v-btn-group {
    height: 40px;
  }

  .v-btn-group--density-compact.v-btn-group {
    height: 36px;
  }

  .v-btn-group .v-btn {
    border-radius: 0;
    border-color: inherit;
  }

  .v-btn-group .v-btn:not(:last-child) {
    border-inline-end: none;
  }

  .v-btn-group .v-btn:not(:first-child) {
    border-inline-start: none;
  }

  .v-btn-group .v-btn:first-child {
    border-start-start-radius: inherit;
    border-end-start-radius: inherit;
  }

  .v-btn-group .v-btn:last-child {
    border-start-end-radius: inherit;
    border-end-end-radius: inherit;
  }

  .v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-width: thin;
    border-inline-end-style: solid;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-btn-group--tile {
    border-radius: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VIcon/VIcon.sass?v=3687d9c4">
  
  .v-icon {
    --v-icon-size-multiplier: 1;
    align-items: center;
    display: inline-flex;
    font-feature-settings: "liga";
    height: 1em;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    user-select: none;
    vertical-align: middle;
    width: 1em;
  }

  .v-icon--clickable {
    cursor: pointer;
  }

  .v-icon--size-x-small {
    font-size: calc(var(--v-icon-size-multiplier) * 1em);
  }

  .v-icon--size-small {
    font-size: calc(var(--v-icon-size-multiplier) * 1.25em);
  }

  .v-icon--size-default {
    font-size: calc(var(--v-icon-size-multiplier) * 1.5em);
  }

  .v-icon--size-large {
    font-size: calc(var(--v-icon-size-multiplier) * 1.75em);
  }

  .v-icon--size-x-large {
    font-size: calc(var(--v-icon-size-multiplier) * 2em);
  }

  .v-icon__svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }

  .v-icon--start {
    margin-inline-end: 8px;
  }

  .v-icon--end {
    margin-inline-start: 8px;
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VProgressCircular/VProgressCircular.sass?v=3687d9c4">
  
  .v-progress-circular {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
    vertical-align: middle;
  }

  .v-progress-circular>svg {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }

  .v-progress-circular__content {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .v-progress-circular__underlay {
    color: rgba(var(--v-border-color), var(--v-border-opacity));
    stroke: currentColor;
    z-index: 1;
  }

  .v-progress-circular__overlay {
    stroke: currentColor;
    transition: all 0.2s ease-in-out, stroke-width 0s;
    z-index: 2;
  }

  .v-progress-circular--size-x-small {
    height: 16px;
    width: 16px;
  }

  .v-progress-circular--size-small {
    height: 24px;
    width: 24px;
  }

  .v-progress-circular--size-default {
    height: 32px;
    width: 32px;
  }

  .v-progress-circular--size-large {
    height: 48px;
    width: 48px;
  }

  .v-progress-circular--size-x-large {
    height: 64px;
    width: 64px;
  }

  .v-progress-circular--indeterminate>svg {
    animation: progress-circular-rotate 1.4s linear infinite;
    transform-origin: center center;
    transition: all 0.2s ease-in-out;
  }

  .v-progress-circular--indeterminate .v-progress-circular__overlay {
    animation: progress-circular-dash 1.4s ease-in-out infinite;
    stroke-dasharray: 25, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
  }

  .v-progress-circular--disable-shrink>svg {
    animation-duration: 0.7s;
  }

  .v-progress-circular--disable-shrink .v-progress-circular__overlay {
    animation: none;
  }

  .v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,
  .v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay {
    animation-play-state: paused !important;
  }

  @keyframes progress-circular-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -15px;
    }

    100% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes progress-circular-rotate {
    100% {
      transform: rotate(270deg);
    }
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:directives/ripple/VRipple.sass?v=3687d9c4">
  
  .v-ripple__container {
    color: inherit;
    border-radius: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    contain: strict;
  }

  .v-ripple__animation {
    color: inherit;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: currentColor;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    will-change: transform, opacity;
  }

  .v-ripple__animation--enter {
    transition: none;
  }

  .v-ripple__animation--in {
    transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1), opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  .v-ripple__animation--out {
    transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VProgressLinear/VProgressLinear.sass?v=3687d9c4">
  
  .v-progress-linear {
    background: transparent;
    overflow: hidden;
    position: relative;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  .v-progress-linear__background {
    background: currentColor;
    bottom: 0;
    left: 0;
    opacity: var(--v-border-opacity);
    position: absolute;
    top: 0;
    transition-property: width, left, right;
    transition: inherit;
  }

  .v-progress-linear__content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-progress-linear__determinate,
  .v-progress-linear__indeterminate {
    background: currentColor;
  }

  .v-progress-linear__determinate {
    height: inherit;
    left: 0;
    position: absolute;
    transition: inherit;
    transition-property: width, left, right;
  }

  .v-progress-linear__indeterminate .long,
  .v-progress-linear__indeterminate .short {
    animation-play-state: paused;
    animation-duration: 2.2s;
    animation-iteration-count: infinite;
    bottom: 0;
    height: inherit;
    left: 0;
    position: absolute;
    right: auto;
    top: 0;
    width: auto;
    will-change: left, right;
  }

  .v-progress-linear__indeterminate .long {
    animation-name: indeterminate-ltr;
  }

  .v-progress-linear__indeterminate .short {
    animation-name: indeterminate-short-ltr;
  }

  .v-progress-linear__stream {
    animation: stream 0.25s infinite linear;
    animation-play-state: paused;
    bottom: 0;
    left: auto;
    opacity: 0.3;
    pointer-events: none;
    position: absolute;
    transition: inherit;
    transition-property: width, left, right;
  }

  .v-progress-linear--reverse .v-progress-linear__background,
  .v-progress-linear--reverse .v-progress-linear__determinate,
  .v-progress-linear--reverse .v-progress-linear__content {
    left: auto;
    right: 0;
  }

  .v-progress-linear--reverse .v-progress-linear__indeterminate .long,
  .v-progress-linear--reverse .v-progress-linear__indeterminate .short {
    left: auto;
    right: 0;
  }

  .v-progress-linear--reverse .v-progress-linear__indeterminate .long {
    animation-name: indeterminate-rtl;
  }

  .v-progress-linear--reverse .v-progress-linear__indeterminate .short {
    animation-name: indeterminate-short-rtl;
  }

  .v-progress-linear--reverse .v-progress-linear__stream {
    right: auto;
  }

  .v-progress-linear--absolute,
  .v-progress-linear--fixed {
    left: 0;
    z-index: 1;
  }

  .v-progress-linear--absolute {
    position: absolute;
  }

  .v-progress-linear--fixed {
    position: fixed;
  }

  .v-progress-linear--rounded {
    border-radius: 6px;
  }

  .v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,
  .v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate {
    border-radius: inherit;
  }

  .v-progress-linear--striped .v-progress-linear__determinate {
    animation: progress-linear-stripes 1s infinite linear;
    background-image: linear-gradient(135deg, hsla(0, 0%, 100%, 0.25) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, 0.25) 0, hsla(0, 0%, 100%, 0.25) 75%, transparent 0, transparent);
    background-repeat: repeat;
    background-size: var(--v-progress-linear-height);
  }

  .v-progress-linear--active .v-progress-linear__indeterminate .long,
  .v-progress-linear--active .v-progress-linear__indeterminate .short {
    animation-play-state: running;
  }

  .v-progress-linear--active .v-progress-linear__stream {
    animation-play-state: running;
  }

  .v-progress-linear--rounded-bar .v-progress-linear__determinate,
  .v-progress-linear--rounded-bar .v-progress-linear__indeterminate,
  .v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background {
    border-radius: 6px;
  }

  .v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,
  .v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,
  .v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  @keyframes indeterminate-ltr {
    0% {
      left: -90%;
      right: 100%;
    }

    60% {
      left: -90%;
      right: 100%;
    }

    100% {
      left: 100%;
      right: -35%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      left: 100%;
      right: -90%;
    }

    60% {
      left: 100%;
      right: -90%;
    }

    100% {
      left: -35%;
      right: 100%;
    }
  }

  @keyframes indeterminate-short-ltr {
    0% {
      left: -200%;
      right: 100%;
    }

    60% {
      left: 107%;
      right: -8%;
    }

    100% {
      left: 107%;
      right: -8%;
    }
  }

  @keyframes indeterminate-short-rtl {
    0% {
      left: 100%;
      right: -200%;
    }

    60% {
      left: -8%;
      right: 107%;
    }

    100% {
      left: -8%;
      right: 107%;
    }
  }

  @keyframes stream {
    to {
      transform: translateX(var(--v-progress-linear-stream-to));
    }
  }

  @keyframes progress-linear-stripes {
    0% {
      background-position-x: var(--v-progress-linear-height);
    }
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VAlert/VAlert.sass?v=3687d9c4">
  
  .v-alert {
    display: grid;
    flex: 1 1;
    grid-template-areas: "prepend content append close" ". content . .";
    grid-template-columns: max-content auto max-content max-content;
    position: relative;
    padding: 16px;
    overflow: hidden;
    --v-border-color: currentColor;
    border-radius: 6px;
  }

  .v-alert--absolute {
    position: absolute;
  }

  .v-alert--fixed {
    position: fixed;
  }

  .v-alert--sticky {
    position: sticky;
  }

  .v-alert--variant-plain,
  .v-alert--variant-outlined,
  .v-alert--variant-text,
  .v-alert--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-alert--variant-plain {
    opacity: 0.62;
  }

  .v-alert--variant-plain:focus,
  .v-alert--variant-plain:hover {
    opacity: 1;
  }

  .v-alert--variant-plain .v-alert__overlay {
    display: none;
  }

  .v-alert--variant-elevated,
  .v-alert--variant-flat {
    background: rgb(var(--v-theme-on-surface-variant));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-alert--variant-elevated {
    box-shadow: 0 2px 4px 1px var(--v-shadow-key-umbra-opacity), 0 4px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 3px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-alert--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-alert--variant-outlined {
    border: thin solid currentColor;
  }

  .v-alert--variant-text .v-alert__overlay {
    background: currentColor;
  }

  .v-alert--variant-tonal .v-alert__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-alert--prominent {
    grid-template-areas: "prepend content append close" "prepend content . .";
  }

  .v-alert.v-alert--border {
    --v-border-opacity: 0.38;
  }

  .v-alert.v-alert--border.v-alert--border-start {
    padding-inline-start: 24px;
  }

  .v-alert.v-alert--border.v-alert--border-end {
    padding-inline-end: 24px;
  }

  .v-alert--variant-plain {
    transition: 0.2s opacity cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-alert--density-default {
    padding-bottom: 16px;
    padding-top: 16px;
  }

  .v-alert--density-default.v-alert--border-top {
    padding-top: 24px;
  }

  .v-alert--density-default.v-alert--border-bottom {
    padding-bottom: 24px;
  }

  .v-alert--density-comfortable {
    padding-bottom: 13px;
    padding-top: 13px;
  }

  .v-alert--density-comfortable.v-alert--border-top {
    padding-top: 21px;
  }

  .v-alert--density-comfortable.v-alert--border-bottom {
    padding-bottom: 21px;
  }

  .v-alert--density-compact {
    padding-bottom: 8px;
    padding-top: 8px;
  }

  .v-alert--density-compact.v-alert--border-top {
    padding-top: 16px;
  }

  .v-alert--density-compact.v-alert--border-bottom {
    padding-bottom: 16px;
  }

  .v-alert__border {
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: var(--v-border-opacity);
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 0;
    width: 100%;
    border-color: currentColor;
    border-style: solid;
    border-width: 0;
  }

  .v-alert__border--border {
    border-width: 8px;
    box-shadow: none;
  }

  .v-alert--border-start .v-alert__border {
    border-inline-start-width: 8px;
  }

  .v-alert--border-end .v-alert__border {
    border-inline-end-width: 8px;
  }

  .v-alert--border-top .v-alert__border {
    border-top-width: 8px;
  }

  .v-alert--border-bottom .v-alert__border {
    border-bottom-width: 8px;
  }

  .v-alert__close {
    flex: 0 1 auto;
    grid-area: close;
  }

  .v-alert__content {
    align-self: center;
    grid-area: content;
    overflow: hidden;
  }

  .v-alert__append,
  .v-alert__close {
    align-self: flex-start;
    margin-inline-start: 90px;
  }

  .v-alert__append {
    align-self: flex-start;
    grid-area: append;
  }

  .v-alert__append+.v-alert__close {
    margin-inline-start: 16px;
  }

  .v-alert__prepend {
    align-self: flex-start;
    display: flex;
    align-items: center;
    grid-area: prepend;
    margin-inline-end: 0.75rem;
  }

  .v-alert--prominent .v-alert__prepend {
    align-self: center;
  }

  .v-alert__underlay {
    grid-area: none;
    position: absolute;
  }

  .v-alert--border-start .v-alert__underlay {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .v-alert--border-end .v-alert__underlay {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .v-alert--border-top .v-alert__underlay {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .v-alert--border-bottom .v-alert__underlay {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .v-alert-title {
    align-items: center;
    align-self: center;
    display: flex;
    font-size: 1.125rem;
    font-weight: 600;
    hyphens: auto;
    letter-spacing: 0.0125em;
    line-height: 1.5rem;
    overflow-wrap: normal;
    text-transform: none;
    word-break: normal;
    word-wrap: break-word;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VAutocomplete/VAutocomplete.sass?v=3687d9c4">
  
  .v-input--density-default {
    --autocomplete-chips-margin-bottom: 0px;
  }

  .v-input--density-comfortable {
    --autocomplete-chips-margin-bottom: 2px;
  }

  .v-input--density-compact {
    --autocomplete-chips-margin-bottom: 4px;
  }

  .v-autocomplete .v-field .v-text-field__prefix,
  .v-autocomplete .v-field .v-text-field__suffix,
  .v-autocomplete .v-field .v-field__input,
  .v-autocomplete .v-field.v-field {
    cursor: text;
  }

  .v-autocomplete .v-field .v-field__input>input {
    align-self: flex-start;
    flex: 1 1;
  }

  .v-autocomplete .v-field .v-field__append-inner>.v-icon {
    margin-inline-start: 4px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-autocomplete .v-field:not(.v-field--focused) input {
    min-width: 0;
  }

  .v-autocomplete .v-field--dirty .v-autocomplete__selection {
    margin-inline-end: 2px;
  }

  .v-autocomplete .v-field--single-line .v-autocomplete__selection-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-autocomplete__content {
    overflow: hidden;
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
    border-radius: 4px;
  }

  .v-autocomplete__mask {
    background: rgb(var(--v-theme-on-surface-variant));
  }

  .v-autocomplete__selection {
    display: inline-flex;
    letter-spacing: inherit;
    line-height: inherit;
    max-width: 100%;
  }

  .v-autocomplete--active-menu .v-field__append-inner>.v-icon {
    opacity: var(--v-high-emphasis-opacity);
    transform: rotate(180deg);
  }

  .v-autocomplete--chips .v-autocomplete__selection {
    margin-top: 2px;
    margin-bottom: var(--autocomplete-chips-margin-bottom);
  }

  .v-autocomplete--chips .v-autocomplete__selection:first-child {
    margin-inline-start: 0;
  }

  .v-autocomplete--single.v-text-field input {
    flex: 1 1;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    padding-inline-start: inherit;
    padding-inline-end: inherit;
  }

  .v-autocomplete--single .v-field--active input {
    transition: none;
  }

  .v-autocomplete--single .v-field--dirty:not(.v-field--focused) input {
    opacity: 0;
  }

  .v-autocomplete--single .v-field--focused .v-autocomplete__selection-text {
    opacity: 0;
  }

  .v-autocomplete--selection-slot.v-text-field input {
    position: relative;
    padding-inline-start: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSelect/VSelect.sass?v=3687d9c4">
  
  .v-input--density-default {
    --select-chips-margin-bottom: 0px;
  }

  .v-input--density-comfortable {
    --select-chips-margin-bottom: 2px;
  }

  .v-input--density-compact {
    --select-chips-margin-bottom: 4px;
  }

  .v-select .v-field .v-text-field__prefix,
  .v-select .v-field .v-text-field__suffix,
  .v-select .v-field .v-field__input,
  .v-select .v-field.v-field {
    cursor: pointer;
  }

  .v-select .v-field .v-field__input>input {
    align-self: flex-start;
    opacity: 1;
    flex: 0 0;
    position: absolute;
    width: 100%;
    transition: none;
    pointer-events: none;
  }

  .v-select .v-field .v-field__append-inner>.v-icon {
    margin-inline-start: 4px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-select .v-field--dirty .v-select__selection {
    margin-inline-end: 2px;
  }

  .v-select .v-field--single-line .v-select__selection-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-select__content {
    overflow: hidden;
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
    border-radius: 4px;
  }

  .v-select__selection {
    display: inline-flex;
    letter-spacing: inherit;
    line-height: inherit;
    max-width: 100%;
  }

  .v-select--active-menu .v-field__append-inner>.v-icon {
    opacity: var(--v-high-emphasis-opacity);
    transform: rotate(180deg);
  }

  .v-select--chips .v-select__selection {
    margin-top: 2px;
    margin-bottom: var(--select-chips-margin-bottom);
  }

  .v-select--chips .v-select__selection:first-child {
    margin-inline-start: 0;
  }

  .v-select--selected .v-field .v-field__input>input {
    opacity: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTextField/VTextField.sass?v=3687d9c4">
  
  
  .v-text-field input {
    color: inherit;
    opacity: 0;
    flex: 1;
    transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
    min-width: 0;
  }

  .v-text-field input:focus,
  .v-text-field input:active {
    outline: none;
  }

  .v-text-field input:invalid {
    box-shadow: none;
  }

  .v-text-field .v-field {
    cursor: text;
  }

  .v-text-field--prefixed.v-text-field .v-field__input {
    --v-field-padding-start: 6px;
  }

  .v-text-field--suffixed.v-text-field .v-field__input {
    --v-field-padding-end: 0;
  }

  .v-text-field .v-input__details {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-text-field .v-field--no-label input,
  .v-text-field .v-field--active input {
    opacity: 1;
  }

  .v-text-field .v-field--single-line input {
    transition: none;
  }

  
  
  .v-text-field__prefix,
  .v-text-field__suffix {
    align-items: center;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    cursor: default;
    display: flex;
    opacity: 0;
    transition: inherit;
    white-space: nowrap;
    padding-top: calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));
    padding-bottom: var(--v-field-padding-bottom, 6px);
  }

  .v-field--active .v-text-field__prefix,
  .v-field--active .v-text-field__suffix {
    opacity: 1;
  }

  .v-field--disabled .v-text-field__prefix,
  .v-field--disabled .v-text-field__suffix {
    color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));
  }

  .v-text-field__prefix {
    padding-inline-start: var(--v-field-padding-start);
  }

  .v-text-field__suffix {
    padding-inline-end: var(--v-field-padding-end);
  }

  
  
  .v-text-field--flush-details .v-input__details {
    padding: 0;
  }

  
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VField/VField.sass?v=3687d9c4">
  
  
  .v-field {
    display: grid;
    grid-template-areas: "prepend-inner field clear append-inner";
    grid-template-columns: min-content minmax(0, 1fr) min-content min-content;
    font-size: 16px;
    letter-spacing: 0.009375em;
    max-width: 100%;
    border-radius: 6px;
    contain: layout;
    flex: 1 0;
    grid-area: control;
    position: relative;
    --v-field-padding-start: 16px;
    --v-field-padding-end: 16px;
    --v-field-padding-top: 10px;
    --v-field-padding-bottom: 6px;
  }

  .v-field--disabled {
    opacity: var(--v-disabled-opacity);
    pointer-events: none;
  }

  
  
  .v-field--prepended {
    padding-inline-start: 12px;
  }

  .v-field--appended {
    padding-inline-end: 12px;
  }

  .v-field--variant-solo {
    background: rgb(var(--v-theme-surface));
    border-color: transparent;
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-field--variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .v-input--density-default .v-field--variant-solo,
  .v-input--density-default .v-field--variant-filled {
    --v-input-control-height: 56px;
    --v-field-padding-bottom: 6px;
  }

  .v-input--density-comfortable .v-field--variant-solo,
  .v-input--density-comfortable .v-field--variant-filled {
    --v-input-control-height: 48px;
    --v-field-padding-bottom: 2px;
  }

  .v-input--density-compact .v-field--variant-solo,
  .v-input--density-compact .v-field--variant-filled {
    --v-input-control-height: 40px;
    --v-field-padding-bottom: -2px;
  }

  .v-field--variant-outlined,
  .v-field--single-line,
  .v-field--no-label {
    --v-field-padding-top: 0px;
  }

  .v-input--density-default .v-field--variant-outlined,
  .v-input--density-default .v-field--single-line,
  .v-input--density-default .v-field--no-label {
    --v-field-padding-bottom: 16px;
  }

  .v-input--density-comfortable .v-field--variant-outlined,
  .v-input--density-comfortable .v-field--single-line,
  .v-input--density-comfortable .v-field--no-label {
    --v-field-padding-bottom: 12px;
  }

  .v-input--density-compact .v-field--variant-outlined,
  .v-input--density-compact .v-field--single-line,
  .v-input--density-compact .v-field--no-label {
    --v-field-padding-bottom: 8px;
  }

  .v-field--variant-plain,
  .v-field--variant-underlined {
    border-radius: 0;
    padding: 0;
  }

  .v-field--variant-plain.v-field,
  .v-field--variant-underlined.v-field {
    --v-field-padding-start: 0px;
    --v-field-padding-end: 0px;
    --v-field-padding-top: 6px;
    --v-field-padding-bottom: 2px;
  }

  .v-input--density-default .v-field--variant-plain,
  .v-input--density-default .v-field--variant-underlined {
    --v-input-control-height: 48px;
  }

  .v-input--density-comfortable .v-field--variant-plain,
  .v-input--density-comfortable .v-field--variant-underlined {
    --v-input-control-height: 40px;
  }

  .v-input--density-compact .v-field--variant-plain,
  .v-input--density-compact .v-field--variant-underlined {
    --v-input-control-height: 32px;
  }

  .v-field.v-field--prepended {
    --v-field-padding-start: 6px;
  }

  .v-field.v-field--appended {
    --v-field-padding-end: 6px;
  }

  
  
  .v-field__input {
    color: inherit;
    display: flex;
    flex-wrap: wrap;
    letter-spacing: 0.009375em;
    opacity: var(--v-high-emphasis-opacity);
    min-height: var(--v-input-control-height, 56px);
    padding-inline-start: var(--v-field-padding-start);
    padding-inline-end: var(--v-field-padding-end);
    padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));
    padding-bottom: var(--v-field-padding-bottom, 6px);
    width: 100%;
  }

  .v-field__input input {
    letter-spacing: inherit;
  }

  .v-field__input input::placeholder,
  input.v-field__input::placeholder,
  textarea.v-field__input::placeholder {
    color: currentColor;
    opacity: var(--v-disabled-opacity);
  }

  .v-field__input:focus,
  .v-field__input:active {
    outline: none;
  }

  .v-field__input:invalid {
    box-shadow: none;
  }

  .v-field__field {
    flex: 1 0;
    grid-area: field;
    position: relative;
    align-items: flex-start;
    display: flex;
  }

  
  
  .v-field__prepend-inner {
    grid-area: prepend-inner;
    padding-inline-end: var(--v-field-padding-after);
  }

  .v-field__clearable {
    grid-area: clear;
  }

  .v-field__append-inner {
    grid-area: append-inner;
    padding-inline-start: var(--v-field-padding-after);
  }

  .v-field__prepend-inner,
  .v-field__append-inner,
  .v-field__clearable {
    align-items: flex-start;
    display: flex;
    padding-top: var(--v-input-padding-top, 10px);
  }

  .v-field--focused .v-field__prepend-inner,
  .v-field--focused .v-field__append-inner {
    opacity: 1;
  }

  .v-field__prepend-inner>.v-icon,
  .v-field__append-inner>.v-icon,
  .v-field__clearable>.v-icon {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-field--disabled .v-field__prepend-inner>.v-icon,
  .v-field--error .v-field__prepend-inner>.v-icon,
  .v-field--disabled .v-field__append-inner>.v-icon,
  .v-field--error .v-field__append-inner>.v-icon,
  .v-field--disabled .v-field__clearable>.v-icon,
  .v-field--error .v-field__clearable>.v-icon {
    opacity: 1;
  }

  .v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,
  .v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,
  .v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon {
    color: rgb(var(--v-theme-error));
  }

  .v-field__clearable {
    cursor: pointer;
    opacity: 0;
    margin-inline-start: 4px;
    margin-inline-end: 4px;
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: opacity, transform, width;
  }

  .v-field--focused .v-field__clearable,
  .v-field--persistent-clear .v-field__clearable {
    opacity: 1;
  }

  @media (hover: hover) {
    .v-field:hover .v-field__clearable {
      opacity: 1;
    }
  }

  
  
  .v-label.v-field-label {
    contain: layout paint;
    margin-inline-start: var(--v-field-padding-start);
    margin-inline-end: var(--v-field-padding-end);
    max-width: calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));
    pointer-events: none;
    position: absolute;
    top: var(--v-input-padding-top, 10px);
    transform-origin: left center;
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: opacity, transform;
  }

  .v-field--active .v-label.v-field-label {
    visibility: hidden;
  }

  .v-field--focused .v-label.v-field-label,
  .v-field--error .v-label.v-field-label {
    opacity: 1;
  }

  .v-field--error:not(.v-field--disabled) .v-label.v-field-label {
    color: rgb(var(--v-theme-error));
  }

  .v-label.v-field-label--floating {
    --v-field-label-scale: 0.75em;
    font-size: var(--v-field-label-scale);
    visibility: hidden;
    max-width: 100%;
  }

  .v-field.v-field--active .v-label.v-field-label--floating {
    visibility: visible;
  }

  .v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,
  .v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating {
    top: 7px;
  }

  .v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,
  .v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating {
    top: 5px;
  }

  .v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,
  .v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating {
    top: 3px;
  }

  .v-field--variant-plain .v-label.v-field-label--floating,
  .v-field--variant-underlined .v-label.v-field-label--floating {
    transform: translateY(-16px);
    margin: 0;
  }

  .v-field--variant-outlined .v-label.v-field-label--floating {
    transform: translateY(-50%);
    transform-origin: center;
    position: static;
    margin: 0 4px;
  }

  
  
  .v-field__outline {
    --v-field-border-width: 1px;
    --v-field-border-opacity: 0.38;
    align-items: stretch;
    contain: layout;
    display: flex;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    width: 100%;
  }

  @media (hover: hover) {
    .v-field:hover .v-field__outline {
      --v-field-border-opacity: var(--v-high-emphasis-opacity);
    }
  }

  .v-field--error:not(.v-field--disabled) .v-field__outline {
    color: rgb(var(--v-theme-error));
  }

  .v-field.v-field--focused .v-field__outline,
  .v-input.v-input--error .v-field__outline {
    --v-field-border-opacity: 1;
  }

  .v-field--variant-outlined.v-field--focused .v-field__outline {
    --v-field-border-width: 2px;
  }

  .v-field--variant-filled .v-field__outline::before,
  .v-field--variant-underlined .v-field__outline::before {
    border-style: solid;
    border-width: 0 0 var(--v-field-border-width);
    opacity: var(--v-field-border-opacity);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-field--variant-filled .v-field__outline::after,
  .v-field--variant-underlined .v-field__outline::after {
    border-color: currentColor;
    border-style: solid;
    border-width: 0 0 2px;
    transform: scaleX(0);
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-field--focused.v-field--variant-filled .v-field__outline::after,
  .v-field--focused.v-field--variant-underlined .v-field__outline::after {
    transform: scaleX(1);
  }

  .v-field--variant-outlined .v-field__outline {
    border-radius: inherit;
  }

  .v-field--variant-outlined .v-field__outline__start,
  .v-field--variant-outlined .v-field__outline__notch::before,
  .v-field--variant-outlined .v-field__outline__notch::after,
  .v-field--variant-outlined .v-field__outline__end {
    border: 0 solid currentColor;
    opacity: var(--v-field-border-opacity);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-field--variant-outlined .v-field__outline__start {
    flex: 0 0 12px;
    border-top-width: var(--v-field-border-width);
    border-bottom-width: var(--v-field-border-width);
    border-inline-start-width: var(--v-field-border-width);
  }

  .v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,
  .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start {
    border-radius: 6px 0 0 6px;
  }

  .v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,
  .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start {
    border-radius: 0 6px 6px 0;
  }

  .v-field--variant-outlined .v-field__outline__notch {
    flex: none;
    position: relative;
    border-width: 0 0 var(--v-field-border-width);
  }

  .v-field--variant-outlined .v-field__outline__notch::before,
  .v-field--variant-outlined .v-field__outline__notch::after {
    opacity: var(--v-field-border-opacity);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-field--variant-outlined .v-field__outline__notch::before {
    border-width: var(--v-field-border-width) 0 0;
  }

  .v-field--variant-outlined .v-field__outline__notch::after {
    bottom: 0;
    border-width: 0 0 var(--v-field-border-width);
  }

  .v-field--active.v-field--variant-outlined .v-field__outline__notch::before {
    opacity: 0;
  }

  .v-field--variant-outlined .v-field__outline__end {
    flex: 1;
    border-top-width: var(--v-field-border-width);
    border-bottom-width: var(--v-field-border-width);
    border-inline-end-width: var(--v-field-border-width);
  }

  .v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,
  .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end {
    border-radius: 0 6px 6px 0;
  }

  .v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,
  .v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end {
    border-radius: 6px 0 0 6px;
  }

  
  
  .v-field__loader {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
  }

  
  
  .v-field--variant-filled .v-field__overlay {
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0.04;
    pointer-events: none;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-field--variant-filled.v-field--has-background .v-field__overlay {
    opacity: 0;
  }

  @media (hover: hover) {
    .v-field--variant-filled:hover .v-field__overlay {
      opacity: calc(0.08 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-field--variant-filled.v-field--focused .v-field__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  
  
  .v-field--reverse .v-field__input.v-locale--is-ltr,
  .v-locale--is-ltr .v-field--reverse .v-field__input {
    text-align: right;
  }

  .v-field--reverse .v-field__input.v-locale--is-rtl,
  .v-locale--is-rtl .v-field--reverse .v-field__input {
    text-align: left;
  }

  .v-input--disabled .v-field--variant-filled .v-field__outline::before,
  .v-input--disabled .v-field--variant-underlined .v-field__outline::before {
    border-image: repeating-linear-gradient(to right, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 0px, rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) 2px, transparent 2px, transparent 4px) 1 repeat;
  }

  .v-field--loading .v-field__outline::after,
  .v-field--loading .v-field__outline::before {
    opacity: 0;
  }

  
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VLabel/VLabel.sass?v=3687d9c4">
  
  .v-label {
    align-items: center;
    display: inline-flex;
    font-size: 1rem;
    letter-spacing: 0.009375em;
    min-width: 0;
    opacity: var(--v-medium-emphasis-opacity);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-label--clickable {
    cursor: pointer;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VInput/VInput.sass?v=3687d9c4">
  
  .v-input {
    display: grid;
    flex: 1 1 auto;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .v-input--disabled {
    pointer-events: none;
  }

  .v-input--density-default {
    --v-input-control-height: 56px;
    --v-input-padding-top: 16px;
  }

  .v-input--density-comfortable {
    --v-input-control-height: 48px;
    --v-input-padding-top: 12px;
  }

  .v-input--density-compact {
    --v-input-control-height: 40px;
    --v-input-padding-top: 8px;
  }

  .v-input--vertical {
    grid-template-areas: "append" "control" "prepend";
    grid-template-rows: max-content auto max-content;
    grid-template-columns: min-content;
  }

  .v-input--vertical .v-input__prepend {
    margin-block-start: 16px;
  }

  .v-input--vertical .v-input__append {
    margin-block-end: 16px;
  }

  .v-input--horizontal {
    grid-template-areas: "prepend control append" "a messages b";
    grid-template-columns: max-content minmax(0, 1fr) max-content;
    grid-template-rows: auto auto;
  }

  .v-input--horizontal .v-input__prepend {
    margin-inline-end: 16px;
  }

  .v-input--horizontal .v-input__append {
    margin-inline-start: 16px;
  }

  .v-input__details {
    align-items: flex-end;
    display: flex;
    font-size: 0.75rem;
    font-weight: 400;
    grid-area: messages;
    letter-spacing: 0.0333333333em;
    line-height: normal;
    min-height: 22px;
    padding-top: 6px;
    overflow: hidden;
    justify-content: space-between;
  }

  .v-input__details>.v-icon,
  .v-input__prepend>.v-icon,
  .v-input__append>.v-icon {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-input--disabled .v-input__details>.v-icon,
  .v-input--disabled .v-input__details .v-messages,
  .v-input--error .v-input__details>.v-icon,
  .v-input--error .v-input__details .v-messages,
  .v-input--disabled .v-input__prepend>.v-icon,
  .v-input--disabled .v-input__prepend .v-messages,
  .v-input--error .v-input__prepend>.v-icon,
  .v-input--error .v-input__prepend .v-messages,
  .v-input--disabled .v-input__append>.v-icon,
  .v-input--disabled .v-input__append .v-messages,
  .v-input--error .v-input__append>.v-icon,
  .v-input--error .v-input__append .v-messages {
    opacity: 1;
  }

  .v-input--disabled .v-input__details,
  .v-input--disabled .v-input__prepend,
  .v-input--disabled .v-input__append {
    opacity: var(--v-disabled-opacity);
  }

  .v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,
  .v-input--error:not(.v-input--disabled) .v-input__details .v-messages,
  .v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,
  .v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,
  .v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,
  .v-input--error:not(.v-input--disabled) .v-input__append .v-messages {
    color: rgb(var(--v-theme-error));
  }

  .v-input__prepend,
  .v-input__append {
    display: flex;
    padding-top: var(--v-input-padding-top);
  }

  .v-input__prepend {
    grid-area: prepend;
  }

  .v-input__append {
    grid-area: append;
  }

  .v-input__control {
    display: flex;
    grid-area: control;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VMessages/VMessages.sass?v=3687d9c4">
  
  .v-messages {
    flex: 1 1 auto;
    font-size: 12px;
    min-height: 14px;
    min-width: 1px;
    opacity: var(--v-medium-emphasis-opacity);
    position: relative;
  }

  .v-messages__message {
    line-height: 12px;
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    transition-duration: 150ms;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCounter/VCounter.sass?v=3687d9c4">
  
  .v-counter {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    flex: 0 1 auto;
    font-size: 12px;
    transition-duration: 150ms;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCheckbox/VCheckbox.sass?v=3687d9c4">
  
  .v-checkbox .v-selection-control {
    height: var(--v-input-control-height);
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VSelectionControl/VSelectionControl.sass?v=3687d9c4">
  
  .v-selection-control {
    align-items: center;
    contain: layout;
    display: flex;
    flex: 1 0;
    grid-area: control;
    position: relative;
    user-select: none;
  }

  .v-selection-control .v-label {
    height: 100%;
    width: 100%;
  }

  .v-selection-control--disabled {
    opacity: var(--v-disabled-opacity);
    pointer-events: none;
  }

  .v-selection-control--error .v-label,
  .v-selection-control--disabled .v-label {
    opacity: 1;
  }

  .v-selection-control--error:not(.v-selection-control--disabled) .v-label {
    color: rgb(var(--v-theme-error));
  }

  .v-selection-control--inline {
    display: inline-flex;
    flex: 0 0 auto;
  }

  .v-selection-control--inline .v-label {
    width: auto;
  }

  .v-selection-control--density-default {
    --v-selection-control-size: 40px;
  }

  .v-selection-control--density-comfortable {
    --v-selection-control-size: 36px;
  }

  .v-selection-control--density-compact {
    --v-selection-control-size: 28px;
  }

  .v-selection-control__wrapper {
    width: var(--v-selection-control-size);
    height: var(--v-selection-control-size);
    display: inline-flex;
    align-items: center;
    position: relative;
    justify-content: center;
    flex: none;
  }

  .v-selection-control__input {
    width: var(--v-selection-control-size);
    height: var(--v-selection-control-size);
    align-items: center;
    display: flex;
    flex: none;
    justify-content: center;
    position: relative;
    border-radius: 50%;
  }

  .v-selection-control__input input {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .v-selection-control__input::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: currentColor;
    opacity: 0;
    pointer-events: none;
  }

  .v-selection-control__input:hover::before {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-selection-control__input>.v-icon {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-selection-control--disabled .v-selection-control__input>.v-icon,
  .v-selection-control--dirty .v-selection-control__input>.v-icon,
  .v-selection-control--error .v-selection-control__input>.v-icon {
    opacity: 1;
  }

  .v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon {
    color: rgb(var(--v-theme-error));
  }

  .v-selection-control--focus-visible .v-selection-control__input::before {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VSelectionControlGroup/VSelectionControlGroup.sass?v=3687d9c4">
  
  .v-selection-control-group {
    grid-area: control;
    display: flex;
    flex-direction: column;
  }

  .v-selection-control-group--inline {
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VChip/VChip.sass?v=3687d9c4">
  
  .v-chip {
    align-items: center;
    cursor: default;
    display: inline-flex;
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    border-radius: 9999px;
  }

  .v-chip.v-chip--size-x-small {
    --v-chip-size: 0.6875rem;
    --v-chip-height: 20px;
    font-size: 0.6875rem;
    padding: 0 8px;
  }

  .v-chip.v-chip--size-x-small .v-avatar {
    --v-avatar-height: 14px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-small .v-avatar {
    --v-avatar-height: 20px;
  }

  .v-chip.v-chip--size-x-small .v-chip__filter,
  .v-chip.v-chip--size-x-small .v-chip__prepend,
  .v-chip.v-chip--size-x-small>.v-avatar--start,
  .v-chip.v-chip--size-x-small>.v-icon--start {
    margin-inline-end: 4px;
  }

  .v-chip.v-chip--size-x-small .v-chip__filter,
  .v-chip.v-chip--size-x-small .v-chip__prepend,
  .v-chip.v-chip--size-x-small .v-icon--start {
    margin-inline-start: -4px;
  }

  .v-chip.v-chip--size-x-small .v-avatar--start {
    margin-inline-start: -5.6px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start {
    margin-inline-start: -8px;
  }

  .v-chip.v-chip--size-x-small .v-chip__append,
  .v-chip.v-chip--size-x-small .v-chip__close,
  .v-chip.v-chip--size-x-small>.v-avatar--end,
  .v-chip.v-chip--size-x-small>.v-icon--end {
    margin-inline-start: 4px;
    margin-inline-end: -4px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end,
  .v-chip--pill.v-chip.v-chip--size-x-small .v-icon--end {
    margin-inline-end: -8px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,
  .v-chip--pill.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close {
    margin-inline-start: 8px;
  }

  .v-chip.v-chip--size-small {
    --v-chip-size: 0.8125rem;
    --v-chip-height: 26px;
    font-size: 0.8125rem;
    padding: 0 10px;
  }

  .v-chip.v-chip--size-small .v-avatar {
    --v-avatar-height: 20px;
  }

  .v-chip--pill.v-chip.v-chip--size-small .v-avatar {
    --v-avatar-height: 26px;
  }

  .v-chip.v-chip--size-small .v-chip__filter,
  .v-chip.v-chip--size-small .v-chip__prepend,
  .v-chip.v-chip--size-small>.v-avatar--start,
  .v-chip.v-chip--size-small>.v-icon--start {
    margin-inline-end: 5px;
  }

  .v-chip.v-chip--size-small .v-chip__filter,
  .v-chip.v-chip--size-small .v-chip__prepend,
  .v-chip.v-chip--size-small .v-icon--start {
    margin-inline-start: -5px;
  }

  .v-chip.v-chip--size-small .v-avatar--start {
    margin-inline-start: -7px;
  }

  .v-chip--pill.v-chip.v-chip--size-small .v-avatar--start {
    margin-inline-start: -10px;
  }

  .v-chip.v-chip--size-small .v-chip__append,
  .v-chip.v-chip--size-small .v-chip__close,
  .v-chip.v-chip--size-small>.v-avatar--end,
  .v-chip.v-chip--size-small>.v-icon--end {
    margin-inline-start: 5px;
    margin-inline-end: -5px;
  }

  .v-chip--pill.v-chip.v-chip--size-small .v-avatar--end,
  .v-chip--pill.v-chip.v-chip--size-small .v-icon--end {
    margin-inline-end: -10px;
  }

  .v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,
  .v-chip--pill.v-chip.v-chip--size-small .v-icon--end+.v-chip__close {
    margin-inline-start: 10px;
  }

  .v-chip.v-chip--size-default {
    --v-chip-size: 0.9375rem;
    --v-chip-height: 32px;
    font-size: 0.9375rem;
    padding: 0 12px;
  }

  .v-chip.v-chip--size-default .v-avatar {
    --v-avatar-height: 26px;
  }

  .v-chip--pill.v-chip.v-chip--size-default .v-avatar {
    --v-avatar-height: 32px;
  }

  .v-chip.v-chip--size-default .v-chip__filter,
  .v-chip.v-chip--size-default .v-chip__prepend,
  .v-chip.v-chip--size-default>.v-avatar--start,
  .v-chip.v-chip--size-default>.v-icon--start {
    margin-inline-end: 6px;
  }

  .v-chip.v-chip--size-default .v-chip__filter,
  .v-chip.v-chip--size-default .v-chip__prepend,
  .v-chip.v-chip--size-default .v-icon--start {
    margin-inline-start: -6px;
  }

  .v-chip.v-chip--size-default .v-avatar--start {
    margin-inline-start: -8.4px;
  }

  .v-chip--pill.v-chip.v-chip--size-default .v-avatar--start {
    margin-inline-start: -12px;
  }

  .v-chip.v-chip--size-default .v-chip__append,
  .v-chip.v-chip--size-default .v-chip__close,
  .v-chip.v-chip--size-default>.v-avatar--end,
  .v-chip.v-chip--size-default>.v-icon--end {
    margin-inline-start: 6px;
    margin-inline-end: -6px;
  }

  .v-chip--pill.v-chip.v-chip--size-default .v-avatar--end,
  .v-chip--pill.v-chip.v-chip--size-default .v-icon--end {
    margin-inline-end: -12px;
  }

  .v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,
  .v-chip--pill.v-chip.v-chip--size-default .v-icon--end+.v-chip__close {
    margin-inline-start: 12px;
  }

  .v-chip.v-chip--size-large {
    --v-chip-size: 1.0625rem;
    --v-chip-height: 38px;
    font-size: 1.0625rem;
    padding: 0 14px;
  }

  .v-chip.v-chip--size-large .v-avatar {
    --v-avatar-height: 32px;
  }

  .v-chip--pill.v-chip.v-chip--size-large .v-avatar {
    --v-avatar-height: 38px;
  }

  .v-chip.v-chip--size-large .v-chip__filter,
  .v-chip.v-chip--size-large .v-chip__prepend,
  .v-chip.v-chip--size-large>.v-avatar--start,
  .v-chip.v-chip--size-large>.v-icon--start {
    margin-inline-end: 7px;
  }

  .v-chip.v-chip--size-large .v-chip__filter,
  .v-chip.v-chip--size-large .v-chip__prepend,
  .v-chip.v-chip--size-large .v-icon--start {
    margin-inline-start: -7px;
  }

  .v-chip.v-chip--size-large .v-avatar--start {
    margin-inline-start: -9.8px;
  }

  .v-chip--pill.v-chip.v-chip--size-large .v-avatar--start {
    margin-inline-start: -14px;
  }

  .v-chip.v-chip--size-large .v-chip__append,
  .v-chip.v-chip--size-large .v-chip__close,
  .v-chip.v-chip--size-large>.v-avatar--end,
  .v-chip.v-chip--size-large>.v-icon--end {
    margin-inline-start: 7px;
    margin-inline-end: -7px;
  }

  .v-chip--pill.v-chip.v-chip--size-large .v-avatar--end,
  .v-chip--pill.v-chip.v-chip--size-large .v-icon--end {
    margin-inline-end: -14px;
  }

  .v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,
  .v-chip--pill.v-chip.v-chip--size-large .v-icon--end+.v-chip__close {
    margin-inline-start: 14px;
  }

  .v-chip.v-chip--size-x-large {
    --v-chip-size: 1.1875rem;
    --v-chip-height: 44px;
    font-size: 1.1875rem;
    padding: 0 17px;
  }

  .v-chip.v-chip--size-x-large .v-avatar {
    --v-avatar-height: 38px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-large .v-avatar {
    --v-avatar-height: 44px;
  }

  .v-chip.v-chip--size-x-large .v-chip__filter,
  .v-chip.v-chip--size-x-large .v-chip__prepend,
  .v-chip.v-chip--size-x-large>.v-avatar--start,
  .v-chip.v-chip--size-x-large>.v-icon--start {
    margin-inline-end: 8.5px;
  }

  .v-chip.v-chip--size-x-large .v-chip__filter,
  .v-chip.v-chip--size-x-large .v-chip__prepend,
  .v-chip.v-chip--size-x-large .v-icon--start {
    margin-inline-start: -8.5px;
  }

  .v-chip.v-chip--size-x-large .v-avatar--start {
    margin-inline-start: -11.9px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start {
    margin-inline-start: -17px;
  }

  .v-chip.v-chip--size-x-large .v-chip__append,
  .v-chip.v-chip--size-x-large .v-chip__close,
  .v-chip.v-chip--size-x-large>.v-avatar--end,
  .v-chip.v-chip--size-x-large>.v-icon--end {
    margin-inline-start: 8.5px;
    margin-inline-end: -8.5px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end,
  .v-chip--pill.v-chip.v-chip--size-x-large .v-icon--end {
    margin-inline-end: -17px;
  }

  .v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,
  .v-chip--pill.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close {
    margin-inline-start: 17px;
  }

  .v-chip.v-chip--density-default {
    height: calc(var(--v-chip-height) + 0px);
  }

  .v-chip.v-chip--density-comfortable {
    height: calc(var(--v-chip-height) + -8px);
  }

  .v-chip.v-chip--density-compact {
    height: calc(var(--v-chip-height) + -12px);
  }

  .v-chip:hover>.v-chip__overlay {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-chip:focus-visible>.v-chip__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .v-chip:focus>.v-chip__overlay {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-chip--active>.v-chip__overlay,
  .v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  .v-chip--active:hover>.v-chip__overlay,
  .v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  .v-chip--active:focus-visible>.v-chip__overlay,
  .v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .v-chip--active:focus>.v-chip__overlay,
    .v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay {
      opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-chip--variant-plain,
  .v-chip--variant-outlined,
  .v-chip--variant-text,
  .v-chip--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-chip--variant-plain {
    opacity: 0.26;
  }

  .v-chip--variant-plain:focus,
  .v-chip--variant-plain:hover {
    opacity: 1;
  }

  .v-chip--variant-plain .v-chip__overlay {
    display: none;
  }

  .v-chip--variant-elevated,
  .v-chip--variant-flat {
    background: rgb(var(--v-theme-surface-variant));
    color: rgb(var(--v-theme-on-surface-variant));
  }

  .v-chip--variant-elevated {
    box-shadow: 0 2px 4px 1px var(--v-shadow-key-umbra-opacity), 0 4px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 3px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-chip--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-chip--variant-outlined {
    border: thin solid currentColor;
  }

  .v-chip--variant-text .v-chip__overlay {
    background: currentColor;
  }

  .v-chip--variant-tonal .v-chip__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-chip--border {
    border-width: thin;
  }

  .v-chip--link {
    cursor: pointer;
  }

  .v-chip--filter {
    user-select: none;
  }

  .v-chip--label {
    border-radius: 0.25rem;
  }

  .v-chip__filter,
  .v-chip__prepend,
  .v-chip__append,
  .v-chip__close {
    align-items: center;
    display: inline-flex;
  }

  .v-chip__close {
    cursor: pointer;
    flex: 0 1 auto;
    font-size: 18px;
    max-height: 18px;
    max-width: 18px;
    user-select: none;
  }

  .v-chip__close .v-icon {
    font-size: inherit;
  }

  .v-chip__filter {
    transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-chip__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .v-chip--disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  .v-chip--label {
    border-radius: 0.25rem;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VAvatar/VAvatar.sass?v=3687d9c4">
  
  .v-avatar {
    flex: none;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    line-height: normal;
    overflow: hidden;
    position: relative;
    text-align: center;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: width, height;
    vertical-align: middle;
    border-radius: 50%;
  }

  .v-avatar.v-avatar--size-x-small {
    --v-avatar-height: 24px;
  }

  .v-avatar.v-avatar--size-small {
    --v-avatar-height: 32px;
  }

  .v-avatar.v-avatar--size-default {
    --v-avatar-height: 40px;
  }

  .v-avatar.v-avatar--size-large {
    --v-avatar-height: 48px;
  }

  .v-avatar.v-avatar--size-x-large {
    --v-avatar-height: 56px;
  }

  .v-avatar.v-avatar--density-default {
    height: calc(var(--v-avatar-height) + 0px);
    width: calc(var(--v-avatar-height) + 0px);
  }

  .v-avatar.v-avatar--density-comfortable {
    height: calc(var(--v-avatar-height) + -4px);
    width: calc(var(--v-avatar-height) + -4px);
  }

  .v-avatar.v-avatar--density-compact {
    height: calc(var(--v-avatar-height) + -8px);
    width: calc(var(--v-avatar-height) + -8px);
  }

  .v-avatar--variant-plain,
  .v-avatar--variant-outlined,
  .v-avatar--variant-text,
  .v-avatar--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-avatar--variant-plain {
    opacity: 0.62;
  }

  .v-avatar--variant-plain:focus,
  .v-avatar--variant-plain:hover {
    opacity: 1;
  }

  .v-avatar--variant-plain .v-avatar__overlay {
    display: none;
  }

  .v-avatar--variant-elevated,
  .v-avatar--variant-flat {
    background: var(--v-theme-surface);
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  }

  .v-avatar--variant-elevated {
    box-shadow: 0 2px 4px 1px var(--v-shadow-key-umbra-opacity), 0 4px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 3px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-avatar--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-avatar--variant-outlined {
    border: thin solid currentColor;
  }

  .v-avatar--variant-text .v-avatar__overlay {
    background: currentColor;
  }

  .v-avatar--variant-tonal .v-avatar__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-avatar--rounded {
    border-radius: 6px;
  }

  .v-avatar .v-img {
    height: 100%;
    width: 100%;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VChipGroup/VChipGroup.sass?v=3687d9c4">
  
  .v-chip-group {
    display: flex;
    max-width: 100%;
    min-width: 0;
    overflow-x: auto;
    padding: 4px 0;
  }

  .v-chip-group .v-chip {
    margin: 4px 8px 4px 0;
  }

  .v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay {
    opacity: var(--v-activated-opacity);
  }

  .v-chip-group--column {
    flex-wrap: wrap;
    white-space: normal;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VList/VList.sass?v=3687d9c4">
  
  .v-list {
    overflow: auto;
    padding: 8px 0;
    position: relative;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 6px;
    background: rgba(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-list--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-list--disabled {
    pointer-events: none;
    user-select: none;
  }

  .v-list--nav {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  .v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar {
    --v-avatar-height: 24px;
  }

  .v-list--rounded {
    border-radius: 6px;
  }

  .v-list--subheader {
    padding-top: 0;
  }

  .v-list-img {
    border-radius: inherit;
    display: flex;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .v-list-subheader {
    align-items: center;
    background: inherit;
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
    display: flex;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    padding-inline-end: 16px;
    min-height: 40px;
    transition: 0.2s min-height cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-list-subheader__text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-list--density-default .v-list-subheader {
    min-height: 40px;
    padding-inline-start: calc(16px + var(--indent-padding)) !important;
  }

  .v-list--density-comfortable .v-list-subheader {
    min-height: 36px;
    padding-inline-start: calc(16px + var(--indent-padding)) !important;
  }

  .v-list--density-compact .v-list-subheader {
    min-height: 32px;
    padding-inline-start: calc(16px + var(--indent-padding)) !important;
  }

  .v-list-subheader--inset {
    --indent-padding: 56px;
  }

  .v-list--nav .v-list-subheader {
    font-size: 0.75rem;
  }

  .v-list-subheader--sticky {
    background: inherit;
    left: 0;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .v-list__overlay {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s ease-in-out;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VDivider/VDivider.sass?v=3687d9c4">
  
  .v-divider {
    display: block;
    flex: 1 1 100%;
    height: 0px;
    max-height: 0px;
    transition: inherit;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: thin 0 0 0;
  }

  .v-divider--vertical {
    align-self: stretch;
    border-width: 0 thin 0 0;
    display: inline-flex;
    height: inherit;
    margin-left: -1px;
    max-height: 100%;
    max-width: 0px;
    vertical-align: text-bottom;
    width: 0px;
  }

  .v-divider--inset:not(.v-divider--vertical) {
    max-width: calc(100% - 72px);
    margin-inline-start: 72px;
  }

  .v-divider--inset.v-divider--vertical {
    margin-bottom: 8px;
    margin-top: 8px;
    max-height: calc(100% - 16px);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VList/VListItem.sass?v=3687d9c4">
  
  .v-list-item {
    align-items: center;
    display: grid;
    flex: none;
    grid-template-areas: "prepend content append";
    grid-template-columns: max-content auto max-content;
    outline: none;
    padding: 4px 16px;
    position: relative;
    text-decoration: none;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    border-radius: 0;
  }

  .v-list-item--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-list-item:hover>.v-list-item__overlay {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-list-item:focus-visible>.v-list-item__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .v-list-item:focus>.v-list-item__overlay {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-list-item--active>.v-list-item__overlay,
  .v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  .v-list-item--active:hover>.v-list-item__overlay,
  .v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  .v-list-item--active:focus-visible>.v-list-item__overlay,
  .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .v-list-item--active:focus>.v-list-item__overlay,
    .v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay {
      opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-list-item--variant-plain,
  .v-list-item--variant-outlined,
  .v-list-item--variant-text,
  .v-list-item--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-list-item--variant-plain {
    opacity: 0.62;
  }

  .v-list-item--variant-plain:focus,
  .v-list-item--variant-plain:hover {
    opacity: 1;
  }

  .v-list-item--variant-plain .v-list-item__overlay {
    display: none;
  }

  .v-list-item--variant-elevated,
  .v-list-item--variant-flat {
    background: rgba(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-list-item--variant-elevated {
    box-shadow: 0 2px 4px 1px var(--v-shadow-key-umbra-opacity), 0 4px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 3px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-list-item--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-list-item--variant-outlined {
    border: thin solid currentColor;
  }

  .v-list-item--variant-text .v-list-item__overlay {
    background: currentColor;
  }

  .v-list-item--variant-tonal .v-list-item__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-list-item__prepend>.v-icon,
  .v-list-item__append>.v-icon {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-list-item--active .v-list-item__prepend>.v-icon,
  .v-list-item--active .v-list-item__append>.v-icon {
    opacity: 1;
  }

  .v-list-item--rounded {
    border-radius: 6px;
  }

  .v-list-item--disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.6;
  }

  .v-list-item--link {
    cursor: pointer;
  }

  .v-list-item__prepend {
    align-items: center;
    align-self: center;
    display: flex;
    grid-area: prepend;
  }

  .v-list-item__prepend>.v-avatar {
    margin-inline-end: 16px;
  }

  .v-list-item__prepend>.v-icon {
    margin-inline-end: 32px;
  }

  .v-list-item--two-line .v-list-item__prepend,
  .v-list-item--three-line .v-list-item__prepend {
    align-self: start;
  }

  .v-list-item__append {
    align-self: center;
    display: flex;
    align-items: center;
    grid-area: append;
  }

  .v-list-item__append>.v-avatar {
    margin-inline-start: 16px;
  }

  .v-list-item__append>.v-icon {
    margin-inline-start: 32px;
  }

  .v-list-item--two-line .v-list-item__append,
  .v-list-item--three-line .v-list-item__append {
    align-self: start;
  }

  .v-list-item__content {
    align-self: center;
    grid-area: content;
    overflow: hidden;
  }

  .v-list-item-action {
    align-self: center;
    display: flex;
    align-items: center;
    grid-area: prepend;
    flex: none;
    transition: inherit;
    transition-property: height, width;
  }

  .v-list-item-action--start {
    margin-inline-end: 12px;
  }

  .v-list-item-action--end {
    margin-inline-start: 12px;
  }

  .v-list-item-media {
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-list-item-media--start {
    margin-inline-end: 16px;
  }

  .v-list-item-media--end {
    margin-inline-start: 16px;
  }

  .v-list-item--two-line .v-list-item-media {
    margin-top: -4px;
    margin-bottom: -4px;
  }

  .v-list-item--three-line .v-list-item-media {
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-list-item-subtitle {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    opacity: var(--v-medium-emphasis-opacity);
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    line-height: 1rem;
    text-transform: none;
  }

  .v-list-item--one-line .v-list-item-subtitle {
    -webkit-line-clamp: 1;
  }

  .v-list-item--two-line .v-list-item-subtitle {
    -webkit-line-clamp: 2;
  }

  .v-list-item--three-line .v-list-item-subtitle {
    -webkit-line-clamp: 3;
  }

  .v-list-item--nav .v-list-item-subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    line-height: 1rem;
  }

  .v-list-item-title {
    hyphens: auto;
    overflow-wrap: normal;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: normal;
    word-wrap: break-word;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    line-height: 1.5rem;
    text-transform: none;
  }

  .v-list-item--nav .v-list-item-title {
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 1rem;
  }

  .v-list-item--density-default {
    min-height: 40px;
  }

  .v-list-item--density-default.v-list-item--one-line {
    min-height: 48px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .v-list-item--density-default.v-list-item--two-line {
    min-height: 64px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .v-list-item--density-default.v-list-item--three-line {
    min-height: 88px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-comfortable {
    min-height: 36px;
  }

  .v-list-item--density-comfortable.v-list-item--one-line {
    min-height: 44px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .v-list-item--density-comfortable.v-list-item--two-line {
    min-height: 60px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-list-item--density-comfortable.v-list-item--three-line {
    min-height: 84px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-compact {
    min-height: 32px;
  }

  .v-list-item--density-compact.v-list-item--one-line {
    min-height: 40px;
    padding-top: -4px;
    padding-bottom: -4px;
  }

  .v-list-item--density-compact.v-list-item--two-line {
    min-height: 56px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .v-list-item--density-compact.v-list-item--three-line {
    min-height: 80px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line {
    padding-inline-start: 16px;
    padding-inline-end: 16px;
  }

  .v-list-item--nav {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  .v-list .v-list-item--nav:not(:last-child):not(:only-child) {
    margin-bottom: 4px;
  }

  .v-list-item__underlay {
    position: absolute;
  }

  .v-list-item__overlay {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay {
    --v-theme-overlay-multiplier: 0;
  }

  .v-list {
    --indent-padding: 0px;
  }

  .v-list--nav {
    --indent-padding: -8px;
  }

  .v-list-group {
    --list-indent-size: 16px;
    --parent-padding: var(--indent-padding);
    --prepend-width: 40px;
  }

  .v-list-group--fluid {
    --list-indent-size: 0px;
  }

  .v-list-group--prepend {
    --parent-padding: calc(var(--indent-padding) + var(--prepend-width));
  }

  .v-list-group--fluid.v-list-group--prepend {
    --parent-padding: var(--indent-padding);
  }

  .v-list-group__items {
    --indent-padding: calc(var(--parent-padding) + var(--list-indent-size));
  }

  .v-list-group__items .v-list-item {
    padding-inline-start: calc(16px + var(--indent-padding)) !important;
  }

  .v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay {
    opacity: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VMenu/VMenu.sass?v=3687d9c4">
  
  .v-menu .v-overlay__content {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
  }

  .v-menu .v-overlay__content>.v-card,
  .v-menu .v-overlay__content>.v-sheet,
  .v-menu .v-overlay__content>.v-list {
    background: rgb(var(--v-theme-surface));
    border-radius: inherit;
    overflow: auto;
    height: 100%;
    box-shadow: 0 5px 11px 3px var(--v-shadow-key-umbra-opacity), 0 11px 8px 1px var(--v-shadow-key-penumbra-opacity), 0 3px 8px 4px var(--v-shadow-key-ambient-opacity);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VOverlay/VOverlay.sass?v=3687d9c4">
  
  .v-overlay-container {
    contain: layout;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    display: contents;
  }

  .v-overlay-scroll-blocked {
    padding-inline-end: var(--v-scrollbar-offset);
    overflow-y: hidden !important;
  }

  html.v-overlay-scroll-blocked {
    position: fixed;
    top: var(--v-body-scroll-y);
    left: var(--v-body-scroll-x);
    width: 100%;
    height: 100%;
  }

  .v-overlay {
    border-radius: inherit;
    display: flex;
    left: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .v-overlay__content {
    outline: none;
    position: absolute;
    pointer-events: auto;
    contain: layout;
  }

  .v-overlay__scrim {
    pointer-events: auto;
    background: rgb(var(--v-theme-on-surface));
    border-radius: inherit;
    bottom: 0;
    left: 0;
    opacity: 32%;
    position: fixed;
    right: 0;
    top: 0;
  }

  .v-overlay--absolute {
    position: absolute;
  }

  .v-overlay--contained .v-overlay__scrim {
    position: absolute;
  }

  .v-overlay--scroll-blocked {
    padding-inline-end: var(--v-scrollbar-offset);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBadge/VBadge.sass?v=3687d9c4">
  
  .v-badge {
    display: inline-block;
    line-height: 1;
  }

  .v-badge__badge {
    align-items: center;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    height: 1.25rem;
    justify-content: center;
    min-width: 20px;
    padding: 4px 6px;
    pointer-events: auto;
    position: absolute;
    text-align: center;
    text-indent: 0;
    transition: 0.225s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    background: rgb(var(--v-theme-surface-variant));
    color: rgba(var(--v-theme-on-surface-variant), var(--v-high-emphasis-opacity));
  }

  .v-badge--bordered .v-badge__badge::after {
    border-radius: inherit;
    border-style: solid;
    border-width: 2px;
    bottom: 0;
    color: rgb(var(--v-theme-background));
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(1.2);
  }

  .v-badge--dot .v-badge__badge {
    border-radius: 4.5px;
    height: 9px;
    min-width: 0;
    padding: 0;
    width: 9px;
  }

  .v-badge--dot .v-badge__badge::after {
    border-width: 1.5px;
  }

  .v-badge--inline .v-badge__badge {
    position: relative;
    vertical-align: middle;
  }

  .v-badge__badge .v-icon {
    color: inherit;
    font-size: 0.75rem;
    margin: 0 -2px;
  }

  .v-badge__badge img,
  .v-badge__badge .v-img {
    height: 100%;
    width: 100%;
  }

  .v-badge__wrapper {
    display: flex;
    position: relative;
  }

  .v-badge--inline .v-badge__wrapper {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    margin: 0 4px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBanner/VBanner.sass?v=3687d9c4">
  
  .v-banner {
    display: grid;
    flex: 1 1;
    font-size: 0.875rem;
    grid-template-areas: "prepend content actions";
    grid-template-columns: max-content auto max-content;
    grid-template-rows: max-content max-content;
    line-height: 1.375rem;
    overflow: hidden;
    padding-inline-start: 16px;
    padding-inline-end: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;
    width: 100%;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0 0 thin 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 0;
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-banner--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-banner--absolute {
    position: absolute;
  }

  .v-banner--fixed {
    position: fixed;
  }

  .v-banner--sticky {
    position: sticky;
  }

  .v-banner--rounded {
    border-radius: 6px;
  }

  .v-banner--stacked:not(.v-banner--one-line) {
    grid-template-areas: "prepend content" ". actions";
  }

  .v-banner--stacked .v-banner-text {
    padding-inline-end: 36px;
  }

  .v-banner--density-default .v-banner-actions {
    margin-bottom: -8px;
  }

  .v-banner--density-default.v-banner--one-line {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-banner--density-default.v-banner--one-line .v-banner-actions {
    margin-bottom: 0;
  }

  .v-banner--density-default.v-banner--one-line {
    padding-top: 10px;
  }

  .v-banner--density-default.v-banner--two-line {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .v-banner--density-default.v-banner--three-line {
    padding-top: 24px;
    padding-bottom: 16px;
  }

  .v-banner--density-default:not(.v-banner--one-line) .v-banner-actions,
  .v-banner--density-default.v-banner--two-line .v-banner-actions,
  .v-banner--density-default.v-banner--three-line .v-banner-actions {
    margin-top: 20px;
  }

  .v-banner--density-comfortable .v-banner-actions {
    margin-bottom: -4px;
  }

  .v-banner--density-comfortable.v-banner--one-line {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .v-banner--density-comfortable.v-banner--one-line .v-banner-actions {
    margin-bottom: 0;
  }

  .v-banner--density-comfortable.v-banner--two-line {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .v-banner--density-comfortable.v-banner--three-line {
    padding-top: 20px;
    padding-bottom: 12px;
  }

  .v-banner--density-comfortable:not(.v-banner--one-line) .v-banner-actions,
  .v-banner--density-comfortable.v-banner--two-line .v-banner-actions,
  .v-banner--density-comfortable.v-banner--three-line .v-banner-actions {
    margin-top: 16px;
  }

  .v-banner--density-compact .v-banner-actions {
    margin-bottom: 0px;
  }

  .v-banner--density-compact.v-banner--one-line {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .v-banner--density-compact.v-banner--one-line .v-banner-actions {
    margin-bottom: 0;
  }

  .v-banner--density-compact.v-banner--two-line {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-banner--density-compact.v-banner--three-line {
    padding-top: 16px;
    padding-bottom: 8px;
  }

  .v-banner--density-compact:not(.v-banner--one-line) .v-banner-actions,
  .v-banner--density-compact.v-banner--two-line .v-banner-actions,
  .v-banner--density-compact.v-banner--three-line .v-banner-actions {
    margin-top: 12px;
  }

  .v-banner--sticky {
    top: 0;
  }

  .v-banner__content {
    grid-area: content;
  }

  .v-banner__prepend {
    align-self: flex-start;
    grid-area: prepend;
    margin-inline-end: 24px;
  }

  .v-banner-actions {
    align-self: flex-end;
    display: flex;
    flex: 0 1;
    grid-area: actions;
    justify-content: flex-end;
  }

  .v-banner--two-line .v-banner-actions,
  .v-banner--three-line .v-banner-actions {
    margin-top: 20px;
  }

  .v-banner-text {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    padding-inline-end: 90px;
    overflow: hidden;
  }

  .v-banner--one-line .v-banner-text {
    -webkit-line-clamp: 1;
  }

  .v-banner--two-line .v-banner-text {
    -webkit-line-clamp: 2;
  }

  .v-banner--three-line .v-banner-text {
    -webkit-line-clamp: 3;
  }

  .v-banner--two-line .v-banner-text,
  .v-banner--three-line .v-banner-text {
    align-self: flex-start;
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VBottomNavigation/VBottomNavigation.sass?v=3687d9c4">
  
  .v-bottom-navigation {
    display: flex;
    max-width: 100%;
    overflow: hidden;
    position: absolute;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    border-radius: 0;
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-bottom-navigation--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-bottom-navigation--active {
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-bottom-navigation__content {
    display: flex;
    flex: none;
    font-size: 0.75rem;
    justify-content: center;
    transition: transform, color 0.2s, 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
  }

  .v-bottom-navigation .v-bottom-navigation__content>.v-btn {
    font-size: inherit;
    height: 100%;
    max-width: 168px;
    min-width: 80px;
    text-transform: none;
    transition: inherit;
    width: auto;
    border-radius: 0;
  }

  .v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__content,
  .v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__icon {
    transition: inherit;
  }

  .v-bottom-navigation .v-bottom-navigation__content>.v-btn .v-btn__icon {
    font-size: 1.5rem;
  }

  .v-bottom-navigation--grow .v-bottom-navigation__content>.v-btn {
    flex-grow: 1;
  }

  .v-bottom-navigation--shift .v-bottom-navigation__content .v-btn:not(.v-btn--selected) .v-btn__content>span {
    opacity: 0;
  }

  .v-bottom-navigation--shift .v-bottom-navigation__content .v-btn:not(.v-btn--selected) .v-btn__content {
    transform: translateY(0.5rem);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VBreadcrumbs/VBreadcrumbs.sass?v=3687d9c4">
  
  .v-breadcrumbs {
    display: flex;
    align-items: center;
    line-height: 1.375rem;
    padding: 16px 12px;
  }

  .v-breadcrumbs--rounded {
    border-radius: 6px;
  }

  .v-breadcrumbs--density-default {
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .v-breadcrumbs--density-comfortable {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .v-breadcrumbs--density-compact {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .v-breadcrumbs__prepend {
    align-items: center;
    display: inline-flex;
  }

  .v-breadcrumbs-item {
    align-items: center;
    color: inherit;
    display: inline-flex;
    padding: 0 4px;
    text-decoration: none;
    vertical-align: middle;
  }

  .v-breadcrumbs-item--disabled {
    opacity: var(--v-disabled-opacity);
    pointer-events: none;
  }

  .v-breadcrumbs-item--link:hover {
    text-decoration: underline;
  }

  .v-breadcrumbs-item .v-icon {
    font-size: 1rem;
    margin-inline-start: -4px;
    margin-inline-end: 2px;
  }

  .v-breadcrumbs-divider {
    display: inline-block;
    padding: 0 8px;
    vertical-align: middle;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCard/VCard.sass?v=3687d9c4">
  
  .v-card {
    display: block;
    overflow: hidden;
    overflow-wrap: break-word;
    position: relative;
    padding: 0;
    text-decoration: none;
    transition-duration: 0.28s;
    transition-property: box-shadow, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    border-radius: 6px;
  }

  .v-card--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-card--absolute {
    position: absolute;
  }

  .v-card--fixed {
    position: fixed;
  }

  .v-card:hover>.v-card__overlay {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-card:focus-visible>.v-card__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .v-card:focus>.v-card__overlay {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-card--active>.v-card__overlay,
  .v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  .v-card--active:hover>.v-card__overlay,
  .v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  .v-card--active:focus-visible>.v-card__overlay,
  .v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .v-card--active:focus>.v-card__overlay,
    .v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay {
      opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-card--variant-plain,
  .v-card--variant-outlined,
  .v-card--variant-text,
  .v-card--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-card--variant-plain {
    opacity: 0.62;
  }

  .v-card--variant-plain:focus,
  .v-card--variant-plain:hover {
    opacity: 1;
  }

  .v-card--variant-plain .v-card__overlay {
    display: none;
  }

  .v-card--variant-elevated,
  .v-card--variant-flat {
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  }

  .v-card--variant-elevated {
    box-shadow: 0 3px 9px 1px var(--v-shadow-key-umbra-opacity), 0 9px 8px var(--v-shadow-key-penumbra-opacity), 0 1px 6px 4px var(--v-shadow-key-ambient-opacity);
  }

  .v-card--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-card--variant-outlined {
    border: thin solid currentColor;
  }

  .v-card--variant-text .v-card__overlay {
    background: currentColor;
  }

  .v-card--variant-tonal .v-card__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-card--disabled {
    pointer-events: none;
    user-select: none;
  }

  .v-card--disabled> :not(.v-card__loader) {
    opacity: 0.6;
  }

  .v-card--flat {
    box-shadow: none;
  }

  .v-card--hover {
    cursor: pointer;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-card--hover::before,
  .v-card--hover::after {
    border-radius: inherit;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
  }

  .v-card--hover::before {
    opacity: 1;
    z-index: -1;
    box-shadow: 0 3px 9px 1px var(--v-shadow-key-umbra-opacity), 0 9px 8px var(--v-shadow-key-penumbra-opacity), 0 1px 6px 4px var(--v-shadow-key-ambient-opacity);
  }

  .v-card--hover::after {
    z-index: 1;
    opacity: 0;
    box-shadow: 0 5px 11px 3px var(--v-shadow-key-umbra-opacity), 0 11px 8px 1px var(--v-shadow-key-penumbra-opacity), 0 3px 8px 4px var(--v-shadow-key-ambient-opacity);
  }

  .v-card--hover:hover::after {
    opacity: 1;
  }

  .v-card--hover:hover::before {
    opacity: 0;
  }

  .v-card--link {
    cursor: pointer;
  }

  .v-card-actions {
    align-items: center;
    display: flex;
    flex: none;
    min-height: unset;
    padding: 0 12px 12px;
  }

  .v-card-item {
    align-items: center;
    display: grid;
    flex: none;
    grid-template-areas: "prepend content append";
    grid-template-columns: max-content auto max-content;
    padding: 24px;
  }

  .v-card-item+.v-card-text {
    padding-top: 0;
  }

  .v-card-item__prepend {
    grid-area: prepend;
    padding-inline-end: 1rem;
  }

  .v-card-item__append {
    grid-area: append;
    padding-inline-start: 1rem;
  }

  .v-card-item__content {
    align-self: center;
    grid-area: content;
    overflow: hidden;
  }

  .v-card-title {
    display: block;
    flex: none;
    font-size: 1.25rem;
    font-weight: 500;
    hyphens: auto;
    letter-spacing: 0.0125em;
    min-width: 0;
    overflow-wrap: normal;
    overflow: hidden;
    padding: 0.5rem 1rem;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
    word-break: normal;
    word-wrap: break-word;
  }

  .v-card .v-card-title {
    line-height: 1.65rem;
  }

  .v-card--density-comfortable .v-card-title {
    line-height: 1.75rem;
  }

  .v-card--density-compact .v-card-title {
    line-height: 1.55rem;
  }

  .v-card-item .v-card-title {
    padding: 0;
  }

  .v-card-title+.v-card-text,
  .v-card-title+.v-card-actions {
    padding-top: 0;
  }

  .v-card-subtitle {
    display: block;
    flex: none;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    opacity: 1;
    overflow: hidden;
    padding: 0 1rem;
    text-overflow: ellipsis;
    text-transform: none;
    white-space: nowrap;
  }

  .v-card .v-card-subtitle {
    line-height: 1.5;
  }

  .v-card--density-comfortable .v-card-subtitle {
    line-height: 1.125rem;
  }

  .v-card--density-compact .v-card-subtitle {
    line-height: 1rem;
  }

  .v-card-item .v-card-subtitle {
    padding: 0 0 0.25rem;
  }

  .v-card-text {
    flex: 1 1 auto;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    padding: 24px;
    text-transform: none;
  }

  .v-card .v-card-text {
    line-height: 1.5;
  }

  .v-card--density-comfortable .v-card-text {
    line-height: 1.2rem;
  }

  .v-card--density-compact .v-card-text {
    line-height: 1.15rem;
  }

  .v-card__image {
    display: flex;
    height: 100%;
    flex: 1 1 auto;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .v-card__content {
    border-radius: inherit;
    overflow: hidden;
    position: relative;
  }

  .v-card__loader {
    bottom: auto;
    top: 0;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 1;
  }

  .v-card__overlay {
    background-color: currentColor;
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCarousel/VCarousel.sass?v=3687d9c4">
  
  .v-carousel {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .v-carousel__controls {
    align-items: center;
    background: rgba(var(--v-theme-surface-variant), 0.3);
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: center;
    list-style-type: none;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .v-carousel__controls>.v-item-group {
    flex: 0 1 auto;
  }

  .v-carousel__controls__item {
    margin: 0 8px;
  }

  .v-carousel__controls__item .v-icon {
    opacity: 0.5;
  }

  .v-carousel__controls__item--active .v-icon {
    opacity: 1;
    vertical-align: middle;
  }

  .v-carousel__controls__item:hover {
    background: none;
  }

  .v-carousel__controls__item:hover .v-icon {
    opacity: 0.8;
  }

  .v-carousel__progress {
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .v-carousel-item {
    display: block;
    height: inherit;
    text-decoration: none;
  }

  .v-carousel-item>.v-img {
    height: inherit;
  }

  .v-carousel--hide-delimiter-background .v-carousel__controls {
    background: transparent;
  }

  .v-carousel--vertical-delimiters .v-carousel__controls {
    flex-direction: column;
    height: 100% !important;
    width: 50px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VWindow/VWindow.sass?v=3687d9c4">
  
  .v-window {
    overflow: hidden;
  }

  .v-window__container {
    display: flex;
    flex-direction: column;
    height: inherit;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .v-window__controls {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    pointer-events: none;
  }

  .v-window__controls * {
    pointer-events: auto;
  }

  .v-window--show-arrows-on-hover {
    overflow: hidden;
  }

  .v-window--show-arrows-on-hover .v-window__left {
    transform: translateX(-200%);
  }

  .v-window--show-arrows-on-hover .v-window__right {
    transform: translateX(200%);
  }

  .v-window--show-arrows-on-hover:hover .v-window__left,
  .v-window--show-arrows-on-hover:hover .v-window__right {
    transform: translateX(0);
  }

  .v-window-x-transition-enter-active,
  .v-window-x-transition-leave-active,
  .v-window-x-reverse-transition-enter-active,
  .v-window-x-reverse-transition-leave-active,
  .v-window-y-transition-enter-active,
  .v-window-y-transition-leave-active,
  .v-window-y-reverse-transition-enter-active,
  .v-window-y-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .v-window-x-transition-leave-from,
  .v-window-x-transition-leave-to,
  .v-window-x-reverse-transition-leave-from,
  .v-window-x-reverse-transition-leave-to,
  .v-window-y-transition-leave-from,
  .v-window-y-transition-leave-to,
  .v-window-y-reverse-transition-leave-from,
  .v-window-y-reverse-transition-leave-to {
    position: absolute !important;
    top: 0;
    width: 100%;
  }

  .v-window-x-transition-enter-from {
    transform: translateX(100%);
  }

  .v-window-x-transition-leave-to {
    transform: translateX(-100%);
  }

  .v-window-x-reverse-transition-enter-from {
    transform: translateX(-100%);
  }

  .v-window-x-reverse-transition-leave-to {
    transform: translateX(100%);
  }

  .v-window-y-transition-enter-from {
    transform: translateY(100%);
  }

  .v-window-y-transition-leave-to {
    transform: translateY(-100%);
  }

  .v-window-y-reverse-transition-enter-from {
    transform: translateY(-100%);
  }

  .v-window-y-reverse-transition-leave-to {
    transform: translateY(100%);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCode/VCode.sass?v=3687d9c4">
  
  .v-code {
    background-color: rgb(var(--v-theme-code));
    color: rgb(var(--v-theme-on-code));
    border-radius: 4px;
    line-height: 1.8;
    font-size: 0.9em;
    font-weight: normal;
    padding: 0.2em 0.4em;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VColorPicker/VColorPicker.sass?v=3687d9c4">
  
  .v-color-picker {
    align-self: flex-start;
    contain: content;
  }

  .v-color-picker.v-sheet {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
    border-radius: 4px;
  }

  .v-color-picker__controls {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .v-color-picker--flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-color-picker--flat .v-color-picker__track:not(.v-input--is-disabled) .v-slider__thumb {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VColorPicker/VColorPickerCanvas.sass?v=3687d9c4">
  
  .v-color-picker-canvas {
    position: relative;
    overflow: hidden;
    contain: strict;
  }

  .v-color-picker-canvas__dot {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 1.5px rgb(255, 255, 255), inset 0px 0px 1px 1.5px rgba(0, 0, 0, 0.3);
  }

  .v-color-picker-canvas__dot--disabled {
    box-shadow: 0px 0px 0px 1.5px rgba(255, 255, 255, 0.7), inset 0px 0px 1px 1.5px rgba(0, 0, 0, 0.3);
  }

  .v-color-picker-canvas:hover .v-color-picker-canvas__dot {
    will-change: transform;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VColorPicker/VColorPickerEdit.sass?v=3687d9c4">
  
  .v-color-picker-edit {
    display: flex;
  }

  .v-color-picker-edit__input {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .v-color-picker-edit__input:not(:last-child).v-locale--is-ltr,
  .v-locale--is-ltr .v-color-picker-edit__input:not(:last-child) {
    margin-right: 8px;
  }

  .v-color-picker-edit__input:not(:last-child).v-locale--is-rtl,
  .v-locale--is-rtl .v-color-picker-edit__input:not(:last-child) {
    margin-left: 8px;
  }

  .v-color-picker-edit__input input {
    border-radius: 4px;
    margin-bottom: 8px;
    min-width: 0;
    outline: none;
    text-align: center;
    width: 100%;
    height: 32px;
    background: rgba(var(--v-theme-surface-variant), 0.2);
    color: rgba(var(--v-theme-on-surface));
  }

  .v-color-picker-edit__input span {
    font-size: 0.75rem;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VColorPicker/VColorPickerPreview.sass?v=3687d9c4">
  
  .v-color-picker-preview__alpha .v-slider-track__background {
    background-color: transparent !important;
  }

  .v-color-picker-preview__alpha .v-slider-track__background.v-locale--is-ltr,
  .v-locale--is-ltr .v-color-picker-preview__alpha .v-slider-track__background {
    background-image: linear-gradient(to right, transparent, var(--v-color-picker-color-hsv));
  }

  .v-color-picker-preview__alpha .v-slider-track__background.v-locale--is-rtl,
  .v-locale--is-rtl .v-color-picker-preview__alpha .v-slider-track__background {
    background-image: linear-gradient(to left, transparent, var(--v-color-picker-color-hsv));
  }

  .v-color-picker-preview__alpha .v-slider-track__background::after {
    content: "";
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAACRJREFUKFNjPHTo0H8GJGBnZ8eIzGekgwJk+0BsdCtRHEQbBQBbbh0dIGKknQAAAABJRU5ErkJggg==) repeat;
    border-radius: inherit;
  }

  .v-color-picker-preview__sliders {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  .v-color-picker-preview__dot {
    position: relative;
    height: 30px;
    width: 30px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAACRJREFUKFNjPHTo0H8GJGBnZ8eIzGekgwJk+0BsdCtRHEQbBQBbbh0dIGKknQAAAABJRU5ErkJggg==) repeat;
    border-radius: 50%;
    overflow: hidden;
  }

  .v-color-picker-preview__dot.v-locale--is-ltr,
  .v-locale--is-ltr .v-color-picker-preview__dot {
    margin-right: 24px;
  }

  .v-color-picker-preview__dot.v-locale--is-rtl,
  .v-locale--is-rtl .v-color-picker-preview__dot {
    margin-left: 24px;
  }

  .v-color-picker-preview__dot>div {
    width: 100%;
    height: 100%;
  }

  .v-color-picker-preview__hue:not(.v-input--is-disabled) .v-slider-track__background.v-locale--is-ltr,
  .v-locale--is-ltr .v-color-picker-preview__hue:not(.v-input--is-disabled) .v-slider-track__background {
    background: linear-gradient(to right, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  }

  .v-color-picker-preview__hue:not(.v-input--is-disabled) .v-slider-track__background.v-locale--is-rtl,
  .v-locale--is-rtl .v-color-picker-preview__hue:not(.v-input--is-disabled) .v-slider-track__background {
    background: linear-gradient(to left, #F00 0%, #FF0 16.66%, #0F0 33.33%, #0FF 50%, #00F 66.66%, #F0F 83.33%, #F00 100%);
  }

  .v-color-picker-preview__track {
    position: relative;
    width: 100%;
    margin: 0 !important;
  }

  .v-color-picker-preview__track .v-slider-track__fill {
    display: none;
  }

  .v-color-picker-preview {
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSlider/VSlider.sass?v=3687d9c4">
  
  .v-slider .v-slider__container input {
    cursor: default;
    padding: 0;
    width: 100%;
    display: none;
  }

  .v-slider .v-input__append,
  .v-slider .v-input__prepend {
    padding: 0;
  }

  .v-slider__container {
    position: relative;
    min-height: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .v-input--disabled .v-slider__container {
    opacity: var(--v-disabled-opacity);
  }

  .v-input--error:not(.v-input--disabled) .v-slider__container {
    color: rgb(var(--v-theme-error));
  }

  .v-slider.v-input--horizontal {
    align-items: center;
    margin-inline-start: 8px;
    margin-inline-end: 8px;
  }

  .v-slider.v-input--horizontal .v-input__control {
    min-height: 32px;
    display: flex;
    align-items: center;
  }

  .v-slider.v-input--vertical {
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .v-slider.v-input--vertical .v-input__control {
    min-height: 300px;
  }

  .v-slider.v-input--disabled {
    pointer-events: none;
  }

  .v-slider--has-labels .v-input__control {
    margin-bottom: 4px;
  }

  .v-slider__label {
    margin-inline-end: 12px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSlider/VSliderThumb.sass?v=3687d9c4">
  
  .v-slider-thumb {
    touch-action: none;
    color: rgb(var(--v-theme-surface-variant));
  }

  .v-input--error:not(.v-input--disabled) .v-slider-thumb {
    color: inherit;
  }

  .v-slider-thumb__label {
    background: rgba(var(--v-theme-surface-variant), 0.7);
    color: rgb(var(--v-theme-on-surface-variant));
  }

  .v-slider-thumb__label::before {
    color: rgba(var(--v-theme-surface-variant), 0.7);
  }

  .v-slider-thumb {
    outline: none;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }

  .v-slider-thumb__surface {
    cursor: pointer;
    width: var(--v-slider-thumb-size);
    height: var(--v-slider-thumb-size);
    border-radius: 50%;
    user-select: none;
    background-color: currentColor;
  }

  .v-slider-thumb__surface::before {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    content: "";
    color: inherit;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: currentColor;
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }

  .v-slider-thumb__surface::after {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .v-slider-thumb__label-container {
    position: absolute;
    transition: 0.2s cubic-bezier(0.4, 0, 1, 1);
  }

  .v-slider-thumb__label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    min-width: 35px;
    height: 25px;
    border-radius: 4px;
    padding: 6px;
    position: absolute;
    user-select: none;
    transition: 0.2s cubic-bezier(0.4, 0, 1, 1);
  }

  .v-slider-thumb__label::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
  }

  .v-slider-thumb__ripple {
    position: absolute;
    left: calc(var(--v-slider-thumb-size) / -2);
    top: calc(var(--v-slider-thumb-size) / -2);
    width: calc(var(--v-slider-thumb-size) * 2);
    height: calc(var(--v-slider-thumb-size) * 2);
    background: inherit;
  }

  .v-slider.v-input--horizontal .v-slider-thumb {
    top: 50%;
    transform: translateY(-50%);
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label-container {
    left: calc(var(--v-slider-thumb-size) / 2);
    top: 0;
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label {
    bottom: calc(var(--v-slider-thumb-size) / 2);
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-thumb__label {
    transform: translateX(-50%);
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-thumb__label {
    transform: translateX(50%);
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label::before {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid currentColor;
    bottom: -6px;
  }

  .v-slider.v-input--vertical .v-slider-thumb__label-container {
    top: calc(var(--v-slider-thumb-size) / 2);
    right: 0;
  }

  .v-slider.v-input--vertical .v-slider-thumb__label {
    top: -12.5px;
    left: calc(var(--v-slider-thumb-size) / 2);
  }

  .v-slider.v-input--vertical .v-slider-thumb__label::before {
    border-right: 6px solid currentColor;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    left: -6px;
  }

  .v-slider-thumb--focused .v-slider-thumb__surface::before {
    transform: scale(2);
    opacity: var(--v-focus-opacity);
  }

  .v-slider-thumb--pressed {
    transition: none;
  }

  .v-slider-thumb--pressed .v-slider-thumb__surface::before {
    opacity: var(--v-pressed-opacity);
  }

  @media (hover: hover) {
    .v-slider-thumb:hover .v-slider-thumb__surface::before {
      transform: scale(2);
    }

    .v-slider-thumb:hover:not(.v-slider-thumb--focused) .v-slider-thumb__surface::before {
      opacity: var(--v-hover-opacity);
    }
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSlider/VSliderTrack.sass?v=3687d9c4">
  
  .v-slider-track__background {
    background-color: rgb(var(--v-theme-surface-variant));
  }

  .v-slider-track__fill {
    background-color: rgb(var(--v-theme-surface-variant));
  }

  .v-slider-track__tick {
    background-color: rgb(var(--v-theme-surface-variant));
  }

  .v-slider-track__tick--filled {
    background-color: rgb(var(--v-theme-on-surface-variant));
  }

  .v-slider-track {
    border-radius: 6px;
  }

  .v-slider-track__background,
  .v-slider-track__fill {
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    border-radius: inherit;
  }

  .v-slider--pressed .v-slider-track__background,
  .v-slider--pressed .v-slider-track__fill {
    transition: none;
  }

  .v-input--error:not(.v-input--disabled) .v-slider-track__background,
  .v-input--error:not(.v-input--disabled) .v-slider-track__fill {
    background-color: currentColor;
  }

  .v-slider-track__ticks {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .v-slider-track__tick {
    position: absolute;
    opacity: 0;
    transition: 0.2s opacity cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
    width: var(--v-slider-tick-size);
    height: var(--v-slider-tick-size);
    transform: translate(calc(var(--v-slider-tick-size) / -2), calc(var(--v-slider-tick-size) / -2));
  }

  .v-slider-track__tick--first .v-slider-track__tick-label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider-track__tick--first .v-slider-track__tick-label {
    transform: none;
  }

  .v-slider-track__tick--first .v-slider-track__tick-label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider-track__tick--first .v-slider-track__tick-label {
    transform: translateX(100%);
  }

  .v-slider-track__tick--last .v-slider-track__tick-label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider-track__tick--last .v-slider-track__tick-label {
    transform: translateX(-100%);
  }

  .v-slider-track__tick--last .v-slider-track__tick-label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider-track__tick--last .v-slider-track__tick-label {
    transform: none;
  }

  .v-slider-track__tick-label {
    position: absolute;
    user-select: none;
    white-space: nowrap;
  }

  .v-slider.v-input--horizontal .v-slider-track {
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(var(--v-slider-track-size) + 2px);
    touch-action: pan-y;
  }

  .v-slider.v-input--horizontal .v-slider-track__background {
    height: var(--v-slider-track-size);
  }

  .v-slider.v-input--horizontal .v-slider-track__fill {
    height: inherit;
  }

  .v-slider.v-input--horizontal .v-slider-track__tick {
    margin-top: calc(calc(var(--v-slider-track-size) + 2px) / 2);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick {
    transform: translate(calc(var(--v-slider-tick-size) / 2), calc(var(--v-slider-tick-size) / -2));
  }

  .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label {
    margin-top: calc(var(--v-slider-track-size) / 2 + 8px);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label {
    transform: translateX(-50%);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick .v-slider-track__tick-label {
    transform: translateX(50%);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--first {
    margin-inline-start: calc(var(--v-slider-tick-size) + 1px);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label {
    transform: translateX(0%);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick--first .v-slider-track__tick-label {
    transform: translateX(0%);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--last {
    margin-inline-start: calc(100% - var(--v-slider-tick-size) - 1px);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label.v-locale--is-ltr,
  .v-locale--is-ltr .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label {
    transform: translateX(-100%);
  }

  .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--horizontal .v-slider-track__tick--last .v-slider-track__tick-label {
    transform: translateX(100%);
  }

  .v-slider.v-input--vertical .v-slider-track {
    height: 100%;
    display: flex;
    justify-content: center;
    width: calc(var(--v-slider-track-size) + 2px);
    touch-action: pan-x;
  }

  .v-slider.v-input--vertical .v-slider-track__background {
    width: var(--v-slider-track-size);
  }

  .v-slider.v-input--vertical .v-slider-track__fill {
    width: inherit;
  }

  .v-slider.v-input--vertical .v-slider-track__ticks {
    height: 100%;
  }

  .v-slider.v-input--vertical .v-slider-track__tick {
    margin-inline-start: calc(calc(var(--v-slider-track-size) + 2px) / 2);
    transform: translate(calc(var(--v-slider-tick-size) / -2), calc(var(--v-slider-tick-size) / 2));
  }

  .v-slider.v-input--vertical .v-slider-track__tick.v-locale--is-rtl,
  .v-locale--is-rtl .v-slider.v-input--vertical .v-slider-track__tick {
    transform: translate(calc(var(--v-slider-tick-size) / 2), calc(var(--v-slider-tick-size) / 2));
  }

  .v-slider.v-input--vertical .v-slider-track__tick--last {
    bottom: calc(0% + var(--v-slider-tick-size) + 1px);
  }

  .v-slider.v-input--vertical .v-slider-track__tick .v-slider-track__tick-label {
    margin-inline-start: calc(var(--v-slider-track-size) / 2 + 12px);
    transform: translateY(-50%);
  }

  .v-slider-track__ticks--always-show .v-slider-track__tick,
  .v-slider--focused .v-slider-track__tick {
    opacity: 1;
  }

  .v-slider-track__background--opacity {
    opacity: 0.38;
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VColorPicker/VColorPickerSwatches.sass?v=3687d9c4">
  
  .v-color-picker-swatches {
    overflow-y: auto;
  }

  .v-color-picker-swatches>div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px;
  }

  .v-color-picker-swatches__swatch {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .v-color-picker-swatches__color {
    position: relative;
    height: 18px;
    max-height: 18px;
    width: 45px;
    margin: 2px 4px;
    border-radius: 2px;
    user-select: none;
    overflow: hidden;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAACRJREFUKFNjPHTo0H8GJGBnZ8eIzGekgwJk+0BsdCtRHEQbBQBbbh0dIGKknQAAAABJRU5ErkJggg==) repeat;
    cursor: pointer;
  }

  .v-color-picker-swatches__color>div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSheet/VSheet.sass?v=3687d9c4">
  
  .v-sheet {
    display: block;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 0;
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
  }

  .v-sheet--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-sheet--absolute {
    position: absolute;
  }

  .v-sheet--fixed {
    position: fixed;
  }

  .v-sheet--rounded {
    border-radius: 6px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VCombobox/VCombobox.sass?v=3687d9c4">
  
  .v-input--density-default {
    --combobox-chips-margin-bottom: 0px;
  }

  .v-input--density-comfortable {
    --combobox-chips-margin-bottom: 2px;
  }

  .v-input--density-compact {
    --combobox-chips-margin-bottom: 4px;
  }

  .v-combobox .v-field .v-text-field__prefix,
  .v-combobox .v-field .v-text-field__suffix,
  .v-combobox .v-field .v-field__input,
  .v-combobox .v-field.v-field {
    cursor: text;
  }

  .v-combobox .v-field .v-field__input>input {
    align-self: flex-start;
    flex: 1 1;
  }

  .v-combobox .v-field .v-field__append-inner>.v-icon {
    margin-inline-start: 4px;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-combobox .v-field:not(.v-field--focused) input {
    min-width: 0;
  }

  .v-combobox .v-field--dirty .v-combobox__selection {
    margin-inline-end: 2px;
  }

  .v-combobox .v-field--single-line .v-combobox__selection-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-combobox__content {
    overflow: hidden;
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
    border-radius: 4px;
  }

  .v-combobox__mask {
    background: rgb(var(--v-theme-on-surface-variant));
  }

  .v-combobox__selection {
    display: inline-flex;
    letter-spacing: inherit;
    line-height: inherit;
    max-width: 100%;
  }

  .v-combobox--active-menu .v-field__append-inner>.v-icon {
    opacity: var(--v-high-emphasis-opacity);
    transform: rotate(180deg);
  }

  .v-combobox--chips .v-combobox__selection {
    margin-top: 2px;
    margin-bottom: var(--combobox-chips-margin-bottom);
  }

  .v-combobox--chips .v-combobox__selection:first-child {
    margin-inline-start: 0;
  }

  .v-combobox--selecting-index .v-combobox__selection {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-combobox--selecting-index .v-combobox__selection--selected {
    opacity: 1;
  }

  .v-combobox--selecting-index .v-field__input>input {
    caret-color: transparent !important;
  }

  .v-combobox--single.v-text-field input {
    flex: 1 1;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    padding-inline-start: inherit;
    padding-inline-end: inherit;
  }

  .v-combobox--single .v-field--active input {
    transition: none;
  }

  .v-combobox--single .v-field--dirty:not(.v-field--focused) input {
    opacity: 0;
  }

  .v-combobox--single .v-field--focused .v-combobox__selection {
    opacity: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VDialog/VDialog.sass?v=3687d9c4">
  
  .v-dialog {
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  .v-dialog .v-overlay__content {
    max-height: calc(100% - 48px);
    width: calc(100% - 48px);
    max-width: calc(100% - 48px);
    margin: 24px;
    display: flex;
    flex-direction: column;
  }

  .v-dialog .v-overlay__content>.v-card,
  .v-dialog .v-overlay__content>.v-sheet {
    --v-scrollbar-offset: 0px;
    border-radius: 6px;
    overflow-y: auto;
    box-shadow: 0 11px 27px 7px var(--v-shadow-key-umbra-opacity), 0 27px 24px 3px var(--v-shadow-key-penumbra-opacity), 0 9px 24px 7px var(--v-shadow-key-ambient-opacity);
  }

  .v-dialog .v-overlay__content>.v-card {
    display: flex;
    flex-direction: column;
  }

  .v-dialog .v-overlay__content>.v-card>.v-card-item {
    padding: 20px 24px 0;
  }

  .v-dialog .v-overlay__content>.v-card>.v-card-item+.v-card-text {
    padding-top: 20px;
  }

  .v-dialog .v-overlay__content>.v-card>.v-card-text {
    font-size: inherit;
    letter-spacing: 0.03125em;
    line-height: inherit;
    padding: 20px 24px 20px;
  }

  .v-dialog--fullscreen {
    --v-scrollbar-offset: 0px;
  }

  .v-dialog--fullscreen .v-overlay__content {
    border-radius: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
    top: 0;
    left: 0;
  }

  .v-dialog--fullscreen .v-overlay__content>.v-card,
  .v-dialog--fullscreen .v-overlay__content>.v-sheet {
    min-height: 100%;
    min-width: 100%;
    border-radius: 0;
  }

  .v-dialog--scrollable .v-overlay__content,
  .v-dialog--scrollable .v-overlay__content>form {
    display: flex;
  }

  .v-dialog--scrollable .v-overlay__content>.v-card,
  .v-dialog--scrollable .v-overlay__content>form>.v-card {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    max-height: 100%;
    max-width: 100%;
  }

  .v-dialog--scrollable .v-overlay__content>.v-card>.v-card-text,
  .v-dialog--scrollable .v-overlay__content>form>.v-card>.v-card-text {
    backface-visibility: hidden;
    overflow-y: auto;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VExpansionPanel/VExpansionPanel.sass?v=3687d9c4">
  
  .v-expansion-panel {
    background-color: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  }

  .v-expansion-panel:not(:first-child)::after {
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-expansion-panel--disabled .v-expansion-panel-title {
    color: rgba(var(--v-theme-on-surface), 0.26);
  }

  .v-expansion-panel--disabled .v-expansion-panel-title .v-expansion-panel-title__overlay {
    opacity: 0.4615384615;
  }

  .v-expansion-panels {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .v-expansion-panels:not(.v-expansion-panels--variant-accordion)> :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-expansion-panels:not(.v-expansion-panels--variant-accordion)> :not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .v-expansion-panels:not(.v-expansion-panels--variant-accordion)> :first-child:not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active) {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-expansion-panels:not(.v-expansion-panels--variant-accordion)> :last-child:not(:first-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active) {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .v-expansion-panels--variant-accordion> :first-child {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-expansion-panels--variant-accordion> :last-child {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .v-expansion-panels--variant-accordion> :last-child .v-expansion-panel-title--active {
    border-bottom-left-radius: initial;
    border-bottom-right-radius: initial;
  }

  .v-expansion-panels--variant-accordion> :not(:first-child):not(:last-child) {
    border-radius: 0 !important;
  }

  .v-expansion-panels--variant-accordion .v-expansion-panel-title__overlay {
    transition: 0.3s border-radius cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-expansion-panel {
    flex: 1 0 100%;
    max-width: 100%;
    position: relative;
    transition: 0.3s all cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: margin-top, border-radius, border, max-width;
    border-radius: 6px;
  }

  .v-expansion-panel:not(:first-child)::after {
    border-top-style: solid;
    border-top-width: thin;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.3s opacity cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-expansion-panel--disabled .v-expansion-panel-title {
    pointer-events: none;
  }

  .v-expansion-panel--active:not(:first-child),
  .v-expansion-panel--active+.v-expansion-panel {
    margin-top: 16px;
  }

  .v-expansion-panel--active:not(:first-child)::after,
  .v-expansion-panel--active+.v-expansion-panel::after {
    opacity: 0;
  }

  .v-expansion-panel--active>.v-expansion-panel-title {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    min-height: 47px;
  }

  .v-expansion-panel__shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
    border-radius: inherit;
    z-index: -1;
  }

  .v-expansion-panel-title {
    align-items: center;
    text-align: start;
    border-radius: inherit;
    display: flex;
    font-size: 1rem;
    line-height: 1;
    min-height: 47px;
    outline: none;
    padding: 16px 18px;
    position: relative;
    transition: 0.3s min-height cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    justify-content: space-between;
  }

  .v-expansion-panel-title:hover>.v-expansion-panel-title__overlay {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .v-expansion-panel-title:focus-visible>.v-expansion-panel-title__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .v-expansion-panel-title:focus>.v-expansion-panel-title__overlay {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-expansion-panel-title--active>.v-expansion-panel-title__overlay,
  .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true]>.v-expansion-panel-title__overlay {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  .v-expansion-panel-title--active:hover>.v-expansion-panel-title__overlay,
  .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true]:hover>.v-expansion-panel-title__overlay {
    opacity: calc(0.16 * var(--v-theme-overlay-multiplier));
  }

  .v-expansion-panel-title--active:focus-visible>.v-expansion-panel-title__overlay,
  .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-expansion-panel-title__overlay {
    opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .v-expansion-panel-title--active:focus>.v-expansion-panel-title__overlay,
    .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true]:focus>.v-expansion-panel-title__overlay {
      opacity: calc(0.24 * var(--v-theme-overlay-multiplier));
    }
  }

  .v-expansion-panel-title--active::before {
    opacity: 0.12;
  }

  .v-expansion-panel-title__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
  }

  .v-expansion-panel-title__icon {
    display: inline-flex;
    margin-bottom: -4px;
    margin-top: -4px;
    user-select: none;
    margin-inline-start: auto;
  }

  .v-expansion-panel-text {
    display: flex;
  }

  .v-expansion-panel-text__wrapper {
    padding: 0 18px 12px;
    flex: 1 1 auto;
    max-width: 100%;
  }

  .v-expansion-panels--variant-accordion>.v-expansion-panel {
    margin-top: 0;
  }

  .v-expansion-panels--variant-accordion>.v-expansion-panel::after {
    opacity: 1;
  }

  .v-expansion-panels--variant-popout>.v-expansion-panel {
    max-width: calc(100% - 32px);
  }

  .v-expansion-panels--variant-popout>.v-expansion-panel--active {
    max-width: calc(100% + 16px);
  }

  .v-expansion-panels--variant-inset>.v-expansion-panel {
    max-width: 100%;
  }

  .v-expansion-panels--variant-inset>.v-expansion-panel--active {
    max-width: calc(100% - 32px);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VFileInput/VFileInput.sass?v=3687d9c4">
  
  .v-input--density-default {
    --file-input-chips-margin-bottom: 0px;
  }

  .v-input--density-comfortable {
    --file-input-chips-margin-bottom: 2px;
  }

  .v-input--density-compact {
    --file-input-chips-margin-bottom: 4px;
  }

  .v-file-input input[type=file] {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .v-file-input .v-chip {
    margin-top: 2px;
    margin-bottom: var(--file-input-chips-margin-bottom);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VFooter/VFooter.sass?v=3687d9c4">
  
  .v-footer {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    padding: 8px 16px;
    position: relative;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    border-radius: 0;
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-footer--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-footer--absolute {
    position: absolute;
  }

  .v-footer--fixed {
    position: fixed;
  }

  .v-footer--rounded {
    border-radius: 6px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VGrid/VGrid.sass?v=3687d9c4">
  
  .v-container {
    width: 100%;
    padding: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 960px) {
    .v-container {
      max-width: 900px;
    }
  }

  @media (min-width: 1280px) {
    .v-container {
      max-width: 1200px;
    }
  }

  @media (min-width: 1920px) {
    .v-container {
      max-width: 1800px;
    }
  }

  @media (min-width: 2560px) {
    .v-container {
      max-width: 2400px;
    }
  }

  .v-container--fluid {
    max-width: 100%;
  }

  .v-row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: -12px;
  }

  .v-row+.row {
    margin-top: 12px;
  }

  .v-row+.row--dense {
    margin-top: 4px;
  }

  .v-row--dense {
    margin: -4px;
  }

  .v-row--dense>.v-col,
  .v-row--dense>[class*=v-col-] {
    padding: 4px;
  }

  .v-row.v-row--no-gutters {
    margin: 0;
  }

  .v-row.v-row--no-gutters>.v-col,
  .v-row.v-row--no-gutters>[class*=v-col-] {
    padding: 0;
  }

  .v-col-xxl,
  .v-col-xxl-auto,
  .v-col-xxl-12,
  .v-col-xxl-11,
  .v-col-xxl-10,
  .v-col-xxl-9,
  .v-col-xxl-8,
  .v-col-xxl-7,
  .v-col-xxl-6,
  .v-col-xxl-5,
  .v-col-xxl-4,
  .v-col-xxl-3,
  .v-col-xxl-2,
  .v-col-xxl-1,
  .v-col-xl,
  .v-col-xl-auto,
  .v-col-xl-12,
  .v-col-xl-11,
  .v-col-xl-10,
  .v-col-xl-9,
  .v-col-xl-8,
  .v-col-xl-7,
  .v-col-xl-6,
  .v-col-xl-5,
  .v-col-xl-4,
  .v-col-xl-3,
  .v-col-xl-2,
  .v-col-xl-1,
  .v-col-lg,
  .v-col-lg-auto,
  .v-col-lg-12,
  .v-col-lg-11,
  .v-col-lg-10,
  .v-col-lg-9,
  .v-col-lg-8,
  .v-col-lg-7,
  .v-col-lg-6,
  .v-col-lg-5,
  .v-col-lg-4,
  .v-col-lg-3,
  .v-col-lg-2,
  .v-col-lg-1,
  .v-col-md,
  .v-col-md-auto,
  .v-col-md-12,
  .v-col-md-11,
  .v-col-md-10,
  .v-col-md-9,
  .v-col-md-8,
  .v-col-md-7,
  .v-col-md-6,
  .v-col-md-5,
  .v-col-md-4,
  .v-col-md-3,
  .v-col-md-2,
  .v-col-md-1,
  .v-col-sm,
  .v-col-sm-auto,
  .v-col-sm-12,
  .v-col-sm-11,
  .v-col-sm-10,
  .v-col-sm-9,
  .v-col-sm-8,
  .v-col-sm-7,
  .v-col-sm-6,
  .v-col-sm-5,
  .v-col-sm-4,
  .v-col-sm-3,
  .v-col-sm-2,
  .v-col-sm-1,
  .v-col,
  .v-col-auto,
  .v-col-12,
  .v-col-11,
  .v-col-10,
  .v-col-9,
  .v-col-8,
  .v-col-7,
  .v-col-6,
  .v-col-5,
  .v-col-4,
  .v-col-3,
  .v-col-2,
  .v-col-1 {
    width: 100%;
    padding: 12px;
  }

  .v-col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .v-col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  .v-col-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%;
  }

  .v-col-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%;
  }

  .v-col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .v-col-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
  }

  .v-col-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .v-col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .v-col-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .v-col-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%;
  }

  .v-col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .v-col-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%;
  }

  .v-col-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%;
  }

  .v-col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .offset-1.v-locale--is-ltr,
  .v-locale--is-ltr .offset-1 {
    margin-left: 8.3333333333%;
  }

  .offset-1.v-locale--is-rtl,
  .v-locale--is-rtl .offset-1 {
    margin-right: 8.3333333333%;
  }

  .offset-2.v-locale--is-ltr,
  .v-locale--is-ltr .offset-2 {
    margin-left: 16.6666666667%;
  }

  .offset-2.v-locale--is-rtl,
  .v-locale--is-rtl .offset-2 {
    margin-right: 16.6666666667%;
  }

  .offset-3.v-locale--is-ltr,
  .v-locale--is-ltr .offset-3 {
    margin-left: 25%;
  }

  .offset-3.v-locale--is-rtl,
  .v-locale--is-rtl .offset-3 {
    margin-right: 25%;
  }

  .offset-4.v-locale--is-ltr,
  .v-locale--is-ltr .offset-4 {
    margin-left: 33.3333333333%;
  }

  .offset-4.v-locale--is-rtl,
  .v-locale--is-rtl .offset-4 {
    margin-right: 33.3333333333%;
  }

  .offset-5.v-locale--is-ltr,
  .v-locale--is-ltr .offset-5 {
    margin-left: 41.6666666667%;
  }

  .offset-5.v-locale--is-rtl,
  .v-locale--is-rtl .offset-5 {
    margin-right: 41.6666666667%;
  }

  .offset-6.v-locale--is-ltr,
  .v-locale--is-ltr .offset-6 {
    margin-left: 50%;
  }

  .offset-6.v-locale--is-rtl,
  .v-locale--is-rtl .offset-6 {
    margin-right: 50%;
  }

  .offset-7.v-locale--is-ltr,
  .v-locale--is-ltr .offset-7 {
    margin-left: 58.3333333333%;
  }

  .offset-7.v-locale--is-rtl,
  .v-locale--is-rtl .offset-7 {
    margin-right: 58.3333333333%;
  }

  .offset-8.v-locale--is-ltr,
  .v-locale--is-ltr .offset-8 {
    margin-left: 66.6666666667%;
  }

  .offset-8.v-locale--is-rtl,
  .v-locale--is-rtl .offset-8 {
    margin-right: 66.6666666667%;
  }

  .offset-9.v-locale--is-ltr,
  .v-locale--is-ltr .offset-9 {
    margin-left: 75%;
  }

  .offset-9.v-locale--is-rtl,
  .v-locale--is-rtl .offset-9 {
    margin-right: 75%;
  }

  .offset-10.v-locale--is-ltr,
  .v-locale--is-ltr .offset-10 {
    margin-left: 83.3333333333%;
  }

  .offset-10.v-locale--is-rtl,
  .v-locale--is-rtl .offset-10 {
    margin-right: 83.3333333333%;
  }

  .offset-11.v-locale--is-ltr,
  .v-locale--is-ltr .offset-11 {
    margin-left: 91.6666666667%;
  }

  .offset-11.v-locale--is-rtl,
  .v-locale--is-rtl .offset-11 {
    margin-right: 91.6666666667%;
  }

  @media (min-width: 600px) {
    .v-col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .v-col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .v-col-sm-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .v-col-sm-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .v-col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .v-col-sm-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .v-col-sm-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .v-col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .v-col-sm-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .v-col-sm-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .v-col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .v-col-sm-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .v-col-sm-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .v-col-sm-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .offset-sm-0.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-0 {
      margin-left: 0;
    }

    .offset-sm-0.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-0 {
      margin-right: 0;
    }

    .offset-sm-1.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-1 {
      margin-left: 8.3333333333%;
    }

    .offset-sm-1.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-1 {
      margin-right: 8.3333333333%;
    }

    .offset-sm-2.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-2 {
      margin-left: 16.6666666667%;
    }

    .offset-sm-2.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-2 {
      margin-right: 16.6666666667%;
    }

    .offset-sm-3.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-3 {
      margin-left: 25%;
    }

    .offset-sm-3.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-3 {
      margin-right: 25%;
    }

    .offset-sm-4.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-4 {
      margin-left: 33.3333333333%;
    }

    .offset-sm-4.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-4 {
      margin-right: 33.3333333333%;
    }

    .offset-sm-5.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-5 {
      margin-left: 41.6666666667%;
    }

    .offset-sm-5.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-5 {
      margin-right: 41.6666666667%;
    }

    .offset-sm-6.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-6 {
      margin-left: 50%;
    }

    .offset-sm-6.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-6 {
      margin-right: 50%;
    }

    .offset-sm-7.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-7 {
      margin-left: 58.3333333333%;
    }

    .offset-sm-7.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-7 {
      margin-right: 58.3333333333%;
    }

    .offset-sm-8.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-8 {
      margin-left: 66.6666666667%;
    }

    .offset-sm-8.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-8 {
      margin-right: 66.6666666667%;
    }

    .offset-sm-9.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-9 {
      margin-left: 75%;
    }

    .offset-sm-9.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-9 {
      margin-right: 75%;
    }

    .offset-sm-10.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-10 {
      margin-left: 83.3333333333%;
    }

    .offset-sm-10.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-10 {
      margin-right: 83.3333333333%;
    }

    .offset-sm-11.v-locale--is-ltr,
    .v-locale--is-ltr .offset-sm-11 {
      margin-left: 91.6666666667%;
    }

    .offset-sm-11.v-locale--is-rtl,
    .v-locale--is-rtl .offset-sm-11 {
      margin-right: 91.6666666667%;
    }
  }

  @media (min-width: 960px) {
    .v-col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .v-col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .v-col-md-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .v-col-md-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .v-col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .v-col-md-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .v-col-md-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .v-col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .v-col-md-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .v-col-md-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .v-col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .v-col-md-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .v-col-md-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .v-col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .offset-md-0.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-0 {
      margin-left: 0;
    }

    .offset-md-0.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-0 {
      margin-right: 0;
    }

    .offset-md-1.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-1 {
      margin-left: 8.3333333333%;
    }

    .offset-md-1.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-1 {
      margin-right: 8.3333333333%;
    }

    .offset-md-2.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-2 {
      margin-left: 16.6666666667%;
    }

    .offset-md-2.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-2 {
      margin-right: 16.6666666667%;
    }

    .offset-md-3.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-3 {
      margin-left: 25%;
    }

    .offset-md-3.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-3 {
      margin-right: 25%;
    }

    .offset-md-4.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-4 {
      margin-left: 33.3333333333%;
    }

    .offset-md-4.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-4 {
      margin-right: 33.3333333333%;
    }

    .offset-md-5.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-5 {
      margin-left: 41.6666666667%;
    }

    .offset-md-5.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-5 {
      margin-right: 41.6666666667%;
    }

    .offset-md-6.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-6 {
      margin-left: 50%;
    }

    .offset-md-6.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-6 {
      margin-right: 50%;
    }

    .offset-md-7.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-7 {
      margin-left: 58.3333333333%;
    }

    .offset-md-7.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-7 {
      margin-right: 58.3333333333%;
    }

    .offset-md-8.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-8 {
      margin-left: 66.6666666667%;
    }

    .offset-md-8.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-8 {
      margin-right: 66.6666666667%;
    }

    .offset-md-9.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-9 {
      margin-left: 75%;
    }

    .offset-md-9.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-9 {
      margin-right: 75%;
    }

    .offset-md-10.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-10 {
      margin-left: 83.3333333333%;
    }

    .offset-md-10.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-10 {
      margin-right: 83.3333333333%;
    }

    .offset-md-11.v-locale--is-ltr,
    .v-locale--is-ltr .offset-md-11 {
      margin-left: 91.6666666667%;
    }

    .offset-md-11.v-locale--is-rtl,
    .v-locale--is-rtl .offset-md-11 {
      margin-right: 91.6666666667%;
    }
  }

  @media (min-width: 1280px) {
    .v-col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .v-col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .v-col-lg-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .v-col-lg-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .v-col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .v-col-lg-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .v-col-lg-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .v-col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .v-col-lg-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .v-col-lg-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .v-col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .v-col-lg-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .v-col-lg-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .v-col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .offset-lg-0.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-0 {
      margin-left: 0;
    }

    .offset-lg-0.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-0 {
      margin-right: 0;
    }

    .offset-lg-1.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-1 {
      margin-left: 8.3333333333%;
    }

    .offset-lg-1.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-1 {
      margin-right: 8.3333333333%;
    }

    .offset-lg-2.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-2 {
      margin-left: 16.6666666667%;
    }

    .offset-lg-2.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-2 {
      margin-right: 16.6666666667%;
    }

    .offset-lg-3.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-3 {
      margin-left: 25%;
    }

    .offset-lg-3.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-3 {
      margin-right: 25%;
    }

    .offset-lg-4.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-4 {
      margin-left: 33.3333333333%;
    }

    .offset-lg-4.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-4 {
      margin-right: 33.3333333333%;
    }

    .offset-lg-5.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-5 {
      margin-left: 41.6666666667%;
    }

    .offset-lg-5.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-5 {
      margin-right: 41.6666666667%;
    }

    .offset-lg-6.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-6 {
      margin-left: 50%;
    }

    .offset-lg-6.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-6 {
      margin-right: 50%;
    }

    .offset-lg-7.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-7 {
      margin-left: 58.3333333333%;
    }

    .offset-lg-7.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-7 {
      margin-right: 58.3333333333%;
    }

    .offset-lg-8.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-8 {
      margin-left: 66.6666666667%;
    }

    .offset-lg-8.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-8 {
      margin-right: 66.6666666667%;
    }

    .offset-lg-9.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-9 {
      margin-left: 75%;
    }

    .offset-lg-9.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-9 {
      margin-right: 75%;
    }

    .offset-lg-10.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-10 {
      margin-left: 83.3333333333%;
    }

    .offset-lg-10.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-10 {
      margin-right: 83.3333333333%;
    }

    .offset-lg-11.v-locale--is-ltr,
    .v-locale--is-ltr .offset-lg-11 {
      margin-left: 91.6666666667%;
    }

    .offset-lg-11.v-locale--is-rtl,
    .v-locale--is-rtl .offset-lg-11 {
      margin-right: 91.6666666667%;
    }
  }

  @media (min-width: 1920px) {
    .v-col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .v-col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .v-col-xl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .v-col-xl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .v-col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .v-col-xl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .v-col-xl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .v-col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .v-col-xl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .v-col-xl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .v-col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .v-col-xl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .v-col-xl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .v-col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .offset-xl-0.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-0 {
      margin-left: 0;
    }

    .offset-xl-0.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-0 {
      margin-right: 0;
    }

    .offset-xl-1.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-1 {
      margin-left: 8.3333333333%;
    }

    .offset-xl-1.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-1 {
      margin-right: 8.3333333333%;
    }

    .offset-xl-2.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-2 {
      margin-left: 16.6666666667%;
    }

    .offset-xl-2.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-2 {
      margin-right: 16.6666666667%;
    }

    .offset-xl-3.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-3 {
      margin-left: 25%;
    }

    .offset-xl-3.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-3 {
      margin-right: 25%;
    }

    .offset-xl-4.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-4 {
      margin-left: 33.3333333333%;
    }

    .offset-xl-4.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-4 {
      margin-right: 33.3333333333%;
    }

    .offset-xl-5.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-5 {
      margin-left: 41.6666666667%;
    }

    .offset-xl-5.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-5 {
      margin-right: 41.6666666667%;
    }

    .offset-xl-6.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-6 {
      margin-left: 50%;
    }

    .offset-xl-6.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-6 {
      margin-right: 50%;
    }

    .offset-xl-7.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-7 {
      margin-left: 58.3333333333%;
    }

    .offset-xl-7.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-7 {
      margin-right: 58.3333333333%;
    }

    .offset-xl-8.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-8 {
      margin-left: 66.6666666667%;
    }

    .offset-xl-8.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-8 {
      margin-right: 66.6666666667%;
    }

    .offset-xl-9.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-9 {
      margin-left: 75%;
    }

    .offset-xl-9.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-9 {
      margin-right: 75%;
    }

    .offset-xl-10.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-10 {
      margin-left: 83.3333333333%;
    }

    .offset-xl-10.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-10 {
      margin-right: 83.3333333333%;
    }

    .offset-xl-11.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xl-11 {
      margin-left: 91.6666666667%;
    }

    .offset-xl-11.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xl-11 {
      margin-right: 91.6666666667%;
    }
  }

  @media (min-width: 2560px) {
    .v-col-xxl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .v-col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .v-col-xxl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
    }

    .v-col-xxl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
    }

    .v-col-xxl-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .v-col-xxl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }

    .v-col-xxl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
    }

    .v-col-xxl-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .v-col-xxl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
    }

    .v-col-xxl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
    }

    .v-col-xxl-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .v-col-xxl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
    }

    .v-col-xxl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
    }

    .v-col-xxl-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .offset-xxl-0.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-0 {
      margin-left: 0;
    }

    .offset-xxl-0.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-0 {
      margin-right: 0;
    }

    .offset-xxl-1.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-1 {
      margin-left: 8.3333333333%;
    }

    .offset-xxl-1.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-1 {
      margin-right: 8.3333333333%;
    }

    .offset-xxl-2.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-2 {
      margin-left: 16.6666666667%;
    }

    .offset-xxl-2.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-2 {
      margin-right: 16.6666666667%;
    }

    .offset-xxl-3.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-3 {
      margin-left: 25%;
    }

    .offset-xxl-3.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-3 {
      margin-right: 25%;
    }

    .offset-xxl-4.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-4 {
      margin-left: 33.3333333333%;
    }

    .offset-xxl-4.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-4 {
      margin-right: 33.3333333333%;
    }

    .offset-xxl-5.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-5 {
      margin-left: 41.6666666667%;
    }

    .offset-xxl-5.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-5 {
      margin-right: 41.6666666667%;
    }

    .offset-xxl-6.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-6 {
      margin-left: 50%;
    }

    .offset-xxl-6.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-6 {
      margin-right: 50%;
    }

    .offset-xxl-7.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-7 {
      margin-left: 58.3333333333%;
    }

    .offset-xxl-7.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-7 {
      margin-right: 58.3333333333%;
    }

    .offset-xxl-8.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-8 {
      margin-left: 66.6666666667%;
    }

    .offset-xxl-8.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-8 {
      margin-right: 66.6666666667%;
    }

    .offset-xxl-9.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-9 {
      margin-left: 75%;
    }

    .offset-xxl-9.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-9 {
      margin-right: 75%;
    }

    .offset-xxl-10.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-10 {
      margin-left: 83.3333333333%;
    }

    .offset-xxl-10.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-10 {
      margin-right: 83.3333333333%;
    }

    .offset-xxl-11.v-locale--is-ltr,
    .v-locale--is-ltr .offset-xxl-11 {
      margin-left: 91.6666666667%;
    }

    .offset-xxl-11.v-locale--is-rtl,
    .v-locale--is-rtl .offset-xxl-11 {
      margin-right: 91.6666666667%;
    }
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VItemGroup/VItemGroup.sass?v=3687d9c4">
  
  .v-item-group {
    flex: 0 1 auto;
    max-width: 100%;
    position: relative;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VKbd/VKbd.sass?v=3687d9c4">
  
  .v-kbd {
    background: rgb(var(--v-theme-kbd));
    color: rgb(var(--v-theme-on-kbd));
    border-radius: 3px;
    font-size: 85%;
    font-weight: normal;
    padding: 0.2em 0.4rem;
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VLayout/VLayout.sass?v=3687d9c4">
  
  .v-layout {
    --v-scrollbar-offset: 0px;
    display: flex;
    flex: 1 1 auto;
  }

  .v-layout--full-height {
    --v-scrollbar-offset: inherit;
    height: 100%;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VLayout/VLayoutItem.sass?v=3687d9c4">
  
  .v-layout-item {
    position: absolute;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-layout-item--absolute {
    position: absolute;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VLocaleProvider/VLocaleProvider.sass?v=3687d9c4">
  
  .v-locale-provider {
    display: contents;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VMain/VMain.sass?v=3687d9c4">
  
  .v-main {
    flex: 1 0 auto;
    max-width: 100%;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    padding-left: var(--v-layout-left);
    padding-right: var(--v-layout-right);
    padding-top: var(--v-layout-top);
    padding-bottom: var(--v-layout-bottom);
  }

  .v-main__scroller {
    max-width: 100%;
    position: relative;
  }

  .v-main--scrollable {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .v-main--scrollable>.v-main__scroller {
    flex: 1 1 auto;
    overflow-y: auto;
    --v-layout-left: 0px;
    --v-layout-right: 0px;
    --v-layout-top: 0px;
    --v-layout-bottom: 0px;
  }
</style>
<style type="text/css"
  data-vite-dev-id="plugin-vuetify:components/VNavigationDrawer/VNavigationDrawer.sass?v=3687d9c4">
  
  .v-navigation-drawer {
    -webkit-overflow-scrolling: touch;
    background: rgb(var(--v-theme-surface));
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 100%;
    pointer-events: auto;
    transition-duration: 0.2s;
    transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    position: absolute;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    border-style: solid;
    border-width: 0;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-navigation-drawer--border {
    border-width: thin;
    box-shadow: none;
  }

  .v-navigation-drawer--rounded {
    border-radius: 6px;
  }

  .v-navigation-drawer--bottom {
    left: 0;
    border-top-width: thin;
  }

  .v-navigation-drawer--left {
    top: 0;
    left: 0;
    right: auto;
    border-right-width: thin;
  }

  .v-navigation-drawer--right {
    top: 0;
    left: auto;
    right: 0;
    border-left-width: thin;
  }

  .v-navigation-drawer--floating {
    border: none;
  }

  .v-navigation-drawer--temporary {
    box-shadow: 0 8px 19px 5px var(--v-shadow-key-umbra-opacity), 0 19px 16px 2px var(--v-shadow-key-penumbra-opacity), 0 6px 16px 6px var(--v-shadow-key-ambient-opacity);
  }

  .v-navigation-drawer--sticky {
    height: auto;
    transition: box-shadow, transform, visibility, width, height, left, right;
  }

  .v-navigation-drawer .v-list {
    overflow: hidden;
  }

  .v-navigation-drawer__content {
    flex: 0 1 auto;
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .v-navigation-drawer__img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .v-navigation-drawer__img img {
    height: inherit;
    object-fit: cover;
    width: inherit;
  }

  .v-navigation-drawer__scrim {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.2;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VPagination/VPagination.sass?v=3687d9c4">
  
  .v-pagination__list {
    display: inline-flex;
    list-style-type: none;
    justify-content: center;
    width: 100%;
  }

  .v-pagination__item,
  .v-pagination__first,
  .v-pagination__prev,
  .v-pagination__next,
  .v-pagination__last {
    margin: 0.1875rem;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VParallax/VParallax.sass?v=3687d9c4">
  
  .v-parallax {
    position: relative;
    overflow: hidden;
  }

  .v-parallax--active>.v-img__img {
    will-change: transform;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VRadioGroup/VRadioGroup.sass?v=3687d9c4">
  
  .v-radio-group>.v-input__control {
    flex-direction: column;
  }

  .v-radio-group>.v-label {
    margin-inline-start: 12px;
  }

  .v-radio-group>.v-label+.v-selection-control-group {
    margin-top: 16px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VRating/VRating.sass?v=3687d9c4">
  
  .v-rating {
    max-width: 100%;
    display: inline-flex;
    white-space: nowrap;
  }

  .v-rating--readonly {
    pointer-events: none;
  }

  .v-rating__wrapper {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
  }

  .v-rating__wrapper--bottom {
    flex-direction: column-reverse;
  }

  .v-rating__item {
    display: inline-flex;
    position: relative;
  }

  .v-rating__item label {
    cursor: pointer;
  }

  .v-rating__item .v-btn--variant-plain {
    opacity: 1;
  }

  .v-rating__item .v-btn {
    transition-property: transform;
  }

  .v-rating__item .v-btn .v-icon {
    transition: inherit;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .v-rating--hover .v-rating__item:hover:not(.v-rating__item--focused) .v-btn {
    transform: scale(1.25);
  }

  .v-rating__item--focused .v-btn__overlay {
    display: block;
    opacity: var(--v-hover-opacity);
  }

  .v-rating__item--half {
    overflow: hidden;
    position: absolute;
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
    z-index: 1;
  }

  .v-rating__item--half .v-btn__overlay,
  .v-rating__item--half:hover .v-btn__overlay {
    opacity: 0;
  }

  .v-rating__hidden {
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSlideGroup/VSlideGroup.sass?v=3687d9c4">
  
  .v-slide-group {
    display: flex;
    overflow: hidden;
  }

  .v-slide-group__next,
  .v-slide-group__prev {
    align-items: center;
    display: flex;
    flex: 0 1 52px;
    justify-content: center;
    min-width: 52px;
    cursor: pointer;
  }

  .v-slide-group__next--disabled,
  .v-slide-group__prev--disabled {
    pointer-events: none;
    opacity: var(--v-disabled-opacity);
  }

  .v-slide-group__content {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    transition: 0.2s all cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }

  .v-slide-group__content>* {
    white-space: initial;
  }

  .v-slide-group__container {
    contain: content;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
  }

  .v-slide-group--vertical,
  .v-slide-group--vertical .v-slide-group__container,
  .v-slide-group--vertical .v-slide-group__content {
    flex-direction: column;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSnackbar/VSnackbar.sass?v=3687d9c4">
  
  .v-snackbar {
    justify-content: center;
    padding-inline-end: var(--v-scrollbar-offset);
  }

  .v-snackbar:not(.v-snackbar--absolute) {
    height: 100vh;
    position: fixed;
    z-index: 10000;
  }

  .v-snackbar:not(.v-snackbar--centered):not(.v-snackbar--top) {
    align-items: flex-end;
  }

  .v-snackbar__wrapper {
    align-items: center;
    display: flex;
    margin: 8px;
    max-width: 672px;
    min-height: 48px;
    min-width: 344px;
    padding: 0;
    pointer-events: auto;
    position: relative;
    border-radius: 6px;
  }

  .v-snackbar--variant-plain,
  .v-snackbar--variant-outlined,
  .v-snackbar--variant-text,
  .v-snackbar--variant-tonal {
    background: transparent;
    color: inherit;
  }

  .v-snackbar--variant-plain {
    opacity: 0.62;
  }

  .v-snackbar--variant-plain:focus,
  .v-snackbar--variant-plain:hover {
    opacity: 1;
  }

  .v-snackbar--variant-plain .v-snackbar__overlay {
    display: none;
  }

  .v-snackbar--variant-elevated,
  .v-snackbar--variant-flat {
    background: #212121;
    color: rgb(var(--v-theme-on-primary));
  }

  .v-snackbar--variant-elevated {
    box-shadow: 0 3px 9px 1px var(--v-shadow-key-umbra-opacity), 0 9px 8px var(--v-shadow-key-penumbra-opacity), 0 1px 6px 4px var(--v-shadow-key-ambient-opacity);
  }

  .v-snackbar--variant-flat {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-snackbar--variant-outlined {
    border: thin solid currentColor;
  }

  .v-snackbar--variant-text .v-snackbar__overlay {
    background: currentColor;
  }

  .v-snackbar--variant-tonal .v-snackbar__underlay {
    background: currentColor;
    opacity: var(--v-activated-opacity);
    border-radius: inherit;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }

  .v-snackbar__content {
    flex-grow: 1;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
    line-height: 1.5;
    margin-right: auto;
    padding: 14px 16px;
    text-align: initial;
  }

  .v-snackbar__actions {
    align-items: center;
    align-self: center;
    display: flex;
    margin-inline-end: 8px;
  }

  .v-snackbar__actions>.v-btn {
    padding: 0 8px;
    min-width: auto;
  }

  .v-snackbar--absolute {
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .v-snackbar--multi-line .v-snackbar__wrapper {
    min-height: 68px;
  }

  .v-snackbar--vertical .v-snackbar__wrapper {
    flex-direction: column;
  }

  .v-snackbar--vertical .v-snackbar__wrapper .v-snackbar__actions {
    align-self: flex-end;
    margin-bottom: 8px;
  }

  .v-snackbar-transition-enter-active,
  .v-snackbar-transition-leave-active {
    transition-duration: 0.15s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .v-snackbar-transition-enter-active {
    transition-property: opacity, transform;
  }

  .v-snackbar-transition-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }

  .v-snackbar-transition-leave-active {
    transition-property: opacity;
  }

  .v-snackbar-transition-leave-to {
    opacity: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSwitch/VSwitch.sass?v=3687d9c4">
  
  .v-switch .v-label {
    padding-inline-start: 10px;
  }

  .v-switch__loader {
    display: flex;
  }

  .v-switch__track,
  .v-switch__thumb {
    background-color: currentColor;
    transition: none;
  }

  .v-selection-control--error:not(.v-selection-control--disabled) .v-switch__track,
  .v-selection-control--error:not(.v-selection-control--disabled) .v-switch__thumb {
    background-color: rgb(var(--v-theme-error));
  }

  .v-switch__track {
    border-radius: 8px;
    height: 14px;
    opacity: 0.6;
    width: 36px;
    cursor: pointer;
  }

  .v-switch--inset .v-switch__track {
    border-radius: 14px;
    height: 28px;
    width: 48px;
  }

  .v-switch__thumb {
    align-items: center;
    border-radius: 50%;
    color: rgb(var(--v-theme-surface));
    display: flex;
    height: 20px;
    justify-content: center;
    width: 20px;
    pointer-events: none;
    transition: 0.15s transform cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-switch--inset .v-switch__thumb {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-switch:not(.v-switch--loading) .v-icon~.v-switch__thumb {
    display: none;
  }

  .v-switch--loading .v-selection-control__input>.v-icon {
    display: none;
  }

  .v-switch .v-selection-control {
    height: var(--v-input-control-height);
  }

  .v-switch .v-selection-control__wrapper {
    width: auto;
  }

  .v-switch .v-selection-control__input {
    border-radius: 50%;
    transition: 0.15s transform cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-10px);
    position: absolute;
  }

  .v-switch .v-selection-control--dirty .v-selection-control__input {
    transform: translateX(10px);
  }

  .v-switch.v-switch--indeterminate .v-selection-control__input {
    transform: scale(0.8);
  }

  .v-switch.v-switch--indeterminate .v-switch__thumb {
    transform: scale(0.75);
    box-shadow: none;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VSystemBar/VSystemBar.sass?v=3687d9c4">
  
  .v-system-bar {
    align-items: center;
    display: flex;
    flex: 1 1 auto;
    height: 24px;
    justify-content: flex-end;
    max-width: 100%;
    padding: 0 8px;
    position: relative;
    text-align: end;
    width: 100%;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
    background: rgba(var(--v-theme-on-surface-variant));
    color: rgba(var(--v-theme-on-variant), var(--v-medium-emphasis-opacity));
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
    line-height: 1.25rem;
    text-transform: none;
  }

  .v-system-bar .v-icon {
    opacity: var(--v-medium-emphasis-opacity);
  }

  .v-system-bar--absolute {
    position: absolute;
  }

  .v-system-bar--fixed {
    position: fixed;
  }

  .v-system-bar--rounded {
    border-radius: 0;
  }

  .v-system-bar--window {
    height: 32px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTabs/VTabs.sass?v=3687d9c4">
  
  .v-tabs {
    display: flex;
    height: var(--v-tabs-height);
  }

  .v-tabs--density-default {
    --v-tabs-height: 42px;
  }

  .v-tabs--density-default.v-tabs--stacked {
    --v-tabs-height: 72px;
  }

  .v-tabs--density-comfortable {
    --v-tabs-height: 38px;
  }

  .v-tabs--density-comfortable.v-tabs--stacked {
    --v-tabs-height: 68px;
  }

  .v-tabs--density-compact {
    --v-tabs-height: 30px;
  }

  .v-tabs--density-compact.v-tabs--stacked {
    --v-tabs-height: 60px;
  }

  .v-tabs.v-slide-group--vertical {
    height: auto;
    --v-tabs-height: 42px;
  }

  .v-tabs--align-tabs-title:not(.v-slide-group--has-affixes) .v-tab:first-child {
    margin-inline-start: 42px;
  }

  .v-tabs--fixed-tabs .v-slide-group__content>*:last-child,
  .v-tabs--align-tabs-center .v-slide-group__content>*:last-child {
    margin-inline-end: auto;
  }

  .v-tabs--fixed-tabs .v-slide-group__content>*:first-child,
  .v-tabs--align-tabs-center .v-slide-group__content>*:first-child {
    margin-inline-start: auto;
  }

  .v-tabs--grow {
    flex-grow: 1;
  }

  .v-tabs--grow .v-tab {
    flex: 1 0 auto;
    max-width: none;
  }

  .v-tabs--align-tabs-end .v-tab:first-child {
    margin-inline-start: auto;
  }

  .v-tabs--align-tabs-end .v-tab:last-child {
    margin-inline-end: 0;
  }

  @media (max-width: 1279.98px) {
    .v-tabs.v-slide-group--is-overflowing.v-slide-group--horizontal:not(.v-slide-group--has-affixes) .v-tab:first-child {
      margin-inline-start: 52px;
    }

    .v-tabs.v-slide-group--is-overflowing.v-slide-group--horizontal:not(.v-slide-group--has-affixes) .v-tab:last-child {
      margin-inline-end: 52px;
    }
  }

  .v-toolbar__content>.v-tabs,
  .v-toolbar__content .v-tab {
    height: inherit;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTabs/VTab.sass?v=3687d9c4">
  
  .v-tab {
    position: relative;
    min-width: 90px;
  }

  .v-slide-group--horizontal .v-tab {
    max-width: 360px;
  }

  .v-tab.v-tab.v-tab {
    height: var(--v-tabs-height);
  }

  .v-slide-group--vertical .v-tab {
    justify-content: start;
  }

  .v-tab__slider {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: currentColor;
    pointer-events: none;
    opacity: 0;
  }

  .v-tab--selected .v-tab__slider {
    opacity: 1;
  }

  .v-slide-group--vertical .v-tab__slider {
    top: 0;
    height: 100%;
    width: 2px;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTable/VTable.sass?v=3687d9c4">
  
  .v-table {
    background: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .v-table .v-table-divider {
    border-right: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-table .v-table__wrapper>table>thead>tr:last-child>th {
    border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>td,
  .v-table .v-table__wrapper>table>tbody>tr:not(:last-child)>th {
    border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-table .v-table__wrapper>table>tfoot>tr>td,
  .v-table .v-table__wrapper>table>tfoot>tr>th {
    border-top: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-table.v-table--hover>.v-table__wrapper>table>tbody>tr:hover {
    background: rgba(var(--v-border-color), var(--v-hover-opacity));
  }

  .v-table.v-table--fixed-header>.v-table__wrapper>table>thead>tr>th {
    background: rgb(var(--v-theme-surface));
    box-shadow: inset 0 -1px 0 rgba(var(--v-border-color), var(--v-border-opacity));
    z-index: 1;
  }

  .v-table.v-table--fixed-footer>tfoot>tr>th,
  .v-table.v-table--fixed-footer>tfoot>tr>td {
    background: rgb(var(--v-theme-surface));
    box-shadow: inset 0 1px 0 rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-table {
    border-radius: inherit;
    line-height: 1.5;
    max-width: 100%;
  }

  .v-table>.v-table__wrapper>table {
    width: 100%;
    border-spacing: 0;
  }

  .v-table>.v-table__wrapper>table>tbody>tr>td,
  .v-table>.v-table__wrapper>table>tbody>tr>th,
  .v-table>.v-table__wrapper>table>thead>tr>td,
  .v-table>.v-table__wrapper>table>thead>tr>th,
  .v-table>.v-table__wrapper>table>tfoot>tr>td,
  .v-table>.v-table__wrapper>table>tfoot>tr>th {
    padding: 0 16px;
    transition: height cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-table>.v-table__wrapper>table>tbody>tr>th,
  .v-table>.v-table__wrapper>table>thead>tr>th,
  .v-table>.v-table__wrapper>table>tfoot>tr>th {
    user-select: none;
    font-size: 0.75rem;
  }

  .v-table>.v-table__wrapper>table>tbody>tr>th.v-locale--is-ltr,
  .v-locale--is-ltr .v-table>.v-table__wrapper>table>tbody>tr>th,
  .v-table>.v-table__wrapper>table>thead>tr>th.v-locale--is-ltr,
  .v-locale--is-ltr .v-table>.v-table__wrapper>table>thead>tr>th,
  .v-table>.v-table__wrapper>table>tfoot>tr>th.v-locale--is-ltr,
  .v-locale--is-ltr .v-table>.v-table__wrapper>table>tfoot>tr>th {
    text-align: left;
  }

  .v-table>.v-table__wrapper>table>tbody>tr>th.v-locale--is-rtl,
  .v-locale--is-rtl .v-table>.v-table__wrapper>table>tbody>tr>th,
  .v-table>.v-table__wrapper>table>thead>tr>th.v-locale--is-rtl,
  .v-locale--is-rtl .v-table>.v-table__wrapper>table>thead>tr>th,
  .v-table>.v-table__wrapper>table>tfoot>tr>th.v-locale--is-rtl,
  .v-locale--is-rtl .v-table>.v-table__wrapper>table>tfoot>tr>th {
    text-align: right;
  }

  .v-table>.v-table__wrapper>table>tbody>tr>td,
  .v-table>.v-table__wrapper>table>thead>tr>td,
  .v-table>.v-table__wrapper>table>tfoot>tr>td {
    font-size: 0.875rem;
  }

  .v-table--density-default>.v-table__wrapper>table>tbody>tr>th,
  .v-table--density-default>.v-table__wrapper>table>thead>tr>th,
  .v-table--density-default>.v-table__wrapper>table>tfoot>tr>th {
    height: 48px;
  }

  .v-table--density-default>.v-table__wrapper>table>tbody>tr>td,
  .v-table--density-default>.v-table__wrapper>table>thead>tr>td,
  .v-table--density-default>.v-table__wrapper>table>tfoot>tr>td {
    height: 48px;
  }

  .v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>th,
  .v-table--density-comfortable>.v-table__wrapper>table>thead>tr>th,
  .v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>th {
    height: 40px;
  }

  .v-table--density-comfortable>.v-table__wrapper>table>tbody>tr>td,
  .v-table--density-comfortable>.v-table__wrapper>table>thead>tr>td,
  .v-table--density-comfortable>.v-table__wrapper>table>tfoot>tr>td {
    height: 40px;
  }

  .v-table--density-compact>.v-table__wrapper>table>tbody>tr>th,
  .v-table--density-compact>.v-table__wrapper>table>thead>tr>th,
  .v-table--density-compact>.v-table__wrapper>table>tfoot>tr>th {
    height: 32px;
  }

  .v-table--density-compact>.v-table__wrapper>table>tbody>tr>td,
  .v-table--density-compact>.v-table__wrapper>table>thead>tr>td,
  .v-table--density-compact>.v-table__wrapper>table>tfoot>tr>td {
    height: 32px;
  }

  .v-table__wrapper {
    border-radius: inherit;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:first-child {
    border-top-left-radius: 0;
  }

  .v-table--has-top>.v-table__wrapper>table>tbody>tr:first-child:hover>td:last-child {
    border-top-right-radius: 0;
  }

  .v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:first-child {
    border-bottom-left-radius: 0;
  }

  .v-table--has-bottom>.v-table__wrapper>table>tbody>tr:last-child:hover>td:last-child {
    border-bottom-right-radius: 0;
  }

  .v-table--fixed-height>.v-table__wrapper {
    overflow-y: auto;
  }

  .v-table--fixed-header>.v-table__wrapper>table>thead>tr>th {
    border-bottom: 0px !important;
    position: sticky;
    top: 0;
  }

  .v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>td,
  .v-table--fixed-footer>.v-table__wrapper>table>tfoot>tr>th {
    border-top: 0px !important;
    position: sticky;
    bottom: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTextarea/VTextarea.sass?v=3687d9c4">
  
  .v-textarea .v-field {
    --v-textarea-control-height: var(--v-input-control-height);
  }

  .v-textarea .v-field__field {
    --v-input-control-height: var(--v-textarea-control-height);
  }

  .v-textarea .v-field__input {
    flex: 1 1 auto;
    outline: none;
    -webkit-mask-image: linear-gradient(to bottom, transparent, transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px), black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));
    mask-image: linear-gradient(to bottom, transparent, transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px), black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));
  }

  .v-textarea--auto-grow .v-field__input {
    overflow: hidden;
  }

  .v-textarea--no-resize .v-field__input {
    resize: none;
  }

  .v-textarea__sizer {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 0 !important;
    min-height: 0 !important;
    pointer-events: none;
  }

  .v-textarea .v-field--no-label textarea,
  .v-textarea .v-field--active textarea {
    opacity: 1;
  }

  .v-textarea textarea {
    opacity: 0;
    flex: 1;
    min-width: 0;
    transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-textarea textarea:focus,
  .v-textarea textarea:active {
    outline: none;
  }

  .v-textarea textarea:invalid {
    box-shadow: none;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VThemeProvider/VThemeProvider.sass?v=3687d9c4">
  
  .v-theme-provider {
    background: rgb(var(--v-theme-background));
    color: rgb(var(--v-theme-on-background));
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTimeline/VTimeline.sass?v=3687d9c4">
  
  .v-timeline .v-timeline-divider__dot {
    background: rgba(var(--v-border-color), 0.08);
  }

  .v-timeline .v-timeline-divider__inner-dot {
    background: rgb(var(--v-theme-on-surface));
  }

  .v-timeline {
    display: grid;
    grid-auto-flow: dense;
    position: relative;
  }

  .v-timeline--horizontal.v-timeline {
    grid-column-gap: 24px;
    width: 100%;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:first-child .v-timeline-divider,
  .v-timeline--horizontal.v-timeline .v-timeline-item:first-child .v-timeline-item__body,
  .v-timeline--horizontal.v-timeline .v-timeline-item:first-child .v-timeline-item__opposite {
    padding-inline-start: 24px;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:last-child .v-timeline-divider,
  .v-timeline--horizontal.v-timeline .v-timeline-item:last-child .v-timeline-item__body,
  .v-timeline--horizontal.v-timeline .v-timeline-item:last-child .v-timeline-item__opposite {
    padding-inline-end: 24px;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__body {
    grid-row: 3;
    padding-block-start: 24px;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__opposite {
    grid-row: 1;
    padding-block-end: 24px;
    align-self: flex-end;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__body {
    grid-row: 1;
    padding-block-end: 24px;
    align-self: flex-end;
  }

  .v-timeline--horizontal.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__opposite {
    grid-row: 3;
    padding-block-start: 24px;
  }

  .v-timeline--vertical.v-timeline {
    grid-row-gap: 24px;
    height: 100%;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-divider,
  .v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-item__body,
  .v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-item__opposite {
    padding-block-start: 24px;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:last-child .v-timeline-divider,
  .v-timeline--vertical.v-timeline .v-timeline-item:last-child .v-timeline-item__body,
  .v-timeline--vertical.v-timeline .v-timeline-item:last-child .v-timeline-item__opposite {
    padding-block-end: 24px;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__body {
    grid-column: 1;
    justify-self: flex-end;
    padding-inline-end: 24px;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n) .v-timeline-item__opposite {
    grid-column: 3;
    padding-inline-start: 24px;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__body {
    grid-column: 3;
    padding-inline-start: 24px;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item:nth-child(2n+1) .v-timeline-item__opposite {
    grid-column: 1;
    justify-self: flex-end;
    padding-inline-end: 24px;
  }

  .v-timeline-item {
    display: contents;
  }

  .v-timeline-divider {
    position: relative;
    display: flex;
    align-items: center;
  }

  .v-timeline--horizontal .v-timeline-divider {
    flex-direction: row;
    grid-row: 2;
    width: 100%;
  }

  .v-timeline--vertical .v-timeline-divider {
    height: 100%;
    flex-direction: column;
    grid-column: 2;
  }

  .v-timeline-divider__before {
    background: rgba(var(--v-border-color), var(--v-border-opacity));
    position: absolute;
  }

  .v-timeline--horizontal .v-timeline-divider__before {
    height: var(--v-timeline-line-thickness);
    width: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
  }

  .v-timeline--horizontal .v-timeline-divider__before.v-locale--is-ltr,
  .v-locale--is-ltr .v-timeline--horizontal .v-timeline-divider__before {
    left: -12px;
    right: initial;
  }

  .v-timeline--horizontal .v-timeline-divider__before.v-locale--is-rtl,
  .v-locale--is-rtl .v-timeline--horizontal .v-timeline-divider__before {
    right: -12px;
    left: initial;
  }

  .v-timeline--vertical .v-timeline-divider__before {
    height: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
    width: var(--v-timeline-line-thickness);
    top: -12px;
  }

  .v-timeline-divider__after {
    background: rgba(var(--v-border-color), var(--v-border-opacity));
    position: absolute;
  }

  .v-timeline--horizontal .v-timeline-divider__after {
    height: var(--v-timeline-line-thickness);
    width: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
  }

  .v-timeline--horizontal .v-timeline-divider__after.v-locale--is-ltr,
  .v-locale--is-ltr .v-timeline--horizontal .v-timeline-divider__after {
    right: -12px;
    left: initial;
  }

  .v-timeline--horizontal .v-timeline-divider__after.v-locale--is-rtl,
  .v-locale--is-rtl .v-timeline--horizontal .v-timeline-divider__after {
    left: -12px;
    right: initial;
  }

  .v-timeline--vertical .v-timeline-divider__after {
    height: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
    width: var(--v-timeline-line-thickness);
    bottom: -12px;
  }

  .v-timeline--vertical .v-timeline-item:first-child .v-timeline-divider__before {
    height: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
    top: 0;
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__before {
    width: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__before.v-locale--is-ltr,
  .v-locale--is-ltr .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__before {
    left: 0;
    right: initial;
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__before.v-locale--is-rtl,
  .v-locale--is-rtl .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__before {
    right: 0;
    left: initial;
  }

  .v-timeline--vertical .v-timeline-item:first-child .v-timeline-divider__after {
    height: calc(var(--v-timeline-line-size-base) - var(--v-timeline-line-inset) + var(--v-timeline-line-size-offset));
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__after {
    width: calc(var(--v-timeline-line-size-base) - var(--v-timeline-line-inset) + var(--v-timeline-line-size-offset));
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__after.v-locale--is-ltr,
  .v-locale--is-ltr .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__after {
    right: -12px;
    left: initial;
  }

  .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__after.v-locale--is-rtl,
  .v-locale--is-rtl .v-timeline--horizontal .v-timeline-item:first-child .v-timeline-divider__after {
    left: -12px;
    right: initial;
  }

  .v-timeline--vertical .v-timeline-item:last-child .v-timeline-divider__before {
    height: calc(var(--v-timeline-line-size-base) - var(--v-timeline-line-inset) + var(--v-timeline-line-size-offset));
  }

  .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__before {
    width: calc(var(--v-timeline-line-size-base) - var(--v-timeline-line-inset) + var(--v-timeline-line-size-offset));
  }

  .v-timeline--vertical .v-timeline-item:last-child .v-timeline-divider__after {
    height: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
    bottom: 0;
  }

  .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__after {
    width: calc(var(--v-timeline-line-size-base) + 12px - var(--v-timeline-line-inset));
  }

  .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__after.v-locale--is-ltr,
  .v-locale--is-ltr .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__after {
    right: 0;
    left: initial;
  }

  .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__after.v-locale--is-rtl,
  .v-locale--is-rtl .v-timeline--horizontal .v-timeline-item:last-child .v-timeline-divider__after {
    left: 0;
    right: initial;
  }

  .v-timeline-divider__dot {
    z-index: 1;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity);
  }

  .v-timeline-divider__dot--size-x-small {
    height: 18px;
    width: 18px;
  }

  .v-timeline-divider__dot--size-x-small .v-timeline-divider__inner-dot {
    height: calc(100% - 6px);
    width: calc(100% - 6px);
  }

  .v-timeline-divider__dot--size-small {
    height: 26px;
    width: 26px;
  }

  .v-timeline-divider__dot--size-small .v-timeline-divider__inner-dot {
    height: calc(100% - 8px);
    width: calc(100% - 8px);
  }

  .v-timeline-divider__dot--size-default {
    height: 34px;
    width: 34px;
  }

  .v-timeline-divider__dot--size-default .v-timeline-divider__inner-dot {
    height: calc(100% - 8px);
    width: calc(100% - 8px);
  }

  .v-timeline-divider__dot--size-large {
    height: 42px;
    width: 42px;
  }

  .v-timeline-divider__dot--size-large .v-timeline-divider__inner-dot {
    height: calc(100% - 8px);
    width: calc(100% - 8px);
  }

  .v-timeline-divider__dot--size-x-large {
    height: 50px;
    width: 50px;
  }

  .v-timeline-divider__dot--size-x-large .v-timeline-divider__inner-dot {
    height: calc(100% - 10px);
    width: calc(100% - 10px);
  }

  .v-timeline-divider__inner-dot {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }

  
  .v-timeline--horizontal.v-timeline--justify-center {
    grid-template-rows: minmax(auto, 50%) min-content minmax(auto, 50%);
  }

  .v-timeline--vertical.v-timeline--justify-center {
    grid-template-columns: minmax(auto, 50%) min-content minmax(auto, 50%);
  }

  .v-timeline--horizontal.v-timeline--justify-auto {
    grid-template-rows: auto min-content auto;
  }

  .v-timeline--vertical.v-timeline--justify-auto {
    grid-template-columns: auto min-content auto;
  }

  .v-timeline--horizontal.v-timeline--density-comfortable {
    height: 100%;
  }

  .v-timeline--horizontal.v-timeline--density-comfortable.v-timeline--side-end {
    grid-template-rows: min-content min-content auto;
  }

  .v-timeline--horizontal.v-timeline--density-comfortable.v-timeline--side-start {
    grid-template-rows: auto min-content min-content;
  }

  .v-timeline--vertical.v-timeline--density-comfortable {
    width: 100%;
  }

  .v-timeline--vertical.v-timeline--density-comfortable.v-timeline--side-end {
    grid-template-columns: min-content min-content auto;
  }

  .v-timeline--vertical.v-timeline--density-comfortable.v-timeline--side-start {
    grid-template-columns: auto min-content min-content;
  }

  .v-timeline--horizontal.v-timeline--density-compact.v-timeline--side-end {
    grid-template-rows: 0 min-content auto;
  }

  .v-timeline--horizontal.v-timeline--density-compact.v-timeline--side-start {
    grid-template-rows: auto min-content 0;
  }

  .v-timeline--horizontal.v-timeline--density-compact .v-timeline-item__body {
    grid-row: 1;
  }

  .v-timeline--vertical.v-timeline--density-compact.v-timeline--side-end {
    grid-template-columns: 0 min-content auto;
  }

  .v-timeline--vertical.v-timeline--density-compact.v-timeline--side-start {
    grid-template-columns: auto min-content 0;
  }

  .v-timeline--vertical.v-timeline--density-compact .v-timeline-item__body {
    grid-column: 3;
  }

  .v-timeline--horizontal.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
    grid-row: 3;
    padding-block-end: initial;
    padding-block-start: 24px;
  }

  .v-timeline--horizontal.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__opposite {
    grid-row: 1;
    padding-block-end: 24px;
    padding-block-start: initial;
  }

  .v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__body {
    grid-column: 3;
    padding-inline-start: 24px;
    padding-inline-end: initial;
    justify-self: flex-start;
  }

  .v-timeline--vertical.v-timeline.v-timeline--side-end .v-timeline-item .v-timeline-item__opposite {
    grid-column: 1;
    justify-self: flex-end;
    padding-inline-end: 24px;
    padding-inline-start: initial;
  }

  .v-timeline--horizontal.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__body {
    grid-row: 1;
    padding-block-end: 24px;
    padding-block-start: initial;
  }

  .v-timeline--horizontal.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__opposite {
    grid-row: 3;
    padding-block-end: initial;
    padding-block-start: 24px;
  }

  .v-timeline--vertical.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__body {
    grid-column: 1;
    justify-self: flex-end;
    padding-inline-end: 24px;
  }

  .v-timeline--vertical.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__opposite {
    grid-column: 3;
    padding-inline-start: 24px;
    justify-self: flex-start;
  }

  .v-timeline-divider--fill-dot .v-timeline-divider__inner-dot {
    height: inherit;
    width: inherit;
  }

  .v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-divider__before {
    display: none;
  }

  .v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-divider__after {
    display: none;
  }

  .v-timeline--align-center {
    --v-timeline-line-size-base: 50%;
    --v-timeline-line-size-offset: 0px;
  }

  .v-timeline--horizontal.v-timeline--align-center {
    justify-items: center;
  }

  .v-timeline--horizontal.v-timeline--align-center .v-timeline-divider {
    justify-content: center;
  }

  .v-timeline--vertical.v-timeline--align-center {
    align-items: center;
  }

  .v-timeline--vertical.v-timeline--align-center .v-timeline-divider {
    justify-content: center;
  }

  .v-timeline--align-start {
    --v-timeline-line-size-base: 100%;
    --v-timeline-line-size-offset: 12px;
  }

  .v-timeline--align-start .v-timeline-item:first-child .v-timeline-divider__before {
    --v-timeline-line-size-offset: 24px;
  }

  .v-timeline--align-start .v-timeline-item:first-child .v-timeline-divider__after {
    --v-timeline-line-size-offset: -12px;
  }

  .v-timeline--align-start .v-timeline-item:last-child .v-timeline-divider__after {
    --v-timeline-line-size-offset: 0px;
  }

  .v-timeline--horizontal.v-timeline--align-start {
    justify-items: flex-start;
  }

  .v-timeline--horizontal.v-timeline--align-start .v-timeline-divider {
    justify-content: flex-start;
  }

  .v-timeline--horizontal.v-timeline--align-start .v-timeline-divider .v-timeline-divider__before {
    width: calc(var(--v-timeline-line-size-offset) + var(--v-timeline-dot-size) / 2 - var(--v-timeline-line-inset));
  }

  .v-timeline--horizontal.v-timeline--align-start .v-timeline-divider .v-timeline-divider__after {
    width: calc(var(--v-timeline-line-size-base) - var(--v-timeline-dot-size) / 2 + var(--v-timeline-line-size-offset) - var(--v-timeline-line-inset));
  }

  .v-timeline--vertical.v-timeline--align-start {
    align-items: flex-start;
  }

  .v-timeline--vertical.v-timeline--align-start .v-timeline-divider {
    justify-content: flex-start;
  }

  .v-timeline--vertical.v-timeline--align-start .v-timeline-divider .v-timeline-divider__before {
    height: calc(var(--v-timeline-line-size-offset) + var(--v-timeline-dot-size) / 2 - var(--v-timeline-line-inset));
  }

  .v-timeline--vertical.v-timeline--align-start .v-timeline-divider .v-timeline-divider__after {
    height: calc(var(--v-timeline-line-size-base) - var(--v-timeline-dot-size) / 2 + var(--v-timeline-line-size-offset) - var(--v-timeline-line-inset));
  }

  .v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-divider__after {
    --v-timeline-line-size-offset: 12px;
  }

  .v-timeline--vertical.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-divider,
  .v-timeline--vertical.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-item__body,
  .v-timeline--vertical.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-item__opposite {
    padding-block-start: 0;
  }

  .v-timeline--horizontal.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-divider,
  .v-timeline--horizontal.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-item__body,
  .v-timeline--horizontal.v-timeline--truncate-line-start .v-timeline-item:first-child .v-timeline-item__opposite {
    padding-inline-start: 0;
  }

  .v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-divider__before {
    --v-timeline-line-size-offset: 12px;
  }

  .v-timeline--vertical.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-divider,
  .v-timeline--vertical.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-item__body,
  .v-timeline--vertical.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-item__opposite {
    padding-block-end: 0;
  }

  .v-timeline--horizontal.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-divider,
  .v-timeline--horizontal.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-item__body,
  .v-timeline--horizontal.v-timeline--truncate-line-end .v-timeline-item:last-child .v-timeline-item__opposite {
    padding-inline-end: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:components/VTooltip/VTooltip.sass?v=3687d9c4">
  
  .v-tooltip .v-overlay__content {
    background: #212121;
    color: rgb(var(--v-theme-on-primary));
    border-radius: 6px;
    font-size: 0.875rem;
    line-height: 1.6;
    display: inline-block;
    padding: 5px 16px;
    text-transform: initial;
    width: auto;
    opacity: 1;
    pointer-events: none;
    transition-property: opacity, transform;
  }

  .v-tooltip .v-overlay__content[class*=enter-active] {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .v-tooltip .v-overlay__content[class*=leave-active] {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    transition-duration: 75ms;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/HorizontalNav.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-wrapper.layout-nav-type-horizontal .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/HorizontalNavGroup.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-horizontal-nav .nav-group .nav-group-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .layout-horizontal-nav .nav-group .popper-content {
    z-index: 1;
  }

  .layout-horizontal-nav .nav-group .popper-content>div {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/HorizontalNavLayout.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  @charset "UTF-8";

  /*
TODO: Add docs on when to use placeholder vs when to use SASS variable

Placeholder
  - When we want to keep customization to our self between templates use it

Variables
  - When we want to allow customization from both user and our side
  - You can also use variable for consistency (e.g. mx 1 rem should be applied to both vertical nav items and vertical nav header)

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .layout-content-width-boxed.layout-wrapper.layout-nav-type-horizontal .navbar-content-container,
  .layout-content-width-boxed.layout-wrapper.layout-nav-type-horizontal .layout-footer .footer-content-container,
  .layout-content-width-boxed .layout-horizontal-nav .horizontal-nav-content-container {
    inline-size: 100%;
    margin-inline: auto;
    max-inline-size: 1440px;
  }

  .layout-wrapper.layout-nav-type-horizontal .navbar-content-container,
  .layout-wrapper.layout-nav-type-horizontal .layout-footer .footer-content-container,
  .layout-horizontal-nav .horizontal-nav-content-container {
    padding-inline: 1.5rem;
  }

  .layout-wrapper.layout-nav-type-horizontal {
    display: flex;
    flex-direction: column;
    min-block-size: calc(var(--vh, 1vh) * 100);
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-navbar-and-nav-container {
    z-index: 1;
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-navbar {
    z-index: 11;
    block-size: 64px;
  }

  .layout-wrapper.layout-nav-type-horizontal.layout-content-height-fixed {
    max-block-size: calc(var(--vh) * 100);
  }

  .layout-wrapper.layout-nav-type-horizontal.layout-content-height-fixed .layout-page-content {
    overflow: hidden;
  }

  .layout-wrapper.layout-nav-type-horizontal.layout-content-height-fixed .layout-page-content> :first-child {
    max-block-size: 100%;
    overflow-y: auto;
  }

  .layout-wrapper.layout-navbar-sticky.horizontal-nav-sticky .layout-navbar-and-nav-container {
    position: sticky;
    inset-block-start: 0;
    will-change: transform;
  }

  .layout-wrapper.layout-navbar-hidden.horizontal-nav-hidden .layout-navbar-and-nav-container {
    display: none;
  }

  .layout-horizontal-nav {
    z-index: 11;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/HorizontalNavLink.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-horizontal-nav .nav-link a {
    display: flex;
    align-items: center;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/HorizontalNavPopper.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .popper-content {
    position: absolute;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/TransitionExpand.vue?vue&amp;type=style&amp;index=0&amp;lang.css">
  .expand-enter-active,
  .expand-leave-active {
    overflow: hidden;
    transition: block-size var(--expand-transition-duration, 0.25s) ease;
  }

  .expand-enter-from,
  .expand-leave-to {
    block-size: 0;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/TransitionExpand.vue?vue&amp;type=style&amp;index=1&amp;scoped=801c1230&amp;lang.css">
  *[data-v-801c1230] {
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
    will-change: block-size;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/VerticalNav.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  @charset "UTF-8";

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .layout-vertical-nav {
    position: fixed;
    z-index: 1004;
    display: flex;
    flex-direction: column;
    block-size: 100%;
    inline-size: 260px;
    inset-block-start: 0;
    inset-inline-start: 0;
    transition: transform 0.25s ease-in-out, inline-size 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
    will-change: transform, inline-size;
  }

  .layout-vertical-nav .nav-header {
    display: flex;
    align-items: center;
  }

  .layout-vertical-nav .nav-header .header-action {
    cursor: pointer;
  }

  .layout-vertical-nav .app-title-wrapper {
    margin-inline-end: auto;
  }

  .layout-vertical-nav .nav-items {
    block-size: 100%;
  }

  .layout-vertical-nav .nav-item-title {
    overflow: hidden;
    margin-inline-end: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .layout-vertical-nav-collapsed .layout-vertical-nav:not(.hovered) {
    inline-size: 80px;
  }

  .layout-vertical-nav.overlay-nav:not(.visible) {
    transform: translateX(-260px);
  }

  [dir=rtl] .layout-vertical-nav.overlay-nav:not(.visible) {
    transform: translateX(260px);
  }

  .logo {
    margin-left: auto;
    margin-right: auto;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/VerticalNavGroup.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-vertical-nav .nav-group-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/VerticalNavLayout.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  @charset "UTF-8";

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .layout-content-width-boxed.layout-wrapper.layout-nav-type-vertical .layout-navbar,
  .layout-content-width-boxed.layout-wrapper.layout-nav-type-vertical .layout-footer {
    inline-size: 100%;
    margin-inline: auto;
    max-inline-size: 1440px;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar,
  .layout-wrapper.layout-nav-type-vertical .layout-footer {
    padding-inline: 1.5rem;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-navbar-hidden .layout-navbar {
    display: none;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-navbar-sticky .layout-navbar {
    position: sticky;
    inset-block-start: 0;
  }

  .layout-wrapper.layout-nav-type-vertical {
    block-size: 100%;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-block-size: calc(var(--vh, 1vh) * 100);
    transition: padding-inline-start 0.2s ease-in-out;
    will-change: padding-inline-start;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar {
    z-index: 11;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar .navbar-content-container {
    block-size: 64px;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-overlay {
    position: fixed;
    z-index: 1003;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease-in-out;
    will-change: transform;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-overlay.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .layout-wrapper.layout-nav-type-vertical:not(.layout-overlay-nav) .layout-content-wrapper {
    
  }

  .layout-wrapper.layout-nav-type-vertical.layout-vertical-nav-collapsed .layout-content-wrapper {
    padding-inline-start: 80px;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .layout-content-wrapper {
    max-block-size: calc(var(--vh) * 100);
  }

  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .layout-page-content {
    display: flex;
    overflow: hidden;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .layout-page-content .page-content-container {
    inline-size: 100%;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .layout-page-content .page-content-container> :first-child {
    max-block-size: 100%;
    overflow-y: auto;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/components/VerticalNavLink.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-vertical-nav .nav-link a {
    display: flex;
    align-items: center;
  }
</style>
<style type="text/css" data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@layouts/styles/index.scss">
  *,
  ::before,
  ::after {
    box-sizing: inherit;
    background-repeat: no-repeat;
  }

  html {
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  .ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }

  .ps__rail-x {
    height: 15px;
    bottom: 0;
  }

  .ps__rail-x,
  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    position: absolute;
  }

  .ps__rail-y {
    width: 15px;
    right: 0;
  }

  .ps--active-x>.ps__rail-x,
  .ps--active-y>.ps__rail-y {
    display: block;
    background-color: transparent;
  }

  .ps--focus>.ps__rail-x,
  .ps--focus>.ps__rail-y,
  .ps--scrolling-x>.ps__rail-x,
  .ps--scrolling-y>.ps__rail-y,
  .ps:hover>.ps__rail-x,
  .ps:hover>.ps__rail-y {
    opacity: 0.6;
  }

  .ps .ps__rail-x.ps--clicking,
  .ps .ps__rail-x:focus,
  .ps .ps__rail-x:hover,
  .ps .ps__rail-y.ps--clicking,
  .ps .ps__rail-y:focus,
  .ps .ps__rail-y:hover {
    background-color: #eee;
    opacity: 0.9;
  }

  .ps__thumb-x {
    transition: background-color 0.2s linear, height 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, height 0.2s ease-in-out;
    height: 6px;
    bottom: 2px;
  }

  .ps__thumb-x,
  .ps__thumb-y {
    background-color: #aaa;
    border-radius: 6px;
    position: absolute;
  }

  .ps__thumb-y {
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    width: 6px;
    right: 2px;
  }

  .ps__rail-x.ps--clicking .ps__thumb-x,
  .ps__rail-x:focus>.ps__thumb-x,
  .ps__rail-x:hover>.ps__thumb-x {
    background-color: #999;
    height: 11px;
  }

  .ps__rail-y.ps--clicking .ps__thumb-y,
  .ps__rail-y:focus>.ps__thumb-y,
  .ps__rail-y:hover>.ps__thumb-y {
    background-color: #999;
    width: 11px;
  }

  @supports (-ms-overflow-style: none) {
    .ps {
      overflow: auto !important;
    }
  }

  @media (-ms-high-contrast: none),
  screen and (-ms-high-contrast: active) {
    .ps {
      overflow: auto !important;
    }
  }

  .ps {
    position: relative;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@core/scss/template/libs/vuetify/index.scss">
  @charset "UTF-8";

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }

  .text-8xl {
    font-size: 6rem;
    line-height: 1;
  }

  .text-9xl {
    font-size: 8rem;
    line-height: 1;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .gap-0 {
    gap: 0;
  }

  .gap-x-0 {
    column-gap: 0;
  }

  .gap-y-0 {
    row-gap: 0;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-x-1 {
    column-gap: 0.25rem;
  }

  .gap-y-1 {
    row-gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-x-2 {
    column-gap: 0.5rem;
  }

  .gap-y-2 {
    row-gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-x-3 {
    column-gap: 0.75rem;
  }

  .gap-y-3 {
    row-gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-x-4 {
    column-gap: 1rem;
  }

  .gap-y-4 {
    row-gap: 1rem;
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .gap-x-5 {
    column-gap: 1.25rem;
  }

  .gap-y-5 {
    row-gap: 1.25rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .gap-x-6 {
    column-gap: 1.5rem;
  }

  .gap-y-6 {
    row-gap: 1.5rem;
  }

  .gap-7 {
    gap: 1.75rem;
  }

  .gap-x-7 {
    column-gap: 1.75rem;
  }

  .gap-y-7 {
    row-gap: 1.75rem;
  }

  .gap-8 {
    gap: 2rem;
  }

  .gap-x-8 {
    column-gap: 2rem;
  }

  .gap-y-8 {
    row-gap: 2rem;
  }

  .gap-9 {
    gap: 2.25rem;
  }

  .gap-x-9 {
    column-gap: 2.25rem;
  }

  .gap-y-9 {
    row-gap: 2.25rem;
  }

  .gap-10 {
    gap: 2.5rem;
  }

  .gap-x-10 {
    column-gap: 2.5rem;
  }

  .gap-y-10 {
    row-gap: 2.5rem;
  }

  .gap-11 {
    gap: 2.75rem;
  }

  .gap-x-11 {
    column-gap: 2.75rem;
  }

  .gap-y-11 {
    row-gap: 2.75rem;
  }

  .gap-12 {
    gap: 3rem;
  }

  .gap-x-12 {
    column-gap: 3rem;
  }

  .gap-y-12 {
    row-gap: 3rem;
  }

  .gap-14 {
    gap: 3.5rem;
  }

  .gap-x-14 {
    column-gap: 3.5rem;
  }

  .gap-y-14 {
    row-gap: 3.5rem;
  }

  .gap-16 {
    gap: 4rem;
  }

  .gap-x-16 {
    column-gap: 4rem;
  }

  .gap-y-16 {
    row-gap: 4rem;
  }

  .gap-20 {
    gap: 5rem;
  }

  .gap-x-20 {
    column-gap: 5rem;
  }

  .gap-y-20 {
    row-gap: 5rem;
  }

  .gap-24 {
    gap: 6rem;
  }

  .gap-x-24 {
    column-gap: 6rem;
  }

  .gap-y-24 {
    row-gap: 6rem;
  }

  .gap-28 {
    gap: 7rem;
  }

  .gap-x-28 {
    column-gap: 7rem;
  }

  .gap-y-28 {
    row-gap: 7rem;
  }

  .gap-32 {
    gap: 8rem;
  }

  .gap-x-32 {
    column-gap: 8rem;
  }

  .gap-y-32 {
    row-gap: 8rem;
  }

  .gap-36 {
    gap: 9rem;
  }

  .gap-x-36 {
    column-gap: 9rem;
  }

  .gap-y-36 {
    row-gap: 9rem;
  }

  .gap-40 {
    gap: 10rem;
  }

  .gap-x-40 {
    column-gap: 10rem;
  }

  .gap-y-40 {
    row-gap: 10rem;
  }

  .gap-44 {
    gap: 11rem;
  }

  .gap-x-44 {
    column-gap: 11rem;
  }

  .gap-y-44 {
    row-gap: 11rem;
  }

  .gap-48 {
    gap: 12rem;
  }

  .gap-x-48 {
    column-gap: 12rem;
  }

  .gap-y-48 {
    row-gap: 12rem;
  }

  .gap-52 {
    gap: 13rem;
  }

  .gap-x-52 {
    column-gap: 13rem;
  }

  .gap-y-52 {
    row-gap: 13rem;
  }

  .gap-56 {
    gap: 14rem;
  }

  .gap-x-56 {
    column-gap: 14rem;
  }

  .gap-y-56 {
    row-gap: 14rem;
  }

  .gap-60 {
    gap: 15rem;
  }

  .gap-x-60 {
    column-gap: 15rem;
  }

  .gap-y-60 {
    row-gap: 15rem;
  }

  .gap-64 {
    gap: 16rem;
  }

  .gap-x-64 {
    column-gap: 16rem;
  }

  .gap-y-64 {
    row-gap: 16rem;
  }

  .gap-72 {
    gap: 18rem;
  }

  .gap-x-72 {
    column-gap: 18rem;
  }

  .gap-y-72 {
    row-gap: 18rem;
  }

  .gap-80 {
    gap: 20rem;
  }

  .gap-x-80 {
    column-gap: 20rem;
  }

  .gap-y-80 {
    row-gap: 20rem;
  }

  .gap-96 {
    gap: 24rem;
  }

  .gap-x-96 {
    column-gap: 24rem;
  }

  .gap-y-96 {
    row-gap: 24rem;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .v-application__wrap {
    
    min-height: calc(var(--vh, 1vh) * 100);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .text-h1,
  .text-h2,
  .text-h3,
  .text-h4,
  .text-h5,
  .text-h6,
  .text-button,
  .text-overline,
  .v-card-title {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
  }

  .v-application,
  .text-body-1,
  .text-body-2,
  .text-subtitle-1,
  .text-subtitle-2 {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .v-row .v-col .v-input__details,
  .v-row [class^="v-col-*"] .v-input__details {
    margin-block-end: 0;
  }

  .v-theme--light {
    --v-theme-background:
      var(--skin-theme-background,
        248, 247, 250) !important;
    --v-theme-surface:
      var(--skin-theme-surface,
        255, 255, 255) !important;
  }

  .v-theme--dark {
    --v-theme-background:
      var(--skin-theme-background,
        37, 41, 60) !important;
    --v-theme-surface:
      var(--skin-theme-surface,
        47, 51, 73) !important;
  }

  .v-btn--density-compact.v-btn--size-default .v-btn__content>svg {
    width: 22px;
    height: 22px;
    font-size: 22px;
  }

  .v-card-subtitle {
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  }

  .v-card-text+.v-card-text {
    padding-block-start: 0 !important;
  }

  /*
👉 Checkbox & Radio Ripple

TODO Checkbox and switch component. Remove it when vuetify resolve the extra spacing: https://github.com/vuetifyjs/vuetify/issues/15519
We need this because form elements likes checkbox and switches are by default set to height of textfield height which is way big than we want
Tested with checkbox & switches
*/
  .v-checkbox.v-input,
  .v-switch.v-input {
    --v-input-control-height: auto;
    flex: unset;
  }

  .v-selection-control--density-comfortable.v-checkbox-btn,
  .v-selection-control--density-comfortable.v-radio,
  .v-selection-control--density-comfortable.v-radio-btn {
    margin-inline-start: -0.5625rem;
  }

  .v-selection-control--density-compact.v-radio,
  .v-selection-control--density-compact.v-radio-btn,
  .v-selection-control--density-compact.v-checkbox-btn {
    margin-inline-start: -0.3125rem;
  }

  .v-selection-control--density-default.v-checkbox-btn,
  .v-selection-control--density-default.v-radio,
  .v-selection-control--density-default.v-radio-btn {
    margin-inline-start: -0.6875rem;
  }

  .v-radio-group .v-selection-control-group .v-radio:not(:last-child) {
    margin-inline-end: 0.9rem;
  }

  
  .disable-tab-transition {
    overflow: unset !important;
  }

  .disable-tab-transition .v-window__container {
    block-size: auto !important;
  }

  .disable-tab-transition .v-window-item:not(.v-window-item--active) {
    display: none !important;
  }

  .disable-tab-transition .v-window__container .v-window-item {
    transform: none !important;
  }

  .v-list .v-list-item__prepend>.v-icon,
  .v-list .v-list-item__append>.v-icon {
    opacity: var(--v-high-emphasis-opacity);
  }

  /*
ℹ️ Custom class

Remove list spacing inside card

This is because card title gets padding of 20px and list item have padding of 16px. Moreover, list container have padding-bottom as well.
*/
  .card-list {
    --v-card-list-gap: 20px;
  }

  .card-list.v-list {
    padding-block: 0;
  }

  .card-list .v-list-item {
    min-block-size: unset;
    min-block-size: auto !important;
    padding-block: 0 !important;
    padding-inline: 0 !important;
  }

  .card-list .v-list-item>.v-ripple__container {
    opacity: 0;
  }

  .card-list .v-list-item:not(:last-child) {
    padding-block-end: var(--v-card-list-gap) !important;
  }

  .card-list .v-list-item:hover>.v-list-item__overlay,
  .card-list .v-list-item:focus>.v-list-item__overlay,
  .card-list .v-list-item:active>.v-list-item__overlay,
  .card-list .v-list-item.active>.v-list-item__overlay {
    opacity: 0 !important;
  }

  
  .v-switch.v-input,
  .v-checkbox-btn,
  .v-radio-btn,
  .v-radio {
    --v-input-control-height: auto;
    flex: unset;
  }

  .v-checkbox-btn .v-selection-control__input .v-icon.iconify--custom {
    border-radius: 0.25rem;
    block-size: 1.125rem !important;
    font-size: 1.125rem !important;
    inline-size: 1.125rem !important;
  }

  .v-checkbox-btn .v-selection-control--dirty .v-selection-control__input .v-icon.iconify--custom {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-radio .v-selection-control__input .iconify--custom,
  .v-radio-btn .v-selection-control__input .iconify--custom {
    border-radius: 5rem;
    block-size: 1.125rem !important;
    font-size: 1.125rem !important;
    inline-size: 1.125rem !important;
  }

  .v-radio.v-selection-control--dirty .v-selection-control__input .iconify--custom,
  .v-radio-btn.v-selection-control--dirty .v-selection-control__input .iconify--custom {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  svg.iconify * {
    stroke-width: 1.5;
  }

  .v-alert:not(.v-alert--prominent) .v-alert__prepend {
    z-index: 1;
    padding: 0.25rem;
    border-radius: 0.375rem;
    background-color: #fff;
  }

  .v-alert:not(.v-alert--prominent) .v-alert__prepend .v-icon {
    block-size: 1.125rem !important;
    font-size: 1.125rem !important;
    inline-size: 1.125rem !important;
  }

  .v-alert:not(.v-alert--prominent).bg-primary .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-primary .v-alert__prepend {
    color: rgb(var(--v-theme-primary)) !important;
  }

  .v-alert:not(.v-alert--prominent).bg-secondary .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-secondary .v-alert__prepend {
    color: rgb(var(--v-theme-secondary)) !important;
  }

  .v-alert:not(.v-alert--prominent).bg-error .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-error .v-alert__prepend {
    color: rgb(var(--v-theme-error)) !important;
  }

  .v-alert:not(.v-alert--prominent).bg-info .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-info .v-alert__prepend {
    color: rgb(var(--v-theme-info)) !important;
  }

  .v-alert:not(.v-alert--prominent).bg-success .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-success .v-alert__prepend {
    color: rgb(var(--v-theme-success)) !important;
  }

  .v-alert:not(.v-alert--prominent).bg-warning .v-alert__prepend,
  .v-alert:not(.v-alert--prominent).text-warning .v-alert__prepend {
    color: rgb(var(--v-theme-warning)) !important;
  }

  .v-badge__badge .v-icon {
    margin-block-end: 0.125rem !important;
  }

  .v-slider-thumb {
    border: 3px solid rgb(var(--v-theme-surface));
    border-radius: 5rem;
    box-shadow: 0 3px 6px 2px var(--v-shadow-key-umbra-opacity), 0 6px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity);
  }

  .v-slider-thumb__label {
    background: #212121 !important;
    color: rgb(var(--v-theme-on-primary)) !important;
  }

  .v-slider.v-input--horizontal .v-slider-thumb__label::before {
    border-block-start-color: #212121 !important;
  }

  .v-slider.v-input--vertical .v-slider-thumb__label::before {
    border-inline-end-color: #212121 !important;
  }
</style>
<style type="text/css" data-vite-dev-id="plugin-vuetify:styles/main.sass">
  @charset "UTF-8";

  
  @keyframes v-shake {
    59% {
      margin-left: 0;
    }

    60%,
    80% {
      margin-left: 2px;
    }

    70%,
    90% {
      margin-left: -2px;
    }
  }

  /*!
* ress.css • v2.0.4
* MIT License
* github.com/filipelinhares/ress
*/
  /* # =================================================================
 # Global selectors
 # ================================================================= */
  html {
    box-sizing: border-box;
    overflow-y: scroll;
    
    -webkit-text-size-adjust: 100%;
    
    word-break: normal;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    
    vertical-align: inherit;
  }

  * {
    padding: 0;
    
    margin: 0;
  }

  /* # =================================================================
 # General elements
 # ================================================================= */
  hr {
    overflow: visible;
    height: 0;
    
  }

  details,
  main {
    display: block;
    
  }

  summary {
    display: list-item;
    
  }

  small {
    font-size: 80%;
    
  }

  [hidden] {
    display: none;
    
  }

  abbr[title] {
    border-bottom: none;
    
    
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  a {
    background-color: transparent;
    
  }

  a:active,
  a:hover {
    outline-width: 0;
    
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    
  }

  pre {
    font-size: 1em;
    
  }

  b,
  strong {
    font-weight: bolder;
    
  }

  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* # =================================================================
 # Forms
 # ================================================================= */
  input {
    border-radius: 0;
  }

  
  [disabled] {
    cursor: default;
  }

  [type=number]::-webkit-inner-spin-button,
  [type=number]::-webkit-outer-spin-button {
    height: auto;
    
  }

  [type=search] {
    -webkit-appearance: textfield;
    
    outline-offset: -2px;
    
  }

  [type=search]::-webkit-search-cancel-button,
  [type=search]::-webkit-search-decoration {
    -webkit-appearance: none;
    
  }

  textarea {
    overflow: auto;
    
    resize: vertical;
    
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;

  }

  optgroup {
    font-weight: bold;

  }

  button {
    overflow: visible;

  }

  button,
  select {
    text-transform: none;

  }


  button,
  [type=button],
  [type=reset],
  [type=submit],
  [role=button] {
    cursor: pointer;
    color: inherit;
  }


  button::-moz-focus-inner,
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }


  button:-moz-focusring,
  [type=button]::-moz-focus-inner,
  [type=reset]::-moz-focus-inner,
  [type=submit]::-moz-focus-inner {
    outline: 1px dotted ButtonText;
  }

  button,
  html [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
    
  }

  
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
  }

  
  select {
    -moz-appearance: none;
    
    -webkit-appearance: none;
    
  }

  select::-ms-expand {
    display: none;
    
  }

  select::-ms-value {
    color: currentColor;
    
  }

  legend {
    border: 0;
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
    max-width: 100%;
  }

  ::-webkit-file-upload-button {

    -webkit-appearance: button;
    color: inherit;
    font: inherit;

  }

  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }

  /* # =================================================================
 # Specify media element style
 # ================================================================= */
  img {
    border-style: none;
    
  }

  
  progress {
    vertical-align: baseline;
  }

  /* # =================================================================
 # Accessibility
 # ================================================================= */
  
  @media screen {
    [hidden~=screen] {
      display: inherit;
    }

    [hidden~=screen]:not(:active):not(:focus):not(:target) {
      position: absolute !important;
      clip: rect(0 0 0 0) !important;
    }
  }

  
  [aria-busy=true] {
    cursor: progress;
  }

  
  [aria-controls] {
    cursor: pointer;
  }

  
  [aria-disabled=true] {
    cursor: default;
  }

  .elevation-24 {
    box-shadow: 0 11px 27px 7px var(--v-shadow-key-umbra-opacity), 0 27px 24px 3px var(--v-shadow-key-penumbra-opacity), 0 9px 24px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-23 {
    box-shadow: 0 11px 26px 7px var(--v-shadow-key-umbra-opacity), 0 26px 23px 3px var(--v-shadow-key-penumbra-opacity), 0 9px 23px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-22 {
    box-shadow: 0 10px 25px 6px var(--v-shadow-key-umbra-opacity), 0 25px 22px 3px var(--v-shadow-key-penumbra-opacity), 0 8px 22px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-21 {
    box-shadow: 0 10px 24px 6px var(--v-shadow-key-umbra-opacity), 0 24px 21px 3px var(--v-shadow-key-penumbra-opacity), 0 8px 21px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-20 {
    box-shadow: 0 10px 23px 6px var(--v-shadow-key-umbra-opacity), 0 23px 20px 3px var(--v-shadow-key-penumbra-opacity), 0 8px 20px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-19 {
    box-shadow: 0 9px 22px 6px var(--v-shadow-key-umbra-opacity), 0 22px 19px 2px var(--v-shadow-key-penumbra-opacity), 0 7px 19px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-18 {
    box-shadow: 0 9px 21px 5px var(--v-shadow-key-umbra-opacity), 0 21px 18px 2px var(--v-shadow-key-penumbra-opacity), 0 7px 18px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-17 {
    box-shadow: 0 8px 20px 5px var(--v-shadow-key-umbra-opacity), 0 20px 17px 2px var(--v-shadow-key-penumbra-opacity), 0 6px 17px 7px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-16 {
    box-shadow: 0 8px 19px 5px var(--v-shadow-key-umbra-opacity), 0 19px 16px 2px var(--v-shadow-key-penumbra-opacity), 0 6px 16px 6px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-15 {
    box-shadow: 0 8px 18px 5px var(--v-shadow-key-umbra-opacity), 0 18px 15px 2px var(--v-shadow-key-penumbra-opacity), 0 6px 15px 6px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-14 {
    box-shadow: 0 7px 17px 4px var(--v-shadow-key-umbra-opacity), 0 17px 14px 2px var(--v-shadow-key-penumbra-opacity), 0 5px 14px 6px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-13 {
    box-shadow: 0 7px 16px 4px var(--v-shadow-key-umbra-opacity), 0 16px 13px 2px var(--v-shadow-key-penumbra-opacity), 0 5px 13px 6px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-12 {
    box-shadow: 0 7px 15px 4px var(--v-shadow-key-umbra-opacity), 0 15px 12px 2px var(--v-shadow-key-penumbra-opacity), 0 5px 12px 5px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-11 {
    box-shadow: 0 6px 14px 4px var(--v-shadow-key-umbra-opacity), 0 14px 11px 1px var(--v-shadow-key-penumbra-opacity), 0 4px 11px 5px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-10 {
    box-shadow: 0 6px 13px 3px var(--v-shadow-key-umbra-opacity), 0 13px 10px 1px var(--v-shadow-key-penumbra-opacity), 0 4px 10px 5px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-9 {
    box-shadow: 0 5px 12px 3px var(--v-shadow-key-umbra-opacity), 0 12px 9px 1px var(--v-shadow-key-penumbra-opacity), 0 3px 9px 5px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-8 {
    box-shadow: 0 5px 11px 3px var(--v-shadow-key-umbra-opacity), 0 11px 8px 1px var(--v-shadow-key-penumbra-opacity), 0 3px 8px 4px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-7 {
    box-shadow: 0 4px 10px 2px var(--v-shadow-key-umbra-opacity), 0 10px 9px 1px var(--v-shadow-key-penumbra-opacity), 0 2px 7px 4px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-6 {
    box-shadow: 0 3px 9px 1px var(--v-shadow-key-umbra-opacity), 0 9px 8px var(--v-shadow-key-penumbra-opacity), 0 1px 6px 4px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-5 {
    box-shadow: 0 3px 8px 1px var(--v-shadow-key-umbra-opacity), 0 8px 6px var(--v-shadow-key-penumbra-opacity), 0 1px 5px 4px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-4 {
    box-shadow: 0 2px 7px 1px var(--v-shadow-key-umbra-opacity), 0 7px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-3 {
    box-shadow: 0 3px 6px 2px var(--v-shadow-key-umbra-opacity), 0 6px 4px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-2 {
    box-shadow: 0 3px 5px 2px var(--v-shadow-key-umbra-opacity), 0 5px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 4px 2px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-1 {
    box-shadow: 0 2px 4px 1px var(--v-shadow-key-umbra-opacity), 0 4px 3px var(--v-shadow-key-penumbra-opacity), 0 1px 3px 2px var(--v-shadow-key-ambient-opacity) !important;
  }

  .elevation-0 {
    box-shadow: 0 0 0 0 var(--v-shadow-key-umbra-opacity), 0 0 0 0 var(--v-shadow-key-penumbra-opacity), 0 0 0 0 var(--v-shadow-key-ambient-opacity) !important;
  }

  .dialog-transition-enter-active,
  .dialog-bottom-transition-enter-active,
  .dialog-top-transition-enter-active {
    transition: 225ms cubic-bezier(0, 0, 0.2, 1);
  }

  .dialog-transition-leave-active,
  .dialog-bottom-transition-leave-active,
  .dialog-top-transition-leave-active {
    transition: 125ms cubic-bezier(0.4, 0, 1, 1);
  }

  .dialog-transition-enter-active,
  .dialog-transition-leave-active,
  .dialog-bottom-transition-enter-active,
  .dialog-bottom-transition-leave-active,
  .dialog-top-transition-enter-active,
  .dialog-top-transition-leave-active {
    transition-property: transform, opacity;
    pointer-events: none;
  }

  .dialog-transition-enter-from,
  .dialog-transition-leave-to {
    transform: scale(0.9);
    opacity: 0;
  }

  .dialog-transition-enter-to,
  .dialog-transition-leave-from {
    opacity: 1;
  }

  .dialog-bottom-transition-enter-from,
  .dialog-bottom-transition-leave-to {
    transform: translateY(calc(50vh + 50%));
  }

  .dialog-top-transition-enter-from,
  .dialog-top-transition-leave-to {
    transform: translateY(calc(-50vh - 50%));
  }

  .picker-transition-enter-active,
  .picker-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-leave-active,
  .picker-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-move,
  .picker-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-enter-from,
  .picker-transition-leave-to,
  .picker-reverse-transition-enter-from,
  .picker-reverse-transition-leave-to {
    opacity: 0;
  }

  .picker-transition-leave-from,
  .picker-transition-leave-active,
  .picker-transition-leave-to,
  .picker-reverse-transition-leave-from,
  .picker-reverse-transition-leave-active,
  .picker-reverse-transition-leave-to {
    position: absolute !important;
  }

  .picker-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-transition-enter-from {
    transform: translate(0, 100%);
  }

  .picker-transition-leave-to {
    transform: translate(0, -100%);
  }

  .picker-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .picker-reverse-transition-enter-from {
    transform: translate(0, -100%);
  }

  .picker-reverse-transition-leave-to {
    transform: translate(0, 100%);
  }

  .expand-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-x-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-x-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .expand-x-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-transition-enter-from,
  .scale-transition-leave-from,
  .scale-transition-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .scale-rotate-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-transition-enter-from,
  .scale-rotate-transition-leave,
  .scale-rotate-transition-leave-to {
    opacity: 0;
    transform: scale(0) rotate(-45deg);
  }

  .scale-rotate-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-rotate-reverse-transition-enter-from,
  .scale-rotate-reverse-transition-leave-from,
  .scale-rotate-reverse-transition-leave-to {
    opacity: 0;
    transform: scale(0) rotate(45deg);
  }

  .message-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .message-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .message-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .message-transition-enter-from,
  .message-transition-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }

  .message-transition-leave-from,
  .message-transition-leave-active {
    position: absolute;
  }

  .slide-y-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-transition-enter-from,
  .slide-y-transition-leave-to {
    opacity: 0;
    transform: translateY(-15px);
  }

  .slide-y-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-y-reverse-transition-enter-from,
  .slide-y-reverse-transition-leave-to {
    opacity: 0;
    transform: translateY(15px);
  }

  .scroll-y-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-transition-enter-from,
  .scroll-y-transition-leave-to {
    opacity: 0;
  }

  .scroll-y-transition-enter-from {
    transform: translateY(-15px);
  }

  .scroll-y-transition-leave-to {
    transform: translateY(15px);
  }

  .scroll-y-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-y-reverse-transition-enter-from,
  .scroll-y-reverse-transition-leave-to {
    opacity: 0;
  }

  .scroll-y-reverse-transition-enter-from {
    transform: translateY(15px);
  }

  .scroll-y-reverse-transition-leave-to {
    transform: translateY(-15px);
  }

  .scroll-x-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-transition-enter-from,
  .scroll-x-transition-leave-to {
    opacity: 0;
  }

  .scroll-x-transition-enter-from {
    transform: translateX(-15px);
  }

  .scroll-x-transition-leave-to {
    transform: translateX(15px);
  }

  .scroll-x-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scroll-x-reverse-transition-enter-from,
  .scroll-x-reverse-transition-leave-to {
    opacity: 0;
  }

  .scroll-x-reverse-transition-enter-from {
    transform: translateX(15px);
  }

  .scroll-x-reverse-transition-leave-to {
    transform: translateX(-15px);
  }

  .slide-x-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-transition-enter-from,
  .slide-x-transition-leave-to {
    opacity: 0;
    transform: translateX(-15px);
  }

  .slide-x-reverse-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-reverse-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-reverse-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-x-reverse-transition-enter-from,
  .slide-x-reverse-transition-leave-to {
    opacity: 0;
    transform: translateX(15px);
  }

  .fade-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-transition-enter-from,
  .fade-transition-leave-to {
    opacity: 0 !important;
  }

  .fab-transition-enter-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fab-transition-leave-active {
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fab-transition-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fab-transition-enter-from,
  .fab-transition-leave-to {
    transform: scale(0) rotate(-45deg);
  }

  .v-locale--is-rtl {
    direction: rtl;
  }

  .v-locale--is-ltr {
    direction: ltr;
  }

  .blockquote {
    padding: 16px 0 16px 24px;
    font-size: 18px;
    font-weight: 300;
  }

  html {
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
    font-size: 1rem;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html.overflow-y-hidden {
    overflow-y: hidden !important;
  }

  :root {
    --v-theme-background: #fff;
    --v-theme-on-background: #000;
    --v-theme-surface: #fff;
    --v-theme-on-surface: #000;
    --v-theme-overlay-multiplier: 1;
    --v-scrollbar-offset: 0px;
  }

  @supports (-webkit-touch-callout: none) {
    body {
      cursor: pointer;
    }
  }

  @media only print {
    .hidden-print-only {
      display: none !important;
    }
  }

  @media only screen {
    .hidden-screen-only {
      display: none !important;
    }
  }

  @media (max-width: 599.98px) {
    .hidden-xs {
      display: none !important;
    }
  }

  @media (min-width: 600px) and (max-width: 959.98px) {
    .hidden-sm {
      display: none !important;
    }
  }

  @media (min-width: 960px) and (max-width: 1279.98px) {
    .hidden-md {
      display: none !important;
    }
  }

  @media (min-width: 1280px) and (max-width: 1919.98px) {
    .hidden-lg {
      display: none !important;
    }
  }

  @media (min-width: 1920px) and (max-width: 2559.98px) {
    .hidden-xl {
      display: none !important;
    }
  }

  @media (min-width: 2560px) {
    .hidden-xxl {
      display: none !important;
    }
  }

  @media (min-width: 600px) {
    .hidden-sm-and-up {
      display: none !important;
    }
  }

  @media (min-width: 960px) {
    .hidden-md-and-up {
      display: none !important;
    }
  }

  @media (min-width: 1280px) {
    .hidden-lg-and-up {
      display: none !important;
    }
  }

  @media (min-width: 1920px) {
    .hidden-xl-and-up {
      display: none !important;
    }
  }

  @media (max-width: 959.98px) {
    .hidden-sm-and-down {
      display: none !important;
    }
  }

  @media (max-width: 1279.98px) {
    .hidden-md-and-down {
      display: none !important;
    }
  }

  @media (max-width: 1919.98px) {
    .hidden-lg-and-down {
      display: none !important;
    }
  }

  @media (max-width: 2559.98px) {
    .hidden-xl-and-down {
      display: none !important;
    }
  }

  .d-sr-only,
  .d-sr-only-focusable:not(:focus) {
    border: 0 !important;
    clip: rect(0, 0, 0, 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
  }

  .overflow-auto {
    overflow: auto !important;
  }

  .overflow-hidden {
    overflow: hidden !important;
  }

  .overflow-visible {
    overflow: visible !important;
  }

  .overflow-x-auto {
    overflow-x: auto !important;
  }

  .overflow-x-hidden {
    overflow-x: hidden !important;
  }

  .overflow-y-auto {
    overflow-y: auto !important;
  }

  .overflow-y-hidden {
    overflow-y: hidden !important;
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  .float-none {
    float: none !important;
  }

  .float-left {
    float: left !important;
  }

  .float-right {
    float: right !important;
  }

  .v-locale--is-rtl .float-end {
    float: left !important;
  }

  .v-locale--is-rtl .float-start {
    float: right !important;
  }

  .v-locale--is-ltr .float-end {
    float: right !important;
  }

  .v-locale--is-ltr .float-start {
    float: left !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .justify-start {
    justify-content: flex-start !important;
  }

  .justify-end {
    justify-content: flex-end !important;
  }

  .justify-center {
    justify-content: center !important;
  }

  .justify-space-between {
    justify-content: space-between !important;
  }

  .justify-space-around {
    justify-content: space-around !important;
  }

  .justify-space-evenly {
    justify-content: space-evenly !important;
  }

  .align-start {
    align-items: flex-start !important;
  }

  .align-end {
    align-items: flex-end !important;
  }

  .align-center {
    align-items: center !important;
  }

  .align-baseline {
    align-items: baseline !important;
  }

  .align-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-space-between {
    align-content: space-between !important;
  }

  .align-content-space-around {
    align-content: space-around !important;
  }

  .align-content-space-evenly {
    align-content: space-evenly !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  .order-first {
    order: -1 !important;
  }

  .order-0 {
    order: 0 !important;
  }

  .order-1 {
    order: 1 !important;
  }

  .order-2 {
    order: 2 !important;
  }

  .order-3 {
    order: 3 !important;
  }

  .order-4 {
    order: 4 !important;
  }

  .order-5 {
    order: 5 !important;
  }

  .order-6 {
    order: 6 !important;
  }

  .order-7 {
    order: 7 !important;
  }

  .order-8 {
    order: 8 !important;
  }

  .order-9 {
    order: 9 !important;
  }

  .order-10 {
    order: 10 !important;
  }

  .order-11 {
    order: 11 !important;
  }

  .order-12 {
    order: 12 !important;
  }

  .order-last {
    order: 13 !important;
  }

  .ma-0 {
    margin: 0px !important;
  }

  .ma-1 {
    margin: 4px !important;
  }

  .ma-2 {
    margin: 8px !important;
  }

  .ma-3 {
    margin: 12px !important;
  }

  .ma-4 {
    margin: 16px !important;
  }

  .ma-5 {
    margin: 20px !important;
  }

  .ma-6 {
    margin: 24px !important;
  }

  .ma-7 {
    margin: 28px !important;
  }

  .ma-8 {
    margin: 32px !important;
  }

  .ma-9 {
    margin: 36px !important;
  }

  .ma-10 {
    margin: 40px !important;
  }

  .ma-11 {
    margin: 44px !important;
  }

  .ma-12 {
    margin: 48px !important;
  }

  .ma-13 {
    margin: 52px !important;
  }

  .ma-14 {
    margin: 56px !important;
  }

  .ma-15 {
    margin: 60px !important;
  }

  .ma-16 {
    margin: 64px !important;
  }

  .ma-auto {
    margin: auto !important;
  }

  .mx-0 {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  .mx-1 {
    margin-right: 4px !important;
    margin-left: 4px !important;
  }

  .mx-2 {
    margin-right: 8px !important;
    margin-left: 8px !important;
  }

  .mx-3 {
    margin-right: 12px !important;
    margin-left: 12px !important;
  }

  .mx-4 {
    margin-right: 16px !important;
    margin-left: 16px !important;
  }

  .mx-5 {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }

  .mx-6 {
    margin-right: 24px !important;
    margin-left: 24px !important;
  }

  .mx-7 {
    margin-right: 28px !important;
    margin-left: 28px !important;
  }

  .mx-8 {
    margin-right: 32px !important;
    margin-left: 32px !important;
  }

  .mx-9 {
    margin-right: 36px !important;
    margin-left: 36px !important;
  }

  .mx-10 {
    margin-right: 40px !important;
    margin-left: 40px !important;
  }

  .mx-11 {
    margin-right: 44px !important;
    margin-left: 44px !important;
  }

  .mx-12 {
    margin-right: 48px !important;
    margin-left: 48px !important;
  }

  .mx-13 {
    margin-right: 52px !important;
    margin-left: 52px !important;
  }

  .mx-14 {
    margin-right: 56px !important;
    margin-left: 56px !important;
  }

  .mx-15 {
    margin-right: 60px !important;
    margin-left: 60px !important;
  }

  .mx-16 {
    margin-right: 64px !important;
    margin-left: 64px !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-0 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  .my-1 {
    margin-top: 4px !important;
    margin-bottom: 4px !important;
  }

  .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .my-3 {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
  }

  .my-4 {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
  }

  .my-5 {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }

  .my-6 {
    margin-top: 24px !important;
    margin-bottom: 24px !important;
  }

  .my-7 {
    margin-top: 28px !important;
    margin-bottom: 28px !important;
  }

  .my-8 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }

  .my-9 {
    margin-top: 36px !important;
    margin-bottom: 36px !important;
  }

  .my-10 {
    margin-top: 40px !important;
    margin-bottom: 40px !important;
  }

  .my-11 {
    margin-top: 44px !important;
    margin-bottom: 44px !important;
  }

  .my-12 {
    margin-top: 48px !important;
    margin-bottom: 48px !important;
  }

  .my-13 {
    margin-top: 52px !important;
    margin-bottom: 52px !important;
  }

  .my-14 {
    margin-top: 56px !important;
    margin-bottom: 56px !important;
  }

  .my-15 {
    margin-top: 60px !important;
    margin-bottom: 60px !important;
  }

  .my-16 {
    margin-top: 64px !important;
    margin-bottom: 64px !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-0 {
    margin-top: 0px !important;
  }

  .mt-1 {
    margin-top: 4px !important;
  }

  .mt-2 {
    margin-top: 8px !important;
  }

  .mt-3 {
    margin-top: 12px !important;
  }

  .mt-4 {
    margin-top: 16px !important;
  }

  .mt-5 {
    margin-top: 20px !important;
  }

  .mt-6 {
    margin-top: 24px !important;
  }

  .mt-7 {
    margin-top: 28px !important;
  }

  .mt-8 {
    margin-top: 32px !important;
  }

  .mt-9 {
    margin-top: 36px !important;
  }

  .mt-10 {
    margin-top: 40px !important;
  }

  .mt-11 {
    margin-top: 44px !important;
  }

  .mt-12 {
    margin-top: 48px !important;
  }

  .mt-13 {
    margin-top: 52px !important;
  }

  .mt-14 {
    margin-top: 56px !important;
  }

  .mt-15 {
    margin-top: 60px !important;
  }

  .mt-16 {
    margin-top: 64px !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .mr-0 {
    margin-right: 0px !important;
  }

  .mr-1 {
    margin-right: 4px !important;
  }

  .mr-2 {
    margin-right: 8px !important;
  }

  .mr-3 {
    margin-right: 12px !important;
  }

  .mr-4 {
    margin-right: 16px !important;
  }

  .mr-5 {
    margin-right: 20px !important;
  }

  .mr-6 {
    margin-right: 24px !important;
  }

  .mr-7 {
    margin-right: 28px !important;
  }

  .mr-8 {
    margin-right: 32px !important;
  }

  .mr-9 {
    margin-right: 36px !important;
  }

  .mr-10 {
    margin-right: 40px !important;
  }

  .mr-11 {
    margin-right: 44px !important;
  }

  .mr-12 {
    margin-right: 48px !important;
  }

  .mr-13 {
    margin-right: 52px !important;
  }

  .mr-14 {
    margin-right: 56px !important;
  }

  .mr-15 {
    margin-right: 60px !important;
  }

  .mr-16 {
    margin-right: 64px !important;
  }

  .mr-auto {
    margin-right: auto !important;
  }

  .mb-0 {
    margin-bottom: 0px !important;
  }

  .mb-1 {
    margin-bottom: 4px !important;
  }

  .mb-2 {
    margin-bottom: 8px !important;
  }

  .mb-3 {
    margin-bottom: 12px !important;
  }

  .mb-4 {
    margin-bottom: 16px !important;
  }

  .mb-5 {
    margin-bottom: 20px !important;
  }

  .mb-6 {
    margin-bottom: 24px !important;
  }

  .mb-7 {
    margin-bottom: 28px !important;
  }

  .mb-8 {
    margin-bottom: 32px !important;
  }

  .mb-9 {
    margin-bottom: 36px !important;
  }

  .mb-10 {
    margin-bottom: 40px !important;
  }

  .mb-11 {
    margin-bottom: 44px !important;
  }

  .mb-12 {
    margin-bottom: 48px !important;
  }

  .mb-13 {
    margin-bottom: 52px !important;
  }

  .mb-14 {
    margin-bottom: 56px !important;
  }

  .mb-15 {
    margin-bottom: 60px !important;
  }

  .mb-16 {
    margin-bottom: 64px !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ml-0 {
    margin-left: 0px !important;
  }

  .ml-1 {
    margin-left: 4px !important;
  }

  .ml-2 {
    margin-left: 8px !important;
  }

  .ml-3 {
    margin-left: 12px !important;
  }

  .ml-4 {
    margin-left: 16px !important;
  }

  .ml-5 {
    margin-left: 20px !important;
  }

  .ml-6 {
    margin-left: 24px !important;
  }

  .ml-7 {
    margin-left: 28px !important;
  }

  .ml-8 {
    margin-left: 32px !important;
  }

  .ml-9 {
    margin-left: 36px !important;
  }

  .ml-10 {
    margin-left: 40px !important;
  }

  .ml-11 {
    margin-left: 44px !important;
  }

  .ml-12 {
    margin-left: 48px !important;
  }

  .ml-13 {
    margin-left: 52px !important;
  }

  .ml-14 {
    margin-left: 56px !important;
  }

  .ml-15 {
    margin-left: 60px !important;
  }

  .ml-16 {
    margin-left: 64px !important;
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .ms-0 {
    margin-inline-start: 0px !important;
  }

  .ms-1 {
    margin-inline-start: 4px !important;
  }

  .ms-2 {
    margin-inline-start: 8px !important;
  }

  .ms-3 {
    margin-inline-start: 12px !important;
  }

  .ms-4 {
    margin-inline-start: 16px !important;
  }

  .ms-5 {
    margin-inline-start: 20px !important;
  }

  .ms-6 {
    margin-inline-start: 24px !important;
  }

  .ms-7 {
    margin-inline-start: 28px !important;
  }

  .ms-8 {
    margin-inline-start: 32px !important;
  }

  .ms-9 {
    margin-inline-start: 36px !important;
  }

  .ms-10 {
    margin-inline-start: 40px !important;
  }

  .ms-11 {
    margin-inline-start: 44px !important;
  }

  .ms-12 {
    margin-inline-start: 48px !important;
  }

  .ms-13 {
    margin-inline-start: 52px !important;
  }

  .ms-14 {
    margin-inline-start: 56px !important;
  }

  .ms-15 {
    margin-inline-start: 60px !important;
  }

  .ms-16 {
    margin-inline-start: 64px !important;
  }

  .ms-auto {
    margin-inline-start: auto !important;
  }

  .me-0 {
    margin-inline-end: 0px !important;
  }

  .me-1 {
    margin-inline-end: 4px !important;
  }

  .me-2 {
    margin-inline-end: 8px !important;
  }

  .me-3 {
    margin-inline-end: 12px !important;
  }

  .me-4 {
    margin-inline-end: 16px !important;
  }

  .me-5 {
    margin-inline-end: 20px !important;
  }

  .me-6 {
    margin-inline-end: 24px !important;
  }

  .me-7 {
    margin-inline-end: 28px !important;
  }

  .me-8 {
    margin-inline-end: 32px !important;
  }

  .me-9 {
    margin-inline-end: 36px !important;
  }

  .me-10 {
    margin-inline-end: 40px !important;
  }

  .me-11 {
    margin-inline-end: 44px !important;
  }

  .me-12 {
    margin-inline-end: 48px !important;
  }

  .me-13 {
    margin-inline-end: 52px !important;
  }

  .me-14 {
    margin-inline-end: 56px !important;
  }

  .me-15 {
    margin-inline-end: 60px !important;
  }

  .me-16 {
    margin-inline-end: 64px !important;
  }

  .me-auto {
    margin-inline-end: auto !important;
  }

  .ma-n1 {
    margin: -4px !important;
  }

  .ma-n2 {
    margin: -8px !important;
  }

  .ma-n3 {
    margin: -12px !important;
  }

  .ma-n4 {
    margin: -16px !important;
  }

  .ma-n5 {
    margin: -20px !important;
  }

  .ma-n6 {
    margin: -24px !important;
  }

  .ma-n7 {
    margin: -28px !important;
  }

  .ma-n8 {
    margin: -32px !important;
  }

  .ma-n9 {
    margin: -36px !important;
  }

  .ma-n10 {
    margin: -40px !important;
  }

  .ma-n11 {
    margin: -44px !important;
  }

  .ma-n12 {
    margin: -48px !important;
  }

  .ma-n13 {
    margin: -52px !important;
  }

  .ma-n14 {
    margin: -56px !important;
  }

  .ma-n15 {
    margin: -60px !important;
  }

  .ma-n16 {
    margin: -64px !important;
  }

  .mx-n1 {
    margin-right: -4px !important;
    margin-left: -4px !important;
  }

  .mx-n2 {
    margin-right: -8px !important;
    margin-left: -8px !important;
  }

  .mx-n3 {
    margin-right: -12px !important;
    margin-left: -12px !important;
  }

  .mx-n4 {
    margin-right: -16px !important;
    margin-left: -16px !important;
  }

  .mx-n5 {
    margin-right: -20px !important;
    margin-left: -20px !important;
  }

  .mx-n6 {
    margin-right: -24px !important;
    margin-left: -24px !important;
  }

  .mx-n7 {
    margin-right: -28px !important;
    margin-left: -28px !important;
  }

  .mx-n8 {
    margin-right: -32px !important;
    margin-left: -32px !important;
  }

  .mx-n9 {
    margin-right: -36px !important;
    margin-left: -36px !important;
  }

  .mx-n10 {
    margin-right: -40px !important;
    margin-left: -40px !important;
  }

  .mx-n11 {
    margin-right: -44px !important;
    margin-left: -44px !important;
  }

  .mx-n12 {
    margin-right: -48px !important;
    margin-left: -48px !important;
  }

  .mx-n13 {
    margin-right: -52px !important;
    margin-left: -52px !important;
  }

  .mx-n14 {
    margin-right: -56px !important;
    margin-left: -56px !important;
  }

  .mx-n15 {
    margin-right: -60px !important;
    margin-left: -60px !important;
  }

  .mx-n16 {
    margin-right: -64px !important;
    margin-left: -64px !important;
  }

  .my-n1 {
    margin-top: -4px !important;
    margin-bottom: -4px !important;
  }

  .my-n2 {
    margin-top: -8px !important;
    margin-bottom: -8px !important;
  }

  .my-n3 {
    margin-top: -12px !important;
    margin-bottom: -12px !important;
  }

  .my-n4 {
    margin-top: -16px !important;
    margin-bottom: -16px !important;
  }

  .my-n5 {
    margin-top: -20px !important;
    margin-bottom: -20px !important;
  }

  .my-n6 {
    margin-top: -24px !important;
    margin-bottom: -24px !important;
  }

  .my-n7 {
    margin-top: -28px !important;
    margin-bottom: -28px !important;
  }

  .my-n8 {
    margin-top: -32px !important;
    margin-bottom: -32px !important;
  }

  .my-n9 {
    margin-top: -36px !important;
    margin-bottom: -36px !important;
  }

  .my-n10 {
    margin-top: -40px !important;
    margin-bottom: -40px !important;
  }

  .my-n11 {
    margin-top: -44px !important;
    margin-bottom: -44px !important;
  }

  .my-n12 {
    margin-top: -48px !important;
    margin-bottom: -48px !important;
  }

  .my-n13 {
    margin-top: -52px !important;
    margin-bottom: -52px !important;
  }

  .my-n14 {
    margin-top: -56px !important;
    margin-bottom: -56px !important;
  }

  .my-n15 {
    margin-top: -60px !important;
    margin-bottom: -60px !important;
  }

  .my-n16 {
    margin-top: -64px !important;
    margin-bottom: -64px !important;
  }

  .mt-n1 {
    margin-top: -4px !important;
  }

  .mt-n2 {
    margin-top: -8px !important;
  }

  .mt-n3 {
    margin-top: -12px !important;
  }

  .mt-n4 {
    margin-top: -16px !important;
  }

  .mt-n5 {
    margin-top: -20px !important;
  }

  .mt-n6 {
    margin-top: -24px !important;
  }

  .mt-n7 {
    margin-top: -28px !important;
  }

  .mt-n8 {
    margin-top: -32px !important;
  }

  .mt-n9 {
    margin-top: -36px !important;
  }

  .mt-n10 {
    margin-top: -40px !important;
  }

  .mt-n11 {
    margin-top: -44px !important;
  }

  .mt-n12 {
    margin-top: -48px !important;
  }

  .mt-n13 {
    margin-top: -52px !important;
  }

  .mt-n14 {
    margin-top: -56px !important;
  }

  .mt-n15 {
    margin-top: -60px !important;
  }

  .mt-n16 {
    margin-top: -64px !important;
  }

  .mr-n1 {
    margin-right: -4px !important;
  }

  .mr-n2 {
    margin-right: -8px !important;
  }

  .mr-n3 {
    margin-right: -12px !important;
  }

  .mr-n4 {
    margin-right: -16px !important;
  }

  .mr-n5 {
    margin-right: -20px !important;
  }

  .mr-n6 {
    margin-right: -24px !important;
  }

  .mr-n7 {
    margin-right: -28px !important;
  }

  .mr-n8 {
    margin-right: -32px !important;
  }

  .mr-n9 {
    margin-right: -36px !important;
  }

  .mr-n10 {
    margin-right: -40px !important;
  }

  .mr-n11 {
    margin-right: -44px !important;
  }

  .mr-n12 {
    margin-right: -48px !important;
  }

  .mr-n13 {
    margin-right: -52px !important;
  }

  .mr-n14 {
    margin-right: -56px !important;
  }

  .mr-n15 {
    margin-right: -60px !important;
  }

  .mr-n16 {
    margin-right: -64px !important;
  }

  .mb-n1 {
    margin-bottom: -4px !important;
  }

  .mb-n2 {
    margin-bottom: -8px !important;
  }

  .mb-n3 {
    margin-bottom: -12px !important;
  }

  .mb-n4 {
    margin-bottom: -16px !important;
  }

  .mb-n5 {
    margin-bottom: -20px !important;
  }

  .mb-n6 {
    margin-bottom: -24px !important;
  }

  .mb-n7 {
    margin-bottom: -28px !important;
  }

  .mb-n8 {
    margin-bottom: -32px !important;
  }

  .mb-n9 {
    margin-bottom: -36px !important;
  }

  .mb-n10 {
    margin-bottom: -40px !important;
  }

  .mb-n11 {
    margin-bottom: -44px !important;
  }

  .mb-n12 {
    margin-bottom: -48px !important;
  }

  .mb-n13 {
    margin-bottom: -52px !important;
  }

  .mb-n14 {
    margin-bottom: -56px !important;
  }

  .mb-n15 {
    margin-bottom: -60px !important;
  }

  .mb-n16 {
    margin-bottom: -64px !important;
  }

  .ml-n1 {
    margin-left: -4px !important;
  }

  .ml-n2 {
    margin-left: -8px !important;
  }

  .ml-n3 {
    margin-left: -12px !important;
  }

  .ml-n4 {
    margin-left: -16px !important;
  }

  .ml-n5 {
    margin-left: -20px !important;
  }

  .ml-n6 {
    margin-left: -24px !important;
  }

  .ml-n7 {
    margin-left: -28px !important;
  }

  .ml-n8 {
    margin-left: -32px !important;
  }

  .ml-n9 {
    margin-left: -36px !important;
  }

  .ml-n10 {
    margin-left: -40px !important;
  }

  .ml-n11 {
    margin-left: -44px !important;
  }

  .ml-n12 {
    margin-left: -48px !important;
  }

  .ml-n13 {
    margin-left: -52px !important;
  }

  .ml-n14 {
    margin-left: -56px !important;
  }

  .ml-n15 {
    margin-left: -60px !important;
  }

  .ml-n16 {
    margin-left: -64px !important;
  }

  .ms-n1 {
    margin-inline-start: -4px !important;
  }

  .ms-n2 {
    margin-inline-start: -8px !important;
  }

  .ms-n3 {
    margin-inline-start: -12px !important;
  }

  .ms-n4 {
    margin-inline-start: -16px !important;
  }

  .ms-n5 {
    margin-inline-start: -20px !important;
  }

  .ms-n6 {
    margin-inline-start: -24px !important;
  }

  .ms-n7 {
    margin-inline-start: -28px !important;
  }

  .ms-n8 {
    margin-inline-start: -32px !important;
  }

  .ms-n9 {
    margin-inline-start: -36px !important;
  }

  .ms-n10 {
    margin-inline-start: -40px !important;
  }

  .ms-n11 {
    margin-inline-start: -44px !important;
  }

  .ms-n12 {
    margin-inline-start: -48px !important;
  }

  .ms-n13 {
    margin-inline-start: -52px !important;
  }

  .ms-n14 {
    margin-inline-start: -56px !important;
  }

  .ms-n15 {
    margin-inline-start: -60px !important;
  }

  .ms-n16 {
    margin-inline-start: -64px !important;
  }

  .me-n1 {
    margin-inline-end: -4px !important;
  }

  .me-n2 {
    margin-inline-end: -8px !important;
  }

  .me-n3 {
    margin-inline-end: -12px !important;
  }

  .me-n4 {
    margin-inline-end: -16px !important;
  }

  .me-n5 {
    margin-inline-end: -20px !important;
  }

  .me-n6 {
    margin-inline-end: -24px !important;
  }

  .me-n7 {
    margin-inline-end: -28px !important;
  }

  .me-n8 {
    margin-inline-end: -32px !important;
  }

  .me-n9 {
    margin-inline-end: -36px !important;
  }

  .me-n10 {
    margin-inline-end: -40px !important;
  }

  .me-n11 {
    margin-inline-end: -44px !important;
  }

  .me-n12 {
    margin-inline-end: -48px !important;
  }

  .me-n13 {
    margin-inline-end: -52px !important;
  }

  .me-n14 {
    margin-inline-end: -56px !important;
  }

  .me-n15 {
    margin-inline-end: -60px !important;
  }

  .me-n16 {
    margin-inline-end: -64px !important;
  }

  .pa-0 {
    padding: 0px !important;
  }

  .pa-1 {
    padding: 4px !important;
  }

  .pa-2 {
    padding: 8px !important;
  }

  .pa-3 {
    padding: 12px !important;
  }

  .pa-4 {
    padding: 16px !important;
  }

  .pa-5 {
    padding: 20px !important;
  }

  .pa-6 {
    padding: 24px !important;
  }

  .pa-7 {
    padding: 28px !important;
  }

  .pa-8 {
    padding: 32px !important;
  }

  .pa-9 {
    padding: 36px !important;
  }

  .pa-10 {
    padding: 40px !important;
  }

  .pa-11 {
    padding: 44px !important;
  }

  .pa-12 {
    padding: 48px !important;
  }

  .pa-13 {
    padding: 52px !important;
  }

  .pa-14 {
    padding: 56px !important;
  }

  .pa-15 {
    padding: 60px !important;
  }

  .pa-16 {
    padding: 64px !important;
  }

  .px-0 {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }

  .px-1 {
    padding-right: 4px !important;
    padding-left: 4px !important;
  }

  .px-2 {
    padding-right: 8px !important;
    padding-left: 8px !important;
  }

  .px-3 {
    padding-right: 12px !important;
    padding-left: 12px !important;
  }

  .px-4 {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .px-5 {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }

  .px-6 {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }

  .px-7 {
    padding-right: 28px !important;
    padding-left: 28px !important;
  }

  .px-8 {
    padding-right: 32px !important;
    padding-left: 32px !important;
  }

  .px-9 {
    padding-right: 36px !important;
    padding-left: 36px !important;
  }

  .px-10 {
    padding-right: 40px !important;
    padding-left: 40px !important;
  }

  .px-11 {
    padding-right: 44px !important;
    padding-left: 44px !important;
  }

  .px-12 {
    padding-right: 48px !important;
    padding-left: 48px !important;
  }

  .px-13 {
    padding-right: 52px !important;
    padding-left: 52px !important;
  }

  .px-14 {
    padding-right: 56px !important;
    padding-left: 56px !important;
  }

  .px-15 {
    padding-right: 60px !important;
    padding-left: 60px !important;
  }

  .px-16 {
    padding-right: 64px !important;
    padding-left: 64px !important;
  }

  .py-0 {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }

  .py-1 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .py-3 {
    padding-top: 12px !important;
    padding-bottom: 12px !important;
  }

  .py-4 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }

  .py-5 {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }

  .py-6 {
    padding-top: 24px !important;
    padding-bottom: 24px !important;
  }

  .py-7 {
    padding-top: 28px !important;
    padding-bottom: 28px !important;
  }

  .py-8 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }

  .py-9 {
    padding-top: 36px !important;
    padding-bottom: 36px !important;
  }

  .py-10 {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .py-11 {
    padding-top: 44px !important;
    padding-bottom: 44px !important;
  }

  .py-12 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  .py-13 {
    padding-top: 52px !important;
    padding-bottom: 52px !important;
  }

  .py-14 {
    padding-top: 56px !important;
    padding-bottom: 56px !important;
  }

  .py-15 {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  .py-16 {
    padding-top: 64px !important;
    padding-bottom: 64px !important;
  }

  .pt-0 {
    padding-top: 0px !important;
  }

  .pt-1 {
    padding-top: 4px !important;
  }

  .pt-2 {
    padding-top: 8px !important;
  }

  .pt-3 {
    padding-top: 12px !important;
  }

  .pt-4 {
    padding-top: 16px !important;
  }

  .pt-5 {
    padding-top: 20px !important;
  }

  .pt-6 {
    padding-top: 24px !important;
  }

  .pt-7 {
    padding-top: 28px !important;
  }

  .pt-8 {
    padding-top: 32px !important;
  }

  .pt-9 {
    padding-top: 36px !important;
  }

  .pt-10 {
    padding-top: 40px !important;
  }

  .pt-11 {
    padding-top: 44px !important;
  }

  .pt-12 {
    padding-top: 48px !important;
  }

  .pt-13 {
    padding-top: 52px !important;
  }

  .pt-14 {
    padding-top: 56px !important;
  }

  .pt-15 {
    padding-top: 60px !important;
  }

  .pt-16 {
    padding-top: 64px !important;
  }

  .pr-0 {
    padding-right: 0px !important;
  }

  .pr-1 {
    padding-right: 4px !important;
  }

  .pr-2 {
    padding-right: 8px !important;
  }

  .pr-3 {
    padding-right: 12px !important;
  }

  .pr-4 {
    padding-right: 16px !important;
  }

  .pr-5 {
    padding-right: 20px !important;
  }

  .pr-6 {
    padding-right: 24px !important;
  }

  .pr-7 {
    padding-right: 28px !important;
  }

  .pr-8 {
    padding-right: 32px !important;
  }

  .pr-9 {
    padding-right: 36px !important;
  }

  .pr-10 {
    padding-right: 40px !important;
  }

  .pr-11 {
    padding-right: 44px !important;
  }

  .pr-12 {
    padding-right: 48px !important;
  }

  .pr-13 {
    padding-right: 52px !important;
  }

  .pr-14 {
    padding-right: 56px !important;
  }

  .pr-15 {
    padding-right: 60px !important;
  }

  .pr-16 {
    padding-right: 64px !important;
  }

  .pb-0 {
    padding-bottom: 0px !important;
  }

  .pb-1 {
    padding-bottom: 4px !important;
  }

  .pb-2 {
    padding-bottom: 8px !important;
  }

  .pb-3 {
    padding-bottom: 12px !important;
  }

  .pb-4 {
    padding-bottom: 16px !important;
  }

  .pb-5 {
    padding-bottom: 20px !important;
  }

  .pb-6 {
    padding-bottom: 24px !important;
  }

  .pb-7 {
    padding-bottom: 28px !important;
  }

  .pb-8 {
    padding-bottom: 32px !important;
  }

  .pb-9 {
    padding-bottom: 36px !important;
  }

  .pb-10 {
    padding-bottom: 40px !important;
  }

  .pb-11 {
    padding-bottom: 44px !important;
  }

  .pb-12 {
    padding-bottom: 48px !important;
  }

  .pb-13 {
    padding-bottom: 52px !important;
  }

  .pb-14 {
    padding-bottom: 56px !important;
  }

  .pb-15 {
    padding-bottom: 60px !important;
  }

  .pb-16 {
    padding-bottom: 64px !important;
  }

  .pl-0 {
    padding-left: 0px !important;
  }

  .pl-1 {
    padding-left: 4px !important;
  }

  .pl-2 {
    padding-left: 8px !important;
  }

  .pl-3 {
    padding-left: 12px !important;
  }

  .pl-4 {
    padding-left: 16px !important;
  }

  .pl-5 {
    padding-left: 20px !important;
  }

  .pl-6 {
    padding-left: 24px !important;
  }

  .pl-7 {
    padding-left: 28px !important;
  }

  .pl-8 {
    padding-left: 32px !important;
  }

  .pl-9 {
    padding-left: 36px !important;
  }

  .pl-10 {
    padding-left: 40px !important;
  }

  .pl-11 {
    padding-left: 44px !important;
  }

  .pl-12 {
    padding-left: 48px !important;
  }

  .pl-13 {
    padding-left: 52px !important;
  }

  .pl-14 {
    padding-left: 56px !important;
  }

  .pl-15 {
    padding-left: 60px !important;
  }

  .pl-16 {
    padding-left: 64px !important;
  }

  .ps-0 {
    padding-inline-start: 0px !important;
  }

  .ps-1 {
    padding-inline-start: 4px !important;
  }

  .ps-2 {
    padding-inline-start: 8px !important;
  }

  .ps-3 {
    padding-inline-start: 12px !important;
  }

  .ps-4 {
    padding-inline-start: 16px !important;
  }

  .ps-5 {
    padding-inline-start: 20px !important;
  }

  .ps-6 {
    padding-inline-start: 24px !important;
  }

  .ps-7 {
    padding-inline-start: 28px !important;
  }

  .ps-8 {
    padding-inline-start: 32px !important;
  }

  .ps-9 {
    padding-inline-start: 36px !important;
  }

  .ps-10 {
    padding-inline-start: 40px !important;
  }

  .ps-11 {
    padding-inline-start: 44px !important;
  }

  .ps-12 {
    padding-inline-start: 48px !important;
  }

  .ps-13 {
    padding-inline-start: 52px !important;
  }

  .ps-14 {
    padding-inline-start: 56px !important;
  }

  .ps-15 {
    padding-inline-start: 60px !important;
  }

  .ps-16 {
    padding-inline-start: 64px !important;
  }

  .pe-0 {
    padding-inline-end: 0px !important;
  }

  .pe-1 {
    padding-inline-end: 4px !important;
  }

  .pe-2 {
    padding-inline-end: 8px !important;
  }

  .pe-3 {
    padding-inline-end: 12px !important;
  }

  .pe-4 {
    padding-inline-end: 16px !important;
  }

  .pe-5 {
    padding-inline-end: 20px !important;
  }

  .pe-6 {
    padding-inline-end: 24px !important;
  }

  .pe-7 {
    padding-inline-end: 28px !important;
  }

  .pe-8 {
    padding-inline-end: 32px !important;
  }

  .pe-9 {
    padding-inline-end: 36px !important;
  }

  .pe-10 {
    padding-inline-end: 40px !important;
  }

  .pe-11 {
    padding-inline-end: 44px !important;
  }

  .pe-12 {
    padding-inline-end: 48px !important;
  }

  .pe-13 {
    padding-inline-end: 52px !important;
  }

  .pe-14 {
    padding-inline-end: 56px !important;
  }

  .pe-15 {
    padding-inline-end: 60px !important;
  }

  .pe-16 {
    padding-inline-end: 64px !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .rounded-sm {
    border-radius: 3px !important;
  }

  .rounded {
    border-radius: 6px !important;
  }

  .rounded-lg {
    border-radius: 12px !important;
  }

  .rounded-xl {
    border-radius: 36px !important;
  }

  .rounded-pill {
    border-radius: 9999px !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-shaped {
    border-radius: 36px 0 !important;
  }

  .rounded-t-0 {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .rounded-t-sm {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
  }

  .rounded-t {
    border-top-left-radius: 6px !important;
    border-top-right-radius: 6px !important;
  }

  .rounded-t-lg {
    border-top-left-radius: 12px !important;
    border-top-right-radius: 12px !important;
  }

  .rounded-t-xl {
    border-top-left-radius: 36px !important;
    border-top-right-radius: 36px !important;
  }

  .rounded-t-pill {
    border-top-left-radius: 9999px !important;
    border-top-right-radius: 9999px !important;
  }

  .rounded-t-circle {
    border-top-left-radius: 50% !important;
    border-top-right-radius: 50% !important;
  }

  .rounded-t-shaped {
    border-top-left-radius: 36px !important;
    border-top-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-e-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-e-0 {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-e-sm {
    border-top-right-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-e-sm {
    border-top-left-radius: 3px !important;
    border-bottom-left-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-e {
    border-top-right-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-e {
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-e-lg {
    border-top-right-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-e-lg {
    border-top-left-radius: 12px !important;
    border-bottom-left-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-e-xl {
    border-top-right-radius: 36px !important;
    border-bottom-right-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-e-xl {
    border-top-left-radius: 36px !important;
    border-bottom-left-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-e-pill {
    border-top-right-radius: 9999px !important;
    border-bottom-right-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-e-pill {
    border-top-left-radius: 9999px !important;
    border-bottom-left-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-e-circle {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-e-circle {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-e-shaped {
    border-top-right-radius: 36px !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-e-shaped {
    border-top-left-radius: 36px !important;
    border-bottom-left-radius: 0 !important;
  }

  .rounded-b-0 {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .rounded-b-sm {
    border-bottom-left-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
  }

  .rounded-b {
    border-bottom-left-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
  }

  .rounded-b-lg {
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
  }

  .rounded-b-xl {
    border-bottom-left-radius: 36px !important;
    border-bottom-right-radius: 36px !important;
  }

  .rounded-b-pill {
    border-bottom-left-radius: 9999px !important;
    border-bottom-right-radius: 9999px !important;
  }

  .rounded-b-circle {
    border-bottom-left-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }

  .rounded-b-shaped {
    border-bottom-left-radius: 36px !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-s-0 {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-s-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-s-sm {
    border-top-left-radius: 3px !important;
    border-bottom-left-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-s-sm {
    border-top-right-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-s {
    border-top-left-radius: 6px !important;
    border-bottom-left-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-s {
    border-top-right-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-s-lg {
    border-top-left-radius: 12px !important;
    border-bottom-left-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-s-lg {
    border-top-right-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-s-xl {
    border-top-left-radius: 36px !important;
    border-bottom-left-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-s-xl {
    border-top-right-radius: 36px !important;
    border-bottom-right-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-s-pill {
    border-top-left-radius: 9999px !important;
    border-bottom-left-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-s-pill {
    border-top-right-radius: 9999px !important;
    border-bottom-right-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-s-circle {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-s-circle {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-s-shaped {
    border-top-left-radius: 36px !important;
    border-bottom-left-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-s-shaped {
    border-top-right-radius: 36px !important;
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-ts-0 {
    border-top-left-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-ts-0 {
    border-top-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-ts-sm {
    border-top-left-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-ts-sm {
    border-top-right-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-ts {
    border-top-left-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-ts {
    border-top-right-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-ts-lg {
    border-top-left-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-ts-lg {
    border-top-right-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-ts-xl {
    border-top-left-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-ts-xl {
    border-top-right-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-ts-pill {
    border-top-left-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-ts-pill {
    border-top-right-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-ts-circle {
    border-top-left-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-ts-circle {
    border-top-right-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-ts-shaped {
    border-top-left-radius: 36px 0 !important;
  }

  .v-locale--is-rtl .rounded-ts-shaped {
    border-top-right-radius: 36px 0 !important;
  }

  .v-locale--is-ltr .rounded-te-0 {
    border-top-right-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-te-0 {
    border-top-left-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-te-sm {
    border-top-right-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-te-sm {
    border-top-left-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-te {
    border-top-right-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-te {
    border-top-left-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-te-lg {
    border-top-right-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-te-lg {
    border-top-left-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-te-xl {
    border-top-right-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-te-xl {
    border-top-left-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-te-pill {
    border-top-right-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-te-pill {
    border-top-left-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-te-circle {
    border-top-right-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-te-circle {
    border-top-left-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-te-shaped {
    border-top-right-radius: 36px 0 !important;
  }

  .v-locale--is-rtl .rounded-te-shaped {
    border-top-left-radius: 36px 0 !important;
  }

  .v-locale--is-ltr .rounded-be-0 {
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-be-0 {
    border-bottom-left-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-be-sm {
    border-bottom-right-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-be-sm {
    border-bottom-left-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-be {
    border-bottom-right-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-be {
    border-bottom-left-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-be-lg {
    border-bottom-right-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-be-lg {
    border-bottom-left-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-be-xl {
    border-bottom-right-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-be-xl {
    border-bottom-left-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-be-pill {
    border-bottom-right-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-be-pill {
    border-bottom-left-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-be-circle {
    border-bottom-right-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-be-circle {
    border-bottom-left-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-be-shaped {
    border-bottom-right-radius: 36px 0 !important;
  }

  .v-locale--is-rtl .rounded-be-shaped {
    border-bottom-left-radius: 36px 0 !important;
  }

  .v-locale--is-ltr .rounded-bs-0 {
    border-bottom-left-radius: 0 !important;
  }

  .v-locale--is-rtl .rounded-bs-0 {
    border-bottom-right-radius: 0 !important;
  }

  .v-locale--is-ltr .rounded-bs-sm {
    border-bottom-left-radius: 3px !important;
  }

  .v-locale--is-rtl .rounded-bs-sm {
    border-bottom-right-radius: 3px !important;
  }

  .v-locale--is-ltr .rounded-bs {
    border-bottom-left-radius: 6px !important;
  }

  .v-locale--is-rtl .rounded-bs {
    border-bottom-right-radius: 6px !important;
  }

  .v-locale--is-ltr .rounded-bs-lg {
    border-bottom-left-radius: 12px !important;
  }

  .v-locale--is-rtl .rounded-bs-lg {
    border-bottom-right-radius: 12px !important;
  }

  .v-locale--is-ltr .rounded-bs-xl {
    border-bottom-left-radius: 36px !important;
  }

  .v-locale--is-rtl .rounded-bs-xl {
    border-bottom-right-radius: 36px !important;
  }

  .v-locale--is-ltr .rounded-bs-pill {
    border-bottom-left-radius: 9999px !important;
  }

  .v-locale--is-rtl .rounded-bs-pill {
    border-bottom-right-radius: 9999px !important;
  }

  .v-locale--is-ltr .rounded-bs-circle {
    border-bottom-left-radius: 50% !important;
  }

  .v-locale--is-rtl .rounded-bs-circle {
    border-bottom-right-radius: 50% !important;
  }

  .v-locale--is-ltr .rounded-bs-shaped {
    border-bottom-left-radius: 36px 0 !important;
  }

  .v-locale--is-rtl .rounded-bs-shaped {
    border-bottom-right-radius: 36px 0 !important;
  }

  .border-0 {
    border-width: 0 !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border {
    border-width: thin !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-sm {
    border-width: 1px !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-md {
    border-width: 2px !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-lg {
    border-width: 4px !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-xl {
    border-width: 8px !important;
    border-style: solid !important;
    border-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-opacity-0 {
    --v-border-opacity: 0 !important;
  }

  .border-opacity {
    --v-border-opacity: 0.12 !important;
  }

  .border-opacity-25 {
    --v-border-opacity: 0.25 !important;
  }

  .border-opacity-50 {
    --v-border-opacity: 0.5 !important;
  }

  .border-opacity-75 {
    --v-border-opacity: 0.75 !important;
  }

  .border-opacity-100 {
    --v-border-opacity: 1 !important;
  }

  .border-t-0 {
    border-block-start-width: 0 !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-t {
    border-block-start-width: thin !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-t-sm {
    border-block-start-width: 1px !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-t-md {
    border-block-start-width: 2px !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-t-lg {
    border-block-start-width: 4px !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-t-xl {
    border-block-start-width: 8px !important;
    border-block-start-style: solid !important;
    border-block-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e-0 {
    border-inline-end-width: 0 !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e {
    border-inline-end-width: thin !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e-sm {
    border-inline-end-width: 1px !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e-md {
    border-inline-end-width: 2px !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e-lg {
    border-inline-end-width: 4px !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-e-xl {
    border-inline-end-width: 8px !important;
    border-inline-end-style: solid !important;
    border-inline-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b-0 {
    border-block-end-width: 0 !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b {
    border-block-end-width: thin !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b-sm {
    border-block-end-width: 1px !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b-md {
    border-block-end-width: 2px !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b-lg {
    border-block-end-width: 4px !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-b-xl {
    border-block-end-width: 8px !important;
    border-block-end-style: solid !important;
    border-block-end-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s-0 {
    border-inline-start-width: 0 !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s {
    border-inline-start-width: thin !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s-sm {
    border-inline-start-width: 1px !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s-md {
    border-inline-start-width: 2px !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s-lg {
    border-inline-start-width: 4px !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-s-xl {
    border-inline-start-width: 8px !important;
    border-inline-start-style: solid !important;
    border-inline-start-color: rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }

  .border-solid {
    border-style: solid !important;
  }

  .border-dashed {
    border-style: dashed !important;
  }

  .border-dotted {
    border-style: dotted !important;
  }

  .border-double {
    border-style: double !important;
  }

  .border-none {
    border-style: none !important;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-start {
    text-align: start !important;
  }

  .text-end {
    text-align: end !important;
  }

  .text-decoration-line-through {
    text-decoration: line-through !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }

  .text-decoration-overline {
    text-decoration: overline !important;
  }

  .text-decoration-underline {
    text-decoration: underline !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-no-wrap {
    white-space: nowrap !important;
  }

  .text-pre {
    white-space: pre !important;
  }

  .text-pre-line {
    white-space: pre-line !important;
  }

  .text-pre-wrap {
    white-space: pre-wrap !important;
  }

  .text-break {
    overflow-wrap: break-word !important;
    word-break: break-word !important;
  }

  .text-high-emphasis {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity)) !important;
  }

  .text-medium-emphasis {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity)) !important;
  }

  .text-disabled {
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity)) !important;
  }

  .text-truncate {
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  .text-h1 {
    font-size: 6rem !important;
    font-weight: 500;
    line-height: 7rem;
    letter-spacing: -0.015625em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-h2 {
    font-size: 3.75rem !important;
    font-weight: 500;
    line-height: 4.5rem;
    letter-spacing: -0.0083333333em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-h3 {
    font-size: 3rem !important;
    font-weight: 500;
    line-height: 3.5rem;
    letter-spacing: normal !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-h4 {
    font-size: 2.125rem !important;
    font-weight: 500;
    line-height: 2.625rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-h5 {
    font-size: 1.5rem !important;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-h6 {
    font-size: 1.25rem !important;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.0125em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-subtitle-1 {
    font-size: 1rem !important;
    font-weight: normal;
    line-height: 1.75rem;
    letter-spacing: 0.009375em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-subtitle-2 {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 1.375rem;
    letter-spacing: 0.0071428571em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-body-1 {
    font-size: 1rem !important;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.03125em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-body-2 {
    font-size: 0.875rem !important;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.0178571429em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-button {
    font-size: 0.875rem !important;
    font-weight: 500;
    line-height: 2.25rem;
    letter-spacing: 0.0892857143em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: uppercase !important;
  }

  .text-caption {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: none !important;
  }

  .text-overline {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.125rem;
    letter-spacing: 0.0625rem !important;
    font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
    text-transform: uppercase !important;
  }

  .text-none {
    text-transform: none !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .font-weight-thin {
    font-weight: 100 !important;
  }

  .font-weight-light {
    font-weight: 300 !important;
  }

  .font-weight-regular {
    font-weight: 400 !important;
  }

  .font-weight-medium {
    font-weight: 500 !important;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  .font-weight-black {
    font-weight: 900 !important;
  }

  .font-italic {
    font-style: italic !important;
  }

  .text-mono {
    font-family: monospace !important;
  }

  .position-static {
    position: static !important;
  }

  .position-relative {
    position: relative !important;
  }

  .position-fixed {
    position: fixed !important;
  }

  .position-absolute {
    position: absolute !important;
  }

  .position-sticky {
    position: sticky !important;
  }

  .fill-height {
    height: 100% !important;
  }

  .h-auto {
    height: auto !important;
  }

  .h-screen {
    height: 100vh !important;
  }

  .h-0 {
    height: 0 !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .w-auto {
    width: auto !important;
  }

  .w-0 {
    width: 0 !important;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-33 {
    width: 33% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-66 {
    width: 66% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  @media (min-width: 600px) {
    .d-sm-none {
      display: none !important;
    }

    .d-sm-inline {
      display: inline !important;
    }

    .d-sm-inline-block {
      display: inline-block !important;
    }

    .d-sm-block {
      display: block !important;
    }

    .d-sm-table {
      display: table !important;
    }

    .d-sm-table-row {
      display: table-row !important;
    }

    .d-sm-table-cell {
      display: table-cell !important;
    }

    .d-sm-flex {
      display: flex !important;
    }

    .d-sm-inline-flex {
      display: inline-flex !important;
    }

    .float-sm-none {
      float: none !important;
    }

    .float-sm-left {
      float: left !important;
    }

    .float-sm-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-sm-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-sm-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-sm-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-sm-start {
      float: left !important;
    }

    .flex-sm-fill {
      flex: 1 1 auto !important;
    }

    .flex-sm-row {
      flex-direction: row !important;
    }

    .flex-sm-column {
      flex-direction: column !important;
    }

    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }

    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-sm-start {
      justify-content: flex-start !important;
    }

    .justify-sm-end {
      justify-content: flex-end !important;
    }

    .justify-sm-center {
      justify-content: center !important;
    }

    .justify-sm-space-between {
      justify-content: space-between !important;
    }

    .justify-sm-space-around {
      justify-content: space-around !important;
    }

    .justify-sm-space-evenly {
      justify-content: space-evenly !important;
    }

    .align-sm-start {
      align-items: flex-start !important;
    }

    .align-sm-end {
      align-items: flex-end !important;
    }

    .align-sm-center {
      align-items: center !important;
    }

    .align-sm-baseline {
      align-items: baseline !important;
    }

    .align-sm-stretch {
      align-items: stretch !important;
    }

    .align-content-sm-start {
      align-content: flex-start !important;
    }

    .align-content-sm-end {
      align-content: flex-end !important;
    }

    .align-content-sm-center {
      align-content: center !important;
    }

    .align-content-sm-space-between {
      align-content: space-between !important;
    }

    .align-content-sm-space-around {
      align-content: space-around !important;
    }

    .align-content-sm-space-evenly {
      align-content: space-evenly !important;
    }

    .align-content-sm-stretch {
      align-content: stretch !important;
    }

    .align-self-sm-auto {
      align-self: auto !important;
    }

    .align-self-sm-start {
      align-self: flex-start !important;
    }

    .align-self-sm-end {
      align-self: flex-end !important;
    }

    .align-self-sm-center {
      align-self: center !important;
    }

    .align-self-sm-baseline {
      align-self: baseline !important;
    }

    .align-self-sm-stretch {
      align-self: stretch !important;
    }

    .order-sm-first {
      order: -1 !important;
    }

    .order-sm-0 {
      order: 0 !important;
    }

    .order-sm-1 {
      order: 1 !important;
    }

    .order-sm-2 {
      order: 2 !important;
    }

    .order-sm-3 {
      order: 3 !important;
    }

    .order-sm-4 {
      order: 4 !important;
    }

    .order-sm-5 {
      order: 5 !important;
    }

    .order-sm-6 {
      order: 6 !important;
    }

    .order-sm-7 {
      order: 7 !important;
    }

    .order-sm-8 {
      order: 8 !important;
    }

    .order-sm-9 {
      order: 9 !important;
    }

    .order-sm-10 {
      order: 10 !important;
    }

    .order-sm-11 {
      order: 11 !important;
    }

    .order-sm-12 {
      order: 12 !important;
    }

    .order-sm-last {
      order: 13 !important;
    }

    .ma-sm-0 {
      margin: 0px !important;
    }

    .ma-sm-1 {
      margin: 4px !important;
    }

    .ma-sm-2 {
      margin: 8px !important;
    }

    .ma-sm-3 {
      margin: 12px !important;
    }

    .ma-sm-4 {
      margin: 16px !important;
    }

    .ma-sm-5 {
      margin: 20px !important;
    }

    .ma-sm-6 {
      margin: 24px !important;
    }

    .ma-sm-7 {
      margin: 28px !important;
    }

    .ma-sm-8 {
      margin: 32px !important;
    }

    .ma-sm-9 {
      margin: 36px !important;
    }

    .ma-sm-10 {
      margin: 40px !important;
    }

    .ma-sm-11 {
      margin: 44px !important;
    }

    .ma-sm-12 {
      margin: 48px !important;
    }

    .ma-sm-13 {
      margin: 52px !important;
    }

    .ma-sm-14 {
      margin: 56px !important;
    }

    .ma-sm-15 {
      margin: 60px !important;
    }

    .ma-sm-16 {
      margin: 64px !important;
    }

    .ma-sm-auto {
      margin: auto !important;
    }

    .mx-sm-0 {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }

    .mx-sm-1 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }

    .mx-sm-2 {
      margin-right: 8px !important;
      margin-left: 8px !important;
    }

    .mx-sm-3 {
      margin-right: 12px !important;
      margin-left: 12px !important;
    }

    .mx-sm-4 {
      margin-right: 16px !important;
      margin-left: 16px !important;
    }

    .mx-sm-5 {
      margin-right: 20px !important;
      margin-left: 20px !important;
    }

    .mx-sm-6 {
      margin-right: 24px !important;
      margin-left: 24px !important;
    }

    .mx-sm-7 {
      margin-right: 28px !important;
      margin-left: 28px !important;
    }

    .mx-sm-8 {
      margin-right: 32px !important;
      margin-left: 32px !important;
    }

    .mx-sm-9 {
      margin-right: 36px !important;
      margin-left: 36px !important;
    }

    .mx-sm-10 {
      margin-right: 40px !important;
      margin-left: 40px !important;
    }

    .mx-sm-11 {
      margin-right: 44px !important;
      margin-left: 44px !important;
    }

    .mx-sm-12 {
      margin-right: 48px !important;
      margin-left: 48px !important;
    }

    .mx-sm-13 {
      margin-right: 52px !important;
      margin-left: 52px !important;
    }

    .mx-sm-14 {
      margin-right: 56px !important;
      margin-left: 56px !important;
    }

    .mx-sm-15 {
      margin-right: 60px !important;
      margin-left: 60px !important;
    }

    .mx-sm-16 {
      margin-right: 64px !important;
      margin-left: 64px !important;
    }

    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-sm-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .my-sm-1 {
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }

    .my-sm-2 {
      margin-top: 8px !important;
      margin-bottom: 8px !important;
    }

    .my-sm-3 {
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }

    .my-sm-4 {
      margin-top: 16px !important;
      margin-bottom: 16px !important;
    }

    .my-sm-5 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }

    .my-sm-6 {
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }

    .my-sm-7 {
      margin-top: 28px !important;
      margin-bottom: 28px !important;
    }

    .my-sm-8 {
      margin-top: 32px !important;
      margin-bottom: 32px !important;
    }

    .my-sm-9 {
      margin-top: 36px !important;
      margin-bottom: 36px !important;
    }

    .my-sm-10 {
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }

    .my-sm-11 {
      margin-top: 44px !important;
      margin-bottom: 44px !important;
    }

    .my-sm-12 {
      margin-top: 48px !important;
      margin-bottom: 48px !important;
    }

    .my-sm-13 {
      margin-top: 52px !important;
      margin-bottom: 52px !important;
    }

    .my-sm-14 {
      margin-top: 56px !important;
      margin-bottom: 56px !important;
    }

    .my-sm-15 {
      margin-top: 60px !important;
      margin-bottom: 60px !important;
    }

    .my-sm-16 {
      margin-top: 64px !important;
      margin-bottom: 64px !important;
    }

    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-sm-0 {
      margin-top: 0px !important;
    }

    .mt-sm-1 {
      margin-top: 4px !important;
    }

    .mt-sm-2 {
      margin-top: 8px !important;
    }

    .mt-sm-3 {
      margin-top: 12px !important;
    }

    .mt-sm-4 {
      margin-top: 16px !important;
    }

    .mt-sm-5 {
      margin-top: 20px !important;
    }

    .mt-sm-6 {
      margin-top: 24px !important;
    }

    .mt-sm-7 {
      margin-top: 28px !important;
    }

    .mt-sm-8 {
      margin-top: 32px !important;
    }

    .mt-sm-9 {
      margin-top: 36px !important;
    }

    .mt-sm-10 {
      margin-top: 40px !important;
    }

    .mt-sm-11 {
      margin-top: 44px !important;
    }

    .mt-sm-12 {
      margin-top: 48px !important;
    }

    .mt-sm-13 {
      margin-top: 52px !important;
    }

    .mt-sm-14 {
      margin-top: 56px !important;
    }

    .mt-sm-15 {
      margin-top: 60px !important;
    }

    .mt-sm-16 {
      margin-top: 64px !important;
    }

    .mt-sm-auto {
      margin-top: auto !important;
    }

    .mr-sm-0 {
      margin-right: 0px !important;
    }

    .mr-sm-1 {
      margin-right: 4px !important;
    }

    .mr-sm-2 {
      margin-right: 8px !important;
    }

    .mr-sm-3 {
      margin-right: 12px !important;
    }

    .mr-sm-4 {
      margin-right: 16px !important;
    }

    .mr-sm-5 {
      margin-right: 20px !important;
    }

    .mr-sm-6 {
      margin-right: 24px !important;
    }

    .mr-sm-7 {
      margin-right: 28px !important;
    }

    .mr-sm-8 {
      margin-right: 32px !important;
    }

    .mr-sm-9 {
      margin-right: 36px !important;
    }

    .mr-sm-10 {
      margin-right: 40px !important;
    }

    .mr-sm-11 {
      margin-right: 44px !important;
    }

    .mr-sm-12 {
      margin-right: 48px !important;
    }

    .mr-sm-13 {
      margin-right: 52px !important;
    }

    .mr-sm-14 {
      margin-right: 56px !important;
    }

    .mr-sm-15 {
      margin-right: 60px !important;
    }

    .mr-sm-16 {
      margin-right: 64px !important;
    }

    .mr-sm-auto {
      margin-right: auto !important;
    }

    .mb-sm-0 {
      margin-bottom: 0px !important;
    }

    .mb-sm-1 {
      margin-bottom: 4px !important;
    }

    .mb-sm-2 {
      margin-bottom: 8px !important;
    }

    .mb-sm-3 {
      margin-bottom: 12px !important;
    }

    .mb-sm-4 {
      margin-bottom: 16px !important;
    }

    .mb-sm-5 {
      margin-bottom: 20px !important;
    }

    .mb-sm-6 {
      margin-bottom: 24px !important;
    }

    .mb-sm-7 {
      margin-bottom: 28px !important;
    }

    .mb-sm-8 {
      margin-bottom: 32px !important;
    }

    .mb-sm-9 {
      margin-bottom: 36px !important;
    }

    .mb-sm-10 {
      margin-bottom: 40px !important;
    }

    .mb-sm-11 {
      margin-bottom: 44px !important;
    }

    .mb-sm-12 {
      margin-bottom: 48px !important;
    }

    .mb-sm-13 {
      margin-bottom: 52px !important;
    }

    .mb-sm-14 {
      margin-bottom: 56px !important;
    }

    .mb-sm-15 {
      margin-bottom: 60px !important;
    }

    .mb-sm-16 {
      margin-bottom: 64px !important;
    }

    .mb-sm-auto {
      margin-bottom: auto !important;
    }

    .ml-sm-0 {
      margin-left: 0px !important;
    }

    .ml-sm-1 {
      margin-left: 4px !important;
    }

    .ml-sm-2 {
      margin-left: 8px !important;
    }

    .ml-sm-3 {
      margin-left: 12px !important;
    }

    .ml-sm-4 {
      margin-left: 16px !important;
    }

    .ml-sm-5 {
      margin-left: 20px !important;
    }

    .ml-sm-6 {
      margin-left: 24px !important;
    }

    .ml-sm-7 {
      margin-left: 28px !important;
    }

    .ml-sm-8 {
      margin-left: 32px !important;
    }

    .ml-sm-9 {
      margin-left: 36px !important;
    }

    .ml-sm-10 {
      margin-left: 40px !important;
    }

    .ml-sm-11 {
      margin-left: 44px !important;
    }

    .ml-sm-12 {
      margin-left: 48px !important;
    }

    .ml-sm-13 {
      margin-left: 52px !important;
    }

    .ml-sm-14 {
      margin-left: 56px !important;
    }

    .ml-sm-15 {
      margin-left: 60px !important;
    }

    .ml-sm-16 {
      margin-left: 64px !important;
    }

    .ml-sm-auto {
      margin-left: auto !important;
    }

    .ms-sm-0 {
      margin-inline-start: 0px !important;
    }

    .ms-sm-1 {
      margin-inline-start: 4px !important;
    }

    .ms-sm-2 {
      margin-inline-start: 8px !important;
    }

    .ms-sm-3 {
      margin-inline-start: 12px !important;
    }

    .ms-sm-4 {
      margin-inline-start: 16px !important;
    }

    .ms-sm-5 {
      margin-inline-start: 20px !important;
    }

    .ms-sm-6 {
      margin-inline-start: 24px !important;
    }

    .ms-sm-7 {
      margin-inline-start: 28px !important;
    }

    .ms-sm-8 {
      margin-inline-start: 32px !important;
    }

    .ms-sm-9 {
      margin-inline-start: 36px !important;
    }

    .ms-sm-10 {
      margin-inline-start: 40px !important;
    }

    .ms-sm-11 {
      margin-inline-start: 44px !important;
    }

    .ms-sm-12 {
      margin-inline-start: 48px !important;
    }

    .ms-sm-13 {
      margin-inline-start: 52px !important;
    }

    .ms-sm-14 {
      margin-inline-start: 56px !important;
    }

    .ms-sm-15 {
      margin-inline-start: 60px !important;
    }

    .ms-sm-16 {
      margin-inline-start: 64px !important;
    }

    .ms-sm-auto {
      margin-inline-start: auto !important;
    }

    .me-sm-0 {
      margin-inline-end: 0px !important;
    }

    .me-sm-1 {
      margin-inline-end: 4px !important;
    }

    .me-sm-2 {
      margin-inline-end: 8px !important;
    }

    .me-sm-3 {
      margin-inline-end: 12px !important;
    }

    .me-sm-4 {
      margin-inline-end: 16px !important;
    }

    .me-sm-5 {
      margin-inline-end: 20px !important;
    }

    .me-sm-6 {
      margin-inline-end: 24px !important;
    }

    .me-sm-7 {
      margin-inline-end: 28px !important;
    }

    .me-sm-8 {
      margin-inline-end: 32px !important;
    }

    .me-sm-9 {
      margin-inline-end: 36px !important;
    }

    .me-sm-10 {
      margin-inline-end: 40px !important;
    }

    .me-sm-11 {
      margin-inline-end: 44px !important;
    }

    .me-sm-12 {
      margin-inline-end: 48px !important;
    }

    .me-sm-13 {
      margin-inline-end: 52px !important;
    }

    .me-sm-14 {
      margin-inline-end: 56px !important;
    }

    .me-sm-15 {
      margin-inline-end: 60px !important;
    }

    .me-sm-16 {
      margin-inline-end: 64px !important;
    }

    .me-sm-auto {
      margin-inline-end: auto !important;
    }

    .ma-sm-n1 {
      margin: -4px !important;
    }

    .ma-sm-n2 {
      margin: -8px !important;
    }

    .ma-sm-n3 {
      margin: -12px !important;
    }

    .ma-sm-n4 {
      margin: -16px !important;
    }

    .ma-sm-n5 {
      margin: -20px !important;
    }

    .ma-sm-n6 {
      margin: -24px !important;
    }

    .ma-sm-n7 {
      margin: -28px !important;
    }

    .ma-sm-n8 {
      margin: -32px !important;
    }

    .ma-sm-n9 {
      margin: -36px !important;
    }

    .ma-sm-n10 {
      margin: -40px !important;
    }

    .ma-sm-n11 {
      margin: -44px !important;
    }

    .ma-sm-n12 {
      margin: -48px !important;
    }

    .ma-sm-n13 {
      margin: -52px !important;
    }

    .ma-sm-n14 {
      margin: -56px !important;
    }

    .ma-sm-n15 {
      margin: -60px !important;
    }

    .ma-sm-n16 {
      margin: -64px !important;
    }

    .mx-sm-n1 {
      margin-right: -4px !important;
      margin-left: -4px !important;
    }

    .mx-sm-n2 {
      margin-right: -8px !important;
      margin-left: -8px !important;
    }

    .mx-sm-n3 {
      margin-right: -12px !important;
      margin-left: -12px !important;
    }

    .mx-sm-n4 {
      margin-right: -16px !important;
      margin-left: -16px !important;
    }

    .mx-sm-n5 {
      margin-right: -20px !important;
      margin-left: -20px !important;
    }

    .mx-sm-n6 {
      margin-right: -24px !important;
      margin-left: -24px !important;
    }

    .mx-sm-n7 {
      margin-right: -28px !important;
      margin-left: -28px !important;
    }

    .mx-sm-n8 {
      margin-right: -32px !important;
      margin-left: -32px !important;
    }

    .mx-sm-n9 {
      margin-right: -36px !important;
      margin-left: -36px !important;
    }

    .mx-sm-n10 {
      margin-right: -40px !important;
      margin-left: -40px !important;
    }

    .mx-sm-n11 {
      margin-right: -44px !important;
      margin-left: -44px !important;
    }

    .mx-sm-n12 {
      margin-right: -48px !important;
      margin-left: -48px !important;
    }

    .mx-sm-n13 {
      margin-right: -52px !important;
      margin-left: -52px !important;
    }

    .mx-sm-n14 {
      margin-right: -56px !important;
      margin-left: -56px !important;
    }

    .mx-sm-n15 {
      margin-right: -60px !important;
      margin-left: -60px !important;
    }

    .mx-sm-n16 {
      margin-right: -64px !important;
      margin-left: -64px !important;
    }

    .my-sm-n1 {
      margin-top: -4px !important;
      margin-bottom: -4px !important;
    }

    .my-sm-n2 {
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    .my-sm-n3 {
      margin-top: -12px !important;
      margin-bottom: -12px !important;
    }

    .my-sm-n4 {
      margin-top: -16px !important;
      margin-bottom: -16px !important;
    }

    .my-sm-n5 {
      margin-top: -20px !important;
      margin-bottom: -20px !important;
    }

    .my-sm-n6 {
      margin-top: -24px !important;
      margin-bottom: -24px !important;
    }

    .my-sm-n7 {
      margin-top: -28px !important;
      margin-bottom: -28px !important;
    }

    .my-sm-n8 {
      margin-top: -32px !important;
      margin-bottom: -32px !important;
    }

    .my-sm-n9 {
      margin-top: -36px !important;
      margin-bottom: -36px !important;
    }

    .my-sm-n10 {
      margin-top: -40px !important;
      margin-bottom: -40px !important;
    }

    .my-sm-n11 {
      margin-top: -44px !important;
      margin-bottom: -44px !important;
    }

    .my-sm-n12 {
      margin-top: -48px !important;
      margin-bottom: -48px !important;
    }

    .my-sm-n13 {
      margin-top: -52px !important;
      margin-bottom: -52px !important;
    }

    .my-sm-n14 {
      margin-top: -56px !important;
      margin-bottom: -56px !important;
    }

    .my-sm-n15 {
      margin-top: -60px !important;
      margin-bottom: -60px !important;
    }

    .my-sm-n16 {
      margin-top: -64px !important;
      margin-bottom: -64px !important;
    }

    .mt-sm-n1 {
      margin-top: -4px !important;
    }

    .mt-sm-n2 {
      margin-top: -8px !important;
    }

    .mt-sm-n3 {
      margin-top: -12px !important;
    }

    .mt-sm-n4 {
      margin-top: -16px !important;
    }

    .mt-sm-n5 {
      margin-top: -20px !important;
    }

    .mt-sm-n6 {
      margin-top: -24px !important;
    }

    .mt-sm-n7 {
      margin-top: -28px !important;
    }

    .mt-sm-n8 {
      margin-top: -32px !important;
    }

    .mt-sm-n9 {
      margin-top: -36px !important;
    }

    .mt-sm-n10 {
      margin-top: -40px !important;
    }

    .mt-sm-n11 {
      margin-top: -44px !important;
    }

    .mt-sm-n12 {
      margin-top: -48px !important;
    }

    .mt-sm-n13 {
      margin-top: -52px !important;
    }

    .mt-sm-n14 {
      margin-top: -56px !important;
    }

    .mt-sm-n15 {
      margin-top: -60px !important;
    }

    .mt-sm-n16 {
      margin-top: -64px !important;
    }

    .mr-sm-n1 {
      margin-right: -4px !important;
    }

    .mr-sm-n2 {
      margin-right: -8px !important;
    }

    .mr-sm-n3 {
      margin-right: -12px !important;
    }

    .mr-sm-n4 {
      margin-right: -16px !important;
    }

    .mr-sm-n5 {
      margin-right: -20px !important;
    }

    .mr-sm-n6 {
      margin-right: -24px !important;
    }

    .mr-sm-n7 {
      margin-right: -28px !important;
    }

    .mr-sm-n8 {
      margin-right: -32px !important;
    }

    .mr-sm-n9 {
      margin-right: -36px !important;
    }

    .mr-sm-n10 {
      margin-right: -40px !important;
    }

    .mr-sm-n11 {
      margin-right: -44px !important;
    }

    .mr-sm-n12 {
      margin-right: -48px !important;
    }

    .mr-sm-n13 {
      margin-right: -52px !important;
    }

    .mr-sm-n14 {
      margin-right: -56px !important;
    }

    .mr-sm-n15 {
      margin-right: -60px !important;
    }

    .mr-sm-n16 {
      margin-right: -64px !important;
    }

    .mb-sm-n1 {
      margin-bottom: -4px !important;
    }

    .mb-sm-n2 {
      margin-bottom: -8px !important;
    }

    .mb-sm-n3 {
      margin-bottom: -12px !important;
    }

    .mb-sm-n4 {
      margin-bottom: -16px !important;
    }

    .mb-sm-n5 {
      margin-bottom: -20px !important;
    }

    .mb-sm-n6 {
      margin-bottom: -24px !important;
    }

    .mb-sm-n7 {
      margin-bottom: -28px !important;
    }

    .mb-sm-n8 {
      margin-bottom: -32px !important;
    }

    .mb-sm-n9 {
      margin-bottom: -36px !important;
    }

    .mb-sm-n10 {
      margin-bottom: -40px !important;
    }

    .mb-sm-n11 {
      margin-bottom: -44px !important;
    }

    .mb-sm-n12 {
      margin-bottom: -48px !important;
    }

    .mb-sm-n13 {
      margin-bottom: -52px !important;
    }

    .mb-sm-n14 {
      margin-bottom: -56px !important;
    }

    .mb-sm-n15 {
      margin-bottom: -60px !important;
    }

    .mb-sm-n16 {
      margin-bottom: -64px !important;
    }

    .ml-sm-n1 {
      margin-left: -4px !important;
    }

    .ml-sm-n2 {
      margin-left: -8px !important;
    }

    .ml-sm-n3 {
      margin-left: -12px !important;
    }

    .ml-sm-n4 {
      margin-left: -16px !important;
    }

    .ml-sm-n5 {
      margin-left: -20px !important;
    }

    .ml-sm-n6 {
      margin-left: -24px !important;
    }

    .ml-sm-n7 {
      margin-left: -28px !important;
    }

    .ml-sm-n8 {
      margin-left: -32px !important;
    }

    .ml-sm-n9 {
      margin-left: -36px !important;
    }

    .ml-sm-n10 {
      margin-left: -40px !important;
    }

    .ml-sm-n11 {
      margin-left: -44px !important;
    }

    .ml-sm-n12 {
      margin-left: -48px !important;
    }

    .ml-sm-n13 {
      margin-left: -52px !important;
    }

    .ml-sm-n14 {
      margin-left: -56px !important;
    }

    .ml-sm-n15 {
      margin-left: -60px !important;
    }

    .ml-sm-n16 {
      margin-left: -64px !important;
    }

    .ms-sm-n1 {
      margin-inline-start: -4px !important;
    }

    .ms-sm-n2 {
      margin-inline-start: -8px !important;
    }

    .ms-sm-n3 {
      margin-inline-start: -12px !important;
    }

    .ms-sm-n4 {
      margin-inline-start: -16px !important;
    }

    .ms-sm-n5 {
      margin-inline-start: -20px !important;
    }

    .ms-sm-n6 {
      margin-inline-start: -24px !important;
    }

    .ms-sm-n7 {
      margin-inline-start: -28px !important;
    }

    .ms-sm-n8 {
      margin-inline-start: -32px !important;
    }

    .ms-sm-n9 {
      margin-inline-start: -36px !important;
    }

    .ms-sm-n10 {
      margin-inline-start: -40px !important;
    }

    .ms-sm-n11 {
      margin-inline-start: -44px !important;
    }

    .ms-sm-n12 {
      margin-inline-start: -48px !important;
    }

    .ms-sm-n13 {
      margin-inline-start: -52px !important;
    }

    .ms-sm-n14 {
      margin-inline-start: -56px !important;
    }

    .ms-sm-n15 {
      margin-inline-start: -60px !important;
    }

    .ms-sm-n16 {
      margin-inline-start: -64px !important;
    }

    .me-sm-n1 {
      margin-inline-end: -4px !important;
    }

    .me-sm-n2 {
      margin-inline-end: -8px !important;
    }

    .me-sm-n3 {
      margin-inline-end: -12px !important;
    }

    .me-sm-n4 {
      margin-inline-end: -16px !important;
    }

    .me-sm-n5 {
      margin-inline-end: -20px !important;
    }

    .me-sm-n6 {
      margin-inline-end: -24px !important;
    }

    .me-sm-n7 {
      margin-inline-end: -28px !important;
    }

    .me-sm-n8 {
      margin-inline-end: -32px !important;
    }

    .me-sm-n9 {
      margin-inline-end: -36px !important;
    }

    .me-sm-n10 {
      margin-inline-end: -40px !important;
    }

    .me-sm-n11 {
      margin-inline-end: -44px !important;
    }

    .me-sm-n12 {
      margin-inline-end: -48px !important;
    }

    .me-sm-n13 {
      margin-inline-end: -52px !important;
    }

    .me-sm-n14 {
      margin-inline-end: -56px !important;
    }

    .me-sm-n15 {
      margin-inline-end: -60px !important;
    }

    .me-sm-n16 {
      margin-inline-end: -64px !important;
    }

    .pa-sm-0 {
      padding: 0px !important;
    }

    .pa-sm-1 {
      padding: 4px !important;
    }

    .pa-sm-2 {
      padding: 8px !important;
    }

    .pa-sm-3 {
      padding: 12px !important;
    }

    .pa-sm-4 {
      padding: 16px !important;
    }

    .pa-sm-5 {
      padding: 20px !important;
    }

    .pa-sm-6 {
      padding: 24px !important;
    }

    .pa-sm-7 {
      padding: 28px !important;
    }

    .pa-sm-8 {
      padding: 32px !important;
    }

    .pa-sm-9 {
      padding: 36px !important;
    }

    .pa-sm-10 {
      padding: 40px !important;
    }

    .pa-sm-11 {
      padding: 44px !important;
    }

    .pa-sm-12 {
      padding: 48px !important;
    }

    .pa-sm-13 {
      padding: 52px !important;
    }

    .pa-sm-14 {
      padding: 56px !important;
    }

    .pa-sm-15 {
      padding: 60px !important;
    }

    .pa-sm-16 {
      padding: 64px !important;
    }

    .px-sm-0 {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }

    .px-sm-1 {
      padding-right: 4px !important;
      padding-left: 4px !important;
    }

    .px-sm-2 {
      padding-right: 8px !important;
      padding-left: 8px !important;
    }

    .px-sm-3 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    .px-sm-4 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .px-sm-5 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    .px-sm-6 {
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .px-sm-7 {
      padding-right: 28px !important;
      padding-left: 28px !important;
    }

    .px-sm-8 {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }

    .px-sm-9 {
      padding-right: 36px !important;
      padding-left: 36px !important;
    }

    .px-sm-10 {
      padding-right: 40px !important;
      padding-left: 40px !important;
    }

    .px-sm-11 {
      padding-right: 44px !important;
      padding-left: 44px !important;
    }

    .px-sm-12 {
      padding-right: 48px !important;
      padding-left: 48px !important;
    }

    .px-sm-13 {
      padding-right: 52px !important;
      padding-left: 52px !important;
    }

    .px-sm-14 {
      padding-right: 56px !important;
      padding-left: 56px !important;
    }

    .px-sm-15 {
      padding-right: 60px !important;
      padding-left: 60px !important;
    }

    .px-sm-16 {
      padding-right: 64px !important;
      padding-left: 64px !important;
    }

    .py-sm-0 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .py-sm-1 {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .py-sm-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }

    .py-sm-3 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    .py-sm-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    .py-sm-5 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    .py-sm-6 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    .py-sm-7 {
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }

    .py-sm-8 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }

    .py-sm-9 {
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }

    .py-sm-10 {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .py-sm-11 {
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    .py-sm-12 {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    .py-sm-13 {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }

    .py-sm-14 {
      padding-top: 56px !important;
      padding-bottom: 56px !important;
    }

    .py-sm-15 {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }

    .py-sm-16 {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    .pt-sm-0 {
      padding-top: 0px !important;
    }

    .pt-sm-1 {
      padding-top: 4px !important;
    }

    .pt-sm-2 {
      padding-top: 8px !important;
    }

    .pt-sm-3 {
      padding-top: 12px !important;
    }

    .pt-sm-4 {
      padding-top: 16px !important;
    }

    .pt-sm-5 {
      padding-top: 20px !important;
    }

    .pt-sm-6 {
      padding-top: 24px !important;
    }

    .pt-sm-7 {
      padding-top: 28px !important;
    }

    .pt-sm-8 {
      padding-top: 32px !important;
    }

    .pt-sm-9 {
      padding-top: 36px !important;
    }

    .pt-sm-10 {
      padding-top: 40px !important;
    }

    .pt-sm-11 {
      padding-top: 44px !important;
    }

    .pt-sm-12 {
      padding-top: 48px !important;
    }

    .pt-sm-13 {
      padding-top: 52px !important;
    }

    .pt-sm-14 {
      padding-top: 56px !important;
    }

    .pt-sm-15 {
      padding-top: 60px !important;
    }

    .pt-sm-16 {
      padding-top: 64px !important;
    }

    .pr-sm-0 {
      padding-right: 0px !important;
    }

    .pr-sm-1 {
      padding-right: 4px !important;
    }

    .pr-sm-2 {
      padding-right: 8px !important;
    }

    .pr-sm-3 {
      padding-right: 12px !important;
    }

    .pr-sm-4 {
      padding-right: 16px !important;
    }

    .pr-sm-5 {
      padding-right: 20px !important;
    }

    .pr-sm-6 {
      padding-right: 24px !important;
    }

    .pr-sm-7 {
      padding-right: 28px !important;
    }

    .pr-sm-8 {
      padding-right: 32px !important;
    }

    .pr-sm-9 {
      padding-right: 36px !important;
    }

    .pr-sm-10 {
      padding-right: 40px !important;
    }

    .pr-sm-11 {
      padding-right: 44px !important;
    }

    .pr-sm-12 {
      padding-right: 48px !important;
    }

    .pr-sm-13 {
      padding-right: 52px !important;
    }

    .pr-sm-14 {
      padding-right: 56px !important;
    }

    .pr-sm-15 {
      padding-right: 60px !important;
    }

    .pr-sm-16 {
      padding-right: 64px !important;
    }

    .pb-sm-0 {
      padding-bottom: 0px !important;
    }

    .pb-sm-1 {
      padding-bottom: 4px !important;
    }

    .pb-sm-2 {
      padding-bottom: 8px !important;
    }

    .pb-sm-3 {
      padding-bottom: 12px !important;
    }

    .pb-sm-4 {
      padding-bottom: 16px !important;
    }

    .pb-sm-5 {
      padding-bottom: 20px !important;
    }

    .pb-sm-6 {
      padding-bottom: 24px !important;
    }

    .pb-sm-7 {
      padding-bottom: 28px !important;
    }

    .pb-sm-8 {
      padding-bottom: 32px !important;
    }

    .pb-sm-9 {
      padding-bottom: 36px !important;
    }

    .pb-sm-10 {
      padding-bottom: 40px !important;
    }

    .pb-sm-11 {
      padding-bottom: 44px !important;
    }

    .pb-sm-12 {
      padding-bottom: 48px !important;
    }

    .pb-sm-13 {
      padding-bottom: 52px !important;
    }

    .pb-sm-14 {
      padding-bottom: 56px !important;
    }

    .pb-sm-15 {
      padding-bottom: 60px !important;
    }

    .pb-sm-16 {
      padding-bottom: 64px !important;
    }

    .pl-sm-0 {
      padding-left: 0px !important;
    }

    .pl-sm-1 {
      padding-left: 4px !important;
    }

    .pl-sm-2 {
      padding-left: 8px !important;
    }

    .pl-sm-3 {
      padding-left: 12px !important;
    }

    .pl-sm-4 {
      padding-left: 16px !important;
    }

    .pl-sm-5 {
      padding-left: 20px !important;
    }

    .pl-sm-6 {
      padding-left: 24px !important;
    }

    .pl-sm-7 {
      padding-left: 28px !important;
    }

    .pl-sm-8 {
      padding-left: 32px !important;
    }

    .pl-sm-9 {
      padding-left: 36px !important;
    }

    .pl-sm-10 {
      padding-left: 40px !important;
    }

    .pl-sm-11 {
      padding-left: 44px !important;
    }

    .pl-sm-12 {
      padding-left: 48px !important;
    }

    .pl-sm-13 {
      padding-left: 52px !important;
    }

    .pl-sm-14 {
      padding-left: 56px !important;
    }

    .pl-sm-15 {
      padding-left: 60px !important;
    }

    .pl-sm-16 {
      padding-left: 64px !important;
    }

    .ps-sm-0 {
      padding-inline-start: 0px !important;
    }

    .ps-sm-1 {
      padding-inline-start: 4px !important;
    }

    .ps-sm-2 {
      padding-inline-start: 8px !important;
    }

    .ps-sm-3 {
      padding-inline-start: 12px !important;
    }

    .ps-sm-4 {
      padding-inline-start: 16px !important;
    }

    .ps-sm-5 {
      padding-inline-start: 20px !important;
    }

    .ps-sm-6 {
      padding-inline-start: 24px !important;
    }

    .ps-sm-7 {
      padding-inline-start: 28px !important;
    }

    .ps-sm-8 {
      padding-inline-start: 32px !important;
    }

    .ps-sm-9 {
      padding-inline-start: 36px !important;
    }

    .ps-sm-10 {
      padding-inline-start: 40px !important;
    }

    .ps-sm-11 {
      padding-inline-start: 44px !important;
    }

    .ps-sm-12 {
      padding-inline-start: 48px !important;
    }

    .ps-sm-13 {
      padding-inline-start: 52px !important;
    }

    .ps-sm-14 {
      padding-inline-start: 56px !important;
    }

    .ps-sm-15 {
      padding-inline-start: 60px !important;
    }

    .ps-sm-16 {
      padding-inline-start: 64px !important;
    }

    .pe-sm-0 {
      padding-inline-end: 0px !important;
    }

    .pe-sm-1 {
      padding-inline-end: 4px !important;
    }

    .pe-sm-2 {
      padding-inline-end: 8px !important;
    }

    .pe-sm-3 {
      padding-inline-end: 12px !important;
    }

    .pe-sm-4 {
      padding-inline-end: 16px !important;
    }

    .pe-sm-5 {
      padding-inline-end: 20px !important;
    }

    .pe-sm-6 {
      padding-inline-end: 24px !important;
    }

    .pe-sm-7 {
      padding-inline-end: 28px !important;
    }

    .pe-sm-8 {
      padding-inline-end: 32px !important;
    }

    .pe-sm-9 {
      padding-inline-end: 36px !important;
    }

    .pe-sm-10 {
      padding-inline-end: 40px !important;
    }

    .pe-sm-11 {
      padding-inline-end: 44px !important;
    }

    .pe-sm-12 {
      padding-inline-end: 48px !important;
    }

    .pe-sm-13 {
      padding-inline-end: 52px !important;
    }

    .pe-sm-14 {
      padding-inline-end: 56px !important;
    }

    .pe-sm-15 {
      padding-inline-end: 60px !important;
    }

    .pe-sm-16 {
      padding-inline-end: 64px !important;
    }

    .text-sm-left {
      text-align: left !important;
    }

    .text-sm-right {
      text-align: right !important;
    }

    .text-sm-center {
      text-align: center !important;
    }

    .text-sm-justify {
      text-align: justify !important;
    }

    .text-sm-start {
      text-align: start !important;
    }

    .text-sm-end {
      text-align: end !important;
    }

    .text-sm-h1 {
      font-size: 6rem !important;
      font-weight: 500;
      line-height: 7rem;
      letter-spacing: -0.015625em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-h2 {
      font-size: 3.75rem !important;
      font-weight: 500;
      line-height: 4.5rem;
      letter-spacing: -0.0083333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-h3 {
      font-size: 3rem !important;
      font-weight: 500;
      line-height: 3.5rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-h4 {
      font-size: 2.125rem !important;
      font-weight: 500;
      line-height: 2.625rem;
      letter-spacing: 0.0073529412em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-h5 {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-h6 {
      font-size: 1.25rem !important;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-subtitle-1 {
      font-size: 1rem !important;
      font-weight: normal;
      line-height: 1.75rem;
      letter-spacing: 0.009375em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-subtitle-2 {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: 0.0071428571em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-body-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0.03125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-body-2 {
      font-size: 0.875rem !important;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.0178571429em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-button {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 2.25rem;
      letter-spacing: 0.0892857143em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }

    .text-sm-caption {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.25rem;
      letter-spacing: 0.0333333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-sm-overline {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }
  }

  @media (min-width: 960px) {
    .d-md-none {
      display: none !important;
    }

    .d-md-inline {
      display: inline !important;
    }

    .d-md-inline-block {
      display: inline-block !important;
    }

    .d-md-block {
      display: block !important;
    }

    .d-md-table {
      display: table !important;
    }

    .d-md-table-row {
      display: table-row !important;
    }

    .d-md-table-cell {
      display: table-cell !important;
    }

    .d-md-flex {
      display: flex !important;
    }

    .d-md-inline-flex {
      display: inline-flex !important;
    }

    .float-md-none {
      float: none !important;
    }

    .float-md-left {
      float: left !important;
    }

    .float-md-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-md-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-md-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-md-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-md-start {
      float: left !important;
    }

    .flex-md-fill {
      flex: 1 1 auto !important;
    }

    .flex-md-row {
      flex-direction: row !important;
    }

    .flex-md-column {
      flex-direction: column !important;
    }

    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-md-wrap {
      flex-wrap: wrap !important;
    }

    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-md-start {
      justify-content: flex-start !important;
    }

    .justify-md-end {
      justify-content: flex-end !important;
    }

    .justify-md-center {
      justify-content: center !important;
    }

    .justify-md-space-between {
      justify-content: space-between !important;
    }

    .justify-md-space-around {
      justify-content: space-around !important;
    }

    .justify-md-space-evenly {
      justify-content: space-evenly !important;
    }

    .align-md-start {
      align-items: flex-start !important;
    }

    .align-md-end {
      align-items: flex-end !important;
    }

    .align-md-center {
      align-items: center !important;
    }

    .align-md-baseline {
      align-items: baseline !important;
    }

    .align-md-stretch {
      align-items: stretch !important;
    }

    .align-content-md-start {
      align-content: flex-start !important;
    }

    .align-content-md-end {
      align-content: flex-end !important;
    }

    .align-content-md-center {
      align-content: center !important;
    }

    .align-content-md-space-between {
      align-content: space-between !important;
    }

    .align-content-md-space-around {
      align-content: space-around !important;
    }

    .align-content-md-space-evenly {
      align-content: space-evenly !important;
    }

    .align-content-md-stretch {
      align-content: stretch !important;
    }

    .align-self-md-auto {
      align-self: auto !important;
    }

    .align-self-md-start {
      align-self: flex-start !important;
    }

    .align-self-md-end {
      align-self: flex-end !important;
    }

    .align-self-md-center {
      align-self: center !important;
    }

    .align-self-md-baseline {
      align-self: baseline !important;
    }

    .align-self-md-stretch {
      align-self: stretch !important;
    }

    .order-md-first {
      order: -1 !important;
    }

    .order-md-0 {
      order: 0 !important;
    }

    .order-md-1 {
      order: 1 !important;
    }

    .order-md-2 {
      order: 2 !important;
    }

    .order-md-3 {
      order: 3 !important;
    }

    .order-md-4 {
      order: 4 !important;
    }

    .order-md-5 {
      order: 5 !important;
    }

    .order-md-6 {
      order: 6 !important;
    }

    .order-md-7 {
      order: 7 !important;
    }

    .order-md-8 {
      order: 8 !important;
    }

    .order-md-9 {
      order: 9 !important;
    }

    .order-md-10 {
      order: 10 !important;
    }

    .order-md-11 {
      order: 11 !important;
    }

    .order-md-12 {
      order: 12 !important;
    }

    .order-md-last {
      order: 13 !important;
    }

    .ma-md-0 {
      margin: 0px !important;
    }

    .ma-md-1 {
      margin: 4px !important;
    }

    .ma-md-2 {
      margin: 8px !important;
    }

    .ma-md-3 {
      margin: 12px !important;
    }

    .ma-md-4 {
      margin: 16px !important;
    }

    .ma-md-5 {
      margin: 20px !important;
    }

    .ma-md-6 {
      margin: 24px !important;
    }

    .ma-md-7 {
      margin: 28px !important;
    }

    .ma-md-8 {
      margin: 32px !important;
    }

    .ma-md-9 {
      margin: 36px !important;
    }

    .ma-md-10 {
      margin: 40px !important;
    }

    .ma-md-11 {
      margin: 44px !important;
    }

    .ma-md-12 {
      margin: 48px !important;
    }

    .ma-md-13 {
      margin: 52px !important;
    }

    .ma-md-14 {
      margin: 56px !important;
    }

    .ma-md-15 {
      margin: 60px !important;
    }

    .ma-md-16 {
      margin: 64px !important;
    }

    .ma-md-auto {
      margin: auto !important;
    }

    .mx-md-0 {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }

    .mx-md-1 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }

    .mx-md-2 {
      margin-right: 8px !important;
      margin-left: 8px !important;
    }

    .mx-md-3 {
      margin-right: 12px !important;
      margin-left: 12px !important;
    }

    .mx-md-4 {
      margin-right: 16px !important;
      margin-left: 16px !important;
    }

    .mx-md-5 {
      margin-right: 20px !important;
      margin-left: 20px !important;
    }

    .mx-md-6 {
      margin-right: 24px !important;
      margin-left: 24px !important;
    }

    .mx-md-7 {
      margin-right: 28px !important;
      margin-left: 28px !important;
    }

    .mx-md-8 {
      margin-right: 32px !important;
      margin-left: 32px !important;
    }

    .mx-md-9 {
      margin-right: 36px !important;
      margin-left: 36px !important;
    }

    .mx-md-10 {
      margin-right: 40px !important;
      margin-left: 40px !important;
    }

    .mx-md-11 {
      margin-right: 44px !important;
      margin-left: 44px !important;
    }

    .mx-md-12 {
      margin-right: 48px !important;
      margin-left: 48px !important;
    }

    .mx-md-13 {
      margin-right: 52px !important;
      margin-left: 52px !important;
    }

    .mx-md-14 {
      margin-right: 56px !important;
      margin-left: 56px !important;
    }

    .mx-md-15 {
      margin-right: 60px !important;
      margin-left: 60px !important;
    }

    .mx-md-16 {
      margin-right: 64px !important;
      margin-left: 64px !important;
    }

    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-md-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .my-md-1 {
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }

    .my-md-2 {
      margin-top: 8px !important;
      margin-bottom: 8px !important;
    }

    .my-md-3 {
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }

    .my-md-4 {
      margin-top: 16px !important;
      margin-bottom: 16px !important;
    }

    .my-md-5 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }

    .my-md-6 {
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }

    .my-md-7 {
      margin-top: 28px !important;
      margin-bottom: 28px !important;
    }

    .my-md-8 {
      margin-top: 32px !important;
      margin-bottom: 32px !important;
    }

    .my-md-9 {
      margin-top: 36px !important;
      margin-bottom: 36px !important;
    }

    .my-md-10 {
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }

    .my-md-11 {
      margin-top: 44px !important;
      margin-bottom: 44px !important;
    }

    .my-md-12 {
      margin-top: 48px !important;
      margin-bottom: 48px !important;
    }

    .my-md-13 {
      margin-top: 52px !important;
      margin-bottom: 52px !important;
    }

    .my-md-14 {
      margin-top: 56px !important;
      margin-bottom: 56px !important;
    }

    .my-md-15 {
      margin-top: 60px !important;
      margin-bottom: 60px !important;
    }

    .my-md-16 {
      margin-top: 64px !important;
      margin-bottom: 64px !important;
    }

    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-md-0 {
      margin-top: 0px !important;
    }

    .mt-md-1 {
      margin-top: 4px !important;
    }

    .mt-md-2 {
      margin-top: 8px !important;
    }

    .mt-md-3 {
      margin-top: 12px !important;
    }

    .mt-md-4 {
      margin-top: 16px !important;
    }

    .mt-md-5 {
      margin-top: 20px !important;
    }

    .mt-md-6 {
      margin-top: 24px !important;
    }

    .mt-md-7 {
      margin-top: 28px !important;
    }

    .mt-md-8 {
      margin-top: 32px !important;
    }

    .mt-md-9 {
      margin-top: 36px !important;
    }

    .mt-md-10 {
      margin-top: 40px !important;
    }

    .mt-md-11 {
      margin-top: 44px !important;
    }

    .mt-md-12 {
      margin-top: 48px !important;
    }

    .mt-md-13 {
      margin-top: 52px !important;
    }

    .mt-md-14 {
      margin-top: 56px !important;
    }

    .mt-md-15 {
      margin-top: 60px !important;
    }

    .mt-md-16 {
      margin-top: 64px !important;
    }

    .mt-md-auto {
      margin-top: auto !important;
    }

    .mr-md-0 {
      margin-right: 0px !important;
    }

    .mr-md-1 {
      margin-right: 4px !important;
    }

    .mr-md-2 {
      margin-right: 8px !important;
    }

    .mr-md-3 {
      margin-right: 12px !important;
    }

    .mr-md-4 {
      margin-right: 16px !important;
    }

    .mr-md-5 {
      margin-right: 20px !important;
    }

    .mr-md-6 {
      margin-right: 24px !important;
    }

    .mr-md-7 {
      margin-right: 28px !important;
    }

    .mr-md-8 {
      margin-right: 32px !important;
    }

    .mr-md-9 {
      margin-right: 36px !important;
    }

    .mr-md-10 {
      margin-right: 40px !important;
    }

    .mr-md-11 {
      margin-right: 44px !important;
    }

    .mr-md-12 {
      margin-right: 48px !important;
    }

    .mr-md-13 {
      margin-right: 52px !important;
    }

    .mr-md-14 {
      margin-right: 56px !important;
    }

    .mr-md-15 {
      margin-right: 60px !important;
    }

    .mr-md-16 {
      margin-right: 64px !important;
    }

    .mr-md-auto {
      margin-right: auto !important;
    }

    .mb-md-0 {
      margin-bottom: 0px !important;
    }

    .mb-md-1 {
      margin-bottom: 4px !important;
    }

    .mb-md-2 {
      margin-bottom: 8px !important;
    }

    .mb-md-3 {
      margin-bottom: 12px !important;
    }

    .mb-md-4 {
      margin-bottom: 16px !important;
    }

    .mb-md-5 {
      margin-bottom: 20px !important;
    }

    .mb-md-6 {
      margin-bottom: 24px !important;
    }

    .mb-md-7 {
      margin-bottom: 28px !important;
    }

    .mb-md-8 {
      margin-bottom: 32px !important;
    }

    .mb-md-9 {
      margin-bottom: 36px !important;
    }

    .mb-md-10 {
      margin-bottom: 40px !important;
    }

    .mb-md-11 {
      margin-bottom: 44px !important;
    }

    .mb-md-12 {
      margin-bottom: 48px !important;
    }

    .mb-md-13 {
      margin-bottom: 52px !important;
    }

    .mb-md-14 {
      margin-bottom: 56px !important;
    }

    .mb-md-15 {
      margin-bottom: 60px !important;
    }

    .mb-md-16 {
      margin-bottom: 64px !important;
    }

    .mb-md-auto {
      margin-bottom: auto !important;
    }

    .ml-md-0 {
      margin-left: 0px !important;
    }

    .ml-md-1 {
      margin-left: 4px !important;
    }

    .ml-md-2 {
      margin-left: 8px !important;
    }

    .ml-md-3 {
      margin-left: 12px !important;
    }

    .ml-md-4 {
      margin-left: 16px !important;
    }

    .ml-md-5 {
      margin-left: 20px !important;
    }

    .ml-md-6 {
      margin-left: 24px !important;
    }

    .ml-md-7 {
      margin-left: 28px !important;
    }

    .ml-md-8 {
      margin-left: 32px !important;
    }

    .ml-md-9 {
      margin-left: 36px !important;
    }

    .ml-md-10 {
      margin-left: 40px !important;
    }

    .ml-md-11 {
      margin-left: 44px !important;
    }

    .ml-md-12 {
      margin-left: 48px !important;
    }

    .ml-md-13 {
      margin-left: 52px !important;
    }

    .ml-md-14 {
      margin-left: 56px !important;
    }

    .ml-md-15 {
      margin-left: 60px !important;
    }

    .ml-md-16 {
      margin-left: 64px !important;
    }

    .ml-md-auto {
      margin-left: auto !important;
    }

    .ms-md-0 {
      margin-inline-start: 0px !important;
    }

    .ms-md-1 {
      margin-inline-start: 4px !important;
    }

    .ms-md-2 {
      margin-inline-start: 8px !important;
    }

    .ms-md-3 {
      margin-inline-start: 12px !important;
    }

    .ms-md-4 {
      margin-inline-start: 16px !important;
    }

    .ms-md-5 {
      margin-inline-start: 20px !important;
    }

    .ms-md-6 {
      margin-inline-start: 24px !important;
    }

    .ms-md-7 {
      margin-inline-start: 28px !important;
    }

    .ms-md-8 {
      margin-inline-start: 32px !important;
    }

    .ms-md-9 {
      margin-inline-start: 36px !important;
    }

    .ms-md-10 {
      margin-inline-start: 40px !important;
    }

    .ms-md-11 {
      margin-inline-start: 44px !important;
    }

    .ms-md-12 {
      margin-inline-start: 48px !important;
    }

    .ms-md-13 {
      margin-inline-start: 52px !important;
    }

    .ms-md-14 {
      margin-inline-start: 56px !important;
    }

    .ms-md-15 {
      margin-inline-start: 60px !important;
    }

    .ms-md-16 {
      margin-inline-start: 64px !important;
    }

    .ms-md-auto {
      margin-inline-start: auto !important;
    }

    .me-md-0 {
      margin-inline-end: 0px !important;
    }

    .me-md-1 {
      margin-inline-end: 4px !important;
    }

    .me-md-2 {
      margin-inline-end: 8px !important;
    }

    .me-md-3 {
      margin-inline-end: 12px !important;
    }

    .me-md-4 {
      margin-inline-end: 16px !important;
    }

    .me-md-5 {
      margin-inline-end: 20px !important;
    }

    .me-md-6 {
      margin-inline-end: 24px !important;
    }

    .me-md-7 {
      margin-inline-end: 28px !important;
    }

    .me-md-8 {
      margin-inline-end: 32px !important;
    }

    .me-md-9 {
      margin-inline-end: 36px !important;
    }

    .me-md-10 {
      margin-inline-end: 40px !important;
    }

    .me-md-11 {
      margin-inline-end: 44px !important;
    }

    .me-md-12 {
      margin-inline-end: 48px !important;
    }

    .me-md-13 {
      margin-inline-end: 52px !important;
    }

    .me-md-14 {
      margin-inline-end: 56px !important;
    }

    .me-md-15 {
      margin-inline-end: 60px !important;
    }

    .me-md-16 {
      margin-inline-end: 64px !important;
    }

    .me-md-auto {
      margin-inline-end: auto !important;
    }

    .ma-md-n1 {
      margin: -4px !important;
    }

    .ma-md-n2 {
      margin: -8px !important;
    }

    .ma-md-n3 {
      margin: -12px !important;
    }

    .ma-md-n4 {
      margin: -16px !important;
    }

    .ma-md-n5 {
      margin: -20px !important;
    }

    .ma-md-n6 {
      margin: -24px !important;
    }

    .ma-md-n7 {
      margin: -28px !important;
    }

    .ma-md-n8 {
      margin: -32px !important;
    }

    .ma-md-n9 {
      margin: -36px !important;
    }

    .ma-md-n10 {
      margin: -40px !important;
    }

    .ma-md-n11 {
      margin: -44px !important;
    }

    .ma-md-n12 {
      margin: -48px !important;
    }

    .ma-md-n13 {
      margin: -52px !important;
    }

    .ma-md-n14 {
      margin: -56px !important;
    }

    .ma-md-n15 {
      margin: -60px !important;
    }

    .ma-md-n16 {
      margin: -64px !important;
    }

    .mx-md-n1 {
      margin-right: -4px !important;
      margin-left: -4px !important;
    }

    .mx-md-n2 {
      margin-right: -8px !important;
      margin-left: -8px !important;
    }

    .mx-md-n3 {
      margin-right: -12px !important;
      margin-left: -12px !important;
    }

    .mx-md-n4 {
      margin-right: -16px !important;
      margin-left: -16px !important;
    }

    .mx-md-n5 {
      margin-right: -20px !important;
      margin-left: -20px !important;
    }

    .mx-md-n6 {
      margin-right: -24px !important;
      margin-left: -24px !important;
    }

    .mx-md-n7 {
      margin-right: -28px !important;
      margin-left: -28px !important;
    }

    .mx-md-n8 {
      margin-right: -32px !important;
      margin-left: -32px !important;
    }

    .mx-md-n9 {
      margin-right: -36px !important;
      margin-left: -36px !important;
    }

    .mx-md-n10 {
      margin-right: -40px !important;
      margin-left: -40px !important;
    }

    .mx-md-n11 {
      margin-right: -44px !important;
      margin-left: -44px !important;
    }

    .mx-md-n12 {
      margin-right: -48px !important;
      margin-left: -48px !important;
    }

    .mx-md-n13 {
      margin-right: -52px !important;
      margin-left: -52px !important;
    }

    .mx-md-n14 {
      margin-right: -56px !important;
      margin-left: -56px !important;
    }

    .mx-md-n15 {
      margin-right: -60px !important;
      margin-left: -60px !important;
    }

    .mx-md-n16 {
      margin-right: -64px !important;
      margin-left: -64px !important;
    }

    .my-md-n1 {
      margin-top: -4px !important;
      margin-bottom: -4px !important;
    }

    .my-md-n2 {
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    .my-md-n3 {
      margin-top: -12px !important;
      margin-bottom: -12px !important;
    }

    .my-md-n4 {
      margin-top: -16px !important;
      margin-bottom: -16px !important;
    }

    .my-md-n5 {
      margin-top: -20px !important;
      margin-bottom: -20px !important;
    }

    .my-md-n6 {
      margin-top: -24px !important;
      margin-bottom: -24px !important;
    }

    .my-md-n7 {
      margin-top: -28px !important;
      margin-bottom: -28px !important;
    }

    .my-md-n8 {
      margin-top: -32px !important;
      margin-bottom: -32px !important;
    }

    .my-md-n9 {
      margin-top: -36px !important;
      margin-bottom: -36px !important;
    }

    .my-md-n10 {
      margin-top: -40px !important;
      margin-bottom: -40px !important;
    }

    .my-md-n11 {
      margin-top: -44px !important;
      margin-bottom: -44px !important;
    }

    .my-md-n12 {
      margin-top: -48px !important;
      margin-bottom: -48px !important;
    }

    .my-md-n13 {
      margin-top: -52px !important;
      margin-bottom: -52px !important;
    }

    .my-md-n14 {
      margin-top: -56px !important;
      margin-bottom: -56px !important;
    }

    .my-md-n15 {
      margin-top: -60px !important;
      margin-bottom: -60px !important;
    }

    .my-md-n16 {
      margin-top: -64px !important;
      margin-bottom: -64px !important;
    }

    .mt-md-n1 {
      margin-top: -4px !important;
    }

    .mt-md-n2 {
      margin-top: -8px !important;
    }

    .mt-md-n3 {
      margin-top: -12px !important;
    }

    .mt-md-n4 {
      margin-top: -16px !important;
    }

    .mt-md-n5 {
      margin-top: -20px !important;
    }

    .mt-md-n6 {
      margin-top: -24px !important;
    }

    .mt-md-n7 {
      margin-top: -28px !important;
    }

    .mt-md-n8 {
      margin-top: -32px !important;
    }

    .mt-md-n9 {
      margin-top: -36px !important;
    }

    .mt-md-n10 {
      margin-top: -40px !important;
    }

    .mt-md-n11 {
      margin-top: -44px !important;
    }

    .mt-md-n12 {
      margin-top: -48px !important;
    }

    .mt-md-n13 {
      margin-top: -52px !important;
    }

    .mt-md-n14 {
      margin-top: -56px !important;
    }

    .mt-md-n15 {
      margin-top: -60px !important;
    }

    .mt-md-n16 {
      margin-top: -64px !important;
    }

    .mr-md-n1 {
      margin-right: -4px !important;
    }

    .mr-md-n2 {
      margin-right: -8px !important;
    }

    .mr-md-n3 {
      margin-right: -12px !important;
    }

    .mr-md-n4 {
      margin-right: -16px !important;
    }

    .mr-md-n5 {
      margin-right: -20px !important;
    }

    .mr-md-n6 {
      margin-right: -24px !important;
    }

    .mr-md-n7 {
      margin-right: -28px !important;
    }

    .mr-md-n8 {
      margin-right: -32px !important;
    }

    .mr-md-n9 {
      margin-right: -36px !important;
    }

    .mr-md-n10 {
      margin-right: -40px !important;
    }

    .mr-md-n11 {
      margin-right: -44px !important;
    }

    .mr-md-n12 {
      margin-right: -48px !important;
    }

    .mr-md-n13 {
      margin-right: -52px !important;
    }

    .mr-md-n14 {
      margin-right: -56px !important;
    }

    .mr-md-n15 {
      margin-right: -60px !important;
    }

    .mr-md-n16 {
      margin-right: -64px !important;
    }

    .mb-md-n1 {
      margin-bottom: -4px !important;
    }

    .mb-md-n2 {
      margin-bottom: -8px !important;
    }

    .mb-md-n3 {
      margin-bottom: -12px !important;
    }

    .mb-md-n4 {
      margin-bottom: -16px !important;
    }

    .mb-md-n5 {
      margin-bottom: -20px !important;
    }

    .mb-md-n6 {
      margin-bottom: -24px !important;
    }

    .mb-md-n7 {
      margin-bottom: -28px !important;
    }

    .mb-md-n8 {
      margin-bottom: -32px !important;
    }

    .mb-md-n9 {
      margin-bottom: -36px !important;
    }

    .mb-md-n10 {
      margin-bottom: -40px !important;
    }

    .mb-md-n11 {
      margin-bottom: -44px !important;
    }

    .mb-md-n12 {
      margin-bottom: -48px !important;
    }

    .mb-md-n13 {
      margin-bottom: -52px !important;
    }

    .mb-md-n14 {
      margin-bottom: -56px !important;
    }

    .mb-md-n15 {
      margin-bottom: -60px !important;
    }

    .mb-md-n16 {
      margin-bottom: -64px !important;
    }

    .ml-md-n1 {
      margin-left: -4px !important;
    }

    .ml-md-n2 {
      margin-left: -8px !important;
    }

    .ml-md-n3 {
      margin-left: -12px !important;
    }

    .ml-md-n4 {
      margin-left: -16px !important;
    }

    .ml-md-n5 {
      margin-left: -20px !important;
    }

    .ml-md-n6 {
      margin-left: -24px !important;
    }

    .ml-md-n7 {
      margin-left: -28px !important;
    }

    .ml-md-n8 {
      margin-left: -32px !important;
    }

    .ml-md-n9 {
      margin-left: -36px !important;
    }

    .ml-md-n10 {
      margin-left: -40px !important;
    }

    .ml-md-n11 {
      margin-left: -44px !important;
    }

    .ml-md-n12 {
      margin-left: -48px !important;
    }

    .ml-md-n13 {
      margin-left: -52px !important;
    }

    .ml-md-n14 {
      margin-left: -56px !important;
    }

    .ml-md-n15 {
      margin-left: -60px !important;
    }

    .ml-md-n16 {
      margin-left: -64px !important;
    }

    .ms-md-n1 {
      margin-inline-start: -4px !important;
    }

    .ms-md-n2 {
      margin-inline-start: -8px !important;
    }

    .ms-md-n3 {
      margin-inline-start: -12px !important;
    }

    .ms-md-n4 {
      margin-inline-start: -16px !important;
    }

    .ms-md-n5 {
      margin-inline-start: -20px !important;
    }

    .ms-md-n6 {
      margin-inline-start: -24px !important;
    }

    .ms-md-n7 {
      margin-inline-start: -28px !important;
    }

    .ms-md-n8 {
      margin-inline-start: -32px !important;
    }

    .ms-md-n9 {
      margin-inline-start: -36px !important;
    }

    .ms-md-n10 {
      margin-inline-start: -40px !important;
    }

    .ms-md-n11 {
      margin-inline-start: -44px !important;
    }

    .ms-md-n12 {
      margin-inline-start: -48px !important;
    }

    .ms-md-n13 {
      margin-inline-start: -52px !important;
    }

    .ms-md-n14 {
      margin-inline-start: -56px !important;
    }

    .ms-md-n15 {
      margin-inline-start: -60px !important;
    }

    .ms-md-n16 {
      margin-inline-start: -64px !important;
    }

    .me-md-n1 {
      margin-inline-end: -4px !important;
    }

    .me-md-n2 {
      margin-inline-end: -8px !important;
    }

    .me-md-n3 {
      margin-inline-end: -12px !important;
    }

    .me-md-n4 {
      margin-inline-end: -16px !important;
    }

    .me-md-n5 {
      margin-inline-end: -20px !important;
    }

    .me-md-n6 {
      margin-inline-end: -24px !important;
    }

    .me-md-n7 {
      margin-inline-end: -28px !important;
    }

    .me-md-n8 {
      margin-inline-end: -32px !important;
    }

    .me-md-n9 {
      margin-inline-end: -36px !important;
    }

    .me-md-n10 {
      margin-inline-end: -40px !important;
    }

    .me-md-n11 {
      margin-inline-end: -44px !important;
    }

    .me-md-n12 {
      margin-inline-end: -48px !important;
    }

    .me-md-n13 {
      margin-inline-end: -52px !important;
    }

    .me-md-n14 {
      margin-inline-end: -56px !important;
    }

    .me-md-n15 {
      margin-inline-end: -60px !important;
    }

    .me-md-n16 {
      margin-inline-end: -64px !important;
    }

    .pa-md-0 {
      padding: 0px !important;
    }

    .pa-md-1 {
      padding: 4px !important;
    }

    .pa-md-2 {
      padding: 8px !important;
    }

    .pa-md-3 {
      padding: 12px !important;
    }

    .pa-md-4 {
      padding: 16px !important;
    }

    .pa-md-5 {
      padding: 20px !important;
    }

    .pa-md-6 {
      padding: 24px !important;
    }

    .pa-md-7 {
      padding: 28px !important;
    }

    .pa-md-8 {
      padding: 32px !important;
    }

    .pa-md-9 {
      padding: 36px !important;
    }

    .pa-md-10 {
      padding: 40px !important;
    }

    .pa-md-11 {
      padding: 44px !important;
    }

    .pa-md-12 {
      padding: 48px !important;
    }

    .pa-md-13 {
      padding: 52px !important;
    }

    .pa-md-14 {
      padding: 56px !important;
    }

    .pa-md-15 {
      padding: 60px !important;
    }

    .pa-md-16 {
      padding: 64px !important;
    }

    .px-md-0 {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }

    .px-md-1 {
      padding-right: 4px !important;
      padding-left: 4px !important;
    }

    .px-md-2 {
      padding-right: 8px !important;
      padding-left: 8px !important;
    }

    .px-md-3 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    .px-md-4 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .px-md-5 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    .px-md-6 {
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .px-md-7 {
      padding-right: 28px !important;
      padding-left: 28px !important;
    }

    .px-md-8 {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }

    .px-md-9 {
      padding-right: 36px !important;
      padding-left: 36px !important;
    }

    .px-md-10 {
      padding-right: 40px !important;
      padding-left: 40px !important;
    }

    .px-md-11 {
      padding-right: 44px !important;
      padding-left: 44px !important;
    }

    .px-md-12 {
      padding-right: 48px !important;
      padding-left: 48px !important;
    }

    .px-md-13 {
      padding-right: 52px !important;
      padding-left: 52px !important;
    }

    .px-md-14 {
      padding-right: 56px !important;
      padding-left: 56px !important;
    }

    .px-md-15 {
      padding-right: 60px !important;
      padding-left: 60px !important;
    }

    .px-md-16 {
      padding-right: 64px !important;
      padding-left: 64px !important;
    }

    .py-md-0 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .py-md-1 {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .py-md-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }

    .py-md-3 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    .py-md-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    .py-md-5 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    .py-md-6 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    .py-md-7 {
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }

    .py-md-8 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }

    .py-md-9 {
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }

    .py-md-10 {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .py-md-11 {
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    .py-md-12 {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    .py-md-13 {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }

    .py-md-14 {
      padding-top: 56px !important;
      padding-bottom: 56px !important;
    }

    .py-md-15 {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }

    .py-md-16 {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    .pt-md-0 {
      padding-top: 0px !important;
    }

    .pt-md-1 {
      padding-top: 4px !important;
    }

    .pt-md-2 {
      padding-top: 8px !important;
    }

    .pt-md-3 {
      padding-top: 12px !important;
    }

    .pt-md-4 {
      padding-top: 16px !important;
    }

    .pt-md-5 {
      padding-top: 20px !important;
    }

    .pt-md-6 {
      padding-top: 24px !important;
    }

    .pt-md-7 {
      padding-top: 28px !important;
    }

    .pt-md-8 {
      padding-top: 32px !important;
    }

    .pt-md-9 {
      padding-top: 36px !important;
    }

    .pt-md-10 {
      padding-top: 40px !important;
    }

    .pt-md-11 {
      padding-top: 44px !important;
    }

    .pt-md-12 {
      padding-top: 48px !important;
    }

    .pt-md-13 {
      padding-top: 52px !important;
    }

    .pt-md-14 {
      padding-top: 56px !important;
    }

    .pt-md-15 {
      padding-top: 60px !important;
    }

    .pt-md-16 {
      padding-top: 64px !important;
    }

    .pr-md-0 {
      padding-right: 0px !important;
    }

    .pr-md-1 {
      padding-right: 4px !important;
    }

    .pr-md-2 {
      padding-right: 8px !important;
    }

    .pr-md-3 {
      padding-right: 12px !important;
    }

    .pr-md-4 {
      padding-right: 16px !important;
    }

    .pr-md-5 {
      padding-right: 20px !important;
    }

    .pr-md-6 {
      padding-right: 24px !important;
    }

    .pr-md-7 {
      padding-right: 28px !important;
    }

    .pr-md-8 {
      padding-right: 32px !important;
    }

    .pr-md-9 {
      padding-right: 36px !important;
    }

    .pr-md-10 {
      padding-right: 40px !important;
    }

    .pr-md-11 {
      padding-right: 44px !important;
    }

    .pr-md-12 {
      padding-right: 48px !important;
    }

    .pr-md-13 {
      padding-right: 52px !important;
    }

    .pr-md-14 {
      padding-right: 56px !important;
    }

    .pr-md-15 {
      padding-right: 60px !important;
    }

    .pr-md-16 {
      padding-right: 64px !important;
    }

    .pb-md-0 {
      padding-bottom: 0px !important;
    }

    .pb-md-1 {
      padding-bottom: 4px !important;
    }

    .pb-md-2 {
      padding-bottom: 8px !important;
    }

    .pb-md-3 {
      padding-bottom: 12px !important;
    }

    .pb-md-4 {
      padding-bottom: 16px !important;
    }

    .pb-md-5 {
      padding-bottom: 20px !important;
    }

    .pb-md-6 {
      padding-bottom: 24px !important;
    }

    .pb-md-7 {
      padding-bottom: 28px !important;
    }

    .pb-md-8 {
      padding-bottom: 32px !important;
    }

    .pb-md-9 {
      padding-bottom: 36px !important;
    }

    .pb-md-10 {
      padding-bottom: 40px !important;
    }

    .pb-md-11 {
      padding-bottom: 44px !important;
    }

    .pb-md-12 {
      padding-bottom: 48px !important;
    }

    .pb-md-13 {
      padding-bottom: 52px !important;
    }

    .pb-md-14 {
      padding-bottom: 56px !important;
    }

    .pb-md-15 {
      padding-bottom: 60px !important;
    }

    .pb-md-16 {
      padding-bottom: 64px !important;
    }

    .pl-md-0 {
      padding-left: 0px !important;
    }

    .pl-md-1 {
      padding-left: 4px !important;
    }

    .pl-md-2 {
      padding-left: 8px !important;
    }

    .pl-md-3 {
      padding-left: 12px !important;
    }

    .pl-md-4 {
      padding-left: 16px !important;
    }

    .pl-md-5 {
      padding-left: 20px !important;
    }

    .pl-md-6 {
      padding-left: 24px !important;
    }

    .pl-md-7 {
      padding-left: 28px !important;
    }

    .pl-md-8 {
      padding-left: 32px !important;
    }

    .pl-md-9 {
      padding-left: 36px !important;
    }

    .pl-md-10 {
      padding-left: 40px !important;
    }

    .pl-md-11 {
      padding-left: 44px !important;
    }

    .pl-md-12 {
      padding-left: 48px !important;
    }

    .pl-md-13 {
      padding-left: 52px !important;
    }

    .pl-md-14 {
      padding-left: 56px !important;
    }

    .pl-md-15 {
      padding-left: 60px !important;
    }

    .pl-md-16 {
      padding-left: 64px !important;
    }

    .ps-md-0 {
      padding-inline-start: 0px !important;
    }

    .ps-md-1 {
      padding-inline-start: 4px !important;
    }

    .ps-md-2 {
      padding-inline-start: 8px !important;
    }

    .ps-md-3 {
      padding-inline-start: 12px !important;
    }

    .ps-md-4 {
      padding-inline-start: 16px !important;
    }

    .ps-md-5 {
      padding-inline-start: 20px !important;
    }

    .ps-md-6 {
      padding-inline-start: 24px !important;
    }

    .ps-md-7 {
      padding-inline-start: 28px !important;
    }

    .ps-md-8 {
      padding-inline-start: 32px !important;
    }

    .ps-md-9 {
      padding-inline-start: 36px !important;
    }

    .ps-md-10 {
      padding-inline-start: 40px !important;
    }

    .ps-md-11 {
      padding-inline-start: 44px !important;
    }

    .ps-md-12 {
      padding-inline-start: 48px !important;
    }

    .ps-md-13 {
      padding-inline-start: 52px !important;
    }

    .ps-md-14 {
      padding-inline-start: 56px !important;
    }

    .ps-md-15 {
      padding-inline-start: 60px !important;
    }

    .ps-md-16 {
      padding-inline-start: 64px !important;
    }

    .pe-md-0 {
      padding-inline-end: 0px !important;
    }

    .pe-md-1 {
      padding-inline-end: 4px !important;
    }

    .pe-md-2 {
      padding-inline-end: 8px !important;
    }

    .pe-md-3 {
      padding-inline-end: 12px !important;
    }

    .pe-md-4 {
      padding-inline-end: 16px !important;
    }

    .pe-md-5 {
      padding-inline-end: 20px !important;
    }

    .pe-md-6 {
      padding-inline-end: 24px !important;
    }

    .pe-md-7 {
      padding-inline-end: 28px !important;
    }

    .pe-md-8 {
      padding-inline-end: 32px !important;
    }

    .pe-md-9 {
      padding-inline-end: 36px !important;
    }

    .pe-md-10 {
      padding-inline-end: 40px !important;
    }

    .pe-md-11 {
      padding-inline-end: 44px !important;
    }

    .pe-md-12 {
      padding-inline-end: 48px !important;
    }

    .pe-md-13 {
      padding-inline-end: 52px !important;
    }

    .pe-md-14 {
      padding-inline-end: 56px !important;
    }

    .pe-md-15 {
      padding-inline-end: 60px !important;
    }

    .pe-md-16 {
      padding-inline-end: 64px !important;
    }

    .text-md-left {
      text-align: left !important;
    }

    .text-md-right {
      text-align: right !important;
    }

    .text-md-center {
      text-align: center !important;
    }

    .text-md-justify {
      text-align: justify !important;
    }

    .text-md-start {
      text-align: start !important;
    }

    .text-md-end {
      text-align: end !important;
    }

    .text-md-h1 {
      font-size: 6rem !important;
      font-weight: 500;
      line-height: 7rem;
      letter-spacing: -0.015625em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-h2 {
      font-size: 3.75rem !important;
      font-weight: 500;
      line-height: 4.5rem;
      letter-spacing: -0.0083333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-h3 {
      font-size: 3rem !important;
      font-weight: 500;
      line-height: 3.5rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-h4 {
      font-size: 2.125rem !important;
      font-weight: 500;
      line-height: 2.625rem;
      letter-spacing: 0.0073529412em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-h5 {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-h6 {
      font-size: 1.25rem !important;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-subtitle-1 {
      font-size: 1rem !important;
      font-weight: normal;
      line-height: 1.75rem;
      letter-spacing: 0.009375em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-subtitle-2 {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: 0.0071428571em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-body-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0.03125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-body-2 {
      font-size: 0.875rem !important;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.0178571429em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-button {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 2.25rem;
      letter-spacing: 0.0892857143em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }

    .text-md-caption {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.25rem;
      letter-spacing: 0.0333333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-md-overline {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }
  }

  @media (min-width: 1280px) {
    .d-lg-none {
      display: none !important;
    }

    .d-lg-inline {
      display: inline !important;
    }

    .d-lg-inline-block {
      display: inline-block !important;
    }

    .d-lg-block {
      display: block !important;
    }

    .d-lg-table {
      display: table !important;
    }

    .d-lg-table-row {
      display: table-row !important;
    }

    .d-lg-table-cell {
      display: table-cell !important;
    }

    .d-lg-flex {
      display: flex !important;
    }

    .d-lg-inline-flex {
      display: inline-flex !important;
    }

    .float-lg-none {
      float: none !important;
    }

    .float-lg-left {
      float: left !important;
    }

    .float-lg-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-lg-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-lg-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-lg-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-lg-start {
      float: left !important;
    }

    .flex-lg-fill {
      flex: 1 1 auto !important;
    }

    .flex-lg-row {
      flex-direction: row !important;
    }

    .flex-lg-column {
      flex-direction: column !important;
    }

    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }

    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-lg-start {
      justify-content: flex-start !important;
    }

    .justify-lg-end {
      justify-content: flex-end !important;
    }

    .justify-lg-center {
      justify-content: center !important;
    }

    .justify-lg-space-between {
      justify-content: space-between !important;
    }

    .justify-lg-space-around {
      justify-content: space-around !important;
    }

    .justify-lg-space-evenly {
      justify-content: space-evenly !important;
    }

    .align-lg-start {
      align-items: flex-start !important;
    }

    .align-lg-end {
      align-items: flex-end !important;
    }

    .align-lg-center {
      align-items: center !important;
    }

    .align-lg-baseline {
      align-items: baseline !important;
    }

    .align-lg-stretch {
      align-items: stretch !important;
    }

    .align-content-lg-start {
      align-content: flex-start !important;
    }

    .align-content-lg-end {
      align-content: flex-end !important;
    }

    .align-content-lg-center {
      align-content: center !important;
    }

    .align-content-lg-space-between {
      align-content: space-between !important;
    }

    .align-content-lg-space-around {
      align-content: space-around !important;
    }

    .align-content-lg-space-evenly {
      align-content: space-evenly !important;
    }

    .align-content-lg-stretch {
      align-content: stretch !important;
    }

    .align-self-lg-auto {
      align-self: auto !important;
    }

    .align-self-lg-start {
      align-self: flex-start !important;
    }

    .align-self-lg-end {
      align-self: flex-end !important;
    }

    .align-self-lg-center {
      align-self: center !important;
    }

    .align-self-lg-baseline {
      align-self: baseline !important;
    }

    .align-self-lg-stretch {
      align-self: stretch !important;
    }

    .order-lg-first {
      order: -1 !important;
    }

    .order-lg-0 {
      order: 0 !important;
    }

    .order-lg-1 {
      order: 1 !important;
    }

    .order-lg-2 {
      order: 2 !important;
    }

    .order-lg-3 {
      order: 3 !important;
    }

    .order-lg-4 {
      order: 4 !important;
    }

    .order-lg-5 {
      order: 5 !important;
    }

    .order-lg-6 {
      order: 6 !important;
    }

    .order-lg-7 {
      order: 7 !important;
    }

    .order-lg-8 {
      order: 8 !important;
    }

    .order-lg-9 {
      order: 9 !important;
    }

    .order-lg-10 {
      order: 10 !important;
    }

    .order-lg-11 {
      order: 11 !important;
    }

    .order-lg-12 {
      order: 12 !important;
    }

    .order-lg-last {
      order: 13 !important;
    }

    .ma-lg-0 {
      margin: 0px !important;
    }

    .ma-lg-1 {
      margin: 4px !important;
    }

    .ma-lg-2 {
      margin: 8px !important;
    }

    .ma-lg-3 {
      margin: 12px !important;
    }

    .ma-lg-4 {
      margin: 16px !important;
    }

    .ma-lg-5 {
      margin: 20px !important;
    }

    .ma-lg-6 {
      margin: 24px !important;
    }

    .ma-lg-7 {
      margin: 28px !important;
    }

    .ma-lg-8 {
      margin: 32px !important;
    }

    .ma-lg-9 {
      margin: 36px !important;
    }

    .ma-lg-10 {
      margin: 40px !important;
    }

    .ma-lg-11 {
      margin: 44px !important;
    }

    .ma-lg-12 {
      margin: 48px !important;
    }

    .ma-lg-13 {
      margin: 52px !important;
    }

    .ma-lg-14 {
      margin: 56px !important;
    }

    .ma-lg-15 {
      margin: 60px !important;
    }

    .ma-lg-16 {
      margin: 64px !important;
    }

    .ma-lg-auto {
      margin: auto !important;
    }

    .mx-lg-0 {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }

    .mx-lg-1 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }

    .mx-lg-2 {
      margin-right: 8px !important;
      margin-left: 8px !important;
    }

    .mx-lg-3 {
      margin-right: 12px !important;
      margin-left: 12px !important;
    }

    .mx-lg-4 {
      margin-right: 16px !important;
      margin-left: 16px !important;
    }

    .mx-lg-5 {
      margin-right: 20px !important;
      margin-left: 20px !important;
    }

    .mx-lg-6 {
      margin-right: 24px !important;
      margin-left: 24px !important;
    }

    .mx-lg-7 {
      margin-right: 28px !important;
      margin-left: 28px !important;
    }

    .mx-lg-8 {
      margin-right: 32px !important;
      margin-left: 32px !important;
    }

    .mx-lg-9 {
      margin-right: 36px !important;
      margin-left: 36px !important;
    }

    .mx-lg-10 {
      margin-right: 40px !important;
      margin-left: 40px !important;
    }

    .mx-lg-11 {
      margin-right: 44px !important;
      margin-left: 44px !important;
    }

    .mx-lg-12 {
      margin-right: 48px !important;
      margin-left: 48px !important;
    }

    .mx-lg-13 {
      margin-right: 52px !important;
      margin-left: 52px !important;
    }

    .mx-lg-14 {
      margin-right: 56px !important;
      margin-left: 56px !important;
    }

    .mx-lg-15 {
      margin-right: 60px !important;
      margin-left: 60px !important;
    }

    .mx-lg-16 {
      margin-right: 64px !important;
      margin-left: 64px !important;
    }

    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-lg-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .my-lg-1 {
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }

    .my-lg-2 {
      margin-top: 8px !important;
      margin-bottom: 8px !important;
    }

    .my-lg-3 {
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }

    .my-lg-4 {
      margin-top: 16px !important;
      margin-bottom: 16px !important;
    }

    .my-lg-5 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }

    .my-lg-6 {
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }

    .my-lg-7 {
      margin-top: 28px !important;
      margin-bottom: 28px !important;
    }

    .my-lg-8 {
      margin-top: 32px !important;
      margin-bottom: 32px !important;
    }

    .my-lg-9 {
      margin-top: 36px !important;
      margin-bottom: 36px !important;
    }

    .my-lg-10 {
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }

    .my-lg-11 {
      margin-top: 44px !important;
      margin-bottom: 44px !important;
    }

    .my-lg-12 {
      margin-top: 48px !important;
      margin-bottom: 48px !important;
    }

    .my-lg-13 {
      margin-top: 52px !important;
      margin-bottom: 52px !important;
    }

    .my-lg-14 {
      margin-top: 56px !important;
      margin-bottom: 56px !important;
    }

    .my-lg-15 {
      margin-top: 60px !important;
      margin-bottom: 60px !important;
    }

    .my-lg-16 {
      margin-top: 64px !important;
      margin-bottom: 64px !important;
    }

    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-lg-0 {
      margin-top: 0px !important;
    }

    .mt-lg-1 {
      margin-top: 4px !important;
    }

    .mt-lg-2 {
      margin-top: 8px !important;
    }

    .mt-lg-3 {
      margin-top: 12px !important;
    }

    .mt-lg-4 {
      margin-top: 16px !important;
    }

    .mt-lg-5 {
      margin-top: 20px !important;
    }

    .mt-lg-6 {
      margin-top: 24px !important;
    }

    .mt-lg-7 {
      margin-top: 28px !important;
    }

    .mt-lg-8 {
      margin-top: 32px !important;
    }

    .mt-lg-9 {
      margin-top: 36px !important;
    }

    .mt-lg-10 {
      margin-top: 40px !important;
    }

    .mt-lg-11 {
      margin-top: 44px !important;
    }

    .mt-lg-12 {
      margin-top: 48px !important;
    }

    .mt-lg-13 {
      margin-top: 52px !important;
    }

    .mt-lg-14 {
      margin-top: 56px !important;
    }

    .mt-lg-15 {
      margin-top: 60px !important;
    }

    .mt-lg-16 {
      margin-top: 64px !important;
    }

    .mt-lg-auto {
      margin-top: auto !important;
    }

    .mr-lg-0 {
      margin-right: 0px !important;
    }

    .mr-lg-1 {
      margin-right: 4px !important;
    }

    .mr-lg-2 {
      margin-right: 8px !important;
    }

    .mr-lg-3 {
      margin-right: 12px !important;
    }

    .mr-lg-4 {
      margin-right: 16px !important;
    }

    .mr-lg-5 {
      margin-right: 20px !important;
    }

    .mr-lg-6 {
      margin-right: 24px !important;
    }

    .mr-lg-7 {
      margin-right: 28px !important;
    }

    .mr-lg-8 {
      margin-right: 32px !important;
    }

    .mr-lg-9 {
      margin-right: 36px !important;
    }

    .mr-lg-10 {
      margin-right: 40px !important;
    }

    .mr-lg-11 {
      margin-right: 44px !important;
    }

    .mr-lg-12 {
      margin-right: 48px !important;
    }

    .mr-lg-13 {
      margin-right: 52px !important;
    }

    .mr-lg-14 {
      margin-right: 56px !important;
    }

    .mr-lg-15 {
      margin-right: 60px !important;
    }

    .mr-lg-16 {
      margin-right: 64px !important;
    }

    .mr-lg-auto {
      margin-right: auto !important;
    }

    .mb-lg-0 {
      margin-bottom: 0px !important;
    }

    .mb-lg-1 {
      margin-bottom: 4px !important;
    }

    .mb-lg-2 {
      margin-bottom: 8px !important;
    }

    .mb-lg-3 {
      margin-bottom: 12px !important;
    }

    .mb-lg-4 {
      margin-bottom: 16px !important;
    }

    .mb-lg-5 {
      margin-bottom: 20px !important;
    }

    .mb-lg-6 {
      margin-bottom: 24px !important;
    }

    .mb-lg-7 {
      margin-bottom: 28px !important;
    }

    .mb-lg-8 {
      margin-bottom: 32px !important;
    }

    .mb-lg-9 {
      margin-bottom: 36px !important;
    }

    .mb-lg-10 {
      margin-bottom: 40px !important;
    }

    .mb-lg-11 {
      margin-bottom: 44px !important;
    }

    .mb-lg-12 {
      margin-bottom: 48px !important;
    }

    .mb-lg-13 {
      margin-bottom: 52px !important;
    }

    .mb-lg-14 {
      margin-bottom: 56px !important;
    }

    .mb-lg-15 {
      margin-bottom: 60px !important;
    }

    .mb-lg-16 {
      margin-bottom: 64px !important;
    }

    .mb-lg-auto {
      margin-bottom: auto !important;
    }

    .ml-lg-0 {
      margin-left: 0px !important;
    }

    .ml-lg-1 {
      margin-left: 4px !important;
    }

    .ml-lg-2 {
      margin-left: 8px !important;
    }

    .ml-lg-3 {
      margin-left: 12px !important;
    }

    .ml-lg-4 {
      margin-left: 16px !important;
    }

    .ml-lg-5 {
      margin-left: 20px !important;
    }

    .ml-lg-6 {
      margin-left: 24px !important;
    }

    .ml-lg-7 {
      margin-left: 28px !important;
    }

    .ml-lg-8 {
      margin-left: 32px !important;
    }

    .ml-lg-9 {
      margin-left: 36px !important;
    }

    .ml-lg-10 {
      margin-left: 40px !important;
    }

    .ml-lg-11 {
      margin-left: 44px !important;
    }

    .ml-lg-12 {
      margin-left: 48px !important;
    }

    .ml-lg-13 {
      margin-left: 52px !important;
    }

    .ml-lg-14 {
      margin-left: 56px !important;
    }

    .ml-lg-15 {
      margin-left: 60px !important;
    }

    .ml-lg-16 {
      margin-left: 64px !important;
    }

    .ml-lg-auto {
      margin-left: auto !important;
    }

    .ms-lg-0 {
      margin-inline-start: 0px !important;
    }

    .ms-lg-1 {
      margin-inline-start: 4px !important;
    }

    .ms-lg-2 {
      margin-inline-start: 8px !important;
    }

    .ms-lg-3 {
      margin-inline-start: 12px !important;
    }

    .ms-lg-4 {
      margin-inline-start: 16px !important;
    }

    .ms-lg-5 {
      margin-inline-start: 20px !important;
    }

    .ms-lg-6 {
      margin-inline-start: 24px !important;
    }

    .ms-lg-7 {
      margin-inline-start: 28px !important;
    }

    .ms-lg-8 {
      margin-inline-start: 32px !important;
    }

    .ms-lg-9 {
      margin-inline-start: 36px !important;
    }

    .ms-lg-10 {
      margin-inline-start: 40px !important;
    }

    .ms-lg-11 {
      margin-inline-start: 44px !important;
    }

    .ms-lg-12 {
      margin-inline-start: 48px !important;
    }

    .ms-lg-13 {
      margin-inline-start: 52px !important;
    }

    .ms-lg-14 {
      margin-inline-start: 56px !important;
    }

    .ms-lg-15 {
      margin-inline-start: 60px !important;
    }

    .ms-lg-16 {
      margin-inline-start: 64px !important;
    }

    .ms-lg-auto {
      margin-inline-start: auto !important;
    }

    .me-lg-0 {
      margin-inline-end: 0px !important;
    }

    .me-lg-1 {
      margin-inline-end: 4px !important;
    }

    .me-lg-2 {
      margin-inline-end: 8px !important;
    }

    .me-lg-3 {
      margin-inline-end: 12px !important;
    }

    .me-lg-4 {
      margin-inline-end: 16px !important;
    }

    .me-lg-5 {
      margin-inline-end: 20px !important;
    }

    .me-lg-6 {
      margin-inline-end: 24px !important;
    }

    .me-lg-7 {
      margin-inline-end: 28px !important;
    }

    .me-lg-8 {
      margin-inline-end: 32px !important;
    }

    .me-lg-9 {
      margin-inline-end: 36px !important;
    }

    .me-lg-10 {
      margin-inline-end: 40px !important;
    }

    .me-lg-11 {
      margin-inline-end: 44px !important;
    }

    .me-lg-12 {
      margin-inline-end: 48px !important;
    }

    .me-lg-13 {
      margin-inline-end: 52px !important;
    }

    .me-lg-14 {
      margin-inline-end: 56px !important;
    }

    .me-lg-15 {
      margin-inline-end: 60px !important;
    }

    .me-lg-16 {
      margin-inline-end: 64px !important;
    }

    .me-lg-auto {
      margin-inline-end: auto !important;
    }

    .ma-lg-n1 {
      margin: -4px !important;
    }

    .ma-lg-n2 {
      margin: -8px !important;
    }

    .ma-lg-n3 {
      margin: -12px !important;
    }

    .ma-lg-n4 {
      margin: -16px !important;
    }

    .ma-lg-n5 {
      margin: -20px !important;
    }

    .ma-lg-n6 {
      margin: -24px !important;
    }

    .ma-lg-n7 {
      margin: -28px !important;
    }

    .ma-lg-n8 {
      margin: -32px !important;
    }

    .ma-lg-n9 {
      margin: -36px !important;
    }

    .ma-lg-n10 {
      margin: -40px !important;
    }

    .ma-lg-n11 {
      margin: -44px !important;
    }

    .ma-lg-n12 {
      margin: -48px !important;
    }

    .ma-lg-n13 {
      margin: -52px !important;
    }

    .ma-lg-n14 {
      margin: -56px !important;
    }

    .ma-lg-n15 {
      margin: -60px !important;
    }

    .ma-lg-n16 {
      margin: -64px !important;
    }

    .mx-lg-n1 {
      margin-right: -4px !important;
      margin-left: -4px !important;
    }

    .mx-lg-n2 {
      margin-right: -8px !important;
      margin-left: -8px !important;
    }

    .mx-lg-n3 {
      margin-right: -12px !important;
      margin-left: -12px !important;
    }

    .mx-lg-n4 {
      margin-right: -16px !important;
      margin-left: -16px !important;
    }

    .mx-lg-n5 {
      margin-right: -20px !important;
      margin-left: -20px !important;
    }

    .mx-lg-n6 {
      margin-right: -24px !important;
      margin-left: -24px !important;
    }

    .mx-lg-n7 {
      margin-right: -28px !important;
      margin-left: -28px !important;
    }

    .mx-lg-n8 {
      margin-right: -32px !important;
      margin-left: -32px !important;
    }

    .mx-lg-n9 {
      margin-right: -36px !important;
      margin-left: -36px !important;
    }

    .mx-lg-n10 {
      margin-right: -40px !important;
      margin-left: -40px !important;
    }

    .mx-lg-n11 {
      margin-right: -44px !important;
      margin-left: -44px !important;
    }

    .mx-lg-n12 {
      margin-right: -48px !important;
      margin-left: -48px !important;
    }

    .mx-lg-n13 {
      margin-right: -52px !important;
      margin-left: -52px !important;
    }

    .mx-lg-n14 {
      margin-right: -56px !important;
      margin-left: -56px !important;
    }

    .mx-lg-n15 {
      margin-right: -60px !important;
      margin-left: -60px !important;
    }

    .mx-lg-n16 {
      margin-right: -64px !important;
      margin-left: -64px !important;
    }

    .my-lg-n1 {
      margin-top: -4px !important;
      margin-bottom: -4px !important;
    }

    .my-lg-n2 {
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    .my-lg-n3 {
      margin-top: -12px !important;
      margin-bottom: -12px !important;
    }

    .my-lg-n4 {
      margin-top: -16px !important;
      margin-bottom: -16px !important;
    }

    .my-lg-n5 {
      margin-top: -20px !important;
      margin-bottom: -20px !important;
    }

    .my-lg-n6 {
      margin-top: -24px !important;
      margin-bottom: -24px !important;
    }

    .my-lg-n7 {
      margin-top: -28px !important;
      margin-bottom: -28px !important;
    }

    .my-lg-n8 {
      margin-top: -32px !important;
      margin-bottom: -32px !important;
    }

    .my-lg-n9 {
      margin-top: -36px !important;
      margin-bottom: -36px !important;
    }

    .my-lg-n10 {
      margin-top: -40px !important;
      margin-bottom: -40px !important;
    }

    .my-lg-n11 {
      margin-top: -44px !important;
      margin-bottom: -44px !important;
    }

    .my-lg-n12 {
      margin-top: -48px !important;
      margin-bottom: -48px !important;
    }

    .my-lg-n13 {
      margin-top: -52px !important;
      margin-bottom: -52px !important;
    }

    .my-lg-n14 {
      margin-top: -56px !important;
      margin-bottom: -56px !important;
    }

    .my-lg-n15 {
      margin-top: -60px !important;
      margin-bottom: -60px !important;
    }

    .my-lg-n16 {
      margin-top: -64px !important;
      margin-bottom: -64px !important;
    }

    .mt-lg-n1 {
      margin-top: -4px !important;
    }

    .mt-lg-n2 {
      margin-top: -8px !important;
    }

    .mt-lg-n3 {
      margin-top: -12px !important;
    }

    .mt-lg-n4 {
      margin-top: -16px !important;
    }

    .mt-lg-n5 {
      margin-top: -20px !important;
    }

    .mt-lg-n6 {
      margin-top: -24px !important;
    }

    .mt-lg-n7 {
      margin-top: -28px !important;
    }

    .mt-lg-n8 {
      margin-top: -32px !important;
    }

    .mt-lg-n9 {
      margin-top: -36px !important;
    }

    .mt-lg-n10 {
      margin-top: -40px !important;
    }

    .mt-lg-n11 {
      margin-top: -44px !important;
    }

    .mt-lg-n12 {
      margin-top: -48px !important;
    }

    .mt-lg-n13 {
      margin-top: -52px !important;
    }

    .mt-lg-n14 {
      margin-top: -56px !important;
    }

    .mt-lg-n15 {
      margin-top: -60px !important;
    }

    .mt-lg-n16 {
      margin-top: -64px !important;
    }

    .mr-lg-n1 {
      margin-right: -4px !important;
    }

    .mr-lg-n2 {
      margin-right: -8px !important;
    }

    .mr-lg-n3 {
      margin-right: -12px !important;
    }

    .mr-lg-n4 {
      margin-right: -16px !important;
    }

    .mr-lg-n5 {
      margin-right: -20px !important;
    }

    .mr-lg-n6 {
      margin-right: -24px !important;
    }

    .mr-lg-n7 {
      margin-right: -28px !important;
    }

    .mr-lg-n8 {
      margin-right: -32px !important;
    }

    .mr-lg-n9 {
      margin-right: -36px !important;
    }

    .mr-lg-n10 {
      margin-right: -40px !important;
    }

    .mr-lg-n11 {
      margin-right: -44px !important;
    }

    .mr-lg-n12 {
      margin-right: -48px !important;
    }

    .mr-lg-n13 {
      margin-right: -52px !important;
    }

    .mr-lg-n14 {
      margin-right: -56px !important;
    }

    .mr-lg-n15 {
      margin-right: -60px !important;
    }

    .mr-lg-n16 {
      margin-right: -64px !important;
    }

    .mb-lg-n1 {
      margin-bottom: -4px !important;
    }

    .mb-lg-n2 {
      margin-bottom: -8px !important;
    }

    .mb-lg-n3 {
      margin-bottom: -12px !important;
    }

    .mb-lg-n4 {
      margin-bottom: -16px !important;
    }

    .mb-lg-n5 {
      margin-bottom: -20px !important;
    }

    .mb-lg-n6 {
      margin-bottom: -24px !important;
    }

    .mb-lg-n7 {
      margin-bottom: -28px !important;
    }

    .mb-lg-n8 {
      margin-bottom: -32px !important;
    }

    .mb-lg-n9 {
      margin-bottom: -36px !important;
    }

    .mb-lg-n10 {
      margin-bottom: -40px !important;
    }

    .mb-lg-n11 {
      margin-bottom: -44px !important;
    }

    .mb-lg-n12 {
      margin-bottom: -48px !important;
    }

    .mb-lg-n13 {
      margin-bottom: -52px !important;
    }

    .mb-lg-n14 {
      margin-bottom: -56px !important;
    }

    .mb-lg-n15 {
      margin-bottom: -60px !important;
    }

    .mb-lg-n16 {
      margin-bottom: -64px !important;
    }

    .ml-lg-n1 {
      margin-left: -4px !important;
    }

    .ml-lg-n2 {
      margin-left: -8px !important;
    }

    .ml-lg-n3 {
      margin-left: -12px !important;
    }

    .ml-lg-n4 {
      margin-left: -16px !important;
    }

    .ml-lg-n5 {
      margin-left: -20px !important;
    }

    .ml-lg-n6 {
      margin-left: -24px !important;
    }

    .ml-lg-n7 {
      margin-left: -28px !important;
    }

    .ml-lg-n8 {
      margin-left: -32px !important;
    }

    .ml-lg-n9 {
      margin-left: -36px !important;
    }

    .ml-lg-n10 {
      margin-left: -40px !important;
    }

    .ml-lg-n11 {
      margin-left: -44px !important;
    }

    .ml-lg-n12 {
      margin-left: -48px !important;
    }

    .ml-lg-n13 {
      margin-left: -52px !important;
    }

    .ml-lg-n14 {
      margin-left: -56px !important;
    }

    .ml-lg-n15 {
      margin-left: -60px !important;
    }

    .ml-lg-n16 {
      margin-left: -64px !important;
    }

    .ms-lg-n1 {
      margin-inline-start: -4px !important;
    }

    .ms-lg-n2 {
      margin-inline-start: -8px !important;
    }

    .ms-lg-n3 {
      margin-inline-start: -12px !important;
    }

    .ms-lg-n4 {
      margin-inline-start: -16px !important;
    }

    .ms-lg-n5 {
      margin-inline-start: -20px !important;
    }

    .ms-lg-n6 {
      margin-inline-start: -24px !important;
    }

    .ms-lg-n7 {
      margin-inline-start: -28px !important;
    }

    .ms-lg-n8 {
      margin-inline-start: -32px !important;
    }

    .ms-lg-n9 {
      margin-inline-start: -36px !important;
    }

    .ms-lg-n10 {
      margin-inline-start: -40px !important;
    }

    .ms-lg-n11 {
      margin-inline-start: -44px !important;
    }

    .ms-lg-n12 {
      margin-inline-start: -48px !important;
    }

    .ms-lg-n13 {
      margin-inline-start: -52px !important;
    }

    .ms-lg-n14 {
      margin-inline-start: -56px !important;
    }

    .ms-lg-n15 {
      margin-inline-start: -60px !important;
    }

    .ms-lg-n16 {
      margin-inline-start: -64px !important;
    }

    .me-lg-n1 {
      margin-inline-end: -4px !important;
    }

    .me-lg-n2 {
      margin-inline-end: -8px !important;
    }

    .me-lg-n3 {
      margin-inline-end: -12px !important;
    }

    .me-lg-n4 {
      margin-inline-end: -16px !important;
    }

    .me-lg-n5 {
      margin-inline-end: -20px !important;
    }

    .me-lg-n6 {
      margin-inline-end: -24px !important;
    }

    .me-lg-n7 {
      margin-inline-end: -28px !important;
    }

    .me-lg-n8 {
      margin-inline-end: -32px !important;
    }

    .me-lg-n9 {
      margin-inline-end: -36px !important;
    }

    .me-lg-n10 {
      margin-inline-end: -40px !important;
    }

    .me-lg-n11 {
      margin-inline-end: -44px !important;
    }

    .me-lg-n12 {
      margin-inline-end: -48px !important;
    }

    .me-lg-n13 {
      margin-inline-end: -52px !important;
    }

    .me-lg-n14 {
      margin-inline-end: -56px !important;
    }

    .me-lg-n15 {
      margin-inline-end: -60px !important;
    }

    .me-lg-n16 {
      margin-inline-end: -64px !important;
    }

    .pa-lg-0 {
      padding: 0px !important;
    }

    .pa-lg-1 {
      padding: 4px !important;
    }

    .pa-lg-2 {
      padding: 8px !important;
    }

    .pa-lg-3 {
      padding: 12px !important;
    }

    .pa-lg-4 {
      padding: 16px !important;
    }

    .pa-lg-5 {
      padding: 20px !important;
    }

    .pa-lg-6 {
      padding: 24px !important;
    }

    .pa-lg-7 {
      padding: 28px !important;
    }

    .pa-lg-8 {
      padding: 32px !important;
    }

    .pa-lg-9 {
      padding: 36px !important;
    }

    .pa-lg-10 {
      padding: 40px !important;
    }

    .pa-lg-11 {
      padding: 44px !important;
    }

    .pa-lg-12 {
      padding: 48px !important;
    }

    .pa-lg-13 {
      padding: 52px !important;
    }

    .pa-lg-14 {
      padding: 56px !important;
    }

    .pa-lg-15 {
      padding: 60px !important;
    }

    .pa-lg-16 {
      padding: 64px !important;
    }

    .px-lg-0 {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }

    .px-lg-1 {
      padding-right: 4px !important;
      padding-left: 4px !important;
    }

    .px-lg-2 {
      padding-right: 8px !important;
      padding-left: 8px !important;
    }

    .px-lg-3 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    .px-lg-4 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .px-lg-5 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    .px-lg-6 {
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .px-lg-7 {
      padding-right: 28px !important;
      padding-left: 28px !important;
    }

    .px-lg-8 {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }

    .px-lg-9 {
      padding-right: 36px !important;
      padding-left: 36px !important;
    }

    .px-lg-10 {
      padding-right: 40px !important;
      padding-left: 40px !important;
    }

    .px-lg-11 {
      padding-right: 44px !important;
      padding-left: 44px !important;
    }

    .px-lg-12 {
      padding-right: 48px !important;
      padding-left: 48px !important;
    }

    .px-lg-13 {
      padding-right: 52px !important;
      padding-left: 52px !important;
    }

    .px-lg-14 {
      padding-right: 56px !important;
      padding-left: 56px !important;
    }

    .px-lg-15 {
      padding-right: 60px !important;
      padding-left: 60px !important;
    }

    .px-lg-16 {
      padding-right: 64px !important;
      padding-left: 64px !important;
    }

    .py-lg-0 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .py-lg-1 {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .py-lg-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }

    .py-lg-3 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    .py-lg-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    .py-lg-5 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    .py-lg-6 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    .py-lg-7 {
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }

    .py-lg-8 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }

    .py-lg-9 {
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }

    .py-lg-10 {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .py-lg-11 {
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    .py-lg-12 {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    .py-lg-13 {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }

    .py-lg-14 {
      padding-top: 56px !important;
      padding-bottom: 56px !important;
    }

    .py-lg-15 {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }

    .py-lg-16 {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    .pt-lg-0 {
      padding-top: 0px !important;
    }

    .pt-lg-1 {
      padding-top: 4px !important;
    }

    .pt-lg-2 {
      padding-top: 8px !important;
    }

    .pt-lg-3 {
      padding-top: 12px !important;
    }

    .pt-lg-4 {
      padding-top: 16px !important;
    }

    .pt-lg-5 {
      padding-top: 20px !important;
    }

    .pt-lg-6 {
      padding-top: 24px !important;
    }

    .pt-lg-7 {
      padding-top: 28px !important;
    }

    .pt-lg-8 {
      padding-top: 32px !important;
    }

    .pt-lg-9 {
      padding-top: 36px !important;
    }

    .pt-lg-10 {
      padding-top: 40px !important;
    }

    .pt-lg-11 {
      padding-top: 44px !important;
    }

    .pt-lg-12 {
      padding-top: 48px !important;
    }

    .pt-lg-13 {
      padding-top: 52px !important;
    }

    .pt-lg-14 {
      padding-top: 56px !important;
    }

    .pt-lg-15 {
      padding-top: 60px !important;
    }

    .pt-lg-16 {
      padding-top: 64px !important;
    }

    .pr-lg-0 {
      padding-right: 0px !important;
    }

    .pr-lg-1 {
      padding-right: 4px !important;
    }

    .pr-lg-2 {
      padding-right: 8px !important;
    }

    .pr-lg-3 {
      padding-right: 12px !important;
    }

    .pr-lg-4 {
      padding-right: 16px !important;
    }

    .pr-lg-5 {
      padding-right: 20px !important;
    }

    .pr-lg-6 {
      padding-right: 24px !important;
    }

    .pr-lg-7 {
      padding-right: 28px !important;
    }

    .pr-lg-8 {
      padding-right: 32px !important;
    }

    .pr-lg-9 {
      padding-right: 36px !important;
    }

    .pr-lg-10 {
      padding-right: 40px !important;
    }

    .pr-lg-11 {
      padding-right: 44px !important;
    }

    .pr-lg-12 {
      padding-right: 48px !important;
    }

    .pr-lg-13 {
      padding-right: 52px !important;
    }

    .pr-lg-14 {
      padding-right: 56px !important;
    }

    .pr-lg-15 {
      padding-right: 60px !important;
    }

    .pr-lg-16 {
      padding-right: 64px !important;
    }

    .pb-lg-0 {
      padding-bottom: 0px !important;
    }

    .pb-lg-1 {
      padding-bottom: 4px !important;
    }

    .pb-lg-2 {
      padding-bottom: 8px !important;
    }

    .pb-lg-3 {
      padding-bottom: 12px !important;
    }

    .pb-lg-4 {
      padding-bottom: 16px !important;
    }

    .pb-lg-5 {
      padding-bottom: 20px !important;
    }

    .pb-lg-6 {
      padding-bottom: 24px !important;
    }

    .pb-lg-7 {
      padding-bottom: 28px !important;
    }

    .pb-lg-8 {
      padding-bottom: 32px !important;
    }

    .pb-lg-9 {
      padding-bottom: 36px !important;
    }

    .pb-lg-10 {
      padding-bottom: 40px !important;
    }

    .pb-lg-11 {
      padding-bottom: 44px !important;
    }

    .pb-lg-12 {
      padding-bottom: 48px !important;
    }

    .pb-lg-13 {
      padding-bottom: 52px !important;
    }

    .pb-lg-14 {
      padding-bottom: 56px !important;
    }

    .pb-lg-15 {
      padding-bottom: 60px !important;
    }

    .pb-lg-16 {
      padding-bottom: 64px !important;
    }

    .pl-lg-0 {
      padding-left: 0px !important;
    }

    .pl-lg-1 {
      padding-left: 4px !important;
    }

    .pl-lg-2 {
      padding-left: 8px !important;
    }

    .pl-lg-3 {
      padding-left: 12px !important;
    }

    .pl-lg-4 {
      padding-left: 16px !important;
    }

    .pl-lg-5 {
      padding-left: 20px !important;
    }

    .pl-lg-6 {
      padding-left: 24px !important;
    }

    .pl-lg-7 {
      padding-left: 28px !important;
    }

    .pl-lg-8 {
      padding-left: 32px !important;
    }

    .pl-lg-9 {
      padding-left: 36px !important;
    }

    .pl-lg-10 {
      padding-left: 40px !important;
    }

    .pl-lg-11 {
      padding-left: 44px !important;
    }

    .pl-lg-12 {
      padding-left: 48px !important;
    }

    .pl-lg-13 {
      padding-left: 52px !important;
    }

    .pl-lg-14 {
      padding-left: 56px !important;
    }

    .pl-lg-15 {
      padding-left: 60px !important;
    }

    .pl-lg-16 {
      padding-left: 64px !important;
    }

    .ps-lg-0 {
      padding-inline-start: 0px !important;
    }

    .ps-lg-1 {
      padding-inline-start: 4px !important;
    }

    .ps-lg-2 {
      padding-inline-start: 8px !important;
    }

    .ps-lg-3 {
      padding-inline-start: 12px !important;
    }

    .ps-lg-4 {
      padding-inline-start: 16px !important;
    }

    .ps-lg-5 {
      padding-inline-start: 20px !important;
    }

    .ps-lg-6 {
      padding-inline-start: 24px !important;
    }

    .ps-lg-7 {
      padding-inline-start: 28px !important;
    }

    .ps-lg-8 {
      padding-inline-start: 32px !important;
    }

    .ps-lg-9 {
      padding-inline-start: 36px !important;
    }

    .ps-lg-10 {
      padding-inline-start: 40px !important;
    }

    .ps-lg-11 {
      padding-inline-start: 44px !important;
    }

    .ps-lg-12 {
      padding-inline-start: 48px !important;
    }

    .ps-lg-13 {
      padding-inline-start: 52px !important;
    }

    .ps-lg-14 {
      padding-inline-start: 56px !important;
    }

    .ps-lg-15 {
      padding-inline-start: 60px !important;
    }

    .ps-lg-16 {
      padding-inline-start: 64px !important;
    }

    .pe-lg-0 {
      padding-inline-end: 0px !important;
    }

    .pe-lg-1 {
      padding-inline-end: 4px !important;
    }

    .pe-lg-2 {
      padding-inline-end: 8px !important;
    }

    .pe-lg-3 {
      padding-inline-end: 12px !important;
    }

    .pe-lg-4 {
      padding-inline-end: 16px !important;
    }

    .pe-lg-5 {
      padding-inline-end: 20px !important;
    }

    .pe-lg-6 {
      padding-inline-end: 24px !important;
    }

    .pe-lg-7 {
      padding-inline-end: 28px !important;
    }

    .pe-lg-8 {
      padding-inline-end: 32px !important;
    }

    .pe-lg-9 {
      padding-inline-end: 36px !important;
    }

    .pe-lg-10 {
      padding-inline-end: 40px !important;
    }

    .pe-lg-11 {
      padding-inline-end: 44px !important;
    }

    .pe-lg-12 {
      padding-inline-end: 48px !important;
    }

    .pe-lg-13 {
      padding-inline-end: 52px !important;
    }

    .pe-lg-14 {
      padding-inline-end: 56px !important;
    }

    .pe-lg-15 {
      padding-inline-end: 60px !important;
    }

    .pe-lg-16 {
      padding-inline-end: 64px !important;
    }

    .text-lg-left {
      text-align: left !important;
    }

    .text-lg-right {
      text-align: right !important;
    }

    .text-lg-center {
      text-align: center !important;
    }

    .text-lg-justify {
      text-align: justify !important;
    }

    .text-lg-start {
      text-align: start !important;
    }

    .text-lg-end {
      text-align: end !important;
    }

    .text-lg-h1 {
      font-size: 6rem !important;
      font-weight: 500;
      line-height: 7rem;
      letter-spacing: -0.015625em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-h2 {
      font-size: 3.75rem !important;
      font-weight: 500;
      line-height: 4.5rem;
      letter-spacing: -0.0083333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-h3 {
      font-size: 3rem !important;
      font-weight: 500;
      line-height: 3.5rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-h4 {
      font-size: 2.125rem !important;
      font-weight: 500;
      line-height: 2.625rem;
      letter-spacing: 0.0073529412em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-h5 {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-h6 {
      font-size: 1.25rem !important;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-subtitle-1 {
      font-size: 1rem !important;
      font-weight: normal;
      line-height: 1.75rem;
      letter-spacing: 0.009375em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-subtitle-2 {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: 0.0071428571em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-body-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0.03125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-body-2 {
      font-size: 0.875rem !important;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.0178571429em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-button {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 2.25rem;
      letter-spacing: 0.0892857143em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }

    .text-lg-caption {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.25rem;
      letter-spacing: 0.0333333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-lg-overline {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }
  }

  @media (min-width: 1920px) {
    .d-xl-none {
      display: none !important;
    }

    .d-xl-inline {
      display: inline !important;
    }

    .d-xl-inline-block {
      display: inline-block !important;
    }

    .d-xl-block {
      display: block !important;
    }

    .d-xl-table {
      display: table !important;
    }

    .d-xl-table-row {
      display: table-row !important;
    }

    .d-xl-table-cell {
      display: table-cell !important;
    }

    .d-xl-flex {
      display: flex !important;
    }

    .d-xl-inline-flex {
      display: inline-flex !important;
    }

    .float-xl-none {
      float: none !important;
    }

    .float-xl-left {
      float: left !important;
    }

    .float-xl-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-xl-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-xl-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-xl-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-xl-start {
      float: left !important;
    }

    .flex-xl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xl-row {
      flex-direction: row !important;
    }

    .flex-xl-column {
      flex-direction: column !important;
    }

    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-xl-start {
      justify-content: flex-start !important;
    }

    .justify-xl-end {
      justify-content: flex-end !important;
    }

    .justify-xl-center {
      justify-content: center !important;
    }

    .justify-xl-space-between {
      justify-content: space-between !important;
    }

    .justify-xl-space-around {
      justify-content: space-around !important;
    }

    .justify-xl-space-evenly {
      justify-content: space-evenly !important;
    }

    .align-xl-start {
      align-items: flex-start !important;
    }

    .align-xl-end {
      align-items: flex-end !important;
    }

    .align-xl-center {
      align-items: center !important;
    }

    .align-xl-baseline {
      align-items: baseline !important;
    }

    .align-xl-stretch {
      align-items: stretch !important;
    }

    .align-content-xl-start {
      align-content: flex-start !important;
    }

    .align-content-xl-end {
      align-content: flex-end !important;
    }

    .align-content-xl-center {
      align-content: center !important;
    }

    .align-content-xl-space-between {
      align-content: space-between !important;
    }

    .align-content-xl-space-around {
      align-content: space-around !important;
    }

    .align-content-xl-space-evenly {
      align-content: space-evenly !important;
    }

    .align-content-xl-stretch {
      align-content: stretch !important;
    }

    .align-self-xl-auto {
      align-self: auto !important;
    }

    .align-self-xl-start {
      align-self: flex-start !important;
    }

    .align-self-xl-end {
      align-self: flex-end !important;
    }

    .align-self-xl-center {
      align-self: center !important;
    }

    .align-self-xl-baseline {
      align-self: baseline !important;
    }

    .align-self-xl-stretch {
      align-self: stretch !important;
    }

    .order-xl-first {
      order: -1 !important;
    }

    .order-xl-0 {
      order: 0 !important;
    }

    .order-xl-1 {
      order: 1 !important;
    }

    .order-xl-2 {
      order: 2 !important;
    }

    .order-xl-3 {
      order: 3 !important;
    }

    .order-xl-4 {
      order: 4 !important;
    }

    .order-xl-5 {
      order: 5 !important;
    }

    .order-xl-6 {
      order: 6 !important;
    }

    .order-xl-7 {
      order: 7 !important;
    }

    .order-xl-8 {
      order: 8 !important;
    }

    .order-xl-9 {
      order: 9 !important;
    }

    .order-xl-10 {
      order: 10 !important;
    }

    .order-xl-11 {
      order: 11 !important;
    }

    .order-xl-12 {
      order: 12 !important;
    }

    .order-xl-last {
      order: 13 !important;
    }

    .ma-xl-0 {
      margin: 0px !important;
    }

    .ma-xl-1 {
      margin: 4px !important;
    }

    .ma-xl-2 {
      margin: 8px !important;
    }

    .ma-xl-3 {
      margin: 12px !important;
    }

    .ma-xl-4 {
      margin: 16px !important;
    }

    .ma-xl-5 {
      margin: 20px !important;
    }

    .ma-xl-6 {
      margin: 24px !important;
    }

    .ma-xl-7 {
      margin: 28px !important;
    }

    .ma-xl-8 {
      margin: 32px !important;
    }

    .ma-xl-9 {
      margin: 36px !important;
    }

    .ma-xl-10 {
      margin: 40px !important;
    }

    .ma-xl-11 {
      margin: 44px !important;
    }

    .ma-xl-12 {
      margin: 48px !important;
    }

    .ma-xl-13 {
      margin: 52px !important;
    }

    .ma-xl-14 {
      margin: 56px !important;
    }

    .ma-xl-15 {
      margin: 60px !important;
    }

    .ma-xl-16 {
      margin: 64px !important;
    }

    .ma-xl-auto {
      margin: auto !important;
    }

    .mx-xl-0 {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }

    .mx-xl-1 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }

    .mx-xl-2 {
      margin-right: 8px !important;
      margin-left: 8px !important;
    }

    .mx-xl-3 {
      margin-right: 12px !important;
      margin-left: 12px !important;
    }

    .mx-xl-4 {
      margin-right: 16px !important;
      margin-left: 16px !important;
    }

    .mx-xl-5 {
      margin-right: 20px !important;
      margin-left: 20px !important;
    }

    .mx-xl-6 {
      margin-right: 24px !important;
      margin-left: 24px !important;
    }

    .mx-xl-7 {
      margin-right: 28px !important;
      margin-left: 28px !important;
    }

    .mx-xl-8 {
      margin-right: 32px !important;
      margin-left: 32px !important;
    }

    .mx-xl-9 {
      margin-right: 36px !important;
      margin-left: 36px !important;
    }

    .mx-xl-10 {
      margin-right: 40px !important;
      margin-left: 40px !important;
    }

    .mx-xl-11 {
      margin-right: 44px !important;
      margin-left: 44px !important;
    }

    .mx-xl-12 {
      margin-right: 48px !important;
      margin-left: 48px !important;
    }

    .mx-xl-13 {
      margin-right: 52px !important;
      margin-left: 52px !important;
    }

    .mx-xl-14 {
      margin-right: 56px !important;
      margin-left: 56px !important;
    }

    .mx-xl-15 {
      margin-right: 60px !important;
      margin-left: 60px !important;
    }

    .mx-xl-16 {
      margin-right: 64px !important;
      margin-left: 64px !important;
    }

    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-xl-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .my-xl-1 {
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }

    .my-xl-2 {
      margin-top: 8px !important;
      margin-bottom: 8px !important;
    }

    .my-xl-3 {
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }

    .my-xl-4 {
      margin-top: 16px !important;
      margin-bottom: 16px !important;
    }

    .my-xl-5 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }

    .my-xl-6 {
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }

    .my-xl-7 {
      margin-top: 28px !important;
      margin-bottom: 28px !important;
    }

    .my-xl-8 {
      margin-top: 32px !important;
      margin-bottom: 32px !important;
    }

    .my-xl-9 {
      margin-top: 36px !important;
      margin-bottom: 36px !important;
    }

    .my-xl-10 {
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }

    .my-xl-11 {
      margin-top: 44px !important;
      margin-bottom: 44px !important;
    }

    .my-xl-12 {
      margin-top: 48px !important;
      margin-bottom: 48px !important;
    }

    .my-xl-13 {
      margin-top: 52px !important;
      margin-bottom: 52px !important;
    }

    .my-xl-14 {
      margin-top: 56px !important;
      margin-bottom: 56px !important;
    }

    .my-xl-15 {
      margin-top: 60px !important;
      margin-bottom: 60px !important;
    }

    .my-xl-16 {
      margin-top: 64px !important;
      margin-bottom: 64px !important;
    }

    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-xl-0 {
      margin-top: 0px !important;
    }

    .mt-xl-1 {
      margin-top: 4px !important;
    }

    .mt-xl-2 {
      margin-top: 8px !important;
    }

    .mt-xl-3 {
      margin-top: 12px !important;
    }

    .mt-xl-4 {
      margin-top: 16px !important;
    }

    .mt-xl-5 {
      margin-top: 20px !important;
    }

    .mt-xl-6 {
      margin-top: 24px !important;
    }

    .mt-xl-7 {
      margin-top: 28px !important;
    }

    .mt-xl-8 {
      margin-top: 32px !important;
    }

    .mt-xl-9 {
      margin-top: 36px !important;
    }

    .mt-xl-10 {
      margin-top: 40px !important;
    }

    .mt-xl-11 {
      margin-top: 44px !important;
    }

    .mt-xl-12 {
      margin-top: 48px !important;
    }

    .mt-xl-13 {
      margin-top: 52px !important;
    }

    .mt-xl-14 {
      margin-top: 56px !important;
    }

    .mt-xl-15 {
      margin-top: 60px !important;
    }

    .mt-xl-16 {
      margin-top: 64px !important;
    }

    .mt-xl-auto {
      margin-top: auto !important;
    }

    .mr-xl-0 {
      margin-right: 0px !important;
    }

    .mr-xl-1 {
      margin-right: 4px !important;
    }

    .mr-xl-2 {
      margin-right: 8px !important;
    }

    .mr-xl-3 {
      margin-right: 12px !important;
    }

    .mr-xl-4 {
      margin-right: 16px !important;
    }

    .mr-xl-5 {
      margin-right: 20px !important;
    }

    .mr-xl-6 {
      margin-right: 24px !important;
    }

    .mr-xl-7 {
      margin-right: 28px !important;
    }

    .mr-xl-8 {
      margin-right: 32px !important;
    }

    .mr-xl-9 {
      margin-right: 36px !important;
    }

    .mr-xl-10 {
      margin-right: 40px !important;
    }

    .mr-xl-11 {
      margin-right: 44px !important;
    }

    .mr-xl-12 {
      margin-right: 48px !important;
    }

    .mr-xl-13 {
      margin-right: 52px !important;
    }

    .mr-xl-14 {
      margin-right: 56px !important;
    }

    .mr-xl-15 {
      margin-right: 60px !important;
    }

    .mr-xl-16 {
      margin-right: 64px !important;
    }

    .mr-xl-auto {
      margin-right: auto !important;
    }

    .mb-xl-0 {
      margin-bottom: 0px !important;
    }

    .mb-xl-1 {
      margin-bottom: 4px !important;
    }

    .mb-xl-2 {
      margin-bottom: 8px !important;
    }

    .mb-xl-3 {
      margin-bottom: 12px !important;
    }

    .mb-xl-4 {
      margin-bottom: 16px !important;
    }

    .mb-xl-5 {
      margin-bottom: 20px !important;
    }

    .mb-xl-6 {
      margin-bottom: 24px !important;
    }

    .mb-xl-7 {
      margin-bottom: 28px !important;
    }

    .mb-xl-8 {
      margin-bottom: 32px !important;
    }

    .mb-xl-9 {
      margin-bottom: 36px !important;
    }

    .mb-xl-10 {
      margin-bottom: 40px !important;
    }

    .mb-xl-11 {
      margin-bottom: 44px !important;
    }

    .mb-xl-12 {
      margin-bottom: 48px !important;
    }

    .mb-xl-13 {
      margin-bottom: 52px !important;
    }

    .mb-xl-14 {
      margin-bottom: 56px !important;
    }

    .mb-xl-15 {
      margin-bottom: 60px !important;
    }

    .mb-xl-16 {
      margin-bottom: 64px !important;
    }

    .mb-xl-auto {
      margin-bottom: auto !important;
    }

    .ml-xl-0 {
      margin-left: 0px !important;
    }

    .ml-xl-1 {
      margin-left: 4px !important;
    }

    .ml-xl-2 {
      margin-left: 8px !important;
    }

    .ml-xl-3 {
      margin-left: 12px !important;
    }

    .ml-xl-4 {
      margin-left: 16px !important;
    }

    .ml-xl-5 {
      margin-left: 20px !important;
    }

    .ml-xl-6 {
      margin-left: 24px !important;
    }

    .ml-xl-7 {
      margin-left: 28px !important;
    }

    .ml-xl-8 {
      margin-left: 32px !important;
    }

    .ml-xl-9 {
      margin-left: 36px !important;
    }

    .ml-xl-10 {
      margin-left: 40px !important;
    }

    .ml-xl-11 {
      margin-left: 44px !important;
    }

    .ml-xl-12 {
      margin-left: 48px !important;
    }

    .ml-xl-13 {
      margin-left: 52px !important;
    }

    .ml-xl-14 {
      margin-left: 56px !important;
    }

    .ml-xl-15 {
      margin-left: 60px !important;
    }

    .ml-xl-16 {
      margin-left: 64px !important;
    }

    .ml-xl-auto {
      margin-left: auto !important;
    }

    .ms-xl-0 {
      margin-inline-start: 0px !important;
    }

    .ms-xl-1 {
      margin-inline-start: 4px !important;
    }

    .ms-xl-2 {
      margin-inline-start: 8px !important;
    }

    .ms-xl-3 {
      margin-inline-start: 12px !important;
    }

    .ms-xl-4 {
      margin-inline-start: 16px !important;
    }

    .ms-xl-5 {
      margin-inline-start: 20px !important;
    }

    .ms-xl-6 {
      margin-inline-start: 24px !important;
    }

    .ms-xl-7 {
      margin-inline-start: 28px !important;
    }

    .ms-xl-8 {
      margin-inline-start: 32px !important;
    }

    .ms-xl-9 {
      margin-inline-start: 36px !important;
    }

    .ms-xl-10 {
      margin-inline-start: 40px !important;
    }

    .ms-xl-11 {
      margin-inline-start: 44px !important;
    }

    .ms-xl-12 {
      margin-inline-start: 48px !important;
    }

    .ms-xl-13 {
      margin-inline-start: 52px !important;
    }

    .ms-xl-14 {
      margin-inline-start: 56px !important;
    }

    .ms-xl-15 {
      margin-inline-start: 60px !important;
    }

    .ms-xl-16 {
      margin-inline-start: 64px !important;
    }

    .ms-xl-auto {
      margin-inline-start: auto !important;
    }

    .me-xl-0 {
      margin-inline-end: 0px !important;
    }

    .me-xl-1 {
      margin-inline-end: 4px !important;
    }

    .me-xl-2 {
      margin-inline-end: 8px !important;
    }

    .me-xl-3 {
      margin-inline-end: 12px !important;
    }

    .me-xl-4 {
      margin-inline-end: 16px !important;
    }

    .me-xl-5 {
      margin-inline-end: 20px !important;
    }

    .me-xl-6 {
      margin-inline-end: 24px !important;
    }

    .me-xl-7 {
      margin-inline-end: 28px !important;
    }

    .me-xl-8 {
      margin-inline-end: 32px !important;
    }

    .me-xl-9 {
      margin-inline-end: 36px !important;
    }

    .me-xl-10 {
      margin-inline-end: 40px !important;
    }

    .me-xl-11 {
      margin-inline-end: 44px !important;
    }

    .me-xl-12 {
      margin-inline-end: 48px !important;
    }

    .me-xl-13 {
      margin-inline-end: 52px !important;
    }

    .me-xl-14 {
      margin-inline-end: 56px !important;
    }

    .me-xl-15 {
      margin-inline-end: 60px !important;
    }

    .me-xl-16 {
      margin-inline-end: 64px !important;
    }

    .me-xl-auto {
      margin-inline-end: auto !important;
    }

    .ma-xl-n1 {
      margin: -4px !important;
    }

    .ma-xl-n2 {
      margin: -8px !important;
    }

    .ma-xl-n3 {
      margin: -12px !important;
    }

    .ma-xl-n4 {
      margin: -16px !important;
    }

    .ma-xl-n5 {
      margin: -20px !important;
    }

    .ma-xl-n6 {
      margin: -24px !important;
    }

    .ma-xl-n7 {
      margin: -28px !important;
    }

    .ma-xl-n8 {
      margin: -32px !important;
    }

    .ma-xl-n9 {
      margin: -36px !important;
    }

    .ma-xl-n10 {
      margin: -40px !important;
    }

    .ma-xl-n11 {
      margin: -44px !important;
    }

    .ma-xl-n12 {
      margin: -48px !important;
    }

    .ma-xl-n13 {
      margin: -52px !important;
    }

    .ma-xl-n14 {
      margin: -56px !important;
    }

    .ma-xl-n15 {
      margin: -60px !important;
    }

    .ma-xl-n16 {
      margin: -64px !important;
    }

    .mx-xl-n1 {
      margin-right: -4px !important;
      margin-left: -4px !important;
    }

    .mx-xl-n2 {
      margin-right: -8px !important;
      margin-left: -8px !important;
    }

    .mx-xl-n3 {
      margin-right: -12px !important;
      margin-left: -12px !important;
    }

    .mx-xl-n4 {
      margin-right: -16px !important;
      margin-left: -16px !important;
    }

    .mx-xl-n5 {
      margin-right: -20px !important;
      margin-left: -20px !important;
    }

    .mx-xl-n6 {
      margin-right: -24px !important;
      margin-left: -24px !important;
    }

    .mx-xl-n7 {
      margin-right: -28px !important;
      margin-left: -28px !important;
    }

    .mx-xl-n8 {
      margin-right: -32px !important;
      margin-left: -32px !important;
    }

    .mx-xl-n9 {
      margin-right: -36px !important;
      margin-left: -36px !important;
    }

    .mx-xl-n10 {
      margin-right: -40px !important;
      margin-left: -40px !important;
    }

    .mx-xl-n11 {
      margin-right: -44px !important;
      margin-left: -44px !important;
    }

    .mx-xl-n12 {
      margin-right: -48px !important;
      margin-left: -48px !important;
    }

    .mx-xl-n13 {
      margin-right: -52px !important;
      margin-left: -52px !important;
    }

    .mx-xl-n14 {
      margin-right: -56px !important;
      margin-left: -56px !important;
    }

    .mx-xl-n15 {
      margin-right: -60px !important;
      margin-left: -60px !important;
    }

    .mx-xl-n16 {
      margin-right: -64px !important;
      margin-left: -64px !important;
    }

    .my-xl-n1 {
      margin-top: -4px !important;
      margin-bottom: -4px !important;
    }

    .my-xl-n2 {
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    .my-xl-n3 {
      margin-top: -12px !important;
      margin-bottom: -12px !important;
    }

    .my-xl-n4 {
      margin-top: -16px !important;
      margin-bottom: -16px !important;
    }

    .my-xl-n5 {
      margin-top: -20px !important;
      margin-bottom: -20px !important;
    }

    .my-xl-n6 {
      margin-top: -24px !important;
      margin-bottom: -24px !important;
    }

    .my-xl-n7 {
      margin-top: -28px !important;
      margin-bottom: -28px !important;
    }

    .my-xl-n8 {
      margin-top: -32px !important;
      margin-bottom: -32px !important;
    }

    .my-xl-n9 {
      margin-top: -36px !important;
      margin-bottom: -36px !important;
    }

    .my-xl-n10 {
      margin-top: -40px !important;
      margin-bottom: -40px !important;
    }

    .my-xl-n11 {
      margin-top: -44px !important;
      margin-bottom: -44px !important;
    }

    .my-xl-n12 {
      margin-top: -48px !important;
      margin-bottom: -48px !important;
    }

    .my-xl-n13 {
      margin-top: -52px !important;
      margin-bottom: -52px !important;
    }

    .my-xl-n14 {
      margin-top: -56px !important;
      margin-bottom: -56px !important;
    }

    .my-xl-n15 {
      margin-top: -60px !important;
      margin-bottom: -60px !important;
    }

    .my-xl-n16 {
      margin-top: -64px !important;
      margin-bottom: -64px !important;
    }

    .mt-xl-n1 {
      margin-top: -4px !important;
    }

    .mt-xl-n2 {
      margin-top: -8px !important;
    }

    .mt-xl-n3 {
      margin-top: -12px !important;
    }

    .mt-xl-n4 {
      margin-top: -16px !important;
    }

    .mt-xl-n5 {
      margin-top: -20px !important;
    }

    .mt-xl-n6 {
      margin-top: -24px !important;
    }

    .mt-xl-n7 {
      margin-top: -28px !important;
    }

    .mt-xl-n8 {
      margin-top: -32px !important;
    }

    .mt-xl-n9 {
      margin-top: -36px !important;
    }

    .mt-xl-n10 {
      margin-top: -40px !important;
    }

    .mt-xl-n11 {
      margin-top: -44px !important;
    }

    .mt-xl-n12 {
      margin-top: -48px !important;
    }

    .mt-xl-n13 {
      margin-top: -52px !important;
    }

    .mt-xl-n14 {
      margin-top: -56px !important;
    }

    .mt-xl-n15 {
      margin-top: -60px !important;
    }

    .mt-xl-n16 {
      margin-top: -64px !important;
    }

    .mr-xl-n1 {
      margin-right: -4px !important;
    }

    .mr-xl-n2 {
      margin-right: -8px !important;
    }

    .mr-xl-n3 {
      margin-right: -12px !important;
    }

    .mr-xl-n4 {
      margin-right: -16px !important;
    }

    .mr-xl-n5 {
      margin-right: -20px !important;
    }

    .mr-xl-n6 {
      margin-right: -24px !important;
    }

    .mr-xl-n7 {
      margin-right: -28px !important;
    }

    .mr-xl-n8 {
      margin-right: -32px !important;
    }

    .mr-xl-n9 {
      margin-right: -36px !important;
    }

    .mr-xl-n10 {
      margin-right: -40px !important;
    }

    .mr-xl-n11 {
      margin-right: -44px !important;
    }

    .mr-xl-n12 {
      margin-right: -48px !important;
    }

    .mr-xl-n13 {
      margin-right: -52px !important;
    }

    .mr-xl-n14 {
      margin-right: -56px !important;
    }

    .mr-xl-n15 {
      margin-right: -60px !important;
    }

    .mr-xl-n16 {
      margin-right: -64px !important;
    }

    .mb-xl-n1 {
      margin-bottom: -4px !important;
    }

    .mb-xl-n2 {
      margin-bottom: -8px !important;
    }

    .mb-xl-n3 {
      margin-bottom: -12px !important;
    }

    .mb-xl-n4 {
      margin-bottom: -16px !important;
    }

    .mb-xl-n5 {
      margin-bottom: -20px !important;
    }

    .mb-xl-n6 {
      margin-bottom: -24px !important;
    }

    .mb-xl-n7 {
      margin-bottom: -28px !important;
    }

    .mb-xl-n8 {
      margin-bottom: -32px !important;
    }

    .mb-xl-n9 {
      margin-bottom: -36px !important;
    }

    .mb-xl-n10 {
      margin-bottom: -40px !important;
    }

    .mb-xl-n11 {
      margin-bottom: -44px !important;
    }

    .mb-xl-n12 {
      margin-bottom: -48px !important;
    }

    .mb-xl-n13 {
      margin-bottom: -52px !important;
    }

    .mb-xl-n14 {
      margin-bottom: -56px !important;
    }

    .mb-xl-n15 {
      margin-bottom: -60px !important;
    }

    .mb-xl-n16 {
      margin-bottom: -64px !important;
    }

    .ml-xl-n1 {
      margin-left: -4px !important;
    }

    .ml-xl-n2 {
      margin-left: -8px !important;
    }

    .ml-xl-n3 {
      margin-left: -12px !important;
    }

    .ml-xl-n4 {
      margin-left: -16px !important;
    }

    .ml-xl-n5 {
      margin-left: -20px !important;
    }

    .ml-xl-n6 {
      margin-left: -24px !important;
    }

    .ml-xl-n7 {
      margin-left: -28px !important;
    }

    .ml-xl-n8 {
      margin-left: -32px !important;
    }

    .ml-xl-n9 {
      margin-left: -36px !important;
    }

    .ml-xl-n10 {
      margin-left: -40px !important;
    }

    .ml-xl-n11 {
      margin-left: -44px !important;
    }

    .ml-xl-n12 {
      margin-left: -48px !important;
    }

    .ml-xl-n13 {
      margin-left: -52px !important;
    }

    .ml-xl-n14 {
      margin-left: -56px !important;
    }

    .ml-xl-n15 {
      margin-left: -60px !important;
    }

    .ml-xl-n16 {
      margin-left: -64px !important;
    }

    .ms-xl-n1 {
      margin-inline-start: -4px !important;
    }

    .ms-xl-n2 {
      margin-inline-start: -8px !important;
    }

    .ms-xl-n3 {
      margin-inline-start: -12px !important;
    }

    .ms-xl-n4 {
      margin-inline-start: -16px !important;
    }

    .ms-xl-n5 {
      margin-inline-start: -20px !important;
    }

    .ms-xl-n6 {
      margin-inline-start: -24px !important;
    }

    .ms-xl-n7 {
      margin-inline-start: -28px !important;
    }

    .ms-xl-n8 {
      margin-inline-start: -32px !important;
    }

    .ms-xl-n9 {
      margin-inline-start: -36px !important;
    }

    .ms-xl-n10 {
      margin-inline-start: -40px !important;
    }

    .ms-xl-n11 {
      margin-inline-start: -44px !important;
    }

    .ms-xl-n12 {
      margin-inline-start: -48px !important;
    }

    .ms-xl-n13 {
      margin-inline-start: -52px !important;
    }

    .ms-xl-n14 {
      margin-inline-start: -56px !important;
    }

    .ms-xl-n15 {
      margin-inline-start: -60px !important;
    }

    .ms-xl-n16 {
      margin-inline-start: -64px !important;
    }

    .me-xl-n1 {
      margin-inline-end: -4px !important;
    }

    .me-xl-n2 {
      margin-inline-end: -8px !important;
    }

    .me-xl-n3 {
      margin-inline-end: -12px !important;
    }

    .me-xl-n4 {
      margin-inline-end: -16px !important;
    }

    .me-xl-n5 {
      margin-inline-end: -20px !important;
    }

    .me-xl-n6 {
      margin-inline-end: -24px !important;
    }

    .me-xl-n7 {
      margin-inline-end: -28px !important;
    }

    .me-xl-n8 {
      margin-inline-end: -32px !important;
    }

    .me-xl-n9 {
      margin-inline-end: -36px !important;
    }

    .me-xl-n10 {
      margin-inline-end: -40px !important;
    }

    .me-xl-n11 {
      margin-inline-end: -44px !important;
    }

    .me-xl-n12 {
      margin-inline-end: -48px !important;
    }

    .me-xl-n13 {
      margin-inline-end: -52px !important;
    }

    .me-xl-n14 {
      margin-inline-end: -56px !important;
    }

    .me-xl-n15 {
      margin-inline-end: -60px !important;
    }

    .me-xl-n16 {
      margin-inline-end: -64px !important;
    }

    .pa-xl-0 {
      padding: 0px !important;
    }

    .pa-xl-1 {
      padding: 4px !important;
    }

    .pa-xl-2 {
      padding: 8px !important;
    }

    .pa-xl-3 {
      padding: 12px !important;
    }

    .pa-xl-4 {
      padding: 16px !important;
    }

    .pa-xl-5 {
      padding: 20px !important;
    }

    .pa-xl-6 {
      padding: 24px !important;
    }

    .pa-xl-7 {
      padding: 28px !important;
    }

    .pa-xl-8 {
      padding: 32px !important;
    }

    .pa-xl-9 {
      padding: 36px !important;
    }

    .pa-xl-10 {
      padding: 40px !important;
    }

    .pa-xl-11 {
      padding: 44px !important;
    }

    .pa-xl-12 {
      padding: 48px !important;
    }

    .pa-xl-13 {
      padding: 52px !important;
    }

    .pa-xl-14 {
      padding: 56px !important;
    }

    .pa-xl-15 {
      padding: 60px !important;
    }

    .pa-xl-16 {
      padding: 64px !important;
    }

    .px-xl-0 {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }

    .px-xl-1 {
      padding-right: 4px !important;
      padding-left: 4px !important;
    }

    .px-xl-2 {
      padding-right: 8px !important;
      padding-left: 8px !important;
    }

    .px-xl-3 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    .px-xl-4 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .px-xl-5 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    .px-xl-6 {
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .px-xl-7 {
      padding-right: 28px !important;
      padding-left: 28px !important;
    }

    .px-xl-8 {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }

    .px-xl-9 {
      padding-right: 36px !important;
      padding-left: 36px !important;
    }

    .px-xl-10 {
      padding-right: 40px !important;
      padding-left: 40px !important;
    }

    .px-xl-11 {
      padding-right: 44px !important;
      padding-left: 44px !important;
    }

    .px-xl-12 {
      padding-right: 48px !important;
      padding-left: 48px !important;
    }

    .px-xl-13 {
      padding-right: 52px !important;
      padding-left: 52px !important;
    }

    .px-xl-14 {
      padding-right: 56px !important;
      padding-left: 56px !important;
    }

    .px-xl-15 {
      padding-right: 60px !important;
      padding-left: 60px !important;
    }

    .px-xl-16 {
      padding-right: 64px !important;
      padding-left: 64px !important;
    }

    .py-xl-0 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .py-xl-1 {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .py-xl-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }

    .py-xl-3 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    .py-xl-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    .py-xl-5 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    .py-xl-6 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    .py-xl-7 {
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }

    .py-xl-8 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }

    .py-xl-9 {
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }

    .py-xl-10 {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .py-xl-11 {
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    .py-xl-12 {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    .py-xl-13 {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }

    .py-xl-14 {
      padding-top: 56px !important;
      padding-bottom: 56px !important;
    }

    .py-xl-15 {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }

    .py-xl-16 {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    .pt-xl-0 {
      padding-top: 0px !important;
    }

    .pt-xl-1 {
      padding-top: 4px !important;
    }

    .pt-xl-2 {
      padding-top: 8px !important;
    }

    .pt-xl-3 {
      padding-top: 12px !important;
    }

    .pt-xl-4 {
      padding-top: 16px !important;
    }

    .pt-xl-5 {
      padding-top: 20px !important;
    }

    .pt-xl-6 {
      padding-top: 24px !important;
    }

    .pt-xl-7 {
      padding-top: 28px !important;
    }

    .pt-xl-8 {
      padding-top: 32px !important;
    }

    .pt-xl-9 {
      padding-top: 36px !important;
    }

    .pt-xl-10 {
      padding-top: 40px !important;
    }

    .pt-xl-11 {
      padding-top: 44px !important;
    }

    .pt-xl-12 {
      padding-top: 48px !important;
    }

    .pt-xl-13 {
      padding-top: 52px !important;
    }

    .pt-xl-14 {
      padding-top: 56px !important;
    }

    .pt-xl-15 {
      padding-top: 60px !important;
    }

    .pt-xl-16 {
      padding-top: 64px !important;
    }

    .pr-xl-0 {
      padding-right: 0px !important;
    }

    .pr-xl-1 {
      padding-right: 4px !important;
    }

    .pr-xl-2 {
      padding-right: 8px !important;
    }

    .pr-xl-3 {
      padding-right: 12px !important;
    }

    .pr-xl-4 {
      padding-right: 16px !important;
    }

    .pr-xl-5 {
      padding-right: 20px !important;
    }

    .pr-xl-6 {
      padding-right: 24px !important;
    }

    .pr-xl-7 {
      padding-right: 28px !important;
    }

    .pr-xl-8 {
      padding-right: 32px !important;
    }

    .pr-xl-9 {
      padding-right: 36px !important;
    }

    .pr-xl-10 {
      padding-right: 40px !important;
    }

    .pr-xl-11 {
      padding-right: 44px !important;
    }

    .pr-xl-12 {
      padding-right: 48px !important;
    }

    .pr-xl-13 {
      padding-right: 52px !important;
    }

    .pr-xl-14 {
      padding-right: 56px !important;
    }

    .pr-xl-15 {
      padding-right: 60px !important;
    }

    .pr-xl-16 {
      padding-right: 64px !important;
    }

    .pb-xl-0 {
      padding-bottom: 0px !important;
    }

    .pb-xl-1 {
      padding-bottom: 4px !important;
    }

    .pb-xl-2 {
      padding-bottom: 8px !important;
    }

    .pb-xl-3 {
      padding-bottom: 12px !important;
    }

    .pb-xl-4 {
      padding-bottom: 16px !important;
    }

    .pb-xl-5 {
      padding-bottom: 20px !important;
    }

    .pb-xl-6 {
      padding-bottom: 24px !important;
    }

    .pb-xl-7 {
      padding-bottom: 28px !important;
    }

    .pb-xl-8 {
      padding-bottom: 32px !important;
    }

    .pb-xl-9 {
      padding-bottom: 36px !important;
    }

    .pb-xl-10 {
      padding-bottom: 40px !important;
    }

    .pb-xl-11 {
      padding-bottom: 44px !important;
    }

    .pb-xl-12 {
      padding-bottom: 48px !important;
    }

    .pb-xl-13 {
      padding-bottom: 52px !important;
    }

    .pb-xl-14 {
      padding-bottom: 56px !important;
    }

    .pb-xl-15 {
      padding-bottom: 60px !important;
    }

    .pb-xl-16 {
      padding-bottom: 64px !important;
    }

    .pl-xl-0 {
      padding-left: 0px !important;
    }

    .pl-xl-1 {
      padding-left: 4px !important;
    }

    .pl-xl-2 {
      padding-left: 8px !important;
    }

    .pl-xl-3 {
      padding-left: 12px !important;
    }

    .pl-xl-4 {
      padding-left: 16px !important;
    }

    .pl-xl-5 {
      padding-left: 20px !important;
    }

    .pl-xl-6 {
      padding-left: 24px !important;
    }

    .pl-xl-7 {
      padding-left: 28px !important;
    }

    .pl-xl-8 {
      padding-left: 32px !important;
    }

    .pl-xl-9 {
      padding-left: 36px !important;
    }

    .pl-xl-10 {
      padding-left: 40px !important;
    }

    .pl-xl-11 {
      padding-left: 44px !important;
    }

    .pl-xl-12 {
      padding-left: 48px !important;
    }

    .pl-xl-13 {
      padding-left: 52px !important;
    }

    .pl-xl-14 {
      padding-left: 56px !important;
    }

    .pl-xl-15 {
      padding-left: 60px !important;
    }

    .pl-xl-16 {
      padding-left: 64px !important;
    }

    .ps-xl-0 {
      padding-inline-start: 0px !important;
    }

    .ps-xl-1 {
      padding-inline-start: 4px !important;
    }

    .ps-xl-2 {
      padding-inline-start: 8px !important;
    }

    .ps-xl-3 {
      padding-inline-start: 12px !important;
    }

    .ps-xl-4 {
      padding-inline-start: 16px !important;
    }

    .ps-xl-5 {
      padding-inline-start: 20px !important;
    }

    .ps-xl-6 {
      padding-inline-start: 24px !important;
    }

    .ps-xl-7 {
      padding-inline-start: 28px !important;
    }

    .ps-xl-8 {
      padding-inline-start: 32px !important;
    }

    .ps-xl-9 {
      padding-inline-start: 36px !important;
    }

    .ps-xl-10 {
      padding-inline-start: 40px !important;
    }

    .ps-xl-11 {
      padding-inline-start: 44px !important;
    }

    .ps-xl-12 {
      padding-inline-start: 48px !important;
    }

    .ps-xl-13 {
      padding-inline-start: 52px !important;
    }

    .ps-xl-14 {
      padding-inline-start: 56px !important;
    }

    .ps-xl-15 {
      padding-inline-start: 60px !important;
    }

    .ps-xl-16 {
      padding-inline-start: 64px !important;
    }

    .pe-xl-0 {
      padding-inline-end: 0px !important;
    }

    .pe-xl-1 {
      padding-inline-end: 4px !important;
    }

    .pe-xl-2 {
      padding-inline-end: 8px !important;
    }

    .pe-xl-3 {
      padding-inline-end: 12px !important;
    }

    .pe-xl-4 {
      padding-inline-end: 16px !important;
    }

    .pe-xl-5 {
      padding-inline-end: 20px !important;
    }

    .pe-xl-6 {
      padding-inline-end: 24px !important;
    }

    .pe-xl-7 {
      padding-inline-end: 28px !important;
    }

    .pe-xl-8 {
      padding-inline-end: 32px !important;
    }

    .pe-xl-9 {
      padding-inline-end: 36px !important;
    }

    .pe-xl-10 {
      padding-inline-end: 40px !important;
    }

    .pe-xl-11 {
      padding-inline-end: 44px !important;
    }

    .pe-xl-12 {
      padding-inline-end: 48px !important;
    }

    .pe-xl-13 {
      padding-inline-end: 52px !important;
    }

    .pe-xl-14 {
      padding-inline-end: 56px !important;
    }

    .pe-xl-15 {
      padding-inline-end: 60px !important;
    }

    .pe-xl-16 {
      padding-inline-end: 64px !important;
    }

    .text-xl-left {
      text-align: left !important;
    }

    .text-xl-right {
      text-align: right !important;
    }

    .text-xl-center {
      text-align: center !important;
    }

    .text-xl-justify {
      text-align: justify !important;
    }

    .text-xl-start {
      text-align: start !important;
    }

    .text-xl-end {
      text-align: end !important;
    }

    .text-xl-h1 {
      font-size: 6rem !important;
      font-weight: 500;
      line-height: 7rem;
      letter-spacing: -0.015625em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-h2 {
      font-size: 3.75rem !important;
      font-weight: 500;
      line-height: 4.5rem;
      letter-spacing: -0.0083333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-h3 {
      font-size: 3rem !important;
      font-weight: 500;
      line-height: 3.5rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-h4 {
      font-size: 2.125rem !important;
      font-weight: 500;
      line-height: 2.625rem;
      letter-spacing: 0.0073529412em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-h5 {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-h6 {
      font-size: 1.25rem !important;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-subtitle-1 {
      font-size: 1rem !important;
      font-weight: normal;
      line-height: 1.75rem;
      letter-spacing: 0.009375em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-subtitle-2 {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: 0.0071428571em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-body-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0.03125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-body-2 {
      font-size: 0.875rem !important;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.0178571429em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-button {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 2.25rem;
      letter-spacing: 0.0892857143em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }

    .text-xl-caption {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.25rem;
      letter-spacing: 0.0333333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xl-overline {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }
  }

  @media (min-width: 2560px) {
    .d-xxl-none {
      display: none !important;
    }

    .d-xxl-inline {
      display: inline !important;
    }

    .d-xxl-inline-block {
      display: inline-block !important;
    }

    .d-xxl-block {
      display: block !important;
    }

    .d-xxl-table {
      display: table !important;
    }

    .d-xxl-table-row {
      display: table-row !important;
    }

    .d-xxl-table-cell {
      display: table-cell !important;
    }

    .d-xxl-flex {
      display: flex !important;
    }

    .d-xxl-inline-flex {
      display: inline-flex !important;
    }

    .float-xxl-none {
      float: none !important;
    }

    .float-xxl-left {
      float: left !important;
    }

    .float-xxl-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-xxl-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-xxl-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-xxl-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-xxl-start {
      float: left !important;
    }

    .flex-xxl-fill {
      flex: 1 1 auto !important;
    }

    .flex-xxl-row {
      flex-direction: row !important;
    }

    .flex-xxl-column {
      flex-direction: column !important;
    }

    .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .flex-xxl-grow-0 {
      flex-grow: 0 !important;
    }

    .flex-xxl-grow-1 {
      flex-grow: 1 !important;
    }

    .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
    }

    .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
    }

    .flex-xxl-wrap {
      flex-wrap: wrap !important;
    }

    .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
    }

    .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .justify-xxl-start {
      justify-content: flex-start !important;
    }

    .justify-xxl-end {
      justify-content: flex-end !important;
    }

    .justify-xxl-center {
      justify-content: center !important;
    }

    .justify-xxl-space-between {
      justify-content: space-between !important;
    }

    .justify-xxl-space-around {
      justify-content: space-around !important;
    }

    .justify-xxl-space-evenly {
      justify-content: space-evenly !important;
    }

    .align-xxl-start {
      align-items: flex-start !important;
    }

    .align-xxl-end {
      align-items: flex-end !important;
    }

    .align-xxl-center {
      align-items: center !important;
    }

    .align-xxl-baseline {
      align-items: baseline !important;
    }

    .align-xxl-stretch {
      align-items: stretch !important;
    }

    .align-content-xxl-start {
      align-content: flex-start !important;
    }

    .align-content-xxl-end {
      align-content: flex-end !important;
    }

    .align-content-xxl-center {
      align-content: center !important;
    }

    .align-content-xxl-space-between {
      align-content: space-between !important;
    }

    .align-content-xxl-space-around {
      align-content: space-around !important;
    }

    .align-content-xxl-space-evenly {
      align-content: space-evenly !important;
    }

    .align-content-xxl-stretch {
      align-content: stretch !important;
    }

    .align-self-xxl-auto {
      align-self: auto !important;
    }

    .align-self-xxl-start {
      align-self: flex-start !important;
    }

    .align-self-xxl-end {
      align-self: flex-end !important;
    }

    .align-self-xxl-center {
      align-self: center !important;
    }

    .align-self-xxl-baseline {
      align-self: baseline !important;
    }

    .align-self-xxl-stretch {
      align-self: stretch !important;
    }

    .order-xxl-first {
      order: -1 !important;
    }

    .order-xxl-0 {
      order: 0 !important;
    }

    .order-xxl-1 {
      order: 1 !important;
    }

    .order-xxl-2 {
      order: 2 !important;
    }

    .order-xxl-3 {
      order: 3 !important;
    }

    .order-xxl-4 {
      order: 4 !important;
    }

    .order-xxl-5 {
      order: 5 !important;
    }

    .order-xxl-6 {
      order: 6 !important;
    }

    .order-xxl-7 {
      order: 7 !important;
    }

    .order-xxl-8 {
      order: 8 !important;
    }

    .order-xxl-9 {
      order: 9 !important;
    }

    .order-xxl-10 {
      order: 10 !important;
    }

    .order-xxl-11 {
      order: 11 !important;
    }

    .order-xxl-12 {
      order: 12 !important;
    }

    .order-xxl-last {
      order: 13 !important;
    }

    .ma-xxl-0 {
      margin: 0px !important;
    }

    .ma-xxl-1 {
      margin: 4px !important;
    }

    .ma-xxl-2 {
      margin: 8px !important;
    }

    .ma-xxl-3 {
      margin: 12px !important;
    }

    .ma-xxl-4 {
      margin: 16px !important;
    }

    .ma-xxl-5 {
      margin: 20px !important;
    }

    .ma-xxl-6 {
      margin: 24px !important;
    }

    .ma-xxl-7 {
      margin: 28px !important;
    }

    .ma-xxl-8 {
      margin: 32px !important;
    }

    .ma-xxl-9 {
      margin: 36px !important;
    }

    .ma-xxl-10 {
      margin: 40px !important;
    }

    .ma-xxl-11 {
      margin: 44px !important;
    }

    .ma-xxl-12 {
      margin: 48px !important;
    }

    .ma-xxl-13 {
      margin: 52px !important;
    }

    .ma-xxl-14 {
      margin: 56px !important;
    }

    .ma-xxl-15 {
      margin: 60px !important;
    }

    .ma-xxl-16 {
      margin: 64px !important;
    }

    .ma-xxl-auto {
      margin: auto !important;
    }

    .mx-xxl-0 {
      margin-right: 0px !important;
      margin-left: 0px !important;
    }

    .mx-xxl-1 {
      margin-right: 4px !important;
      margin-left: 4px !important;
    }

    .mx-xxl-2 {
      margin-right: 8px !important;
      margin-left: 8px !important;
    }

    .mx-xxl-3 {
      margin-right: 12px !important;
      margin-left: 12px !important;
    }

    .mx-xxl-4 {
      margin-right: 16px !important;
      margin-left: 16px !important;
    }

    .mx-xxl-5 {
      margin-right: 20px !important;
      margin-left: 20px !important;
    }

    .mx-xxl-6 {
      margin-right: 24px !important;
      margin-left: 24px !important;
    }

    .mx-xxl-7 {
      margin-right: 28px !important;
      margin-left: 28px !important;
    }

    .mx-xxl-8 {
      margin-right: 32px !important;
      margin-left: 32px !important;
    }

    .mx-xxl-9 {
      margin-right: 36px !important;
      margin-left: 36px !important;
    }

    .mx-xxl-10 {
      margin-right: 40px !important;
      margin-left: 40px !important;
    }

    .mx-xxl-11 {
      margin-right: 44px !important;
      margin-left: 44px !important;
    }

    .mx-xxl-12 {
      margin-right: 48px !important;
      margin-left: 48px !important;
    }

    .mx-xxl-13 {
      margin-right: 52px !important;
      margin-left: 52px !important;
    }

    .mx-xxl-14 {
      margin-right: 56px !important;
      margin-left: 56px !important;
    }

    .mx-xxl-15 {
      margin-right: 60px !important;
      margin-left: 60px !important;
    }

    .mx-xxl-16 {
      margin-right: 64px !important;
      margin-left: 64px !important;
    }

    .mx-xxl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-xxl-0 {
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }

    .my-xxl-1 {
      margin-top: 4px !important;
      margin-bottom: 4px !important;
    }

    .my-xxl-2 {
      margin-top: 8px !important;
      margin-bottom: 8px !important;
    }

    .my-xxl-3 {
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }

    .my-xxl-4 {
      margin-top: 16px !important;
      margin-bottom: 16px !important;
    }

    .my-xxl-5 {
      margin-top: 20px !important;
      margin-bottom: 20px !important;
    }

    .my-xxl-6 {
      margin-top: 24px !important;
      margin-bottom: 24px !important;
    }

    .my-xxl-7 {
      margin-top: 28px !important;
      margin-bottom: 28px !important;
    }

    .my-xxl-8 {
      margin-top: 32px !important;
      margin-bottom: 32px !important;
    }

    .my-xxl-9 {
      margin-top: 36px !important;
      margin-bottom: 36px !important;
    }

    .my-xxl-10 {
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }

    .my-xxl-11 {
      margin-top: 44px !important;
      margin-bottom: 44px !important;
    }

    .my-xxl-12 {
      margin-top: 48px !important;
      margin-bottom: 48px !important;
    }

    .my-xxl-13 {
      margin-top: 52px !important;
      margin-bottom: 52px !important;
    }

    .my-xxl-14 {
      margin-top: 56px !important;
      margin-bottom: 56px !important;
    }

    .my-xxl-15 {
      margin-top: 60px !important;
      margin-bottom: 60px !important;
    }

    .my-xxl-16 {
      margin-top: 64px !important;
      margin-bottom: 64px !important;
    }

    .my-xxl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }

    .mt-xxl-0 {
      margin-top: 0px !important;
    }

    .mt-xxl-1 {
      margin-top: 4px !important;
    }

    .mt-xxl-2 {
      margin-top: 8px !important;
    }

    .mt-xxl-3 {
      margin-top: 12px !important;
    }

    .mt-xxl-4 {
      margin-top: 16px !important;
    }

    .mt-xxl-5 {
      margin-top: 20px !important;
    }

    .mt-xxl-6 {
      margin-top: 24px !important;
    }

    .mt-xxl-7 {
      margin-top: 28px !important;
    }

    .mt-xxl-8 {
      margin-top: 32px !important;
    }

    .mt-xxl-9 {
      margin-top: 36px !important;
    }

    .mt-xxl-10 {
      margin-top: 40px !important;
    }

    .mt-xxl-11 {
      margin-top: 44px !important;
    }

    .mt-xxl-12 {
      margin-top: 48px !important;
    }

    .mt-xxl-13 {
      margin-top: 52px !important;
    }

    .mt-xxl-14 {
      margin-top: 56px !important;
    }

    .mt-xxl-15 {
      margin-top: 60px !important;
    }

    .mt-xxl-16 {
      margin-top: 64px !important;
    }

    .mt-xxl-auto {
      margin-top: auto !important;
    }

    .mr-xxl-0 {
      margin-right: 0px !important;
    }

    .mr-xxl-1 {
      margin-right: 4px !important;
    }

    .mr-xxl-2 {
      margin-right: 8px !important;
    }

    .mr-xxl-3 {
      margin-right: 12px !important;
    }

    .mr-xxl-4 {
      margin-right: 16px !important;
    }

    .mr-xxl-5 {
      margin-right: 20px !important;
    }

    .mr-xxl-6 {
      margin-right: 24px !important;
    }

    .mr-xxl-7 {
      margin-right: 28px !important;
    }

    .mr-xxl-8 {
      margin-right: 32px !important;
    }

    .mr-xxl-9 {
      margin-right: 36px !important;
    }

    .mr-xxl-10 {
      margin-right: 40px !important;
    }

    .mr-xxl-11 {
      margin-right: 44px !important;
    }

    .mr-xxl-12 {
      margin-right: 48px !important;
    }

    .mr-xxl-13 {
      margin-right: 52px !important;
    }

    .mr-xxl-14 {
      margin-right: 56px !important;
    }

    .mr-xxl-15 {
      margin-right: 60px !important;
    }

    .mr-xxl-16 {
      margin-right: 64px !important;
    }

    .mr-xxl-auto {
      margin-right: auto !important;
    }

    .mb-xxl-0 {
      margin-bottom: 0px !important;
    }

    .mb-xxl-1 {
      margin-bottom: 4px !important;
    }

    .mb-xxl-2 {
      margin-bottom: 8px !important;
    }

    .mb-xxl-3 {
      margin-bottom: 12px !important;
    }

    .mb-xxl-4 {
      margin-bottom: 16px !important;
    }

    .mb-xxl-5 {
      margin-bottom: 20px !important;
    }

    .mb-xxl-6 {
      margin-bottom: 24px !important;
    }

    .mb-xxl-7 {
      margin-bottom: 28px !important;
    }

    .mb-xxl-8 {
      margin-bottom: 32px !important;
    }

    .mb-xxl-9 {
      margin-bottom: 36px !important;
    }

    .mb-xxl-10 {
      margin-bottom: 40px !important;
    }

    .mb-xxl-11 {
      margin-bottom: 44px !important;
    }

    .mb-xxl-12 {
      margin-bottom: 48px !important;
    }

    .mb-xxl-13 {
      margin-bottom: 52px !important;
    }

    .mb-xxl-14 {
      margin-bottom: 56px !important;
    }

    .mb-xxl-15 {
      margin-bottom: 60px !important;
    }

    .mb-xxl-16 {
      margin-bottom: 64px !important;
    }

    .mb-xxl-auto {
      margin-bottom: auto !important;
    }

    .ml-xxl-0 {
      margin-left: 0px !important;
    }

    .ml-xxl-1 {
      margin-left: 4px !important;
    }

    .ml-xxl-2 {
      margin-left: 8px !important;
    }

    .ml-xxl-3 {
      margin-left: 12px !important;
    }

    .ml-xxl-4 {
      margin-left: 16px !important;
    }

    .ml-xxl-5 {
      margin-left: 20px !important;
    }

    .ml-xxl-6 {
      margin-left: 24px !important;
    }

    .ml-xxl-7 {
      margin-left: 28px !important;
    }

    .ml-xxl-8 {
      margin-left: 32px !important;
    }

    .ml-xxl-9 {
      margin-left: 36px !important;
    }

    .ml-xxl-10 {
      margin-left: 40px !important;
    }

    .ml-xxl-11 {
      margin-left: 44px !important;
    }

    .ml-xxl-12 {
      margin-left: 48px !important;
    }

    .ml-xxl-13 {
      margin-left: 52px !important;
    }

    .ml-xxl-14 {
      margin-left: 56px !important;
    }

    .ml-xxl-15 {
      margin-left: 60px !important;
    }

    .ml-xxl-16 {
      margin-left: 64px !important;
    }

    .ml-xxl-auto {
      margin-left: auto !important;
    }

    .ms-xxl-0 {
      margin-inline-start: 0px !important;
    }

    .ms-xxl-1 {
      margin-inline-start: 4px !important;
    }

    .ms-xxl-2 {
      margin-inline-start: 8px !important;
    }

    .ms-xxl-3 {
      margin-inline-start: 12px !important;
    }

    .ms-xxl-4 {
      margin-inline-start: 16px !important;
    }

    .ms-xxl-5 {
      margin-inline-start: 20px !important;
    }

    .ms-xxl-6 {
      margin-inline-start: 24px !important;
    }

    .ms-xxl-7 {
      margin-inline-start: 28px !important;
    }

    .ms-xxl-8 {
      margin-inline-start: 32px !important;
    }

    .ms-xxl-9 {
      margin-inline-start: 36px !important;
    }

    .ms-xxl-10 {
      margin-inline-start: 40px !important;
    }

    .ms-xxl-11 {
      margin-inline-start: 44px !important;
    }

    .ms-xxl-12 {
      margin-inline-start: 48px !important;
    }

    .ms-xxl-13 {
      margin-inline-start: 52px !important;
    }

    .ms-xxl-14 {
      margin-inline-start: 56px !important;
    }

    .ms-xxl-15 {
      margin-inline-start: 60px !important;
    }

    .ms-xxl-16 {
      margin-inline-start: 64px !important;
    }

    .ms-xxl-auto {
      margin-inline-start: auto !important;
    }

    .me-xxl-0 {
      margin-inline-end: 0px !important;
    }

    .me-xxl-1 {
      margin-inline-end: 4px !important;
    }

    .me-xxl-2 {
      margin-inline-end: 8px !important;
    }

    .me-xxl-3 {
      margin-inline-end: 12px !important;
    }

    .me-xxl-4 {
      margin-inline-end: 16px !important;
    }

    .me-xxl-5 {
      margin-inline-end: 20px !important;
    }

    .me-xxl-6 {
      margin-inline-end: 24px !important;
    }

    .me-xxl-7 {
      margin-inline-end: 28px !important;
    }

    .me-xxl-8 {
      margin-inline-end: 32px !important;
    }

    .me-xxl-9 {
      margin-inline-end: 36px !important;
    }

    .me-xxl-10 {
      margin-inline-end: 40px !important;
    }

    .me-xxl-11 {
      margin-inline-end: 44px !important;
    }

    .me-xxl-12 {
      margin-inline-end: 48px !important;
    }

    .me-xxl-13 {
      margin-inline-end: 52px !important;
    }

    .me-xxl-14 {
      margin-inline-end: 56px !important;
    }

    .me-xxl-15 {
      margin-inline-end: 60px !important;
    }

    .me-xxl-16 {
      margin-inline-end: 64px !important;
    }

    .me-xxl-auto {
      margin-inline-end: auto !important;
    }

    .ma-xxl-n1 {
      margin: -4px !important;
    }

    .ma-xxl-n2 {
      margin: -8px !important;
    }

    .ma-xxl-n3 {
      margin: -12px !important;
    }

    .ma-xxl-n4 {
      margin: -16px !important;
    }

    .ma-xxl-n5 {
      margin: -20px !important;
    }

    .ma-xxl-n6 {
      margin: -24px !important;
    }

    .ma-xxl-n7 {
      margin: -28px !important;
    }

    .ma-xxl-n8 {
      margin: -32px !important;
    }

    .ma-xxl-n9 {
      margin: -36px !important;
    }

    .ma-xxl-n10 {
      margin: -40px !important;
    }

    .ma-xxl-n11 {
      margin: -44px !important;
    }

    .ma-xxl-n12 {
      margin: -48px !important;
    }

    .ma-xxl-n13 {
      margin: -52px !important;
    }

    .ma-xxl-n14 {
      margin: -56px !important;
    }

    .ma-xxl-n15 {
      margin: -60px !important;
    }

    .ma-xxl-n16 {
      margin: -64px !important;
    }

    .mx-xxl-n1 {
      margin-right: -4px !important;
      margin-left: -4px !important;
    }

    .mx-xxl-n2 {
      margin-right: -8px !important;
      margin-left: -8px !important;
    }

    .mx-xxl-n3 {
      margin-right: -12px !important;
      margin-left: -12px !important;
    }

    .mx-xxl-n4 {
      margin-right: -16px !important;
      margin-left: -16px !important;
    }

    .mx-xxl-n5 {
      margin-right: -20px !important;
      margin-left: -20px !important;
    }

    .mx-xxl-n6 {
      margin-right: -24px !important;
      margin-left: -24px !important;
    }

    .mx-xxl-n7 {
      margin-right: -28px !important;
      margin-left: -28px !important;
    }

    .mx-xxl-n8 {
      margin-right: -32px !important;
      margin-left: -32px !important;
    }

    .mx-xxl-n9 {
      margin-right: -36px !important;
      margin-left: -36px !important;
    }

    .mx-xxl-n10 {
      margin-right: -40px !important;
      margin-left: -40px !important;
    }

    .mx-xxl-n11 {
      margin-right: -44px !important;
      margin-left: -44px !important;
    }

    .mx-xxl-n12 {
      margin-right: -48px !important;
      margin-left: -48px !important;
    }

    .mx-xxl-n13 {
      margin-right: -52px !important;
      margin-left: -52px !important;
    }

    .mx-xxl-n14 {
      margin-right: -56px !important;
      margin-left: -56px !important;
    }

    .mx-xxl-n15 {
      margin-right: -60px !important;
      margin-left: -60px !important;
    }

    .mx-xxl-n16 {
      margin-right: -64px !important;
      margin-left: -64px !important;
    }

    .my-xxl-n1 {
      margin-top: -4px !important;
      margin-bottom: -4px !important;
    }

    .my-xxl-n2 {
      margin-top: -8px !important;
      margin-bottom: -8px !important;
    }

    .my-xxl-n3 {
      margin-top: -12px !important;
      margin-bottom: -12px !important;
    }

    .my-xxl-n4 {
      margin-top: -16px !important;
      margin-bottom: -16px !important;
    }

    .my-xxl-n5 {
      margin-top: -20px !important;
      margin-bottom: -20px !important;
    }

    .my-xxl-n6 {
      margin-top: -24px !important;
      margin-bottom: -24px !important;
    }

    .my-xxl-n7 {
      margin-top: -28px !important;
      margin-bottom: -28px !important;
    }

    .my-xxl-n8 {
      margin-top: -32px !important;
      margin-bottom: -32px !important;
    }

    .my-xxl-n9 {
      margin-top: -36px !important;
      margin-bottom: -36px !important;
    }

    .my-xxl-n10 {
      margin-top: -40px !important;
      margin-bottom: -40px !important;
    }

    .my-xxl-n11 {
      margin-top: -44px !important;
      margin-bottom: -44px !important;
    }

    .my-xxl-n12 {
      margin-top: -48px !important;
      margin-bottom: -48px !important;
    }

    .my-xxl-n13 {
      margin-top: -52px !important;
      margin-bottom: -52px !important;
    }

    .my-xxl-n14 {
      margin-top: -56px !important;
      margin-bottom: -56px !important;
    }

    .my-xxl-n15 {
      margin-top: -60px !important;
      margin-bottom: -60px !important;
    }

    .my-xxl-n16 {
      margin-top: -64px !important;
      margin-bottom: -64px !important;
    }

    .mt-xxl-n1 {
      margin-top: -4px !important;
    }

    .mt-xxl-n2 {
      margin-top: -8px !important;
    }

    .mt-xxl-n3 {
      margin-top: -12px !important;
    }

    .mt-xxl-n4 {
      margin-top: -16px !important;
    }

    .mt-xxl-n5 {
      margin-top: -20px !important;
    }

    .mt-xxl-n6 {
      margin-top: -24px !important;
    }

    .mt-xxl-n7 {
      margin-top: -28px !important;
    }

    .mt-xxl-n8 {
      margin-top: -32px !important;
    }

    .mt-xxl-n9 {
      margin-top: -36px !important;
    }

    .mt-xxl-n10 {
      margin-top: -40px !important;
    }

    .mt-xxl-n11 {
      margin-top: -44px !important;
    }

    .mt-xxl-n12 {
      margin-top: -48px !important;
    }

    .mt-xxl-n13 {
      margin-top: -52px !important;
    }

    .mt-xxl-n14 {
      margin-top: -56px !important;
    }

    .mt-xxl-n15 {
      margin-top: -60px !important;
    }

    .mt-xxl-n16 {
      margin-top: -64px !important;
    }

    .mr-xxl-n1 {
      margin-right: -4px !important;
    }

    .mr-xxl-n2 {
      margin-right: -8px !important;
    }

    .mr-xxl-n3 {
      margin-right: -12px !important;
    }

    .mr-xxl-n4 {
      margin-right: -16px !important;
    }

    .mr-xxl-n5 {
      margin-right: -20px !important;
    }

    .mr-xxl-n6 {
      margin-right: -24px !important;
    }

    .mr-xxl-n7 {
      margin-right: -28px !important;
    }

    .mr-xxl-n8 {
      margin-right: -32px !important;
    }

    .mr-xxl-n9 {
      margin-right: -36px !important;
    }

    .mr-xxl-n10 {
      margin-right: -40px !important;
    }

    .mr-xxl-n11 {
      margin-right: -44px !important;
    }

    .mr-xxl-n12 {
      margin-right: -48px !important;
    }

    .mr-xxl-n13 {
      margin-right: -52px !important;
    }

    .mr-xxl-n14 {
      margin-right: -56px !important;
    }

    .mr-xxl-n15 {
      margin-right: -60px !important;
    }

    .mr-xxl-n16 {
      margin-right: -64px !important;
    }

    .mb-xxl-n1 {
      margin-bottom: -4px !important;
    }

    .mb-xxl-n2 {
      margin-bottom: -8px !important;
    }

    .mb-xxl-n3 {
      margin-bottom: -12px !important;
    }

    .mb-xxl-n4 {
      margin-bottom: -16px !important;
    }

    .mb-xxl-n5 {
      margin-bottom: -20px !important;
    }

    .mb-xxl-n6 {
      margin-bottom: -24px !important;
    }

    .mb-xxl-n7 {
      margin-bottom: -28px !important;
    }

    .mb-xxl-n8 {
      margin-bottom: -32px !important;
    }

    .mb-xxl-n9 {
      margin-bottom: -36px !important;
    }

    .mb-xxl-n10 {
      margin-bottom: -40px !important;
    }

    .mb-xxl-n11 {
      margin-bottom: -44px !important;
    }

    .mb-xxl-n12 {
      margin-bottom: -48px !important;
    }

    .mb-xxl-n13 {
      margin-bottom: -52px !important;
    }

    .mb-xxl-n14 {
      margin-bottom: -56px !important;
    }

    .mb-xxl-n15 {
      margin-bottom: -60px !important;
    }

    .mb-xxl-n16 {
      margin-bottom: -64px !important;
    }

    .ml-xxl-n1 {
      margin-left: -4px !important;
    }

    .ml-xxl-n2 {
      margin-left: -8px !important;
    }

    .ml-xxl-n3 {
      margin-left: -12px !important;
    }

    .ml-xxl-n4 {
      margin-left: -16px !important;
    }

    .ml-xxl-n5 {
      margin-left: -20px !important;
    }

    .ml-xxl-n6 {
      margin-left: -24px !important;
    }

    .ml-xxl-n7 {
      margin-left: -28px !important;
    }

    .ml-xxl-n8 {
      margin-left: -32px !important;
    }

    .ml-xxl-n9 {
      margin-left: -36px !important;
    }

    .ml-xxl-n10 {
      margin-left: -40px !important;
    }

    .ml-xxl-n11 {
      margin-left: -44px !important;
    }

    .ml-xxl-n12 {
      margin-left: -48px !important;
    }

    .ml-xxl-n13 {
      margin-left: -52px !important;
    }

    .ml-xxl-n14 {
      margin-left: -56px !important;
    }

    .ml-xxl-n15 {
      margin-left: -60px !important;
    }

    .ml-xxl-n16 {
      margin-left: -64px !important;
    }

    .ms-xxl-n1 {
      margin-inline-start: -4px !important;
    }

    .ms-xxl-n2 {
      margin-inline-start: -8px !important;
    }

    .ms-xxl-n3 {
      margin-inline-start: -12px !important;
    }

    .ms-xxl-n4 {
      margin-inline-start: -16px !important;
    }

    .ms-xxl-n5 {
      margin-inline-start: -20px !important;
    }

    .ms-xxl-n6 {
      margin-inline-start: -24px !important;
    }

    .ms-xxl-n7 {
      margin-inline-start: -28px !important;
    }

    .ms-xxl-n8 {
      margin-inline-start: -32px !important;
    }

    .ms-xxl-n9 {
      margin-inline-start: -36px !important;
    }

    .ms-xxl-n10 {
      margin-inline-start: -40px !important;
    }

    .ms-xxl-n11 {
      margin-inline-start: -44px !important;
    }

    .ms-xxl-n12 {
      margin-inline-start: -48px !important;
    }

    .ms-xxl-n13 {
      margin-inline-start: -52px !important;
    }

    .ms-xxl-n14 {
      margin-inline-start: -56px !important;
    }

    .ms-xxl-n15 {
      margin-inline-start: -60px !important;
    }

    .ms-xxl-n16 {
      margin-inline-start: -64px !important;
    }

    .me-xxl-n1 {
      margin-inline-end: -4px !important;
    }

    .me-xxl-n2 {
      margin-inline-end: -8px !important;
    }

    .me-xxl-n3 {
      margin-inline-end: -12px !important;
    }

    .me-xxl-n4 {
      margin-inline-end: -16px !important;
    }

    .me-xxl-n5 {
      margin-inline-end: -20px !important;
    }

    .me-xxl-n6 {
      margin-inline-end: -24px !important;
    }

    .me-xxl-n7 {
      margin-inline-end: -28px !important;
    }

    .me-xxl-n8 {
      margin-inline-end: -32px !important;
    }

    .me-xxl-n9 {
      margin-inline-end: -36px !important;
    }

    .me-xxl-n10 {
      margin-inline-end: -40px !important;
    }

    .me-xxl-n11 {
      margin-inline-end: -44px !important;
    }

    .me-xxl-n12 {
      margin-inline-end: -48px !important;
    }

    .me-xxl-n13 {
      margin-inline-end: -52px !important;
    }

    .me-xxl-n14 {
      margin-inline-end: -56px !important;
    }

    .me-xxl-n15 {
      margin-inline-end: -60px !important;
    }

    .me-xxl-n16 {
      margin-inline-end: -64px !important;
    }

    .pa-xxl-0 {
      padding: 0px !important;
    }

    .pa-xxl-1 {
      padding: 4px !important;
    }

    .pa-xxl-2 {
      padding: 8px !important;
    }

    .pa-xxl-3 {
      padding: 12px !important;
    }

    .pa-xxl-4 {
      padding: 16px !important;
    }

    .pa-xxl-5 {
      padding: 20px !important;
    }

    .pa-xxl-6 {
      padding: 24px !important;
    }

    .pa-xxl-7 {
      padding: 28px !important;
    }

    .pa-xxl-8 {
      padding: 32px !important;
    }

    .pa-xxl-9 {
      padding: 36px !important;
    }

    .pa-xxl-10 {
      padding: 40px !important;
    }

    .pa-xxl-11 {
      padding: 44px !important;
    }

    .pa-xxl-12 {
      padding: 48px !important;
    }

    .pa-xxl-13 {
      padding: 52px !important;
    }

    .pa-xxl-14 {
      padding: 56px !important;
    }

    .pa-xxl-15 {
      padding: 60px !important;
    }

    .pa-xxl-16 {
      padding: 64px !important;
    }

    .px-xxl-0 {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }

    .px-xxl-1 {
      padding-right: 4px !important;
      padding-left: 4px !important;
    }

    .px-xxl-2 {
      padding-right: 8px !important;
      padding-left: 8px !important;
    }

    .px-xxl-3 {
      padding-right: 12px !important;
      padding-left: 12px !important;
    }

    .px-xxl-4 {
      padding-right: 16px !important;
      padding-left: 16px !important;
    }

    .px-xxl-5 {
      padding-right: 20px !important;
      padding-left: 20px !important;
    }

    .px-xxl-6 {
      padding-right: 24px !important;
      padding-left: 24px !important;
    }

    .px-xxl-7 {
      padding-right: 28px !important;
      padding-left: 28px !important;
    }

    .px-xxl-8 {
      padding-right: 32px !important;
      padding-left: 32px !important;
    }

    .px-xxl-9 {
      padding-right: 36px !important;
      padding-left: 36px !important;
    }

    .px-xxl-10 {
      padding-right: 40px !important;
      padding-left: 40px !important;
    }

    .px-xxl-11 {
      padding-right: 44px !important;
      padding-left: 44px !important;
    }

    .px-xxl-12 {
      padding-right: 48px !important;
      padding-left: 48px !important;
    }

    .px-xxl-13 {
      padding-right: 52px !important;
      padding-left: 52px !important;
    }

    .px-xxl-14 {
      padding-right: 56px !important;
      padding-left: 56px !important;
    }

    .px-xxl-15 {
      padding-right: 60px !important;
      padding-left: 60px !important;
    }

    .px-xxl-16 {
      padding-right: 64px !important;
      padding-left: 64px !important;
    }

    .py-xxl-0 {
      padding-top: 0px !important;
      padding-bottom: 0px !important;
    }

    .py-xxl-1 {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .py-xxl-2 {
      padding-top: 8px !important;
      padding-bottom: 8px !important;
    }

    .py-xxl-3 {
      padding-top: 12px !important;
      padding-bottom: 12px !important;
    }

    .py-xxl-4 {
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }

    .py-xxl-5 {
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }

    .py-xxl-6 {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    .py-xxl-7 {
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }

    .py-xxl-8 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }

    .py-xxl-9 {
      padding-top: 36px !important;
      padding-bottom: 36px !important;
    }

    .py-xxl-10 {
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }

    .py-xxl-11 {
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    .py-xxl-12 {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    .py-xxl-13 {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }

    .py-xxl-14 {
      padding-top: 56px !important;
      padding-bottom: 56px !important;
    }

    .py-xxl-15 {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }

    .py-xxl-16 {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    .pt-xxl-0 {
      padding-top: 0px !important;
    }

    .pt-xxl-1 {
      padding-top: 4px !important;
    }

    .pt-xxl-2 {
      padding-top: 8px !important;
    }

    .pt-xxl-3 {
      padding-top: 12px !important;
    }

    .pt-xxl-4 {
      padding-top: 16px !important;
    }

    .pt-xxl-5 {
      padding-top: 20px !important;
    }

    .pt-xxl-6 {
      padding-top: 24px !important;
    }

    .pt-xxl-7 {
      padding-top: 28px !important;
    }

    .pt-xxl-8 {
      padding-top: 32px !important;
    }

    .pt-xxl-9 {
      padding-top: 36px !important;
    }

    .pt-xxl-10 {
      padding-top: 40px !important;
    }

    .pt-xxl-11 {
      padding-top: 44px !important;
    }

    .pt-xxl-12 {
      padding-top: 48px !important;
    }

    .pt-xxl-13 {
      padding-top: 52px !important;
    }

    .pt-xxl-14 {
      padding-top: 56px !important;
    }

    .pt-xxl-15 {
      padding-top: 60px !important;
    }

    .pt-xxl-16 {
      padding-top: 64px !important;
    }

    .pr-xxl-0 {
      padding-right: 0px !important;
    }

    .pr-xxl-1 {
      padding-right: 4px !important;
    }

    .pr-xxl-2 {
      padding-right: 8px !important;
    }

    .pr-xxl-3 {
      padding-right: 12px !important;
    }

    .pr-xxl-4 {
      padding-right: 16px !important;
    }

    .pr-xxl-5 {
      padding-right: 20px !important;
    }

    .pr-xxl-6 {
      padding-right: 24px !important;
    }

    .pr-xxl-7 {
      padding-right: 28px !important;
    }

    .pr-xxl-8 {
      padding-right: 32px !important;
    }

    .pr-xxl-9 {
      padding-right: 36px !important;
    }

    .pr-xxl-10 {
      padding-right: 40px !important;
    }

    .pr-xxl-11 {
      padding-right: 44px !important;
    }

    .pr-xxl-12 {
      padding-right: 48px !important;
    }

    .pr-xxl-13 {
      padding-right: 52px !important;
    }

    .pr-xxl-14 {
      padding-right: 56px !important;
    }

    .pr-xxl-15 {
      padding-right: 60px !important;
    }

    .pr-xxl-16 {
      padding-right: 64px !important;
    }

    .pb-xxl-0 {
      padding-bottom: 0px !important;
    }

    .pb-xxl-1 {
      padding-bottom: 4px !important;
    }

    .pb-xxl-2 {
      padding-bottom: 8px !important;
    }

    .pb-xxl-3 {
      padding-bottom: 12px !important;
    }

    .pb-xxl-4 {
      padding-bottom: 16px !important;
    }

    .pb-xxl-5 {
      padding-bottom: 20px !important;
    }

    .pb-xxl-6 {
      padding-bottom: 24px !important;
    }

    .pb-xxl-7 {
      padding-bottom: 28px !important;
    }

    .pb-xxl-8 {
      padding-bottom: 32px !important;
    }

    .pb-xxl-9 {
      padding-bottom: 36px !important;
    }

    .pb-xxl-10 {
      padding-bottom: 40px !important;
    }

    .pb-xxl-11 {
      padding-bottom: 44px !important;
    }

    .pb-xxl-12 {
      padding-bottom: 48px !important;
    }

    .pb-xxl-13 {
      padding-bottom: 52px !important;
    }

    .pb-xxl-14 {
      padding-bottom: 56px !important;
    }

    .pb-xxl-15 {
      padding-bottom: 60px !important;
    }

    .pb-xxl-16 {
      padding-bottom: 64px !important;
    }

    .pl-xxl-0 {
      padding-left: 0px !important;
    }

    .pl-xxl-1 {
      padding-left: 4px !important;
    }

    .pl-xxl-2 {
      padding-left: 8px !important;
    }

    .pl-xxl-3 {
      padding-left: 12px !important;
    }

    .pl-xxl-4 {
      padding-left: 16px !important;
    }

    .pl-xxl-5 {
      padding-left: 20px !important;
    }

    .pl-xxl-6 {
      padding-left: 24px !important;
    }

    .pl-xxl-7 {
      padding-left: 28px !important;
    }

    .pl-xxl-8 {
      padding-left: 32px !important;
    }

    .pl-xxl-9 {
      padding-left: 36px !important;
    }

    .pl-xxl-10 {
      padding-left: 40px !important;
    }

    .pl-xxl-11 {
      padding-left: 44px !important;
    }

    .pl-xxl-12 {
      padding-left: 48px !important;
    }

    .pl-xxl-13 {
      padding-left: 52px !important;
    }

    .pl-xxl-14 {
      padding-left: 56px !important;
    }

    .pl-xxl-15 {
      padding-left: 60px !important;
    }

    .pl-xxl-16 {
      padding-left: 64px !important;
    }

    .ps-xxl-0 {
      padding-inline-start: 0px !important;
    }

    .ps-xxl-1 {
      padding-inline-start: 4px !important;
    }

    .ps-xxl-2 {
      padding-inline-start: 8px !important;
    }

    .ps-xxl-3 {
      padding-inline-start: 12px !important;
    }

    .ps-xxl-4 {
      padding-inline-start: 16px !important;
    }

    .ps-xxl-5 {
      padding-inline-start: 20px !important;
    }

    .ps-xxl-6 {
      padding-inline-start: 24px !important;
    }

    .ps-xxl-7 {
      padding-inline-start: 28px !important;
    }

    .ps-xxl-8 {
      padding-inline-start: 32px !important;
    }

    .ps-xxl-9 {
      padding-inline-start: 36px !important;
    }

    .ps-xxl-10 {
      padding-inline-start: 40px !important;
    }

    .ps-xxl-11 {
      padding-inline-start: 44px !important;
    }

    .ps-xxl-12 {
      padding-inline-start: 48px !important;
    }

    .ps-xxl-13 {
      padding-inline-start: 52px !important;
    }

    .ps-xxl-14 {
      padding-inline-start: 56px !important;
    }

    .ps-xxl-15 {
      padding-inline-start: 60px !important;
    }

    .ps-xxl-16 {
      padding-inline-start: 64px !important;
    }

    .pe-xxl-0 {
      padding-inline-end: 0px !important;
    }

    .pe-xxl-1 {
      padding-inline-end: 4px !important;
    }

    .pe-xxl-2 {
      padding-inline-end: 8px !important;
    }

    .pe-xxl-3 {
      padding-inline-end: 12px !important;
    }

    .pe-xxl-4 {
      padding-inline-end: 16px !important;
    }

    .pe-xxl-5 {
      padding-inline-end: 20px !important;
    }

    .pe-xxl-6 {
      padding-inline-end: 24px !important;
    }

    .pe-xxl-7 {
      padding-inline-end: 28px !important;
    }

    .pe-xxl-8 {
      padding-inline-end: 32px !important;
    }

    .pe-xxl-9 {
      padding-inline-end: 36px !important;
    }

    .pe-xxl-10 {
      padding-inline-end: 40px !important;
    }

    .pe-xxl-11 {
      padding-inline-end: 44px !important;
    }

    .pe-xxl-12 {
      padding-inline-end: 48px !important;
    }

    .pe-xxl-13 {
      padding-inline-end: 52px !important;
    }

    .pe-xxl-14 {
      padding-inline-end: 56px !important;
    }

    .pe-xxl-15 {
      padding-inline-end: 60px !important;
    }

    .pe-xxl-16 {
      padding-inline-end: 64px !important;
    }

    .text-xxl-left {
      text-align: left !important;
    }

    .text-xxl-right {
      text-align: right !important;
    }

    .text-xxl-center {
      text-align: center !important;
    }

    .text-xxl-justify {
      text-align: justify !important;
    }

    .text-xxl-start {
      text-align: start !important;
    }

    .text-xxl-end {
      text-align: end !important;
    }

    .text-xxl-h1 {
      font-size: 6rem !important;
      font-weight: 500;
      line-height: 7rem;
      letter-spacing: -0.015625em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-h2 {
      font-size: 3.75rem !important;
      font-weight: 500;
      line-height: 4.5rem;
      letter-spacing: -0.0083333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-h3 {
      font-size: 3rem !important;
      font-weight: 500;
      line-height: 3.5rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-h4 {
      font-size: 2.125rem !important;
      font-weight: 500;
      line-height: 2.625rem;
      letter-spacing: 0.0073529412em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-h5 {
      font-size: 1.5rem !important;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: normal !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-h6 {
      font-size: 1.25rem !important;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.0125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-subtitle-1 {
      font-size: 1rem !important;
      font-weight: normal;
      line-height: 1.75rem;
      letter-spacing: 0.009375em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-subtitle-2 {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 1.375rem;
      letter-spacing: 0.0071428571em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-body-1 {
      font-size: 1rem !important;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0.03125em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-body-2 {
      font-size: 0.875rem !important;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0.0178571429em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-button {
      font-size: 0.875rem !important;
      font-weight: 500;
      line-height: 2.25rem;
      letter-spacing: 0.0892857143em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }

    .text-xxl-caption {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.25rem;
      letter-spacing: 0.0333333333em !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: none !important;
    }

    .text-xxl-overline {
      font-size: 0.75rem !important;
      font-weight: 400;
      line-height: 1.125rem;
      letter-spacing: 0.0625rem !important;
      font-family: "Public Sans", sans-serif, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      text-transform: uppercase !important;
    }
  }

  @media print {
    .d-print-none {
      display: none !important;
    }

    .d-print-inline {
      display: inline !important;
    }

    .d-print-inline-block {
      display: inline-block !important;
    }

    .d-print-block {
      display: block !important;
    }

    .d-print-table {
      display: table !important;
    }

    .d-print-table-row {
      display: table-row !important;
    }

    .d-print-table-cell {
      display: table-cell !important;
    }

    .d-print-flex {
      display: flex !important;
    }

    .d-print-inline-flex {
      display: inline-flex !important;
    }

    .float-print-none {
      float: none !important;
    }

    .float-print-left {
      float: left !important;
    }

    .float-print-right {
      float: right !important;
    }

    .v-locale--is-rtl .float-print-end {
      float: left !important;
    }

    .v-locale--is-rtl .float-print-start {
      float: right !important;
    }

    .v-locale--is-ltr .float-print-end {
      float: right !important;
    }

    .v-locale--is-ltr .float-print-start {
      float: left !important;
    }
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/layouts/default.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  @charset "UTF-8";


  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .layout-content-width-boxed .layout-page-content {
    inline-size: 100%;
    margin-inline: auto;
    max-inline-size: 1440px;
  }

  .layout-page-content {
    padding-inline: 1.5rem;
  }

  [dir=rtl] .nav-group-arrow {
    transform: rotate(180deg);
  }

  html,
  body {
    margin: 0;
    font-size: 18px !important;
    line-height: 1.6;
    font-family: Arial, sans-serif;
  }

  .layout-page-content {
    flex-grow: 1;
    padding-block: 1.5rem;
  }

  .layout-footer .footer-content-container {
    block-size: 56px;
  }

  .layout-footer-sticky .layout-footer {
    position: sticky;
    inset-block-end: 0;
    will-change: transform;
  }

  .layout-footer-hidden .layout-footer {
    display: none;
  }
</style>
<style type="text/css" data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@core/scss/template/index.scss">
  @charset "UTF-8";
  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .no-caps {
    text-transform: initial;
  }

  .no-letter-spacing {
    letter-spacing: 0px;
  }

  .v-dialog .v-card,
  .layout-horizontal-nav .nav-group .popper-content>div {
    
    
    
  }

  .v-dialog .v-card::-webkit-scrollbar,
  .layout-horizontal-nav .nav-group .popper-content>div::-webkit-scrollbar {
    background: rgb(var(--v-theme-surface));
    block-size: 8px;
    border-end-end-radius: 14px;
    border-start-end-radius: 14px;
    inline-size: 4px;
  }

  .v-dialog .v-card::-webkit-scrollbar-track,
  .layout-horizontal-nav .nav-group .popper-content>div::-webkit-scrollbar-track {
    background: transparent;
  }

  .v-dialog .v-card::-webkit-scrollbar-thumb,
  .layout-horizontal-nav .nav-group .popper-content>div::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: rgb(var(--v-theme-perfect-scrollbar-thumb));
  }

  .v-dialog .v-card::-webkit-scrollbar-corner,
  .layout-horizontal-nav .nav-group .popper-content>div::-webkit-scrollbar-corner {
    display: none;
  }

  .layout-horizontal-nav .nav-link a,
  .layout-horizontal-nav .nav-group .popper-triggerer .nav-group-label {
    padding-block: 0.6rem;
    padding-inline: 1rem;
  }

  .layout-horizontal-nav .nav-link:not(.sub-item) a,
  .layout-horizontal-nav .nav-group:not(.sub-item)>.popper-triggerer>.nav-group-label {
    border-radius: 0.4rem;
  }

  .layout-horizontal-nav .nav-link.sub-item a.router-link-active {
    background: rgba(var(--v-theme-primary), 0.1);
    color: rgb(var(--v-theme-primary));
  }


  .layout-horizontal-nav .nav-item-icon {
    font-size: 1.5rem;
    margin-inline-end: 0.625rem;
  }

  .layout-horizontal-nav .nav-link.sub-item,
  .layout-horizontal-nav .nav-group.sub-item {
    min-inline-size: 12rem;
  }

  .layout-horizontal-nav .nav-link.sub-item .nav-item-title,
  .layout-horizontal-nav .nav-group.sub-item .nav-item-title {
    margin-inline-end: 1rem;
  }

  .layout-horizontal-nav .nav-group.sub-item .sub-item .nav-item-icon {
    font-size: 0.9rem;
    margin-inline-end: 0.75rem;
    in-inline-start: 0.3rem;
  }

  .layout-horizontal-nav .nav-group .nav-item-title {
    margin-inline-end: 0.3rem;
    white-space: nowrap;
  }

  .layout-horizontal-nav .nav-group .popper-content {
    box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    border-radius: 6px;
    padding-block: 0.3rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-header .header-action {
    font-size: 1.25rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title,
  .layout-nav-type-vertical .layout-vertical-nav .nav-link> :first-child,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child {
    margin-block: 0;
    margin-inline: 0.875rem;
    padding-block: 0;
    padding-inline: 0.75rem;
    white-space: nowrap;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link> :first-child,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child {
    border-radius: 0.4rem;
    block-size: 2.75rem;

    margin-block-end: 0.375rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link .nav-item-icon,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-item-icon {
    flex-shrink: 0;
    font-size: 1.375rem;
    margin-inline-end: 0.5rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-group .nav-item-icon,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-link .nav-item-icon {

    font-size: 0.425rem;
    margin-inline-end: 0.975rem;
    margin-inline-start: 0.475rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-group .nav-link .nav-item-icon,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-group .nav-group .nav-item-icon {
    visibility: hidden;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :first-child::before {
    opacity: calc(var(--v-selected-opacity) * var(--v-theme-overlay-multiplier));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :hover:first-child .nav-group.active> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :hover:first-child .nav-group.active> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :hover:first-child .nav-group.open> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :hover:first-child .nav-group.open> :first-child::before {
    opacity: calc(var(--v-selected-opacity) + var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :focus-visible:first-child .nav-group.active> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :focus-visible:first-child .nav-group.active> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :focus-visible:first-child .nav-group.open> :first-child::before,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :focus-visible:first-child .nav-group.open> :first-child::before {
    opacity: calc(var(--v-selected-opacity) + var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {

    .layout-nav-type-vertical .layout-vertical-nav .nav-group.active> :focus:first-child::before,
    .layout-nav-type-vertical .layout-vertical-nav .nav-group.open> :focus:first-child::before {
      opacity: calc(var(--v-selected-opacity) + var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
    }
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title {
    block-size: 1.5rem;
    color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity));
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-item-badge {
    display: inline-block;
    border-radius: 1.5rem;
    font-size: 0.8em;
    font-weight: 500;
    line-height: 1;
    padding-block: 0.25em;
    padding-inline: 0.55em;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
  }

  .layout-horizontal-nav,
  .layout-nav-type-vertical .layout-vertical-nav {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .layout-horizontal-nav .nav-item-title,
  .layout-nav-type-vertical .layout-vertical-nav .nav-item-title {
    letter-spacing: 0.15px;
  }

  .layout-horizontal-nav .nav-section-title,
  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title {
    letter-spacing: 0.4px;
  }

  /*
  Active nav link styles for horizontal & vertical nav

  For horizontal nav it will be only applied to top level nav items
  For vertical nav it will be only applied to nav links (not nav groups)
*/
  .layout-horizontal-nav .nav-link:not(.sub-item) a.router-link-active,
  .layout-horizontal-nav .nav-group:not(.sub-item).active>.popper-triggerer>.nav-group-label,
  .layout-nav-type-vertical .layout-vertical-nav .nav-link>.router-link-exact-active {
    background-color: rgb(var(--v-global-theme-primary));
    color: rgb(var(--v-theme-on-primary));
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .layout-horizontal-nav .nav-link a,
  .layout-nav-type-vertical .layout-vertical-nav .nav-link a {
    color: inherit;
  }

  .layout-navbar {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
  }

  .layout-wrapper.layout-nav-type-vertical .navbar-blur.layout-navbar .navbar-content-container,
  .layout-wrapper.layout-nav-type-horizontal .header-blur.layout-navbar-and-nav-container {
    
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    
    background-color: rgb(var(--v-theme-surface), 0.9);
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar .navbar-content-container {
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    padding-inline: 1.2rem;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar.navbar-blur {
    isolation: isolate;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar.navbar-blur::after {
    position: absolute;
    z-index: -1;
    
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    
    background: linear-gradient(180deg, rgba(var(--v-theme-background), 70%) 44%, rgba(var(--v-theme-background), 43%) 73%, rgba(var(--v-theme-background), 0%));
    background-repeat: repeat;
    block-size: 5.5rem;
    content: "";
    inset-block-start: -1rem;
    inset-inline-end: 0;
    inset-inline-start: 0;
    
    -webkit-mask: linear-gradient(black, black 18%, transparent 100%);
    mask: linear-gradient(black, black 18%, transparent 100%);
    
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-navbar-and-nav-container {
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    z-index: 1001;
    background-color: rgb(var(--v-theme-surface));
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-navbar {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-horizontal-nav {
    padding-block: 0.6875rem;
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-horizontal-nav .nav-items {
    gap: 4px;
  }

  .layout-horizontal-nav,
  .layout-nav-type-vertical .layout-vertical-nav {
    color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
  }

  /*
  Active nav link styles for horizontal & vertical nav

  For horizontal nav it will be only applied to top level nav items
  For vertical nav it will be only applied to nav links (not nav groups)
*/
  .layout-horizontal-nav .nav-link:not(.sub-item) a.router-link-active,
  .layout-horizontal-nav .nav-group:not(.sub-item).active>.popper-triggerer>.nav-group-label,
  .layout-nav-type-vertical .layout-vertical-nav .nav-link>.router-link-exact-active {
    background: linear-gradient(72.47deg, rgb(var(--v-global-theme-primary)) 22.16%, rgba(var(--v-global-theme-primary), 0.7) 76.47%) !important;
    box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link .nav-item-icon,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-item-icon {
    font-size: 1.375rem;
    margin-inline-start: 0.2rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-item-badge {
    line-height: 1rem;
    margin-inline-end: 0.5rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link> :first-child,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child {
    block-size: 2.5rem;
    margin-block-end: 0.25rem;
  }

  .layout-horizontal-nav .nav-item-icon {
    font-size: 1.375rem;
  }

  .layout-horizontal-nav .nav-link a,
  .layout-horizontal-nav .nav-group .popper-triggerer .nav-group-label {
    padding-block: 0.5rem;
    padding-inline: 0.7rem;
  }

  .layout-horizontal-nav .nav-group .popper-content .nav-link.sub-item a,
  .layout-horizontal-nav .nav-group .popper-content .nav-group-label,
  .layout-horizontal-nav .nav-link .popper-content .nav-link.sub-item a,
  .layout-horizontal-nav .nav-link .popper-content .nav-group-label {
    border-radius: 0.375rem;
    margin-block: 0.25rem;
    margin-inline: 0.5rem;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar .navbar-content-container {
    padding-inline: 1.5rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav {
    background-color: rgb(var(--v-theme-surface));
  }

  .layout-vertical-nav-collapsed.layout-nav-type-vertical .layout-vertical-nav.hovered {
    box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 6px 10px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 18px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-header {
    overflow: hidden;
    padding: 1rem 0.75rem;
    margin-inline: 0.875rem;
    min-block-size: 64px;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-header .app-logo {
    flex-shrink: 0;
    transition: transform 0.25s ease-in-out;
  }

  .layout-vertical-nav-collapsed.layout-nav-type-vertical .layout-vertical-nav:not(.hovered) .nav-header .app-logo {
    transform: translateX(-4px);
  }

  [dir=rtl] .layout-vertical-nav-collapsed.layout-nav-type-vertical .layout-vertical-nav:not(.hovered) .nav-header .app-logo {
    transform: translateX(4px);
  }

  .layout-nav-type-vertical .layout-vertical-nav .vertical-nav-items-shadow {
    position: absolute;
    z-index: 1;
    background: linear-gradient(rgb(var(--v-theme-surface)) 5%, rgba(var(--v-theme-surface), 75%) 45%, rgba(var(--v-theme-surface), 20%) 80%, transparent);
    block-size: 55px;
    inline-size: 100%;
    inset-block-start: calc(64px - 2px);
    opacity: 0;
    pointer-events: none;
    transform: translateX(-8px);
    transition: opacity 0.15s ease-in-out;
    will-change: opacity;
  }

  [dir=rtl] .layout-nav-type-vertical .layout-vertical-nav .vertical-nav-items-shadow {
    transform: translateX(8px);
  }

  .layout-nav-type-vertical .layout-vertical-nav.scrolled .vertical-nav-items-shadow {
    opacity: 1;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title {
    margin-block-end: 0.375rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title:not(:first-child) {
    margin-block-start: 1.25rem;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title .placeholder-icon {
    margin-inline: auto;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group {
    overflow: hidden;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link.disabled,
  .layout-nav-type-vertical .layout-vertical-nav .nav-group.disabled {
    opacity: var(--v-disabled-opacity);
    pointer-events: none;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link>a {
    position: relative;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link>a::before {
    position: absolute;
    border-radius: inherit;
    background: currentcolor;
    block-size: 100%;
    content: "";
    inline-size: 100%;
    inset: 0;
    opacity: 0;
    pointer-events: none;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link>a:hover::before {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-link>a:focus-visible::before {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .layout-nav-type-vertical .layout-vertical-nav .nav-link>a:focus::before {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group .nav-group-arrow {
    flex-shrink: 0;
    transform-origin: center;
    transition: transform 0.15s ease-in-out;
    will-change: transform;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group.open>.nav-group-label .nav-group-arrow {
    transform: rotateZ(90deg);
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child {
    position: relative;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child::before {
    position: absolute;
    border-radius: inherit;
    background: currentcolor;
    block-size: 100%;
    content: "";
    inline-size: 100%;
    inset: 0;
    opacity: 0;
    pointer-events: none;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child:hover::before {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child:focus-visible::before {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .layout-nav-type-vertical .layout-vertical-nav .nav-group> :first-child:focus::before {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .vertical-nav-section-title-enter-active,
  .vertical-nav-section-title-leave-active {
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  }

  .vertical-nav-section-title-enter-from,
  .vertical-nav-section-title-leave-to {
    opacity: 0;
    transform: translateX(15px);
  }

  [dir=rtl] .vertical-nav-section-title-enter-from,
  [dir=rtl] .vertical-nav-section-title-leave-to {
    transform: translateX(-15px);
  }

  .transition-slide-x-enter-active,
  .transition-slide-x-leave-active {
    transition: opacity 0.1s ease-in-out, transform 0.12s ease-in-out;
  }

  .transition-slide-x-enter-from,
  .transition-slide-x-leave-to {
    opacity: 0;
    transform: translateX(-15px);
  }

  [dir=rtl] .transition-slide-x-enter-from,
  [dir=rtl] .transition-slide-x-leave-to {
    transform: translateX(15px);
  }

  .vertical-nav-app-title-enter-active,
  .vertical-nav-app-title-leave-active {
    transition: opacity 0.1s ease-in-out, transform 0.12s ease-in-out;
  }

  .vertical-nav-app-title-enter-from,
  .vertical-nav-app-title-leave-to {
    opacity: 0;
    transform: translateX(-15px);
  }

  [dir=rtl] .vertical-nav-app-title-enter-from,
  [dir=rtl] .vertical-nav-app-title-leave-to {
    transform: translateX(15px);
  }

  .layout-horizontal-nav .nav-link.disabled,
  .layout-horizontal-nav .nav-group.disabled {
    opacity: var(--v-disabled-opacity);
    pointer-events: none;
  }

  .layout-horizontal-nav .nav-link a {
    position: relative;
  }

  .layout-horizontal-nav .nav-link a::before {
    position: absolute;
    border-radius: inherit;
    background: currentcolor;
    block-size: 100%;
    content: "";
    inline-size: 100%;
    inset: 0;
    opacity: 0;
    pointer-events: none;
  }

  .layout-horizontal-nav .nav-link a:hover::before {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .layout-horizontal-nav .nav-link a:focus-visible::before {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .layout-horizontal-nav .nav-link a:focus::before {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .layout-horizontal-nav .nav-group>.popper-triggerer>.nav-group-label {
    position: relative;
  }

  .layout-horizontal-nav .nav-group>.popper-triggerer>.nav-group-label::before {
    position: absolute;
    border-radius: inherit;
    background: currentcolor;
    block-size: 100%;
    content: "";
    inline-size: 100%;
    inset: 0;
    opacity: 0;
    pointer-events: none;
  }

  .layout-horizontal-nav .nav-group>.popper-triggerer>.nav-group-label:hover::before {
    opacity: calc(0.04 * var(--v-theme-overlay-multiplier));
  }

  .layout-horizontal-nav .nav-group>.popper-triggerer>.nav-group-label:focus-visible::before {
    opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .layout-horizontal-nav .nav-group>.popper-triggerer>.nav-group-label:focus::before {
      opacity: calc(0.12 * var(--v-theme-overlay-multiplier));
    }
  }

  .layout-horizontal-nav .nav-group:not(.sub-item)>.popper-triggerer {
    position: relative;
  }

  .layout-horizontal-nav .nav-group:not(.sub-item)>.popper-triggerer::after {
    position: absolute;
    block-size: 1.0625rem;
    content: "";
    inline-size: 100%;
    inset-block-start: 100%;
    inset-inline-start: 0;
    pointer-events: none;
  }

  .layout-horizontal-nav .nav-group:not(.sub-item).show-content>.popper-triggerer::after {

    z-index: 2;
    pointer-events: auto;
  }

  .layout-horizontal-nav .nav-group:not(.sub-item)>.popper-content {
    margin-block-start: 1.0625rem !important;
  }

  .layout-horizontal-nav .nav-group.sub-item.active>.popper-triggerer>.nav-group-label::before {
    opacity: calc(var(--v-selected-opacity) * var(--v-theme-overlay-multiplier));
  }

  .layout-horizontal-nav .nav-group.sub-item.active:hover>.popper-triggerer>.nav-group-label::before {
    opacity: calc(var(--v-selected-opacity) + var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
  }

  .layout-horizontal-nav .nav-group.sub-item.active:focus-visible>.popper-triggerer>.nav-group-label::before {
    opacity: calc(var(--v-selected-opacity) + var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
  }

  @supports not selector(:focus-visible) {
    .layout-horizontal-nav .nav-group.sub-item.active:focus>.popper-triggerer>.nav-group-label::before {
      opacity: calc(var(--v-selected-opacity) + var(--v-focus-opacity) * var(--v-theme-overlay-multiplier));
    }
  }

  .layout-horizontal-nav .nav-group .nav-group-arrow {
    font-size: 1.375rem;
    /*
  ℹ️ ml-auto won't matter in top level group (because we haven't specified fixed width for top level groups)
  but we wrote generally because we don't want to become so specific
*/
    margin-inline-start: auto;
  }

  .layout-horizontal-nav .nav-group.popper-inline-end .nav-group-arrow {
    transform: rotateZ(270deg);
  }

  [dir=rtl] .layout-horizontal-nav .nav-group.popper-inline-end .nav-group-arrow {
    transform: rotateZ(90deg);
  }

  .layout-horizontal-nav .nav-group .popper-content {
    background-color: rgb(var(--v-theme-surface));
  }

  .layout-horizontal-nav .nav-group .popper-content>div {
    max-block-size: calc(var(--vh, 1vh) * 100 - 120px - 4rem);
  }

  .scrollable-content.v-navigation-drawer .v-navigation-drawer__content {
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }

  code {
    background: rgba(var(--v-code-background-color), var(--v-focus-opacity));
    border-radius: 3px;
    color: currentcolor;
    font-size: 85%;
    font-weight: 400;
    padding-block: 0.2em;
    padding-inline: 0.4em;
  }

  .layout-wrapper.layout-nav-type-vertical:not(.layout-navbar-sticky) .layout-navbar .navbar-content-container {
    margin-block-start: 1rem;
  }

  .layout-wrapper.layout-nav-type-vertical .layout-navbar .navbar-content-container {
    border-radius: 6px;
    background-color: rgb(var(--v-theme-surface));
  }

  .layout-wrapper.layout-nav-type-vertical .layout-footer .footer-content-container {
    border-radius: 6px 6px 0 0;
  }

  .layout-footer-sticky.layout-wrapper.layout-nav-type-vertical .layout-footer .footer-content-container {
    background-color: rgb(var(--v-theme-surface));
    padding-block: 0;
    padding-inline: 1.2rem;
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .layout-wrapper.layout-nav-type-horizontal .navbar-content-container {
    display: flex;
    align-items: center;
    block-size: 100%;
  }

  .layout-footer-sticky.layout-wrapper.layout-nav-type-horizontal .layout-footer {
    background-color: rgb(var(--v-theme-surface));
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-page-content {
    padding-block: 1.5rem;
  }

  
  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .page-content-container>.v-layout:first-child {
    overflow: hidden;
    min-block-size: 100%;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-content-height-fixed .page-content-container>.v-layout:first-child>.v-main .v-main__wrap> :first-child {
    block-size: 100%;
    overflow-y: auto;
  }

  .layout-wrapper.layout-nav-type-horizontal.layout-content-height-fixed>.layout-page-content {
    display: flex;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-navbar-sticky {

  }

  .layout-wrapper.layout-nav-type-vertical.layout-navbar-sticky .layout-navbar {
    inset-block-start: 1rem;
  }

  .layout-wrapper.layout-nav-type-vertical.layout-navbar-sticky .layout-page-content {
    // margin-block-start: 1rem;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }

  .text-8xl {
    font-size: 6rem;
    line-height: 1;
  }

  .text-9xl {
    font-size: 8rem;
    line-height: 1;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .gap-0 {
    gap: 0;
  }

  .gap-x-0 {
    column-gap: 0;
  }

  .gap-y-0 {
    row-gap: 0;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-x-1 {
    column-gap: 0.25rem;
  }

  .gap-y-1 {
    row-gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-x-2 {
    column-gap: 0.5rem;
  }

  .gap-y-2 {
    row-gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-x-3 {
    column-gap: 0.75rem;
  }

  .gap-y-3 {
    row-gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-x-4 {
    column-gap: 1rem;
  }

  .gap-y-4 {
    row-gap: 1rem;
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .gap-x-5 {
    column-gap: 1.25rem;
  }

  .gap-y-5 {
    row-gap: 1.25rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .gap-x-6 {
    column-gap: 1.5rem;
  }

  .gap-y-6 {
    row-gap: 1.5rem;
  }

  .gap-7 {
    gap: 1.75rem;
  }

  .gap-x-7 {
    column-gap: 1.75rem;
  }

  .gap-y-7 {
    row-gap: 1.75rem;
  }

  .gap-8 {
    gap: 2rem;
  }

  .gap-x-8 {
    column-gap: 2rem;
  }

  .gap-y-8 {
    row-gap: 2rem;
  }

  .gap-9 {
    gap: 2.25rem;
  }

  .gap-x-9 {
    column-gap: 2.25rem;
  }

  .gap-y-9 {
    row-gap: 2.25rem;
  }

  .gap-10 {
    gap: 2.5rem;
  }

  .gap-x-10 {
    column-gap: 2.5rem;
  }

  .gap-y-10 {
    row-gap: 2.5rem;
  }

  .gap-11 {
    gap: 2.75rem;
  }

  .gap-x-11 {
    column-gap: 2.75rem;
  }

  .gap-y-11 {
    row-gap: 2.75rem;
  }

  .gap-12 {
    gap: 3rem;
  }

  .gap-x-12 {
    column-gap: 3rem;
  }

  .gap-y-12 {
    row-gap: 3rem;
  }

  .gap-14 {
    gap: 3.5rem;
  }

  .gap-x-14 {
    column-gap: 3.5rem;
  }

  .gap-y-14 {
    row-gap: 3.5rem;
  }

  .gap-16 {
    gap: 4rem;
  }

  .gap-x-16 {
    column-gap: 4rem;
  }

  .gap-y-16 {
    row-gap: 4rem;
  }

  .gap-20 {
    gap: 5rem;
  }

  .gap-x-20 {
    column-gap: 5rem;
  }

  .gap-y-20 {
    row-gap: 5rem;
  }

  .gap-24 {
    gap: 6rem;
  }

  .gap-x-24 {
    column-gap: 6rem;
  }

  .gap-y-24 {
    row-gap: 6rem;
  }

  .gap-28 {
    gap: 7rem;
  }

  .gap-x-28 {
    column-gap: 7rem;
  }

  .gap-y-28 {
    row-gap: 7rem;
  }

  .gap-32 {
    gap: 8rem;
  }

  .gap-x-32 {
    column-gap: 8rem;
  }

  .gap-y-32 {
    row-gap: 8rem;
  }

  .gap-36 {
    gap: 9rem;
  }

  .gap-x-36 {
    column-gap: 9rem;
  }

  .gap-y-36 {
    row-gap: 9rem;
  }

  .gap-40 {
    gap: 10rem;
  }

  .gap-x-40 {
    column-gap: 10rem;
  }

  .gap-y-40 {
    row-gap: 10rem;
  }

  .gap-44 {
    gap: 11rem;
  }

  .gap-x-44 {
    column-gap: 11rem;
  }

  .gap-y-44 {
    row-gap: 11rem;
  }

  .gap-48 {
    gap: 12rem;
  }

  .gap-x-48 {
    column-gap: 12rem;
  }

  .gap-y-48 {
    row-gap: 12rem;
  }

  .gap-52 {
    gap: 13rem;
  }

  .gap-x-52 {
    column-gap: 13rem;
  }

  .gap-y-52 {
    row-gap: 13rem;
  }

  .gap-56 {
    gap: 14rem;
  }

  .gap-x-56 {
    column-gap: 14rem;
  }

  .gap-y-56 {
    row-gap: 14rem;
  }

  .gap-60 {
    gap: 15rem;
  }

  .gap-x-60 {
    column-gap: 15rem;
  }

  .gap-y-60 {
    row-gap: 15rem;
  }

  .gap-64 {
    gap: 16rem;
  }

  .gap-x-64 {
    column-gap: 16rem;
  }

  .gap-y-64 {
    row-gap: 16rem;
  }

  .gap-72 {
    gap: 18rem;
  }

  .gap-x-72 {
    column-gap: 18rem;
  }

  .gap-y-72 {
    row-gap: 18rem;
  }

  .gap-80 {
    gap: 20rem;
  }

  .gap-x-80 {
    column-gap: 20rem;
  }

  .gap-y-80 {
    row-gap: 20rem;
  }

  .gap-96 {
    gap: 24rem;
  }

  .gap-x-96 {
    column-gap: 24rem;
  }

  .gap-y-96 {
    row-gap: 24rem;
  }

  .skin--bordered {
    /*
  Missing components:
   - Stepper
*/
  }

  .skin--bordered .v-card:not(.v-card .v-card):not(.v-card--flat) {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .v-menu .v-overlay__content>.v-card,
  .skin--bordered .v-menu .v-overlay__content>.v-sheet,
  .skin--bordered .v-menu .v-overlay__content>.v-list {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .popper-content {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-navbar-and-nav-container {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-nav-type-vertical.window-scrolled .layout-navbar .navbar-content-container {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-nav-type-vertical.window-scrolled .layout-navbar .navbar-content-container {
    border-block-start: none;
  }

  .skin--bordered .layout-nav-type-vertical.layout-footer-sticky .layout-footer .footer-content-container {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-nav-type-vertical.layout-footer-sticky .layout-footer .footer-content-container {
    border-block-end: none;
  }

  .skin--bordered .layout-nav-type-horizontal.layout-footer-sticky .layout-footer {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-nav-type-horizontal.layout-footer-sticky .layout-footer {
    border-block-end: none;
  }

  .skin--bordered .v-theme--light {
    --skin-theme-background:
      255, 255, 255;
    --skin-theme-surface:
      255, 255, 255;
  }

  .skin--bordered .v-theme--dark {
    --skin-theme-background:
      47, 51, 73;
    --skin-theme-surface:
      47, 51, 73;
  }

  .skin--bordered .layout-vertical-nav {
    border-inline-end: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-avatar-group {
    display: flex;
    align-items: center;
  }

  .v-avatar-group>* {
    transition: transform 0.25s ease, box-shadow 0.15s ease;
  }

  .v-avatar-group>*:not(:first-child) {
    margin-inline-start: -0.8rem;
  }

  .v-avatar-group>*:hover {
    z-index: 2;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .v-avatar-group>.v-avatar {
    border: 2px solid rgb(var(--v-theme-surface));
  }

  @media (min-width: 576px) {

    .v-dialog.v-dialog-sm,
    .v-dialog.v-dialog-lg,
    .v-dialog.v-dialog-xl {
      inline-size: 565px !important;
    }
  }

  @media (min-width: 992px) {

    .v-dialog.v-dialog-lg,
    .v-dialog.v-dialog-xl {
      inline-size: 865px !important;
    }
  }

  @media (min-width: 1200px) {

    .v-dialog.v-dialog-xl,
    .v-dialog.v-dialog-xl .v-overlay__content>.v-card {
      inline-size: 1165px !important;
    }
  }

  .v-tabs.v-tabs-pill .v-tab.v-btn {
    border-radius: 6px !important;
    transition: none;
  }

  .v-tabs.v-tabs-pill .v-tab.v-btn .v-tab__slider {
    visibility: hidden;
  }

  .v-tabs.v-tabs-pill .v-slide-group__content {
    transition: none;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-primary {
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary)) !important;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-secondary {
    background-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-on-secondary)) !important;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-error {
    background-color: rgb(var(--v-theme-error));
    color: rgb(var(--v-theme-on-error)) !important;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-info {
    background-color: rgb(var(--v-theme-info));
    color: rgb(var(--v-theme-on-info)) !important;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-success {
    background-color: rgb(var(--v-theme-success));
    color: rgb(var(--v-theme-on-success)) !important;
  }

  .v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected.text-warning {
    background-color: rgb(var(--v-theme-warning));
    color: rgb(var(--v-theme-on-warning)) !important;
  }

  .v-timeline--vertical.v-timeline .v-timeline-item .v-timeline-item__body {
    justify-self: stretch !important;
  }

  .demo-space-x {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-block-start: -16px;
  }

  .demo-space-x>* {
    margin-block-start: 16px;
    margin-inline-end: 16px;
  }

  .demo-space-y>* {
    margin-block-end: 16px;
  }

  .demo-space-y>*:last-child {
    margin-block-end: 0;
  }

  .match-height.v-row .v-card {
    block-size: 100%;
  }

  .whitespace-no-wrap {
    white-space: nowrap;
  }

  .text-white {
    color: #fff !important;
  }

  .bg-var-theme-background {
    background-color: rgba(var(--v-theme-background), var(--v-medium-emphasis-opacity)) !important;
  }

  .bg-light-primary {
    background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity)) !important;
  }

  .bg-light-secondary {
    background-color: rgba(var(--v-theme-secondary), var(--v-activated-opacity)) !important;
  }

  .bg-light-error {
    background-color: rgba(var(--v-theme-error), var(--v-activated-opacity)) !important;
  }

  .bg-light-info {
    background-color: rgba(var(--v-theme-info), var(--v-activated-opacity)) !important;
  }

  .bg-light-success {
    background-color: rgba(var(--v-theme-success), var(--v-activated-opacity)) !important;
  }

  .bg-light-warning {
    background-color: rgba(var(--v-theme-warning), var(--v-activated-opacity)) !important;
  }

  .font-weight-semibold {
    font-weight: 600 !important;
  }

  .leading-normal {
    line-height: normal !important;
  }

  [dir=rtl] .flip-in-rtl {
    transform: scaleX(-1);
  }

  .opacity-100 {
    opacity: 100 !important;
  }

  .v-application.v-theme--dark .ps__rail-y,
  .v-application.v-theme--dark .ps__rail-x {
    background-color: transparent !important;
  }

  .v-application.v-theme--dark .ps__thumb-y {
    background-color: rgba(var(--v-theme-surface-variant), 0.35);
  }

  .ps__thumb-y {
    inline-size: 0.25rem;
    inset-inline-end: 0.0625rem;
  }

  .ps__thumb-x {
    block-size: 0.25rem !important;
  }

  .ps__rail-x {
    background: transparent !important;
    block-size: 0.5rem;
  }

  .ps__rail-y {
    background: transparent !important;
    inline-size: 0.5rem !important;
    inset-inline-end: 0.125rem !important;
    inset-inline-start: unset !important;
  }

  .ps__rail-y.ps--clicking .ps__thumb-y,
  .ps__rail-y:focus>.ps__thumb-y,
  .ps__rail-y:hover>.ps__thumb-y {
    inline-size: 0.375rem;
  }

  .ps__thumb-x,
  .ps__thumb-y {
    background-color: rgb(var(--v-theme-perfect-scrollbar-thumb)) !important;
  }

  a {
    color: rgb(var(--v-theme-primary));
    text-decoration: none;
  }

  p {
    margin-block-end: 1rem;
  }

  svg.iconify {
    block-size: 1em;
    inline-size: 1em;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-header .app-logo .app-title {
    font-size: 22px;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-group.active>.nav-group-label {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-weight: 600;
  }

  .layout-nav-type-vertical .layout-vertical-nav .nav-section-title .placeholder-icon {
    margin-inline-start: 0.3rem;
  }

  .layout-horizontal-nav .nav-group .popper-content .nav-group.active>.popper-triggerer .nav-group-label,
  .layout-horizontal-nav .nav-link .popper-content .nav-group.active>.popper-triggerer .nav-group-label {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-weight: 600;
  }

  .layout-horizontal-nav .nav-group .popper-content .nav-link.sub-item .router-link-active.router-link-exact-active,
  .layout-horizontal-nav .nav-link .popper-content .nav-link.sub-item .router-link-active.router-link-exact-active {
    font-weight: 600;
  }

  .layout-wrapper.layout-nav-type-horizontal .layout-navbar-and-nav-container .app-logo .app-title {
    font-size: 22px;
  }

  .skin--bordered .layout-nav-type-vertical .layout-navbar .navbar-content-container {
    background-color: rgb(var(--v-theme-background));
    box-shadow: none !important;
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .skin--bordered .layout-nav-type-vertical.window-scrolled .layout-navbar .navbar-content-container {
    border-block-start: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .v-dialog .v-dialog-close-btn {
    position: absolute;
    z-index: 1;
    border-radius: 0.375rem;
    background-color: rgb(var(--v-theme-surface)) !important;
    block-size: 2rem;
    color: rgba(var(--v-theme-on-surface), var(--v-disabled-opacity)) !important;
    inline-size: 2rem;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(0.5rem, -0.5rem);
  }

  [dir=rtl] .v-dialog .v-dialog-close-btn {
    transform: translate(-0.5rem, -0.5rem);
  }

  .v-dialog .v-dialog-close-btn:hover {
    transform: translate(0.3125rem, -0.3125rem);
  }

  [dir=rtl] .v-dialog .v-dialog-close-btn:hover {
    transform: translate(-0.3125rem, -0.3125rem);
  }

  .v-dialog .v-btn:active {
    transform: scale(0.98);
  }

  @media (min-width: 1200px) {

    .v-dialog.v-dialog-xl,
    .v-dialog.v-dialog-xl .v-overlay__content>.v-card,
    .v-dialog.v-dialog-xl .v-overlay__content {
      inline-size: 1165px !important;
      max-inline-size: unset !important;
    }
  }

  .v-tabs .v-btn:active {
    transform: none;
  }

  .v-expansion-panel-title {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    font-weight: 600;
  }

  .v-expansion-panel-title .v-expansion-panel-title__icon {
    font-size: 0.8125rem;
  }

  .v-expansion-panel-title .v-expansion-panel-title__overlay,
  .v-expansion-panel-title--active .v-expansion-panel-title__overlay,
  .v-expansion-panel-title:hover .v-expansion-panel-title__overlay,
  .v-expansion-panel-title:focus .v-expansion-panel-title__overlay,
  .v-expansion-panel-title:focus-visible .v-expansion-panel-title__overlay,
  .v-expansion-panel-title--active:focus .v-expansion-panel-title__overlay,
  .v-expansion-panel-title--active:hover .v-expansion-panel-title__overlay {
    opacity: 0 !important;
  }

  .v-expansion-panels:not(.v-expansion-panels--variant-accordion) .v-expansion-panel.v-expansion-panel--active .v-expansion-panel__shadow {
    box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }

  .v-menu.v-overlay .v-overlay__content .v-list .v-list-item {
    border-radius: 0.375rem;
    margin-block: 0.25rem;
    margin-inline: 0.5rem;
    min-block-size: 2.25rem;
  }

  .v-menu.v-overlay .v-overlay__content .v-list .v-list-item:first-child {
    margin-block-start: 0;
  }

  .v-menu.v-overlay .v-overlay__content .v-list .v-list-item:last-child {
    margin-block-end: 0;
  }

  .v-pagination .v-pagination__prev .v-btn--icon,
  .v-pagination .v-pagination__next .v-btn--icon {
    font-size: 0.85rem;
  }

  .carousel-delimiter-top-end .v-carousel__controls {
    justify-content: end;
    inset-block-start: 0;
    padding-inline: 1rem;
  }

  .carousel-delimiter-top-end .v-carousel__controls .v-btn--icon.v-btn--density-default {
    block-size: calc(var(--v-btn-height) + 0px);
    inline-size: calc(var(--v-btn-height) + 0px);
  }

  .carousel-delimiter-top-end .v-carousel__controls .v-btn--icon.v-btn--density-default .v-btn__overlay {
    opacity: 0;
  }
</style>
<style type="text/css" data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/styles/styles.scss">
  ul.nav-items>li.nav-group.open:nth-child(4)>ul>li:nth-child(1),
  ul.nav-items>li.nav-group.open:nth-child(4)>ul>li:nth-child(6) {
    background: rgba(75, 70, 92, 0.07);
    margin: 6px 15px;
    border-radius: 6px;
  }

  ul.nav-items>li.nav-group.open:nth-child(4)>ul>li:nth-child(1) a,
  ul.nav-items>li.nav-group.open:nth-child(4)>ul>li:nth-child(6) a {
    margin-left: 0;
  }
</style>
<script type="module" src="Aradei%20Capital_fichiers/hook.js"></script>
<link rel="stylesheet" href="Aradei%20Capital_fichiers/css.css" media="all">
<style type="text/css" id="vuetify-theme-stylesheet">
  .v-theme--light {
    color-scheme: normal;
    --v-theme-background: 248, 247, 250;
    --v-theme-background-overlay-multiplier: 1;
    --v-theme-surface: 255, 255, 255;
    --v-theme-surface-overlay-multiplier: 1;
    --v-theme-surface-variant: 66, 66, 66;
    --v-theme-surface-variant-overlay-multiplier: 2;
    --v-theme-on-surface-variant: 238, 238, 238;
    --v-theme-primary: 71, 138, 135;
    --v-theme-primary-overlay-multiplier: 1;
    --v-theme-primary-darken-1: 55, 0, 179;
    --v-theme-primary-darken-1-overlay-multiplier: 2;
    --v-theme-secondary: 168, 170, 174;
    --v-theme-secondary-overlay-multiplier: 1;
    --v-theme-secondary-darken-1: 1, 135, 134;
    --v-theme-secondary-darken-1-overlay-multiplier: 1;
    --v-theme-error: 234, 84, 85;
    --v-theme-error-overlay-multiplier: 1;
    --v-theme-info: 0, 207, 232;
    --v-theme-info-overlay-multiplier: 1;
    --v-theme-success: 40, 199, 111;
    --v-theme-success-overlay-multiplier: 1;
    --v-theme-warning: 255, 159, 67;
    --v-theme-warning-overlay-multiplier: 1;
    --v-theme-on-primary: 255, 255, 255;
    --v-theme-on-secondary: 255, 255, 255;
    --v-theme-on-success: 255, 255, 255;
    --v-theme-on-info: 255, 255, 255;
    --v-theme-on-warning: 255, 255, 255;
    --v-theme-on-background: 51, 48, 60;
    --v-theme-on-surface: 51, 48, 60;
    --v-theme-grey-50: 250, 250, 250;
    --v-theme-grey-50-overlay-multiplier: 1;
    --v-theme-grey-100: 245, 245, 245;
    --v-theme-grey-100-overlay-multiplier: 1;
    --v-theme-grey-200: 238, 238, 238;
    --v-theme-grey-200-overlay-multiplier: 1;
    --v-theme-grey-300: 224, 224, 224;
    --v-theme-grey-300-overlay-multiplier: 1;
    --v-theme-grey-400: 189, 189, 189;
    --v-theme-grey-400-overlay-multiplier: 1;
    --v-theme-grey-500: 158, 158, 158;
    --v-theme-grey-500-overlay-multiplier: 1;
    --v-theme-grey-600: 117, 117, 117;
    --v-theme-grey-600-overlay-multiplier: 2;
    --v-theme-grey-700: 97, 97, 97;
    --v-theme-grey-700-overlay-multiplier: 2;
    --v-theme-grey-800: 66, 66, 66;
    --v-theme-grey-800-overlay-multiplier: 2;
    --v-theme-grey-900: 33, 33, 33;
    --v-theme-grey-900-overlay-multiplier: 2;
    --v-theme-perfect-scrollbar-thumb: 219, 218, 222;
    --v-theme-perfect-scrollbar-thumb-overlay-multiplier: 1;
    --v-theme-on-primary-darken-1: 255, 255, 255;
    --v-theme-on-secondary-darken-1: 255, 255, 255;
    --v-theme-on-error: 255, 255, 255;
    --v-theme-on-grey-50: 0, 0, 0;
    --v-theme-on-grey-100: 0, 0, 0;
    --v-theme-on-grey-200: 0, 0, 0;
    --v-theme-on-grey-300: 0, 0, 0;
    --v-theme-on-grey-400: 0, 0, 0;
    --v-theme-on-grey-500: 255, 255, 255;
    --v-theme-on-grey-600: 255, 255, 255;
    --v-theme-on-grey-700: 255, 255, 255;
    --v-theme-on-grey-800: 255, 255, 255;
    --v-theme-on-grey-900: 255, 255, 255;
    --v-theme-on-perfect-scrollbar-thumb: 0, 0, 0;
    --v-border-color: 75, 70, 92;
    --v-border-opacity: 0.12;
    --v-high-emphasis-opacity: 0.87;
    --v-medium-emphasis-opacity: 0.68;
    --v-disabled-opacity: 0.38;
    --v-idle-opacity: 0.04;
    --v-hover-opacity: 0.04;
    --v-focus-opacity: 0.12;
    --v-selected-opacity: 0.08;
    --v-activated-opacity: 0.12;
    --v-pressed-opacity: 0.12;
    --v-dragged-opacity: 0.08;
    --v-theme-kbd: 33, 37, 41;
    --v-theme-on-kbd: 255, 255, 255;
    --v-theme-code: 245, 245, 245;
    --v-theme-on-code: 0, 0, 0;
    --v-shadow-key-umbra-opacity: rgba(var(--v-theme-on-surface), 0.03);
    --v-shadow-key-penumbra-opacity: rgba(var(--v-theme-on-surface), 0.02);
    --v-shadow-key-ambient-opacity: rgba(var(--v-theme-on-surface), 0.01);
  }

  .v-theme--dark {
    color-scheme: dark;
    --v-theme-background: 37, 41, 60;
    --v-theme-background-overlay-multiplier: 1;
    --v-theme-surface: 47, 51, 73;
    --v-theme-surface-overlay-multiplier: 1;
    --v-theme-surface-variant: 189, 189, 189;
    --v-theme-surface-variant-overlay-multiplier: 2;
    --v-theme-on-surface-variant: 66, 66, 66;
    --v-theme-primary: 115, 103, 240;
    --v-theme-primary-overlay-multiplier: 2;
    --v-theme-primary-darken-1: 55, 0, 179;
    --v-theme-primary-darken-1-overlay-multiplier: 1;
    --v-theme-secondary: 168, 170, 174;
    --v-theme-secondary-overlay-multiplier: 2;
    --v-theme-secondary-darken-1: 3, 218, 197;
    --v-theme-secondary-darken-1-overlay-multiplier: 2;
    --v-theme-error: 234, 84, 85;
    --v-theme-error-overlay-multiplier: 2;
    --v-theme-info: 0, 207, 232;
    --v-theme-info-overlay-multiplier: 2;
    --v-theme-success: 40, 199, 111;
    --v-theme-success-overlay-multiplier: 2;
    --v-theme-warning: 255, 159, 67;
    --v-theme-warning-overlay-multiplier: 2;
    --v-theme-on-primary: 255, 255, 255;
    --v-theme-on-secondary: 255, 255, 255;
    --v-theme-on-success: 255, 255, 255;
    --v-theme-on-info: 255, 255, 255;
    --v-theme-on-warning: 255, 255, 255;
    --v-theme-on-background: 228, 230, 244;
    --v-theme-on-surface: 228, 230, 244;
    --v-theme-grey-50: 38, 41, 58;
    --v-theme-grey-50-overlay-multiplier: 1;
    --v-theme-grey-100: 47, 51, 73;
    --v-theme-grey-100-overlay-multiplier: 1;
    --v-theme-grey-200: 38, 41, 58;
    --v-theme-grey-200-overlay-multiplier: 1;
    --v-theme-grey-300: 74, 80, 114;
    --v-theme-grey-300-overlay-multiplier: 1;
    --v-theme-grey-400: 94, 102, 146;
    --v-theme-grey-400-overlay-multiplier: 1;
    --v-theme-grey-500: 121, 131, 187;
    --v-theme-grey-500-overlay-multiplier: 2;
    --v-theme-grey-600: 170, 179, 222;
    --v-theme-grey-600-overlay-multiplier: 2;
    --v-theme-grey-700: 182, 190, 227;
    --v-theme-grey-700-overlay-multiplier: 2;
    --v-theme-grey-800: 207, 211, 236;
    --v-theme-grey-800-overlay-multiplier: 2;
    --v-theme-grey-900: 231, 233, 246;
    --v-theme-grey-900-overlay-multiplier: 2;
    --v-theme-perfect-scrollbar-thumb: 74, 80, 114;
    --v-theme-perfect-scrollbar-thumb-overlay-multiplier: 1;
    --v-theme-on-primary-darken-1: 255, 255, 255;
    --v-theme-on-secondary-darken-1: 0, 0, 0;
    --v-theme-on-error: 255, 255, 255;
    --v-theme-on-grey-50: 255, 255, 255;
    --v-theme-on-grey-100: 255, 255, 255;
    --v-theme-on-grey-200: 255, 255, 255;
    --v-theme-on-grey-300: 255, 255, 255;
    --v-theme-on-grey-400: 255, 255, 255;
    --v-theme-on-grey-500: 255, 255, 255;
    --v-theme-on-grey-600: 0, 0, 0;
    --v-theme-on-grey-700: 0, 0, 0;
    --v-theme-on-grey-800: 0, 0, 0;
    --v-theme-on-grey-900: 0, 0, 0;
    --v-theme-on-perfect-scrollbar-thumb: 255, 255, 255;
    --v-border-color: 207, 211, 236;
    --v-border-opacity: 0.12;
    --v-high-emphasis-opacity: 0.87;
    --v-medium-emphasis-opacity: 0.68;
    --v-disabled-opacity: 0.38;
    --v-idle-opacity: 0.1;
    --v-hover-opacity: 0.04;
    --v-focus-opacity: 0.12;
    --v-selected-opacity: 0.08;
    --v-activated-opacity: 0.12;
    --v-pressed-opacity: 0.16;
    --v-dragged-opacity: 0.08;
    --v-theme-kbd: 33, 37, 41;
    --v-theme-on-kbd: 255, 255, 255;
    --v-theme-code: 52, 52, 52;
    --v-theme-on-code: 204, 204, 204;
    --v-shadow-key-umbra-opacity: rgba(12, 16, 27, 0.15);
    --v-shadow-key-penumbra-opacity: rgba(12, 16, 27, 0.01);
    --v-shadow-key-ambient-opacity: rgba(12, 16, 27, 0.08);
  }

  .bg-background {
    --v-theme-overlay-multiplier: var(--v-theme-background-overlay-multiplier);
    background: rgb(var(--v-theme-background)) !important;
    color: rgb(var(--v-theme-on-background)) !important;
  }

  .bg-surface {
    --v-theme-overlay-multiplier: var(--v-theme-surface-overlay-multiplier);
    background: rgb(var(--v-theme-surface)) !important;
    color: rgb(var(--v-theme-on-surface)) !important;
  }

  .bg-surface-variant {
    --v-theme-overlay-multiplier: var(--v-theme-surface-variant-overlay-multiplier);
    background: rgb(var(--v-theme-surface-variant)) !important;
    color: rgb(var(--v-theme-on-surface-variant)) !important;
  }

  .bg-primary {
    --v-theme-overlay-multiplier: var(--v-theme-primary-overlay-multiplier);
    background: rgb(var(--v-theme-primary)) !important;
    color: rgb(var(--v-theme-on-primary)) !important;
  }

  .bg-primary-darken-1 {
    --v-theme-overlay-multiplier: var(--v-theme-primary-darken-1-overlay-multiplier);
    background: rgb(var(--v-theme-primary-darken-1)) !important;
    color: rgb(var(--v-theme-on-primary-darken-1)) !important;
  }

  .bg-secondary {
    --v-theme-overlay-multiplier: var(--v-theme-secondary-overlay-multiplier);
    background: rgb(var(--v-theme-secondary)) !important;
    color: rgb(var(--v-theme-on-secondary)) !important;
  }

  .bg-secondary-darken-1 {
    --v-theme-overlay-multiplier: var(--v-theme-secondary-darken-1-overlay-multiplier);
    background: rgb(var(--v-theme-secondary-darken-1)) !important;
    color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
  }

  .bg-error {
    --v-theme-overlay-multiplier: var(--v-theme-error-overlay-multiplier);
    background: rgb(var(--v-theme-error)) !important;
    color: rgb(var(--v-theme-on-error)) !important;
  }

  .bg-info {
    --v-theme-overlay-multiplier: var(--v-theme-info-overlay-multiplier);
    background: rgb(var(--v-theme-info)) !important;
    color: rgb(var(--v-theme-on-info)) !important;
  }

  .bg-success {
    --v-theme-overlay-multiplier: var(--v-theme-success-overlay-multiplier);
    background: rgb(var(--v-theme-success)) !important;
    color: rgb(var(--v-theme-on-success)) !important;
  }

  .bg-warning {
    --v-theme-overlay-multiplier: var(--v-theme-warning-overlay-multiplier);
    background: rgb(var(--v-theme-warning)) !important;
    color: rgb(var(--v-theme-on-warning)) !important;
  }

  .bg-grey-50 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-50-overlay-multiplier);
    background: rgb(var(--v-theme-grey-50)) !important;
    color: rgb(var(--v-theme-on-grey-50)) !important;
  }

  .bg-grey-100 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-100-overlay-multiplier);
    background: rgb(var(--v-theme-grey-100)) !important;
    color: rgb(var(--v-theme-on-grey-100)) !important;
  }

  .bg-grey-200 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-200-overlay-multiplier);
    background: rgb(var(--v-theme-grey-200)) !important;
    color: rgb(var(--v-theme-on-grey-200)) !important;
  }

  .bg-grey-300 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-300-overlay-multiplier);
    background: rgb(var(--v-theme-grey-300)) !important;
    color: rgb(var(--v-theme-on-grey-300)) !important;
  }

  .bg-grey-400 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-400-overlay-multiplier);
    background: rgb(var(--v-theme-grey-400)) !important;
    color: rgb(var(--v-theme-on-grey-400)) !important;
  }

  .bg-grey-500 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-500-overlay-multiplier);
    background: rgb(var(--v-theme-grey-500)) !important;
    color: rgb(var(--v-theme-on-grey-500)) !important;
  }

  .bg-grey-600 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-600-overlay-multiplier);
    background: rgb(var(--v-theme-grey-600)) !important;
    color: rgb(var(--v-theme-on-grey-600)) !important;
  }

  .bg-grey-700 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-700-overlay-multiplier);
    background: rgb(var(--v-theme-grey-700)) !important;
    color: rgb(var(--v-theme-on-grey-700)) !important;
  }

  .bg-grey-800 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-800-overlay-multiplier);
    background: rgb(var(--v-theme-grey-800)) !important;
    color: rgb(var(--v-theme-on-grey-800)) !important;
  }

  .bg-grey-900 {
    --v-theme-overlay-multiplier: var(--v-theme-grey-900-overlay-multiplier);
    background: rgb(var(--v-theme-grey-900)) !important;
    color: rgb(var(--v-theme-on-grey-900)) !important;
  }

  .bg-perfect-scrollbar-thumb {
    --v-theme-overlay-multiplier: var(--v-theme-perfect-scrollbar-thumb-overlay-multiplier);
    background: rgb(var(--v-theme-perfect-scrollbar-thumb)) !important;
    color: rgb(var(--v-theme-on-perfect-scrollbar-thumb)) !important;
  }

  .text-background {
    color: rgb(var(--v-theme-background)) !important;
  }

  .border-background {
    --v-border-color: var(--v-theme-background);
  }

  .text-surface {
    color: rgb(var(--v-theme-surface)) !important;
  }

  .border-surface {
    --v-border-color: var(--v-theme-surface);
  }

  .text-surface-variant {
    color: rgb(var(--v-theme-surface-variant)) !important;
  }

  .border-surface-variant {
    --v-border-color: var(--v-theme-surface-variant);
  }

  .on-surface-variant {
    color: rgb(var(--v-theme-on-surface-variant)) !important;
  }

  .text-primary {
    color: rgb(var(--v-theme-primary)) !important;
  }

  .border-primary {
    --v-border-color: var(--v-theme-primary);
  }

  .text-primary-darken-1 {
    color: rgb(var(--v-theme-primary-darken-1)) !important;
  }

  .border-primary-darken-1 {
    --v-border-color: var(--v-theme-primary-darken-1);
  }

  .text-secondary {
    color: rgb(var(--v-theme-secondary)) !important;
  }

  .border-secondary {
    --v-border-color: var(--v-theme-secondary);
  }

  .text-secondary-darken-1 {
    color: rgb(var(--v-theme-secondary-darken-1)) !important;
  }

  .border-secondary-darken-1 {
    --v-border-color: var(--v-theme-secondary-darken-1);
  }

  .text-error {
    color: rgb(var(--v-theme-error)) !important;
  }

  .border-error {
    --v-border-color: var(--v-theme-error);
  }

  .text-info {
    color: rgb(var(--v-theme-info)) !important;
  }

  .border-info {
    --v-border-color: var(--v-theme-info);
  }

  .text-success {
    color: rgb(var(--v-theme-success)) !important;
  }

  .border-success {
    --v-border-color: var(--v-theme-success);
  }

  .text-warning {
    color: rgb(var(--v-theme-warning)) !important;
  }

  .border-warning {
    --v-border-color: var(--v-theme-warning);
  }

  .on-primary {
    color: rgb(var(--v-theme-on-primary)) !important;
  }

  .on-secondary {
    color: rgb(var(--v-theme-on-secondary)) !important;
  }

  .on-success {
    color: rgb(var(--v-theme-on-success)) !important;
  }

  .on-info {
    color: rgb(var(--v-theme-on-info)) !important;
  }

  .on-warning {
    color: rgb(var(--v-theme-on-warning)) !important;
  }

  .on-background {
    color: rgb(var(--v-theme-on-background)) !important;
  }

  .on-surface {
    color: rgb(var(--v-theme-on-surface)) !important;
  }

  .text-grey-50 {
    color: rgb(var(--v-theme-grey-50)) !important;
  }

  .border-grey-50 {
    --v-border-color: var(--v-theme-grey-50);
  }

  .text-grey-100 {
    color: rgb(var(--v-theme-grey-100)) !important;
  }

  .border-grey-100 {
    --v-border-color: var(--v-theme-grey-100);
  }

  .text-grey-200 {
    color: rgb(var(--v-theme-grey-200)) !important;
  }

  .border-grey-200 {
    --v-border-color: var(--v-theme-grey-200);
  }

  .text-grey-300 {
    color: rgb(var(--v-theme-grey-300)) !important;
  }

  .border-grey-300 {
    --v-border-color: var(--v-theme-grey-300);
  }

  .text-grey-400 {
    color: rgb(var(--v-theme-grey-400)) !important;
  }

  .border-grey-400 {
    --v-border-color: var(--v-theme-grey-400);
  }

  .text-grey-500 {
    color: rgb(var(--v-theme-grey-500)) !important;
  }

  .border-grey-500 {
    --v-border-color: var(--v-theme-grey-500);
  }

  .text-grey-600 {
    color: rgb(var(--v-theme-grey-600)) !important;
  }

  .border-grey-600 {
    --v-border-color: var(--v-theme-grey-600);
  }

  .text-grey-700 {
    color: rgb(var(--v-theme-grey-700)) !important;
  }

  .border-grey-700 {
    --v-border-color: var(--v-theme-grey-700);
  }

  .text-grey-800 {
    color: rgb(var(--v-theme-grey-800)) !important;
  }

  .border-grey-800 {
    --v-border-color: var(--v-theme-grey-800);
  }

  .text-grey-900 {
    color: rgb(var(--v-theme-grey-900)) !important;
  }

  .border-grey-900 {
    --v-border-color: var(--v-theme-grey-900);
  }

  .text-perfect-scrollbar-thumb {
    color: rgb(var(--v-theme-perfect-scrollbar-thumb)) !important;
  }

  .border-perfect-scrollbar-thumb {
    --v-border-color: var(--v-theme-perfect-scrollbar-thumb);
  }

  .on-primary-darken-1 {
    color: rgb(var(--v-theme-on-primary-darken-1)) !important;
  }

  .on-secondary-darken-1 {
    color: rgb(var(--v-theme-on-secondary-darken-1)) !important;
  }

  .on-error {
    color: rgb(var(--v-theme-on-error)) !important;
  }

  .on-grey-50 {
    color: rgb(var(--v-theme-on-grey-50)) !important;
  }

  .on-grey-100 {
    color: rgb(var(--v-theme-on-grey-100)) !important;
  }

  .on-grey-200 {
    color: rgb(var(--v-theme-on-grey-200)) !important;
  }

  .on-grey-300 {
    color: rgb(var(--v-theme-on-grey-300)) !important;
  }

  .on-grey-400 {
    color: rgb(var(--v-theme-on-grey-400)) !important;
  }

  .on-grey-500 {
    color: rgb(var(--v-theme-on-grey-500)) !important;
  }

  .on-grey-600 {
    color: rgb(var(--v-theme-on-grey-600)) !important;
  }

  .on-grey-700 {
    color: rgb(var(--v-theme-on-grey-700)) !important;
  }

  .on-grey-800 {
    color: rgb(var(--v-theme-on-grey-800)) !important;
  }

  .on-grey-900 {
    color: rgb(var(--v-theme-on-grey-900)) !important;
  }

  .on-perfect-scrollbar-thumb {
    color: rgb(var(--v-theme-on-perfect-scrollbar-thumb)) !important;
  }
</style>
<link id="nordvpn-contentScript-extension-fonts" rel="stylesheet" href="Aradei%20Capital_fichiers/css_002.css">
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@core/components/AppDateTimePicker.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .flatpickr-calendar {
    background: transparent;
    opacity: 0;
    display: none;
    text-align: center;
    visibility: hidden;
    padding: 0;
    -webkit-animation: none;
    animation: none;
    direction: ltr;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    border-radius: 5px;
    position: absolute;
    width: 307.875px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    background: #fff;
    -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0, 0, 0, 0.08);
  }

  .flatpickr-calendar.open,
  .flatpickr-calendar.inline {
    opacity: 1;
    max-height: 640px;
    visibility: visible;
  }

  .flatpickr-calendar.open {
    display: inline-block;
    z-index: 99999;
  }

  .flatpickr-calendar.animate.open {
    -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
    animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .flatpickr-calendar.inline {
    display: block;
    position: relative;
    top: 2px;
  }

  .flatpickr-calendar.static {
    position: absolute;
    top: calc(100% + 2px);
  }

  .flatpickr-calendar.static.open {
    z-index: 999;
    display: block;
  }

  .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }

  .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {
    -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
    box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
  }

  .flatpickr-calendar .hasWeeks .dayContainer,
  .flatpickr-calendar .hasTime .dayContainer {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .flatpickr-calendar .hasWeeks .dayContainer {
    border-left: 0;
  }

  .flatpickr-calendar.hasTime .flatpickr-time {
    height: 40px;
    border-top: 1px solid #e6e6e6;
  }

  .flatpickr-calendar.noCalendar.hasTime .flatpickr-time {
    height: auto;
  }

  .flatpickr-calendar:before,
  .flatpickr-calendar:after {
    position: absolute;
    display: block;
    pointer-events: none;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    left: 22px;
  }

  .flatpickr-calendar.rightMost:before,
  .flatpickr-calendar.arrowRight:before,
  .flatpickr-calendar.rightMost:after,
  .flatpickr-calendar.arrowRight:after {
    left: auto;
    right: 22px;
  }

  .flatpickr-calendar.arrowCenter:before,
  .flatpickr-calendar.arrowCenter:after {
    left: 50%;
    right: 50%;
  }

  .flatpickr-calendar:before {
    border-width: 5px;
    margin: 0 -5px;
  }

  .flatpickr-calendar:after {
    border-width: 4px;
    margin: 0 -4px;
  }

  .flatpickr-calendar.arrowTop:before,
  .flatpickr-calendar.arrowTop:after {
    bottom: 100%;
  }

  .flatpickr-calendar.arrowTop:before {
    border-bottom-color: #e6e6e6;
  }

  .flatpickr-calendar.arrowTop:after {
    border-bottom-color: #fff;
  }

  .flatpickr-calendar.arrowBottom:before,
  .flatpickr-calendar.arrowBottom:after {
    top: 100%;
  }

  .flatpickr-calendar.arrowBottom:before {
    border-top-color: #e6e6e6;
  }

  .flatpickr-calendar.arrowBottom:after {
    border-top-color: #fff;
  }

  .flatpickr-calendar:focus {
    outline: 0;
  }

  .flatpickr-wrapper {
    position: relative;
    display: inline-block;
  }

  .flatpickr-months {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .flatpickr-months .flatpickr-month {
    background: transparent;
    color: rgba(0, 0, 0, 0.9);
    fill: rgba(0, 0, 0, 0.9);
    height: 34px;
    line-height: 1;
    text-align: center;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .flatpickr-months .flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 34px;
    padding: 10px;
    z-index: 3;
    color: rgba(0, 0, 0, 0.9);
    fill: rgba(0, 0, 0, 0.9);
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,
  .flatpickr-months .flatpickr-next-month.flatpickr-disabled {
    display: none;
  }

  .flatpickr-months .flatpickr-prev-month i,
  .flatpickr-months .flatpickr-next-month i {
    position: relative;
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
    /*
      
    /*
      */
    left: 0;
    /*
      
    /*
      */
  }

  /*
    
  /*
    
  .flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
    /*
      
    /*
      */
    right: 0;
    /*
      
    /*
      */
  }

  /*
    
  /*
    
  .flatpickr-months .flatpickr-prev-month:hover,
  .flatpickr-months .flatpickr-next-month:hover {
    color: #959ea9;
  }

  .flatpickr-months .flatpickr-prev-month:hover svg,
  .flatpickr-months .flatpickr-next-month:hover svg {
    fill: #f64747;
  }

  .flatpickr-months .flatpickr-prev-month svg,
  .flatpickr-months .flatpickr-next-month svg {
    width: 14px;
    height: 14px;
  }

  .flatpickr-months .flatpickr-prev-month svg path,
  .flatpickr-months .flatpickr-next-month svg path {
    -webkit-transition: fill 0.1s;
    transition: fill 0.1s;
    fill: inherit;
  }

  .numInputWrapper {
    position: relative;
    height: auto;
  }

  .numInputWrapper input,
  .numInputWrapper span {
    display: inline-block;
  }

  .numInputWrapper input {
    width: 100%;
  }

  .numInputWrapper input::-ms-clear {
    display: none;
  }

  .numInputWrapper input::-webkit-outer-spin-button,
  .numInputWrapper input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  .numInputWrapper span {
    position: absolute;
    right: 0;
    width: 14px;
    padding: 0 4px 0 2px;
    height: 50%;
    line-height: 50%;
    opacity: 0;
    cursor: pointer;
    border: 1px solid rgba(57, 57, 57, 0.15);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .numInputWrapper span:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  .numInputWrapper span:active {
    background: rgba(0, 0, 0, 0.2);
  }

  .numInputWrapper span:after {
    display: block;
    content: "";
    position: absolute;
  }

  .numInputWrapper span.arrowUp {
    top: 0;
    border-bottom: 0;
  }

  .numInputWrapper span.arrowUp:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgba(57, 57, 57, 0.6);
    top: 26%;
  }

  .numInputWrapper span.arrowDown {
    top: 50%;
  }

  .numInputWrapper span.arrowDown:after {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(57, 57, 57, 0.6);
    top: 40%;
  }

  .numInputWrapper span svg {
    width: inherit;
    height: auto;
  }

  .numInputWrapper span svg path {
    fill: rgba(0, 0, 0, 0.5);
  }

  .numInputWrapper:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .numInputWrapper:hover span {
    opacity: 1;
  }

  .flatpickr-current-month {
    font-size: 135%;
    line-height: inherit;
    font-weight: 300;
    color: inherit;
    position: absolute;
    width: 75%;
    left: 12.5%;
    padding: 7.48px 0 0 0;
    line-height: 1;
    height: 34px;
    display: inline-block;
    text-align: center;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
  }

  .flatpickr-current-month span.cur-month {
    font-family: inherit;
    font-weight: 700;
    color: inherit;
    display: inline-block;
    margin-left: 0.5ch;
    padding: 0;
  }

  .flatpickr-current-month span.cur-month:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .flatpickr-current-month .numInputWrapper {
    width: 6ch;
    width: 7ch\0;
    display: inline-block;
  }

  .flatpickr-current-month .numInputWrapper span.arrowUp:after {
    border-bottom-color: rgba(0, 0, 0, 0.9);
  }

  .flatpickr-current-month .numInputWrapper span.arrowDown:after {
    border-top-color: rgba(0, 0, 0, 0.9);
  }

  .flatpickr-current-month input.cur-year {
    background: transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: inherit;
    cursor: text;
    padding: 0 0 0 0.5ch;
    margin: 0;
    display: inline-block;
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    line-height: inherit;
    height: auto;
    border: 0;
    border-radius: 0;
    vertical-align: initial;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .flatpickr-current-month input.cur-year:focus {
    outline: 0;
  }

  .flatpickr-current-month input.cur-year[disabled],
  .flatpickr-current-month input.cur-year[disabled]:hover {
    font-size: 100%;
    color: rgba(0, 0, 0, 0.5);
    background: transparent;
    pointer-events: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months {
    appearance: menulist;
    background: transparent;
    border: none;
    border-radius: 0;
    box-sizing: border-box;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    height: auto;
    line-height: inherit;
    margin: -1px 0 0 0;
    outline: none;
    padding: 0 0 0 0.5ch;
    position: relative;
    vertical-align: initial;
    -webkit-box-sizing: border-box;
    -webkit-appearance: menulist;
    -moz-appearance: menulist;
    width: auto;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months:focus,
  .flatpickr-current-month .flatpickr-monthDropdown-months:active {
    outline: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {
    background-color: transparent;
    outline: none;
    padding: 0;
  }

  .flatpickr-weekdays {
    background: transparent;
    text-align: center;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 28px;
  }

  .flatpickr-weekdays .flatpickr-weekdaycontainer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  span.flatpickr-weekday {
    cursor: default;
    font-size: 90%;
    background: transparent;
    color: rgba(0, 0, 0, 0.54);
    line-height: 1;
    margin: 0;
    text-align: center;
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-weight: bolder;
  }

  .dayContainer,
  .flatpickr-weeks {
    padding: 1px 0 0 0;
  }

  .flatpickr-days {
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 307.875px;
  }

  .flatpickr-days:focus {
    outline: 0;
  }

  .dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    width: 307.875px;
    min-width: 307.875px;
    max-width: 307.875px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-transform: translate3d(0px, 0px, 0px);
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }

  .dayContainer+.dayContainer {
    -webkit-box-shadow: -1px 0 0 #e6e6e6;
    box-shadow: -1px 0 0 #e6e6e6;
  }

  .flatpickr-day {
    background: none;
    border: 1px solid transparent;
    border-radius: 150px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #393939;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    -webkit-flex-basis: 14.2857143%;
    -ms-flex-preferred-size: 14.2857143%;
    flex-basis: 14.2857143%;
    max-width: 39px;
    height: 39px;
    line-height: 39px;
    margin: 0;
    display: inline-block;
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  .flatpickr-day.inRange,
  .flatpickr-day.prevMonthDay.inRange,
  .flatpickr-day.nextMonthDay.inRange,
  .flatpickr-day.today.inRange,
  .flatpickr-day.prevMonthDay.today.inRange,
  .flatpickr-day.nextMonthDay.today.inRange,
  .flatpickr-day:hover,
  .flatpickr-day.prevMonthDay:hover,
  .flatpickr-day.nextMonthDay:hover,
  .flatpickr-day:focus,
  .flatpickr-day.prevMonthDay:focus,
  .flatpickr-day.nextMonthDay:focus {
    cursor: pointer;
    outline: 0;
    background: #e6e6e6;
    border-color: #e6e6e6;
  }

  .flatpickr-day.today {
    border-color: #959ea9;
  }

  .flatpickr-day.today:hover,
  .flatpickr-day.today:focus {
    border-color: #959ea9;
    background: #959ea9;
    color: #fff;
  }

  .flatpickr-day.selected,
  .flatpickr-day.startRange,
  .flatpickr-day.endRange,
  .flatpickr-day.selected.inRange,
  .flatpickr-day.startRange.inRange,
  .flatpickr-day.endRange.inRange,
  .flatpickr-day.selected:focus,
  .flatpickr-day.startRange:focus,
  .flatpickr-day.endRange:focus,
  .flatpickr-day.selected:hover,
  .flatpickr-day.startRange:hover,
  .flatpickr-day.endRange:hover,
  .flatpickr-day.selected.prevMonthDay,
  .flatpickr-day.startRange.prevMonthDay,
  .flatpickr-day.endRange.prevMonthDay,
  .flatpickr-day.selected.nextMonthDay,
  .flatpickr-day.startRange.nextMonthDay,
  .flatpickr-day.endRange.nextMonthDay {
    background: #569ff7;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #fff;
    border-color: #569ff7;
  }

  .flatpickr-day.selected.startRange,
  .flatpickr-day.startRange.startRange,
  .flatpickr-day.endRange.startRange {
    border-radius: 50px 0 0 50px;
  }

  .flatpickr-day.selected.endRange,
  .flatpickr-day.startRange.endRange,
  .flatpickr-day.endRange.endRange {
    border-radius: 0 50px 50px 0;
  }

  .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),
  .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),
  .flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)) {
    -webkit-box-shadow: -10px 0 0 #569ff7;
    box-shadow: -10px 0 0 #569ff7;
  }

  .flatpickr-day.selected.startRange.endRange,
  .flatpickr-day.startRange.startRange.endRange,
  .flatpickr-day.endRange.startRange.endRange {
    border-radius: 50px;
  }

  .flatpickr-day.inRange {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
    box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;
  }

  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover,
  .flatpickr-day.prevMonthDay,
  .flatpickr-day.nextMonthDay,
  .flatpickr-day.notAllowed,
  .flatpickr-day.notAllowed.prevMonthDay,
  .flatpickr-day.notAllowed.nextMonthDay {
    color: rgba(57, 57, 57, 0.3);
    background: transparent;
    border-color: transparent;
    cursor: default;
  }

  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover {
    cursor: not-allowed;
    color: rgba(57, 57, 57, 0.1);
  }

  .flatpickr-day.week.selected {
    border-radius: 0;
    -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
    box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;
  }

  .flatpickr-day.hidden {
    visibility: hidden;
  }

  .rangeMode .flatpickr-day {
    margin-top: 1px;
  }

  .flatpickr-weekwrapper {
    float: left;
  }

  .flatpickr-weekwrapper .flatpickr-weeks {
    padding: 0 12px;
    -webkit-box-shadow: 1px 0 0 #e6e6e6;
    box-shadow: 1px 0 0 #e6e6e6;
  }

  .flatpickr-weekwrapper .flatpickr-weekday {
    float: none;
    width: 100%;
    line-height: 28px;
  }

  .flatpickr-weekwrapper span.flatpickr-day,
  .flatpickr-weekwrapper span.flatpickr-day:hover {
    display: block;
    width: 100%;
    max-width: none;
    color: rgba(57, 57, 57, 0.3);
    background: transparent;
    cursor: default;
    border: none;
  }

  .flatpickr-innerContainer {
    display: block;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }

  .flatpickr-rContainer {
    display: inline-block;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .flatpickr-time {
    text-align: center;
    outline: 0;
    display: block;
    height: 0;
    line-height: 40px;
    max-height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .flatpickr-time:after {
    content: "";
    display: table;
    clear: both;
  }

  .flatpickr-time .numInputWrapper {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 40%;
    height: 40px;
    float: left;
  }

  .flatpickr-time .numInputWrapper span.arrowUp:after {
    border-bottom-color: #393939;
  }

  .flatpickr-time .numInputWrapper span.arrowDown:after {
    border-top-color: #393939;
  }

  .flatpickr-time.hasSeconds .numInputWrapper {
    width: 26%;
  }

  .flatpickr-time.time24hr .numInputWrapper {
    width: 49%;
  }

  .flatpickr-time input {
    background: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: 0;
    border-radius: 0;
    text-align: center;
    margin: 0;
    padding: 0;
    height: inherit;
    line-height: inherit;
    color: #393939;
    font-size: 14px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  .flatpickr-time input.flatpickr-hour {
    font-weight: bold;
  }

  .flatpickr-time input.flatpickr-minute,
  .flatpickr-time input.flatpickr-second {
    font-weight: 400;
  }

  .flatpickr-time input:focus {
    outline: 0;
    border: 0;
  }

  .flatpickr-time .flatpickr-time-separator,
  .flatpickr-time .flatpickr-am-pm {
    height: inherit;
    float: left;
    line-height: inherit;
    color: #393939;
    font-weight: bold;
    width: 2%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }

  .flatpickr-time .flatpickr-am-pm {
    outline: 0;
    width: 18%;
    cursor: pointer;
    text-align: center;
    font-weight: 400;
  }

  .flatpickr-time input:hover,
  .flatpickr-time .flatpickr-am-pm:hover,
  .flatpickr-time input:focus,
  .flatpickr-time .flatpickr-am-pm:focus {
    background: #eee;
  }

  .flatpickr-input[readonly] {
    cursor: pointer;
  }

  @-webkit-keyframes fpFadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fpFadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  
  .flat-picker-custom-style {
    position: absolute;
    color: inherit;
    inline-size: 100%;
    inset: 0;
    outline: none;
    padding-block: 0;
    padding-inline: var(--v-field-padding-start);
  }

  input[altinputclass=inlinePicker] {
    display: none;
  }

  .flatpickr-calendar {
    background-color: rgb(var(--v-theme-surface));
    inline-size: 16.625rem;
    margin-block-start: 0.1875rem;
  }

  .flatpickr-calendar .flatpickr-rContainer .flatpickr-weekdays {
    padding-inline: 0.8rem;
  }

  .flatpickr-calendar .flatpickr-rContainer .flatpickr-days {
    min-inline-size: 16.625rem;
  }

  .flatpickr-calendar .flatpickr-rContainer .flatpickr-days .dayContainer {
    justify-content: center !important;
    inline-size: 16.625rem;
    min-inline-size: 16.625rem;
    padding-block-end: 0.5rem;
    padding-block-start: 0;
  }

  .flatpickr-calendar .flatpickr-rContainer .flatpickr-days .dayContainer .flatpickr-day {
    block-size: 2.125rem;
    line-height: 2.125rem;
    margin-block-start: 0 !important;
    max-inline-size: 2.125rem;
  }

  .flatpickr-calendar .flatpickr-day {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .flatpickr-calendar .flatpickr-day.today {
    border-color: rgb(var(--v-theme-primary));
  }

  .flatpickr-calendar .flatpickr-day.today:hover {
    border-color: rgb(var(--v-theme-primary));
    background: transparent;
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .flatpickr-calendar .flatpickr-day.selected,
  .flatpickr-calendar .flatpickr-day.selected:hover {
    border-color: rgb(var(--v-theme-primary));
    background: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
  }

  .flatpickr-calendar .flatpickr-day.inRange,
  .flatpickr-calendar .flatpickr-day.inRange:hover {
    border: none;
    background: rgba(var(--v-theme-primary), 0.1) !important;
    box-shadow: none !important;
    color: rgb(var(--v-theme-primary));
  }

  .flatpickr-calendar .flatpickr-day.startRange {
    box-shadow: none;
  }

  .flatpickr-calendar .flatpickr-day.endRange {
    box-shadow: none;
  }

  .flatpickr-calendar .flatpickr-day.startRange,
  .flatpickr-calendar .flatpickr-day.endRange,
  .flatpickr-calendar .flatpickr-day.startRange:hover,
  .flatpickr-calendar .flatpickr-day.endRange:hover {
    border-color: rgb(var(--v-theme-primary));
    background: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
  }

  .flatpickr-calendar .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),
  .flatpickr-calendar .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),
  .flatpickr-calendar .flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)) {
    box-shadow: -10px 0 0 rgb(var(--v-theme-primary));
  }

  .flatpickr-calendar .flatpickr-day.flatpickr-disabled,
  .flatpickr-calendar .flatpickr-day.prevMonthDay:not(.startRange, .inRange),
  .flatpickr-calendar .flatpickr-day.nextMonthDay:not(.endRange, .inRange) {
    opacity: var(--v-disabled-opacity);
  }

  .flatpickr-calendar .flatpickr-day:hover {
    border-color: rgba(var(--v-theme-surface-variant), var(--v-hover-opacity));
    background: rgba(var(--v-theme-surface-variant), var(--v-hover-opacity));
  }

  .flatpickr-calendar .flatpickr-weekday {
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-size: 0.875rem;
    font-weight: 500;
  }

  .flatpickr-calendar .flatpickr-days {
    inline-size: 16.625rem;
  }

  .flatpickr-calendar::after,
  .flatpickr-calendar::before {
    display: none;
  }

  .flatpickr-calendar .flatpickr-months {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }

  .flatpickr-calendar .flatpickr-months .flatpickr-prev-month,
  .flatpickr-calendar .flatpickr-months .flatpickr-next-month {
    fill: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i,
  .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,
  .flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,
  .flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {
    fill: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .flatpickr-calendar .flatpickr-current-month span.cur-month {
    font-weight: 300;
  }

  .flatpickr-calendar.open {
    z-index: 1051;
  }

  .flatpickr-calendar.hasTime.open .flatpickr-time {
    border-color: rgba(var(--v-border-color), var(--v-border-opacity));
    block-size: auto;
  }

  .flatpickr-time input:hover,
  .flatpickr-time .flatpickr-am-pm:hover,
  .flatpickr-time input:focus,
  .flatpickr-time .flatpickr-am-pm:focus {
    background: transparent;
  }

  .flatpickr-time .flatpickr-am-pm,
  .flatpickr-time .flatpickr-time-separator,
  .flatpickr-time input {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .flatpickr-time .numInputWrapper span.arrowUp::after {
    border-block-end-color: rgb(var(--v-border-color));
  }

  .flatpickr-time .numInputWrapper span.arrowDown::after {
    border-block-start-color: rgb(var(--v-border-color));
  }

  .flatpickr-input[readonly],
  .flatpickr-input~.form-control[readonly],
  .flatpickr-human-friendly[readonly] {
    background-color: inherit;
    opacity: 1 !important;
  }

  .flatpickr-weekdays {
    margin-block-start: 8px;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months {
    appearance: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months,
  .flatpickr-current-month .numInputWrapper {
    padding: 2px;
    border-radius: 4px;
    color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.15s ease-out;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months span,
  .flatpickr-current-month .numInputWrapper span {
    display: none;
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month,
  .flatpickr-current-month .numInputWrapper .flatpickr-monthDropdown-month {
    background-color: rgb(var(--v-theme-surface));
  }

  .flatpickr-current-month .flatpickr-monthDropdown-months .numInput.cur-year,
  .flatpickr-current-month .numInputWrapper .numInput.cur-year {
    font-weight: 500;
  }

  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover {
    color: rgba(var(--v-theme-on-background), var(--v-medium-emphasis-opacity));
  }

  .v-theme--dark.flatpickr-calendar {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    box-shadow: none;
  }

  .flatpickr-months {
    padding-block: 0.75rem;
    padding-inline: 1rem;
  }

  .flatpickr-months .flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month {
    background: rgba(var(--v-theme-surface-variant), var(--v-selected-opacity));
    block-size: 1.75rem;
    border-radius: 5rem;
    inline-size: 1.75rem;
    inset-block-start: 0.75rem !important;
    padding-block: 0.25rem;
    padding-inline: 0.4375rem;
  }

  .flatpickr-months .flatpickr-next-month {
    inset-inline-end: 1.05rem !important;
  }

  .flatpickr-months .flatpickr-prev-month {
    
    right: 3.5rem;
    left: unset !important;
  }

  .flatpickr-months .flatpickr-month {
    block-size: 1.75rem;
  }

  .flatpickr-months .flatpickr-month .flatpickr-current-month {
    block-size: 1.75rem;
    inset-inline-start: 0;
    padding-block-start: 0.2rem;
    text-align: start;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/pages/deals/devis/preview/[id].vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  @media print {
    .v-application {
      background: none !important;
    }

    @page {
      margin: 0;
      size: auto;
    }

    .layout-page-content,
    .v-row,
    .v-col-md-9 {
      padding: 0;
      margin: 0;
    }

    .product-buy-now {
      display: none;
    }

    .v-navigation-drawer,
    .layout-vertical-nav,
    .app-customizer-toggler,
    .layout-footer,
    .layout-navbar,
    .layout-navbar-and-nav-container {
      display: none;
    }

    .v-card {
      box-shadow: none !important;
    }

    .v-card .print-row {
      flex-direction: row !important;
    }

    .layout-content-wrapper {
      padding-inline-start: 0 !important;
    }
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@core/components/TheCustomizer.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .app-customizer .customizer-section {
    padding: 1.25rem;
  }

  .app-customizer .customizer-heading {
    padding-block: 0.875rem;
    padding-inline: 1.25rem;
  }

  .app-customizer .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }

  .app-customizer-toggler {
    position: fixed !important;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform: translateY(-50%);
  }

  .app-customizer-toggler:active {
    transform: translateY(-50%) !important;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/@core/components/Notifications.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .notification-section {
    padding: 14px !important;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/layouts/components/NavSearchBar.vue?vue&amp;type=style&amp;index=0&amp;scoped=0b8aa405&amp;lang.scss">
  
  .meta-key[data-v-0b8aa405] {
    border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
    border-radius: 6px;
    block-size: 1.5625rem;
    line-height: 1.3125rem;
    padding-block: 0.125rem;
    padding-inline: 0.25rem;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/layouts/blank.vue?vue&amp;type=style&amp;index=0&amp;lang.css">
  .layout-wrapper.layout-blank {
    flex-direction: column;
  }
</style>
<style type="text/css"
  data-vite-dev-id="/data/data/PROJS/slm/_Sqft/front/src/pages/not-authorized.vue?vue&amp;type=style&amp;index=0&amp;lang.scss">
  .layout-blank .misc-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    min-block-size: calc(var(--vh, 1vh) * 100);
  }

  .layout-blank .misc-avatar {
    z-index: 1;
  }

  .layout-blank .misc-footer-img {
    position: absolute;
    inline-size: 100%;
    inset-block-end: 0;
  }
</style>
<style></style>`;
