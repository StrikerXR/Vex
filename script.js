/**
 * Vex Pro Advanced JS Script
 * Uses modern DOM manipulation, GSAP, and native APIs.
 */

document.addEventListener("DOMContentLoaded", () => {

    // --- 1. SCRIPT CONTENT & DISPLAY ---
    // The Lua script is slightly modified to remove 'end of an era' text and reflect 'Vex 9.0'
    const vexScriptText = `--[[
__     __        __     __        ___  
\\ \\   / /____  _( _ ) 
 \\ \\ / / _ \\ \\/ / _ \\ 
  \\ V /  __/>  < (_) |
   \\_/ \\___/_/\\_\\___/   
	Project: Vex 9.0 - Universal Anti-Death & Player Management (PRO)
	Author: StrikeXRR
	Version: 9.0 - Back In Service
	Description:
	- A modular system for handling player invincibility and death behavior.
	- Players who are not exempted will be managed by the new security module.
	- Whitelisted players can be granted unbreakable invincibility.
	- Uses robust, modern coding practices for efficiency and readability.
--]]

--//========================= SERVICES =========================\\--
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local HttpService = game:GetService("HttpService")
local VexSecurity = require(ReplicatedStorage:WaitForChild("VexSecurityModule")) -- New Modular System

--//===================== CONFIGURATION ======================\\--
local Config = {
	DebugMode = true,
	ManagementMessage = "Action registered by Vex Pro Security Module.",
	Exemptions = {
		[12345678] = true,
		["strikexrr"] = true,
	},
	InvincibilityWhitelist = {
		[12345678] = true,
		["strikexrr"] = true,
	},
}

--//====================== CORE MODULES (Simplified for example) ======================\\--
local InvincibilityModule = {}
function InvincibilityModule.Apply(humanoid)
    -- Advanced Invincibility Logic here...
    humanoid.MaxHealth = math.huge
    humanoid.Health = math.huge
end

--//====================== UTILITY FUNCTIONS ======================\\--
local function LogDebug(...)
	if Config.DebugMode then
		print("[Vex9.0 DEBUG]:", ...)
	end
end

local function IsExempt(player)
	return Config.Exemptions[player.UserId] or Config.Exemptions[string.lower(player.Name)]
end

local function IsInvincible(player)
	return Config.InvincibilityWhitelist[player.UserId] or Config.InvincibilityWhitelist[string.lower(player.Name)]
end

local function HandlePlayerDeath(player)
	if not IsExempt(player) then
		LogDebug(player.Name, "death detected, routing to Vex Security...")
		VexSecurity:Handle(player, Config.ManagementMessage) -- Using new security module
	else
		LogDebug(player.Name, "is exempt, respawning.")
		player:LoadCharacter()
	end
end

--//===================== PLAYER MANAGEMENT ======================\\--
local function OnCharacterAdded(player, character)
	local humanoid = character:WaitForChild("Humanoid", 5)
	if not humanoid then return end

	if IsInvincible(player) then
		InvincibilityModule.Apply(humanoid)
		LogDebug("Unbreakable Invincibility applied to", player.Name)
	end

	humanoid.Died:Connect(function()
		HandlePlayerDeath(player)
	end)
end

local function OnPlayerAdded(player)
	player.CharacterAdded:Connect(function(character)
		OnCharacterAdded(player, character)
	end)

	if player.Character then
		OnCharacterAdded(player, player.Character)
	end
end

--//======================= INITIALIZATION =======================\\--
for _, player in ipairs(Players:GetPlayers()) do
	OnPlayerAdded(player)
end
Players.PlayerAdded:Connect(OnPlayerAdded)
LogDebug("Vex 9.0 Pro script initialized. Back in service.")`;
            
    const scriptDisplayEl = document.getElementById('vex-script-display');
    if (scriptDisplayEl) {
        scriptDisplayEl.textContent = vexScriptText;
    }

    // --- 2. MAGNETIC HOVER EFFECT (GSAP) ---
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const position = el.getBoundingClientRect();
            // Calculate mouse position relative to the element's center
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            
            // Advanced GSAP: less springy, more controlled
            gsap.to(el, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: "power2.out" });
        });
        el.addEventListener('mouseleave', function() {
            gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
        });
    });

    // --- 3. COPY FUNCTIONALITY ---
    const copyMessage = document.getElementById('copy-message');
    const copyHandler = (btnElement) => {
        const originalContent = btnElement.innerHTML;
        const isIconBtn = btnElement.id === 'get-script-btn-hero';

        navigator.clipboard.writeText(vexScriptText).then(() => {
            if (isIconBtn) {
                copyMessage.textContent = 'Script Copied to Clipboard!';
                gsap.to(copyMessage, { opacity: 1, y: 0, duration: 0.3 });
                setTimeout(() => gsap.to(copyMessage, { opacity: 0, y: 5, duration: 0.5 }), 2000);
            } else {
                btnElement.innerHTML = '<span class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-green-400"><polyline points="20 6 9 17 4 12"></polyline></svg>Copied!</span>';
                setTimeout(() => { btnElement.innerHTML = originalContent; }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            if (isIconBtn) {
                copyMessage.textContent = 'Copy Failed!';
                gsap.to(copyMessage, { opacity: 1, y: 0, color: '#f87171', duration: 0.3 });
            } else {
                btnElement.innerHTML = '<span>Failed!</span>';
            }
        });
    };

    document.getElementById('get-script-btn-nav').addEventListener('click', (e) => copyHandler(e.currentTarget));
    document.getElementById('get-script-btn-hero').addEventListener('click', (e) => copyHandler(e.currentTarget));

    // --- 4. ADVANCED MODAL API (Native DOM) ---
    const modal = document.getElementById('advanced-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalPanel = document.getElementById('modal-panel');

    // Simulate fetching content for a more realistic application
    const fetchContent = async (type) => {
        // In a real app, this would be an API call or file read.
        await new Promise(resolve => setTimeout(resolve, 100)); // Simulate delay
        if (type === 'tos') return `
            <h2>Terms of Service (Vex Pro)</h2>
            <p>Welcome to **Vex Pro**. By using this website and the Vex Pro Script, you agree to these advanced terms and conditions. Our service is designed for **advanced player management** and is not responsible for misuse.</p>
            <h3>License & Ownership</h3>
            <p>The **Vex Pro Script** is proprietary software. You are granted a limited, non-exclusive license to use the script within a Roblox environment. Redistribution, reverse-engineering, or commercial use without express written consent is strictly prohibited.</p>
            <h3>Disclaimer of Liability</h3>
            <p>The service is provided "as is". We offer no warranties regarding the performance or security of the script. **Use of the script is at your own risk.** We shall not be liable for any direct, indirect, incidental, special, or consequential damages.</p>
        `;
        if (type === 'privacy') return `
            <h2>Privacy Policy (Vex Pro)</h2>
            <p>Your privacy is our priority. The Vex Pro website utilizes **minimal tracking** for analytics only. We do not collect personally identifiable information.</p>
            <h3>Script Data Handling</h3>
            <p>The **Vex Pro Script** (Lua) runs entirely on the Roblox server environment. It does not transmit any private player data to external servers. Configuration details (like whitelists) are stored securely within the game environment.</p>
            <h3>Cookies and Local Storage</h3>
            <p>We use session cookies and local storage only to manage UI state (e.g., modal preferences). No third-party tracking is utilized.</p>
        `;
        if (type === 'docs') return `
            <h2>New Era Documentation (Vex 9.0)</h2>
            <p>Welcome to the **Vex Pro 9.0** documentation hub. The new era brings a complete overhaul to the core architecture, focusing on stability and modularity.</p>
            <h3>Key Changes</h3>
            <ul>
                <li>**Module-Based Security:** All security checks are now handled by an isolated module, allowing for hot-fixes and updates without major code changes.</li>
                <li>**Advanced Configuration:** Configuration is now managed via a dedicated Lua table, supporting User IDs, Usernames, and custom tags.</li>
                <li>**Infinite Invincibility:** The invincibility module has been reinforced to be unbreakable against common exploits.</li>
            </ul>
            <p>For detailed API reference and code examples, please visit our GitHub repository.</p>
        `;
        return '<h2>Error</h2><p>Content not found.</p>';
    }

    const openModal = async (title, contentKey) => {
        const content = await fetchContent(contentKey);
        
        modalTitle.textContent = title;
        modalContent.innerHTML = content;
        
        modal.classList.remove('hidden');
        // Use GSAP for the advanced transition
        gsap.to(modal, { opacity: 1, duration: 0.5 });
        gsap.fromTo(modalPanel, { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" });
    }

    const closeModal = () => {
        gsap.to(modalPanel, { y: 20, opacity: 0, scale: 0.95, duration: 0.4, ease: "power2.in" });
        gsap.to(modal, { 
            opacity: 0, 
            duration: 0.5, 
            onComplete: () => { modal.classList.add('hidden'); }
        });
    }

    document.getElementById('tos-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Terms of Service', 'tos');
    });
    document.getElementById('privacy-policy-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Privacy Policy', 'privacy');
    });
     document.getElementById('new-era-doc-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('New Era Documentation', 'docs');
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // ESC key closes modal - advanced accessibility/UX
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
