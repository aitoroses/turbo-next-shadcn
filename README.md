# Turbo Next Shadcn

Welcome to the Turbo Next Shadcn project! This repository is a monorepo setup using Turbo, Next.js, and Shadcn UI components. It aims to provide a scalable and maintainable architecture for modern web applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/turbo-next-shadcn.git
   cd turbo-next-shadcn
   ```

2. **Install dependencies:**
   We use `bun` as our package manager.
   ```sh
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your environment variables.

## Usage

### Development

To start the development server, run:
```sh
bun run dev
```

This will start the Next.js development server with Turbo.

### Build

To build the project for production, run:
```sh
bun run build
```

### Lint

To lint the project, run:
```sh
bun run lint
```

## Project Structure

Here's an overview of the project's structure:

- **apps/web**: The main web application.
  - `package.json`: Contains scripts and dependencies for the web app.
  - `tailwind.config.ts`: Tailwind CSS configuration.
  - `tsconfig.json`: TypeScript configuration for the web app.

- **packages/eslint-config**: Custom ESLint configuration.
  - `package.json`: Contains scripts and dependencies for ESLint.

- **packages/typescript-config**: Shared TypeScript configurations.
  - `base.json`: Base TypeScript configuration.
  - `nextjs.json`: TypeScript configuration for Next.js projects.
  - `react-library.json`: TypeScript configuration for React libraries.

- **packages/ui**: Shared UI components and utilities.
  - `package.json`: Contains scripts and dependencies for the UI package.
  - `src/lib/utils.ts`: Utility functions.
  - `tailwind.config.ts`: Tailwind CSS configuration for the UI package.

- **turbo.json**: Turbo configuration file.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the contributors and the open-source community for their invaluable support and contributions.
