/**
 * SportBagrut - אפליקציית כושר והגרלת תרגילים לבגרות בספורט
 * גרסה מודולרית: ניווט טאבים נקי (ללא גלילה מיותרת) ומסך אימון מלא ייעודי
 */

// 1. Data Store: Exercises and their exact options as requested
const EXERCISES = [
  {
    id: 'plank',
    name: 'פלאנק (בטן סטטית)',
    category: 'בטן וליבה',
    categoryKey: 'core',
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
    categoryKey: 'mobility',
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
      'שמרו על ברכיים מעט רכות אם השרירים האחוריים מקוצרים.'
    ],
    commonMistakes: [
      'ביצוע מהיר ותזזיתי ללא שליטה בנשימה.',
      'מתיחה מוגזמת של הצוואר לאחור.'
    ]
  },
  {
    id: 'crunches',
    name: 'כפיפות בטן',
    category: 'בטן וליבה',
    categoryKey: 'core',
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
    categoryKey: 'upper',
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

// 2. Audio & Speech Assistant
class AudioEngine {
  constructor() {
    this.soundEnabled = true;
    this.audioCtx = null;
    this.wakeLock = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2) {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }

  tick() {
    this.playTone(600, 'triangle', 0.05, 0.1);
  }

  beepLow() {
    this.playTone(480, 'sine', 0.15, 0.25);
  }

  beepHigh() {
    this.playTone(880, 'sine', 0.25, 0.35);
  }

  celebrate() {
    if (!this.soundEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.3), idx * 110);
    });
    if ('vibrate' in navigator) navigator.vibrate([40, 60, 40, 100]);
  }

  speak(text) {
    if (!this.soundEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'he-IL';
      utt.rate = 1.05;
      window.speechSynthesis.speak(utt);
    } catch (e) {
      console.warn('Speech error', e);
    }
  }

  async requestWakeLock() {
    if (!('wakeLock' in navigator)) return;
    try {
      if (!this.wakeLock) {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => { this.wakeLock = null; });
      }
    } catch (e) {
      console.log('WakeLock not granted:', e);
    }
  }

  releaseWakeLock() {
    if (this.wakeLock) {
      this.wakeLock.release().catch(() => {});
      this.wakeLock = null;
    }
  }
}

const audio = new AudioEngine();

// 3. Application State
const state = {
  currentDrawn: null,
  activeExercise: null,
  activeOption: null,
  isRolling: false,
  activeTab: 'tab-lottery',

  // Timer state for Plank
  timer: {
    isRunning: false,
    intervalId: null,
    phase: 'work',
    currentSet: 1,
    totalSets: 1,
    workSec: 5,
    restSec: 5,
    timeLeft: 5,
    totalPhaseDuration: 5
  },

  // Reps state
  reps: {
    current: 0,
    target: 10
  }
};

// 4. DOM Elements Cache
const DOM = {
  tabButtons: document.querySelectorAll('.tab-btn'),
  viewPanels: document.querySelectorAll('.view-panel'),
  
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  soundIcon: document.getElementById('sound-icon'),
  mainDrawBtn: document.getElementById('main-draw-btn'),
  catalogGrid: document.getElementById('catalog-grid'),

  // Fullscreen Workout Overlay
  fullscreenWorkout: document.getElementById('fullscreen-workout'),
  exitWorkoutBtn: document.getElementById('exit-workout-btn'),
  wkTitle: document.getElementById('wk-title'),
  wkBadge: document.getElementById('wk-badge'),
  wkImage: document.getElementById('wk-image'),
  wkSpec: document.getElementById('wk-spec'),
  wkSoundBtn: document.getElementById('wk-sound-btn'),
  wkSoundIcon: document.getElementById('wk-sound-icon'),
  wkTechniqueTip: document.getElementById('wk-technique-tip'),

  // Fullscreen Timed Elements
  wkTimedBox: document.getElementById('wk-timed-box'),
  timerRing: document.getElementById('timer-ring'),
  wkPhaseBadge: document.getElementById('wk-phase-badge'),
  wkTimerDigits: document.getElementById('wk-timer-digits'),
  wkRoundCount: document.getElementById('wk-round-count'),
  timerToggleBtn: document.getElementById('timer-toggle-btn'),
  timerActionIcon: document.getElementById('timer-action-icon'),
  timerActionText: document.getElementById('timer-action-text'),
  timerResetBtn: document.getElementById('timer-reset-btn'),

  // Fullscreen Reps Elements
  wkRepsBox: document.getElementById('wk-reps-box'),
  wkRepsCurrent: document.getElementById('wk-reps-current'),
  wkRepsTarget: document.getElementById('wk-reps-target'),
  wkRepsBar: document.getElementById('wk-reps-bar'),
  repIncBtn: document.getElementById('rep-inc-btn'),
  repDecBtn: document.getElementById('rep-dec-btn'),
  repFinishBtn: document.getElementById('rep-finish-btn'),

  // Dialogs
  exerciseDialog: document.getElementById('exercise-dialog'),
  dialogTitle: document.getElementById('dialog-exercise-title'),
  dialogBody: document.getElementById('dialog-body'),
  dialogCloseBtn: document.getElementById('dialog-close-btn'),

  celebrateDialog: document.getElementById('celebrate-dialog'),
  celebrateMsg: document.getElementById('celebrate-message'),
  celebrateNextBtn: document.getElementById('celebrate-next-btn'),
  celebrateCloseBtn: document.getElementById('celebrate-close-btn'),
  confettiCanvas: document.getElementById('confetti-canvas')
};

// 5. Tab Switching (No single long scroll - purely separate views)
function switchTab(targetTabId) {
  state.activeTab = targetTabId;

  // Update tab buttons
  DOM.tabButtons.forEach(btn => {
    const isActive = btn.dataset.tab === targetTabId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });

  // Update view panels
  DOM.viewPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === targetTabId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 6. Render Exercise Catalog Grid
function renderCatalog() {
  DOM.catalogGrid.innerHTML = '';

  EXERCISES.forEach((ex) => {
    const card = document.createElement('article');
    card.className = 'exercise-card';

    const optionsHtml = ex.options.map((opt, idx) => `
      <button class="var-pill-btn" onclick="startSpecificOption('${ex.id}', ${idx})" title="בחר וריאציה זו והתחל אימון במסך מלא">
        <span>${opt.text}</span>
        <span class="play-hint">▶ התחל</span>
      </button>
    `).join('');

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
          <span class="variations-title">⚡ אפשרויות הגרלה ואימון:</span>
          <div class="variation-pill-list">
            ${optionsHtml}
          </div>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary" onclick="launchWorkout('${ex.id}', 0)">
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

// 7. Fullscreen Workout Arena: Open & Close (עם יציאה נוחה אם מוותרים)
function openWorkoutArena(ex, opt) {
  state.activeExercise = ex;
  state.activeOption = opt;

  // Update Header details
  DOM.wkTitle.textContent = `${ex.icon} ${ex.name}`;
  DOM.wkBadge.textContent = ex.category;
  DOM.wkImage.src = ex.image;
  DOM.wkImage.style.display = 'block';
  DOM.wkSpec.textContent = opt.text;
  DOM.wkTechniqueTip.textContent = `דגש: ${ex.bagrutTips[0]}`;

  audio.requestWakeLock();

  if (ex.type === 'timed-interval') {
    DOM.wkTimedBox.classList.remove('hidden');
    DOM.wkRepsBox.classList.add('hidden');
    initPlankTimer(opt.sets, opt.workSec, opt.restSec);
  } else {
    DOM.wkTimedBox.classList.add('hidden');
    DOM.wkRepsBox.classList.remove('hidden');
    initRepsCounter(opt.reps, opt.unit || 'חזרות');
  }

  // Show fullscreen overlay
  DOM.fullscreenWorkout.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Lock background scroll

  // Voice welcome
  audio.speak(`הוגרל ${ex.name}: ${opt.text}`);
}

function closeWorkoutArena() {
  pauseTimer();
  audio.releaseWakeLock();
  DOM.fullscreenWorkout.classList.add('hidden');
  document.body.style.overflow = '';
}

// 8. Specific Launch
window.startSpecificOption = function(exId, optIdx) {
  launchWorkout(exId, optIdx);
};

window.launchWorkout = function(exId, optIdx = 0) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  const opt = ex.options[optIdx] || ex.options[0];
  openWorkoutArena(ex, opt);
};

// 9. Lottery Roll Engine
function drawRandomExercise() {
  if (state.isRolling) return;
  state.isRolling = true;
  audio.init();

  let count = 0;
  const maxTicks = 12;
  const intervalTime = 75;

  DOM.mainDrawBtn.disabled = true;
  DOM.mainDrawBtn.style.opacity = '0.7';

  const rollInterval = setInterval(() => {
    count++;
    audio.tick();

    if (count >= maxTicks) {
      clearInterval(rollInterval);
      state.isRolling = false;
      DOM.mainDrawBtn.disabled = false;
      DOM.mainDrawBtn.style.opacity = '1';

      // Select final random exercise & option
      const finalEx = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
      const finalOpt = finalEx.options[Math.floor(Math.random() * finalEx.options.length)];

      state.currentDrawn = { exercise: finalEx, option: finalOpt };
      audio.beepHigh();

      // Immediately open into full screen!
      openWorkoutArena(finalEx, finalOpt);
    }
  }, intervalTime);
}

// 10. Timed Interval Engine (Plank)
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 102; // 640.88

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
  
  DOM.wkTimerDigits.textContent = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
  DOM.wkRoundCount.textContent = `סט ${currentSet} מתוך ${totalSets}`;

  if (phase === 'work') {
    DOM.wkPhaseBadge.textContent = '🔥 פלאנק - עבודה!';
    DOM.wkPhaseBadge.classList.remove('rest');
    DOM.timerRing.classList.remove('rest');
  } else {
    DOM.wkPhaseBadge.textContent = '🧘 מנוחה והסדרת נשימה';
    DOM.wkPhaseBadge.classList.add('rest');
    DOM.timerRing.classList.add('rest');
  }

  const fraction = timeLeft / totalPhaseDuration;
  const offset = CIRCLE_CIRCUMFERENCE * (1 - fraction);
  DOM.timerRing.style.strokeDashoffset = offset;
}

function toggleTimer() {
  if (state.timer.isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  audio.init();
  state.timer.isRunning = true;
  setTimerButtonState(true);
  audio.speak('עבודה!');

  state.timer.intervalId = setInterval(() => {
    state.timer.timeLeft--;

    if (state.timer.timeLeft > 0 && state.timer.timeLeft <= 3) {
      audio.beepLow();
      audio.speak(`${state.timer.timeLeft}`);
    }

    if (state.timer.timeLeft <= 0) {
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
      completePlankWorkout();
      return;
    }
    audio.beepHigh();
    audio.speak('מנוחה');
    t.phase = 'rest';
    t.timeLeft = t.restSec;
    t.totalPhaseDuration = t.restSec;
    updateTimerDisplay();
  } else {
    audio.beepHigh();
    t.phase = 'work';
    t.currentSet++;
    audio.speak(`סט ${t.currentSet}, עבודה!`);
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
    DOM.timerActionIcon.textContent = '⏸';
    DOM.timerActionText.textContent = 'השהה';
    DOM.timerToggleBtn.className = 'btn btn-secondary btn-large';
  } else {
    DOM.timerActionIcon.textContent = '▶';
    DOM.timerActionText.textContent = 'התחל אימון';
    DOM.timerToggleBtn.className = 'btn btn-primary btn-large';
  }
}

function completePlankWorkout() {
  pauseTimer();
  audio.celebrate();
  audio.speak('כל הכבוד! סיימת את הפלאנק!');
  triggerCelebration('אלופים! השלמתם את כל סטי הפלאנק בדיוק לפי ההנחיות לבגרות!');
}

// 11. Reps Counter Engine
function initRepsCounter(targetReps, unitName) {
  state.reps.current = 0;
  state.reps.target = targetReps;

  DOM.wkRepsCurrent.textContent = '0';
  DOM.wkRepsTarget.textContent = `מתוך ${targetReps} ${unitName}`;
  DOM.wkRepsBar.style.width = '0%';
}

function incrementRep() {
  audio.init();
  if (state.reps.current < state.reps.target) {
    state.reps.current++;
    audio.tick();
    updateRepsDisplay();

    if (state.reps.current === state.reps.target) {
      audio.celebrate();
      audio.speak('היעד הושלם! כל הכבוד!');
      triggerCelebration(`כל הכבוד! הגעתם ליעד של ${state.reps.target} חזרות מלאות!`);
    } else if (state.reps.current % 5 === 0) {
      audio.speak(`${state.reps.current}`);
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
  DOM.wkRepsCurrent.textContent = state.reps.current;
  const pct = Math.min(100, Math.round((state.reps.current / state.reps.target) * 100));
  DOM.wkRepsBar.style.width = `${pct}%`;
}

function completeRepsDirectly() {
  state.reps.current = state.reps.target;
  updateRepsDisplay();
  audio.celebrate();
  audio.speak('כל הכבוד! תרגיל הושלם!');
  triggerCelebration(`מדהים! השלמתם את תרגיל ה-${state.activeExercise.name} בהצלחה!`);
}

// 12. Exercise Technique Guide Dialog
window.openExerciseGuide = function(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;

  DOM.dialogTitle.textContent = `${ex.icon} ${ex.name} - דגשי טכניקה`;
  
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

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-top: 1rem;">
      <button class="btn btn-primary" onclick="startExerciseFromDialog('${ex.id}')">
        ⚡ התחל אימון זה
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
  launchWorkout(exId, 0);
};

// 13. Celebration and Confetti
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
  const colors = ['#10b981', '#f97316', '#0284c7', '#8b5cf6', '#eab308'];

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

// 14. Fallback support for <dialog closedby="any"> according to Modern Web Guidance
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

// 15. Sound toggling sync
function toggleSound() {
  audio.soundEnabled = !audio.soundEnabled;
  const icon = audio.soundEnabled ? '🔊' : '🔇';
  DOM.soundIcon.textContent = icon;
  DOM.wkSoundIcon.textContent = icon;
}

// 16. Event Listeners Setup
function initEventListeners() {
  // Tab switching
  DOM.tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Main lottery draw button
  DOM.mainDrawBtn.addEventListener('click', drawRandomExercise);

  // Fullscreen workout arena controls
  DOM.exitWorkoutBtn.addEventListener('click', closeWorkoutArena);
  DOM.soundToggleBtn.addEventListener('click', toggleSound);
  DOM.wkSoundBtn.addEventListener('click', toggleSound);

  // Timer controls
  DOM.timerToggleBtn.addEventListener('click', toggleTimer);
  DOM.timerResetBtn.addEventListener('click', resetTimer);

  // Reps controls
  DOM.repIncBtn.addEventListener('click', incrementRep);
  DOM.repDecBtn.addEventListener('click', decrementRep);
  DOM.repFinishBtn.addEventListener('click', completeRepsDirectly);

  // Dialog controls
  DOM.dialogCloseBtn.addEventListener('click', () => DOM.exerciseDialog.close());
  DOM.celebrateCloseBtn.addEventListener('click', () => {
    DOM.celebrateDialog.close();
    closeWorkoutArena();
  });
  DOM.celebrateNextBtn.addEventListener('click', () => {
    DOM.celebrateDialog.close();
    drawRandomExercise();
  });
}

// 17. Initial Load
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  initEventListeners();
});
