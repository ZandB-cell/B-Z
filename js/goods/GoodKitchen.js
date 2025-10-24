const kitchens = [
	{
		"id": "2",
		"title": "Ветторе ас үйі",
		"art": 28528,
		"price": 74350,
		"text": "Кішкентай ас үйге арналған дайын шешім, барлық қажетті нәрсе қарастырылған",
		"imgSrc": "kitchen(18).png"
	},
	{
		"id": "5",
		"title": "Джоконда ас үйі",
		"art": 288288,
		"price": 32300,
		"text": "Кішкентай ас үйге арналған дайын шешім, барлық қажетті нәрсе қарастырылған",
		"imgSrc": "kitchen(16).png"
	},
	{
		"id": "1",
		"title": "Маелла ас үйі",
		"art": 8588952,
		"price": 39000,
		"text": "Кішкентай ас үйге арналған дайын шешім, барлық қажетті нәрсе қарастырылған",
		"imgSrc": "kitchen(15).png"
	},
	{
		"id": "4",
		"title": "Ортлер ас үйі",
		"art": 928854,
		"price": 43000,
		"text": "Өз өлшемдеріңізге қарай көпфункционалды гарнитур",
		"imgSrc": "kitchen(13).png"
	},
	{
		"id": "3",
		"title": "Ортлер ас үйі",
		"art": 24876,
		"price": 51000,
		"text": "Ортлер ас үй гарнитурының бұрыштық нұсқасы",
		"imgSrc": "kitchen(14).png"
	},
	{
		"id": "8",
		"title": "Гавия ас үйі",
		"art": 958328,
		"price": 44500,
		"text": "Автоматты жабылғыштары бар асүй гарнитуры",
		"imgSrc": "kitchen(19).png"
	},
	{
		"id": "0",
		"title": "Фебо ас үйі",
		"art": 246388,
		"price": 51200,
		"text": "Заманауи ас үй гарнитуры, өз өлшемдеріңізге сай",
		"imgSrc": "kitchen(21).png"
	},
	{
		"id": "7",
		"title": "Мармолада ас үйі",
		"art": 2828528,
		"price": 46800,
		"text": "Классикалық ас үй заманауи функцияларымен",
		"imgSrc": "kitchen(23).png"
	},
	{
		"id": "6",
		"title": "Гэлакси ас үйі",
		"art": 288382248,
		"price": 67300,
		"text": "Аралдық жылтыр ас үй",
		"imgSrc": "kitchen(20).png"
	},
	{
		"id": "9",
		"title": "Стельвио ас үйі",
		"art": 2722858,
		"price": 81300,
		"text": "Мраморлы беті және аралы бар гарнитур",
		"imgSrc": "kitchen(12).png"
	},
    {
		"id": "94",
		"title": "Спэйс ас үйі",
		"art": 2722858,
		"price": 78300,
		"text": "Мраморлы беті және аралы бар гарнитур",
		"imgSrc": "kitchen(22).png"
	}
]


let kitchenItem = ''

let kitchenCard = document.getElementById('kitchenCard')
kitchens.forEach ((kitchen) => {
    kitchenItem +=
    `
	<div class="products-item" data-id="${kitchen.id}">
		<div class="products-item-img"> 
			<img src="./img/items/kitchen/${kitchen.imgSrc}" alt="Кешіріңіз..." class="productImg">
		</div>

		<div class="products-item-title ">${kitchen.title}</div>
		<div class="price__weight">арт: ${kitchen.art}</div>
		<div class="products-item-text">${kitchen.text}</div>

		<div class="details-wrapper">
			<div class="items counter-wrapper">
				<div class="items__control" data-action="minus">-</div>
				<input type="number" min="1" max="200" value="1" id="amountInput" class="items__current"  data-counter>
				<div class="items__control" data-action="plus">+</div>
			</div>

			<div class="price">
				<div class="price__currency">${kitchen.price} ₸</div>
			</div>
		</div>

		<div class="products-action">
			<button data-cart class="button glow-on-hover product-button"> Себетке</button>
		</div>
		<div class="price__weight">Қосылған күні: ${dataUpdate}</div>
	</div>

    `
})
kitchenCard.insertAdjacentHTML('beforeend', kitchenItem);
