/* ===========================
   MEMORYBLAST — GAME LOGIC
   =========================== */

// ── Config & State ──────────────────────────────────────
let cfg = {
  mode:      'solo',
  timeLimit: 120,
  numPairs:  8,
  cardStyle: 'acronym',
  p1Name:    'Player 1',
  p2Name:    'Player 2',
};

let state = {
  cards:         [],
  flipped:       [],
  moves:         0,
  matches:       0,
  totalPairs:    0,
  locked:        false,
  timerInterval: null,
  timeLeft:      0,
  currentPlayer: 0,
  scores:        [0, 0],
  startTime:     0,
};

// ── Event wiring (wait for DOM) ──────────────────────────
// DOM is ready (scripts are at end of body)

  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.mode = btn.dataset.mode;
      document.getElementById('solo-options').classList.toggle('hidden', cfg.mode !== 'solo');
      document.getElementById('player-options').classList.toggle('hidden', cfg.mode !== '2player');
    });
  });

  document.querySelectorAll('.count-btn[data-time]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.count-btn[data-time]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.timeLimit = parseInt(btn.dataset.time);
    });
  });

  document.querySelectorAll('.count-btn[data-pairs]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.count-btn[data-pairs]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.numPairs = parseInt(btn.dataset.pairs);
    });
  });

  document.querySelectorAll('.count-btn[data-style]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.count-btn[data-style]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cfg.cardStyle = btn.dataset.style;
    });
  });

  document.getElementById('start-btn').addEventListener('click', startGame);
  document.getElementById('play-again-btn').addEventListener('click', () => showScreen('setup-screen'));

// end of script

// ── All functions outside DOMContentLoaded so they're global ──

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function buildPairs(numPairs, cardStyle) {
  const pool = [...dataICT].sort(() => Math.random() - 0.5).slice(0, numPairs);
  const pairs = [];

  pool.forEach((entry, i) => {
    let style = cardStyle;
    if (style === 'mix') style = i % 2 === 0 ? 'acronym' : 'hint';

    if (style === 'acronym') {
      pairs.push(
        { pairId: i, type: 'acronym', text: entry.acronym },
        { pairId: i, type: 'full',    text: entry.full    }
      );
    } else {
      pairs.push(
        { pairId: i, type: 'term', text: entry.acronym },
        { pairId: i, type: 'hint', text: entry.hint    }
      );
    }
  });

  return pairs.sort(() => Math.random() - 0.5).map((c, idx) => ({
    ...c, id: idx, flipped: false, matched: false
  }));
}

function startGame() {
  cfg.p1Name = document.getElementById('p1-name').value.trim() || 'Player 1';
  cfg.p2Name = document.getElementById('p2-name').value.trim() || 'Player 2';

  state.cards         = buildPairs(cfg.numPairs, cfg.cardStyle);
  state.flipped       = [];
  state.moves         = 0;
  state.matches       = 0;
  state.totalPairs    = cfg.numPairs;
  state.locked        = false;
  state.currentPlayer = 0;
  state.scores        = [0, 0];
  state.startTime     = Date.now();

  if (state.timerInterval) clearInterval(state.timerInterval);

  showScreen('game-screen');
  setupGameHeader();
  renderBoard();

  if (cfg.mode === 'solo' && cfg.timeLimit > 0) startTimer();
}

function setupGameHeader() {
  const is2p = cfg.mode === '2player';

  document.getElementById('timer-wrap').classList.toggle('hidden', !(cfg.mode === 'solo' && cfg.timeLimit > 0));
  document.getElementById('turn-wrap').classList.toggle('hidden', !is2p);
  document.getElementById('score-bar').classList.toggle('hidden', !is2p);

  if (is2p) {
    document.getElementById('p1-score-name').textContent = cfg.p1Name;
    document.getElementById('p2-score-name').textContent = cfg.p2Name;
    updatePlayerHud();
  }

  document.getElementById('pairs-display').textContent = `0 / ${cfg.numPairs}`;
  document.getElementById('moves-display').textContent = '0';

  if (cfg.mode === 'solo' && cfg.timeLimit > 0) {
    state.timeLeft = cfg.timeLimit;
    updateTimerDisplay();
  }
}

function updatePlayerHud() {
  document.getElementById('p1-score-pts').textContent = state.scores[0];
  document.getElementById('p2-score-pts').textContent = state.scores[1];
  document.getElementById('turn-display').textContent =
    state.currentPlayer === 0 ? cfg.p1Name : cfg.p2Name;
  document.getElementById('turn-display').style.color =
    state.currentPlayer === 0 ? '#ef4444' : '#3b82f6';
  document.getElementById('p1-score-card').classList.toggle('active-player', state.currentPlayer === 0);
  document.getElementById('p2-score-card').classList.toggle('active-player', state.currentPlayer === 1);
}

function startTimer() {
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      endGame(false);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m  = Math.floor(state.timeLeft / 60);
  const s  = state.timeLeft % 60;
  const el = document.getElementById('timer-display');
  el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
  el.classList.toggle('warning', state.timeLeft <= 15);
}

function gridCols(total) {
  const map = { 12: 4, 16: 4, 24: 6, 32: 8 };
  return map[total] || Math.ceil(Math.sqrt(total));
}

function renderBoard() {
  const board = document.getElementById('board');
  const cols  = gridCols(state.cards.length);
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  board.innerHTML = '';

  state.cards.forEach((card, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'card-wrap' +
      (card.flipped ? ' flipped' : '') +
      (card.matched ? ' matched' : '');
    wrap.dataset.idx = i;
    wrap.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-back">🧠</div>
        <div class="card-face card-front type-${card.type}">${card.text}</div>
      </div>`;

    if (!card.matched) {
      wrap.addEventListener('click', () => onCardClick(i));
    }
    board.appendChild(wrap);
  });
}

function updateCard(idx) {
  const card = state.cards[idx];
  const wrap = document.querySelector(`.card-wrap[data-idx="${idx}"]`);
  if (!wrap) return;
  wrap.className = 'card-wrap' +
    (card.flipped ? ' flipped' : '') +
    (card.matched ? ' matched' : '');
}

function onCardClick(idx) {
  if (state.locked) return;
  const card = state.cards[idx];
  if (card.flipped || card.matched) return;
  if (state.flipped.length === 2) return;

  card.flipped = true;
  updateCard(idx);
  state.flipped.push(idx);

  if (state.flipped.length === 2) {
    state.moves++;
    document.getElementById('moves-display').textContent = state.moves;
    checkMatch();
  }
}

function checkMatch() {
  const [a, b] = state.flipped;
  const cardA  = state.cards[a];
  const cardB  = state.cards[b];
  const isMatch = cardA.pairId === cardB.pairId;

  state.locked = true;

  if (isMatch) {
    setTimeout(() => {
      cardA.matched = true;
      cardB.matched = true;
      updateCard(a);
      updateCard(b);
      state.flipped = [];
      state.matches++;
      state.locked  = false;

      if (cfg.mode === '2player') {
        state.scores[state.currentPlayer]++;
        updatePlayerHud();
        // same player goes again on a match
      }

      document.getElementById('pairs-display').textContent =
        `${state.matches} / ${state.totalPairs}`;

      showMatchFlash();

      if (state.matches === state.totalPairs) {
        setTimeout(() => endGame(true), 600);
      }
    }, 400);

  } else {
    const wrapA = document.querySelector(`.card-wrap[data-idx="${a}"]`);
    const wrapB = document.querySelector(`.card-wrap[data-idx="${b}"]`);
    wrapA?.classList.add('wrong');
    wrapB?.classList.add('wrong');

    setTimeout(() => {
      wrapA?.classList.remove('wrong');
      wrapB?.classList.remove('wrong');
      cardA.flipped = false;
      cardB.flipped = false;
      updateCard(a);
      updateCard(b);
      state.flipped = [];
      state.locked  = false;

      if (cfg.mode === '2player') {
        state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
        updatePlayerHud();
      }
    }, 900);
  }
}

function showMatchFlash() {
  const el = document.getElementById('match-flash');
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 750);
}

function endGame(completed) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const elapsed = Math.round((Date.now() - state.startTime) / 1000);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`;

  const stats = document.getElementById('result-stats');
  stats.innerHTML = '';

  if (cfg.mode === 'solo') {
    document.getElementById('result-trophy').textContent = completed ? '🏆' : '⏰';
    document.getElementById('result-title').textContent  = completed ? 'Puzzle Complete!' : "Time's Up!";
    addResultRow(stats, 'Pairs Matched', `${state.matches} / ${state.totalPairs}`, state.matches === state.totalPairs);
    addResultRow(stats, 'Moves Made', state.moves);
    addResultRow(stats, 'Time Taken', timeStr);
    if (completed && state.moves > 0) {
      const accuracy = Math.round((state.totalPairs / state.moves) * 100);
      addResultRow(stats, 'Accuracy', `${accuracy}%`, accuracy >= 70);
    }
  } else {
    const [s0, s1] = state.scores;
    const tie      = s0 === s1;
    const winner   = s0 > s1 ? cfg.p1Name : cfg.p2Name;
    document.getElementById('result-trophy').textContent = tie ? '🤝' : '🏆';
    document.getElementById('result-title').textContent  = tie ? "It's a Tie!" : `${winner} Wins!`;
    addResultRow(stats, cfg.p1Name, `${s0} pairs`, s0 > s1);
    addResultRow(stats, cfg.p2Name, `${s1} pairs`, s1 > s0);
    addResultRow(stats, 'Total Moves', state.moves);
    addResultRow(stats, 'Time', timeStr);
  }

  launchConfetti();
  setTimeout(() => showScreen('result-screen'), 500);
}

function addResultRow(container, label, value, highlight = false) {
  const row = document.createElement('div');
  row.className = 'result-row' + (highlight ? ' highlight' : '');
  row.innerHTML = `<span>${label}</span><span class="result-val">${value}</span>`;
  container.appendChild(row);
}

function launchConfetti() {
  const wrap   = document.getElementById('confetti');
  wrap.innerHTML = '';
  const colors = ['#f9a826','#e94560','#22d3a5','#a855f7','#3b82f6','#ef4444'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetto';
    c.style.cssText = `
      left:${Math.random()*100}%;top:${Math.random()*-50}px;
      background:${colors[i%colors.length]};
      width:${6+Math.random()*9}px;height:${6+Math.random()*9}px;
      animation-duration:${1.4+Math.random()*2}s;
      animation-delay:${Math.random()*1.2}s;
      border-radius:${Math.random()>.5?'50%':'2px'};
    `;
    wrap.appendChild(c);
  }
}
