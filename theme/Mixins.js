// @import 'variables';

// // CONTAINERS
// @mixin container {
//   display: grid;
//   align-items: center;
// }
// @mixin full-container {
//   width: 100vw;
//   display: grid;
// }
// @mixin logo-container {
//   display: grid;
//   height: 100%;
// }
// @mixin five-grid-equal {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
// }

// // LAYOUT HELPERS
// @mixin border-red {
//   border: 1px solid red;
// }
// @mixin border-blue {
//   border: 1px solid blue;
// }
// @mixin border-purple {
//   border: 1px solid purple;
// }
// @mixin border-green {
//   border: 1px solid green;
// }

// // SPACING
// @mixin center-items-container {
//   align-items: center;
//   justify-content: center;
// }
// @mixin center-content-container {
//   justify-content: center;
//   align-content: center;
// }

// // SHADOWS
// @mixin shadow-idle {
//   box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
// }
// @mixin shadow-active {
//   box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
// }
// @mixin shadow-click {
// }

// // CARD STYLING
// @mixin base-card-styles {
//   border-radius: $border-radius;
//   background: rgba($grey-pale, 0.95);
//   @include shadow-idle;
// }

// // TEXT
// @mixin logo-text {
//   font-weight: 900;
//   font-size: $lg2-font;
//   letter-spacing: -1px;
//   &:hover {
//     color: $grey-pale;
//   }
// }
// @mixin small-logo-text {
//   font-weight: 900;
//   font-size: $m2-font;
//   letter-spacing: -0.5 px;
//   color: $black;
//   &:hover {
//     color: $grey-pale;
//   }
// }
// @mixin super-title {
//   font-weight: $heavy-font;
//   font-size: $lg1-font;
// }
// @mixin title {
//   font-weight: $heavy-font;
//   font-size: $lg2-font;
// }
// @mixin heavy-subtitle {
//   font-weight: $heavy-font;
//   font-size: $m1-font;
// }
// @mixin subtitle {
//   font-weight: $mid-font;
//   font-size: $m1-font;
// }
// @mixin subtext {
//   color: $black;
//   font-size: $m2-font;
//   font-weight: $light-font;
// }
// @mixin small-title {
//   font-size: $m2-font;
//   font-weight: $heavy-font;
// }
// @mixin loud-text {
//   font-size: $sm1-font;
//   font-weight: $light-font;
// }
// @mixin base-text {
//   font-size: $sm1-font;
// }
// @mixin long-form-text {
//   font-size: $sm2-font;
//   font-weight: $book-font;
// }
// @mixin bold {
//   font-weight: 600;
// }
// @mixin basic-link {
//   display: grid;
//   color: $black;
//   text-decoration: none;
//   font-size: $m2-font;
//   &:hover {
//     color: $grey-dark;
//   }
// }
// @mixin sitemap-title {
//   font-size: $sm1-font;
//   font-weight: 700;
//   color: $white;
// }
// @mixin sitemap-link {
//   text-decoration: none;
//   color: white;
//   font-size: $sm2-font;
//   &:hover {
//     color: $grey-pale;
//   }
// }
// // BUTTONS
// @mixin btn {
//   text-decoration: none;
//   border: none;
//   padding: 0.4rem 2rem;
//   max-height: 5rem;
//   font-size: $m2-font;
//   border-radius: $border-radius;
// }
// @mixin btn-black {
//   @include btn;
//   background: $black;
//   color: $white;
//   &:hover {
//     @include shadow-idle;
//   }
// }
// @mixin btn-light {
//   @include btn;
//   background: $white;
//   color: $grey-dark;
// }
// @mixin user-btn {
//   display: grid;
//   grid-template-columns: repeat(2, auto);
//   align-items: center;
//   justify-items: center;
//   border-radius: 50px;
//   background: $black;
//   grid-gap: 1rem;
//   padding: 0.4rem;
//   &:hover {
//     background: $grey-dark;
//   }
// }
// @mixin user-avatar {
//   width: 3.5rem;
//   height: 3.5rem;
//   border-radius: 50px;
//   background-size: cover;
//   background: $white;
// }

// // FORMS
// @mixin base-input {
//   @include loud-text;
//   background: $white;
//   color: $black;
//   text-decoration: none;
//   border: 1px solid #e0e0e0;
//   box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
//   border-radius: $border-radius;
//   padding: 0.25rem 0.5rem;
//   min-width: 15rem;
//   &::placeholder {
//     color: $grey-mid;
//   }
//   &:focus {
//     outline: 1px solid $green-dark;
//     box-shadow: 0px 4px 9px rgba(100, 68, 68, 0.1);
//   }
//   &:active {
//     outline: 1px solid $green-dark;
//   }
// }
// @mixin base-textbox {
//   @include base-input;
//   height: 10rem;
//   resize: none;
// }
// @mixin form-labels {
// }
// @mixin form-grid-space {
// }
