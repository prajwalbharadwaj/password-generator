# Password Generator

A modern, secure password generator built with Vue 3 and Tailwind CSS. Generate strong, customizable passwords with various character sets and modes to suit your security needs.

## Features

- **Multiple Generation Modes**:

  - **Easy to Say**: Uses only letters (uppercase/lowercase) for passwords that are easy to pronounce
  - **Easy to Read**: Excludes confusing characters (0, O, I, l) for better readability
  - **All Characters**: Full character set including numbers and symbols for maximum security

- **Customizable Options**:

  - Adjustable password length (4-50 characters)
  - Toggle uppercase, lowercase, numbers, and symbols
  - Custom symbol input for specific requirements - user it as a string
  - Real-time password generation

- **User-Friendly Interface**:

  - Clean, modern design with Tailwind CSS
  - One-click copy to clipboard
  - Password history tracking
  - Responsive design for all devices

- **Security Features**:
  - Client-side generation (no data sent to servers)
  - Password history stored locally

## Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Prerequisites

- Node.js (^20.19.0 || >=22.12.0)
- pnpm (recommended) or npm

## Usage

1. **Select Password Length**: Use the slider or input field to set your desired password length (4-50 characters)

2. **Choose Generation Mode**:

   - **Easy to Say**: Best for passwords you need to speak aloud
   - **Easy to Read**: Avoids confusing characters like 0, O, I, l
   - **All Characters**: Maximum security with all character types

3. **Customize Character Sets**: Toggle uppercase, lowercase, numbers, and symbols as needed

4. **Add Custom Symbols**: Enter specific symbols you want to include in your passwords

5. **Generate & Copy**: Click the regenerate button to create a new password, then copy it to your clipboard

6. **View History**: Access previously generated passwords from the history section

## Project Structure

```
src/
├── components/
│   ├── DisplayPassword.vue    # Password display and controls
│   ├── FormData.vue          # Configuration form
│   ├── Footer.vue            # Footer component
│   └── Navbar.vue            # Navigation component
├── util/
│   └── util.js               # Utility functions (copy to clipboard)
├── App.vue                   # Main application component
├── main.js                   # Application entry point
└── assets/
    └── main.css              # Global styles
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
