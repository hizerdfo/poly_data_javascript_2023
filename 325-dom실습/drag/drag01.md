# 드레그 01

JavaScript를 사용하여 `ul`의 `li` 요소를 드래그하여 위치를 변경하는 실습입니다.



## css 파트

```css
ul {
    display: inline-block;
    list-style-type: none; /* 리스트 마커를 제거하려면 추가합니다 */
    padding: 0;
    margin: 0;
}

ul li {
    display: inline-block; /* 리스트 항목을 가로로 배치합니다 */
    margin-right: 10px; /* 각 항목 사이의 여백을 조절합니다 */
    width: 100px;
    height: 100px;
    background-color: cadetblue;
}
.dragging {
    background-color: yellow;
}
```



## HTML 파트

```html
<ul id="sortable">
    <li draggable="true">아이템 1</li>
    <li draggable="true">아이템 2</li>
    <li draggable="true">아이템 3</li>
    <li draggable="true">아이템 4</li>
    <li draggable="true">아이템 5</li>
</ul>
```



## javascript 파트



```js
// 드래그 중인 요소와 이전 위치를 저장할 변수
let draggedElement = null;
let prevIndex = null;

// 드래그 시작할 때 호출되는 함수
function dragStart(event) {
  draggedElement = event.target;
  prevIndex = Array.from(draggedElement.parentNode.children).indexOf(draggedElement);
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/html", draggedElement.innerHTML);
  draggedElement.classList.add("dragging");
}

// 드래그 중일 때 호출되는 함수
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const targetElement = event.target.closest("li");
  if (targetElement && targetElement !== draggedElement) {
    const currentIndex = Array.from(targetElement.parentNode.children).indexOf(targetElement);
    if (currentIndex > prevIndex) {
      targetElement.parentNode.insertBefore(draggedElement, targetElement.nextSibling);
    } else {
      targetElement.parentNode.insertBefore(draggedElement, targetElement);
    }
    prevIndex = currentIndex;
  }
}

// 드래그 종료할 때 호출되는 함수
function dragEnd(event) {
  draggedElement.classList.remove("dragging");
  draggedElement = null;
  prevIndex = null;
}

// ul 요소에 이벤트 리스너 등록
const sortable = document.getElementById("sortable");
sortable.addEventListener("dragstart", dragStart);
sortable.addEventListener("dragover", dragOver);
sortable.addEventListener("dragend", dragEnd);
```



위의 코드를 사용하면 `ul`의 `li` 요소를 드래그하여 위치를 변경할 수 있습니다. `dragStart` 함수는 드래그가 시작되었을 때 호출되며, 드래그 중일 때는 `dragOver` 함수가 호출됩니다. 드래그가 종료되면 `dragEnd` 함수가 호출됩니다. 이를 통해 드래그 중인 요소의 위치를 변경할 수 있습니다.



