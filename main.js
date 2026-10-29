// 1. بنمسك الشاشة (Display) عشان نكتب فيها الأرقام
const display = document.getElementById("display");

// 2. بنمسك كل الأزرار اللي واخدة الكلاس "btn"
const buttons = document.querySelectorAll(".btn");

// 3. بنلف (Loop) على كل زرار من الأزرار دي
buttons.forEach(button => {
    
    // 4. بنحط "مستمع للأحداث" (Event Listener).. يعني بنقول للزرار: "لما حد يدوس عليك، نفذ الكلام اللي جوه"
    button.addEventListener("click", () => {
        
        // 5. بنجيب النص اللي مكتوب على الزرار اللي اتضغط عليه (مثلاً "5" أو "+" أو "=")
        const value = button.innerText;

        // 6. لو الزرار اللي اتضغط هو "=" (يعني عايز يحسب النتيجة)
        if (value === "=") {
            try {
                // بنستخدم eval عشان تحسب النص اللي في الشاشة (مثلاً "5+3" تحولها لـ 8)
                display.value = eval(display.value);
            } catch {
                // لو حصل خطأ (زي 5+++5)، بنكتب "Error" في الشاشة بدل ما الصفحة تهنج
                display.value = "Error";
            }
        } 
        
        // 7. لو الزرار اللي اتضغط هو "C" (يعني عايز يمسح الشاشة)
        else if (value === "C") {
            display.value = ""; // بنخلي الشاشة فاضية
        } 
        
        // 8. لو الزرار هو "." (عشان منعش إنه يحط أكتر من نقطة في نفس الرقم)
        else if (value === ".") {
            // بنقسم الشاشة على العمليات الحسابية، وبناخد آخر رقم (اللي هو اللي بيتكتب دلوقتي)
            const currentNumber = display.value.split(/[+\-*/]/).pop();
            
            // لو الرقم الحالي مفيهوش "."، نسمح له يحط النقطة
            if (!currentNumber.includes(".")) {
                // لو الرقم فاضي، بيحط "0."، لو فيه أرقام بيحط النقطة عادي
                display.value += currentNumber ? "." : "0.";
            }
        } 
        
        // 9. لو الزرار أي حاجة تانية (رقم أو عملية حسابية زي + أو -)
        else {
            // لو الشاشة كان فيها "Error" من عملية قديمة، بنمسحها أول ما يدوس رقم جديد
            if (display.value === "Error") {
                display.value = "";
            }
            // بنضيف القيمة الجديدة (الرقم أو العملية) على اللي مكتوب في الشاشة
            display.value += value;
        }
    });
});