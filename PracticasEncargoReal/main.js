const modal = document.getElementById('productModal');

const backgroundMask = document.getElementById('inicio');

document.addEventListener('DOMContentLoaded', () => {
    backgroundMask.classList.add('unlocked');
});
        
        function openModal(imageSrc, title, price, ingredients, weight, recommendation, allergens) {
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalPrice').innerText = price;
            document.getElementById('modalIngredients').innerText = ingredients;
            document.getElementById('modalWeight').innerText = weight;
            document.getElementById('modalRecommendation').innerText = recommendation;
            
            const allergensContainer = document.getElementById('modalAllergensContainer');
            allergensContainer.innerHTML = ''; 
            
            if(allergens) {
                const allergenList = allergens.split(',').map(a => a.trim());
                allergenList.forEach(allergen => {
                    const pill = document.createElement('span');
                    pill.className = 'modal-allergen-pill';
                    pill.innerText = allergen;
                    allergensContainer.appendChild(pill);
                });
            } else {
                const pill = document.createElement('span');
                pill.style.fontSize = "0.8rem";
                pill.innerText = "Ninguno declarado";
                allergensContainer.appendChild(pill);
            }

            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }

        function closeModal() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); 
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        function filterProducts(category) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if(btn.innerText.toLowerCase().includes(category) || (category === 'todos' && btn.innerText === 'Todos')) {
                    // Visual match
                }
            });
            
            event.target.classList.add('active'); 
            let siblings = event.target.parentNode.children;
            for(let sib of siblings) {
                if(sib !== event.target) sib.classList.remove('active');
            }

            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                if (category === 'todos' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        // --- FUNCIÓN MENÚ MÓVIL ACTUALIZADA ---
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            const icon = document.querySelector('.mobile-toggle i');
            
            // Toggle clase activo en menú
            menu.classList.toggle('active');
            
            // Cambiar icono
            if(menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }