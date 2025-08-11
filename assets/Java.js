const orderList = document.getElementById("ordersUl");
const drinkText = document.getElementById("drinkText");
const errorBox = document.getElementById("errorMsg");
const customerName = document.getElementById("nameInput");
const drink = document.getElementById("drinkSelect");

function submitOrder() {
    const customerNameValue = customerName.value.trim();
    const drinkValue = drink.value;

    // orderList.innerText = `😍 ${customerNameValue} - 🥤 ${drinkValue}`;
    
    if (customerNameValue === "" || !drinkValue) {
        errorBox.innerText = "لطفا نام و نوشیدنی را وارد کنید! 🙄";
    } else {
        errorBox.textContent = "";
        drinkText.innerText = `انتخاب شما : ${drinkValue}`;
    }
    
    // ایجاد یک آیتم لیست جدید
    // const newOrder = document.createElement("li");
    // newOrder.innerText = `😍 ${customerNameValue} - 🥤 ${drinkValue}`;
    //appendChild():برای اضافه کردن انواع المان کامنت و محتوای متنی به عنوان فرزند
    // orderList.appendChild(newOrder);

    //append():اضافه به انتها
    //prepend():اضافه به ابتدا

    orderList.innerHTML = `<li> 😍 ${customerNameValue} - 🥤 ${drinkValue}</li>`

    //پاک کردن ورودی ها
    customerName.value = "";
    drink.value = "";
}

function toggleTheme() {
    const card = document.getElementById("drinkCard");
    card.classList.toggle("dark");
}

//innerHtml:پراپرتی شبیه به innerText که توسط آن المانهای اچ تی ام ال داخل تگ را تغییر یا نمایش داد

// function reset() {
    // orderList.innerHTML = "";
    // orderList.replaceChildren();
    //متدی برای جایگزین کردن المان و محتوا به جای المان های قبلی و امنیت و سرعت بالاتری نسبت به اینر اچ تی ام ال 
// }

const reset = ()=> orderList.replaceChildren();