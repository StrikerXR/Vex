# 🚀 Vex Pro 9.0: Back In Service - The New Era of Player Management

| Status | Version | License |
| :---: | :---: | :---: |
| [![Maintenance](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=for-the-badge&logo=github)](https://github.com/StrikerXR/Vex/pulse) | [![Version](https://img.shields.io/badge/Vex%20Pro-9.0%20(New%20Era)-blueviolet.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnoiPjwvcGF0aD48cG9seWxpbmUgcG9pbnRzPSIzLjI3IDYuOTYgMTIgMTIuMDEgMjAuNzMgNi45NiI+PC9wb2x5bGluZT48bGluZSB4MT0iMTIiIHkxPSIyMi4wOCIgeDI9IjEyIiB5Mj0iMTIiPjwvbGluZT48L3N2Zz4=)](./) | [![License](https://img.shields.io/badge/License-Proprietary-red.svg?style=for-the-badge&logo=opensource)](./#license) |

***

### 🌟 Project Summary

**Vex Pro 9.0** marks the start of a new, highly stable, and modular era for the most powerful Player Management script. Rebuilt from the ground up on modern **Lua** conventions, this version focuses on maximizing performance and security while introducing a clean, extendable modular architecture.

The previous project phase is over. We are back, focused purely on delivering unmatched, high-performance security and management features.

***

## ✨ Core Features: What's New in V9.0?

Vex Pro 9.0 features a completely restructured core, designed for speed and modularity.

| Feature Area | Description | Code Location | Status |
| :--- | :--- | :--- | :--- |
| **Architectural Overhaul** | Migration to a **ModuleScript-based** system for core functionalities, dramatically improving stability and making feature extension simple. | `VexSecurityModule` | **Major** 🆕 |
| **Reinforced Invincibility** | The `InvincibilityWhitelist` now uses advanced, loop-based health regeneration and infinite maximum health to be virtually unbreakable. | `InvincibilityModule` | **Enhanced** 🛡️ |
| **Efficient Player Handling** | Replaced legacy methods with modern Lua APIs like `task.spawn` and `HttpService:GenerateGUID` for optimized resource management and unique process identification. | `script.js` (Simulated Lua) | **Optimized** ⚙️ |
| **Advanced Management** | Automated handling for non-exempt players upon violation, routing the event to the centralized security module for specific actions (e.g., timed ban, kick). | `HandlePlayerDeath` | **Refined** |

---

## 🛠️ Quick Start & Installation

Getting Vex Pro 9.0 running is straightforward. Simply insert the script into your **ServerScriptService**.

### 1. **Get the Script**

Copy the complete source code from the main `Vex.lua` file.

<details>
<summary markdown="span">**Click to view and copy Vex Pro 9.0 Source Code (Lua)**</summary>

```lua
--[[
__     __        __     __        ___  
\ \   / /____  _( _ ) 
 \ \ / / _ \ \/ / _ \ 
  \ V /  __/>  < (_) |
   \_/ \___/_/\\_\___/   
	Project: Vex 9.0 - Universal Anti-Death & Player Management (PRO)
	Author: StrikeXRR
	Version: 9.0 - Back In Service
--]]

--//========================= SERVICES =========================\\--
local Players = game:GetService("Players")
-- ... (The rest of the script logic)
-- ...
-- LogDebug("Vex 9.0 Pro script initialized. Back in service.")
