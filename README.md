# Stop All Debug Sessions

Stop all active debug sessions with a single click or keyboard shortcut.

## Features

- **Debug toolbar button** — Appears in the debug toolbar when debugging, right next to the built-in stop button
- **Command palette** — Search "Debug: Stop All" in the command palette (`Ctrl+Shift+P`)
- **Keyboard shortcut** — `Ctrl+Shift+F11` (`Cmd+Shift+F11` on Mac)

## Why?

VS Code's built-in stop button only stops the currently focused debug session. When running multiple sessions (e.g. a frontend and backend), you have to stop each one individually. This extension adds a single action to stop them all at once.

## Usage

1. Start two or more debug sessions
2. Click the stop-all button in the debug toolbar, use the command palette, or press `Ctrl+Shift+F11`
3. All debug sessions are terminated
