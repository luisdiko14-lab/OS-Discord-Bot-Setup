#include <stdio.h>
#include <stdlib.h>

int main() {
    // Set console color to green on black (ANSI escape code)
    printf("\033[0;32m"); // green text

    printf("\n====================================================\n");
    printf("     🤖  OS Discord Bot Setup - Info Panel\n");
    printf("====================================================\n\n");

    printf("    📦 Project Name : OS-Discord-Bot-Setup\n");
    printf("    🧪 Developer   : luisdiko14-lab\n");
    printf("    🌐 GitHub Repo : github.com/luisdiko14-lab/OS-Discord-Bot-Setup\n\n");

    printf("    ⚙️  Features:\n");
    printf("       ✔ Bot Setup System\n");
    printf("       ✔ Status Options (DND / Idle / Invisible)\n");
    printf("       ✔ Token Check Tool\n");
    printf("       ✔ AI Key Support\n");
    printf("       ✔ Auto-Message Sender\n\n");

    printf("    🚀 Hosting: Discord.js / Local Machine\n\n");

    printf("====================================================\n");
    printf("     💡 Tip: Always run \"git add .\", \"commit\"\n");
    printf("          and \"git push\" to update your repo!\n");
    printf("====================================================\n\n");

    // Reset console color
    printf("\033[0m");

    // Pause
    printf("Press Enter to continue...");
    getchar();

    return 0;
}
