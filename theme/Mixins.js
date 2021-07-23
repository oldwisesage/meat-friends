const container = `
    display: grid;
    align-items: center;
`
  const full-container {
    width: 100vw;
    display: grid;
  }
  const logo-container {
    display: grid;
    height: 100%;
  }
  const five-grid-equal {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  
  // LAYOUT HELPERS
  const border-red {
    border: 1px solid red;
  }
  const border-blue {
    border: 1px solid blue;
  }
  const border-purple {
    border: 1px solid purple;
  }
  const border-green {
    border: 1px solid green;
  }
  
  // SPACING
  const center-items-container {
    align-items: center;
    justify-content: center;
  }
  const center-content-container {
    justify-content: center;
    align-content: center;
  }
  
  // SHADOWS
  const shadow-idle {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
  }
  const shadow-active {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
  }
  const shadow-click {
  }
  
  // CARD STYLING
  const base-card-styles {
    border-radius: $border-radius;
    background: rgba($grey-pale, 0.95);
    @include shadow-idle;
  }
  
  // TEXT
  const logo-text {
    font-weight: 900;
    font-size: $lg2-font;
    letter-spacing: -1px;
    &:hover {
      color: $grey-pale;
    }
  }
  const small-logo-text {
    font-weight: 900;
    font-size: $m2-font;
    letter-spacing: -0.5 px;
    color: $black;
    &:hover {
      color: $grey-pale;
    }
  }
  const super-title {
    font-weight: $heavy-font;
    font-size: $lg1-font;
  }
  const title {
    font-weight: $heavy-font;
    font-size: $lg2-font;
  }
  const heavy-subtitle {
    font-weight: $heavy-font;
    font-size: $m1-font;
  }
  const subtitle {
    font-weight: $mid-font;
    font-size: $m1-font;
  }
  const subtext {
    color: $black;
    font-size: $m2-font;
    font-weight: $light-font;
  }
  const small-title {
    font-size: $m2-font;
    font-weight: $heavy-font;
  }
  const loud-text {
    font-size: $sm1-font;
    font-weight: $light-font;
  }
  const base-text {
    font-size: $sm1-font;
  }
  const long-form-text {
    font-size: $sm2-font;
    font-weight: $book-font;
  }
  const bold {
    font-weight: 600;
  }
  const basic-link {
    display: grid;
    color: $black;
    text-decoration: none;
    font-size: $m2-font;
    &:hover {
      color: $grey-dark;
    }
  }
  const sitemap-title {
    font-size: $sm1-font;
    font-weight: 700;
    color: $white;
  }
  const sitemap-link {
    text-decoration: none;
    color: white;
    font-size: $sm2-font;
    &:hover {
      color: $grey-pale;
    }
  }
  // BUTTONS
  const btn {
    text-decoration: none;
    border: none;
    padding: 0.4rem 2rem;
    max-height: 5rem;
    font-size: $m2-font;
    border-radius: $border-radius;
  }
  const btn-black {
    @include btn;
    background: $black;
    color: $white;
    &:hover {
      @include shadow-idle;
    }
  }
  const btn-light {
    @include btn;
    background: $white;
    color: $grey-dark;
  }
  const user-btn {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-items: center;
    border-radius: 50px;
    background: $black;
    grid-gap: 1rem;
    padding: 0.4rem;
    &:hover {
      background: $grey-dark;
    }
  }
  const user-avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50px;
    background-size: cover;
    background: $white;
  }
  
  // FORMS
  const base-input {
    @include loud-text;
    background: $white;
    color: $black;
    text-decoration: none;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
    border-radius: $border-radius;
    padding: 0.25rem 0.5rem;
    min-width: 15rem;
    &::placeholder {
      color: $grey-mid;
    }
    &:focus {
      outline: 1px solid $green-dark;
      box-shadow: 0px 4px 9px rgba(100, 68, 68, 0.1);
    }
    &:active {
      outline: 1px solid $green-dark;
    }
  }
  const base-textbox {
    @include base-input;
    height: 10rem;
    resize: none;
  }
  const form-labels {
  }
  const form-grid-space {
  }