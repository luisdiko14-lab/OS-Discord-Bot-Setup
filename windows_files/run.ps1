# OS Discord Bot Setup - Info Panel (PS1 Version)

# Set window title
$host.UI.RawUI.WindowTitle = "🌟 OS Discord Bot Setup - Info Panel 🌟"

# Set text color to green
$Green = "`e[32m"
$Reset = "`e[0m"

# Clear the screen
Clear-Host

Write-Host ""
Write-Host "====================================================" -ForegroundColor Green
Write-Host "     🤖  OS Discord Bot Setup - Information Panel" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Green
Write-Host ""
Write-Host "    📦 Project Name : OS-Discord-Bot-Setup" -ForegroundColor Green
Write-Host "    🧪 Developer   : luisdiko14-lab" -ForegroundColor Green
Write-Host "    🌐 GitHub Repo : github.com/luisdiko14-lab/OS-Discord-Bot-Setup" -ForegroundColor Green
Write-Host ""
Write-Host "    ⚙️  Features:" -ForegroundColor Green
Write-Host "       ✔ Bot Setup System" -ForegroundColor Green
Write-Host "       ✔ Status Options (DND / Idle / Invisible)" -ForegroundColor Green
Write-Host "       ✔ Token Check Tool" -ForegroundColor Green
Write-Host "       ✔ AI Key Support" -ForegroundColor Green
Write-Host "       ✔ Auto-Message Sender" -ForegroundColor Green
Write-Host ""
Write-Host "    🚀 Hosting: Discord.js / Local Machine" -ForegroundColor Green
Write-Host ""
Write-Host "====================================================" -ForegroundColor Green
Write-Host "     💡 Tip: Always run `git add .`, `commit`" -ForegroundColor Green
Write-Host "          and `git push` to update your repo!" -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Green
Write-Host ""

# Pause until user presses a key
Write-Host "Press any key to continue..."
[void][System.Console]::ReadKey($true)
