// ==================== çeviri sistemi ====================

// hocam burada tüm çevirileri tanımladım
const translations = {
    // loading
    "loading.text": {
        tr: "Yükleniyor...",
        en: "Loading..."
    },
    "loading.message1": {
        tr: "Sağlık asistanınız hazırlanıyor...",
        en: "Preparing your health assistant..."
    },
    "loading.message2": {
        tr: "AI modelleri yükleniyor...",
        en: "Loading AI models..."
    },
    "loading.message3": {
        tr: "Semptom analiz modülü hazırlanıyor...",
        en: "Preparing symptom analysis module..."
    },
    "loading.message4": {
        tr: "Neredeyse hazırız!",
        en: "Almost ready!"
    },

    // nav
    "nav.logoText": {
        tr: "AI Health Helper",
        en: "AI Health Helper"
    },
    "nav.features": {
        tr: "Özellikler",
        en: "Features"
    },
    "nav.howItWorks": {
        tr: "Nasıl Çalışır?",
        en: "How It Works"
    },
    "nav.faq": {
        tr: "SSS",
        en: "FAQ"
    },
    "nav.records": {
        tr: "Kayıtlarım",
        en: "My Records"
    },
    "nav.contact": {
        tr: "Early Access",
        en: "Early Access"
    },

    // hero
    "hero.titlePrefix": {
        tr: "Semptomlarını anlat,",
        en: "Describe your symptoms,"
    },
    "hero.titleSuffix": {
        tr: "sana eğitim amaçlı rehberlik etsin.",
        en: "get educational guidance."
    },
    "hero.subtitle": {
        tr: "AI Health Helper; semptom analizi, acil durum rehberi, cilt analizi ve wellness önerilerini tek bir uygulamada birleştirir. Amaç, kullanıcıları bilinçlendirmek ve doğru uzmana başvurmaları için yol göstermektir – <strong>asla doktor yerine geçmez.</strong>",
        en: "AI Health Helper combines symptom analysis, emergency guidance, skin analysis and wellness suggestions in one app. The goal is to educate users and guide them to the right specialist – <strong>never replaces a doctor.</strong>"
    },
    "hero.badge.symptom": {
        tr: "Semptom Analizi",
        en: "Symptom Analysis"
    },
    "hero.badge.emergency": {
        tr: "Acil Durum / İlk Yardım",
        en: "Emergency / First Aid"
    },
    "hero.badge.skin": {
        tr: "Cilt Görüntü Analizi",
        en: "Skin Image Analysis"
    },
    "hero.badge.mental": {
        tr: "Genel & Ruh Sağlığı",
        en: "General & Mental Health"
    },
    "hero.btn.pdf": {
        tr: "Projeyi Göster",
        en: "Show Project"
    },
    "hero.btn.features": {
        tr: "Özelliklere göz at",
        en: "Browse Features"
    },
    "hero.note": {
        tr: "Uygulama yalnızca eğitim ve bilgilendirme amaçlıdır. Acil veya ciddi durumlarda mutlaka bir sağlık profesyoneline ve 112 acil hattına başvurulmalıdır.",
        en: "The app is for educational and informational purposes only. In urgent or serious situations, always contact a healthcare professional and emergency number 112."
    },
    "hero.stat1.title": {
        tr: "Semptom Kaydı",
        en: "Symptom Record"
    },
    "hero.stat1.text": {
        tr: "Belirtilerini adım adım kaydet",
        en: "Record your symptoms step by step"
    },
    "hero.stat2.title": {
        tr: "AI Yorumları",
        en: "AI Comments"
    },
    "hero.stat2.text": {
        tr: "Olası açıklamalar ve risk uyarıları",
        en: "Possible explanations and risk warnings"
    },

    // features
    "features.kicker": {
        tr: "ÖZELLİKLER",
        en: "FEATURES"
    },
    "features.title": {
        tr: "Tek uygulamada onlarca sağlık modülü",
        en: "Dozens of health modules in one app"
    },
    "features.desc": {
        tr: "AI Health Helper; günlük sağlık sorularından acil durumda ne yapman gerektiğine kadar birçok senaryoda eğitim amaçlı rehberlik sunar.",
        en: "AI Health Helper provides educational guidance in many scenarios from daily health questions to what to do in emergencies."
    },
    "features.f1.title": {
        tr: "Semptom Analizi & Olası Nedenler",
        en: "Symptom Analysis & Possible Causes"
    },
    "features.f1.text": {
        tr: "Kullanıcı semptomlarını (süre, şiddet, eşlik eden belirtiler) adım adım girer; yapay zekâ, genel tıbbi bilgilerden yararlanarak olası açıklamaları ve dikkat edilmesi gereken risk işaretlerini özetler.",
        en: "User enters symptoms step by step (duration, intensity, accompanying symptoms); AI summarizes possible explanations and risk signs based on general medical knowledge."
    },
    "features.f1.tag1": {
        tr: "Ön değerlendirme",
        en: "Pre-assessment"
    },
    "features.f1.tag2": {
        tr: "Triyaj bilinci",
        en: "Triage awareness"
    },
    "features.f1.tag3": {
        tr: "Uzman önerisi",
        en: "Specialist suggestion"
    },
    "features.f2.title": {
        tr: "Acil Durum & İlk Yardım Rehberi",
        en: "Emergency & First Aid Guide"
    },
    "features.f2.text": {
        tr: "Göğüs ağrısı, nefes darlığı, ani bilinç kaybı gibi riskli belirtilerde; 112 çağrısı, temel ilk yardım adımları ve yapılmaması gerekenler adım adım gösterilir.",
        en: "In risky symptoms like chest pain, shortness of breath, sudden loss of consciousness; 112 call, basic first aid steps and what not to do are shown step by step."
    },
    "features.f2.tag1": {
        tr: "112 yönlendirmesi",
        en: "112 guidance"
    },
    "features.f2.tag2": {
        tr: "Adım adım rehber",
        en: "Step by step guide"
    },
    "features.f3.title": {
        tr: "Fotoğrafla Cilt Değerlendirmesi",
        en: "Skin Assessment with Photo"
    },
    "features.f3.text": {
        tr: "Kullanıcı, cilt lezyonunun veya döküntünün fotoğrafını yükler; sistem, görseli analiz ederek genel risk faktörleri ve hangi uzmanlık alanına başvurulabileceği hakkında bilgilendirici geri bildirim sağlar.",
        en: "User uploads photo of skin lesion or rash; system analyzes image and provides informative feedback about general risk factors and which specialty to consult."
    },
    "features.f3.tag1": {
        tr: "Dermatoloji odağı",
        en: "Dermatology focus"
    },
    "features.f3.tag2": {
        tr: "Görsel analiz",
        en: "Visual analysis"
    },

    // table
    "table.head.severity": {
        tr: "Şiddet",
        en: "Severity"
    },
    "table.head.description": {
        tr: "Açıklama",
        en: "Description"
    },
    "table.head.action": {
        tr: "Önerilen Aksiyon",
        en: "Recommended Action"
    },
    "table.row1.col1": {
        tr: "Düşük",
        en: "Low"
    },
    "table.row1.col2": {
        tr: "Hafif, kısa süreli, günlük yaşamı çok bozmayan belirtiler",
        en: "Mild, short-term symptoms that don't disrupt daily life much"
    },
    "table.row1.col3": {
        tr: "Evde takip, gerekirse aile hekimi",
        en: "Home monitoring, family doctor if needed"
    },
    "table.row2.col1": {
        tr: "Orta",
        en: "Medium"
    },
    "table.row2.col2": {
        tr: "Tekrarlayan veya birkaç gün süren, rahatsızlık veren belirtiler",
        en: "Recurring or several-day symptoms causing discomfort"
    },
    "table.row2.col3": {
        tr: "Randevu alarak muayene",
        en: "Examination by appointment"
    },
    "table.row3.col1": {
        tr: "Yüksek",
        en: "High"
    },
    "table.row3.col2": {
        tr: "Şiddetli, ani başlayan veya ciddi hastalık şüphesi uyandıran belirtiler",
        en: "Severe, sudden onset or symptoms suggesting serious illness"
    },
    "table.row3.col3": {
        tr: "En kısa sürede hastane / acil servis",
        en: "Hospital / emergency room as soon as possible"
    },

    // how it works
    "how.kicker": {
        tr: "NASIL ÇALIŞIR?",
        en: "HOW IT WORKS"
    },
    "how.title": {
        tr: "4 adımda AI Health Helper deneyimi",
        en: "AI Health Helper experience in 4 steps"
    },
    "how.desc": {
        tr: "Kullanıcı, semptomlarını ve sağlık geçmişini yapay zekâya anlatır; sistem bunları klinik rehberler ve genel tıbbi bilgi çerçevesinde yorumlayarak kullanıcıya <strong>bilgilendirici</strong> geri bildirim sunar.",
        en: "User tells symptoms and medical history to AI; system interprets them within clinical guidelines and general medical knowledge to provide <strong>informative</strong> feedback."
    },
    "how.step1.title": {
        tr: "Semptomlarını ve öykünü gir",
        en: "Enter your symptoms and history"
    },
    "how.step1.text": {
        tr: "Belirtiler ne zamandır var, şiddeti nasıl, daha önce teşhis konmuş bir hastalığın var mı? Sistem, bu bilgileri triyağa benzer bir mantıkla toplar.",
        en: "How long have symptoms been present, how severe, any previous diagnoses? System collects this information with triage-like logic."
    },
    "how.step2.title": {
        tr: "AI ile ön değerlendirme al",
        en: "Get pre-assessment with AI"
    },
    "how.step2.text": {
        tr: "Yapay zekâ; seninle benzer örneklerden ve klinik literatürden beslenerek olası açıklamaları, hangi durumda acil başvuru gerektiğini ve hangi branşlara görünmenin mantıklı olabileceğini özetler.",
        en: "AI; fed from similar examples and clinical literature, summarizes possible explanations, when emergency application is needed, and which specialties to see."
    },
    "how.step3.title": {
        tr: "Uyarılar & risk işaretlerini gör",
        en: "See warnings & risk signs"
    },
    "how.step3.text": {
        tr: "Yüksek riskli belirtiler (şiddetli göğüs ağrısı, ani felç bulguları vb.) olduğunda sistem, kullanıcıyı gecikmeden acil servise ve 112'ye yönlendirir.",
        en: "When high-risk symptoms (severe chest pain, sudden stroke signs etc.) occur, system directs user to emergency room and 112 without delay."
    },
    "how.step4.title": {
        tr: "Uzun vadede sağlık verilerini takip et",
        en: "Track health data in long term"
    },
    "how.step4.text": {
        tr: "Tekrarlayan semptomları, ilaç kullanımını ve ruh hâli dalgalanmalarını kayıt altında tutarak, doktor görüşmelerine daha hazırlanmış gitmeni sağlar.",
        en: "By keeping records of recurring symptoms, medication use and mood fluctuations, helps you go to doctor meetings more prepared."
    },

    // regexp
    "regexp.kicker": {
        tr: "REGEXP TEST",
        en: "REGEXP TEST"
    },
    "regexp.title": {
        tr: "E-posta ve Telefon Doğrulama",
        en: "Email and Phone Validation"
    },
    "regexp.desc": {
        tr: "Aşağıdaki formda e-posta ve telefon numarası doğrulama testi yapabilirsiniz.",
        en: "You can test email and phone number validation in the form below."
    },
    "regexp.emailLabel": {
        tr: "E-posta Adresi",
        en: "Email Address"
    },
    "regexp.emailPlaceholder": {
        tr: "ornek@mail.com",
        en: "example@mail.com"
    },
    "regexp.phoneLabel": {
        tr: "Telefon Numarası",
        en: "Phone Number"
    },
    "regexp.phonePlaceholder": {
        tr: "5551234567",
        en: "5551234567"
    },
    "regexp.customLabel": {
        tr: "Özel Regex Pattern",
        en: "Custom Regex Pattern"
    },
    "regexp.customPlaceholder": {
        tr: "/^[a-zA-Z]+$/",
        en: "/^[a-zA-Z]+$/"
    },
    "regexp.customTestPlaceholder": {
        tr: "Test metni",
        en: "Test text"
    },
    "regexp.validateBtn": {
        tr: "Doğrula",
        en: "Validate"
    },
    "regexp.validateCustomBtn": {
        tr: "Test Et",
        en: "Test"
    },

    // records
    "records.kicker": {
        tr: "SEMPTON KAYITLARI",
        en: "SYMPTOM RECORDS"
    },
    "records.title": {
        tr: "Semptom Kayıtlarınız",
        en: "Your Symptom Records"
    },
    "records.desc": {
        tr: "Semptomlarınızı kaydedin ve geçmiş kayıtlarınızı görüntüleyin.",
        en: "Record your symptoms and view your past records."
    },
    "records.symptomLabel": {
        tr: "Semptom Açıklaması",
        en: "Symptom Description"
    },
    "records.symptomPlaceholder": {
        tr: "Semptomlarınızı detaylı şekilde açıklayın...",
        en: "Describe your symptoms in detail..."
    },
    "records.severityLabel": {
        tr: "Şiddet Seviyesi",
        en: "Severity Level"
    },
    "records.selectOption": {
        tr: "Seçiniz",
        en: "Select"
    },
    "records.severityLow": {
        tr: "Düşük",
        en: "Low"
    },
    "records.severityMedium": {
        tr: "Orta",
        en: "Medium"
    },
    "records.severityHigh": {
        tr: "Yüksek",
        en: "High"
    },
    "records.dateLabel": {
        tr: "Tarih",
        en: "Date"
    },
    "records.saveBtn": {
        tr: "Kaydet",
        en: "Save"
    },
    "records.clearBtn": {
        tr: "Tüm Kayıtları Temizle",
        en: "Clear All Records"
    },
    "records.listTitle": {
        tr: "Kayıtlı Semptomlar",
        en: "Recorded Symptoms"
    },
    "records.emptyMessage": {
        tr: "Henüz kayıtlı semptomunuz yok.",
        en: "You don't have any recorded symptoms yet."
    },

    // events
    "events.kicker": {
        tr: "EVENT DELEGATION",
        en: "EVENT DELEGATION"
    },
    "events.title": {
        tr: "Event Delegation Demo",
        en: "Event Delegation Demo"
    },
    "events.desc": {
        tr: "Aşağıdaki butonlara tıklayarak event delegation örneğini görebilirsiniz.",
        en: "You can see event delegation example by clicking buttons below."
    },
    "events.addBtn": {
        tr: "Yeni Buton Ekle",
        en: "Add New Button"
    },
    "events.removeBtn": {
        tr: "Son Butonu Sil",
        en: "Remove Last Button"
    },
    "events.logTitle": {
        tr: "Event Log",
        en: "Event Log"
    },

    // safety
    "safety.title": {
        tr: "Önemli Uyarı:",
        en: "Important Warning:"
    },
    "safety.text": {
        tr: " AI Health Helper bir doktor, hastane veya acil servis değildir. Gerçek bir teşhis koymaz, tedavi önermez ve reçete yazmaz.",
        en: " AI Health Helper is not a doctor, hospital or emergency service. It does not provide real diagnosis, treatment or prescription."
    },
    "safety.item1": {
        tr: "Ciddi veya ani başlayan şikâyetlerde mutlaka bir sağlık profesyoneline başvur.",
        en: "In serious or sudden complaints, always consult a healthcare professional."
    },
    "safety.item2": {
        tr: "Riskli belirtilerde (göğüs ağrısı, nefes darlığı, bilinç kaybı vb.) 112 acil hattını ara.",
        en: "In risky symptoms (chest pain, shortness of breath, loss of consciousness etc.) call emergency number 112."
    },
    "safety.item3": {
        tr: "Uygulama yalnızca bilgilendirici ve eğitim amaçlıdır; tıbbi kararlarını tek başına buna dayandırma.",
        en: "App is only informative and for educational purposes; do not base your medical decisions solely on it."
    },

    // faq
    "faq.kicker": {
        tr: "SSS",
        en: "FAQ"
    },
    "faq.title": {
        tr: "Sık Sorulan Sorular",
        en: "Frequently Asked Questions"
    },
    "faq.1.q": {
        tr: "AI Health Helper doktor mu, resmi teşhis koyuyor mu?",
        en: "Is AI Health Helper a doctor, does it give official diagnosis?"
    },
    "faq.1.a": {
        tr: "Hayır. AI Health Helper hiçbir şekilde doktor, hastane veya klinik değildir. Resmî teşhis koymaz, tedavi kararı vermez. Semptomlarının olası açıklamalarını ve hangi durumda doktora başvurmanın önemli olduğunu anlaman için bir <strong>eğitim aracı</strong> olarak tasarlanmıştır.",
        en: "No. AI Health Helper is in no way a doctor, hospital or clinic. It does not give official diagnosis or treatment decisions. It is designed as an <strong>educational tool</strong> to help you understand possible explanations of your symptoms and when it's important to see a doctor."
    },
    "faq.2.q": {
        tr: "Verilerim nasıl saklanıyor, gizlilik nasıl korunuyor?",
        en: "How is my data stored, how is privacy protected?"
    },
    "faq.2.a": {
        tr: "Sistem; semptom kayıtları, fotoğraflar ve notlar gibi verileri güvenli bir biçimde saklamayı hedefler. Kullanıcı, istediği zaman verilerini silebilir veya paylaşım izinlerini kısıtlayabilir. Amaç, gereksiz veri toplamadan kişiselleştirilmiş sağlık rehberliği sunmaktır.",
        en: "System aims to store data like symptom records, photos and notes securely. User can delete data or restrict sharing permissions anytime. Goal is to provide personalized health guidance without collecting unnecessary data."
    },
    "faq.3.q": {
        tr: "Uygulama hangi modülleri içeriyor?",
        en: "Which modules does the app include?"
    },
    "faq.3.a": {
        tr: "Genel sağlık, ruh sağlığı, kadın ve çocuk sağlığı, cilt analizi, ilaç ve hastalıklar hakkında temel bilgiler, ilk yardım ve acil durum yönlendirmeleri, wellness (uyku, beslenme, egzersiz, stres yönetimi) gibi modüller yer alır.",
        en: "It includes modules like general health, mental health, women's and children's health, skin analysis, basic information about drugs and diseases, first aid and emergency guidance, wellness (sleep, nutrition, exercise, stress management)."
    },
    "faq.4.q": {
        tr: "Acil durumda sadece bu uygulamaya güvenebilir miyim?",
        en: "Can I rely only on this app in emergency?"
    },
    "faq.4.a": {
        tr: "Hayır. Acil durumlarda <strong>öncelik her zaman 112 ve en yakın sağlık kuruluşudur</strong>. AI Health Helper, sana ilk yardım adımlarını ve risk işaretlerini hatırlatan bir rehber olabilir ama asla acil servisin yerini alamaz.",
        en: "No. In emergencies <strong>priority is always 112 and nearest healthcare facility</strong>. AI Health Helper can be a guide reminding you first aid steps and risk signs but can never replace emergency service."
    },
    "faq.5.q": {
        tr: "Uygulama hangi dilleri destekleyecek?",
        en: "Which languages will the app support?"
    },
    "faq.5.a": {
        tr: "Proje; Türkçe ve İngilizce başta olmak üzere çok dilli yapı için tasarlanmaktadır. Amaç, farklı ülkelerden kullanıcıların da aynı yapay zekâ destekli sağlık rehberliğinden faydalanabilmesidir.",
        en: "Project is designed for multilingual structure starting with Turkish and English. Goal is for users from different countries to benefit from same AI-powered health guidance."
    },

    // contact
    "contact.kicker": {
        tr: "İLETİŞİM",
        en: "CONTACT"
    },
    "contact.title": {
        tr: "Proje hakkında geri bildirim veya iş birliği talebi bırak",
        en: "Leave feedback or collaboration request about project"
    },
    "contact.info1": {
        tr: "AI Health Helper şu anda geliştirme / proje aşamasındadır. Akademik iş birlikleri, klinik mentorluk veya yatırım görüşmeleri için aşağıdaki formu doldurabilir ya da doğrudan e-posta ile ulaşabilirsiniz:",
        en: "AI Health Helper is currently in development / project stage. For academic collaborations, clinical mentorship or investment meetings you can fill form below or contact directly by email:"
    },
    "contact.info2Label": {
        tr: "E-posta:",
        en: "Email:"
    },

    // form
    "form.fullName.label": {
        tr: "Ad Soyad",
        en: "Full Name"
    },
    "form.email.label": {
        tr: "E-posta",
        en: "Email"
    },
    "form.age.label": {
        tr: "Yaş",
        en: "Age"
    },
    "form.userType.label": {
        tr: "Kendinizi nasıl tanımlarsınız?",
        en: "How would you describe yourself?"
    },
    "form.userType.option.empty": {
        tr: "Seçiniz...",
        en: "Select..."
    },
    "form.userType.option.student": {
        tr: "Öğrenci",
        en: "Student"
    },
    "form.userType.option.developer": {
        tr: "Geliştirici",
        en: "Developer"
    },
    "form.userType.option.investor": {
        tr: "Yatırımcı",
        en: "Investor"
    },
    "form.userType.option.other": {
        tr: "Diğer",
        en: "Other"
    },
    "form.message.label": {
        tr: "Kısa mesajınız",
        en: "Your short message"
    },
    "form.submit": {
        tr: "Gönder",
        en: "Send"
    },

    // form messages
    "form.error.fullName": {
        tr: "Lütfen geçerli bir ad soyad girin (en az 3 karakter).",
        en: "Please enter valid full name (at least 3 characters)."
    },
    "form.error.email": {
        tr: "Lütfen geçerli bir e-posta adresi girin.",
        en: "Please enter valid email address."
    },
    "form.error.age": {
        tr: "Bu formu kullanmak için en az 12 yaşında olmalısınız.",
        en: "You must be at least 12 years old to use this form."
    },
    "form.error.userType": {
        tr: "Lütfen kullanıcı tipinizi seçin.",
        en: "Please select your user type."
    },
    "form.error.message": {
        tr: "Lütfen en az 10 karakterlik bir mesaj yazın.",
        en: "Please write message of at least 10 characters."
    },
    "form.success": {
        tr: "Teşekkürler! Mesajınız başarıyla kaydedildi (demo).",
        en: "Thank you! Your message saved successfully (demo)."
    },
    "form.unexpectedError": {
        tr: "Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        en: "An unexpected error occurred. Please try again later."
    },

    // pdf error
    "pdf.error": {
        tr: "Üzgünüz, proje PDF dosyası açılamadı. Lütfen daha sonra tekrar deneyin.",
        en: "Sorry, project PDF file could not be opened. Please try again later."
    },

    // footer
    "footer.left": {
        tr: "© 2025 AI Health Helper · Eğitim amaçlı sağlık asistanı",
        en: "© 2025 AI Health Helper · Educational health assistant"
    },
    "footer.right": {
        tr: "Developed by Hasan İnciler",
        en: "Developed by Hasan İnciler"
    }
};

// hocam burada çeviri yardımcı fonksiyonu
function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[currentLanguage] || entry.tr || key;
}
