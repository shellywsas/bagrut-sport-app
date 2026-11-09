/**
 * SportBagrut - אפליקציית כושר והגרלת תרגילים לבגרות בספורט
 * גרסה משודרגת: ארגונומית, פרקטית, שליטה קולית וממשק מותאם למזרן
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

// 2. Audio & Speech Assistant (Hands-Free for Mat Workout)
class VoiceAssistant {
  constructor() {
    this.speechEnabled = true;
    this.soundEnabled = true;
    this.wakeLock = null;
    this.wakeLockEnabled = true;
    this.audioCtx = null;
  }

  initAudio() {
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
    this.initAudio();
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
      console.warn('Audio tone error', e);
    }
  }

  tick() {
    this.playTone(600, 'triangle', 0.05, 0.12);
    if ('vibrate' in navigator) navigator.vibrate(10);
  }

  beepLow() {
    this.playTone(480, 'sine', 0.15, 0.25);
  }

  beepHigh() {
    this.playTone(880, 'sine', 0.28, 0.35);
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
    if (!this.speechEnabled || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel(); // Don't queue outdated calls
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'he-IL';
      utt.rate = 1.05;
      utt.pitch = 1.0;
      window.speechSynthesis.speak(utt);
    } catch (e) {
      console.warn('Speech error', e);
    }
  }

  async requestWakeLock() {
    if (!this.wakeLockEnabled || !('wakeLock' in navigator)) return;
    try {
      if (!this.wakeLock) {
        this.wakeLock = await navigator.wakeLock.request('screen');
        this.wakeLock.addEventListener('release', () => {
          this.wakeLock = null;
        });
      }
    } catch (e) {
      console.log('WakeLock not granted or supported:', e);
    }
  }

  releaseWakeLock() {
    if (this.wakeLock) {
      this.wakeLock.release().catch(() => {});
      this.wakeLock = null;
    }
  }
}

const voice = new VoiceAssistant();

// 3. Application State
const state = {
  currentDrawn: null,
  activeExercise: null,
  activeOption: null,
  isRolling: false,
  activeFilter: 'all',
  
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

  // Reps state
  reps: {
    current: 0,
    target: 10
  }
};

// 4. DOM Elements Cache
const DOM = {
  drawBtn: document.getElementById('draw-btn'),
  quickDrawBtn: document.getElementById('quick-draw-btn'),
  quickTrainerBtn: document.getElementById('quick-trainer-btn'),
  lotteryDisplay: document.getElementById('lottery-display'),
  catalogGrid: document.getElementById('catalog-grid'),
  catalogFilters: document.getElementById('catalog-filters'),

  // Header quick tools
  voiceToggleBtn: document.getElementById('voice-toggle-btn'),
  voiceIcon: document.getElementById('voice-icon'),
  soundToggleBtn: document.getElementById('sound-toggle-btn'),
  soundIcon: document.getElementById('sound-icon'),
  wakelockToggleBtn: document.getElementById('wakelock-toggle-btn'),

  // Trainer elements
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

// 5. Render Exercise Catalog Grid with Filters & Clickable Variations
function renderCatalog(filterKey = 'all') {
  DOM.catalogGrid.innerHTML = '';
  
  const filtered = filterKey === 'all' 
    ? EXERCISES 
    : EXERCISES.filter(e => e.categoryKey === filterKey);

  filtered.forEach((ex) => {
    const card = document.createElement('article');
    card.className = 'exercise-card';
    
    // Build interactive variation buttons
    const optionsHtml = ex.options.map((opt, idx) => `
      <button class="var-pill-btn" onclick="startSpecificOption('${ex.id}', ${idx})" title="התחל תרגול זה מיד">
        <span>${opt.text}</span>
        <span class="play-hint">▶ בחר</span>
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
          <span class="variations-title">⚡ בחר וריאציה לאימון מיידי:</span>
          <div class="variation-pill-list">
            ${optionsHtml}
          </div>
        </div>

        <div class="card-actions action-btn-group grid-2">
          <button class="btn btn-primary btn-md" onclick="startExerciseDirectly('${ex.id}')">
            <span>⚡ התחל תרגיל</span>
          </button>
          <button class="btn btn-outline btn-md" onclick="openExerciseGuide('${ex.id}')">
            <span>ℹ️ דגשים והסבר</span>
          </button>
        </div>
      </div>
    `;
    DOM.catalogGrid.appendChild(card);
  });
}

// 6. Direct start of specific option
window.startSpecificOption = function(exId, optionIdx) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  const opt = ex.options[optionIdx] || ex.options[0];
  renderDrawnResult(ex, opt);
  setupTrainer(ex, opt);
};

// 7. Lottery Randomizer Logic (Snappy & Accessible)
function drawRandomExercise() {
  if (state.isRolling) return;
  state.isRolling = true;
  voice.initAudio();

  let count = 0;
  const maxTicks = 12;
  const intervalTime = 80;

  DOM.drawBtn.disabled = true;
  DOM.quickDrawBtn.disabled = true;

  const rollInterval = setInterval(() => {
    count++;
    voice.tick();

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
      DOM.quickDrawBtn.disabled = false;

      const finalEx = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
      const finalOpt = finalEx.options[Math.floor(Math.random() * finalEx.options.length)];

      state.currentDrawn = { exercise: finalEx, option: finalOpt };
      voice.beepHigh();

      renderDrawnResult(finalEx, finalOpt);
      setupTrainer(finalEx, finalOpt);

      // Voice prompt announcement
      voice.speak(`הוגרל: ${finalEx.name}, ${finalOpt.text}`);
    }
  }, intervalTime);
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

// 8. Trainer Setup (Timed or Reps)
function setupTrainer(ex, opt) {
  state.activeExercise = ex;
  state.activeOption = opt;

  DOM.trainerContainer.classList.remove('hidden');
  DOM.quickTrainerBtn.classList.remove('hidden');
  DOM.trainerTitle.textContent = `${ex.icon} ${ex.name}`;
  DOM.trainerDesc.textContent = `אתגר נבחר: ${opt.text}`;

  // Request WakeLock to keep screen on while training on mat
  voice.requestWakeLock();

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

  DOM.trainerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// 9. Timed Interval Engine (Plank) with Voice Cues
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 95; // 596.9

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
  voice.initAudio();
  state.timer.isRunning = true;
  setTimerButtonState(true);
  voice.speak('התחל עבודה');

  state.timer.intervalId = setInterval(() => {
    state.timer.timeLeft--;

    // Countdown sounds in last 3 seconds
    if (state.timer.timeLeft > 0 && state.timer.timeLeft <= 3) {
      voice.beepLow();
      voice.speak(`${state.timer.timeLeft}`);
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
    voice.beepHigh();
    voice.speak('מנוחה');
    t.phase = 'rest';
    t.timeLeft = t.restSec;
    t.totalPhaseDuration = t.restSec;
    updateTimerDisplay();
  } else {
    voice.beepHigh();
    t.phase = 'work';
    t.currentSet++;
    voice.speak(`סט ${t.currentSet}, עבודה`);
    t.timeLeft = t.workSec;
    t.totalPhaseDuration = t.workSec;
    updateTimerDisplay();
  }
}

function pauseTimer() {
  clearInterval(state.timer.intervalId);
  state.timer.isRunning = false;
  setTimerButtonState(false);
  voice.speak('הושהה');
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
    DOM.timerStartPauseBtn.className = 'btn btn-secondary btn-lg';
  } else {
    DOM.timerBtnIcon.textContent = '▶';
    DOM.timerBtnText.textContent = 'התחל אימון';
    DOM.timerStartPauseBtn.className = 'btn btn-success btn-lg';
  }
}

function completePlankWorkout() {
  pauseTimer();
  voice.celebrate();
  voice.speak('כל הכבוד! סיימת את הפלאנק!');
  triggerCelebration('אלופים! השלמתם את כל סטי הפלאנק בדיוק לפי ההנחיות לבגרות!');
}

// 10. Reps Counter Engine
function initRepsCounter(targetReps, unitName) {
  state.reps.current = 0;
  state.reps.target = targetReps;

  DOM.repsCurrentNum.textContent = '0';
  DOM.repsTargetLabel.textContent = `מתוך ${targetReps} ${unitName}`;
  DOM.repsBarFill.style.width = '0%';
}

function incrementRep() {
  voice.initAudio();
  if (state.reps.current < state.reps.target) {
    state.reps.current++;
    voice.tick();
    updateRepsDisplay();

    // Voice announce every few reps or near end
    if (state.reps.current === state.reps.target) {
      voice.celebrate();
      voice.speak('היעד הושלם! כל הכבוד!');
      triggerCelebration(`כל הכבוד! הגעתם ליעד של ${state.reps.target} חזרות מלאות!`);
    } else if (state.reps.current % 5 === 0) {
      voice.speak(`${state.reps.current}`);
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
  voice.celebrate();
  voice.speak('תרגיל הושלם בהצלחה!');
  triggerCelebration(`מדהים! השלמתם את תרגיל ה-${state.activeExercise.name} בהצלחה!`);
}

// 11. Modal Dialogs & Helpers
window.startExerciseDirectly = function(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;
  const opt = ex.options[0];
  renderDrawnResult(ex, opt);
  setupTrainer(ex, opt);
};

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

    <div class="action-btn-group grid-2" style="margin-top: 1rem;">
      <button class="btn btn-primary btn-md" onclick="startExerciseFromDialog('${ex.id}')">
        ⚡ התחל אימון זה עכשיו
      </button>
      <button class="btn btn-outline btn-md" onclick="DOM.exerciseDialog.close()">
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
  DOM.quickDrawBtn.addEventListener('click', () => {
    drawRandomExercise();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  DOM.quickTrainerBtn.addEventListener('click', () => {
    DOM.trainerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Sound toggle
  DOM.soundToggleBtn.addEventListener('click', () => {
    voice.soundEnabled = !voice.soundEnabled;
    DOM.soundToggleBtn.classList.toggle('active', voice.soundEnabled);
    DOM.soundIcon.textContent = voice.soundEnabled ? '🔊' : '🔇';
  });

  // Voice toggle
  DOM.voiceToggleBtn.addEventListener('click', () => {
    voice.speechEnabled = !voice.speechEnabled;
    DOM.voiceToggleBtn.classList.toggle('active', voice.speechEnabled);
    DOM.voiceIcon.textContent = voice.speechEnabled ? '🗣️' : '🤫';
  });

  // WakeLock toggle
  DOM.wakelockToggleBtn.addEventListener('click', () => {
    voice.wakeLockEnabled = !voice.wakeLockEnabled;
    DOM.wakelockToggleBtn.classList.toggle('active', voice.wakeLockEnabled);
    if (voice.wakeLockEnabled) {
      voice.requestWakeLock();
    } else {
      voice.releaseWakeLock();
    }
  });

  DOM.closeTrainerBtn.addEventListener('click', () => {
    clearInterval(state.timer.intervalId);
    DOM.trainerContainer.classList.add('hidden');
    DOM.quickTrainerBtn.classList.add('hidden');
    voice.releaseWakeLock();
  });

  // Category Filters
  DOM.catalogFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderCatalog(chip.dataset.filter);
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
  renderCatalog('all');
  initEventListeners();
});
