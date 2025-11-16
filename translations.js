// translations.js - i18n support for SignLink
(function(){
  const LANG_KEY = 'signlink_lang';

  const translations = {
    en: {
      appTitle: 'SignLink',
      brandShort: 'SL',
      landingTagline: 'For the Better',
      tryIt: 'Try it!',
      enterRoom: 'Enter Room ID',
      createRoom: 'Create Room',
      joinRoom: 'Join Room',
      leaveRoom: 'Leave Room',
      overlayPeerConnected: 'Peer Connected with ID: {id}',
      overlayWaitingFriend: 'Waiting for your friend to join!',
      overlayJoiningRoom: 'Joining Room',
      alertEnterRoomNumber: 'Please enter room number',
      overlayJoiningPeer: 'Joining peer',
      detected: 'Detected',
      detectedWord: 'Word',
      token_Hi: 'Hi',
      token_i_heart_u: 'I ❤ U',
      token_NA: 'N/A',
      controlsTitle: 'Controls',
      clear: 'Clear',
      backspace: 'Backspace',
      space: 'Space',
      recogSource: 'Recognition Source',
      source_remote: 'Remote (peer)',
      source_local: 'Local (me)'
    },
    es: {
      appTitle: 'SignLink',
      brandShort: 'SL',
      landingTagline: 'Para un futuro mejor',
      tryIt: '¡Pruébalo!',
      enterRoom: 'Ingresa el ID de la sala',
      createRoom: 'Crear sala',
      joinRoom: 'Unirse a la sala',
      leaveRoom: 'Salir de la sala',
      overlayPeerConnected: 'Par conectado con ID: {id}',
      overlayWaitingFriend: '¡Esperando a que tu amigo se una!',
      overlayJoiningRoom: 'Uniéndose a la sala',
      alertEnterRoomNumber: 'Por favor, ingresa el número de sala',
      overlayJoiningPeer: 'Uniéndose al par',
      detected: 'Detectado',
      detectedWord: 'Palabra',
      token_Hi: 'Hola',
      token_i_heart_u: 'Te ❤',
      token_NA: 'N/D',
      controlsTitle: 'Controles',
      clear: 'Borrar',
      backspace: 'Retroceso',
      space: 'Espacio',
      recogSource: 'Fuente de reconocimiento',
      source_remote: 'Remoto (par)',
      source_local: 'Local (yo)'
    },
    fr: {
      appTitle: 'SignLink',
      brandShort: 'SL',
      landingTagline: 'Pour le meilleur',
      tryIt: 'Essayez-le !',
      enterRoom: 'Entrez l’ID de la salle',
      createRoom: 'Créer une salle',
      joinRoom: 'Rejoindre la salle',
      leaveRoom: 'Quitter la salle',
      overlayPeerConnected: 'Pair connecté avec l’ID : {id}',
      overlayWaitingFriend: 'En attente que votre ami rejoigne !',
      overlayJoiningRoom: 'Connexion à la salle',
      alertEnterRoomNumber: 'Veuillez entrer le numéro de la salle',
      overlayJoiningPeer: 'Connexion au pair',
      detected: 'Détecté',
      detectedWord: 'Mot',
      token_Hi: 'Salut',
      token_i_heart_u: 'Je ❤ Toi',
      token_NA: 'N/D',
      controlsTitle: 'Contrôles',
      clear: 'Effacer',
      backspace: 'Retour arrière',
      space: 'Espace',
      recogSource: 'Source de reconnaissance',
      source_remote: 'Distant (pair)',
      source_local: 'Local (moi)'
    },
    hi: {
      appTitle: 'साइनलिंक',
      brandShort: 'SL',
      landingTagline: 'बेहतर के लिए',
      tryIt: 'इसे आज़माएँ!',
      enterRoom: 'रूम आईडी दर्ज करें',
      createRoom: 'रूम बनाएँ',
      joinRoom: 'रूम जॉइन करें',
      leaveRoom: 'रूम छोड़ें',
      overlayPeerConnected: 'पीयर आईडी से जुड़ा: {id}',
      overlayWaitingFriend: 'अपने मित्र का जुड़ने का इंतज़ार…',
      overlayJoiningRoom: 'रूम से जुड़ रहे हैं',
      alertEnterRoomNumber: 'कृपया रूम नंबर दर्ज करें',
      overlayJoiningPeer: 'पीयर से जुड़ रहे हैं',
      detected: 'पता चला',
      detectedWord: 'शब्द',
      token_Hi: 'नमस्ते',
      token_i_heart_u: 'मैं ❤ तुम',
      token_NA: 'लागू नहीं',
      controlsTitle: 'नियंत्रण',
      clear: 'साफ़ करें',
      backspace: 'बैकस्पेस',
      space: 'स्पेस',
      recogSource: 'पहचान स्रोत',
      source_remote: 'रिमोट (पीयर)',
      source_local: 'लोकल (मैं)'
    },
    te: {
      appTitle: 'సైన్‌లింక్',
      brandShort: 'SL',
      landingTagline: 'మంచిదినిమిత్తం',
      tryIt: 'ప్రయత్నించండి!',
      enterRoom: 'రూమ్ ఐడి ఇవ్వండి',
      createRoom: 'రూమ్ సృష్టించండి',
      joinRoom: 'రూమ్ లో చేరండి',
      leaveRoom: 'రూమ్ నుండి బయటకు రండి',
      overlayPeerConnected: 'పియర్ ID తో కనెక్ట్ అయింది: {id}',
      overlayWaitingFriend: 'మీ స్నేహితుడు చేరేవరకు వేచి ఉంది!',
      overlayJoiningRoom: 'రూమ్ లో చేరుతున్నాం',
      alertEnterRoomNumber: 'దయచేసి రూమ్ నంబర్ ఇవ్వండి',
      overlayJoiningPeer: 'పియర్ కు కనెక్ట్ అవుతున్నాం',
      detected: 'గుర్తించబడింది',
      detectedWord: 'పదం',
      token_Hi: 'హలో',
      token_i_heart_u: 'నేను ❤ నువ్వు',
      token_NA: 'వర్తించదు',
      controlsTitle: 'నియంత్రణలు',
      clear: 'క్లియర్',
      backspace: 'బ్యాక్‌స్పేస్',
      space: 'స్పేస్',
      recogSource: 'గుర్తింపు మూలం',
      source_remote: 'రిమోట్ (పీర్)',
      source_local: 'లోకల్ (నేను)'
    },
    ta: {
      appTitle: 'சைன்லிங்க்',
      brandShort: 'SL',
      landingTagline: 'மேம்பாட்டிற்காக',
      tryIt: 'முயற்சி செய்யவும்!',
      enterRoom: 'அறை ஐடியை உள்ளிடவும்',
      createRoom: 'அறையை உருவாக்கு',
      joinRoom: 'அறையில் சேரவும்',
      leaveRoom: 'அறையிலிருந்து வெளியேறு',
      overlayPeerConnected: 'பியர் ஐடியில் இணைந்தது: {id}',
      overlayWaitingFriend: 'உங்கள் நண்பர் சேரும்வரை காத்திருக்கிறது!',
      overlayJoiningRoom: 'அறைக்கு சேருகிறது',
      alertEnterRoomNumber: 'தயவு செய்து அறை எண்ணை உள்ளிடவும்',
      overlayJoiningPeer: 'பியருடன் இணைக்கிறது',
      detected: 'கண்டறியப்பட்டது',
      detectedWord: 'வார்த்தை',
      token_Hi: 'வணக்கம்',
      token_i_heart_u: 'நான் ❤ நீ',
      token_NA: 'பொருந்தாது',
      controlsTitle: 'கண்காணிப்பு',
      clear: 'அழி',
      backspace: 'பின்செல்',
      space: 'வெற்றிடம்',
      recogSource: 'அறிதல் மூலம்',
      source_remote: 'தொலை (பியர்)',
      source_local: 'உள்ளூர் (நான்)'
    }
  };

  function getLang(){
    const urlParam = new URLSearchParams(window.location.search).get('lang');
    if (urlParam && translations[urlParam]) return urlParam;
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;
    return 'en';
  }

  function setLanguage(lang){
    if (!translations[lang]) return;
    localStorage.setItem(LANG_KEY, lang);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.pathname + '?' + url.searchParams.toString());
    } catch(e) { /* ignore */ }
    applyTranslations(document);
  }

  function format(str, params){
    if (!params) return str;
    return str.replace(/\{(\w+)\}/g, (_, k) => (params[k] != null ? params[k] : `{${k}}`));
  }

  function t(key, params){
    const lang = getLang();
    const pack = translations[lang] || translations.en;
    const val = pack[key] != null ? pack[key] : translations.en[key] || key;
    return format(val, params);
  }

  // Basic word dictionaries for demo translation of spelled words.
  const wordDict = {
    en: {
      'hello': 'hello',
      'love': 'love',
      'yes': 'yes',
      'no': 'no',
      'friend': 'friend',
      'room': 'room'
    },
    es: {
      'hello': 'hola',
      'love': 'amor',
      'yes': 'sí',
      'no': 'no',
      'friend': 'amigo',
      'room': 'sala'
    },
    fr: {
      'hello': 'bonjour',
      'love': 'amour',
      'yes': 'oui',
      'no': 'non',
      'friend': 'ami',
      'room': 'salle'
    },
    hi: {
      'hello': 'नमस्ते',
      'love': 'प्यार',
      'yes': 'हाँ',
      'no': 'नहीं',
      'friend': 'दोस्त',
      'room': 'कक्ष'
    },
    te: {
      'hello': 'హలో',
      'love': 'ప్రేమ',
      'yes': 'అవును',
      'no': 'కాదు',
      'friend': 'స్నేహితుడు',
      'room': 'గది'
    },
    ta: {
      'hello': 'வணக்கம்',
      'love': 'அன்பு',
      'yes': 'ஆம்',
      'no': 'இல்லை',
      'friend': 'நண்பர்',
      'room': 'அறை'
    }
  };

  function translateDetectedToken(token){
    if (!token) return '';
    const clean = token.trim();
    if (!clean) return '';
    // Special tokens from classifier
    if (clean === 'Hi') return t('token_Hi');
    if (clean === 'i<3u' || clean.toLowerCase() === 'i<3u') return t('token_i_heart_u');
    if (clean === 'NA') return t('token_NA');
    // Single letters: keep as-is
    if (/^[A-Za-z]$/.test(clean)) return clean;
    // Word dictionary
    const lang = getLang();
    const dict = wordDict[lang] || {};
    const lower = clean.toLowerCase();
    return dict[lower] || clean;
  }

  function applyTranslations(root){
    const lang = getLang();
    document.documentElement.setAttribute('lang', lang);
    // data-i18n textContent
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // data-i18n-placeholder -> placeholder attribute
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });
    // document title
    const titleKey = document.body && document.body.getAttribute('data-i18n-title');
    if (titleKey){
      document.title = t(titleKey);
    }
    // Update join/leave button by modifying its inner span only
    const joinBtn = document.getElementById('join-button');
    if (joinBtn){
      const span = joinBtn.querySelector('[data-i18n]');
      if (span){
        const key = joinBtn.dataset.state === 'leave' ? 'leaveRoom' : 'joinRoom';
        span.setAttribute('data-i18n', key);
        span.textContent = t(key);
      }
    }
    const roomInput = document.getElementById('room-input');
    if (roomInput){
      roomInput.setAttribute('placeholder', t('enterRoom'));
    }
    const brand = document.querySelector('.title');
    if (brand){ brand.textContent = t('brandShort'); }

    // Propagate lang to links navigating to app.html
    root.querySelectorAll('a[href="app.html"]').forEach(a => {
      try {
        const url = new URL(a.getAttribute('href'), window.location.href);
        url.searchParams.set('lang', lang);
        // Keep relative path without origin
        a.setAttribute('href', url.pathname + '?' + url.searchParams.toString());
      } catch (e) { /* ignore */ }
    });
  }

  function initLanguageSelector(){
    let sel = document.getElementById('lang-select');
    if (!sel){
      // optionally create if missing
      return;
    }
    const options = [
      {v:'en', label:'English'},
      {v:'es', label:'Español'},
      {v:'fr', label:'Français'},
      {v:'hi', label:'हिन्दी'},
      {v:'te', label:'తెలుగు'},
      {v:'ta', label:'தமிழ்'}
    ];
    sel.innerHTML = '';
    options.forEach(o => {
      const op = document.createElement('option');
      op.value = o.v; op.textContent = o.label; sel.appendChild(op);
    });
    sel.value = getLang();
    sel.addEventListener('change', () => {
      setLanguage(sel.value);
      applyTranslations(document);
    });
  }

  // expose globals
  window.SignLinkI18n = { t, setLanguage, getLang, applyTranslations, initLanguageSelector, translateDetectedToken };

  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(document);
    initLanguageSelector();
  });
})();
