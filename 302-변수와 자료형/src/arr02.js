const todos = ['우유구매', '업무메일','코드실습']; //0 1 2
todos.push("저녁식사"); // 3

todos[10] = "제주도 귤";

for(let i=0; i<todos.length;i++) {
    console.log(todos[i]);
}