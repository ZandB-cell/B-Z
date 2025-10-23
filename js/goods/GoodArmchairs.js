const armchairs = [
	{
		"id": "002",
		"title": "«Softy» креслосы (жалбыз түсті)",
		"art": 2754628,
		"price": 2350,
		"text": "Бірнеше түсте ұсынылған жұмсақ аяқтық кресло",
		"imgSrc": "armchair(10).png"
	},
	{
		"id": "005",
		"title": "«Softy» креслосы (көк түсті)",
		"art": 2856788,
		"price": 2350,
		"text": "Бірнеше түсте ұсынылған жұмсақ аяқтық кресло",
		"imgSrc": "armchair(8).png"
	},
	{
		"id": "001",
		"title": "«Softy» креслосы (ақ түсті)",
		"art": 85654952,
		"price": 2350,
		"text": "Бірнеше түсте ұсынылған жұмсақ аяқтық кресло",
		"imgSrc": "armchair(6).png"
	},
	{
		"id": "004",
		"title": "«Softy» креслосы (қызғылт түсті)",
		"art": 952684,
		"price": 2350,
		"text": "Бірнеше түсте ұсынылған жұмсақ аяқтық кресло",
		"imgSrc": "armchair(7).png"
	},
	{
		"id": "003",
		"title": "Тіреуішсіз кресло",
		"art": 24585876,
		"price": 3500,
		"text": "Жарқын заманауи тіреуішсіз кресло",
		"imgSrc": "armchair(3).png"
	},
	{
		"id": "008",
		"title": "«Dreams» креслосы",
		"art": 663348,
		"price": 4800,
		"text": "Жұмсақ ыңғайлы алынбалы қаптамасы бар кресло",
		"imgSrc": "armchair(9).png"
	},
	{
		"id": "010",
		"title": "Трансформер креслосы",
		"art": 2489568,
		"price": 4300,
		"text": "Биік арқалықты аяқтық орындық-кресло",
		"imgSrc": "armchair(5).png"
	},
	{
		"id": "007",
		"title": "Кресло-төсек",
		"art": 2643528,
		"price": 6300,
		"text": "Жайылатын механизмі және алынбалы қаптамасы бар кресло",
		"imgSrc": "armchair(4).png"
	},
	{
		"id": "006",
		"title": "Бақ креслосы",
		"art": 222248,
		"price": 1900,
		"text": "Баққа арналған өрілген пластик кресло",
		"imgSrc": "armchair(2).png"
	},
	{
		"id": "009",
		"title": "Өрілген кресло",
		"art": 292548,
		"price": 2300,
		"text": "Алынбалы қаптамасы бар өрілген кресло",
		"imgSrc": "armchair(1).png"
	}
]


let armchairItem = ''

let armItem = document.getElementById('armchairCard')
armchairs.forEach ((armchair) => {
    armchairItem +=
    `
	<div class="products-item" data-id="${armchair.id}">
		<div class="products-item-img"> 
			<img src="./img/items/armchairs/${armchair.imgSrc}" alt="Кешіріңіз..." class="productImg">
		</div>

		<div class="products-item-title ">${armchair.title}</div>
		<div class="price__weight">арт: ${armchair.art}</div>
		<div class="products-item-text">${armchair.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${armchair.price} ₸</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button" type="button"> Себетке</button>
		</div>
		<div class="price__weight">Қосылған күні: ${dataUpdate}</div>
	</div>

    `
})
armItem.insertAdjacentHTML('beforeend', armchairItem);
