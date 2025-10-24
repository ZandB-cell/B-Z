const chairs = [
	{
		"id": "02",
		"title": "Ас үйге арналған орындық",
		"art": 288528,
		"price": 1450,
		"text": "Ағаш аяқтарында жұмсақ ас үй орындық",
		"imgSrc": "chair(2).png"
	},
	{
		"id": "05",
		"title": "Ас үй орындық (пластик)",
		"art": 282388,
		"price": 1200,
		"text": "Металл тіреулері бар пластик орындық",
		"imgSrc": "chair(5).png"
	},
	{
		"id": "01",
		"title": "Жұмсақ ас үй орындық",
		"art": 8952,
		"price": 1900,
		"text": "Ауыстырылатын қаптамасы мен жастығы бар жұмсақ орындық",
		"imgSrc": "chair(1).png"
	},
	{
		"id": "04",
		"title": "Жартылай сфера орындық",
		"art": 952044,
		"price": 2300,
		"text": "Үйде және кеңседе демалуға өте ыңғайлы",
		"imgSrc": "chair(4).png"
	},
	{
		"id": "03",
		"title": "Офис орындық",
		"art": 245678,
		"price": 1900,
		"text": "Тұтқыш механизмі бар айналмалы офис орындық",
		"imgSrc": "chair(3).png"
	},
	{
		"id": "08",
		"title": "Кресло-орындық",
		"art": 95348,
		"price": 2200,
		"text": "Ауыстырылатын қаптамасы бар жұмсақ ыңғайлы кресло",
		"imgSrc": "chair(8).png"
	},
	{
		"id": "10",
		"title": "«Comfi» орындық",
		"art": 24856388,
		"price": 3300,
		"text": "Биік арқалықты аяқтық кресло-орындық",
		"imgSrc": "chair(10).png"
	},
	{
		"id": "07",
		"title": "«Comfi» орындық (сұр)",
		"art": 2828528,
		"price": 3000,
		"text": "Сұр түсті тіреуіштері бар жұмсақ орындық",
		"imgSrc": "chair(7).png"
	},
	{
		"id": "06",
		"title": "«Arto» орындық",
		"art": 2885248,
		"price": 3900,
		"text": "Оюлы бүйір бөліктері бар биік аяқтық орындық",
		"imgSrc": "chair(6).png"
	},
	{
		"id": "09",
		"title": "«Leak» орындық (оюлы)",
		"art": 289858,
		"price": 5300,
		"text": "Қолмен жасалған күміс түсті оюлы орындық",
		"imgSrc": "chair(9).png"
	}
]


let cardItem = ''
let chairCard = document.getElementById('chairCard')
chairs.forEach ((chair) => {
    cardItem +=
    `

    <div class="products-item" data-id="${chair.id}">
                    <div class="products-item-img"> 
                        <img src="./img/items/chairs/${chair.imgSrc}" alt="Кешіріңіз..." class="productImg">
                    </div>

                    <div class="products-item-title ">${chair.title}</div>
                    <div class="price__weight">арт: ${chair.art}</div>
                    <div class="products-item-text">${chair.text}</div>

                    <div class="details-wrapper">
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${chair.price} ₸</div>
                        </div>
                    </div>

                    <div class="products-action">
                        <button data-cart class="button glow-on-hover product-button"> Себетке</button>
                    </div>
					<div class="price__weight">Қосылған күні: ${dataUpdate}</div>
                </div>

    `
})
chairCard.insertAdjacentHTML('beforeend', cardItem);
