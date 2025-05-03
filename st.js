alert("اهلا وسهلا بكم يسعدنا وجودكم في مطعمنا تجربة شهية!❤");

const prices = {
    'كبسة لحم': 21,
    'كبسة سمك': 25,
    'برياني خضار': 23,
    'عصير برتقال': 7,
    'برياني لحم': 22,
    'برجر لحم': 11,
    'بطاطس مقلية': 5,
    'ساندويتش زنجر': 11,
    'برجر سمك': 12,
    'كبسة دجاج': 20,
    'عصير فراولة': 9,
    'عصير اناناس': 5,
    'كوكتيل فواكة': 10,
    'عصير ليمون': 6,
    'عصير مانجو': 8,
    'برجر تونة': 13,
    'برجر دجاج': 14,
    'كبسة لخم': 24,
    
};

let total = 0;

function addToCart(itemName) {
    const cartItems = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.textContent = itemName + " - $" + prices[itemName];
    cartItems.appendChild(li);
    total += prices[itemName] || 0;
    updateTotal();
}

function updateTotal() {
    let totalDiv = document.getElementById("cart-total");
    if (!totalDiv) {
        totalDiv = document.createElement("div");
        totalDiv.id = "cart-total";
        totalDiv.style.marginTop = "10px";
        document.getElementById("cart").appendChild(totalDiv);
    }
    totalDiv.textContent = "الإجمالي: $" + total;
}

 
  
  
