/* ===========================
   MEMORYBLAST — GAME LOGIC
   =========================== */

var cfg = {
  mode:      'solo',
  timeLimit: 120,
  numPairs:  8,
  cardStyle: 'acronym',
  p1Name:    'Player 1',
  p2Name:    'Player 2',
};

var state = {
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

// ── Helper ───────────────────────────────────────────────
function el(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  el(id).classList.add('active');
}

// ── Setup button wiring ──────────────────────────────────
document.querySelectorAll('.mode-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mode-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    cfg.mode = btn.dataset.mode;
    el('solo-options').classList.toggle('hidden', cfg.mode !== 'solo');
    el('player-options').classList.toggle('hidden', cfg.mode !== '2player');
  });
});

document.querySelectorAll('.count-btn[data-time]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.count-btn[data-time]').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    cfg.timeLimit = parseInt(btn.dataset.time);
  });
});

document.querySelectorAll('.count-btn[data-pairs]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.count-btn[data-pairs]').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    cfg.numPairs = parseInt(btn.dataset.pairs);
  });
});

document.querySelectorAll('.count-btn[data-style]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.count-btn[data-style]').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    cfg.cardStyle = btn.dataset.style;
  });
});

el('start-btn').addEventListener('click', function() {
  startGame();
});

el('play-again-btn').addEventListener('click', function() {
  showScreen('setup-screen');
});

// ── Build pairs ──────────────────────────────────────────
function buildPairs(numPairs, cardStyle) {
  var shuffled = dataICT.slice().sort(function() { return Math.random() - 0.5; });
  var pool = shuffled.slice(0, numPairs);
  var pairs = [];

  for (var i = 0; i < pool.length; i++) {
    var entry = pool[i];
    var style = cardStyle;
    if (style === 'mix') style = i % 2 === 0 ? 'acronym' : 'hint';

    if (style === 'acronym') {
      pairs.push({ pairId: i, type: 'acronym', text: entry.acronym });
      pairs.push({ pairId: i, type: 'full',    text: entry.full    });
    } else {
      pairs.push({ pairId: i, type: 'term', text: entry.acronym });
      pairs.push({ pairId: i, type: 'hint', text: entry.hint    });
    }
  }

  pairs.sort(function() { return Math.random() - 0.5; });

  for (var j = 0; j < pairs.length; j++) {
    pairs[j].id      = j;
    pairs[j].flipped = false;
    pairs[j].matched = false;
  }

  return pairs;
}

// ── Start game ───────────────────────────────────────────
function startGame() {
  cfg.p1Name = el('p1-name').value.trim() || 'Player 1';
  cfg.p2Name = el('p2-name').value.trim() || 'Player 2';

  state.cards         = buildPairs(cfg.numPairs, cfg.cardStyle);
  state.flipped       = [];
  state.moves         = 0;
  state.matches       = 0;
  state.totalPairs    = cfg.numPairs;
  state.locked        = false;
  state.currentPlayer = 0;
  state.scores        = [0, 0];
  state.startTime     = Date.now();

  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  showScreen('game-screen');
  setupGameHeader();
  renderBoard();

  if (cfg.mode === 'solo' && cfg.timeLimit > 0) {
    startTimer();
  }
}

// ── Header / HUD ─────────────────────────────────────────
function setupGameHeader() {
  var is2p = cfg.mode === '2player';
  var showTimer = cfg.mode === 'solo' && cfg.timeLimit > 0;

  el('timer-wrap').classList.toggle('hidden', !showTimer);
  el('turn-wrap').classList.toggle('hidden', !is2p);
  el('score-bar').classList.toggle('hidden', !is2p);

  el('pairs-display').textContent = '0 / ' + cfg.numPairs;
  el('moves-display').textContent = '0';

  if (is2p) {
    el('p1-score-name').textContent = cfg.p1Name;
    el('p2-score-name').textContent = cfg.p2Name;
    updatePlayerHud();
  }

  if (showTimer) {
    state.timeLeft = cfg.timeLimit;
    updateTimerDisplay();
  }
}

function updatePlayerHud() {
  el('p1-score-pts').textContent = state.scores[0];
  el('p2-score-pts').textContent = state.scores[1];
  el('turn-display').textContent = state.currentPlayer === 0 ? cfg.p1Name : cfg.p2Name;
  el('turn-display').style.color = state.currentPlayer === 0 ? '#ef4444' : '#3b82f6';
  el('p1-score-card').classList.toggle('active-player', state.currentPlayer === 0);
  el('p2-score-card').classList.toggle('active-player', state.currentPlayer === 1);
}

// ── Timer ────────────────────────────────────────────────
function startTimer() {
  state.timerInterval = setInterval(function() {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      endGame(false);
    }
  }, 1000);
}

function updateTimerDisplay() {
  var m  = Math.floor(state.timeLeft / 60);
  var s  = state.timeLeft % 60;
  var display = el('timer-display');
  display.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  display.classList.toggle('warning', state.timeLeft <= 15);
}

// ── Board ────────────────────────────────────────────────
function gridCols(total) {
  if (total <= 12) return 4;
  if (total <= 16) return 4;
  if (total <= 24) return 6;
  return 8;
}

function renderBoard() {
  var board = el('board');
  var cols  = gridCols(state.cards.length);
  board.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  board.innerHTML = '';

  for (var i = 0; i < state.cards.length; i++) {
    (function(idx) {
      var card = state.cards[idx];
      var wrap = document.createElement('div');
      wrap.className = 'card-wrap' +
        (card.flipped ? ' flipped' : '') +
        (card.matched ? ' matched' : '');
      wrap.dataset.idx = idx;
      wrap.innerHTML =
        '<div class="card-inner">' +
          '<div class="card-face card-back">🧠</div>' +
          '<div class="card-face card-front type-' + card.type + '">' + card.text + '</div>' +
        '</div>';
      wrap.addEventListener('click', function() { onCardClick(idx); });
      board.appendChild(wrap);
    })(i);
  }
}

function updateCard(idx) {
  var card = state.cards[idx];
  var wrap = document.querySelector('.card-wrap[data-idx="' + idx + '"]');
  if (!wrap) return;
  wrap.className = 'card-wrap' +
    (card.flipped ? ' flipped' : '') +
    (card.matched ? ' matched' : '');
}

// ── Card click ───────────────────────────────────────────
function onCardClick(idx) {
  if (state.locked) return;
  var card = state.cards[idx];
  if (card.flipped || card.matched) return;
  if (state.flipped.length >= 2) return;

  card.flipped = true;
  updateCard(idx);
  state.flipped.push(idx);

  if (state.flipped.length === 2) {
    state.moves++;
    el('moves-display').textContent = state.moves;
    checkMatch();
  }
}

function checkMatch() {
  var a     = state.flipped[0];
  var b     = state.flipped[1];
  var cardA = state.cards[a];
  var cardB = state.cards[b];
  var isMatch = cardA.pairId === cardB.pairId;

  state.locked = true;

  if (isMatch) {
    setTimeout(function() {
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
      }

      el('pairs-display').textContent = state.matches + ' / ' + state.totalPairs;
      showMatchFlash();

      if (state.matches === state.totalPairs) {
        setTimeout(function() { endGame(true); }, 600);
      }
    }, 400);

  } else {
    var wrapA = document.querySelector('.card-wrap[data-idx="' + a + '"]');
    var wrapB = document.querySelector('.card-wrap[data-idx="' + b + '"]');
    if (wrapA) wrapA.classList.add('wrong');
    if (wrapB) wrapB.classList.add('wrong');

    setTimeout(function() {
      if (wrapA) wrapA.classList.remove('wrong');
      if (wrapB) wrapB.classList.remove('wrong');
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

// ── Match flash ──────────────────────────────────────────
function showMatchFlash() {
  var flash = el('match-flash');
  flash.classList.remove('hidden');
  setTimeout(function() { flash.classList.add('hidden'); }, 750);
}

// ── End game ─────────────────────────────────────────────
function endGame(completed) {
  if (state.timerInterval) clearInterval(state.timerInterval);

  var elapsed = Math.round((Date.now() - state.startTime) / 1000);
  var m = Math.floor(elapsed / 60);
  var s = elapsed % 60;
  var timeStr = m + ':' + (s < 10 ? '0' : '') + s;

  var stats = el('result-stats');
  stats.innerHTML = '';

  if (cfg.mode === 'solo') {
    el('result-trophy').textContent = completed ? '🏆' : '⏰';
    el('result-title').textContent  = completed ? 'Puzzle Complete!' : "Time's Up!";
    addResultRow(stats, 'Pairs Matched', state.matches + ' / ' + state.totalPairs, state.matches === state.totalPairs);
    addResultRow(stats, 'Moves Made', state.moves, false);
    addResultRow(stats, 'Time Taken', timeStr, false);
    if (completed && state.moves > 0) {
      var accuracy = Math.round((state.totalPairs / state.moves) * 100);
      addResultRow(stats, 'Accuracy', accuracy + '%', accuracy >= 70);
    }
  } else {
    var s0  = state.scores[0];
    var s1  = state.scores[1];
    var tie = s0 === s1;
    el('result-trophy').textContent = tie ? '🤝' : '🏆';
    el('result-title').textContent  = tie ? "It's a Tie!" : (s0 > s1 ? cfg.p1Name : cfg.p2Name) + ' Wins!';
    addResultRow(stats, cfg.p1Name, s0 + ' pairs', s0 > s1);
    addResultRow(stats, cfg.p2Name, s1 + ' pairs', s1 > s0);
    addResultRow(stats, 'Total Moves', state.moves, false);
    addResultRow(stats, 'Time', timeStr, false);
  }

  launchConfetti();
  setTimeout(function() { showScreen('result-screen'); }, 500);
}

function addResultRow(container, label, value, highlight) {
  var row = document.createElement('div');
  row.className = 'result-row' + (highlight ? ' highlight' : '');
  row.innerHTML = '<span>' + label + '</span><span class="result-val">' + value + '</span>';
  container.appendChild(row);
}

// ── Confetti ─────────────────────────────────────────────
function launchConfetti() {
  var wrap   = el('confetti');
  wrap.innerHTML = '';
  var colors = ['#f9a826','#e94560','#22d3a5','#a855f7','#3b82f6','#ef4444'];
  for (var i = 0; i < 60; i++) {
    var c = document.createElement('div');
    c.className = 'confetto';
    c.style.left             = (Math.random() * 100) + '%';
    c.style.top              = (Math.random() * -50) + 'px';
    c.style.background       = colors[i % colors.length];
    c.style.width            = (6 + Math.random() * 9) + 'px';
    c.style.height           = (6 + Math.random() * 9) + 'px';
    c.style.animationDuration = (1.4 + Math.random() * 2) + 's';
    c.style.animationDelay   = (Math.random() * 1.2) + 's';
    c.style.borderRadius     = Math.random() > 0.5 ? '50%' : '2px';
    wrap.appendChild(c);
  }
}
