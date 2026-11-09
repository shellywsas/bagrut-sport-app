/**
 * SportBagrut - אפליקציית כושר והגרלת תרגילים לבגרות בספורט
 */

// 1. Data Store: Exercises and their exact options as requested
const EXERCISES = [
  {
    id: 'plank',
    name: 'פלאנק (בטן סטטית)',
    category: 'ליבה ויציבה',
    categoryClass: 'core',
    icon: '🧘‍♂️',
    image: 'assets/plank.jpg',
    description: 'תרגיל יסוד חיוני לבגרות בספורט לחיזוק שרירי הליבה, הבטן העמוקה, הגב התחתון וחגורת הכתפיים.',
    type: 'timed-interval', // Has work + rest intervals
    options: [
      { text: '6 פעמים 5 שניות ומנוחה של 5 שניות', sets: 6, workSec: 5, restSec: 5 },
      { text: '4 פעמים 9 שניות עם מנוחה של 6 שניות', sets: 4, workSec: 9, restSec: 6 },
      { text: '2 פעמים 15 שניות מנוחה של 10 שניות', sets: 2, workSec: 15, restSec: 10 },
      { text: '3 פעמים 10 שניות מנוחה של 5 שניות', sets: 3, workSec: 10, restSec: 5 }
    ],
    bagrutTips: [
      'שמרו על קו ישר ועקבי מהעקבים ועד לקודקוד הראש.',
      'אספו את הטבור פנימה לכיוון עמוד השדרה (שריר הרחב-בטני).',
      'המרפקים בדיוק מתחת לקו הכתפיים בזווית של 90 מעלות.',
      'נשמו באופן רציף ואחיד - אל תעצרו נשימה בזמן מאמץ!'
    ],
    commonMistakes: [
      'שקיעה של האגן למטה (הקשתת יתר בגב התחתון).',
      'הרמה של הישבן גבוה מדי (משולש).',
      'הורדת הראש והצוואר כלפי מטה במקום מבט ישר למזרן.'
    ]
  },
  {
    id: 'sun_salutation',
    name: 'ברכת השמש (סוריה נמסקר)',
    category: 'גמישות ונשימה',
    categoryClass: 'mobility',
    icon: '☀️',
    image: 'assets/sun_salutation.jpg',
    description: 'רצף תנועות יוגה קלאסי ומחמם המאריך את שרירי הירך, משפר גמישות עמוד השדרה ומרגיע את מערכת העצבים.',
    type: 'reps',
    unit: 'מחזורים',
    options: [
      { text: '2 מחזורים מלאים', reps: 2 },
      { text: '1 מחזור מלא', reps: 1 },
      { text: '3 מחזורים מלאים', reps: 3 },
      { text: '4 מחזורים מלאים', reps: 4 }
    ],
    bagrutTips: [
      'תנועה זורמת עם סנכרון נשימתי מלא (שאיפה בהרחבת בית החזה, נשיפה בכפיפה קדימה).',
      'האריכו את עמוד השדרה בכל כפיפה ואל תמשכו בכוח.',
      'שמרו על ברכיים מעט רכות אם השרירים האחוריים (Hamstrings) מקוצרים.'
    ],
    commonMistakes: [
      'ביצוע מהיר ותזזיתי ללא שליטה בנשימה.',
      'מתיחה מוגזמת של הצוואר לאחור.'
    ]
  },
  {
    id: 'crunches',
    name: 'כפיפות בטן',
    category: 'חיזוק שרירי בטן',
    categoryClass: 'abs',
    icon: '💪',
    image: 'assets/crunches.jpg',
    description: 'התרגיל הקלאסי של מבחני הכושר והבגרות בספורט לחיזוק שריר הישר הבטני (Rectus Abdominis).',
    type: 'reps',
    unit: 'חזרות',
    options: [
      { text: '10 כפיפות בטן', reps: 10 },
      { text: '20 כפיפות בטן', reps: 20 },
      { text: '15 כפיפות בטן', reps: 15 },
      { text: '5 כפיפות בטן', reps: 5 }
    ],
    bagrutTips: [
      'התמקדו בניתוק השכמות מהרצפה תוך גיוס מלא של הבטן.',
      'הידיים תומכות קלות בצידי הראש ללא משיכה של הצוואר!',
      'נשיפה חזקה וברורה בעלייה, שאיפה מבוקרת בירידה.',
      'שמרו על מרחק של אגרוף בין הסנטר לבית החזה.'
    ],
    commonMistakes: [
      'משיכת העורף והצוואר עם הידיים שגורמת לכאבים.',
      'תנופה מהירה במקום כיווץ שרירי מבוקר ומדויק.'
    ]
  },
  {
    id: 'knee_pushups',
    name: 'שכיבות סמיכה (על הברכיים)',
    category: 'פלג גוף עליון',
    categoryClass: 'upper',
    icon: '⚡',
    image: 'assets/knee_pushups.jpg',
    description: 'גרסה מצוינת ובטוחה לפיתוח כוח בחזה, בכתפיים וביד האחורית (תלת-ראשי) עם עומס מותאם ומדויק.',
    type: 'reps',
    unit: 'חזרות',
    options: [
      { text: '3 שכיבות סמיכה על הברכיים', reps: 3 },
      { text: '4 שכיבות סמיכה על הברכיים', reps: 4 },
      { text: '2 שכיבות סמיכה על הברכיים', reps: 2 },
      { text: '5 שכיבות סמיכה על הברכיים', reps: 5 }
    ],
    bagrutTips: [
      'קו ישר מהברכיים, דרך האגן ועד לראש - אל תבצעו תנועת "גל".',
      'כפות הידיים ממוקמות ברוחב מעט רחב יותר מרוחב הכתפיים.',
      'מרפקים יורדים בזווית של כ-45 מעלות ביחס לגוף (צורת חץ ולא צורת T).',
      'ירידה עד שבית החזה מתקרב כ-5-10 ס"מ מהמזרן.'
    ],
    commonMistakes: [
      'השארת הישבן לאחור ללא ירידה מלאה של מרכז הכובד.',
      'פתיחת מרפקים רחבה מדי שיוצרת לחץ מיותר על מפרק הכתף.'
    ]
  }
];

// 2. Sound Effects Engine (Web Audio API - clean, fast, no external files)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  tick() {
    this.playTone(600, 'triangle', 0.05, 0.1);
  }

  beepLow() {
    this.playTone(440, 'sine', 0.15, 0.25);
  }

  beepHigh() {
    this.playTone(880, 'sine', 0.25, 0.3);
  }

  celebrate() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.25, 0.3);
      }, idx * 120);
    });
  }
}

const sfx = new SoundFX();

// 3. Application State
const state = {
  currentDrawn: null,
  activeExercise: null,
  activeOption: null,
  isRolling: false,
  
  // Timer state for Plank
  timer: {
    isRunning: false,
    intervalId: null,
    phase: 'work', // 'work' or 'rest'
    currentSet: 1,
    totalSets: 1,
    workSec: 5,
    restSec: 5,
    timeLeft: 5,
    totalPhaseDuration: 5
  },

  // Reps state for pushups, crunches, sun salutation
  reps: {
    current: 0,
    target: 10
  }
};

// 4. DOM Elements Cache
const DOM = {
  drawBtn: document.getElementById('draw-btn'),
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  soundIcon: document.getElementById('sound-icon'),
  lotteryDisplay: document.getElementById('lottery-display'),
  catalogGrid: document.getElementById('catalog-grid'),

  trainerContainer: document.getElementById('trainer-container'),
  trainerTypeBadge: document.getElementById('trainer-type-badge'),
  trainerTitle: document.getElementById('trainer-exercise-title'),
  trainerDesc: document.getElementById('trainer-param-desc'),
  closeTrainerBtn: document.getElementById('close-trainer-btn'),

  // Timed elements
  timedInterface: document.getElementById('timed-interface'),
  timerDigits: document.getElementById('timer-digits'),
  timerPhaseTag: document.getElementById('timer-phase-tag'),
  timerRoundIndicator: document.getElementById('timer-round-indicator'),
  timerProgressRing: document.getElementById('timer-progress-ring'),
  timerStartPauseBtn: document.getElementById('timer-start-pause-btn'),
  timerBtnIcon: document.getElementById('timer-btn-icon'),
  timerBtnText: document.getElementById('timer-btn-text'),
  timerResetBtn: document.getElementById('timer-reset-btn'),

  // Reps elements
  repsInterface: document.getElementById('reps-interface'),
  repsCurrentNum: document.getElementById('reps-current-num'),
  repsTargetLabel: document.getElementById('reps-target-label'),
  repsBarFill: document.getElementById('reps-bar-fill'),
  repMinusBtn: document.getElementById('rep-minus-btn'),
  repPlusBtn: document.getElementById('rep-plus-btn'),
  repCompleteBtn: document.getElementById('rep-complete-btn'),

  // Dialogs
  exerciseDialog: document.getElementById('exercise-dialog'),
  dialogTitle: document.getElementById('dialog-exercise-title'),
  dialogBody: document.getElementById('dialog-body'),
  dialogCloseBtn: document.getElementById('dialog-close-btn'),

  celebrateDialog: document.getElementById('celebrate-dialog'),
  celebrateMsg: document.getElementById('celebrate-message'),
  celebrateDrawNextBtn: document.getElementById('celebrate-draw-next-btn'),
  celebrateCloseBtn: document.getElementById('celebrate-close-btn'),
  confettiCanvas: document.getElementById('confetti-canvas')
};

// 5. Render Exercise Catalog Grid
function renderCatalog() {
  DOM.catalogGrid.innerHTML = '';
  
  EXERCISES.forEach((ex) => {
    const card = document.createElement('article');
    card.className = 'exercise-card';
    
    const optionsHtml = ex.options.map(opt => `<span class="var-pill">${opt.text}</span>`).join('');

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${ex.image}" alt="${ex.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80'">
        <span class="card-category-tag">${ex.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">
          <span>${ex.name}</span>
          <span>${ex.icon}</span>
        </h3>
        <p class="card-desc">${ex.description}</p>
        
        <div class="card-variations-box">
          <span class="variations-title">אופציות הגרלה לבגרות ולכושר:</span>
          <div class="variation-pill-list">
            ${optionsHtml}
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary" onclick="startExerciseDirectly('${ex.id}')">
            <span>⚡ התחל תרגיל</span>
          </button>
          <button class="btn btn-outline" onclick="openExerciseGuide('${ex.id}')">
            <span>ℹ️ דגשים והסבר</span>
          </button>
        </div>
      </div>
    `;
    DOM.catalogGrid.appendChild(card);
  });
}

// 6. Lottery Randomizer Logic
function drawRandomExercise() {
  if (state.isRolling) return;
  state.isRolling = true;
  sfx.init();

  let count = 0;
  const maxTicks = 14;
  const intervalTime = 90;

  DOM.drawBtn.disabled = true;
  DOM.drawBtn.style.opacity = '0.7';

  const rollInterval = setInterval(() => {
    count++;
    sfx.tick();

    // Pick random for display animation
    const randEx = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
    const randOpt = randEx.options[Math.floor(Math.random() * randEx.options.length)];

    DOM.lotteryDisplay.innerHTML = `
      <div class="drawn-result-card" style="opacity: 0.85;">
        <span class="drawn-category">${randEx.category}</span>
        <h3 class="drawn-name">${randEx.icon} ${randEx.name}</h3>
        <div class="drawn-spec">${randOpt.text}</div>
      </div>
    `;

    if (count >= maxTicks) {
      clearInterval(rollInterval);
      state.isRolling = false;
      DOM.drawBtn.disabled = false;
      DOM.drawBtn.style.opacity = '1';

      // Pick final deterministic choice
      const finalEx = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
      const finalOpt = finalEx.options[Math.floor(Math.random() * finalOptLength(finalEx))];

      state.currentDrawn = { exercise: finalEx, option: finalOpt };
      sfx.beepHigh();

      renderDrawnResult(finalEx, finalOpt);
      setupTrainer(finalEx, finalOpt);
    }
  }, intervalTime);
}

function finalOptLength(ex) {
  return ex.options.length;
}

function renderDrawnResult(ex, opt) {
  DOM.lotteryDisplay.innerHTML = `
    <div class="drawn-result-card">
      <span class="drawn-category">${ex.category}</span>
      <div class="drawn-img-wrap">
        <img src="${ex.image}" alt="${ex.name}" onerror="this.src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80'">
      </div>
      <h3 class="drawn-name">${ex.icon} ${ex.name}</h3>
      <div class="drawn-spec">🎯 המשימה: ${opt.text}</div>
      <p class="drawn-tip">💡 ${ex.bagrutTips[0]}</p>
    </div>
  `;
}

// 7. Trainer Setup (Timed or Reps)
function setupTrainer(ex, opt) {
  state.activeExercise = ex;
  state.activeOption = opt;

  DOM.trainerContainer.classList.remove('hidden');
  DOM.trainerTitle.textContent = `${ex.icon} ${ex.name}`;
  DOM.trainerDesc.textContent = `אתגר מוגדר: ${opt.text}`;

  if (ex.type === 'timed-interval') {
    DOM.trainerTypeBadge.textContent = '⏱️ אינטרוולים מתוזמנים';
    DOM.timedInterface.classList.remove('hidden');
    DOM.repsInterface.classList.add('hidden');
    initPlankTimer(opt.sets, opt.workSec, opt.restSec);
  } else {
    DOM.trainerTypeBadge.textContent = '🔢 ספירת חזרות';
    DOM.timedInterface.classList.add('hidden');
    DOM.repsInterface.classList.remove('hidden');
    initRepsCounter(opt.reps, opt.unit || 'חזרות');
  }

  // Smooth scroll to trainer
  DOM.trainerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 8. Timed Interval Engine (Plank)
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 85; // 534.07

function initPlankTimer(sets, workSec, restSec) {
  clearInterval(state.timer.intervalId);
  state.timer = {
    isRunning: false,
    intervalId: null,
    phase: 'work',
    currentSet: 1,
    totalSets: sets,
    workSec: workSec,
    restSec: restSec,
    timeLeft: workSec,
    totalPhaseDuration: workSec
  };

  updateTimerDisplay();
  setTimerButtonState(false);
}

function updateTimerDisplay() {
  const { phase, currentSet, totalSets, timeLeft, totalPhaseDuration } = state.timer;
  
  DOM.timerDigits.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
  DOM.timerRoundIndicator.textContent = `סט ${currentSet} מתוך ${totalSets}`;

  if (phase === 'work') {
    DOM.timerPhaseTag.textContent = '🔥 פלאנק - עבודה!';
    DOM.timerPhaseTag.classList.remove('rest');
    DOM.timerProgressRing.classList.remove('rest');
  } else {
    DOM.timerPhaseTag.textContent = '🧘 מנוחה והתרגעות';
    DOM.timerPhaseTag.classList.add('rest');
    DOM.timerProgressRing.classList.add('rest');
  }

  // Update SVG ring
  const fraction = timeLeft / totalPhaseDuration;
  const offset = CIRCLE_CIRCUMFERENCE * (1 - fraction);
  DOM.timerProgressRing.style.strokeDashoffset = offset;
}

function toggleTimer() {
  if (state.timer.isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  sfx.init();
  state.timer.isRunning = true;
  setTimerButtonState(true);

  state.timer.intervalId = setInterval(() => {
    state.timer.timeLeft--;

    if (state.timer.timeLeft > 0 && state.timer.timeLeft <= 3) {
      sfx.beepLow();
    }

    if (state.timer.timeLeft <= 0) {
      // Phase transition
      handlePhaseTransition();
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function handlePhaseTransition() {
  const t = state.timer;
  if (t.phase === 'work') {
    if (t.currentSet >= t.totalSets) {
      // Workout Finished!
      completePlankWorkout();
      return;
    }
    // Switch to Rest
    sfx.beepHigh();
    t.phase = 'rest';
    t.timeLeft = t.restSec;
    t.totalPhaseDuration = t.restSec;
    updateTimerDisplay();
  } else {
    // Switch back to Work on next set
    sfx.beepHigh();
    t.phase = 'work';
    t.currentSet++;
    t.timeLeft = t.workSec;
    t.totalPhaseDuration = t.workSec;
    updateTimerDisplay();
  }
}

function pauseTimer() {
  clearInterval(state.timer.intervalId);
  state.timer.isRunning = false;
  setTimerButtonState(false);
}

function resetTimer() {
  clearInterval(state.timer.intervalId);
  if (state.activeOption) {
    initPlankTimer(state.activeOption.sets, state.activeOption.workSec, state.activeOption.restSec);
  }
}

function setTimerButtonState(running) {
  if (running) {
    DOM.timerBtnIcon.textContent = '⏸';
    DOM.timerBtnText.textContent = 'השהה';
    DOM.timerStartPauseBtn.className = 'btn btn-secondary';
  } else {
    DOM.timerBtnIcon.textContent = '▶';
    DOM.timerBtnText.textContent = 'התחל אימון';
    DOM.timerStartPauseBtn.className = 'btn btn-success';
  }
}

function completePlankWorkout() {
  pauseTimer();
  sfx.celebrate();
  triggerCelebration('אלופים! השלמתם את כל סטי הפלאנק בדיוק לפי ההנחיות לבגרות!');
}

// 9. Reps Counter Engine
function initRepsCounter(targetReps, unitName) {
  state.reps.current = 0;
  state.reps.target = targetReps;

  DOM.repsCurrentNum.textContent = '0';
  DOM.repsTargetLabel.textContent = `מתוך ${targetReps} ${unitName}`;
  DOM.repsBarFill.style.width = '0%';
}

function incrementRep() {
  sfx.init();
  if (state.reps.current < state.reps.target) {
    state.reps.current++;
    sfx.tick();
    updateRepsDisplay();

    if (state.reps.current === state.reps.target) {
      sfx.celebrate();
      triggerCelebration(`כל הכבוד! הגעתם ליעד של ${state.reps.target} חזרות מלאות!`);
    }
  }
}

function decrementRep() {
  if (state.reps.current > 0) {
    state.reps.current--;
    updateRepsDisplay();
  }
}

function updateRepsDisplay() {
  DOM.repsCurrentNum.textContent = state.reps.current;
  const pct = Math.min(100, Math.round((state.reps.current / state.reps.target) * 100));
  DOM.repsBarFill.style.width = `${pct}%`;
}

function completeRepsDirectly() {
  state.reps.current = state.reps.target;
  updateRepsDisplay();
  sfx.celebrate();
  triggerCelebration(`מדהים! השלמתם את תרגיל ה-${state.activeExercise.name} בהצלחה!`);
}

// 10. Start Exercise directly from catalog
window.startExerciseDirectly = function(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  // Pick first or random option
  const opt = ex.options[0];
  renderDrawnResult(ex, opt);
  setupTrainer(ex, opt);
};

// 11. Modal Dialogs (Exercise Technique Guide)
window.openExerciseGuide = function(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;

  DOM.dialogTitle.textContent = `${ex.icon} ${ex.name} - מדריך טכניקה`;
  
  const tipsList = ex.bagrutTips.map(tip => `<li>${tip}</li>`).join('');
  const mistakesList = ex.commonMistakes.map(m => `<li>${m}</li>`).join('');

  DOM.dialogBody.innerHTML = `
    <div class="dialog-img-box">
      <img src="${ex.image}" alt="${ex.name}" onerror="this.src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80'">
    </div>
    <p style="color: var(--color-text-muted); font-size: 0.95rem;">${ex.description}</p>
    
    <div class="technique-box">
      <h4>🎯 דגשים חשובים לבגרות בספורט:</h4>
      <ul>${tipsList}</ul>
    </div>

    <div class="technique-box" style="border-right-color: var(--color-accent); margin-top: 0.75rem;">
      <h4>⚠️ טעויות נפוצות שכדאי למנוע:</h4>
      <ul>${mistakesList}</ul>
    </div>

    <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
      <button class="btn btn-primary" style="flex: 1;" onclick="startExerciseFromDialog('${ex.id}')">
        ⚡ התחל אימון זה עכשיו
      </button>
      <button class="btn btn-outline" onclick="DOM.exerciseDialog.close()">
        סגור
      </button>
    </div>
  `;

  DOM.exerciseDialog.showModal();
};

window.startExerciseFromDialog = function(exId) {
  DOM.exerciseDialog.close();
  window.startExerciseDirectly(exId);
};

// 12. Celebration and Confetti
function triggerCelebration(msg) {
  DOM.celebrateMsg.textContent = msg;
  DOM.celebrateDialog.showModal();
  runConfetti();
}

function runConfetti() {
  const canvas = DOM.confettiCanvas;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const colors = ['#10b981', '#f97316', '#0284c7', '#8b5cf6', '#eab308', '#ec4899'];

  for (let i = 0; i < 90; i++) {
    confettiPieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      alpha: 1
    });
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let aliveCount = 0;

    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        aliveCount++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (aliveCount > 0) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  animate();
}

// 13. Fallback support for <dialog closedby="any"> according to Modern Web Guidance
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const outside = (e, dialog) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
    let pressedOutside = false;
    dialog.addEventListener('pointerdown', (e) => { pressedOutside = outside(e, dialog); });
    dialog.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e, dialog)) dialog.close(); });
  }
}

// 14. Event Listeners Setup
function initEventListeners() {
  DOM.drawBtn.addEventListener('click', drawRandomExercise);

  DOM.soundToggleBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    DOM.soundIcon.textContent = sfx.enabled ? '🔊' : '🔇';
  });

  DOM.closeTrainerBtn.addEventListener('click', () => {
    clearInterval(state.timer.intervalId);
    DOM.trainerContainer.classList.add('hidden');
  });

  // Timer controls
  DOM.timerStartPauseBtn.addEventListener('click', toggleTimer);
  DOM.timerResetBtn.addEventListener('click', resetTimer);

  // Reps controls
  DOM.repPlusBtn.addEventListener('click', incrementRep);
  DOM.repMinusBtn.addEventListener('click', decrementRep);
  DOM.repCompleteBtn.addEventListener('click', completeRepsDirectly);

  // Dialog controls
  DOM.dialogCloseBtn.addEventListener('click', () => DOM.exerciseDialog.close());
  DOM.celebrateCloseBtn.addEventListener('click', () => DOM.celebrateDialog.close());
  DOM.celebrateDrawNextBtn.addEventListener('click', () => {
    DOM.celebrateDialog.close();
    drawRandomExercise();
  });
}

// 15. Initial Load
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initEventListeners();
});
