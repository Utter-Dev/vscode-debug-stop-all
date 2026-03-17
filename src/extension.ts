import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const activeSessions = new Set<string>();
  let stopping = false;

  context.subscriptions.push(
    vscode.debug.onDidStartDebugSession((session) => {
      activeSessions.add(session.id);
      if (!stopping) {
        vscode.commands.executeCommand(
          "setContext",
          "debugStopAll.stopping",
          false
        );
      }
    }),
    vscode.debug.onDidTerminateDebugSession((session) => {
      activeSessions.delete(session.id);
    }),
    vscode.commands.registerCommand("debug-stop-all.stopAll", async () => {
      const count = activeSessions.size;

      const config = vscode.workspace.getConfiguration("debugStopAll");
      if (config.get<boolean>("confirmBeforeStop") && count > 1) {
        const choice = await vscode.window.showWarningMessage(
          `Stop all ${count} debug sessions?`,
          "Yes",
          "No"
        );
        if (choice !== "Yes") return;
      }

      stopping = true;
      vscode.commands.executeCommand(
        "setContext",
        "debugStopAll.stopping",
        true
      );

      try {
        await vscode.debug.stopDebugging();
        vscode.window.showInformationMessage(
          `Stopped ${count} debug session(s).`
        );
      } catch (err) {
        stopping = false;
        vscode.commands.executeCommand(
          "setContext",
          "debugStopAll.stopping",
          false
        );
        vscode.window.showErrorMessage(
          `Failed to stop debug sessions: ${err instanceof Error ? err.message : err}`
        );
      }
    })
  );
}

export function deactivate() {}
