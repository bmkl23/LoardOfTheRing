'use client';
import { useEffect } from 'react';

export default function BattleBoard() {
  useEffect(() => {
    let dead = false, stop;
    (async () => {
      const THREE = await import('three');
      const { startGame } = await import('../lib/game');
      if (!dead) stop = startGame(THREE);
    })();
    return () => { dead = true; if (stop) stop(); };
  }, []);

  return (
    <>
      <div id="intro">
        <div className="embers" id="embers"></div>
        <div className="sub">Realms of the Ring</div>
        <h1>Battle for the Shadow Kingdom</h1>
        <p className="sinh">A power that has slumbered for ages stirs once more. Between the Queen&apos;s stronghold and the dark realm beyond, the hour of the final battle has come. Gather your warriors, cross the bridge, and defend your kingdom.</p>
        <button id="startBtn">Enter the Battle</button>
        <div id="note">Placeholder narration text — tell me the exact wording you want and I&apos;ll drop it straight in.</div>
      </div>
      <button id="muteBtn" aria-label="Toggle sound" title="Sound on/off">🔊</button>
      <canvas id="c"></canvas>
      <div id="endOverlay">
        <div className="endCard">
          <h2></h2>
          <p></p>
          <button id="againBtn">Play again</button>
        </div>
      </div>
      <div id="hud"><b id="t">Tap a piece</b><br /><span id="s">Drag to rotate, scroll or pinch to zoom</span></div>
    </>
  );
}
