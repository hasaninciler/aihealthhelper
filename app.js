

// ==================== temel değişkenler ====================

// hocam burada desteklenen dilleri tanımladım
const supportedLanguages = ["tr", "en"];
let currentLanguage = "tr";

// hocam burada pdf dosyasının yolu
const pdfFilePath = "../OYG103-250184009-hasaninciler-rapor.pdf"; // daha pdf metinini yazmadım

// hocam burada localstorage anahtarları
const STORAGE_KEYS = {
    LANGUAGE: 'aihh_language',
    SYMPTOM_RECORDS: 'aihh_symptom_records',
    FORM_DATA: 'aihh_form_data'
};

// maksimum kayıt limiti
const MAX_RECORDS = 20;


// ==================== dom manipülasyonu ====================

// hocam burada element seçimi fonksiyonları
function getElementById(id) {
    return document.getElementById(id);
}

function querySelector(selector) {
    return document.querySelector(selector);
}

function querySelectorAll(selector) {
    return document.querySelectorAll(selector);
}

// hocam burada template kullanımı - semptom kaydı oluşturma
function createSymptomRecordElement(record) {
    const template = document.getElementById('symptomRecordTemplate');
    const clone = template.content.cloneNode(true);
    
    // hocam burda element seçimi
    const recordCard = clone.querySelector('.aihh-record-card');
    const recordTitle = clone.querySelector('.aihh-record-title');
    const recordSymptoms = clone.querySelector('.aihh-record-symptoms');
    const recordSeverity = clone.querySelector('.aihh-record-severity');
    const recordDate = clone.querySelector('.aihh-record-date');
    const editBtn = clone.querySelector('.edit-record');
    const deleteBtn = clone.querySelector('.delete-record');
    
    // hocam burda içerik değişiklikleri
    recordCard.dataset.id = record.id;
    recordTitle.textContent = `Semptom Kaydı #${record.id}`;
    recordSymptoms.textContent = record.description;
    
    // hocam burda stil değişiklikleri
    const severityText = getSeverityText(record.severity);
    recordSeverity.textContent = severityText;
    recordSeverity.className = `aihh-record-severity ${record.severity}`;
    
    // hocam burda tarih formatlama
    const date = new Date(record.date);
    recordDate.textContent = date.toLocaleDateString(currentLanguage === 'tr' ? 'tr-TR' : 'en-US');
    
    // hocam burda data attribute'ları ekleme
    editBtn.dataset.id = record.id;
    deleteBtn.dataset.id = record.id;
    
    return clone;
}

// şiddet metnini döndüren fonksiyon
function getSeverityText(severity) {
    const severityMap = {
        'low': t('records.severityLow'),
        'medium': t('records.severityMedium'),
        'high': t('records.severityHigh')
    };
    return severityMap[severity] || severity;
}

// ==================== localstorage kullanımı ====================

// hocam burada veri kaydetme
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('localstorage kayıt hatası:', error);
        return false;
    }
}

// hocam burada veri okutma yaptırıyorum
function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('localstorage okuma hatası:', error);
        return null;
    }
}

// semptom kayıtlarını yönetme
function saveSymptomRecord(record) {
    const records = getSymptomRecords();
    
    // hocam burda limit yönetimi
    if (records.length >= MAX_RECORDS) {
        records.shift(); // hocam en eski kaydı siliyorum
    }
    
    records.push(record);
    return saveToLocalStorage(STORAGE_KEYS.SYMPTOM_RECORDS, records);
}

function getSymptomRecords() {
    const records = getFromLocalStorage(STORAGE_KEYS.SYMPTOM_RECORDS);
    return records || [];
}

function deleteSymptomRecord(id) {
    const records = getSymptomRecords();
    const filteredRecords = records.filter(record => record.id !== id);
    return saveToLocalStorage(STORAGE_KEYS.SYMPTOM_RECORDS, filteredRecords);
}

function clearAllSymptomRecords() {
    return saveToLocalStorage(STORAGE_KEYS.SYMPTOM_RECORDS, []);
}

function updateSymptomRecord(id, updatedData) {
    const records = getSymptomRecords();
    const index = records.findIndex(record => record.id === id);
    if (index !== -1) {
        records[index] = { ...records[index], ...updatedData };
        return saveToLocalStorage(STORAGE_KEYS.SYMPTOM_RECORDS, records);
    }
    return false;
}

// ==================== events kullanımı ====================

// hocam burada temel event listeners
function setupEventListeners() {
    // hocam burda click event'leri
    const viewProjectButton = getElementById('viewProjectButton');
    if (viewProjectButton) {
        viewProjectButton.addEventListener('click', handleProjectButtonClick);
    }
    
    const scrollToFeaturesButton = getElementById('scrollToFeaturesButton');
    if (scrollToFeaturesButton) {
        scrollToFeaturesButton.addEventListener('click', handleScrollToFeatures);
    }
    
    // hocam burda form event'leri
    const earlyAccessForm = getElementById('earlyAccessForm');
    if (earlyAccessForm) {
        earlyAccessForm.addEventListener('submit', handleEarlyAccessSubmit);
    }
    
    const symptomForm = getElementById('symptomForm');
    if (symptomForm) {
        symptomForm.addEventListener('submit', handleSymptomFormSubmit);
    }
    
    // hocam burda mouse event'leri
    const recordCards = querySelectorAll('.aihh-record-card');
    recordCards.forEach(card => {
        card.addEventListener('mouseenter', handleRecordMouseEnter);
        card.addEventListener('mouseleave', handleRecordMouseLeave);
    });
    
    // hocam burda keyboard event'leri
    document.addEventListener('keydown', handleGlobalKeydown);
    
    // hocam burda event delegation
    setupEventDelegation();
    
    // hocam burda regexp test butonları
    setupRegexpValidation();
}

// hocam burada event delegation örneği
function setupEventDelegation() {
    const recordsList = getElementById('recordsList');
    const eventContainer = getElementById('eventDelegationContainer');
    
    // hocam burda semptom kayıtları için event delegation
    if (recordsList) {
        recordsList.addEventListener('click', function(event) {
            // hocam burda event.target kullanımı
            const target = event.target;
            const recordCard = target.closest('.aihh-record-card');
            
            if (!recordCard) return;
            
            if (target.classList.contains('delete-record')) {
                const id = target.dataset.id;
                deleteRecordHandler(id);
            } else if (target.classList.contains('edit-record')) {
                const id = target.dataset.id;
                editRecordHandler(id);
            } else {
                // hocam burda kartın kendisine tıklanırsa
                recordCard.classList.toggle('selected');
            }
        });
    }
    
    // hocam burda event delegation demo için
    if (eventContainer) {
        eventContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('event-button')) {
                const buttonId = event.target.dataset.id;
                addEventLog(`Buton ${buttonId} tıklandı (event delegation ile)`);
            }
        });
    }
    
    // hocam burda add event button
    const addEventButton = getElementById('addEventButton');
    if (addEventButton) {
        addEventButton.addEventListener('click', addNewEventButton);
    }
    
    // hocam burda remove event button
    const removeEventButton = getElementById('removeEventButton');
    if (removeEventButton) {
        removeEventButton.addEventListener('click', removeLastEventButton);
    }
}

// hocam burada event handler fonksiyonları
function handleProjectButtonClick(event) {
    event.preventDefault();
    try {
        if (pdfFilePath) {
            window.open(pdfFilePath, '_blank');
        } else {
            alert(t('pdf.error'));
        }
    } catch (error) {
        console.error('pdf açma hatası:', error);
        alert(t('pdf.error'));
    }
}

function handleScrollToFeatures(event) {
    event.preventDefault();
    const featuresSection = getElementById('features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleEarlyAccessSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // hocam burda form validation
    const fullName = formData.get('fullName')?.trim();
    const email = formData.get('email')?.trim();
    const age = parseInt(formData.get('age'));
    const userType = formData.get('userType');
    const message = formData.get('message')?.trim();
    
    let isValid = true;
    let errorMessage = '';
    
    if (!fullName || fullName.length < 3) {
        isValid = false;
        errorMessage = t('form.error.fullName');
    } else if (!email || !validateEmail(email)) {
        isValid = false;
        errorMessage = t('form.error.email');
    } else if (!age || age < 12) {
        isValid = false;
        errorMessage = t('form.error.age');
    } else if (!userType) {
        isValid = false;
        errorMessage = t('form.error.userType');
    } else if (!message || message.length < 10) {
        isValid = false;
        errorMessage = t('form.error.message');
    }
    
    const feedbackElement = getElementById('formFeedback');
    
    if (!isValid) {
        feedbackElement.textContent = errorMessage;
        feedbackElement.className = 'aihh-form-feedback aihh-form-feedback--error';
        return;
    }
    
    // hocam burda başarılı gönderim
    feedbackElement.textContent = t('form.success');
    feedbackElement.className = 'aihh-form-feedback aihh-form-feedback--success';
    
    // hocam burda formu temizle
    form.reset();
    
    // hocam burda localstorage'a kaydet
    const formDataObj = {
        fullName,
        email,
        age,
        userType,
        message,
        timestamp: new Date().toISOString()
    };
    
    saveToLocalStorage(STORAGE_KEYS.FORM_DATA, formDataObj);
}

function handleSymptomFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const description = getElementById('symptomDescription').value.trim();
    const severity = getElementById('symptomSeverity').value;
    const date = getElementById('symptomDate').value;
    
    if (!description || description.length < 10) {
        alert(t('form.error.message'));
        return;
    }
    
    if (!severity) {
        alert('Lütfen şiddet seviyesi seçin');
        return;
    }
    
    if (!date) {
        alert('Lütfen tarih seçin');
        return;
    }
    
    const newRecord = {
        id: Date.now().toString(),
        description,
        severity,
        date,
        createdAt: new Date().toISOString()
    };
    
    if (saveSymptomRecord(newRecord)) {
        displaySymptomRecords();
        form.reset();
        getElementById('symptomDate').valueAsDate = new Date();
    }
}

function handleRecordMouseEnter(event) {
    event.currentTarget.style.transform = 'translateY(-4px)';
    event.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
}

function handleRecordMouseLeave(event) {
    event.currentTarget.style.transform = 'translateY(0)';
    event.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
}

function handleGlobalKeydown(event) {
    // hocam burda esc tuşu ile formları temizleme
    if (event.key === 'Escape') {
        const forms = querySelectorAll('form');
        forms.forEach(form => {
            if (form.checkVisibility()) {
                form.reset();
            }
        });
    }
}

// hocam burada record işlemleri
function deleteRecordHandler(id) {
    if (confirm('Bu kaydı silmek istediğinize emin misiniz?')) {
        if (deleteSymptomRecord(id)) {
            displaySymptomRecords();
        }
    }
}

function editRecordHandler(id) {
    const records = getSymptomRecords();
    const record = records.find(r => r.id === id);
    if (record) {
        getElementById('symptomDescription').value = record.description;
        getElementById('symptomSeverity').value = record.severity;
        getElementById('symptomDate').value = record.date;
        
        // hocam burda formu güncelleme moduna al
        const submitButton = symptomForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Güncelle';
        submitButton.dataset.editId = id;
        
        // hocam burda form submit handler'ını değiştir
        symptomForm.onsubmit = function(event) {
            event.preventDefault();
            const updatedData = {
                description: getElementById('symptomDescription').value.trim(),
                severity: getElementById('symptomSeverity').value,
                date: getElementById('symptomDate').value,
                updatedAt: new Date().toISOString()
            };
            
            if (updateSymptomRecord(id, updatedData)) {
                displaySymptomRecords();
                symptomForm.reset();
                submitButton.textContent = t('records.saveBtn');
                delete submitButton.dataset.editId;
                symptomForm.onsubmit = handleSymptomFormSubmit;
            }
        };
    }
}

// hocam burada event delegation demo fonksiyonları
let buttonCounter = 1;

function addNewEventButton() {
    const container = getElementById('eventDelegationContainer');
    const button = document.createElement('button');
    button.className = 'event-button';
    button.textContent = `Buton ${buttonCounter}`;
    button.dataset.id = buttonCounter;
    container.appendChild(button);
    buttonCounter++;
    addEventLog(`Yeni buton eklendi: Buton ${buttonCounter - 1}`);
}

function removeLastEventButton() {
    const container = getElementById('eventDelegationContainer');
    const buttons = container.querySelectorAll('.event-button');
    if (buttons.length > 0) {
        const lastButton = buttons[buttons.length - 1];
        const buttonId = lastButton.dataset.id;
        lastButton.remove();
        addEventLog(`Buton ${buttonId} silindi`);
    }
}

function addEventLog(message) {
    const logMessages = getElementById('logMessages');
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logMessages.appendChild(logEntry);
    logMessages.scrollTop = logMessages.scrollHeight;
}

// ==================== regexp kullanımı ====================

// hocam burada temel pattern matching
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^(\+90|0)?\s*(5\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// hocam burada string metotları örnekleri
function validateInput(input, type) {
    if (!input || input.trim().length === 0) {
        return false;
    }
    
    const trimmedInput = input.trim();
    
    switch(type) {
        case 'email':
            return validateEmail(trimmedInput);
        case 'phone':
            return validatePhone(trimmedInput);
        case 'name':
            return trimmedInput.length >= 2 && /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(trimmedInput);
        case 'text':
            return trimmedInput.length >= 3;
        default:
            return true;
    }
}

// hocam burada regexp test fonksiyonları
function setupRegexpValidation() {
    const validateEmailBtn = getElementById('validateEmailBtn');
    const validatePhoneBtn = getElementById('validatePhoneBtn');
    const validateCustomBtn = getElementById('validateCustomBtn');
    
    if (validateEmailBtn) {
        validateEmailBtn.addEventListener('click', function() {
            const emailInput = getElementById('testEmail');
            const resultDiv = getElementById('emailResult');
            
            if (validateEmail(emailInput.value)) {
                resultDiv.textContent = currentLanguage === 'tr' 
                    ? '✓ Geçerli e-posta adresi' 
                    : '✓ Valid email address';
                resultDiv.className = 'aihh-validation-result success';
            } else {
                resultDiv.textContent = currentLanguage === 'tr'
                    ? '✗ Geçersiz e-posta adresi'
                    : '✗ Invalid email address';
                resultDiv.className = 'aihh-validation-result error';
            }
        });
    }
    
    if (validatePhoneBtn) {
        validatePhoneBtn.addEventListener('click', function() {
            const phoneInput = getElementById('testPhone');
            const resultDiv = getElementById('phoneResult');
            
            if (validatePhone(phoneInput.value)) {
                resultDiv.textContent = currentLanguage === 'tr'
                    ? '✓ Geçerli telefon numarası'
                    : '✓ Valid phone number';
                resultDiv.className = 'aihh-validation-result success';
            } else {
                resultDiv.textContent = currentLanguage === 'tr'
                    ? '✗ Geçersiz telefon numarası'
                    : '✗ Invalid phone number';
                resultDiv.className = 'aihh-validation-result error';
            }
        });
    }
    
    if (validateCustomBtn) {
        validateCustomBtn.addEventListener('click', function() {
            const regexInput = getElementById('customRegex');
            const testInput = getElementById('customTest');
            const resultDiv = getElementById('customResult');
            
            try {
                const regex = new RegExp(regexInput.value);
                const isValid = regex.test(testInput.value);
                
                if (isValid) {
                    resultDiv.textContent = currentLanguage === 'tr'
                        ? `✓ "${testInput.value}" pattern ile eşleşiyor`
                        : `✓ "${testInput.value}" matches the pattern`;
                    resultDiv.className = 'aihh-validation-result success';
                } else {
                    resultDiv.textContent = currentLanguage === 'tr'
                        ? `✗ "${testInput.value}" pattern ile eşleşmiyor`
                        : `✗ "${testInput.value}" doesn't match the pattern`;
                    resultDiv.className = 'aihh-validation-result error';
                }
            } catch (error) {
                resultDiv.textContent = currentLanguage === 'tr'
                    ? `✗ Geçersiz regex pattern: ${error.message}`
                    : `✗ Invalid regex pattern: ${error.message}`;
                resultDiv.className = 'aihh-validation-result error';
            }
        });
    }
}

// ==================== dil işlemleri ====================

function initLanguage() {
    const storedLang = getFromLocalStorage(STORAGE_KEYS.LANGUAGE);
    const browserLang = navigator.language.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    const lang = storedLang || browserLang;
    applyLanguage(lang);
}

function setupLanguageSwitch() {
    const langButtons = querySelectorAll('.aihh-lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (supportedLanguages.includes(lang)) {
                applyLanguage(lang);
                saveToLocalStorage(STORAGE_KEYS.LANGUAGE, lang);
            }
        });
    });
}

function applyLanguage(lang) {
    if (!supportedLanguages.includes(lang)) return;
    
    currentLanguage = lang;
    document.body.dataset.currentLang = lang;
    
    // hocam burada tüm çevirileri uygula
    const elements = querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
    
    // hocam burada aktif dil butonunu güncelle
    updateActiveLangButton(lang);
    
    // hocam burada kayıtları yenile
    displaySymptomRecords();
}

function updateActiveLangButton(lang) {
    const langButtons = querySelectorAll('.aihh-lang-btn');
    langButtons.forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('aihh-lang-btn--active');
        } else {
            button.classList.remove('aihh-lang-btn--active');
        }
    });
}

// ==================== semptom kayıtlarını gösterme ====================

function displaySymptomRecords() {
    const recordsList = getElementById('recordsList');
    const emptyMessage = getElementById('emptyRecordsMessage');
    
    if (!recordsList) return;
    
    recordsList.innerHTML = '';
    const records = getSymptomRecords();
    
    if (records.length === 0) {
        if (emptyMessage) {
            emptyMessage.style.display = 'block';
        }
        return;
    }
    
    if (emptyMessage) {
        emptyMessage.style.display = 'none';
    }
    
    records.forEach(record => {
        const recordElement = createSymptomRecordElement(record);
        recordsList.appendChild(recordElement);
    });
}

// ==================== loading screen ====================

function setupLoadingScreen() {
    const loadingElement = getElementById('aihh-loading');
    const progressFill = getElementById('loadingProgress');
    const percentageElement = getElementById('loadingPercentage');
    const messages = querySelectorAll('.aihh-message');
    
    if (!loadingElement || !progressFill || !percentageElement) return;
    
    let progress = 0;
    let currentMessage = 0;
    
    function updateProgress() {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = `${progress}%`;
        percentageElement.textContent = `${Math.round(progress)}%`;
        
        if (progress >= 25 && currentMessage === 0) {
            showNextMessage();
        } else if (progress >= 50 && currentMessage === 1) {
            showNextMessage();
        } else if (progress >= 75 && currentMessage === 2) {
            showNextMessage();
        }
        
        if (progress < 100) {
            setTimeout(updateProgress, 200);
        } else {
            setTimeout(finishLoading, 500);
        }
    }
    
    function showNextMessage() {
        messages[currentMessage]?.classList.remove('active');
        currentMessage = (currentMessage + 1) % messages.length;
        messages[currentMessage]?.classList.add('active');
    }
    
    function finishLoading() {
        loadingElement.classList.add('hidden');
        setTimeout(() => {
            loadingElement.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 800);
    }
    
    document.body.style.overflow = 'hidden';
    setTimeout(updateProgress, 500);
}

// ==================== smooth scroll ====================

function setupSmoothScroll() {
    const links = querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = getElementById(href.substring(1));
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== navbar enhancement ====================

function setupEnhancedNavbar() {
    const header = querySelector('.aihh-header');
    const mobileToggle = querySelector('.aihh-mobile-toggle');
    const mobileNav = querySelector('.aihh-mobile-nav');
    const progressBar = querySelector('.aihh-progress-bar');
    
    if (!header || !progressBar) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 50;
        header.classList.toggle('scrolled', scrolled);
        
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / (docHeight - winHeight)) * 100;
        progressBar.style.width = `${progress}%`;
    });
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileNav.setAttribute('aria-hidden', isExpanded);
            
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });
    }
}

// ==================== clear storage button ====================

function setupClearStorageButton() {
    const clearBtn = getElementById('clearStorageBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm(currentLanguage === 'tr' 
                ? 'Tüm kayıtları silmek istediğinize emin misiniz? Bu işlem geri alınamaz.' 
                : 'Are you sure you want to delete all records? This action cannot be undone.')) {
                if (clearAllSymptomRecords()) {
                    displaySymptomRecords();
                    alert(currentLanguage === 'tr' 
                        ? 'Tüm kayıtlar silindi.' 
                        : 'All records deleted.');
                }
            }
        });
    }
}

// ==================== ana setup ====================

document.addEventListener('DOMContentLoaded', function() {
    // hocam burada tüm setup fonksiyonlarını çağırıyorum
    setupLoadingScreen();
    initLanguage();
    setupLanguageSwitch();
    setupEventListeners();
    setupSmoothScroll();
    setupEnhancedNavbar();
    setupClearStorageButton();
    displaySymptomRecords();
    
    //  burada tarih inputu için bugünün tarihini set et
    const dateInput = getElementById('symptomDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }
    
    //  burada event delegation demo için ilk butonu ekle
    addNewEventButton();
    addNewEventButton();
    addNewEventButton();
    
    console.log('AI Health Helper uygulaması başlatıldı');
});


// NOT: Hocam normal de api key böyle acık acık yazılmaz ama bu test projesi oldugu için şuanlık bir problem olmaz ilerde backende saklarız .env 
const DEEPSEEK_API_KEY = "sk-ef005247028648b4ad2fd3ee228b4886";
const PROXY_API_URL = "http://localhost:3000/api/chat";
// deepseek apisi kullandım 

// burda chatteki elementleri alıyorum
const chatWidget = {
    toggleBtn: document.getElementById('chatToggleBtn'),
    window: document.getElementById('chatWindow'),
    closeBtn: document.getElementById('closeChatBtn'),
    form: document.getElementById('chatForm'),
    input: document.getElementById('userMessageInput'),
    messagesContainer: document.getElementById('chatMessages'),
    sendBtn: document.getElementById('sendMessageBtn')
};

// otamatik olarak sohbet açıldıgında sistemin kendi mesajı
const SYSTEM_PROMPT = `
Sen "AI Health Helper" adında yardımsever bir sağlık asistanısın. 
Kullanıcılarla nazik, empatik ve net bir dille konuş. 
Semptomları hakkında bilgi verirken her zaman bunun bir tıbbi tavsiye olmadığını, 
kesin teşhis için doktora gitmeleri gerektiğini hatırlat. 
Cevapların kısa, eğitici ve maddeler halinde okunabilir olsun.
`;

// event Listeners
if (chatWidget.toggleBtn) {
    // sohbet penceresini aç/kapat
    chatWidget.toggleBtn.addEventListener('click', () => {
        chatWidget.window.classList.remove('hidden');
        chatWidget.toggleBtn.classList.add('hidden');
        if (window.innerWidth <= 480) document.body.style.overflow = 'hidden';
    });

    chatWidget.closeBtn.addEventListener('click', () => {
        chatWidget.window.classList.add('hidden');
        chatWidget.toggleBtn.classList.remove('hidden');
        document.body.style.overflow = '';
    });

    // mesaj gönderme
    chatWidget.form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = chatWidget.input.value.trim();
        
        if (!userMessage) return;

        // kullanıcı mesajını ekrana ekle
        appendMessage('user', userMessage);
        chatWidget.input.value = '';
        chatWidget.input.focus();

        // yükleniyor kısmı
        const loadingId = showTypingIndicator();

        try {
            // serverdan apiye istek 
            const aiResponse = await callDeepSeekAPI(userMessage);
            
            // 4. loading yazısını kaldır ve cevabı ekle
            removeTypingIndicator(loadingId);
            appendMessage('ai', aiResponse);

        } catch (error) {
            console.error('api:', error);
            removeTypingIndicator(loadingId);
            appendMessage('error', 'Üzgünüm, şu an bağlantıda bir sorun var. Lütfen proxy sunucusunun çalıştığından emin olun.');
        }
    });
}

// gelen mesjaı sohbete basan fonksiyon
function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    if (sender === 'user') {
        messageDiv.classList.add('user-message');
    } else if (sender === 'error') {
        messageDiv.classList.add('error-message');
    } else {
        messageDiv.classList.add('ai-message');
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    messageDiv.innerHTML = text;
    chatWidget.messagesContainer.appendChild(messageDiv);
    
    chatWidget.messagesContainer.scrollTop = chatWidget.messagesContainer.scrollHeight;
}

async function callDeepSeekAPI(userMessage) {
    const response = await fetch(PROXY_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: userMessage,
            apiKey: DEEPSEEK_API_KEY
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("api hata detayı:", errorData);
        throw new Error(`api hatası: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0].message && data.choices[0].message.content) {
        return data.choices[0].message.content;
    } else {
        console.error("beklenmeyen veri formatı:", data);
        throw new Error('beklenmeye api yanıt formatı');
    }
}

function showTypingIndicator() {
    const id = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatWidget.messagesContainer.appendChild(typingDiv);
    chatWidget.messagesContainer.scrollTop = chatWidget.messagesContainer.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    const element = document.getElementById(id);
    if (element) element.remove();
}