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
  - One-click copy to clipboard with toast notifications
  - Password strength meter with visual indicators
  - Password history tracking with click-to-copy functionality
  - Real-time password requirements validation
  - Responsive design for all devices

- **Password Strength Analysis**:

  - Real-time strength assessment (Weak/Medium/Strong)
  - Visual strength meter with color-coded indicators
  - Password requirements checklist
  - Strength percentage calculation

- **Security Features**:
  - Client-side generation (no data sent to servers)
  - Password history stored locally
  - Enhanced "Easy to Read" mode excludes confusing characters (0, O, I, l, 1)

## Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Notifications**: vue3-toastify

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

5. **Generate & Copy**: Click the regenerate button to create a new password, then copy it to your clipboard with toast notification

6. **Monitor Strength**: View real-time password strength analysis with visual meter and requirements checklist

7. **View History**: Access previously generated passwords from the history section - click any password to copy it again

## Project Structure

```
src/
├── components/
│   ├── DisplayPassword.vue              # Password display with strength meter
│   ├── DisplayPasswordHistoryList.vue   # Password history with click-to-copy
│   ├── FormData.vue                    # Configuration form
│   ├── Footer.vue                      # Footer component
│   └── Navbar.vue                      # Navigation component
├── util/
│   └── util.js                         # Utility functions (copy with toast)
├── App.vue                             # Main application component
├── main.js                             # Application entry point
└── assets/
    └── main.css                        # Global styles with strength meter CSS
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
