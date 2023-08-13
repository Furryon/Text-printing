//Для одной линии масиива
/* const text = ["Привет Всем! Хорошего дня!"];
let count = 0;
let out = "";
let line = 0;
let out2 = document.querySelector(".content");
function animate() {
  let interval = setTimeout(function () {
    out += text[line][count];
    out2.innerHTML = out;
    count++;
    if (count >= text[line].length) {
      count = 0;
      clearTimeout(interval);
      return true;
    }
    animate();
  }, 160);
}
animate(); */

//Для двух и более линий массива
const text = ["Привет Всем! ", "Хорошего дня!"]; //У массива есть своя линия [line] и номер под которым он стоит [count]
let count = 0;
let out2 = "";
let line = 0;
let out = document.querySelector(".content2");
function animate() {
  let interval = setTimeout(function () {
    out2 += text[line][count]; //Добавление в массив out2 по одной букве (+= значит сумма букву, чтобы выводилась сумма букв=слово, если просто =, то будет по одной букве выводить, а прерыдущую скрывать)
    out.innerHTML = out2; // В наш контейнер синий на сайте, добавляем массив с буквами
    count++; // Чтобы очереднсть букв росла, увеличиваем count на 1, т.е 1,2,3,4,5
    if (count >= text[line].length) { //Делаем условие, если номер букв[1, 2, 3, 4, 5] равен длине  троки массива всех букв, то обнуляем count, отчёт заново начнётся, и чтобы перейти на слудующую строчку, пишем line++  
      count = 0;
      line++;
    }
    if (line == text.length) { //Если мы дойдём до последней линии (у нас 0 и 1 поэтому вначале line = 0, потом 1 и когда длина равна длине массива(у нас два значения 0 и 1),то останавливаем тайм аут и возвращаем true, только тогда остановится тайм аут.
      clearTimeout(interval);
      return true;
    }
    animate();//Вызываем эту функцию каждый раз автоматический
  }, 163);
}
animate();
