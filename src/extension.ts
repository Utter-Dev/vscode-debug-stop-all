import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("debug-stop-all.stopAll", () => {
      vscode.debug.stopDebugging();
    })
  );
}

export function deactivate() {}
