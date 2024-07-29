const phoneSelectAccumulator = document.getElementById("phoneSelect-Accumulator");
const accumulatorPriceDisplay1 = document.getElementById("accumulatorPriceDisplay1");
const accumulatorPriceDisplay2 = document.getElementById("accumulatorPriceDisplay2");
const accumulatorPhoneNameDisplay = document.getElementById("accumulatorPhoneNameDisplay");

phoneSelectAccumulator.addEventListener('change', function() {
    const selectedOption = phoneSelectAccumulator.options[phoneSelectAccumulator.selectedIndex];
    const selectedValue = selectedOption.value;
    const selectedText = selectedOption.textContent;
    const selectedName = selectedOption.getAttribute('data-name');
    const calculatorPricetable = document.querySelector(".calculator-pricetable");

    if (selectedValue == '0') {
        accumulatorPriceDisplay1.textContent = "Válassz egy típust az árhoz";
        accumulatorPriceDisplay2.textContent = "Válassz egy típust az árhoz";
        calculatorPricetable.classList.remove('show');
    }
    else {
        console.log('Kiválasztott egy típust') 
        const prices = selectedValue.split('-');
        const accumulatorPrice1 = parseInt(prices[0], 10).toLocaleString('hu-HU');
        const accumulatorPrice2 = parseInt(prices[1], 10).toLocaleString('hu-HU');

        calculatorPricetable.classList.remove('show');
        calculatorPricetable.classList.add('show');

        accumulatorPriceDisplay1.textContent = `${accumulatorPrice1} Ft`;
        accumulatorPriceDisplay2.textContent = `${accumulatorPrice2} Ft`; 
        accumulatorPhoneNameDisplay.textContent = selectedName;

        console.log(`Selected phone: ${selectedName}`);
    }

});