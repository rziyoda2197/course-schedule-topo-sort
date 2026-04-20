function canFinish(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []);
    const visited = new Array(numCourses).fill(false);
    const recursionStack = new Array(numCourses).fill(false);

    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (hasCycle(i, graph, visited, recursionStack)) {
                return false;
            }
        }
    }

    return true;
}

function hasCycle(node, graph, visited, recursionStack) {
    visited[node] = true;
    recursionStack[node] = true;

    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            if (hasCycle(neighbor, graph, visited, recursionStack)) {
                return true;
            }
        } else if (recursionStack[neighbor]) {
            return true;
        }
    }

    recursionStack[node] = false;
    return false;
}
```

Kodda quyidagilar mavjud:

- `canFinish` funksiyasi kurslar soni va old shartlari massivi orqali barcha kurslarni o‘qish mumkinligini tekshiradi.
- `graph` massivi kurslar orasidagi bog'lanishlarni saqlaydi.
- `visited` massivi har bir kursni o‘qishdan oldin o‘qilganligini tekshiradi.
- `recursionStack` massivi har bir kursni o‘qishdan oldin recursion stackga qo‘yilganligini tekshiradi.
- `hasCycle` funksiyasi har bir kursda sikl borligini tekshiradi.
