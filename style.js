function createFlyText() {
    const text = document.createElement('p');
    text.classList.add('fly-text');
    text.textContent = 'I love You♥️';

    // กำหนดตำแหน่ง X แบบสุ่ม
    const randomX = Math.random() * window.innerWidth;
    text.style.left = `${randomX}px`;

    // เริ่มจากล่างจอ
    text.style.bottom = `-30px`;

    // สุ่มความเร็ว (ระยะเวลา animation)
    const duration = 4 + Math.random() * 4; // 4 - 8 วินาที
    text.style.animationDuration = `${duration}s`;

    document.body.appendChild(text);

    // ลบ element ทิ้งหลังลอยขึ้นเสร็จ
    setTimeout(() => {
        text.remove();
    }, duration * 1000);
}

// สร้างข้อความลอยซ้ำ ๆ ทุก 300ms
setInterval(createFlyText, 100);
