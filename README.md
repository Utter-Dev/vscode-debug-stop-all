# Debug Stop All

[![Build](https://github.com/Utter-Dev/vscode-debug-stop-all/actions/workflows/ci.yml/badge.svg)](https://github.com/Utter-Dev/vscode-debug-stop-all/actions/workflows/ci.yml)
[![VS Marketplace](https://img.shields.io/visual-studio-marketplace/v/UtterDev.debug-stop-all)](https://marketplace.visualstudio.com/items?itemName=UtterDev.debug-stop-all)

Stop all active debug sessions with a single click or keyboard shortcut.

![Debug Stop All screenshot](images/screenshot.png)

## Features

- **Debug toolbar button** — Appears in the debug toolbar when debugging, right next to the built-in stop button
- **Command palette** — Search "Debug: Stop All" in the command palette (`Ctrl+Shift+P`)
- **Keyboard shortcut** — `Ctrl+Shift+F11` (`Cmd+Shift+F11` on Mac)

## Why?

VS Code's built-in stop button only stops the currently focused debug session. When running compound launch configurations or multiple sessions (e.g. a frontend and backend), you have to stop each one individually. This extension adds a single action to stop them all at once.

Especially useful if you use **compound debug configurations** in your `launch.json` — one click to tear down the entire stack.

## Settings

| Setting | Default | Description |
|---|---|---|
| `debugStopAll.confirmBeforeStop` | `false` | Show a confirmation dialog before stopping when more than one session is active |

## Usage

1. Start two or more debug sessions
2. Click the stop-all button in the debug toolbar, use the command palette, or press `Ctrl+Shift+F11`
3. All debug sessions are terminated
