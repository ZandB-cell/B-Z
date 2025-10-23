const wardrobes = [
	{
		"id": "2",
		"title": "«Classic» купе шкафы",
		"art": 9958,
		"price": 45600,
		"text": "Қосымша сөрелері бар классикалық сақтау жүйесі",
		"imgSrc": "ward(1).png"
	},
	{
		"id": "5",
		"title": "«Uni» купе шкафы",
		"art": 2854,
		"price": 36500,
		"text": "Айна есігі бар опциялы купе шкаф",
		"imgSrc": "ward(5).png"
	},
	{
		"id": "1",
		"title": "«All» сақтау жүйесі",
		"art": 818952,
		"price": 73000,
		"text": "Бүкіл қабырға бойымен сақтау жүйесі (тек тапсырыспен)",
		"imgSrc": "ward(4).png"
	},
	{
		"id": "4",
		"title": "«Softy» гардеробы",
		"art": 82784,
		"price": 23500,
		"text": "Киім ілетін штангасы бар үш кең бөлім",
		"imgSrc": "ward(6).png"
	},
	{
		"id": "3",
		"title": "«Extra» гардеробы",
		"art": 8828846,
		"price": 61000,
		"text": "Қосымша сөрелері бар кең гардероб",
		"imgSrc": "ward(9).png"
	},
	{
		"id": "8",
		"title": "Аяқ киімге арналған шкаф",
		"art": 8248,
		"price": 29000,
		"text": "Аяқ киім мен аксессуарларға арналған есігі ашылатын шкаф",
		"imgSrc": "ward(3).png"
	},
	{
		"id": "0",
		"title": "Көйлек шкабы",
		"art": 7889568,
		"price": 33000,
		"text": "Сөрелері бар көйлек шкабы. Сөре мен штанга орналасуы айна тәрізді болуы мүмкін",
		"imgSrc": "ward(8).png"
	},
	{
		"id": "7",
		"title": "Сақтау шкафы",
		"art": 2693988,
		"price": 22000,
		"text": "Ағаш шкаф есіктерімен. Жоғарғы бөлік те есіктермен жабылуы мүмкін",
		"imgSrc": "ward(10).png"
	},
	{
		"id": "6",
		"title": "«Прованс» трюмосы",
		"art": 952632,
		"price": 39000,
		"text": "Аяқта тұратын көйлек шкафы. Киімге арналған штанга және сөрелермен жабдықталған",
		"imgSrc": "ward(7).png"
	},
	{
		"id": "9",
		"title": "«Магнум» айнасы бар шкаф",
		"art": 2763348,
		"price": 54000,
		"text": "Алынбалы қаптамасы бар өрілген кресло",
		"imgSrc": "ward(2).png"
	}
]


let wardItem = ''

let wardrobeItem = document.getElementById('wardCard')
wardrobes.forEach ((ward) => {
    wardItem +=
    `
	<div class="products-item" data-id="${ward.id}">
		<div class="products-item-img"> 
			<img src="./img/items/wardrobe/${ward.imgSrc}" alt="Кешіріңіз..." class="productImg">
		</div>

		<div class="products-item-title ">${ward.title}</div>
		<div class="price__weight">арт: ${ward.art}</div>
		<div class="products-item-text">${ward.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${ward.price} ₸</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> Себетке</button>
		</div>
		<div class="price__weight">Қосылған күні: ${dataUpdate}</div>
	</div>

    `
})
wardrobeItem.insertAdjacentHTML('beforeend', wardItem);
