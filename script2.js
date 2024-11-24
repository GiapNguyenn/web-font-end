const productContainer=[...document.querySelectorAll('.product-container')]
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]
const preBtn = [...document.querySelectorAll('.pre-btn')]

productContainer.forEach((item , i)=> {
    let containerDimesions=item.getBoundingClientRect();
    let containerWith =containerDimesions.width;
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWith;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWith;
    })

})
// Hàm auto-scroll
const productContainers = [...document.querySelectorAll('.product-container')];

productContainers.forEach((container) => {
    let scrollAmount = 0; // Giá trị cuộn ban đầu
    const scrollInterval = setInterval(() => {
        // Cuộn container
        container.scrollLeft += 2; // Tăng giá trị này để cuộn nhanh hơn
        
        // Kiểm tra nếu đã cuộn hết chiều rộng
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // Quay lại từ đầu
        }
    }, 50); // Tốc độ cuộn (ms)
});
productContainers.forEach((container) => {
    let isDragging = false; // Trạng thái kéo
    let startX; // Vị trí chuột ban đầu
    let scrollLeft; // Vị trí cuộn ban đầu

    // Ngăn hành động kéo trên ảnh
    container.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => {
            e.preventDefault(); // Ngừng hành động kéo ảnh
        });
    });

    // Bắt đầu kéo khi nhấn chuột trái (button 0)
    container.addEventListener('mousedown', (e) => {
        if (e.button === 0) { // Kiểm tra chuột trái (button === 0)
            isDragging = true; // Bật trạng thái kéo
            container.classList.add('dragging');
            startX = e.pageX - container.offsetLeft; // Ghi nhận vị trí chuột ban đầu
            scrollLeft = container.scrollLeft; // Lưu vị trí cuộn ban đầu
        }
    });
    // Xử lý khi chuột di chuyển
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return; // Không kéo nếu không nhấn chuột trái
        e.preventDefault(); // Ngăn hành vi mặc định
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Điều chỉnh tốc độ kéo (nhân với 2 để nhạy hơn)
        container.scrollLeft = scrollLeft - walk; // Cuộn container
    });
    // Kết thúc kéo khi thả chuột
    container.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false; // Tắt trạng thái kéo khi thả chuột
            container.classList.remove('dragging');
        }
    });
    // Ngừng kéo khi chuột rời khỏi container
    container.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false; // Tắt trạng thái kéo khi chuột rời khỏi container
            container.classList.remove('dragging');
        }
    });
    // Ngừng kéo khi thả chuột ngoài container (đảm bảo)
    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false; // Đảm bảo trạng thái kéo tắt khi thả chuột ngoài
            container.classList.remove('dragging');
        }
    });
});
const nextButtons = [...document.querySelectorAll('.nxt-btn')];

productContainers.forEach((container, index) => {
    setInterval(() => {
        // Tự động chuyển sang ảnh tiếp theo sau 10 giây
        let containerWidth = container.getBoundingClientRect().width;
        container.scrollLeft += containerWidth; // Cuộn ngang container

        // Nếu cuộn hết ảnh, quay lại ảnh đầu tiên
        if (container.scrollLeft + containerWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        }
    }, 10000); // 10 giây (10,000 milliseconds)
});
const slider = document.querySelector('.slider');
const brands = document.querySelectorAll('.brand');
let currentIndex = 0;

function cloneBrands() {
  brands.forEach(brand => {
    const clonedBrand = brand.cloneNode(true);
    slider.appendChild(clonedBrand);
  });
}

cloneBrands(); // Clone brands when the page loads

// Slide the images
function slide() {
  currentIndex++;
  const brandWidth = document.querySelector('.brand').offsetWidth + 20; 
  const offset = -currentIndex * brandWidth;
  slider.style.transform = `translateX(${offset}px)`;

  if (currentIndex >= brands.length) {
    setTimeout(() => {
      currentIndex = 0;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(0px)`;
      setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }, 500);
  }
}

setInterval(slide, 1000);





