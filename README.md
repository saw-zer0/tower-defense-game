# Revenge of the Pigs

A lightweight browser game built with HTML, CSS, and JavaScript. It blends a slingshot-style aiming mechanic with wave-based enemy defense gameplay, where the player must stop invaders before they reach the home.

## Screenshot

![Game Screenshot](images/Screenshot%202026-10-02%20154501.png)

## Game Description

Revenge of the Pigs is a simple arcade-inspired defense game set in a cartoon world. The player takes control of a defender who must protect their home from waves of wolves. By aiming projectiles and using a secondary weapon, the player tries to stop enemies before they break through.

The game is designed to be quick to play, easy to run locally, and fun to revisit with repeated attempts and higher levels.

## How It Works

- The game runs in the browser using the HTML5 Canvas API.
- The player aims by clicking and dragging on the slingshot.
- Releasing the click fires a projectile toward the target.
- Pressing the Space key activates the secondary weapon.
- Enemy units move toward the home and damage it if they reach it.
- Clearing a wave advances the player to the next level.
- Losing the round triggers a game-over screen with replay options.

## Controls

- Left click and drag: aim
- Release mouse button: fire
- Space bar: secondary weapon
- On-screen buttons: start, restart, main menu, and next level actions

## Getting Started

You can run the game directly in a browser with no installation step.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use a local web server

```bash
python -m http.server 8000
```

Then open the following in your browser:

```text
http://localhost:8000
```

## Project Structure

- `index.html` — game page and UI
- `css/` — styling and layout
- `js/` — game logic, physics, rendering, enemies, projectiles, and controls
- `images/` — sprites and scene assets
- `assets/` — metadata and asset information

## Technologies Used

- HTML
- CSS
- JavaScript
- Canvas API

## Objective

Defend your home, survive increasingly difficult enemy waves, and stop the wolves before they reach the base.
