function submitOrder() {
    const customerName = document.getElementById("nameInput").value;
    const drink = document.getElementById("drinkSelect").value;
    const orderList = document.getElementById("ordersUl");

    // orderList.innerText = `😍 ${customerName} - 🥤 ${drink}`;

    const newOrder = document.createElement("li");
    newOrder.innerText = `😍 ${customerName} - 🥤 ${drink}`;

    //appendChild():برای اضافه کردن انواع المان کامنت و محتوای متنی به عنوان فرزند
    orderList.appendChild(newOrder);
}