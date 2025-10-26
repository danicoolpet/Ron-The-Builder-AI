// Roblox AI Assistant - Complete AI Logic
class RobloxAI {
    constructor() {
        this.conversation = [];
        this.commands = {
            'search': this.searchGames,
            'generate': this.generateScript,
            'create': this.createGame,
            'help': this.showHelp,
            'start': this.startServer,
            'stop': this.stopServer
        };
        this.init();
    }

    init() {
        console.log('🤖 Roblox AI Initialized - GitHub Hosted');
        this.addMessage('AI', '🚀 **Roblox AI Assistant Ready!**\n\nI can help you with:\n• 🔍 Searching modded games\n• ⚡ Generating scripts\n• 🎨 Creating game designs\n\n**Try:** `search blox fruits` or `generate auto farm`');
    }

    async processCommand(input) {
        const command = input.toLowerCase().split(' ')[0];
        const args = input.slice(command.length).trim();
        
        this.addMessage('user', input);
        
        if (this.commands[command]) {
            const response = await this.commands[command](args);
            this.addMessage('AI', response);
        } else {
            this.addMessage('AI', this.getAIResponse(input));
        }
    }

    async searchGames(query) {
        if (!query) query = 'popular games';
        
        // Simulate API calls to various sources
        const results = await this.fetchGameData(query);
        
        let response = `🔍 **Search Results for "${query}"**\n\n`;
        results.forEach((game, index) => {
            response += `**${index + 1}. ${game.name}**\n`;
            response += `   🎮 Type: ${game.type} | 📊 Players: ${game.players}\n`;
            response += `   ⚡ Risk: ${game.risk} | 💾 Source: ${game.source}\n`;
            response += `   📝 ${game.description}\n\n`;
        });
        
        return response;
    }

    async generateScript(type) {
        if (!type) type = 'auto farm';
        
        const script = this.generateScriptCode(type);
        const filename = `roblox_${type.replace(' ', '_')}_script.lua`;
        
        // Save to GitHub (simulated)
        await this.saveToGitHub(filename, script);
        
        return `⚡ **Generated ${type} Script**\n\n\`\`\`lua\n${script}\n\`\`\`\n\n💾 **Saved as:** \`${filename}\` on GitHub`;
    }

    async createGame(theme) {
        if (!theme) theme = 'adventure';
        
        const design = this.generateGameDesign(theme);
        
        return `🎨 **Game Design Created: ${design.name}**\n\n` +
               `📖 **Description:** ${design.description}\n\n` +
               `⚡ **Features:**\n${design.features.map(f => `• ${f}`).join('\n')}\n\n` +
               `📜 **Scripts Needed:**\n${design.scripts.map(s => `• ${s}`).join('\n')}\n\n` +
               `🚀 **Ready to deploy from GitHub!**`;
    }

    generateScriptCode(type) {
        const scripts = {
            'auto farm': `-- 🤖 Auto Farm Script
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")

local player = Players.LocalPlayer
local farming = true

while farming do
    wait(1)
    -- Auto farm logic
    for _, obj in pairs(workspace:GetChildren()) do
        if obj.Name:find("Coin") or obj.Name:find("Reward") then
            firetouchinterest(player.Character.HumanoidRootPart, obj, 0)
            wait(0.1)
            firetouchinterest(player.Character.HumanoidRootPart, obj, 1)
        end
    end
    print("🔄 Auto farming...")
end`,

            'speed hack': `-- 🚀 Speed Hack
local Players = game:GetService("Players")
local player = Players.LocalPlayer

game:GetService("RunService").Heartbeat:Connect(function()
    if player.Character then
        local humanoid = player.Character:FindFirstChild("Humanoid")
        if humanoid then
            humanoid.WalkSpeed = 100
            humanoid.JumpPower = 100
        end
    end
end)

print("✅ Speed hack activated")`,

            'gui mod': `-- 🎛️ GUI Mod Menu
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local PlayerGui = player:WaitForChild("PlayerGui")

local ScreenGui = Instance.new("ScreenGui")
ScreenGui.Parent = PlayerGui

local Frame = Instance.new("Frame")
Frame.Size = UDim2.new(0, 300, 0, 400)
Frame.Position = UDim2.new(0, 10, 0, 10)
Frame.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
Frame.Parent = ScreenGui

print("✅ GUI mod menu created")`
        };

        return scripts[type] || scripts['auto farm'];
    }

    generateGameDesign(theme) {
        return {
            name: `Epic ${theme} Adventure`,
            description: `A moddable ${theme}-themed Roblox experience with custom features and auto-generated scripts.`,
            features: [
                'Auto farming system',
                'Custom GUI interface',
                'Speed modifications',
                'Teleport functions',
                'Anti-detection measures'
            ],
            scripts: [
                'Main game manager',
                'Player controller',
                'Auto farm system',
                'GUI menu',
                'Security bypass'
            ]
        };
    }

    async fetchGameData(query) {
        // Simulate fetching from various sources
        return [
            {
                name: `${query} - Auto Farm Mod`,
                type: 'Lua Script',
                players: '50K+',
                risk: 'Low',
                source: 'GitHub Repository',
                description: 'Complete auto farming system with anti-detection'
            },
            {
                name: `${query} - Speed Hack`,
                type: 'Executor Script', 
                players: '25K+',
                risk: 'Medium',
                source: 'ScriptBlox',
                description: 'Movement speed increase with toggle features'
            },
            {
                name: `${query} - GUI Menu`,
                type: 'Script Hub',
                players: '75K+',
                risk: 'Low', 
                source: 'Community Scripts',
                description: 'Custom GUI with multiple mod options'
            }
        ];
    }

    async saveToGitHub(filename, content) {
        // Simulate saving to GitHub
        console.log(`💾 Saving ${filename} to GitHub...`);
        return new Promise(resolve => setTimeout(resolve, 500));
    }

    showHelp() {
        return `**🤖 Roblox AI Assistant - Commands**\n\n` +
               `🔍 **Search Games**\n\`search [game name]\` - Find modded games\n\n` +
               `⚡ **Generate Scripts**\n\`generate [type]\` - Create scripts\n• Types: auto farm, speed hack, gui mod\n\n` +
               `🎨 **Create Games**\n\`create [theme]\` - Design new games\n\n` +
               `🚀 **Server Control**\n\`start\` / \`stop\` - Control AI server\n\n` +
               `💡 **Examples:**\n\`search blox fruits\`\n\`generate auto farm\`\n\`create anime rpg\``;
    }

    getAIResponse(input) {
        const responses = [
            "🤖 I can help you search for modded games, generate scripts, or create custom game designs!",
            "🎮 Try commands like `search blox fruits` or `generate auto farm` to get started!",
            "⚡ Use `help` to see all available commands and examples.",
            "🔧 All AI logic is hosted on GitHub - no local files needed!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    addMessage(sender, content) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'user' ? 'user' : 'assistant'}`;
        
        messageDiv.innerHTML = `
            <div class="avatar">${sender === 'user' ? '👤' : '🤖'}</div>
            <div class="message-content">${this.formatMessage(content)}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    formatMessage(content) {
        // Convert markdown to HTML
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/```lua\n([\s\S]*?)```/g, '<div class="code-block">$1</div>')
            .replace(/\n/g, '<br>');
    }
}

// Global functions for HTML
const ai = new RobloxAI();

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        ai.processCommand(message);
        input.value = '';
    }
}

function sendQuickCommand(command) {
    document.getElementById('messageInput').value = command;
    sendMessage();
}

// Handle Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
